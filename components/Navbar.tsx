'use client'

import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import ToggleTheme from './ToggleTheme'
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathName = usePathname();
 const session = false;
  const isAdmin = false;

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
             className={pathName==="/blog" ? "underline transition-all" : "transition-all"}
            href='/blog'
          >
           Blog
          </Link>
          {session && isAdmin && (
            
          <Link
          className={pathName==="/admin"?"underline transition-all":"transition-all"}
            href='/admin'
          >
            Admin
          </Link>
          )}
         { session ? (
          
           <button className='btn btn-ghost btn-sm w-fit text-xl font-normal'>Logout</button>
          ): (
            <Link
            className={pathName==="/login"?"underline transition-all":"transition-all"}
            href='/login'
          >
            Login
          </Link>
          )
        }
          
          </ul>
        </div>
        <Link
          href={'/'}
          className={pathName==='/'?'underline flex items-center transition-all':'flex items-center transition-all'}
        >
          
          <button className='btn btn-ghost text-xl'>Homepage</button>
        </Link>
      </div>
      <div className='navbar-center'></div>
      <div className='navbar-end'>
        <ul className='flex items-center gap-6 max-sm:hidden text-xl '>
          
                 
        <Link
            className={pathName==="/blog"?"underline transition-all":"transition-all"}
            href='/blog'
          >
           Blog
          </Link>
          {session && isAdmin && (
            
          <Link
          className={pathName==="/admin"?"underline transition-all":"transition-all"}
            href='/admin'
          >
            Admin
          </Link>
          )}
         { session ? (
          
           <button className='btn btn-ghost btn-sm w-fit text-xl font-normal'>Logout</button>
          ): (
            <Link
            className={pathName==="/login"?"underline transition-all":"transition-all"}
            href='/login'
          >
            Login
          </Link>
          )
        }
          
        </ul>
      </div>
      <ToggleTheme/>
    </div>
  )
}

export default Navbar