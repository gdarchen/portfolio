import { Client } from '@notionhq/client'

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
})

/**
 * Fetch historical counts from Notion Counts database
 */
async function getHistoricalCounts(): Promise<number> {
  let total = 0
  let hasMore = true
  let cursor: string | null = null

  while (hasMore) {
    const response = await notion.databases.query({
      database_id: process.env.NOTION_COUNTS_DATABASE_ID!,
      start_cursor: cursor ?? undefined,
      page_size: 100,
    })

    for (const page of response.results) {
      if ('properties' in page) {
        const countProperty = page.properties.Count
        if (
          countProperty?.type === 'number' &&
          typeof countProperty.number === 'number'
        ) {
          total += countProperty.number
        }
      }
    }

    hasMore = response.has_more
    cursor = response.next_cursor
  }

  return total
}

/**
 * Count items in Notion database for the current month
 */
async function countCurrentMonthItems(): Promise<number> {
  const now = new Date()
  const currentYear = now.getUTCFullYear()
  const currentMonth = now.getUTCMonth() + 1 // 1-indexed

  const startDate = new Date(Date.UTC(currentYear, currentMonth - 1, 1))
  const endDate = new Date(Date.UTC(currentYear, currentMonth, 1))

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
 * Get total count of watch resources (historical + current month)
 */
export async function getTotalCount(): Promise<number | undefined> {
  try {
    const historicalTotal = await getHistoricalCounts()
    const currentMonthCount = await countCurrentMonthItems()
    return historicalTotal + currentMonthCount
  } catch (error) {
    console.error('Error fetching watch count:', error)
    return undefined
  }
}

/**
 * Get detailed count breakdown
 */
export async function getCountDetails() {
  try {
    const historicalTotal = await getHistoricalCounts()
    const currentMonthCount = await countCurrentMonthItems()
    const totalCount = historicalTotal + currentMonthCount

    return {
      totalCount,
      historicalCount: historicalTotal,
      currentMonthCount,
      lastUpdated: new Date().toISOString(),
    }
  } catch (error) {
    console.error('Error fetching watch count:', error)
    throw error
  }
}
