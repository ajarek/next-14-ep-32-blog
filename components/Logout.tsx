import {auth} from '@/app/api/auth/auth'
import Link from 'next/link'

const Logout =async () => {
  const session =await  auth()
  
  return (
    <>
    { session ? (
          
      <Link className='btn btn-error' href={'/api/auth/signout'}>Logout</Link>
    ): (
      <Link
     href={'/login'}
    >
      Login
    </Link>
    )
  }
  </>
  )
}

export default Logout