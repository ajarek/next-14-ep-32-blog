import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
type Post = {
  id: number
  title: string
  image: string
  body: string
  date: string
}
const PostCard = ({post}: {post: Post}) => {
  return (

    <div className='card w-72 bg-base-100  relative'>
      <div className='absolute -right-8 top-[35%] -rotate-90'>
        {post.date}
      </div>
      <figure className='pr-10 '>
        <Image
          src={post.image}
          alt={post.title}
          width={300}
          height={451}  
          className='rounded-sm'
        />
      </figure>
      <div className='card-body items-left text-left px-0 py-4'>
        <h2 className='card-title'>{post.title}</h2>
        <p>{(post.body).slice(0, 9)}...</p>
        <div className='card-actions'>
         <Link href={`/blog/${post.id}`}>READ MORE</Link>
        </div>
      </div>
    </div>
  )
}

export default PostCard
