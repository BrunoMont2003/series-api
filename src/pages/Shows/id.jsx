import React from 'react'
import { useParams } from 'react-router-dom'

export const SingleShow = () => {
  const { id } = useParams()
  return (
    <div>SingleShow {id}</div>
  )
}
