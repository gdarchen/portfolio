import React, { FC, useEffect, useState } from 'react'
import { HiOutlineMoon, HiSun } from 'react-icons/hi'
import { HiOutlineDesktopComputer } from 'react-icons/hi'
import { tv } from 'tailwind-variants'
import { useLocalStorage } from 'usehooks-ts'

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

const themeIcon = tv({
  base: 'size-3/4 lg:size-1/2',
  variants: {
    active: {
      true: 'text-primary',
    },
  },
})

const menuItem = tv({
  base: 'flex w-full cursor-pointer items-center px-4 py-2 text-sm text-gray-800 hover:bg-gray-100/60 dark:text-white dark:hover:bg-gray-600/70',
  variants: {
    active: {
      true: 'bg-gray-100 text-primary dark:bg-gray-600 dark:text-blue-400',
    },
  },
})

const menuItemIcon = tv({
  base: 'mr-4 text-lg',
})

const ThemeSwitch: FC = () => {
  const [isSystemDark, setIsSystemDark] = useState(false)
  const [theme, setTheme, removeTheme] = useLocalStorage<string | undefined>(
    'theme',
    undefined,
  )
  const [mounted, setMounted] = useState(false)

  // Trick to avoid hydration mismatch on SVG tags
  useEffect(() => {
    setMounted(true)
  }, [])

  // Event listener to detect system theme changes
  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }
    // Initialize the state
    setIsSystemDark(window.matchMedia('(prefers-color-scheme: dark)').matches)

    // Detect further changes
    const listener = (e: MediaQueryListEvent) => setIsSystemDark(e.matches)
    const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)')
    darkThemeMq.addEventListener('change', listener)
    return () => darkThemeMq.removeEventListener('change', listener)
  }, [])

  useEffect(() => {
    // If the theme is `dark` or `system` (and system theme is `dark`)
    if (theme === 'dark' || (theme === undefined && isSystemDark)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme, isSystemDark])

  // Callback when a theme is selected
  const handleThemeChange = (newTheme: string): void => {
    // In case the `system` theme is selected, remove it from the LocalStorage
    if (newTheme === 'system') {
      removeTheme()
      return
    }

    // Else persist the manually selected theme
    setTheme(newTheme)
  }

  if (!mounted) {
    return null
  }

  return (
    <div className="font-content relative inline-block text-left">
      <Menu>
        <MenuButton
          aria-label="Use dark mode"
          className="text-primary hover:bg-hovered-light dark:hover:bg-hovered flex size-9 cursor-pointer items-center justify-center rounded-full transition-transform active:scale-95 lg:size-10 lg:text-gray-900 dark:text-gray-300"
        >
          {theme === 'dark' || (theme === undefined && isSystemDark) ? (
            <HiOutlineMoon className={themeIcon({ active: !!theme })} />
          ) : (
            <HiSun className={themeIcon({ active: !!theme })} />
          )}
        </MenuButton>

        <MenuItems
          modal={false}
          className="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in dark:bg-gray-700"
        >
          <div className="py-1">
            <MenuItem>
              <button
                className={menuItem({ active: theme === 'light' })}
                onClick={() => handleThemeChange('light')}
              >
                <HiSun className={menuItemIcon()} /> Light
              </button>
            </MenuItem>

            <MenuItem>
              <button
                className={menuItem({ active: theme === 'dark' })}
                onClick={() => handleThemeChange('dark')}
              >
                <HiOutlineMoon className={menuItemIcon()} /> Dark
              </button>
            </MenuItem>

            <MenuItem>
              <button
                className={menuItem({ active: theme === undefined })}
                onClick={() => {
                  handleThemeChange('system')
                }}
              >
                <HiOutlineDesktopComputer className={menuItemIcon()} /> System
              </button>
            </MenuItem>
          </div>
        </MenuItems>
      </Menu>
    </div>
  )
}

export default ThemeSwitch
