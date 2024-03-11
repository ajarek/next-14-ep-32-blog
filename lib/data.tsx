'use server'

import { Post, User } from './models'
import connectToDb from './connectToDb'

export const getUsers = async () => {
  await connectToDb()
  const users = await User.find()
  return users
}
export const getUser = async (email: string) => {
  await connectToDb()
  const user = await User.findOne({ email })
  return user
}
export const getUserId = async (id: number) => {
  await connectToDb()
  const user = await User.findById(id)
  return user
}

export const getPosts = async () => {
  await connectToDb()
  const posts = await Post.find()
  return posts
}
export const getPostsUser = async (userId: string) => {
  await connectToDb()
  const posts = await Post.find({ userId })
  return posts
}
export const getPost = async (id: string) => {
  await connectToDb()
  const post = await Post.findById(id)
  return post
}
