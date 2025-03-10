import React, { FC } from 'react'
import clsx from 'clsx'
import { motion } from 'framer-motion'

import Badge from '@/components/badge/Badge'
import ArrowIcon from '@/components/icons/ArrowIcon'

import { skillsByLevel } from './SkillsList'

const Skills: FC = () => {
  return (
    <div
      id="skills"
      className="flex w-full flex-col space-y-12 p-4 sm:px-16 md:px-16 lg:px-24 xl:space-y-28 2xl:px-72"
    >
      <div
        data-aos="fade-up"
        className="flex flex-col items-center justify-center space-y-12 py-12 md:py-24"
      >
        {/* Title */}
        <section className="flex w-full flex-row items-center md:w-auto">
          <div className="flex flex-row items-center">
            <ArrowIcon className="text-primary size-4 flex-none md:h-6 md:w-5" />
            <span className="text-primary font-sans text-sm sm:text-xl">
              {' '}
              04.
            </span>
          </div>

          <span className="px-3 text-lg font-bold tracking-wider text-nowrap text-gray-900 opacity-85 md:text-2xl dark:text-gray-200">
            Skills
          </span>
          <div className="h-[0.2px] w-full bg-gray-400 sm:w-44 lg:w-80" />
        </section>

        {/* Skills */}
        <section className="flex w-full flex-col items-stretch! justify-center space-y-4 md:flex-row md:items-start md:justify-center md:space-y-0 md:space-x-4">
          {skillsByLevel.map((level) => {
            const transition = {
              y: -3,
              scale: 1.2,
              transition: { duration: 0.1 },
            }

            return (
              <div
                key={level.title}
                className={clsx(
                  'block max-w-sm rounded-lg border border-gray-200 bg-white p-6 shadow-sm hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700',
                  level.className,
                )}
              >
                <h5 className="mb-4 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {level.title}
                </h5>
                <div className="grid grid-cols-6 gap-4 font-normal text-gray-700 dark:text-gray-400">
                  {level.skills.map((skill) => (
                    <div
                      key={skill.text}
                      className="group relative w-min hover:z-50"
                    >
                      <motion.div whileHover={transition} whileTap={transition}>
                        <span className="hover:text-primary cursor-pointer">
                          {skill.icon}
                        </span>
                      </motion.div>
                      <Badge
                        className="ring-primary invisible absolute left-1/2 -translate-x-2/4 translate-y-2 font-mono text-nowrap ring-1 backdrop-blur-md group-hover:visible dark:text-blue-300"
                        variant="blue"
                      >
                        {skill.text}
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </section>
      </div>
    </div>
  )
}

export default Skills
