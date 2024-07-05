import React, { FC } from 'react'
import { HiSearch } from 'react-icons/hi'

type Props = {
  placeholder: string
  onOpenModal: () => void
}

const SearchButton: FC<Props> = ({ onOpenModal, placeholder }) => {
  return (
    <div className="flex items-center justify-center">
      <button
        className="group mt-3 flex w-full items-center justify-center rounded-lg border-none bg-black/5 px-3 py-1.5 text-sm/6 text-gray-500 outline-blue-400 transition hover:text-black hover:outline dark:bg-white/5 dark:hover:text-white lg:w-1/2"
        onClick={onOpenModal}
      >
        <HiSearch className="mr-2" />
        <div className="flex w-full items-start bg-transparent text-gray-500 transition group-hover:text-black data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25 focus:outline-none dark:group-hover:text-white">
          {placeholder}
        </div>
      </button>
    </div>
  )
}

export default SearchButton
