'use server'


import { Post, User } from './models'
import connectToDb from './connectToDb'


export const getUsers = async (id:number) => {
  await connectToDb()
  const user = await User.findById(id)
  return user
}

export const getPosts = async () => {
  await connectToDb()
  const posts = await Post.find()
  return posts
}