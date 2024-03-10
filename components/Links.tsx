'use client'

import { useState } from 'react'

import Link from 'next/link'
import Image from 'next/image'

import ToggleTheme from './ToggleTheme'

const links = [
  { id: 1, title: 'Homepage', path: '/' },
  {
    id: 2,
    title: 'Blogs',
    path: '/blog',
  },
  {
    id: 3,
    title: 'Contact',
    path: '/contact',
  },
]

const Links = ({ session }: any) => {
  const [open, setOpen] = useState(false)

  return (
    <div className='w-full flex justify-between items-center mr-8 '>
      <div>
        <div
          tabIndex={0}
          role='button'
          className='btn btn-ghost btn-circle sm:hidden'
          onClick={() => setOpen(!open)}
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

        <div className='flex gap-8 max-sm:hidden '>
          {links.map((link) => (
            <Link
              href={link.path}
              key={link.id}
            >
              {link.title}
            </Link>
          ))}
           {session &&<Link href={`/addblog/${session.user.email}`}>Add Blog</Link>}
           {session &&<Link href={`/myblogs`}>My Blogs</Link>}
        </div>
      </div>
      {open && (
        <div className='absolute top-24 left-0 z-30 flex flex-col gap-4 bg-white p-8 sm:hidden shadow'>
          {links.map((link) => (
            <Link
              href={link.path}
              key={link.id}
            >
              {link.title}
            </Link>
          ))}
           {session &&<Link href={`/addblog/${session.user.email}`}>Add Blog</Link>}
           {session &&<Link href={`/myblogs`}>My Blogs</Link>}
        </div>
      )}
      <ToggleTheme />
    </div>
  )
}

export default Links
