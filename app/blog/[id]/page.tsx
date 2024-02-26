import PropTypes from 'prop-types'
import Image from 'next/image'
import data from '@/public/data/data.json'
import NotFound from '@/app/not-found'
type Post = {
  id: number
  title: string
  image: string
  body: string
  date: string
}

const BlogId = ({ params }: { params: { id: string } }) => {
  const postId: Post | undefined = data.find(
    (post) => post.id === Number(params.id)
  )
  if (!postId) {
    return <NotFound />
  }

  return (
    <div className='w-full min-h-screen grid grid-cols-2 max-sm:grid-cols-1 px-12 py-24 gap-4 '>
      <div className='flex justify-center items-center'>
        <Image
          src={postId.image}
          alt='contact'
          width={280}
          height={358}
        />
      </div>
      <div className='flex flex-col justify-center items-start px-8 max-sm:px-2 gap-4 '>
        <h1 className='text-xl font-semibold'>{postId.title}</h1>
        <p className='text-lg'>{postId.body}</p>
        <p>{postId.date}</p>
      </div>
    </div>
  )
}

BlogId.propTypes = {
  params: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
}

export default BlogId
