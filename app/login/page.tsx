import { signIn } from '@/lib/auth'
import React from 'react'
//3:34
const Login = () => {
  const handleGithubLogin = async () => {
    "use server"
    await signIn('github')  
  }
  return (
    <div className='flex min-h-screen flex-col items-center justify-between px-12 py-24 '>
      <form action={handleGithubLogin}>
        <button className='btn btn-primary'>Login with Github</button>
      </form>
    </div>
  )
}

export default Login
