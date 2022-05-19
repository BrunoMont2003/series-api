import React, { useEffect, useState } from 'react'
import { Carousel } from '../components/Carousel'
import { GenreContainer } from '../components/GenreContainer'
import { Hero } from '../components/Hero'
import { getManyShows } from '../services/series'
import { Layout } from '../components/Layout'

export const Home = () => {
  const [recommendedShows, setRecommendedShows] = useState([])
  useEffect(() => {
    const fetchRec = async () => {
      const result = await getManyShows()
      setRecommendedShows(result)
    }
    fetchRec()
  }, [])

  return (
    <Layout>
      <Hero />
      {recommendedShows.length > 0 && <Carousel shows={recommendedShows} />}
      <GenreContainer />
    </Layout>
  )
}
