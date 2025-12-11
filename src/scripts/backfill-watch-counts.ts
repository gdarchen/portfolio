#!/usr/bin/env tsx
/**
 * Backfill script to populate historical monthly counts in Notion database
 * This script queries the tech-watch database month-by-month from inception through November 30, 2025
 * and creates pages in the Watch Counts database.
 *
 * Usage:
 *   pnpm dlx tsx --env-file=.env.local src/scripts/backfill-watch-counts.ts
 *
 * Prerequisites:
 *   - NOTION_TOKEN must be set in .env.local
 *   - NOTION_DATABASE_ID (tech-watch database) must be set in .env.local
 *   - NOTION_COUNTS_DATABASE_ID (counts database) must be set in .env.local
 *   - Watch Counts database must be created with: Month (title), Count (number), Last Updated (date)
 */

import { config } from 'dotenv'

import { Client } from '@notionhq/client'

// Load environment variables from .env.local
config({ path: '.env.local' })

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

  console.log(
    `  Counting items for ${year}-${String(month).padStart(2, '0')}...`,
  )

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

  console.log(`    Found ${count} items`)
  return count
}

/**
 * Generate list of months from start to end (November 2025)
 */
function getMonthsToBackfill(
  startYear: number,
  startMonth: number,
): Array<{ year: number; month: number }> {
  const months: Array<{ year: number; month: number }> = []
  const endDate = new Date(2025, 10, 1) // November 2025 (month is 0-indexed)

  let currentYear = startYear
  let currentMonth = startMonth

  while (currentYear < 2025 || (currentYear === 2025 && currentMonth <= 11)) {
    months.push({ year: currentYear, month: currentMonth })

    currentMonth++
    if (currentMonth > 12) {
      currentMonth = 1
      currentYear++
    }
  }

  return months
}

async function main() {
  console.log('🚀 Starting backfill of watch counts...\n')

  // Adjust these values based on when your database started
  // For this example, let's assume it started in January 2023
  const START_YEAR = 2024
  const START_MONTH = 1

  const months = getMonthsToBackfill(START_YEAR, START_MONTH)
  const monthlyCounts: Record<string, number> = {}

  console.log(`📊 Processing ${months.length} months...\n`)

  for (const { year, month } of months) {
    const monthKey = `${year}-${String(month).padStart(2, '0')}`
    const count = await countItemsForMonth(year, month)
    monthlyCounts[monthKey] = count

    // Add a small delay to avoid rate limiting
    await new Promise((resolve) => setTimeout(resolve, 100))
  }

  console.log('\n📦 Monthly counts summary:')
  console.log(JSON.stringify(monthlyCounts, null, 2))

  const totalCount = Object.values(monthlyCounts).reduce(
    (sum: number, count: number) => sum + count,
    0,
  )
  console.log(`\n✅ Total items counted: ${totalCount}`)

  // Store in Notion Counts Database
  console.log('\n💾 Storing counts in Notion Watch Counts database...')

  try {
    let successCount = 0
    let errorCount = 0

    for (const [monthKey, count] of Object.entries(monthlyCounts)) {
      try {
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
          console.log(`  ✓ Updated ${monthKey}: ${count}`)
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
          console.log(`  ✓ Created ${monthKey}: ${count}`)
        }

        successCount++
        // Add delay to avoid rate limiting
        await new Promise((resolve) => setTimeout(resolve, 100))
      } catch (error) {
        errorCount++
        console.error(
          `  ✗ Failed to store ${monthKey}:`,
          error instanceof Error ? error.message : error,
        )
      }
    }

    console.log(
      `\n✅ Successfully stored ${successCount} months in Notion (${errorCount} errors)`,
    )
    console.log('\n🎉 Backfill complete!')

    if (errorCount > 0) {
      process.exit(1)
    }
  } catch (error) {
    console.error('❌ Error storing counts in Notion:', error)
    process.exit(1)
  }
}

main().catch((error) => {
  console.error('❌ Error running backfill:', error)
  process.exit(1)
})
