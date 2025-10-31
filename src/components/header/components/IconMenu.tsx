import React, { FC } from 'react'
import { motion } from 'framer-motion'

type Props = {
  rotate: boolean
  onClick: () => void
}

const IconMenu: FC<Props> = ({ rotate, onClick }: Props) => {
  return (
    <div
      className="left-0 space-y-2 text-white hover:cursor-pointer lg:hidden"
      onClick={onClick}
    >
      <div className="flex justify-end">
        <motion.div
          animate={rotate ? { y: 10, rotate: 45 } : { rotate: 0, y: 0 }}
          transition={
            rotate
              ? { y: { duration: 0.15 }, rotate: { delay: 0.2 } }
              : { y: { delay: 0.2 }, rotate: { duration: 0.2 } }
          }
          className="bg-primary h-0.5 w-8 rounded-sm"
        />
      </div>

      <motion.div
        animate={rotate ? { opacity: 0 } : { opacity: 1 }}
        transition={{ opacity: { duration: 0 } }}
        className="flex justify-end"
      >
        <div className="bg-primary h-0.5 w-6 rounded-sm" />
      </motion.div>

      <div className="flex justify-end">
        <motion.div
          animate={
            rotate
              ? { y: -10, width: '150%', rotate: -45 }
              : { y: 0, rotate: 0, width: '50%' }
          }
          transition={
            rotate
              ? { y: { duration: 0.15 }, rotate: { delay: 0.2 } }
              : { y: { delay: 0.2 }, rotate: { duration: 0.2 } }
          }
          className="bg-primary h-0.5 w-4 rounded-sm"
        />
      </div>
    </div>
  )
}
export default IconMenu
