'use server'

import connectToDb from './connectToDb'
import { Post, User } from './models'
import { revalidatePath } from 'next/cache'
import bcrypt from 'bcryptjs'
export const addPost = async (formData: Post) => {
  const { title, desc, userId, img } = formData
  try {
    connectToDb()
    const newPost = new Post({
      title,
      desc,
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
export const deletePost = async (formData: { id: string }) => {
  const { id } = formData
  try {
    connectToDb()

    await Post.findByIdAndDelete(id)
    console.log('deleted from db' + id)
    revalidatePath('/blog')
  } catch (err) {
    console.log(err)
    return { err: 'Something went wrong' }
  }
}

export const addUser = async (formData: User) => {
  const { username, email, password, img, isAdmin } = formData
  const hashedPassword = await bcrypt.hash(password, 5)
  try {
    connectToDb()
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      img,
      isAdmin,
    })
    await newUser.save()
    console.log('saved' + newUser)
    revalidatePath('/')
  } catch (err) {
    console.log(err)
  }
}
