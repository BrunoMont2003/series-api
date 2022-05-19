import React, { useEffect, useContext } from 'react'
import { Carousel } from '../components/Carousel'
import { GenreContainer } from '../components/GenreContainer'
import { Hero } from '../components/Hero'
import { getManyShows } from '../services/series'
import { Layout } from '../components/Layout'
import { MyContext } from '../context/MyContext'

export const Home = () => {
  const { recommendedShows, setRecommendedShows } = useContext(MyContext)
  useEffect(() => {
    const fetchRec = async () => {
      const result = await getManyShows()
      setRecommendedShows(result)
    }
    recommendedShows.length === 0 && fetchRec()
  }, [])

  return (
    <Layout>
      <Hero />
      {recommendedShows.length > 0 && <Carousel shows={recommendedShows} />}
      <GenreContainer />
    </Layout>
  )
}
