import React, { FC } from 'react'
import { motion } from 'framer-motion'

const MyName: FC = () => {
  return (
    <div className="flex h-full flex-col justify-center px-8 py-32 sm:px-8 sm:py-52 md:px-28 lg:px-32 xl:px-56 2xl:px-72">
      <motion.span
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: { duration: 0.2 },
          y: { delay: 0.4, duration: 0.2 },
        }}
        className="font-mono text-primary"
      >
        Hi, my name is
      </motion.span>

      <motion.h1
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: { delay: 0.5, duration: 0.2 },
          y: { delay: 0.5, duration: 0.2 },
        }}
        className="mt-4 text-3xl font-bold text-gray-300 sm:text-5xl md:text-6xl lg:text-7xl"
      >
        Gautier Darchen.
      </motion.h1>

      <motion.h2
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: { delay: 0.6, duration: 0.2 },
          y: { delay: 0.6, duration: 0.2 },
        }}
        className="mt-4 text-3xl font-bold text-gray-400 sm:text-5xl md:text-6xl lg:text-7xl"
      >
        I am passionate about web technologies.
      </motion.h2>

      <motion.h3
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: { delay: 0.7, duration: 0.2 },
          y: { delay: 0.7, duration: 0.2 },
        }}
        className="mt-10 font-header text-sm tracking-wider text-gray-400 sm:text-base md:text-lg"
      >
        Senior Software Engineer at <a href="https://www.swile.co/">Swile</a>,
        specialized in React, Node.js and DevOps technologies.
      </motion.h3>

      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          opacity: { delay: 0.8, duration: 0.2 },
          y: { delay: 0.8, duration: 0.2 },
        }}
        className="mt-12"
      >
        <a href="/resume.pdf" target="_blank" rel="noreferrer">
          <button className="rounded border border-primary bg-background px-4 py-3 text-primary sm:px-8 sm:py-4">
            Check out my resume!
          </button>
        </a>
      </motion.div>
    </div>
  )
}

export default MyName
