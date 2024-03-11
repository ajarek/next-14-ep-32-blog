import Image from 'next/image'

const Contact = async () => {
  return (
    <div className='w-full min-h-screen grid grid-cols-2 max-sm:grid-cols-1 px-12 py-24 '>
      <div className='flex justify-center items-center'>
        <Image
          src='/images/contact.png'
          alt='contact'
          width={400}
          height={400}
        />
      </div>
      <div className='flex justify-center items-center px-4'>
        <form
          action=''
          className='w-full flex flex-col gap-4'
        >
          <input
            type='text'
            placeholder='Name and Surname'
            className='input w-full   input-bordered '
            required
          />
          <input
            type='email'
            placeholder='Email address'
            className='input w-full   input-bordered '
            required
          />
          <input
            type='text'
            placeholder='Phone Number (Optional)'
            className='input w-full   input-bordered'
          />
          <textarea
            className='textarea w-full input-bordered'
            placeholder='Message'
            required
          ></textarea>
          <button className='btn btn-primary w-full  '>Send</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
