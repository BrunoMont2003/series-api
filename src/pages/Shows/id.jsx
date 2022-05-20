import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AboutShow } from '../../components/AboutShow'
import { Layout } from '../../components/Layout'
import { getShowByID, getShowByName } from '../../services/series'

export const SingleShow = () => {
  const { id } = useParams()
  const [show, setShow] = useState(null)
  useEffect(() => {
    const fetchShow = async () => {
      const result = await getShowByID(id)
      const byName = await getShowByName(result.name)
      const { _embedded: { episodes } } = byName
      result.episodes = episodes
      setShow(result)
      console.log(result)
    }
    fetchShow()
  }, [])
  return (
    <Layout>
      {show && <AboutShow show={show} />}
    </Layout>
  )
}
