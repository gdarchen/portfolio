'use server'
import { transformWatchResourceToDTO } from '@/app/watch/dto/watchResource.dto'
import { searchWatchPage } from '@/lib/notion'

export async function searchPageByQuery(
  query: string,
): Promise<WatchResource[]> {
  const resultsPage = await searchWatchPage(query)

  return resultsPage.results.map(transformWatchResourceToDTO)
}