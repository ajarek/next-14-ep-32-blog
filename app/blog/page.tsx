import PostCard from '@/components/PostCard'
import React from 'react'
import data from '@/public/data/data.json'
const Blog = () => {
  return (
    <div className='flex min-h-screen  flex-wrap items-center justify-center px-12 max-sm:px-0 py-24 gap-8'>
      {data.map((post) => (
        <PostCard
          key={post.id}
          post={post}
        />
      ))}
    </div>
  )
}

export default Blog
