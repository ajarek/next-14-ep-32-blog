import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className='w-full min-h-screen grid grid-cols-2 max-sm:grid-cols-1 px-12 py-24 gap-4 '>
      <div className='flex flex-col justify-center items-start px-4 gap-8'>
        <h1 className='text-5xl font-bold  '>
          Creative <br />
          Thoughts <br /> Agency{' '}
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est cum
          deserunt, praesentium alias perspiciatis error minima?
        </p>
        <div className='flex gap-4'>
          <Link href='/blog' className='btn btn-primary'>Laren More</Link>
          <Link href='/contact' className='btn btn-secondary'>Contact</Link>
        </div>
        <div className='flex justify-start items-center'>
        <Image
          src='/images/brands.png'
          alt='brands'
          width={400}
          height={40}
        />
      </div>
      </div>
      <div className='flex justify-center items-center'>
        <Image
          src='/images/hero.gif'
          alt='hero'
          width={450}
          height={450}
        />
      </div>
     
    </div>
  )
}
