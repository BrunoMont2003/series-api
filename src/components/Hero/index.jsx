import React from 'react'
import './style.scss'
import { Button } from '../Button'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
export const Hero = () => {
  const navigate = useNavigate()
  return (
    <section className='hero'>
      <article className='hero__article'>
        <h1 className='hero__title'>This is TvMaze</h1>
        <h2 className='hero__subtitle'>Your personal tv guide</h2>
        <div className='hero__buttons flex gap-5 mt-10'>
          <Button text='Learn More' onClick={() => navigate('/')} />
          <Button text='Search' icon={faSearch} onClick={() => navigate('/shows')} />
        </div>
      </article>
    </section>
  )
}
