'use client'

import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import ToggleTheme from './ToggleTheme'


const Navbar = () => {
 

  return (
    <div className='max-w-[1440px] mx-auto fixed navbar bg-base-100 shadow px-12 max-sm:px-4 z-10'>
      <div className='navbar-start'>
        <div className='dropdown sm:hidden'>
          <div
            tabIndex={0}
            role='button'
            className='btn btn-ghost btn-circle'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16M4 18h7'
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-xl gap-4'
          >
           
            <Link
            className='hover:underline transition-all '
            href='/premium'
          >
            Premium
          </Link>
          <Link
            className='hover:underline transition-all '
            href='/profile'
          >
            Profile
          </Link>
          <Link
            className='hover:underline transition-all '
            href='/login'
          >
            Login
          </Link>
          </ul>
        </div>
        <Link
          href={'/'}
          className='flex items-center'
        >
          
          <button className='btn btn-ghost text-xl'>Homepage</button>
        </Link>
      </div>
      <div className='navbar-center'></div>
      <div className='navbar-end'>
        <ul className='flex items-center gap-6 max-sm:hidden text-xl '>
          
          <Link
            className='hover:underline transition-all '
            href='/premium'
          >
            Premium
          </Link>
          <Link
            className='hover:underline transition-all '
            href='/profile'
          >
            Profile
          </Link>
          <Link
            className='hover:underline transition-all '
            href='/login'
          >
            Login
          </Link>
          
        </ul>
      </div>
      <ToggleTheme/>
    </div>
  )
}

export default Navbar