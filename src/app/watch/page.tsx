import { RiInformation2Fill } from 'react-icons/ri'

import ArrowIcon from '@/components/icons/ArrowIcon'
import { fetchWatchPages } from '@/lib/notion'

import { transformWatchResourceToDTO } from './dto/watchResource.dto'
import WatchResources from './watchResources'

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

        <span className="text-nowrap px-3 text-lg font-bold tracking-wider text-gray-200 opacity-85 md:text-2xl">
          Technology watch
        </span>
        <div className="h-[0.5px] w-full min-w-16 bg-gray-400 sm:w-44 lg:w-80" />
      </section>

      {/* Alert block */}
      <div className="flex items-center justify-center">
        <div
          className="mb-4 inline-flex w-auto rounded-lg bg-blue-50 p-4 text-blue-800 dark:bg-gray-800 dark:text-blue-400"
          role="alert"
        >
          <RiInformation2Fill className="shrink-0 text-lg" />
          <div className="ms-3 text-justify text-sm font-medium">
            During my daily technology watch, I maintain a database to persist
            the resources I have consulted, with a small{' '}
            <span className="italic">tl;dr</span> section.
            <br />
            Those resources can be retrieved in this page.
          </div>
        </div>
      </div>

      {/* Resources */}
      <WatchResources
        initialResources={initialResources}
        initialNextPage={firstPage.next_cursor}
      />
    </div>
  )
}
