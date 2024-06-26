import { FC } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { tv } from 'tailwind-variants'

type Props = {
  hidden: boolean
  onClose: () => void
}

const menuItemLink = tv({
  base: 'flex flex-col space-y-2 text-center',
})

const menuItemDigit = tv({
  base: 'cursor-pointer font-mono text-xs text-primary',
})

const menuItemText = tv({
  base: 'font-content text-sm text-white duration-300 hover:cursor-pointer hover:text-primary sm:text-base',
})

const MobileMenu: FC<Props> = ({ hidden, onClose }) => {
  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={hidden ? { x: '100%' } : { x: '0' }}
      transition={{ x: { duration: 0.4 } }}
      className="fixed z-20 flex h-dvh w-full duration-300 md:hidden"
    >
      <div
        onClick={onClose}
        className="h-full w-1/4 bg-mobile-menu/30 backdrop-blur-sm hover:cursor-pointer"
      />

      <div className="flex h-full w-3/4 flex-col items-center justify-center space-y-8 bg-mobile-menu font-sans">
        <Link
          to="about-me"
          spy
          smooth
          offset={-50}
          duration={200}
          onClick={onClose}
          className={menuItemLink()}
        >
          <span className={menuItemDigit()}>01.</span>
          <span className={menuItemText()}>About</span>
        </Link>

        <Link
          to="work-experience"
          spy
          smooth
          offset={-250}
          duration={200}
          onClick={onClose}
          className={menuItemLink()}
        >
          <span className={menuItemDigit()}>02.</span>
          <span className={menuItemText()}>Experience</span>
        </Link>

        <Link
          to="projects"
          spy
          smooth
          offset={-100}
          duration={200}
          onClick={onClose}
          className={menuItemLink()}
        >
          <span className={menuItemDigit()}>03.</span>
          <span className={menuItemText()}>Projects</span>
        </Link>

        <Link
          to="skills"
          spy
          smooth
          offset={0}
          duration={200}
          onClick={onClose}
          className={menuItemLink()}
        >
          <span className={menuItemDigit()}>04.</span>
          <span className={menuItemText()}>Skills</span>
        </Link>

        <Link
          to="contact"
          spy
          smooth
          offset={100}
          duration={200}
          onClick={onClose}
          className={menuItemLink()}
        >
          <span className={menuItemDigit()}>05.</span>
          <span className={menuItemText()}>Contact</span>
        </Link>

        <a href="/resume.pdf" target="_blank" rel="noreferrer">
          <button className="rounded border border-primary px-5 py-2 font-content text-xs text-primary hover:bg-hovered sm:px-10 sm:py-4">
            Resume
          </button>
        </a>
      </div>
    </motion.div>
  )
}
export default MobileMenu
