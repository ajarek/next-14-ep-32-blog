'use client'

import { useState } from 'react'
import { User } from '@/lib/models'
import { addUser } from '@/lib/action'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const DEFAULT_IS_ADMIN: boolean = false

const RegisterForm = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [img, setImage] = useState('')
  const [isAdmin, setIsAdmin] = useState(DEFAULT_IS_ADMIN)

  const router = useRouter()

  const handleSubmit = async (event: any) => {
    event.preventDefault()
    const formData: User = {
      username,
      email,
      password,
      img,
      isAdmin,
    }

    try {
      await addUser(formData)
      router.push('/api/auth/signin')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='min-h-full flex flex-col justify-start items-center'>
      <form
        className='w-80  flex flex-col gap-4 p-4 shadow-lg'
        onSubmit={handleSubmit}
      >
        <input
          type='text'
          placeholder='username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className='input input-bordered w-full max-w-xs'
        />
        <input
          type='email'
          placeholder='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='input input-bordered w-full max-w-xs'
        />
        <input
          type='password'
          placeholder='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className='input input-bordered w-full max-w-xs'
        />
        <input
          type='text'
          placeholder='image'
          value={img}
          onChange={(e) => setImage(e.target.value)}
          className='input input-bordered w-full max-w-xs'
        />
        <input
          type='hidden'
          name='isAdmin'
          value={`${DEFAULT_IS_ADMIN}`}
          className='input input-bordered w-full max-w-xs'
        />
        <button
          className='btn btn-primary'
          type='submit'
        >
          Register
        </button>
        <Link href='/api/auth/signin'>
          Have an account? <b>Login</b>
        </Link>
      </form>
    </div>
  )
}

export default RegisterForm
