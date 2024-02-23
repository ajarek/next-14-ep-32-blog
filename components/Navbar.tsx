'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'


const Navbar = () => {
  const [isDark, setIsDark] = useState(false)
  useEffect(() => {
    if (typeof document !== 'undefined') {
      const dataTheme = document.querySelector('html') as HTMLHtmlElement
      if (isDark) {
        dataTheme.dataset.theme = 'dark'
      } else {
        dataTheme.dataset.theme = 'light'
      }
    }
  }, [isDark])

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
      <label className='flex cursor-pointer gap-2 ml-4'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='20'
          height='20'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <circle
            cx='12'
            cy='12'
            r='5'
          />
          <path d='M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4' />
        </svg>
        <input
          type='checkbox'
          value='synthwave'
          className='toggle theme-controller'
          onChange={() => setIsDark(!isDark)}
        />
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='20'
          height='20'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <path d='M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z'></path>
        </svg>
      </label>
    </div>
  )
}

export default Navbar