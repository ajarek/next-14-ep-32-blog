import Image from 'next/image'
import NotFound from '@/app/not-found'
import { getPost, getUser } from '@/lib/data'
import PostUser from '@/components/PostUser'
import { Post } from '@/lib/models'


const BlogId = async ({ params }: { params: { id: number } }) => {
  const postId: Post = await getPost(params.id)
  const userId = await getUser(postId.userId)
  
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
         <PostUser userId={userId.id} createdAt={postId.createdAt?.toString().slice(4, 16)}/>
        <h1 className='text-xl font-semibold'>{postId.title}</h1>
        <p className='text-lg'>{postId.desc}</p>
      </div>
    </div>
  )
}

export default BlogId
