'use client'

import { useState } from 'react'
import { User } from '@/lib/models'
import { addUser } from '@/lib/action'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const DEFAULT_IS_ADMIN:boolean= false

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
    <>
      <form
        className='flex flex-col gap-4'
        onSubmit={handleSubmit}
      >
        <input
          type='text'
          placeholder='username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type='email'
          placeholder='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='password'
          placeholder='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type='text'
          placeholder='image'
          value={img}
          onChange={(e) => setImage(e.target.value)}
        />
        <input
          type='hidden'
          name='isAdmin'
          value={`${DEFAULT_IS_ADMIN}`}
        />
        <button type='submit'>Register</button>
      </form>
      <Link href='/login'>
        Have an account? <b>Login</b>
      </Link>
    </>
  )
}

export default RegisterForm
