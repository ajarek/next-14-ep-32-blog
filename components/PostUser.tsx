import { getUser } from '@/lib/data'
import Image from 'next/image'
type Post = {
  _id: number
  username: string
  img: string
  email: string
  password: string
  isAdmin: boolean
}
const PostUser = async ({
  userId,
  createdAt,
}: {
  userId: number
  createdAt: string
}) => {
  const user: Post = await getUser(userId)
  return (
    <div className=' flex items-center  mb-4  '>
      <figure className=''>
        <Image
          src={user.img ? user.img : '/images/noavatar.png'}
          alt='user'
          width={50}
          height={50}
          className='rounded-full'
        />
      </figure>
      <div className='grid grid-cols-2 grid-row-2  px-2  '>
        <div className='text-slate-500'>Author:</div>
        <div className='text-slate-500'>Published:</div>
        <div>{user.username}</div>
        <div>{createdAt}</div>
      </div>
    </div>
  )
}

export default PostUser
