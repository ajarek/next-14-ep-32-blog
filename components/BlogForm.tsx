'use client'

import { useState } from 'react'
import { Post } from '@/lib/models'
import { addPost } from '@/lib/action'
import { useRouter } from 'next/navigation'
import Link from 'next/link'


const RegisterForm = ({userId}:{userId:string}) => {
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')
  const [img, setImg] = useState('')
 
  

  const router = useRouter()

  const handleSubmit = async (event: any) => {
    event.preventDefault()
    const formData: Post = {
      title,
      desc,
      img,
      userId: userId,
      
    }

    try {
      await addPost(formData)
       router.push('/blog')
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
          placeholder='title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type='text'
          placeholder='desc'
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          className="input input-bordered w-full max-w-xs"
        />
        <input
          type='text'
          placeholder='img'
          value={img}
          onChange={(e) => setImg(e.target.value)}
          className="input input-bordered w-full max-w-xs"
        />
       
        <button className='btn btn-primary' type='submit'>Add Blog</button>
      
      </form>
    </div>
  )
}

export default RegisterForm
