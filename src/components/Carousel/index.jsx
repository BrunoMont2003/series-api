import React, { useRef, useEffect, useState } from 'react'
import './style.scss'
import { motion } from 'framer-motion'
import { CardPrimary } from '../CardPrimary'
export const Carousel = ({ shows = [] }) => {
  const [width, setWidth] = useState(0)
  const carousel = useRef()
  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
  }, [])
  return (
    <section className='container'>
      <h2 className='p-5 text-2xl font-bold'>Popular Shows</h2>
      <motion.div
        ref={carousel}
        className='carousel pt-10'
        whileTap={{ cursor: 'grabbing' }}
      >
        <motion.div
          drag='x'
          dragConstraints={{ right: 0, left: -width }}
          className='inner-carousel py-5'
        >
          {shows.map((show, index) => (
            <CardPrimary key={index} show={show} />
          ))}
        </motion.div>
      </motion.div>
    </section>
  )
}
