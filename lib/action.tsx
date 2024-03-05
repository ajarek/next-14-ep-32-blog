'use server'

import connectToDb from './connectToDb'
import { Post, User } from './models'
import { revalidatePath } from 'next/cache'


export const addPost = async (formData:Post) => {
  
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
export const deletePost = async (formData: Post) => {
 
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

export const addUser = async (formData: User) => {
  console.log(formData);
  
  const { username, email, password, img, isAdmin } = formData
  try {
    connectToDb()
    const newUser = new User({
      username, email, password, img, isAdmin
    })
    await newUser.save()
    console.log('saved' + newUser)
    revalidatePath('/')
  } catch (err) {
    console.log(err)
  }
}