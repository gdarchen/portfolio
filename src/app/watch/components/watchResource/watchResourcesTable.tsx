'use client'

import { FC, useState } from 'react'
import dynamic from 'next/dynamic'
import { HiOutlineDotsHorizontal } from 'react-icons/hi'
import {
  HiOutlineCalendar,
  HiOutlineDocumentText,
  HiOutlineGlobeAlt,
  HiOutlineLightBulb,
  HiOutlineTag,
} from 'react-icons/hi2'

import Badge from '@/components/badge/Badge'
import {
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  useReactTable,
  VisibilityState,
} from '@tanstack/react-table'

const Meteors = dynamic(() => import('@/components/cards/Meteors'), {
  ssr: false,
})
import Spinner from '@/components/spinner/Spinner'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { fetchWatchPages } from '@/lib/notion'

import { VariantMapping } from '../../constants/variantMapping'
import { transformWatchResourceToDTO } from '../../dto/watchResource.dto'
import type { WatchResource } from '../../types'

type Props = {
  initialResources: WatchResource[]
  initialNextPage?: string | null
}

const ResourceType: FC<{ type: WatchResource['type'] }> = ({ type }) => {
  const variantMapping = VariantMapping[type]
  const variant = variantMapping?.color ?? 'default'
  const emoji = variantMapping?.emoji ?? ''

  return (
    <Badge variant={variant}>
      {emoji}
      <span className="ml-1">{type}</span>
    </Badge>
  )
}

const Tldr: FC<{ parts: WatchResource['tldr'] }> = ({ parts }) => {
  function endsWithPunctuation(str: string): boolean {
    const punctuationRegex = /[.!?]$/
    return punctuationRegex.test(str)
  }

  return (
    <span className="text-xs">
      {parts?.map((part, index) => {
        const isLast = index + 1 === parts.length
        const needsDot = isLast && !endsWithPunctuation(part.plain_text)
        return (
          <span
            key={`${part.plain_text}_${index}`}
            className={
              part.annotations.code
                ? 'bg-code-light dark:bg-code m-0 rounded-xs px-1 py-px text-[90%] whitespace-break-spaces'
                : ''
            }
          >
            {part.plain_text}
            {needsDot && '.'}
          </span>
        )
      })}
    </span>
  )
}

const columns: ColumnDef<WatchResource>[] = [
  {
    accessorKey: 'title',
    header: () => (
      <div className="flex items-center gap-1.5">
        <HiOutlineDocumentText className="size-3.5" />
        <span>Title</span>
      </div>
    ),
    cell: ({ row }) => {
      const resource = row.original
      return (
        <div className="max-w-xs">
          <a
            href={resource.url}
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-gray-900 hover:text-blue-600 dark:text-blue-500! dark:hover:text-blue-400!"
          >
            {resource.title}
          </a>
        </div>
      )
    },
  },
  {
    accessorKey: 'tldr',
    header: () => (
      <div className="flex items-center gap-1.5">
        <HiOutlineLightBulb className="size-3.5" />
        <span>TL;DR</span>
      </div>
    ),
    cell: ({ row }) => {
      const tldr = row.original.tldr
      if (!tldr) {
        return <span className="text-gray-400">-</span>
      }
      return (
        <div className="flex items-center gap-2">
          <div className="line-clamp-2 max-w-md text-xs text-gray-700 dark:text-gray-400">
            <Tldr parts={tldr} />
          </div>
          <Popover>
            <PopoverTrigger asChild>
              <button
                className="group shrink-0 rounded-sm px-2 py-1 text-xs font-medium text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200"
                title="Show full TL;DR"
              >
                <span className="flex items-center gap-1">
                  <HiOutlineDotsHorizontal className="size-4" />
                  <span className="hidden sm:inline">more</span>
                </span>
              </button>
            </PopoverTrigger>
            <PopoverContent
              className="max-h-96 w-80 overflow-y-auto sm:w-96"
              align="center"
            >
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                  Full TL;DR
                </h4>
                <div className="text-xs text-gray-700 dark:text-gray-300">
                  <Tldr parts={tldr} />
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      )
    },
  },
  {
    accessorKey: 'type',
    header: () => (
      <div className="flex items-center gap-1.5">
        <HiOutlineTag className="size-3.5" />
        <span>Type</span>
      </div>
    ),
    cell: ({ row }) => (
      <div className="whitespace-nowrap">
        <ResourceType type={row.original.type} />
      </div>
    ),
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    accessorKey: 'source',
    header: () => (
      <div className="flex items-center gap-1.5">
        <HiOutlineGlobeAlt className="size-3.5" />
        <span>Source</span>
      </div>
    ),
    cell: ({ row }) => {
      const resource = row.original
      return (
        <div className="whitespace-nowrap">
          <Badge className="inline">
            {resource.source}
            {resource.subSource && (
              <span className="ml-2">{resource.subSource}</span>
            )}
          </Badge>
        </div>
      )
    },
  },
  {
    accessorKey: 'date',
    header: () => (
      <div className="flex items-center gap-1.5">
        <HiOutlineCalendar className="size-3.5" />
        <span>Date</span>
      </div>
    ),
    cell: ({ row }) => {
      const date = row.original.date
      return (
        <span className="text-xs text-gray-600 dark:text-gray-400">
          {new Date(date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          })}
        </span>
      )
    },
  },
]

