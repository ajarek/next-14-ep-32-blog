'use client'

import { useState } from 'react'
import { updateDoc } from '@/lib/action'
import { useRouter } from 'next/navigation'

const EditForm = ({
  editTitle,
  userId,
  editDesc,
  editImg,
}: {
  editTitle: string
  userId: string
  editDesc: string
  editImg: string
}) => {
  const [title, setTitle] = useState(editTitle)
  const [desc, setDesc] = useState(editDesc)
  const [img, setImg] = useState(editImg)

  const router = useRouter()

  const handleSubmit = async (event: any) => {
    event.preventDefault()
    const formData: any = {
      title,
      desc,
      img,
      userId: userId,
    }
    console.log('formData', formData)
    try {
      await updateDoc(formData)
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
          defaultValue={title}
          onChange={(e) => setTitle(e.target.value)}
          className='input input-bordered w-full max-w-xs'
        />
        <textarea
          placeholder='desc'
          defaultValue={desc}
          onChange={(e) => setDesc(e.target.value)}
          className='textarea textarea-bordered '
        />

        <input
          type='text'
          placeholder='img'
          defaultValue={img}
          onChange={(e) => setImg(e.target.value)}
          className='input input-bordered w-full max-w-xs'
        />

        <button
          className='btn btn-primary'
          type='submit'
        >
          Update Blog
        </button>
      </form>
    </div>
  )
}

export default EditForm
