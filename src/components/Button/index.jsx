import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { motion } from 'framer-motion'
import './style.scss'

export const Button = ({ text, icon }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.95 }}
      className='btn'
    >
      {icon && <FontAwesomeIcon icon={icon} />}
      {text}
    </motion.button>
  )
}
