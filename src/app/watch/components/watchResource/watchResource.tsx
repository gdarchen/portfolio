import {
  FC,
  MouseEvent,
  ReactNode,
  useLayoutEffect,
  useRef,
  useState,
} from 'react'
import { tv } from 'tailwind-variants'

import Badge from '@/components/badge/Badge'
import Meteors from '@/components/cards/Meteors'

import type { WatchResource } from '../../types'

const VariantMapping = {
  Article: {
    color: 'teal',
    emoji: '📝',
  },
  Video: {
    color: 'red',
    emoji: '📹',
  },
  Podcast: {
    color: 'yellow',
    emoji: '🎧',
  },
  Book: {
    color: 'blue',
    emoji: '📙',
  },
  Docs: {
    color: 'fuchsia',
    emoji: '📚',
  },
} as const

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

const tldr = tv({
  variants: {
    code: {
      true: 'm-0 whitespace-break-spaces rounded-sm bg-code-light px-1 py-px text-[90%] dark:bg-code',
    },
    bold: { true: 'font-bold' },
    italic: { true: 'italic' },
    underline: { true: 'underline' },
    strikethrough: { true: 'line-through' },
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
  const variantMapping = VariantMapping[type]
  const variant = variantMapping?.color ?? 'default'
  const emoji = variantMapping?.emoji ?? ''

  return (
    <Badge variant={variant}>
      {emoji}
      <span className="ml-1">{type}</span>
    </Badge>
  )
}

const Tldr: FC<{ parts: WatchResource['tldr']; query?: string }> = ({
  parts,
  query,
}) => {
  function endsWithPunctuation(str: string): boolean {
    const punctuationRegex = /[.!?]$/
    return punctuationRegex.test(str)
  }

  return (
    <span>
      {parts?.map((part, index) => {
        const isLast = index + 1 === parts.length
        const needsDot = isLast && !endsWithPunctuation(part.plain_text)
        return (
          <span
            key={`${part.plain_text}_${index}`}
            className={tldr({
              code: part.annotations.code,
              bold: part.annotations.bold,
              italic: part.annotations.italic,
              underline: part.annotations.underline,
              strikethrough: part.annotations.strikethrough,
            })}
          >
            {query ? highlightQuery(part.plain_text, query) : part.plain_text}
            {needsDot && '.'}
          </span>
        )
      })}
    </span>
  )
}

const WatchResource: FC<Props> = ({ resource, query, truncate = true }) => {
  const [isTruncated, setIsTruncated] = useState(false)
  const [showMore, setShowMore] = useState(false)

  const { title, tldr, source, subSource, url, type, shiny } = resource

  const ref = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const { offsetHeight, scrollHeight } = ref.current || {}

    if (offsetHeight && scrollHeight && offsetHeight < scrollHeight) {
      setIsTruncated(true)
    } else {
      setIsTruncated(false)
    }
  }, [ref])

  const onShowMoreClick = (e: MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault()
    setShowMore(true)
    setIsTruncated(false)
  }

  return (
    <div className="group relative flex">
      {shiny && (
        <div className="absolute -inset-2 z-0 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 opacity-25 blur transition duration-1000 will-change-transform group-hover:opacity-100 group-hover:duration-200 md:-inset-1" />
      )}
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className="relative z-10 flex w-full max-w-sm flex-col justify-between overflow-hidden rounded-lg border border-gray-200 bg-white p-4 shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
      >
        <div>
          <h5 className={resourceTitle({ truncate })} title={title}>
            {query ? highlightQuery(title, query) : title}
          </h5>
          <div className="grid grid-cols-6 gap-4 font-normal text-gray-700 dark:text-gray-400">
            <div
              className={resourceTldr({ truncate: truncate && !showMore })}
              ref={ref}
            >
              <Tldr parts={tldr} query={query} />
            </div>
          </div>
        </div>

        {isTruncated && (
          <button
            className="inline-block w-fit rounded pt-2.5 text-left text-xs font-medium leading-normal text-gray-400 hover:text-gray-600 focus:text-primary-600 focus:outline-none focus:ring-0 motion-reduce:transition-none dark:text-gray-500 dark:hover:text-gray-200"
            onClick={onShowMoreClick}
          >
            Show more...
          </button>
        )}

        <div className="mt-3 md:mt-6">
          <Badge className="mr-2 inline group-hover:bg-white dark:group-hover:bg-white/10">
            {source}
            {subSource && <span className="ml-2">{subSource}</span>}
          </Badge>
          <ResourceType type={type} />
        </div>
        {shiny && (
          <div>
            <Meteors number={25} />
          </div>
        )}
      </a>
    </div>
  )
}

export default WatchResource
