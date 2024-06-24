import React, { FC } from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { tv } from 'tailwind-variants'

import ArrowIcon from '@/components/icons/ArrowIcon'

const button = tv({
  base: 'rounded border-[1.5px] border-primary p-4 font-mono text-lg text-primary hover:border-primary-300 hover:text-primary-300',
})

const GetInTouch: FC = () => {
  return (
    <div
      id="contact"
      data-aos="fade-up"
      className="flex h-48 w-full flex-col items-center space-y-4 bg-background md:h-72"
    >
      {/* Title */}
      <div className="flex flex-row items-center">
        <ArrowIcon className="size-5 flex-none text-primary md:h-6 md:w-5" />
        <div className="flex flex-row items-center space-x-2">
          <span className="font-sans text-sm text-primary sm:text-base">
            {' '}
            04.
          </span>
          <span className="font-sans text-base text-primary">Contact</span>
        </div>
      </div>

      {/* Get in touch */}
      <span className="text-3xl font-bold tracking-wider text-gray-200 opacity-85 sm:text-4xl">
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
