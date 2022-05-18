import React from 'react'
import './style.scss'
import ReactStars from 'react-rating-stars-component'
import { Button } from '../Button'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'

export const CardPrimary = ({
  show: { image, name, rating, summary, cast }
}) => {
  const truncateText = (text = '', maxLength = 200) => {
    // clean html tags
    text = text.replace(/<\/?[^>]+(>|$)/g, '')
    if (text.length > maxLength) {
      text = text.substring(0, maxLength) + '...'
    }
    return text
  }
  const sliceArray = (array = [], maxLength = 6) => {
    const diff = array.length - maxLength
    const newArray = array.slice(0, maxLength)
    return {
      array: newArray,
      diff
    }
  }
  return (
    <article className='card'>
      <figure>
        <img src={image.original} alt={name} />
      </figure>
      <div className='my-5 mr-10 info'>
        <h2 className='font-bold text-xl'>{name}</h2>
        <ReactStars
          edit={false}
          value={rating.average / 2}
          isHalf
          activeColor='#EBCB8B'
        />
        <p className='text-justify my-5'>{truncateText(summary)}</p>
        <ul className='border-y py-5 overflow-hidden sm:flex '>
          {sliceArray(cast).array.map(({ person: { image } }, index) => (
            <li key={index} className='p-0 cast-item'>
              <img src={image.original} alt={index} className='' />
            </li>
          ))}
          {sliceArray(cast).diff > 0 && (
            <li className='diff p-0 '>
              <span className='w-12 rounded-full h-12 flex justify-center items-center'>
                {sliceArray(cast).diff}+
              </span>
            </li>
          )}
        </ul>
        <div className='flex justify-end pt-5'>
          <Button icon={faInfoCircle} text='See More' />
        </div>
      </div>
    </article>
  )
}
