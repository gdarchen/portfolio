import React, { FC } from 'react'
import Image from 'next/image'

import ArrowIcon from '@/components/icons/ArrowIcon'

const AboutMe: FC = () => {
  const technologies = [
    ['React', 'JavaScript (ES6+)', 'Tailwind CSS', 'Nest', 'Github Actions'],
    ['Node.js', 'TypeScript', 'Kubernetes', 'Serverless', 'AWS'],
  ]

  return (
    <div
      id="about-me"
      data-aos="fade-up"
      className="flex snap-start flex-col items-center py-20"
    >
      <div className="flex w-full flex-col space-y-8 px-4 sm:w-[500px] sm:px-0 md:w-[700px] lg:w-[900px]">
        {/* Title */}
        <section className="flex flex-row items-center">
          <div className="flex flex-row items-center">
            <ArrowIcon className="size-4 flex-none text-primary md:h-6 md:w-5" />
            <span className="font-sans text-sm text-primary sm:text-xl">
              {' '}
              01.
            </span>
          </div>

          <span className="text-nowrap px-3 text-lg font-bold tracking-wider text-gray-900 opacity-85 dark:text-gray-200 md:text-2xl">
            About Me
          </span>
          <div className="h-[0.2px] w-full bg-gray-400 sm:w-44 lg:w-80" />
        </section>

        {/* Description */}
        <div className="flex w-full flex-col space-y-8 sm:space-x-2 md:flex-row md:space-x-8 md:space-y-0">
          <div className="w-full space-y-4 text-justify text-sm md:w-7/12">
            <div className="font-header">
              <span className="text-gray-600 dark:text-gray-400">
                As a Senior Software Engineer, I really love new technologies
                and the challenges they represent in our current society. I
                particularly enjoy web development and DevOps activities.
              </span>
            </div>

            <div className="font-header">
              <span className="text-gray-600 dark:text-gray-400">
                After five years of study at INSA Rouen-Normandie in the
                Department of Architecture of Information Systems where I
                specialized in the web and <i>data mining</i>, I decided to
                realize my end of studies project at <strong>Takima</strong>.
                The high level of technical requirements and the importance of
                human relations in this company were two factors behind my
                decision to embark on this adventure.
              </span>
            </div>

            <div className="font-header">
              <span className="text-gray-600 dark:text-gray-400">
                On the other hand, I was lucky to be able to follow the
                &quot;Takima Academy&quot; course, a 10-week training during
                which my skills were increased tenfold, especially those around
                the Java, web and DevOps environments. During this training, I
                also learned about good development practices, code quality, the
                importance of tests, and agile methodologies.
              </span>
            </div>

            <div className="font-header">
              <span className="text-gray-600 dark:text-gray-400">
                From 2018 to 2020, I worked at <strong>Cartier</strong> as a
                consultant, where I built several fullstack applications to
                improve the working conditions and performance of craftsmen in
                luxury jewelry manufacturing workshops.
              </span>
            </div>

            <div className="font-header">
              <span className="text-gray-600 dark:text-gray-400">
                In 2020, I decided to join the <strong>Kannelle</strong> startup
                where I was in charge of developing from scratch an
                administration platform enabling to configure the experience
                within the mobile application, as well as a video editor. During
                the mission, I was also given the responsibility for the
                back-end, DevOps and cloud architecture.
              </span>
            </div>

            <div className="font-header">
              <span className="text-gray-600 dark:text-gray-400">
                In 2022, I took part in a great adventure by joining a french
                unicorn named <strong>Swile</strong> 🦄. Working in the
                &quot;Places&quot; team as a Software Engineer, I was in charge
                of developing many features related to the geolocation of the
                restaurants and shops affiliated with Swile, enhancing the
                existing product, contributing to the roadmap, etc. I have then
                been promoted <em>Senior Software Engineer</em> and worked
                actively on the ecommerce platform.
              </span>
            </div>

            <div className="font-header">
              <span className="text-gray-600 dark:text-gray-400">
                At the end of 2024, I chose to join{' '}
                <strong>Contentsquare</strong> in a core DevX team in order to
                seek to have a more transversal impact on a complex
                micro-frontends architecture.
              </span>
            </div>

            {/* Technologies */}
            <div className="font-header tracking-wide">
              <span className="text-gray-600 dark:text-gray-400">
                Here are a few technologies I&apos;ve been working with
                recently:
              </span>
            </div>

            <div className="flex flex-row space-x-16 font-header tracking-wide">
              <div className="flex flex-row items-center space-x-2">
                <div className="flex flex-col space-y-4 text-sm sm:text-base">
                  {technologies[0].map((tech) => {
                    return (
                      <div
                        key={tech}
                        className="flex flex-row items-center space-x-2"
                      >
                        <ArrowIcon className="size-4 text-primary" />
                        <span className="text-xs text-gray-600 dark:text-gray-400 sm:text-sm">
                          {tech}
                        </span>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="flex flex-row items-center space-x-2">
                <div className="flex flex-col space-y-4 text-sm sm:text-base">
                  {technologies[1].map((tech) => {
                    return (
                      <div
                        key={tech}
                        className="flex flex-row items-center space-x-2"
                      >
                        <ArrowIcon className="size-4 text-primary" />
                        <span className="text-xs text-gray-600 dark:text-gray-400 sm:text-sm">
                          {tech}
                        </span>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Image (desktop) */}
          <div className="group relative hidden md:block md:size-72 lg:size-96">
            <div className="absolute size-5/6 translate-x-5 translate-y-5 rounded border-2 border-primary duration-300 group-hover:translate-x-3 group-hover:translate-y-3" />

            <div className="absolute size-5/6 overflow-hidden rounded">
              <div className="absolute size-full overflow-hidden rounded-lg bg-primary opacity-10 duration-300 group-hover:opacity-0" />
              <Image
                src="/img/profile.jpg"
                alt="Portfolio profile"
                className="rounded-lg object-contain"
                fill
              />
            </div>
          </div>

          {/* Image (mobile) */}
          <div className="relative flex h-48 w-full items-center justify-center md:hidden">
            <div className="absolute h-full w-48 translate-x-5 translate-y-5 rounded border-2 border-primary" />
            <div className="absolute h-full w-48 overflow-hidden rounded">
              <Image
                src="/img/profile.jpg"
                className="rounded-lg object-cover"
                alt="Portfolio profile"
                fill
              />
            </div>
            <div className="absolute h-full w-48 overflow-hidden rounded-lg bg-primary opacity-10 md:opacity-60" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe
