import { NextRequest, NextResponse } from 'next/server'

import { Client } from '@notionhq/client'

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
})

/**
 * Count items in Notion database for a specific month
 */
async function countItemsForMonth(
  year: number,
  month: number,
): Promise<number> {
  const startDate = new Date(Date.UTC(year, month - 1, 1))
  const endDate = new Date(Date.UTC(year, month, 1))

  let count = 0
  let hasMore = true
  let cursor: string | null = null

  while (hasMore) {
    const response = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID!,
      start_cursor: cursor ?? undefined,
      page_size: 100,
      filter: {
        and: [
          {
            property: 'Done',
            checkbox: { equals: true },
          },
          {
            property: 'Created at',
            date: { on_or_after: startDate.toISOString() },
          },
          {
            property: 'Created at',
            date: { before: endDate.toISOString() },
          },
        ],
      },
    })

    count += response.results.length
    hasMore = response.has_more
    cursor = response.next_cursor
  }

  return count
}

/**
 * POST /api/cron/monthly-count
 *
 * Cron job triggered on the 1st of each month at midnight UTC.
 * Counts the previous month's items and creates/updates a page in the Notion Counts database.
 *
 * This endpoint is protected by Vercel Cron secret.
 */
export async function POST(request: NextRequest) {
  // Verify the request is from Vercel Cron
  const authHeader = request.headers.get('authorization')
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  try {
    // Calculate previous month
    const now = new Date()
    let prevYear = now.getUTCFullYear()
    let prevMonth = now.getUTCMonth() // 0-indexed, so this is actually previous month

    if (prevMonth === 0) {
      // If current month is January, previous month is December of previous year
      prevMonth = 12
      prevYear -= 1
    }

    const monthKey = `${prevYear}-${String(prevMonth).padStart(2, '0')}`

    console.log(`[Cron] Counting items for ${monthKey}...`)

    // Count previous month's items
    const count = await countItemsForMonth(prevYear, prevMonth)

    console.log(`[Cron] Found ${count} items for ${monthKey}`)

    // Check if page already exists for this month
    const existingPages = await notion.databases.query({
      database_id: process.env.NOTION_COUNTS_DATABASE_ID!,
      filter: {
        property: 'Month',
        title: { equals: monthKey },
      },
    })

    if (existingPages.results.length > 0) {
      // Update existing page
      const pageId = existingPages.results[0].id
      await notion.pages.update({
        page_id: pageId,
        properties: {
          Count: { number: count },
          'Last Updated': { date: { start: new Date().toISOString() } },
        },
      })
      console.log(`[Cron] Updated existing page for ${monthKey}: ${count}`)
    } else {
      // Create new page
      await notion.pages.create({
        parent: { database_id: process.env.NOTION_COUNTS_DATABASE_ID! },
        properties: {
          Month: { title: [{ text: { content: monthKey } }] },
          Count: { number: count },
          'Last Updated': { date: { start: new Date().toISOString() } },
        },
      })
      console.log(`[Cron] Created new page for ${monthKey}: ${count}`)
    }

    return NextResponse.json({
      success: true,
      monthKey,
      count,
      message: `Successfully counted and stored ${count} items for ${monthKey}`,
    })
  } catch (error) {
    console.error('[Cron] Error in monthly count job:', error)
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to process monthly count',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 },
    )
  }
}

/**
 * GET /api/cron/monthly-count
 *
 * Test endpoint to manually trigger the cron job.
 * Only available in development or with proper authorization.
 */
export async function GET(request: NextRequest) {
  // Only allow in development or with authorization
  if (
    process.env.NODE_ENV !== 'development' &&
    request.headers.get('authorization') !== `Bearer ${process.env.CRON_SECRET}`
  ) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  return POST(request)
}
