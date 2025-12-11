import { NextResponse } from 'next/server'

import { getCountDetails } from '@/lib/watchCount'

export const revalidate = 3600 // Revalidate every hour (ISR)

/**
 * GET /api/watch/count
 *
 * Returns the total count of watch resources:
 * - Historical counts from Notion Counts database (all completed months)
 * - Current month count from tech-watch database (dynamically counted)
 */
export async function GET() {
  try {
    const details = await getCountDetails()
    return NextResponse.json(details)
  } catch (error) {
    console.error('Error fetching watch count:', error)
    return NextResponse.json(
      {
        error: 'Failed to fetch watch count',
        message: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 },
    )
  }
}
