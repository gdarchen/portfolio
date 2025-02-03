import React, { FC } from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { tv } from 'tailwind-variants'

import ArrowIcon from '@/components/icons/ArrowIcon'

const button = tv({
  base: 'rounded-sm border-[1.5px] border-primary p-4 font-mono text-lg text-primary hover:bg-hovered-light dark:hover:bg-hovered',
})

const GetInTouch: FC = () => {
  return (
    <div
      id="contact"
      data-aos="fade-up"
      className="bg-background-light dark:bg-background flex h-48 w-full flex-col items-center space-y-4 md:h-64"
    >
      {/* Title */}
      <div className="flex flex-row items-center">
        <ArrowIcon className="text-primary size-5 flex-none md:h-6 md:w-5" />
        <div className="flex flex-row items-center space-x-2">
          <span className="text-primary font-sans text-sm sm:text-base">
            {' '}
            05.
          </span>
          <span className="text-primary font-sans text-base">Contact</span>
        </div>
      </div>

      {/* Get in touch */}
      <span className="text-3xl font-bold tracking-wider text-gray-900 opacity-85 sm:text-4xl dark:text-gray-200">
        Get In Touch
      </span>
      <div className="pt-4">
        <a
          href="https://www.linkedin.com/in/gautierdarchen/"
          target="_blank"
          rel="noreferrer"
          className="mr-4"
        >
          <button className={button()}>
            <FaLinkedin />
          </button>
        </a>

        <a
          href="mailto:darchen.gautier@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <button className={button()}>
            <MdEmail />
          </button>
        </a>
      </div>
    </div>
  )
}

export default GetInTouch
