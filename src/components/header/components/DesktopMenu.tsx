import React, { FC } from 'react'
import { motion } from 'framer-motion'
import { Link as ReactScrollLink } from 'react-scroll'
import { tv } from 'tailwind-variants'

const menuItem = tv({
  base: 'text-white duration-300 hover:cursor-pointer hover:text-blue-800',
})

const DesktopMenu: FC = () => {
  return (
    <div className="hidden flex-row items-center space-x-4 font-mono text-xs md:flex lg:space-x-8">
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', duration: 1.2, delay: 0.4 }}
      >
        <ReactScrollLink
          to="about-me"
          spy
          smooth
          offset={-100}
          duration={200}
        >
          &gt; 01. <span className={menuItem()}>About</span>
        </ReactScrollLink>
      </motion.div>

      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', duration: 1.2, delay: 0.7 }}
        className="text-primary"
      >
        <ReactScrollLink
          to="work-experience"
          spy
          smooth
          offset={-300}
          duration={200}
        >
          &gt; 02. <span className={menuItem()}>Experience</span>
        </ReactScrollLink>
      </motion.div>

      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', duration: 1.2, delay: 0.8 }}
        className="text-primary"
      >
        <ReactScrollLink
          to="projects"
          spy
          smooth
          offset={-100}
          duration={200}
        >
          &gt; 03. <span className={menuItem()}>Projects</span>
        </ReactScrollLink>
      </motion.div>

      <motion.span
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', duration: 1.2, delay: 0.9 }}
        className="text-primary"
      >
        <ReactScrollLink
          to="skills"
          spy
          smooth
          offset={-100}
          duration={200}
        >
          &gt; 04. <span className={menuItem()}>Skills</span>
        </ReactScrollLink>
      </motion.span>

      <motion.span
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', duration: 1.2, delay: 1.2 }}
        className="text-primary"
      >
        <ReactScrollLink
          to="contact"
          spy
          smooth
          offset={-100}
          duration={200}
        >
          &gt; 05. <span className={menuItem()}>Contact</span>
        </ReactScrollLink>
      </motion.span>

      <a href="/resume.pdf" target="_blank" rel="noreferrer">
        <motion.button
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', duration: 1.2, delay: 1.2 }}
          className="border-spacing-2 rounded-sm border border-primary px-3 py-2 text-primary hover:bg-hovered"
        >
          Resume
        </motion.button>
      </a>
    </div>
  )
}

export default DesktopMenu