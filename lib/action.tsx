'use server'

import connectToDb from './connectToDb'
import { Post } from './models'
import { revalidatePath } from 'next/cache'

type FormData = {
  title: string
  desc: string
  slug: string
  userId: string
  img: string
  id: string
}
export const addPost = async (formData: FormData) => {
  
  const { title, desc, slug, userId, img } = formData
  try {
    connectToDb()
    const newPost = new Post({
      title,
      desc,
      slug,
      userId,
      img,
    })
    await newPost.save()
    console.log('saved' + newPost)
    revalidatePath('/blog')
  } catch (err) {
    console.log(err)
  }
}
export const deletePost = async (formData: FormData) => {
 
  const { id } = formData
  try {
    connectToDb()
    
    await Post.findByIdAndDelete(id)
    console.log('deleted from db'+id)
    revalidatePath('/blog')
  } catch (err) {
    console.log(err)
    return {err:'Something went wrong'}
  }
}
