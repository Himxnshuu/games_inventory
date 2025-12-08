import React from 'react'
import Link from 'next/link';

const page = () => {
  return (
    <div className='text-center  min-h-screen flex flex-col justify-center items-center gap-5'>
      <h1 className='text-4xl'>This is the admin Page</h1>
      <Link href="/admin/dashboard" className='bg-pink-900 px-4 py-2 rounded'>Go to Dashboard</Link>
    </div>
  )
}

export default page
