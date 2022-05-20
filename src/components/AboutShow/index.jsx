import React from 'react'
import ReactStars from 'react-rating-stars-component'
import './style.scss'
export const AboutShow = ({ show: { name, episodes, cast, rating, image, summary } }) => {
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
    <main className='min-vh-100 py-40 w-full flex items-center justify-center'>
      <section className='grid md:grid-cols-3 container min-h-full md:px-10'>
        <figure className='h-full flex items-center justify-center'>
          <img src={image.original} alt={name} className='w-48 md:w-80 rounded' />
        </figure>
        <article className='h-full px-10 md:col-span-2 flex flex-col gap-5 items-center my-5 md:items-start md:my-0'>
          <h1 className='font-bold text-3xl'>{name}</h1>
          <div className='flex gap-4 items-center ' style={{ color: '#EBCB8B' }}>
            <ReactStars
              edit={false}
              value={rating.average / 2}
              isHalf
              activeColor='#EBCB8B'
            />
            <span>{rating.average / 2}</span>
          </div>
          <h5 className='font-bold uppercase'>The cast</h5>
          <ul className='border-y py-5 overflow-hidden flex gap-5 w-full'>
            {sliceArray(cast).array.map(({ person: { image } }, index) => (
              <li key={index} className='p-0 cast-item '>
                <img src={image.original} alt={index} />
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
          <h5 className='font-bold uppercase'>Synopsis</h5>
          <p className='text-justify'>{truncateText(summary, 400)}</p>

        </article>
        {/* <article className='md:col-span-3 px-10 container mt-5'>
          <h5 className='font-bold uppercase'>Episodes</h5>

        </article> */}
      </section>

    </main>
  )
}
