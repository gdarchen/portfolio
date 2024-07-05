import React, { FC } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { tv } from 'tailwind-variants'

import ThemeSwitch from '@/components/theme-switch/ThemeSwitch'

const menuItemLink = tv({
  base: 'group hover:cursor-pointer hover:text-primary dark:hover:text-blue-400',
})

const menuItem = tv({
  base: 'text-gray-900 duration-300 group-hover:cursor-pointer group-hover:text-primary dark:text-white dark:group-hover:text-blue-400',
})

const DesktopMenu: FC = () => {
  return (
    <div className="hidden flex-row items-center justify-center space-x-4 font-mono text-xs lg:flex lg:space-x-7">
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', duration: 1.2, delay: 0.4 }}
        className={menuItemLink()}
      >
        <Link href="/#about-me">
          &gt; 01. <span className={menuItem()}>About</span>
        </Link>
      </motion.div>

      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', duration: 1.2, delay: 0.7 }}
        className={menuItemLink()}
      >
        <Link href="/#work-experience">
          &gt; 02. <span className={menuItem()}>Experience</span>
        </Link>
      </motion.div>

      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', duration: 1.2, delay: 0.8 }}
        className={menuItemLink()}
      >
        <Link href="/#projects">
          &gt; 03. <span className={menuItem()}>Projects</span>
        </Link>
      </motion.div>

      <motion.span
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', duration: 1.2, delay: 0.9 }}
        className={menuItemLink()}
      >
        <Link href="/#skills">
          &gt; 04. <span className={menuItem()}>Skills</span>
        </Link>
      </motion.span>

      <motion.span
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', duration: 1.2, delay: 1.2 }}
        className={menuItemLink()}
      >
        <Link href="/#contact">
          &gt; 05. <span className={menuItem()}>Contact</span>
        </Link>
      </motion.span>

      <motion.span
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', duration: 1.2, delay: 1.3 }}
        className={menuItemLink()}
      >
        <Link href="/watch">
          &gt; <span className={menuItem()}>Tech. watch</span>
        </Link>
      </motion.span>

      <a href="/resume.pdf" target="_blank" rel="noreferrer">
        <motion.button
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', duration: 1.2, delay: 1.2 }}
          className="border-spacing-2 rounded-sm border border-primary px-3 py-2 text-primary hover:bg-hovered-light dark:hover:bg-hovered"
        >
          Resume
        </motion.button>
      </a>

      <ThemeSwitch />
    </div>
  )
}

export default DesktopMenu
