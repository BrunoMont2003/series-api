import './style.scss'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { getShowsByGenre } from '../../services/series'
import { CardSecondary } from '../CardSecondary'
import { useMyContext } from '../../context/MyContext'

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
  const [selectedTab, setSelectedTab] = useState(genres[0])
  const { tempGenres, setTempGenres } = useMyContext()
  useEffect(() => {
    const fetchGen = async () => {
      for (const genre of genres) {
        const result = await getShowsByGenre(genre.label)
        genre.shows = result
      }
      setSelectedTab(genres[0])
      setTabs(genres)
      setTempGenres(genres)
    }
    tempGenres[0].shows.length === 0 && fetchGen()
    tempGenres[0].shows.length > 0 && setTabs(tempGenres)
  }, [])
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
