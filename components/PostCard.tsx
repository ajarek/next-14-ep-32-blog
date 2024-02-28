import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
type Post = {
  _id: number
  user: string
  title: string
  img: string
  desc: string
}
const PostCard = ({ post }: { post: Post }) => {
  return (
    <div className='card w-72 bg-base-100  shadow-xl  '>
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
