import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import ReactStars from 'react-rating-stars-component'
import './style.scss'
export const CardSecondary = ({ show, clickCard, closeCard, selectedCard }) => {
  return (
    <>
      <motion.article layoutId={show.id} onClick={clickCard} className='target'>
        <figure>
          <motion.img src={show.image.original} />
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
      <AnimatePresence>
        {selectedCard && (
          <motion.article layoutId={selectedCard.id} className='bg-black'>
            <motion.h5>{selectedCard.subtitle}</motion.h5>
            <motion.h2>{selectedCard.title}</motion.h2>
            <motion.button onClick={closeCard} />
          </motion.article>
        )}
      </AnimatePresence>

    </>
  )
}
