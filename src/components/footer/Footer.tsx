import React, { FC } from 'react'
import { IconType } from 'react-icons'
import { FaGithub } from 'react-icons/fa'

import { socialMedia } from '@/constants/social'

type ClickableIconProps = {
  href: string
  Icon: IconType
}

const ClickableIcon: FC<ClickableIconProps> = ({ href, Icon }) => {
  return (
    <a href={href} target="_blank" rel="noreferrer">
      <Icon
        className={
          'hover:text-primary size-5 fill-current text-gray-400 hover:cursor-pointer'
        }
      />
    </a>
  )
}

const Footer = () => {
  return (
    <div className="bg-background-light dark:bg-background flex flex-col items-center justify-center space-y-4 py-8">
      <div className="flex flex-row space-x-8 md:hidden">
        {socialMedia.map((med) => {
          return <ClickableIcon key={med.url} href={med.url} Icon={med.icon} />
        })}
      </div>

      <a href="https://github.com/gdarchen" target="_blank" rel="noreferrer">
        <div className="group flex flex-col items-center justify-center space-y-2 font-mono text-sm text-gray-500 dark:text-gray-400">
          <span className="group-hover:text-primary flex items-center justify-center text-xs sm:text-sm">
            <FaGithub className="group-hover:text-primary mr-2 hidden size-4 fill-current text-gray-500 md:inline dark:text-gray-400" />
            Built by Gautier Darchen
          </span>
        </div>
      </a>

      <span className="group-hover:text-primary flex flex-row items-center space-x-2 text-[9px] text-gray-300 dark:text-gray-600">
        <span>
          Inspired from{' '}
          <a
            href="https://github.com/bchiang7"
            className="not-hover:text-gray-300! not-hover:dark:text-gray-600!"
          >
            B.Chiang&apos;s
          </a>{' '}
          and{' '}
          <a
            href="https://github.com/hktitof"
            className="not-hover:text-gray-300! not-hover:dark:text-gray-600!"
          >
            A.Anaflous&apos;s
          </a>{' '}
          websites
        </span>
      </span>
    </div>
  )
}

export default Footer
