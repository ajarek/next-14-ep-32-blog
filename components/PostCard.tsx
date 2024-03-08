import { Post } from '@/lib/models'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const PostCard = ({ post }: { post: Post }) => {
  return (
    <div className='card w-80 bg-base-100  shadow-xl pr-8 relative border-2 border-base-200'>
      <div className='absolute top-[180px] right-[-20px] -rotate-90'>
        {post.createdAt?.toString().slice(0,10)}
      </div>
      <figure className='pt-4 '>
        <Image
          src={post.img}
          alt={post.title}
          width={260}
          height={320}
          className='rounded-xl object-cover object-center w-[260px] h-[320px]'
        />
      </figure>
      <div className='card-body items-left text-left p-4'>
        <h2 className='card-title'>{post.title}</h2>
        <p>{(post.desc).slice(0,30)}...</p>
        <div className='card-actions'>
          <Link className='btn btn-primary btn-sm' href={`/blog/${post._id}`}>READ MORE</Link>
        </div>
      </div>
    </div>
  )
}

export default PostCard
