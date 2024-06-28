type WatchResourceGroups = {
  [key: string]: WatchResource[]
}

export const groupWatchResourcesByMonth = (
  resources: WatchResource[],
): WatchResourceGroups => {
  return resources.reduce(
    (groups: WatchResourceGroups, resource: WatchResource) => {
      const year = resource.date.getFullYear()
      const month = (resource.date.getMonth() + 1).toString().padStart(2, '0') // Ajouter un zéro pour avoir un format 'MM'

      const key = `${year}/${month}`

      if (!groups[key]) {
        groups[key] = []
      }

      groups[key].push(resource)

      return groups
    },
    {},
  )
}

const formatDate = (date: Date): string => {
  const year = date.getFullYear()
  const month = (date.getMonth() + 1).toString().padStart(2, '0')
  const day = date.getDate().toString().padStart(2, '0')
  return `${year}/${month}/${day}`
}

export const groupWatchResourcesByDate = (
  resources: WatchResource[],
): WatchResourceGroups => {
  return resources.reduce(
    (groups: WatchResourceGroups, resource: WatchResource) => {
      const key = formatDate(resource.date)

      if (!groups[key]) {
        groups[key] = []
      }

      groups[key].push(resource)

      return groups
    },
    {},
  )
}
