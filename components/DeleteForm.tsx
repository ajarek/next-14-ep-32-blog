'use client'

import { deletePost } from '@/lib/action'

const DeleteForm = ({ idBlog }: { idBlog: string }) => {
  const handleSubmit = async (event: any) => {
    event.preventDefault()

    try {
      await deletePost({ id: idBlog })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form
      className='text-right'
      onSubmit={handleSubmit}
    >
      <input
        type='hidden'
        defaultValue={idBlog}
      />

      <button
        className='btn btn-error btn-sm'
        type='submit'
      >
        Delete
      </button>
    </form>
  )
}

export default DeleteForm
