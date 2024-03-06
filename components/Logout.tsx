import Link from 'next/link'

const Logout = async ({ session }: any) => {
  return (
    <>
      {session ? (
        <Link
          className='btn btn-error'
          href={'/api/auth/signout'}
        >
          Logout
        </Link>
      ) : (
        <Link href={'/register'}>Login</Link>
      )}
      {session && <span className='px-4 max-sm:hidden'>{session.user.email}</span>}
    </>
  )
}

export default Logout
