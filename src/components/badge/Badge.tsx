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
  | 'purple'

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
      green:
        'bg-green-100 text-green-800 dark:bg-green-800/30 dark:text-green-500',
      orange:
        'bg-orange-100 text-orange-800 dark:bg-orange-800/30 dark:text-orange-500',
      fuchsia:
        'bg-fuchsia-100 text-fuchsia-800 dark:bg-fuchsia-800/30 dark:text-fuchsia-500',
      pink: 'bg-pink-100 text-pink-800 dark:bg-pink-800/30 dark:text-pink-500',
      purple:
        'bg-purple-100 text-purple-800 dark:bg-purple-800/30 dark:text-purple-500',
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
