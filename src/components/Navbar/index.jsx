import React, { useState } from 'react'
import './style.scss'
import tv from '../../assets/tv.png'
import { Link, NavLink } from 'react-router-dom'
export const Navbar = () => {
  const [navbar, setNavbar] = useState(false)
  const changeNavbar = () => {
    if (window.scrollY >= 300) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }
  window.addEventListener('scroll', changeNavbar)
  return (
    <nav className='w-full px-20 py-16 h-16 top-0 fixed z-10 flex items-center justify-between my-nav' style={navbar ? { backgroundColor: '#2E3440', paddingTop: '1rem', paddingBottom: '1rem' } : {}}>
      <Link to='/'>
        <figure className='flex gap-5 items-center justify-center'>
          <img src={tv} alt='tv' className='logo h-12' />
          <figcaption className='font-semibold text-xl'>TvMaze</figcaption>
        </figure>
      </Link>
      <ul className='flex gap-5'>
        <li className='nav-item'>
          <NavLink
            to='/'
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Home
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink
            to='/shows'
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Shows
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
