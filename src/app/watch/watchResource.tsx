import { FC, ReactNode } from 'react'
import { tv } from 'tailwind-variants'

import Badge from '@/components/badge/Badge'

type Props = {
  resource: WatchResource
  query?: string
  truncate?: boolean
}

const resourceTitle = tv({
  base: 'mb-2 text-sm font-bold tracking-tight text-gray-700 dark:text-white',
  variants: {
    truncate: { true: 'line-clamp-1 md:line-clamp-2' },
  },
})

const resourceTldr = tv({
  base: 'col-span-6 text-left font-mono text-xs md:text-justify',
  variants: {
    truncate: { true: 'line-clamp-4 md:line-clamp-6' },
  },
})

const highlightQuery = (str: string, query: string): ReactNode => {
  if (!query) return str

  const parts = str.split(new RegExp(`(${query})`, 'gi'))
  return parts.map((part, index) =>
    part.toLowerCase() === query.toLowerCase() ? (
      <span key={index} className="text-secondary-light">
        {part}
      </span>
    ) : (
      part
    ),
  )
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

const WatchResource: FC<Props> = ({ resource, query, truncate = true }) => {
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
        <h5 className={resourceTitle({ truncate })}>
          {query ? highlightQuery(title, query) : title}
        </h5>
        <div className="grid grid-cols-6 gap-4 font-normal text-gray-700 dark:text-gray-400">
          <div className={resourceTldr({ truncate })}>
            {query ? highlightQuery(tldrWithDot, query) : tldrWithDot}
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
