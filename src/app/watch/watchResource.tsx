import { FC } from 'react'

import Badge from '@/components/badge/Badge'

type Props = {
  resource: WatchResource
}

const ResourceType: FC<{ type: WatchResource['type'] }> = ({ type }) => {
  const variant =
    type === 'Article'
      ? 'teal'
      : type === 'Video'
        ? 'red'
        : type === 'Podcast'
          ? 'yellow'
          : 'default'
  const emoji =
    type === 'Article'
      ? '📝'
      : type === 'Video'
        ? '📹'
        : type === 'Podcast'
          ? '🎧'
          : ''

  return (
    <Badge variant={variant}>
      {emoji}
      <span className="ml-1">{type}</span>
    </Badge>
  )
}

const WatchResource: FC<Props> = ({ resource }) => {
  const { title, tldr, source, subSource, url, type } = resource
  const trimedTldr = tldr?.trim()
  const tldrWithDot = trimedTldr?.endsWith('.') ? trimedTldr : `${trimedTldr}.`

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="group flex max-w-sm flex-col justify-between rounded-lg border border-gray-200 bg-white p-4 shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
    >
      <div>
        <h5 className="mb-2 line-clamp-1 text-sm font-bold tracking-tight text-gray-700 dark:text-white md:line-clamp-2">
          {title}
        </h5>
        <div className="grid grid-cols-6 gap-4 font-normal text-gray-700 dark:text-gray-400">
          <div className="col-span-6 line-clamp-4 text-left font-mono text-xs md:line-clamp-6 md:text-justify">
            {tldrWithDot}
          </div>
        </div>
      </div>

      <div className="mt-3 md:mt-6">
        <Badge className="mr-2 inline group-hover:bg-white dark:group-hover:bg-white/10">
          {source}
          {subSource && <span className="ml-2">{subSource}</span>}
        </Badge>
        <ResourceType type={type} />
      </div>
    </a>
  )
}

export default WatchResource
