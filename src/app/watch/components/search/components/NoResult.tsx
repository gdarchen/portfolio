import React, { FC } from 'react'
import { LuSearchX } from 'react-icons/lu'

type Props = {
  query: string
}

const NoResult: FC<Props> = ({ query }) => {
  return (
    <div className="my-12 flex flex-col items-center justify-center pt-6 text-gray-900 dark:text-white">
      <div>
        <LuSearchX className="mb-4 text-4xl" />
      </div>
      <div>
        No result for &quot;
        <span className="text-secondary-light">{query}</span>&quot;.
      </div>
    </div>
  )
}

export default NoResult
