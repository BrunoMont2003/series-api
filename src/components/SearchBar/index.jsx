import React from 'react'
import { Button } from '../Button'
import { motion } from 'framer-motion'
import './style.scss'
export const SearchBar = ({ onSubmit, onChange }) => {
  return (
    <form className='flex flex-col sm:flex-row items-center searcher gap-5' onSubmit={onSubmit}>
      <label htmlFor='simple-search' className='sr-only'>Search</label>
      <div className='relative'>
        <motion.input whileFocus={{ scale: 1.05 }} type='text' onChange={onChange} className='bg-transparent border border-gray-300 text-slate-100 text-sm rounded-lg  block w-full pl-5 p-2.5  ' placeholder='Search by Name' required />
      </div>
      <Button text='Search' />
    </form>
  )
}
