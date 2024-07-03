import React, { FC } from 'react'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'

const Logo: FC = () => {
  const pathname = usePathname()
  const router = useRouter()

  const scrollToTop = () => {
    if (typeof window === 'undefined') {
      return
    }

    if (pathname !== '/') {
      router.push('/')
      return
    }

    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button onClick={scrollToTop}>
      <motion.div
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: 'spring',
          y: { duration: 0 },
          opacity: { duration: 0 },
        }}
        className="relative h-12 w-10"
      >
        <motion.span
          initial={{ x: 1 }}
          className="absolute flex size-full items-center justify-center font-header text-sm text-primary"
        >
          GD
        </motion.span>

        <motion.div
          animate={{ rotate: -30, y: 5 }}
          className="h-1 w-6 rounded bg-primary"
        />

        <motion.div
          animate={{ rotate: 90, x: -10, y: 18 }}
          className="h-1 w-6 rounded bg-primary"
        />

        <motion.div
          animate={{ rotate: 30, y: 31 }}
          className="h-1 w-6 rounded bg-primary"
        />

        <motion.div
          animate={{ rotate: -30, y: 27, x: 19 }}
          className="h-1 w-6 rounded bg-primary"
        />

        <motion.div
          animate={{ rotate: 30, x: 19, y: -10 }}
          className="h-1 w-6 rounded bg-primary"
        />

        <motion.div
          animate={{ rotate: 90, x: 28, y: 2 }}
          className="h-1 w-6 rounded bg-primary"
        />
      </motion.div>
    </button>
  )
}

export default Logo
