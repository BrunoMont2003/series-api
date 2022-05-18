import React, { useRef, useEffect, useState } from 'react'
import './style.scss'
import { motion } from 'framer-motion'
import { CardPrimary } from '../CardPrimary'
export const Carousel = ({ shows = [] }) => {
  return (
    <section className='container'>
      <motion.div className='carousel'>
        <motion.div drag='x' className='inner-carousel'>
          {shows.map((show, index) => (
            <CardPrimary key={index} show={show} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
