import React, { FC } from 'react'

import ArrowIcon from '@/components/icons/ArrowIcon'

import Project from './components/Project'
import projects from './ProjectsList'

// TODO: image PIC

const Projects: FC = () => {
  return (
    <div
      id="projects"
      className="flex w-full flex-col space-y-12 px-4 py-12 sm:px-16 md:px-16 md:py-32 lg:px-24 xl:space-y-28 2xl:px-72"
    >
      {/* Title */}
      <div data-aos="fade-up" className="flex flex-row items-center md:px-0">
        <ArrowIcon className="size-5 flex-none translate-y-[2px] text-primary md:h-6 md:w-5" />
        <div className="flex-none flex-row items-center space-x-2 pr-2">
          <span className="font-sans text-sm text-primary sm:text-xl">
            {' '}
            03.
          </span>
          <span className="w-44 text-lg font-bold tracking-wider text-gray-200 opacity-85 md:w-56 md:text-2xl">
            {' '}
            Projects
          </span>
        </div>
        <div className="h-[0.2px] w-full bg-gray-400 md:w-1/2 xl:w-1/3" />
      </div>

      <div className="flex flex-col space-y-8 md:space-y-28 xl:space-y-36">
        {projects.map((project, index) => (
          <Project project={project} key={project.key} index={index} />
        ))}
      </div>
    </div>
  )
}

export default Projects
