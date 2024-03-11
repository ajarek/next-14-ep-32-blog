import { auth } from '@/app/api/auth/auth'
import NotFound from '@/app/not-found'
import EditForm from '@/components/EditForm'
import { getPost } from '@/lib/data'

const EditBlog = async ({ params }: { params: { id: string } }) => {
  const session: any = await auth()
  const myPost = await getPost(params.id)
  return (
    <>
      {session ? (
        <div className='w-full min-h-screen   px-12 py-24 '>
          <h1 className='text-2xl text-center mb-4'>Edit Blog</h1>

          <EditForm
            editTitle={myPost.title}
            userId={session.user.email}
            editDesc={myPost.desc}
            editImg={myPost.img}
          />
        </div>
      ) : (
        <NotFound />
      )}
    </>
  )
}

export default EditBlog
