import { fetchWatchPages } from '@/lib/notion'

import WatchResourcesViewToggle from './components/watchResource/watchResourcesViewToggle'
import { transformWatchResourceToDTO } from './dto/watchResource.dto'

export default async function WatchResourcesList() {
  const firstPage = await fetchWatchPages()
  const initialResources = firstPage.results.map(transformWatchResourceToDTO)

  return (
    <WatchResourcesViewToggle
      initialResources={initialResources}
      initialNextPage={firstPage.next_cursor}
    />
  )
}
