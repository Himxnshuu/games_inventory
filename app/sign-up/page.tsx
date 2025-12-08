// "use client"
// import { useRouter } from 'next/router'
// import React from 'react'
import Link from 'next/link';
import { redirect } from "next/navigation";

const Sign_up = () => {

    // const router = useRouter();

    const addUser=async(formdata:FormData)=>{
        'use server';
        const name=formdata.get('name')?.toString();
        const email=formdata.get('email')?.toString();
        const password=formdata.get('password')?.toString();

        const res=await fetch('http://localhost:3000/api/auth/signup',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({name,email,password})
        })
        // if(res.ok){
        //   router.push('/sign-in')

        // }
        redirect('/sign-in');



    }
    

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <form className='flex flex-col gap-4 m-5   w-80 '
      action={addUser}>
        <input 
            name="name"
            placeholder="Name"
            className='px-4 py-2 border-white/40 bg-white/30 rounded outline-none text-center'
        >
            
        </input>
        <input 
            name="email"
            placeholder="Email"
            className='px-4 py-2 border-white/40 bg-white/30 rounded outline-none text-center'
        >
            
        </input>
        <input 
            name="password"
            placeholder="Enter Password"
            className='px-4 py-2 border-white/40 bg-white/30 rounded outline-none text-center'
        >  
        </input>
        <button
            type="submit"
            className='bg-pink-900 px-4 py-2 rounded text-center '
        >
            Sign-up
        </button>
      </form>
      <div className='flex flew-row gap-2 '>
      <span className='px-4 py-2 '>Already registered?</span>
      <Link href='/sign-in' className='bg-pink-900 rounded px-4 py-2'>Sign-in</Link>
      </div>
    </div>
  )
}

export default Sign_up
