import React, { FC, useState } from 'react'

import ArrowIcon from '@/components/icons/ArrowIcon'

import WorkExperienceTabs from './components/WorkExperienceTabs'
import WorkExperienceDetails from './WorkExperienceDetails'
import { experiences } from './WorkExperienceList'

const WorkExperience: FC = () => {
  const [tab, setTab] = useState('Contentsquare')

  const ActiveExperience: FC = () => {
    const experience = experiences.find((exp) => exp.tabTitle === tab)

    if (!experience) {
      return null
    }

    return <WorkExperienceDetails experience={experience} />
  }

  return (
    <div
      data-aos="fade-up"
      className="flex flex-col items-center justify-center space-y-12 py-12 md:py-24"
      id="work-experience"
    >
      {/* Title */}
      <section className="flex flex-row items-center">
        <div className="flex flex-row items-center">
          <ArrowIcon className="text-primary size-4 flex-none md:h-6 md:w-5" />
          <span className="text-primary font-sans text-sm sm:text-xl">
            {' '}
            02.
          </span>
        </div>

        <span className="px-3 text-lg font-bold tracking-wider text-gray-900 opacity-85 md:text-2xl dark:text-gray-200">
          <span className="hidden text-nowrap md:inline">
            Work experience &amp; Education
          </span>
          <span className="inline text-nowrap md:hidden">
            Experience &amp; Education
          </span>
        </span>
        <div className="h-[0.2px] w-full min-w-16 bg-gray-400 sm:w-44 lg:w-80" />
      </section>

      {/* Experiences */}
      <section className="flex w-full flex-col items-center justify-center space-y-4 md:flex-row md:items-start md:justify-center md:space-y-0 md:space-x-4 md:max-lg:w-5/6">
        {/* Tabs */}
        <WorkExperienceTabs activeTab={tab} onTabClick={setTab} />

        {/* Active tab content */}
        <ActiveExperience />
      </section>
    </div>
  )
}

export default WorkExperience
