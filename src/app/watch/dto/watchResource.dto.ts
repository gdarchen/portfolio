export const transformWatchResourceToDTO = (resource: any): WatchResource => {
  const { id, properties } = resource

  return {
    id,
    title: properties.Name.title?.[0].plain_text,
    tldr: properties['tl;dr'].rich_text?.[0]?.plain_text,
    done: properties.Done.checkbox,
    url: properties.URL.url,
    type: properties.Type.select.name,
    createdAt: new Date(properties['Created at'].created_time),
    date: new Date(properties.Date.date.start),
    source: properties.Source.select.name,
    subSource: properties['Sub-source'].rich_text?.[0]?.plain_text,
  }
}
