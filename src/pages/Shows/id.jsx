import React from 'react'
import { useParams } from 'react-router-dom'
import { Layout } from '../../components/Layout'

export const SingleShow = () => {
  const { id } = useParams()
  return (
    <Layout>SingleShow {id}</Layout>
  )
}
