'use client'

import React, { FC, useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { tv } from 'tailwind-variants'

import DesktopMenu from './components/DesktopMenu'
import IconMenu from './components/IconMenu'
import Logo from './components/Logo'
import MobileMenu from './components/MobileMenu'

const header = tv({
  base: 'fixed z-20 flex w-full translate-y-0 justify-between bg-background px-6 py-2 transition duration-300 sm:px-12 sm:py-4',
  variants: {
    mobileMenu: {
      true: 'bg-opacity-0',
      false: 'bg-opacity-70 shadow-xl',
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
        <IconMenu rotate={showMobileMenu} onClick={onMenuIconClick} />

        <DesktopMenu />
      </motion.div>
    </>
  )
}
export default Header
