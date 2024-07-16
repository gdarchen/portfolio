import React, { FC } from 'react'
import { FaLocationDot } from 'react-icons/fa6'

import Badge from '@/components/badge/Badge'

import { Experience } from './WorkExperienceList'

type Props = {
  experience: Experience
}

const WorkExperienceDetails: FC<Props> = ({ experience }) => {
  return (
    <div className="flex w-full max-w-xl flex-col space-y-5 px-4 md:px-0">
      <div className="flex flex-col space-y-2">
        {/* Title */}
        <div className="flex items-center justify-between">
          <span className="text-sm tracking-wide text-gray-600 dark:text-gray-100 sm:text-lg">
            {experience.title}
            {experience.company && (
              <span className="ml-2 text-primary">@ {experience.company}</span>
            )}
          </span>

          <span className="text-sm tracking-wide text-gray-600 dark:text-gray-100 sm:text-lg">
            {experience.icon}
          </span>
        </div>

        {/* Date */}
        <span className="font-mono text-sm text-secondary-light dark:text-secondary">
          {experience.date}
        </span>

        {/* Location */}
        <span className="mt-2 flex font-mono text-xs text-gray-600">
          <FaLocationDot />
          <span className="ml-1">{experience.location}</span>
        </span>

        {/* Link */}
        {experience.link && (
          <span
            className="font-mono text-xs text-primary hover:cursor-pointer"
            onClick={() => window.open(experience.link, '_blank')}
          >
            {experience.link.split('://')[1]}
          </span>
        )}
      </div>

      <div className="flex flex-col space-y-4">
        {/* Description */}
        <span className="font-header text-sm text-gray-600 dark:text-gray-300">
          {experience.description}
        </span>
      </div>

      {/* Technologies */}
      {experience.technologies && (
        <div>
          {experience.technologies.map((tech) => {
            return (
              <Badge key={tech} className="mb-2 mr-2">
                {tech}
              </Badge>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default WorkExperienceDetails
