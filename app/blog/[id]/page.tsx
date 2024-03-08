import Image from 'next/image'
import NotFound from '@/app/not-found'
import { getPost, getUser } from '@/lib/data'
import { Post, User } from '@/lib/models'

const BlogId = async ({ params }: { params: { id: number } }) => {
  const postId: Post = await getPost(params.id)
  const userName: User = await getUser(postId.userId)

  if (!postId) {
    return <NotFound />
  }

  return (
    <div className='w-full min-h-screen grid grid-cols-2 max-sm:grid-cols-1 px-12 py-24 gap-4 '>
      <div className='flex justify-center items-center'>
        <Image
          src={postId.img}
          alt={postId.title}
          width={280}
          height={358}
        />
      </div>
      <div className='flex flex-col justify-center items-start px-8 max-sm:px-2 gap-4 '>
        <div className=' flex items-center  mb-4  '>
          <figure className=''>
            <Image
              src={userName.img ? userName.img : '/images/noavatar.png'}
              alt='user'
              width={50}
              height={50}
              className='rounded-full'
            />
          </figure>
          <div className='grid grid-cols-2 grid-row-2  px-2  '>
            <div className='text-slate-500'>Author:</div>
            <div className='text-slate-500'>Published:</div>
            <div>{userName.username}</div>
            <div>{postId.createdAt.toString().slice(0, 10)}</div>
          </div>
        </div>

        <h1 className='text-xl font-semibold'>{postId.title}</h1>
        <p className='text-lg'>{postId.desc}</p>
      </div>
    </div>
  )
}

export default BlogId
