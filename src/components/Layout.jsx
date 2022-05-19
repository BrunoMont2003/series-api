import React from 'react'
import { Navbar } from './Navbar'
import { motion } from 'framer-motion'
export const Layout = ({ children }) => {
  const pageTransition = {
    in: {
      opacity: 1
    },
    out: {
      opacity: 0
    }
  }
  return (
    <div className='min-h-screen flex justify-center items-center flex-col gap-5 relative'>
      <Navbar />
      <motion.div
        className='min-h-screen flex justify-center items-center flex-col gap-5 w-full'
        initial='out'
        animate='in'
        exit='out'
        transition={{
          delay: '0.2'
        }}
        variants={pageTransition}
      >
        {children}
      </motion.div>
    </div>
  )
}
