import React from 'react'
import './style.scss'

export const CardPrimary = ({ show: { image } }) => {
  return (
    <figure>
      <img src={image.original} alt='hola' />
    </figure>
  )
}
