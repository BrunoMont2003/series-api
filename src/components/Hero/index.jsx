import React from 'react'
import './style.scss'
import { Button } from '../Button'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
export const Hero = () => {
  return (
    <section className='hero'>
      <nav className='border w-full h-16 absolute'>nav</nav>
      <article className='hero__article'>
        <h1 className='hero__title'>This is TvMaze</h1>
        <h2 className='hero__subtitle'>Your personal tv guide</h2>
        <div className='hero__buttons flex gap-5 mt-10'>
          <Button text='Learn More' />
          <Button text='Search' icon={faSearch} />
        </div>
      </article>
    </section>
  )
}
