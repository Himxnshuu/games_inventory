    'use client'
import { redirect } from 'next/navigation'
    import React,{useState,useEffect} from 'react'

    const Page = () => {

         

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    async function matchUsers(){
        const res=await fetch('http://localhost:3000/api/auth/signin',
            {
                method:"POST",
                headers:{
                    "content-type" : "application/json"
                },
                body: JSON.stringify({
                    email,password
                })

            }
        )
        const data=await res.json();
        redirect('/list')
    }
    

    return (
        <div className='h-screen'>
        <div className='flex flex-col  justify-center gap-2 m-50 items-center '>
        <input
            className='rounded bg-white/25 text-center text-xl px-4 py-2 '
            placeholder='Enter email'
            onChange={(e)=>setEmail(e.target.value)}
        >
        </input>
        <input
            className='rounded bg-white/25 text-center text-xl px-4 py-2'
            placeholder='Enter password'
            onChange={(e)=>setPassword(e.target.value)}

        >
        </input>
        <button className='rounded  bg-pink-900 px-4 py-2 ' onClick={matchUsers}>Sign in</button>
        </div>
        </div>
    )
    }

    export default Page
