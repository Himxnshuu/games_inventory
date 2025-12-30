// 'use client'
// import React, { useEffect,useState } from 'react'

import {query} from '@/lib/db'
import Image from 'next/image';
import Pagination from './Pagination';
import Settings from './Settings';
import {cookies} from 'next/headers'
import jwt from 'jsonwebtoken'
import Link from "next/link"
import { NextResponse } from 'next/server';
 const addToWishlist=async (id:number)=>{
        "use server"
        
        const cookieStore = await cookies();
        const token : any= cookieStore.get("authToken")?.value;
        
            const decoded: any = jwt.verify(token, process.env.JWT_SECRET!);
            const userId=decoded.id
        
        const res=await fetch('http://localhost:3000/api/games/wishlist',{
            method:"POST",
            credentials: "include",
            headers:{"Content-type": "application/json"},
            body:JSON.stringify({
                userId,id

            })
        })
        const data=await res.json()
        console.log(data)
    }  
const list =  async ({searchParams}:{searchParams:Promise<{page:string}>}) => {
    // const [data,setData]=useState([])
    // const fetchGames=async ()=>{
    //     const res=await fetch('http://localhost:3000/api/games');
    //     const result= await res.json()
    //     setData(result)
    // }
    // useEffect(()=>{
    //     fetchGames()
    
    // },[])

    //const res=await fetch('http://localhost:3000/api/games')
    const resolvedParams=await searchParams
    const page= Number(resolvedParams?.page) || 1;
    const limit=6;
    const offset=(page-1)*limit;
    
    const countRes = await query("SELECT COUNT(*) FROM games");
    const total = Number(countRes.rows[0].count);
    const totalPages = Math.ceil(total / limit);
    const res= await query("SELECT * FROM games LIMIT $1 OFFSET $2",[limit,offset])
    const data=res.rows
    
    
  return (
    <div className='min-h-screen'>
        <div className='flex flex-row justify-between m-10 text-center  bg-accent px-4 py-2 rounded'>
        <h1 className='px-4 py-2'>Catalog</h1>
        <Settings/>
        </div>
        <div className='grid grid-cols-3 justify-items-center items-center gap-4'>
            {
                data.map((elem :any)=>(
                    <div key={elem.game_id} className='my-5'>
                        
                        <Image 
                            className='object-cover rounded'
                            src={elem.thumbnail_url}
                            alt={elem.game}
                            width={400}
                            height={300}
                        />
                        <div className='flex flex-row justify-center items-center gap-2 mt-10'>
                        <h2 className='text-center font-serif px-4 py-2'>{elem.game}</h2>
                        <form action={addToWishlist.bind(null,elem.game_id)}>
                            
                            <button className='bg-pink-900 rounded px-4 py-2' type='submit' >Add to Wishlist</button>
                        </form>
                        </div>

                    </div>
                ))
            }
        </div>
        <Pagination totalPages={totalPages}/>
        
            
        
    </div>
  )
}

export default list
