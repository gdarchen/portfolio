import { FC, useState } from 'react'
import dynamic from 'next/dynamic'

import { type Project } from '../ProjectsList'
const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false })

import Image from 'next/image'
import { clsx } from 'clsx'
import { BiCarousel } from 'react-icons/bi'
import { FaGithub, FaMicrophoneAlt } from 'react-icons/fa'
import { FaLink, FaLocationDot, FaVideo } from 'react-icons/fa6'
import { RiSlideshow2Fill } from 'react-icons/ri'
import { SiNpm } from 'react-icons/si'
import { tv } from 'tailwind-variants'

import Badge from '@/components/badge/Badge'
import ArrowIcon from '@/components/icons/ArrowIcon'
import {
  Button,
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from '@headlessui/react'

import { ProjectImageCaroussel } from './ProjectImageCaroussel'

type Props = {
  project: Project
  index: number
}

const iconLink = tv({
  base: 'flex size-6 items-center justify-center text-xl text-gray-500 transition delay-75 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 hover:cursor-pointer hover:text-primary dark:text-gray-300',
})

const button = tv({
  base: 'inline-flex items-center gap-2 rounded-md bg-primary-500 px-3 py-1 text-sm font-semibold text-white shadow-inner shadow-white/10 data-hover:bg-gray-600 data-open:bg-gray-700 data-focus:outline-1 data-focus:outline-white focus:outline-hidden',
})

type ProjectGalleryModalProps = {
  project: Project
  opened: boolean
  onClose: () => void
}

// Dialog for mobile
const ProjectGalleryModal: FC<ProjectGalleryModalProps> = ({
  project,
  opened,
  onClose,
}) => {
  return (
    <Transition appear show={opened}>
      <Dialog
        as="div"
        className="relative z-10 focus:outline-hidden"
        onClose={onClose}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto bg-white/90 dark:bg-black/90">
          <div className="flex min-h-full items-center justify-center p-4">
            <TransitionChild
              enter="ease-out duration-300"
              enterFrom="opacity-0 transform-[scale(95%)]"
              enterTo="opacity-100 transform-[scale(100%)]"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 transform-[scale(100%)]"
              leaveTo="opacity-0 transform-[scale(95%)]"
            >
              <DialogPanel className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl">
                <DialogTitle
                  as="h3"
                  className="text-base/7 font-medium text-gray-900 dark:text-white"
                >
                  {project.title}
                </DialogTitle>

                <div className="mt-2 text-sm/6 text-white/50">
                  {project.video && (
                    <div className="size-full rounded-sm">
                      <ReactPlayer
                        url={project.video}
                        className="w-full"
                        width="100%"
                      />
                    </div>
                  )}

                  {project.images?.length === 1 ? (
                    <Image
                      src={project.images[0]}
                      alt={`Project ${project.title} image`}
                      className="size-full rounded-sm"
                      width={670}
                      height={420}
                    />
                  ) : project.images && project.images?.length > 1 ? (
                    <ProjectImageCaroussel images={project.images} />
                  ) : null}
                </div>

                <div className="mt-4">
                  <Button className={button()} onClick={onClose}>
                    Close
                  </Button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

const Project: FC<Props> = ({ project, index }) => {
  const [isMediaModalOpened, setIsMediaModalOpened] = useState(false)

  const isLeftMedia = index % 2 !== 0
  const mainLink =
    project.npm ??
    project.website ??
    project.video ??
    project.slides ??
    project.github

  const onOpenMediaModal = (): void => {
    setIsMediaModalOpened(true)
  }

  const onCloseMediaModal = (): void => {
    setIsMediaModalOpened(false)
  }

  return (
    <div
      data-aos="fade-up"
      className="relative w-full md:grid md:h-96 md:grid-cols-12 md:max-lg:first:mt-24"
    >
      <ProjectGalleryModal
        project={project}
        opened={isMediaModalOpened}
        onClose={onCloseMediaModal}
      />
      {/* Media column */}
      <div className="bg-background-light dark:bg-background absolute z-10 hidden size-full grid-cols-12 content-center py-4 md:grid">
        <div
          className={clsx(
            'relative col-span-7 size-full rounded-sm',
            isLeftMedia && 'col-start-6',
          )}
        >
          <a href={mainLink} target="_blank" rel="noreferrer">
            <span className="bg-background-light dark:bg-background absolute z-10 size-full rounded-sm opacity-25 transition-opacity duration-300 hover:cursor-pointer hover:opacity-0 dark:opacity-30" />
          </a>

          {project.video && (
            <div className="size-full rounded-sm">
              <ReactPlayer url={project.video} />
            </div>
          )}

          {/* Images */}
          {project.images?.length === 1 ? (
            <Image
              src={project.images[0]}
              alt={`Project ${project.title} image`}
              className="size-full rounded-sm"
              width={670}
              height={420}
            />
          ) : project.images && project.images?.length > 1 ? (
            <ProjectImageCaroussel images={project.images} />
          ) : null}
        </div>
      </div>

      {/* Project details */}
      <div className="size-full content-center pb-4 md:absolute md:grid md:grid-cols-12 md:pb-0">
        {/* Background for text in responsive */}
        <div
          className={clsx(
            'absolute z-0 size-full',
            isLeftMedia && 'md:order-2',
          )}
        >
          <div className="relative size-full">
            <div className="bg-primary absolute z-10 size-full opacity-10" />
            <div className="bg-background-light dark:bg-background absolute z-10 size-full opacity-90 dark:opacity-80" />
            {project.video && (
              <div className="size-full rounded-sm **:rounded-sm">
                <ReactPlayer url={project.video} height="100%" width="100%" />
              </div>
            )}
            {project.images && project.images?.length > 0 && (
              <Image
                src={project.images[0]}
                alt={`Project ${project.title} image`}
                className="size-full rounded-sm"
                width={670}
                height={420}
              />
            )}
          </div>
        </div>

        <div
          className={clsx(
            'col-span-8 flex flex-col items-start space-y-2 px-4 pt-4 sm:pt-12 md:space-y-3 md:py-0 xl:col-span-6',
            isLeftMedia
              ? 'col-span-8 md:order-1 xl:col-span-6'
              : 'col-start-5 md:items-end xl:col-start-7',
          )}
        >
          <div
            className={clsx(
              'z-10 flex flex-col space-y-1',
              isLeftMedia ? 'items-start' : 'md:items-end',
            )}
          >
            {/* Dates */}
            <span className="text-secondary-light dark:text-secondary font-mono text-sm">
              {project.dates}
            </span>

            {/* Location */}
            <span className="mt-2 flex font-mono text-xs text-gray-500">
              <FaLocationDot />
              <span className="ml-1">{project.location}</span>
            </span>

            <a href={mainLink} target="_blank" rel="noopener noreferrer">
              <span className="text-primary text-xl font-bold hover:cursor-pointer md:text-gray-600 dark:md:text-gray-200">
                {project.title}
              </span>
            </a>
          </div>

          <div className="shadow-background-secondary-light dark:shadow-background-secondary md:bg-background-secondary-light dark:md:bg-background-secondary z-10 w-full rounded-md py-2 opacity-90 shadow-sm md:p-6 dark:opacity-90">
            <span className="font-content text-justify text-sm text-gray-700 dark:text-gray-300 dark:md:text-gray-400">
              {project.description}
            </span>

            {/* Events */}
            {project.events && (
              <div className="mt-4">
                <div className="text-primary dark:text-secondary font-mono text-sm">
                  Events
                </div>
                {project.events.map((event) => {
                  return (
                    <div
                      key={event}
                      className="font-content flex text-left text-xs text-gray-600 sm:text-sm md:text-justify dark:text-gray-300 dark:md:text-gray-400"
                    >
                      <ArrowIcon className="text-primary mr-2 h-5 w-4 flex-none" />
                      <span>{event}</span>
                    </div>
                  )
                })}
              </div>
            )}
          </div>

          {/* Technologies */}
          {project.technologies && (
            <div
              className={clsx(
                'font-content flex w-full flex-wrap text-sm text-gray-600 dark:text-gray-300 dark:md:text-gray-400',
                isLeftMedia ? 'md:justify-start' : 'md:justify-end',
              )}
            >
              {project.technologies.map((tech) => {
                return (
                  <Badge
                    key={`${project.key}-${tech}`}
                    className="z-10 mr-2 mb-2 last:mr-0"
                  >
                    {tech}
                  </Badge>
                )
              })}
            </div>
          )}

          {/* Links */}
          <div
            className={clsx(
              'z-10 flex space-x-5',
              isLeftMedia ? 'flex-row-reverse space-x-reverse' : 'flex-row',
            )}
          >
            {project.talk && (
              <Badge variant="red">
                <FaMicrophoneAlt />
                Talk
              </Badge>
            )}

            {project.website && (
              <a
                href={project.website}
                target="_blank"
                rel="noreferrer"
                className={iconLink()}
              >
                <FaLink />
              </a>
            )}

            {project.video && (
              <a
                href={project.video}
                target="_blank"
                rel="noreferrer"
                className={iconLink()}
              >
                <FaVideo />
              </a>
            )}

            {project.slides && (
              <a
                href={project.slides}
                target="_blank"
                rel="noreferrer"
                className={iconLink()}
              >
                <RiSlideshow2Fill />
              </a>
            )}

            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className={iconLink()}
              >
                <FaGithub />
              </a>
            )}

            {project.npm && (
              <a
                href={project.npm}
                target="_blank"
                rel="noreferrer"
                className={iconLink()}
              >
                <SiNpm />
              </a>
            )}
          </div>

          {(project.video ||
            (project.images && project.images?.length > 0)) && (
            <div className="z-10 flex w-full items-center justify-center sm:hidden">
              <Button onClick={onOpenMediaModal} className={button()}>
                {project.video ? (
                  <>
                    <FaVideo /> Watch video
                  </>
                ) : (
                  <>
                    <BiCarousel /> View gallery
                  </>
                )}
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Project
