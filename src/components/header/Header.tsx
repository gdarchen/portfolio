'use client'

import React, { FC, useEffect, useRef, useState } from 'react'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import { tv } from 'tailwind-variants'

import ThemeSwitch from '../theme-switch/ThemeSwitch'

import DesktopMenu from './components/DesktopMenu'
import IconMenu from './components/IconMenu'
import Logo from './components/Logo'
import MobileMenu from './components/MobileMenu'

const header = tv({
  base: 'fixed z-20 flex w-full translate-y-0 justify-between bg-background-light px-6 py-2 transition duration-300 dark:bg-background sm:px-12 sm:py-4',
  variants: {
    mobileMenu: {
      true: 'bg-opacity-0 dark:bg-opacity-0',
      false: 'bg-opacity-90 shadow-xl dark:bg-opacity-70',
    },
  },
})

const Header: FC = () => {
  const navBarRef = useRef<HTMLDivElement>(null)
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  useEffect(() => {
    if (typeof document === 'undefined') {
      return
    }

    document.body.style.overflow = showMobileMenu ? 'hidden' : 'auto'
  }, [showMobileMenu])

  const onMenuIconClick = (): void => {
    setShowMobileMenu(!showMobileMenu)
  }

  return (
    <>
      <MobileMenu hidden={!showMobileMenu} onClose={onMenuIconClick} />

      <motion.div
        ref={navBarRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ opacity: { duration: 0 } }}
        className={header({ mobileMenu: showMobileMenu })}
      >
        <Logo />

        <div className="flex items-center justify-center">
          {/* Display the theme switch on small devices only here */}
          <span
            className={clsx(
              'mr-4 transition-all lg:hidden',
              showMobileMenu && 'hidden',
            )}
          >
            <ThemeSwitch />
          </span>
          <IconMenu rotate={showMobileMenu} onClick={onMenuIconClick} />
        </div>

        <DesktopMenu />
      </motion.div>
    </>
  )
}
export default Header
