import Links from './Links'
import { auth } from '@/app/api/auth/auth'
import Logout from './Logout'

const Navbar = async () => {
  const session = await auth()

 
  return (
    <div className='max-w-[1440px]  mx-auto fixed navbar bg-base-100 shadow px-12 max-sm:px-4 z-10 flex justify-between text-lg'>
      <Links session={session} />

      <Logout session={session} />
    </div>
  )
}

export default Navbar
