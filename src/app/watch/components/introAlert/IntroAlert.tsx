import React, { FC } from 'react'
import { RiInformation2Fill } from 'react-icons/ri'

type Props = {
  totalCount?: number
}

const IntroAlert: FC<Props> = ({ totalCount }) => {
  return (
    <div className="flex items-center justify-center">
      <div
        className="mb-4 inline-flex w-auto rounded-lg bg-blue-50 p-4 text-blue-600 lg:w-1/2 dark:bg-gray-800 dark:text-blue-400"
        role="alert"
      >
        <RiInformation2Fill className="shrink-0 text-lg" />
        <div className="ms-3 text-justify text-xs font-medium md:text-sm">
          During my daily technology watch, I maintain a database to persist the
          resources I have consulted, with a small{' '}
          <span className="italic">tl;dr</span> section.
          <br />
          <br />
          {totalCount !== undefined ? (
            <>
              <span className="font-semibold italic">
                {totalCount.toLocaleString()}
              </span>{' '}
              resources can be retrieved in this page since I started tracking
              them in June 2024.
            </>
          ) : (
            <>Those resources can be retrieved in this page.</>
          )}
        </div>
      </div>
    </div>
  )
}

export default IntroAlert
