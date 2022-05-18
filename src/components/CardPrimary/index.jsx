import React from 'react'
import './style.scss'
import ReactStars from 'react-rating-stars-component'

export const CardPrimary = ({ show: { image, name, rating, summary } }) => {
  const truncateText = (text = '', maxLength = 300) => {
    // clean html tags
    text = text.replace(/<\/?[^>]+(>|$)/g, '')
    if (text.length > maxLength) {
      text = text.substring(0, maxLength) + '...'
    }
    return text
  }
  return (
    <article className='card'>
      <figure>
        <img src={image.original} alt='hola' />
      </figure>
      <div className='my-5 mr-10'>
        <h2 className='font-bold text-xl'>{name}</h2>
        <ReactStars edit={false} value={rating.average / 2} isHalf />
        <p className='text-justify my-5'>{truncateText(summary)}</p>
        <ul className='border-y p-5' />
      </div>
    </article>
  )
}
