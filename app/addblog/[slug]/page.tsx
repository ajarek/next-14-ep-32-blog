import {getUser} from '@/lib/data'
import BlogForm from '@/components/BlogForm'
const AddBlog =async ({ params }: { params: { slug: string } }) => {
  
console.log()

  const newUser= await getUser((params.slug).replace('%40','@'))
  console.log(newUser._id.toString());
  
  return (
    <div className='w-full min-h-screen  px-12 py-24 '>
      <BlogForm userId={newUser._id.toString()} />
    </div>
  )
}

export default AddBlog