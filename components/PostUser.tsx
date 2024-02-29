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
const PostUser = async ({userId }: { userId: number }) => {
  const user: Post = await getUser(userId)
  return (
    <div className=' flex items-center  '>
      <figure className=''>
        <Image
          src={user.img? user.img:'/images/noavatar.png'}
          alt='user'
          width={50}
          height={50}
          className='rounded-full'
        />
      </figure>
      <div className='flex flex-col items-center justify-center text-left gap-1 px-2 '>
        <h2 className=''>{user.username}</h2>
        <p>{user.email}</p>
        <p>{user.isAdmin}</p>
      </div>
    </div>
  )
}

export default PostUser
