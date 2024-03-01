import PostCard from '@/components/PostCard'
import React from 'react'
import { getPosts } from '@/lib/data'
import { Post } from '@/lib/models';

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/blog", {next:{revalidate:3600}});

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
}
const Blog = async () => {
  const posts = await getData()
  return (
    <div className='flex min-h-screen  flex-wrap items-center justify-center px-12 max-sm:px-0 py-24 gap-8'>
      {posts.map((post:Post) => (
        <PostCard
          key={post.id}
          post={post}
        />
      ))}
    </div>
  )
}

export default Blog
