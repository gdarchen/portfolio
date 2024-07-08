'use client'

import React, { ChangeEvent, FC, Fragment, useEffect, useState } from 'react'
import { HiSearch } from 'react-icons/hi'
import { IoClose } from 'react-icons/io5'
import { useDebounce } from 'use-debounce'
import { useEventListener } from 'usehooks-ts'

import WatchResource from '@/app/watch/watchResource'
import Spinner from '@/components/spinner/Spinner'
import { Input } from '@headlessui/react'

import { searchPageByQuery } from './actions/searchPageByQueryAction'
import NoResult from './components/NoResult'
import SearchButton from './components/SearchButton'

const PLACEHOLDER = 'Search by title or summary'

const Search: FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [query, setQuery] = useState<string>('')
  const [watchResourceResults, setWatchResourceResults] =
    useState<WatchResource[]>()

  const [debouncedQuery] = useDebounce(query, 300)

  // Prevent background scroll while modal is opened
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      return
    }

    document.body.style.overflow = 'auto'
  }, [isOpen])

  // Close modal on 'ESC'
  useEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal()
    }
  })

  // Execute the search server action everytime the debouncedQuery changes
  useEffect(() => {
    if (!debouncedQuery) {
      setWatchResourceResults([])
      setIsLoading(false)
      return
    }

    const syncResults = async () => {
      const results = await searchPageByQuery(debouncedQuery)
      setWatchResourceResults(results)
      setIsLoading(false)
    }

    syncResults()
  }, [debouncedQuery])

  const closeModal = (): void => {
    setIsOpen(false)
    setIsLoading(false)
    setQuery('')
  }

  const openModal = (): void => {
    setIsOpen(true)
  }

  const onInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setQuery(e.target.value)
    setIsLoading(true)
  }

  const onClearInput = (): void => {
    setQuery('')
  }

  return (
    <>
      {/* Trigger */}
      <SearchButton placeholder={PLACEHOLDER} onOpenModal={openModal} />

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
          {/* Backdrop */}
          <button
            className="fixed inset-0 bg-black/50 backdrop-blur"
            onClick={closeModal}
          />

          <div className="absolute top-[50px] mx-auto w-[90%] max-w-3xl md:top-[110px]">
            {/* Content */}
            <div className="relative m-auto flex max-h-[80dvh] flex-col overflow-auto overscroll-contain rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none dark:bg-gray-800">
              <div className="relative flex-auto p-6">
                {/* Search input */}
                <div className="flex w-full items-center justify-center">
                  <div className="group flex w-full items-center justify-center rounded-lg border-none bg-white/5 px-3 py-1.5 text-base/6 text-gray-800 outline outline-blue-400 dark:text-white">
                    <HiSearch className="mr-2 text-lg" />
                    <Input
                      name="search"
                      type="text"
                      autoFocus
                      autoComplete="off"
                      placeholder={PLACEHOLDER}
                      value={query}
                      onChange={onInputChange}
                      className="w-full bg-transparent data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25 focus:outline-none"
                    />

                    {isLoading && <Spinner className="[&>svg]:size-5" />}
                    {!isLoading && debouncedQuery && (
                      <button onClick={onClearInput}>
                        <IoClose className="text-lg hover:text-primary" />
                      </button>
                    )}
                  </div>
                </div>

                {/* Watch resource results */}
                {watchResourceResults && watchResourceResults.length > 0 && (
                  <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                    {watchResourceResults.map((res) => {
                      return (
                        <WatchResource
                          key={res.id}
                          resource={res}
                          query={debouncedQuery}
                          truncate={false}
                        />
                      )
                    })}
                  </div>
                )}

                {/* No result placeholder */}
                {debouncedQuery &&
                  !isLoading &&
                  !(
                    watchResourceResults && watchResourceResults.length > 0
                  ) && <NoResult query={debouncedQuery} />}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Search
