'use client'
import React, { FC, useState } from 'react'
import { clsx } from 'clsx'
import { motion } from 'framer-motion'

import { useBreakpoint } from '@/hooks/useBreakpoint'

import { experiences } from '../WorkExperienceList'

type ExperiencesTabsProps = {
  activeTab: string
  onTabClick: (tabTitle: string) => void
}

const WorkExperienceTabs: FC<ExperiencesTabsProps> = ({
  activeTab,
  onTabClick,
}) => {
  const [barPosition, setBarPosition] = useState<number>(-8) // Bar position by the default it's -20px
  const [barAbovePosition, setBarAbovePosition] = useState<number>(0)

  const { isAboveMd } = useBreakpoint('md')

  type TabProps = {
    position: number
    above: number
    name: string
    title: string
  }

  const Tab: FC<TabProps> = ({ position, above, name, title }) => {
    const isActive = name === activeTab

    return (
      <button
        onClick={() => {
          setBarPosition(position)
          setBarAbovePosition(above)
          onTabClick(name)
        }}
        className={clsx(
          'hover:bg-hovered-light hover:text-primary dark:hover:bg-hovered w-32 flex-none cursor-pointer rounded-sm py-3 text-center font-mono text-xs duration-500 sm:text-sm md:w-60 md:px-4 md:pl-6 md:text-left lg:w-64 lg:rounded-l-none',
          isActive
            ? 'bg-hovered-light text-primary dark:bg-hovered'
            : 'text-gray-500',
        )}
      >
        {title}
      </button>
    )
  }

  return (
    <div className="scrollbar-hide flex w-screen flex-col items-start justify-start overflow-auto pb-4 sm:items-center sm:justify-center md:w-3/5 md:flex-row md:overflow-hidden md:pb-0 lg:w-auto">
      {/* Left bar Holder */}
      <div
        className="relative order-2 hidden h-0.5 w-[34px] rounded-sm bg-gray-300 md:order-1 md:block md:h-[var(--height)] md:w-0.5 dark:bg-gray-500"
        style={{
          '--height': `${experiences.length * 44}px`,
        }}
      >
        {/* Animated left bar */}
        <motion.div
          animate={{ y: barPosition }}
          className="bg-primary absolute h-0.5 w-10 rounded-sm md:h-[44px] md:w-0.5"
        />
      </div>

      {/* Experiences tabs */}
      <div className="order-1 flex flex-col space-y-1 pl-8 md:order-2 md:pl-0">
        <div className="flex flex-row md:flex-col">
          {experiences.map((exp, index) => {
            const position = -12 + index * 44 + (isAboveMd ? 10 : 0)
            const above = 1 + index * 128 + (isAboveMd ? 10 : 0)

            return (
              <Tab
                title={exp.tabTitle}
                position={position}
                above={above}
                name={exp.tabTitle}
                key={exp.date}
              />
            )
          })}
        </div>

        <div className="block h-0.5 rounded-sm bg-gray-200 md:hidden dark:bg-gray-500">
          <motion.div
            animate={{ x: barAbovePosition }}
            className="bg-primary h-0.5 w-[128px] rounded-sm"
          />
        </div>
      </div>
    </div>
  )
}

export default WorkExperienceTabs
