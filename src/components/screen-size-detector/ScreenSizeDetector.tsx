import React, { FC } from 'react'

const ScreenSizeDetector: FC = () => {
  return (
    <div className="fixed bottom-16 left-0 z-[1000]">
      <div className="flex h-6 w-8 items-center justify-center rounded-r-md bg-yellow-300 p-1 text-xs font-bold text-black">
        <span className="hidden sm:hidden md:hidden lg:hidden xl:hidden 2xl:hidden 3xl:block 4xl:block">
          4XL
        </span>
        <span className="hidden sm:hidden md:hidden lg:hidden xl:hidden 2xl:block 3xl:hidden">
          3XL
        </span>
        <span className="hidden sm:hidden md:hidden lg:hidden xl:block 2xl:hidden">
          2XL
        </span>
        <span className="hidden sm:hidden md:hidden lg:block xl:hidden">
          XL
        </span>
        <span className="hidden sm:hidden md:block lg:hidden xl:hidden">
          Lg
        </span>
        <span className="hidden sm:block md:hidden lg:hidden xl:hidden">
          md
        </span>
        <span className="block sm:hidden md:hidden lg:hidden xl:hidden">
          sm
        </span>
      </div>
    </div>
  )
}

export default ScreenSizeDetector
