'use server'


import { Post, User } from './models'
import connectToDb from './connectToDb'


export const getUsers = async () => {
  await connectToDb()
  const users = await User.find()
  return users
}
export const getUser = async (id:number) => {
  await connectToDb()
  const user = await User.findById(id)
  return user
}

export const getPosts = async () => {
  await connectToDb()
  const posts = await Post.find()
  return posts
}
export const getPost = async (id:number) => {
  await connectToDb()
  const post = await Post.findById(id)
  return post
}
