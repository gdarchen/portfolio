import { fetchWatchPages } from '@/lib/notion'

import WatchResources from './components/watchResource/watchResources'
import { transformWatchResourceToDTO } from './dto/watchResource.dto'

export default async function WatchResourcesList() {
  const firstPage = await fetchWatchPages()
  const initialResources = firstPage.results.map(transformWatchResourceToDTO)

  return (
    <WatchResources
      initialResources={initialResources}
      initialNextPage={firstPage.next_cursor}
    />
  )
}
