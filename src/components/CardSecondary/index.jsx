import React from 'react'
import { motion } from 'framer-motion'
import ReactStars from 'react-rating-stars-component'
import defaultImg from '../../assets/default.png'
import './style.scss'
export const CardSecondary = ({ show }) => {
  return (
    <>
      <motion.article
        layoutId={show.id} className='target'
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 1.1 }}

      >
        <figure>
          <motion.img src={show.image ? show.image.original : defaultImg} />
        </figure>
        <div className='px-2'>

          <motion.h2>{show.name}</motion.h2>
          <ReactStars
            edit={false}
            value={show.rating.average / 2}
            isHalf
            activeColor='#EBCB8B'
          />
        </div>
      </motion.article>
    </>
  )
}
