import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { motion } from 'framer-motion'
import './style.scss'

export const Button = ({ text, icon, onClick }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 1.1 }}
      className='btn'
      onClick={onClick}
    >
      {icon && <FontAwesomeIcon icon={icon} />}
      {text}
    </motion.button>
  )
}
