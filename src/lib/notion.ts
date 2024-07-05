'use server'

import { cache } from 'react'

import {
  SEARCH_RESOURCES_PAGE_SIZE,
  WATCH_RESOURCES_PAGE_SIZE,
} from '@/constants/globals'
import { Client } from '@notionhq/client'

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
})

export const fetchWatchPages = cache((cursor?: string | null) => {
  return notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID!,
    start_cursor: cursor ?? undefined,
    page_size: WATCH_RESOURCES_PAGE_SIZE,
    sorts: [
      { property: 'Date', direction: 'descending' },
      { property: 'Created at', direction: 'descending' },
    ],
    filter: {
      property: 'Done',
      checkbox: { equals: true },
    },
  })
})

export const searchWatchPage = cache((query: string) => {
  return notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID!,
    page_size: SEARCH_RESOURCES_PAGE_SIZE,
    sorts: [
      { property: 'Name', direction: 'descending' },
      { property: 'Created at', direction: 'descending' },
    ],
    filter: {
      or: [
        {
          property: 'title',
          title: { contains: query },
        },
        {
          property: 'tl;dr',
          title: { contains: query },
        },
      ],
    },
  })
})
