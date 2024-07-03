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
          'size-5 fill-current text-gray-400 hover:cursor-pointer hover:text-primary'
        }
      />
    </a>
  )
}

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 bg-background-light py-8 dark:bg-background">
      <div className="flex flex-row space-x-8 md:hidden">
        {socialMedia.map((med) => {
          return <ClickableIcon key={med.url} href={med.url} Icon={med.icon} />
        })}
      </div>

      <a href="https://github.com/gdarchen" target="_blank" rel="noreferrer">
        <div className="group flex flex-col items-center justify-center space-y-2 font-mono text-sm text-gray-500 dark:text-gray-400">
          <span className="flex items-center justify-center text-xs group-hover:text-primary sm:text-sm">
            <FaGithub className="mr-2 hidden size-4 fill-current text-gray-500 group-hover:text-primary dark:text-gray-400 md:inline" />
            Built by Gautier Darchen
          </span>
        </div>
      </a>

      <span className="flex flex-row items-center space-x-2 text-[9px] text-gray-300 group-hover:text-primary dark:text-gray-600">
        <span>
          Inspired from{' '}
          <a
            href="https://github.com/bchiang7"
            className="text-gray-300 dark:text-gray-600"
          >
            B.Chiang&apos;s
          </a>{' '}
          and{' '}
          <a
            href="https://github.com/hktitof"
            className="text-gray-300 dark:text-gray-600"
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
