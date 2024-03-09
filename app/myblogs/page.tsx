import { auth } from '@/app/api/auth/auth'
import NotFound from '@/app/not-found'
import DeleteForm from '@/components/DeleteForm'
import { getPostsUser } from '@/lib/data'
import Image from 'next/image'
import Link from 'next/link'

const MyBlogs = async () => {
  const session: any = await auth()
  const myPosts = await getPostsUser(session.user.email)
  return (
    <>
      {session ? (
        <div className='w-full min-h-screen   px-12 py-24 '>
          <h1 className='text-2xl text-center mb-4'>My Blogs</h1>
          {myPosts.map((post) => (
            <div
              key={post._id}
              className='grid grid-cols-7 max-sm:grid-cols-1   gap-4 border-2 border-base-200 p-4 rounded-xl items-center'
            >
              <div> {post.createdAt?.toISOString().replace(/T/, ' ').replace(/\..+/, '')}</div>
              <div> {post.title}</div>
              <div> {(post.desc).slice(0,30)}...</div>
              <div>
                <Image
                  src={post.img}
                  alt={post.title}
                  width={60}
                  height={76}
                />
              </div>
              <div className='text-right'>
                <Link href={`/blog/${post._id}`} className='btn btn-secondary btn-sm '>View</Link>
              </div>
              <div className='text-right'>
                <button className='btn btn-primary btn-sm '>Edit</button>
              </div>
              
               <DeleteForm idBlog={(post._id).toString()} />
              
            </div>
          ))}
        </div>
      ) : (
        <NotFound />
      )}
    </>
  )
}

export default MyBlogs
