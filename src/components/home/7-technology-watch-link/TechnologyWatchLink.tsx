import React, { FC } from 'react'
import Link from 'next/link'
import { BiSolidBinoculars } from 'react-icons/bi'

const TechnologyWatchLink: FC = () => {
  return (
    <div className="flex items-center justify-center">
      <Link
        href="/watch"
        className="group relative my-12 inline-flex items-center justify-center overflow-hidden rounded-lg p-4 px-5 py-3 font-medium text-indigo-600 shadow-2xl md:mt-0"
      >
        <span className="ease absolute left-0 top-0 -ml-3 -mt-10 size-52 rounded-full bg-purple-700 blur-md transition-all duration-700 dark:bg-purple-800" />
        <span className="ease absolute inset-0 size-full transition duration-700 group-hover:rotate-180">
          <span className="absolute bottom-0 left-0 -ml-10 size-36 rounded-full bg-blue-600 blur-md dark:bg-blue-700" />
          <span className="absolute bottom-0 right-0 -mr-10 size-36 rounded-full bg-blue-400 blur-md dark:bg-blue-500" />
        </span>
        <span className="relative flex items-center justify-center text-white">
          <BiSolidBinoculars className="mr-3" /> Technology watch
        </span>
      </Link>
    </div>
  )
}

export default TechnologyWatchLink
