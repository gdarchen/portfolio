import React, { FC } from 'react'

const ScreenSizeDetector: FC = () => {
  return (
    <div className="fixed bottom-16 left-0 z-1000">
      <div className="flex h-6 w-8 items-center justify-center rounded-r-md bg-yellow-300 p-1 text-xs font-bold text-black">
        <span className="4xl:block hidden">4xl</span>
        <span className="3xl:max-4xl:block hidden">3xl</span>
        <span className="2xl:max-3xl:block hidden">2xl</span>
        <span className="hidden xl:max-2xl:block">xl</span>
        <span className="hidden lg:max-xl:block">lg</span>
        <span className="hidden md:max-lg:block">md</span>
        <span className="block md:hidden">sm</span>
      </div>
    </div>
  )
}

export default ScreenSizeDetector
