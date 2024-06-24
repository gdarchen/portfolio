import React, { FC, PropsWithChildren } from 'react'
import { type ClassValue, tv } from 'tailwind-variants'

type BadgeVariant =
  | 'default'
  | 'gray'
  | 'teal'
  | 'blue'
  | 'red'
  | 'yellow'
  | 'white'

type Props = PropsWithChildren<{
  variant?: BadgeVariant
  className?: ClassValue
}>

const badge = tv({
  base: 'inline-flex items-center rounded-md px-2 py-1 text-xs font-medium',
  variants: {
    variant: {
      default: 'bg-gray-100 text-gray-800 dark:bg-white/10 dark:text-white',
      gray: 'bg-gray-50 text-gray-500 dark:bg-white/10 dark:text-white',
      teal: 'bg-teal-100 text-teal-800 dark:bg-teal-800/30 dark:text-teal-500',
      blue: 'bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500',
      red: 'bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500',
      yellow:
        'bg-yellow-100 text-yellow-800 dark:bg-yellow-800/30 dark:text-yellow-500',
      white: 'bg-white/10 text-white',
    },
  },
})

const Badge: FC<Props> = ({ children, className, variant = 'default' }) => {
  return <span className={badge({ variant, className })}>{children}</span>
}

export default Badge