const WatchResourcesTable: FC<Props> = ({
  initialResources,
  initialNextPage,
}) => {
  const [watchResources, setWatchResources] =
    useState<WatchResource[]>(initialResources)
  const [nextPageCursor, setNextPageCursor] = useState<
    string | null | undefined
  >(initialNextPage)
  const [isLoading, setIsLoading] = useState(false)
  const [hasNextPage, setHasNextPage] = useState(initialNextPage !== undefined)

  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = useState({})

  const table = useReactTable({
    data: watchResources,
    columns,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    manualPagination: true,
    state: {
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  const loadMoreResources = async () => {
    try {
      setIsLoading(true)
      const response = await fetchWatchPages(nextPageCursor)
      const resourcesOfPage = response.results.map(transformWatchResourceToDTO)
      setWatchResources([...watchResources, ...resourcesOfPage])
      setNextPageCursor(response.next_cursor)
      setHasNextPage(response.has_more)
    } catch (e) {
      console.error(e)
      throw e
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="mx-auto mt-8 w-full max-w-[1400px]">
      {/* Info bar */}
      <div className="mb-4 flex justify-end px-8 text-sm text-gray-600 sm:px-0 dark:text-gray-400">
        <div>
          Showing <span className="font-semibold">{watchResources.length}</span>{' '}
          resources
        </div>
      </div>

      <div className="overflow-x-auto pl-8 sm:pl-0">
        <div className="inline-block min-w-full pr-8 align-middle sm:pr-0">
          <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm dark:border-gray-700/60">
            <Table>
              <TableHeader>
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => {
                      return (
                        <TableHead key={header.id}>
                          {header.isPlaceholder
                            ? null
                            : flexRender(
                                header.column.columnDef.header,
                                header.getContext(),
                              )}
                        </TableHead>
                      )
                    })}
                  </TableRow>
                ))}
              </TableHeader>
              <TableBody>
                {table.getRowModel().rows?.length ? (
                  table.getRowModel().rows.map((row) => {
                    const resource = row.original
                    const isShiny = resource.shiny

                    return (
                      <TableRow
                        key={row.id}
                        data-state={row.getIsSelected() && 'selected'}
                        className={
                          isShiny
                            ? 'bg-linear-to-r from-purple-200 via-pink-200 to-purple-200 dark:from-purple-900/40 dark:via-pink-900/40 dark:to-purple-900/40'
                            : ''
                        }
                      >
                        {row.getVisibleCells().map((cell) => (
                          <TableCell key={cell.id}>
                            {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext(),
                            )}
                          </TableCell>
                        ))}
                      </TableRow>
                    )
                  })
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={columns.length}
                      className="h-24 text-center"
                    >
                      No results.
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>

      {/* Load More from API */}
      <div className="mt-8 flex items-center justify-center px-8 sm:px-0">
        {hasNextPage ? (
          <button
            className="border-primary bg-background-light text-primary dark:bg-background flex items-center justify-center rounded-sm border px-4 py-3 disabled:cursor-not-allowed disabled:border-gray-500 disabled:text-gray-500 sm:px-8 sm:py-4"
            disabled={isLoading}
            onClick={loadMoreResources}
          >
            {isLoading && <Spinner className="mr-2 [&>svg]:size-6" />}
            {isLoading ? 'Loading...' : 'Load more resources'}
          </button>
        ) : (
          <div className="text-sm text-gray-500 italic">
            All the content has been loaded!
          </div>
        )}
      </div>
    </div>
  )
}

export default WatchResourcesTable
