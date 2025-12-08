import React from 'react'
import Link from 'next/link'
const page = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <div className='text-center space-y-4'>
      <h1 className='text-4xl'>Games Wishlist Management System</h1>
      <p className=' w-2xl leading-relaxed text-center'>A powerful games management system helping you track titles, 
        organize libraries, monitor performance data, manage platforms, store cover art, 
        control inventory, simplify updates, and keep everything running smoothly with complete accuracy every day.
      </p>
      </div>
      <div className='m-10 flex flex-row gap-3'>
        <Link href='/sign-up' className='bg-pink-900 px-4 py-2 rounded'>Sign-up</Link>
        <Link href='/sign-in' className='bg-pink-900 px-4 py-2 rounded'>Sign-in</Link>
        <span className='px-4 py-2 rounded bg-white/20'>⬅   Sign-in to see content and personalize </span>
      </div>
      
    </div>
  )
}

export default page
