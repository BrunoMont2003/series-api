import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { motion } from 'framer-motion'
import './style.scss'

export const Button = ({ text, icon, to }) => {
  return (
    <>
      {to
        ? (
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1.1 }}
            className='btn'
          >
            {icon && <FontAwesomeIcon icon={icon} />}
            {text}
          </motion.a>
          )
        : (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1.1 }}
            className='btn'
          >
            {icon && <FontAwesomeIcon icon={icon} />}
            {text}
          </motion.button>
          )}
    </>
  )
}
