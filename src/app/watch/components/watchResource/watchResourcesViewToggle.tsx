'use client'

import { FC, useState } from 'react'
import { HiViewGrid, HiViewList } from 'react-icons/hi'

import type { WatchResource } from '../../types'

import WatchResources from './watchResources'
import WatchResourcesTable from './watchResourcesTable'

type Props = {
  initialResources: WatchResource[]
  initialNextPage?: string | null
}

type ViewMode = 'grid' | 'table'

const WatchResourcesViewToggle: FC<Props> = ({
  initialResources,
  initialNextPage,
}) => {
  const [viewMode, setViewMode] = useState<ViewMode>('grid')

  return (
    <div>
      {/* View Toggle */}
      <div className="mx-auto mt-6 mb-6 flex w-full max-w-[1400px] justify-center sm:justify-end">
        <div
          className="inline-flex rounded-lg border border-gray-200 bg-gray-50 p-1 dark:border-gray-700 dark:bg-gray-800"
          role="group"
        >
          <button
            type="button"
            onClick={() => setViewMode('grid')}
            className={`inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-semibold transition-all duration-200 ${
              viewMode === 'grid'
                ? 'bg-white text-blue-600 shadow-sm dark:bg-gray-700 dark:text-blue-400'
                : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100'
            }`}
          >
            <HiViewGrid className="size-4" />
            Grid
          </button>
          <button
            type="button"
            onClick={() => setViewMode('table')}
            className={`inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-semibold transition-all duration-200 ${
              viewMode === 'table'
                ? 'bg-white text-blue-600 shadow-sm dark:bg-gray-700 dark:text-blue-400'
                : 'text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100'
            }`}
          >
            <HiViewList className="size-4" />
            Table
          </button>
        </div>
      </div>

      {/* View Content */}
      <div className={viewMode === 'grid' ? 'px-8 sm:px-0' : ''}>
        {viewMode === 'grid' ? (
          <WatchResources
            initialResources={initialResources}
            initialNextPage={initialNextPage}
          />
        ) : (
          <WatchResourcesTable
            initialResources={initialResources}
            initialNextPage={initialNextPage}
          />
        )}
      </div>
    </div>
  )
}

export default WatchResourcesViewToggle
