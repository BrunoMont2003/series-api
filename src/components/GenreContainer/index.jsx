import './style.scss'
import * as React from 'react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const genres = [
  {
    label: 'Action',
    icon: '😋'
  },
  {
    label: 'Comedy',
    icon: '😋'
  },
  {
    label: 'Romance',
    icon: '😋'
  },
  {
    label: 'Criminal',
    icon: '😋'
  }
]

export const GenreContainer = () => {
  const [tabs, setTabs] = useState(genres)
  const [selectedTab, setSelectedTab] = useState(tabs[0])
  window.addEventListener('resize', (e) => {
    const width = window.innerWidth
    if (width <= 480) {
      let data = genres
      data = data.slice(0, 2)
      setTabs(data)
    } else if (width > 480 && width < 760) {
      let data = genres
      data = data.slice(0, 3)
      setTabs(data)
    } else {
      const data = genres
      setTabs(data)
    }
  })
  return (
    <div className='container'>
      <nav>
        <ul className=' flex justify-end gap-5 relative pb-1 border-opacity-25 border-slate-300  border-b '>
          {tabs.map((item) => (
            <li
              key={item.label}
              className={item === selectedTab ? 'selected' : ''}
              onClick={() => setSelectedTab(item)}
            >
              {item.label}
              {item === selectedTab ? (
                <motion.div className='underline' layoutId='underline' />
              ) : null}
            </li>
          ))}
        </ul>
      </nav>
      <main>
        <AnimatePresence exitBeforeEnter>
          <motion.div
            key={selectedTab ? selectedTab.label : 'empty'}
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.15 }}
          >
            {selectedTab ? selectedTab.icon : '😋'}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  )
}
