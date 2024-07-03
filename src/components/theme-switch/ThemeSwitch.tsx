import React, { FC, useEffect, useState } from 'react'
import { HiOutlineMoon, HiSun } from 'react-icons/hi'
import { tv } from 'tailwind-variants'
import { useLocalStorage } from 'usehooks-ts'

const themeIcon = tv({
  base: 'size-3/4 lg:size-1/2',
})

const ThemeSwitch: FC = () => {
  const [theme, setTheme] = useLocalStorage('theme', 'dark')
  const [isLight, setIsLight] = useState(theme === 'light')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setIsLight(theme === 'light')
  }, [theme])

  // Trick to avoid hydration mismatch on SVG tags
  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    document.body.classList.remove('light', 'dark')
    document.body.classList.add(theme)
  }, [theme])

  const handleThemeChange = () => {
    setTheme(isLight ? 'dark' : 'light')
  }

  if (!mounted) {
    return null
  }

  return (
    <button
      aria-label="Use dark mode"
      className="flex size-9 items-center justify-center rounded-full text-primary transition-transform hover:bg-hovered-light active:scale-95 dark:text-primary dark:hover:bg-hovered lg:size-10 lg:text-gray-900 lg:dark:text-white"
      onClick={handleThemeChange}
    >
      {theme === 'light' ? (
        <HiOutlineMoon className={themeIcon()} />
      ) : (
        <HiSun className={themeIcon()} />
      )}
    </button>
  )
}

export default ThemeSwitch
