import React, { FC } from 'react'

import ArrowIcon from '@/components/icons/ArrowIcon'

import Project from './components/Project'
import projects from './ProjectsList'

const Projects: FC = () => {
  return (
    <div
      id="projects"
      className="flex w-full flex-col space-y-12 p-4 sm:px-16 md:px-16 md:py-24 lg:px-24 xl:space-y-28 2xl:px-72"
    >
      {/* Title */}
      <section className="flex flex-row items-center">
        <div className="flex flex-row items-center">
          <ArrowIcon className="size-4 flex-none text-primary md:h-6 md:w-5" />
          <span className="font-sans text-sm text-primary sm:text-xl">
            {' '}
            03.
          </span>
        </div>

        <span className="text-nowrap px-3 text-lg font-bold tracking-wider text-gray-900 opacity-85 dark:text-gray-200 md:text-2xl">
          Projects
        </span>
        <div className="h-[0.2px] w-full bg-gray-400 sm:w-44 lg:w-80" />
      </section>

      <div className="flex flex-col space-y-8 md:space-y-28 xl:space-y-36">
        {projects.map((project, index) => (
          <Project project={project} key={project.key} index={index} />
        ))}
      </div>
    </div>
  )
}

export default Projects
