import React, { FC } from 'react'
import clsx from 'clsx'

type Props = {
  number?: number
}

const Meteors: FC<Props> = ({ number = 20 }) => {
  const meteors = new Array(number).fill(true)
  return (
    <>
      {meteors.map((el, idx) => (
        <span
          key={'meteor' + idx}
          className={clsx(
            'animate-meteor-effect absolute size-0.5 rotate-[0deg] rounded-full bg-slate-500 shadow-[0_0_0_1px_#ffffff10]',
            "before:absolute before:top-1/2 before:h-px before:w-[50px] before:-translate-y-1/2 before:bg-linear-to-r before:from-slate-300 before:to-transparent before:content-[''] group-hover:before:from-blue-400",
          )}
          style={{
            top: -10,
            left: Math.floor(Math.random() * (400 - -400) + -400) + 'px',
            animationDelay: Math.random() * (0.8 - 0.2) + 0.2 + 's',
            animationDuration: Math.floor(Math.random() * (10 - 2) + 2) + 's',
          }}
        />
      ))}
    </>
  )
}

export default Meteors
