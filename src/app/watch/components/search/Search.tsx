'use client'

import React, { ChangeEvent, FC, Fragment, useEffect, useState } from 'react'
import { HiSearch } from 'react-icons/hi'
import { IoClose } from 'react-icons/io5'
import { useDebounce } from 'use-debounce'

import WatchResource from '@/app/watch/watchResource'
import Spinner from '@/components/spinner/Spinner'
import {
  Dialog,
  DialogPanel,
  Input,
  Transition,
  TransitionChild,
} from '@headlessui/react'

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
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-30" onClose={closeModal}>
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/60 backdrop-blur" />
          </TransitionChild>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="absolute left-1/2 top-[50px] flex w-[90%] -translate-x-1/2 items-center justify-center p-4 text-center md:top-[110px] xl:w-1/2">
              <TransitionChild
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <DialogPanel className="w-full max-w-2xl overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all dark:bg-gray-800">
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
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

export default Search
