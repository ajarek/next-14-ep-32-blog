import { getUser } from '@/lib/data'
import BlogForm from '@/components/BlogForm'
import { auth } from '@/app/api/auth/auth'
import NotFound from '@/app/not-found'
const AddBlog = async ({ params }: { params: { slug: string } }) => {
  const session = await auth()

  return (
    <>
      {session ? (
        <div className='w-full min-h-screen  px-12 py-24 '>
          <BlogForm userId={params.slug.replace('%40', '@')} />
        </div>
      ) : (
        <NotFound />
      )}
    </>
  )
}

export default AddBlog
