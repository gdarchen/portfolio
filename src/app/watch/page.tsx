import { Suspense } from 'react'

import ArrowIcon from '@/components/icons/ArrowIcon'
import Spinner from '@/components/spinner/Spinner'
import { getTotalCount } from '@/lib/watchCount'

import IntroAlert from './components/introAlert/IntroAlert'
import Search from './components/search/Search'
import WatchResourcesList from './watchResourcesList'

export const revalidate = 3600

export default async function Page() {
  const totalCount = await getTotalCount()

  return (
    <div className="flex h-full flex-col justify-center px-0 py-32 sm:px-8">
      {/* Title */}
      <section className="mb-6 flex flex-row items-center justify-center px-8 sm:px-0">
        <div className="flex flex-row items-center">
          <ArrowIcon className="text-primary size-4 flex-none md:h-6 md:w-5" />
        </div>

        <span className="px-3 text-lg font-bold tracking-wider text-nowrap text-gray-900 opacity-85 md:text-2xl dark:text-gray-200">
          Technology watch
        </span>
        <div className="h-[0.5px] w-full min-w-16 bg-gray-400 sm:w-44 lg:w-80" />
      </section>

      {/* Alert block */}
      <div className="px-8 sm:px-0">
        <IntroAlert totalCount={totalCount} />
      </div>

      {/* Search */}
      <div className="px-8 sm:px-0">
        <Search />
      </div>

      {/* Resources */}
      <Suspense
        fallback={
          <div className="mt-24 flex items-center justify-center text-gray-600 dark:text-white">
            <Spinner className="mr-2 [&>svg]:size-6" />
            Loading...
          </div>
        }
      >
        <WatchResourcesList />
      </Suspense>
    </div>
  )
}
