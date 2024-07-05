import ArrowIcon from '@/components/icons/ArrowIcon'
import { fetchWatchPages } from '@/lib/notion'

import IntroAlert from './components/introAlert/IntroAlert'
import Search from './components/search/Search'
import { transformWatchResourceToDTO } from './dto/watchResource.dto'
import WatchResources from './watchResources'

export const revalidate = 3600

export default async function Page() {
  const firstPage = await fetchWatchPages()
  const initialResources = firstPage.results.map(transformWatchResourceToDTO)

  return (
    <div className="flex h-full flex-col justify-center px-8 py-32">
      {/* Title */}
      <section className="mb-6 flex flex-row items-center justify-center">
        <div className="flex flex-row items-center">
          <ArrowIcon className="size-4 flex-none text-primary md:h-6 md:w-5" />
        </div>

        <span className="text-nowrap px-3 text-lg font-bold tracking-wider text-gray-900 opacity-85 dark:text-gray-200 md:text-2xl">
          Technology watch
        </span>
        <div className="h-[0.5px] w-full min-w-16 bg-gray-400 sm:w-44 lg:w-80" />
      </section>

      {/* Alert block */}
      <IntroAlert />

      {/* Search */}
      <Search />

      {/* Resources */}
      <WatchResources
        initialResources={initialResources}
        initialNextPage={firstPage.next_cursor}
      />
    </div>
  )
}
