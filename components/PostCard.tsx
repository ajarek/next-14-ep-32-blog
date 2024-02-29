import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
type Post = {
  _id: number
  user: string
  title: string
  img: string
  desc: string
  createdAt: string 
}
const PostCard = ({ post }: { post: Post }) => {
  return (
    <div className='card w-80 bg-base-100  shadow-xl pr-8 relative border-2 border-base-200'>
      <div className='absolute top-[180px] right-[-20px] -rotate-90'>
        {post.createdAt?.toString().slice(4, 16)}
      </div>
      <figure className='pt-4 '>
        <Image
          src={post.img}
          alt={post.title}
          width={260}
          height={400}
          className='rounded-xl'
        />
      </figure>
      <div className='card-body items-left text-left p-4'>
        <h2 className='card-title'>{post.title}</h2>
        <p>{post.desc}</p>
        <div className='card-actions'>
          <Link className='btn btn-primary btn-sm' href={`/blog/${post._id}`}>READ MORE</Link>
        </div>
      </div>
    </div>
  )
}

export default PostCard
