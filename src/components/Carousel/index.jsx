import React, { useRef, useEffect, useState } from 'react'
import './style.scss'
import { motion } from 'framer-motion'
import { CardPrimary } from '../CardPrimary'
export const Carousel = ({ shows = [] }) => {
  return (
    <section className='container'>
      <motion.div className='carousel pt-10'>
        <motion.div drag='x' className='inner-carousel py-5'>
          {shows.map((show, index) => (
            <CardPrimary key={index} show={show} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
