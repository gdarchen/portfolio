'use client'

import { FC, useState } from 'react'

import Spinner from '@/components/spinner/Spinner'
import { fetchWatchPages } from '@/lib/notion'

import { transformWatchResourceToDTO } from './dto/watchResource.dto'
import { groupWatchResourcesByDate, groupWatchResourcesByMonth } from './utils'
import WatchResource from './watchResource'

type Props = {
  initialResources: WatchResource[]
  initialNextPage?: string | null
}

const WatchResources: FC<Props> = ({ initialResources, initialNextPage }) => {
  const [watchResources, setWatchResources] =
    useState<WatchResource[]>(initialResources)
  const [nextPageCursor, setNextPageCursor] = useState<
    string | null | undefined
  >(initialNextPage)
  const [isLoading, setIsLoading] = useState(false)
  const [hasNextPage, setHasNextPage] = useState(initialNextPage !== undefined)

  const resourcesByMonth = groupWatchResourcesByMonth(watchResources)

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
    <div>
      {/* Month */}
      {Object.entries(resourcesByMonth).map(([month, resourcesForMonth]) => {
        const resourcesByWeek = groupWatchResourcesByDate(resourcesForMonth)
        return (
          <div key={month} className="mt-16">
            <h3 className="font-header text-xl font-bold text-primary">
              {month}
            </h3>
            <div className="h-[0.5px] w-full bg-gray-400" />

            {/* Week */}
            {Object.entries(resourcesByWeek).map(([week, resources]) => {
              return (
                <div key={week} className="mt-8">
                  <h4 className="font-header text-base font-medium text-secondary">
                    {week}
                  </h4>
                  <div className="mt-2 grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5">
                    {resources.map((res) => {
                      return <WatchResource key={res.id} resource={res} />
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        )
      })}

      <div className="mt-20 flex items-center justify-center">
        {hasNextPage ? (
          <button
            className="flex content-center items-center rounded border border-primary bg-background px-4 py-3 text-primary disabled:cursor-not-allowed disabled:border-gray-500 disabled:text-gray-500 sm:px-8 sm:py-4"
            disabled={isLoading}
            onClick={loadMoreResources}
          >
            {isLoading && <Spinner className="mr-2 [&>svg]:size-6" />}
            {isLoading ? 'Loading...' : 'Load more resources'}
          </button>
        ) : (
          <div className="text-sm italic text-gray-500">
            All the content has been loaded!
          </div>
        )}
      </div>
    </div>
  )
}

export default WatchResources
