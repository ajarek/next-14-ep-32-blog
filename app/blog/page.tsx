import PostCard from '@/components/PostCard'
import React from 'react'
import { getPosts } from '@/lib/data'
const Blog = async () => {
  const posts = await getPosts()
  return (
    <div className='flex min-h-screen  flex-wrap items-center justify-center px-12 max-sm:px-0 py-24 gap-8'>
      {posts.map((post) => (
        <PostCard
          key={post.id}
          post={post}
        />
      ))}
    </div>
  )
}

export default Blog
