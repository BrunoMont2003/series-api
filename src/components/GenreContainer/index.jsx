import './style.scss'
import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { getShowsByGenre } from '../../services/series'
import { CardSecondary } from '../CardSecondary'

const genres = [
  {
    label: 'Comedy',
    shows: []
  },
  {
    label: 'Science-Fiction',
    shows: []
  },
  {
    label: 'Romance',
    shows: []
  },
  {
    label: 'Crime',
    shows: []
  }
]

export const GenreContainer = () => {
  const [tabs, setTabs] = useState(genres)
  const [selectedTab, setSelectedTab] = useState({})
  useEffect(() => {
    const fetchGen = async () => {
      for (const genre of genres) {
        const result = await getShowsByGenre(genre.label)
        genre.shows = result
      }
      setSelectedTab(genres[0])
      setTabs(genres)
    }
    fetchGen()
    // responsive()
  }, [])
  // const responsive = () => {
  //   const width = window.innerWidth
  //   if (width <= 480) {
  //     let data = genres
  //     data = data.slice(0, 2)
  //     setTabs(data)
  //   } else if (width > 480 && width < 760) {
  //     let data = genres
  //     data = data.slice(0, 3)
  //     setTabs(data)
  //   } else {
  //     const data = genres
  //     setTabs(data)
  //   }
  // }
  // window.addEventListener('resize', (e) => {
  //   responsive()
  // })
  return (
    <>
      {selectedTab.shows && selectedTab.shows.length > 0
        ? (
          <div className='container genre-container'>
            <nav className='genre-options'>
              <h5 className='section-title'>Recommended Shows</h5>
              <ul className=' flex justify-end gap-5 relative pb-1 border-opacity-25 border-slate-300  border-b '>
                {tabs.map((item) => (
                  <li
                    key={item.label}
                    className={
                    item === selectedTab ? 'nav-item selected' : 'nav-item '
                  }
                    onClick={() => setSelectedTab(item)}
                  >
                    {item.label}
                    {item === selectedTab
                      ? (
                        <motion.div className='underline' layoutId='underline' />
                        )
                      : null}
                  </li>
                ))}
              </ul>
            </nav>
            <main className='my-5 px-5'>
              <AnimatePresence exitBeforeEnter>
                <motion.div
                  key={selectedTab ? selectedTab.label : 'empty'}
                  animate={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.15 }}
                  className='flex w-full justify-center sm:justify-between flex-wrap gap-5 py-5'
                >
                  {selectedTab &&
                  selectedTab.shows.length > 0 &&
                  selectedTab.shows.map((show, index) => (
                    <CardSecondary
                      show={show} key={index}
                    />
                  ))}
                </motion.div>
              </AnimatePresence>
            </main>
          </div>
          )
        : (
          <p>Loading ...</p>
          )}
    </>
  )
}
