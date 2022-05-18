import React, { useEffect, useState } from 'react'
import { Carousel } from './components/Carousel'
import { GenreContainer } from './components/GenreContainer'
import { getManyShows } from './services/series'

export const App = () => {
  const [recommendedShows, setRecommendedShows] = useState([])
  useEffect(() => {
    const fetchRec = async () => {
      const result = await getManyShows()
      setRecommendedShows(result)
    }
    fetchRec()
  }, [])

  return (
    <div className='min-h-screen w-screen flex justify-center items-center flex-col gap-5'>
      {recommendedShows.length > 0 && <Carousel shows={recommendedShows} />}
      <GenreContainer />
    </div>
  )
}
