import {getUser} from '@/lib/data'
import BlogForm from '@/components/BlogForm'
import { auth } from '@/app/api/auth/auth'
import NotFound from '@/app/not-found'
const AddBlog =async ({ params }: { params: { slug: string } }) => {
  
  const session = await auth()


  const newUser= await getUser((params.slug).replace('%40','@'))
  
  
  return (
    <>
    {session ?
    (<div className='w-full min-h-screen  px-12 py-24 '>
     
      <BlogForm userId={newUser._id.toString()} />
      
    </div>):<NotFound/>
    }
    </>  
  )
}

export default AddBlog