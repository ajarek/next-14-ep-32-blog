import mongoose from 'mongoose'

export type User = {
  username: string
  email: string
  password: string
  img: string
  isAdmin: boolean
}

export type Post = {
  title: string
  desc: string
  img: string
  userId: string
  slug: string
}

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true, min: 3, max: 20 },
    email: { type: String, required: true, unique: true, min: 3, max: 50 },
    password: { type: String, required: true, min: 6, max: 50 },
    img: { type: String },
    isAdmin: { type: Boolean, default: false },
  },
  {
    timestamps: true,
  }
)
const postSchema = new mongoose.Schema(
  {
    title: {type: String, required: true, },
    desc: {type: String, required: true, },
    img: {type: String, },
    userId: {type: String, required: true, },
    slug: {type: String, required: true,unique: true,
    },
  },
  { timestamps: true }
)
export const User = mongoose.models?.User || mongoose.model('User', userSchema)
export const Post = mongoose.models?.Post || mongoose.model("Post", postSchema);
