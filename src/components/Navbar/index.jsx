import React from 'react'
import './style.scss'
import tv from '../../assets/tv.png'
import { Link, NavLink } from 'react-router-dom'
export const Navbar = () => {
  return (
    <nav className='container h-16 top-0 fixed z-10 flex items-center px-5 my-5 justify-between my-nav'>
      <Link to='/'>
        <figure className='flex gap-5 items-center justify-center'>
          <img src={tv} alt='tv' className='logo' />
          <figcaption className='font-semibold text-xl'>TvMaze</figcaption>
        </figure>
      </Link>
      <ul className='flex gap-5'>
        <li className='nav-item'>
          <NavLink to='/' className={({ isActive }) => isActive ? 'active' : ''}>
            Home
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink to='/shows' className={({ isActive }) => isActive ? 'active' : ''}>
            Shows
          </NavLink>
        </li>
      </ul>
    </nav>

  )
}
