import React, { ComponentType, FC } from 'react'
import { motion } from 'framer-motion'

import { socialMedia } from '@/constants/social'

type Props = {
  href: string
  Icon: ComponentType<{ className: string }>
}

const IconClickableWithAnimation: FC<Props> = ({ href, Icon }) => {
  return (
    <motion.div whileHover={{ y: -3, transition: { duration: 0.1 } }}>
      <a href={href} target="_blank" rel="noreferrer">
        <Icon className="size-6 fill-current text-gray-500 hover:cursor-pointer hover:text-primary dark:text-gray-400" />
      </a>
    </motion.div>
  )
}
export default function SocialMediaEmail() {
  return (
    <>
      <motion.div
        initial={{ y: '100%' }}
        animate={{ y: '0%' }}
        transition={{ y: { duration: 0.5 } }}
        className="fixed bottom-0 left-0 z-10 hidden flex-row items-center justify-between px-12 lg:flex"
      >
        <div className="flex flex-col items-center justify-center space-y-8">
          <div className="flex flex-col items-center justify-center space-y-5">
            {socialMedia.map((med) => (
              <IconClickableWithAnimation
                key={med.url}
                Icon={med.icon}
                href={med.url}
              />
            ))}
          </div>
          <div className="h-28 w-0.5 bg-gray-400" />
        </div>
      </motion.div>

      {/* Email address */}
      <motion.div
        initial={{ y: '170%' }}
        animate={{ y: '0%' }}
        transition={{ y: { duration: 0.5 } }}
        className="fixed -right-10 bottom-0 z-10 hidden flex-row items-center justify-between lg:flex"
      >
        <div className="flex flex-col items-center justify-center space-y-28">
          <motion.div
            initial={{ rotate: 90 }}
            whileHover={{
              y: -3,
              transition: {
                y: { duration: 0.1 },
                rotate: { duration: 0 },
              },
            }}
          >
            <a
              href="mailto:darchen.gautier&gmail.com"
              target="_blank"
              rel="noreferrer"
              className="hover:no-underline"
            >
              <span className="font-header tracking-wider text-gray-500 hover:cursor-pointer hover:text-primary dark:text-gray-400">
                darchen.gautier<span className="text-primary">@</span>gmail
                <span className="text-primary">.</span>com
              </span>
            </a>
          </motion.div>

          <div className="h-24 w-0.5 bg-gray-400" />
        </div>
      </motion.div>
    </>
  )
}
