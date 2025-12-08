// 'use client'
// import React, { useEffect,useState } from 'react'
import Image from 'next/image';
import Pagination from './Pagination';
import Settings from './Settings';
import Link from "next/link"
 const addToWishlist=async (id:number)=>{
        "use server"
        const res=await fetch('http://localhost:3000/api/games/wishlist',{
            method:"POST",
            headers:{"Content-type": "application/json"},
            body:JSON.stringify({
                id

            })
        })
        const data=res.json()
        console.log(data)
    }  
const list =  async () => {
    // const [data,setData]=useState([])
    // const fetchGames=async ()=>{
    //     const res=await fetch('http://localhost:3000/api/games');
    //     const result= await res.json()
    //     setData(result)
    // }
    // useEffect(()=>{
    //     fetchGames()
    
    // },[])

    const res=await fetch('http://localhost:3000/api/games')
    const data=await res.json()
    
    
  return (
    <div className='min-h-screen'>
        <div className='flex flex-row justify-between m-10 text-center text-4xl bg-accent px-4 py-2'>
        <h1 className='px-4 py-2'>Catalog</h1>
        <Settings/>
        </div>
        <div className='grid grid-cols-3 justify-items-center items-center gap-4'>
            {
                data.map((elem :any)=>(
                    <div key={elem.id} className='my-5'>
                        
                        <Image 
                            className='object-cover rounded'
                            src={elem.thumbnail_url}
                            alt={elem.game}
                            width={400}
                            height={300}
                        />
                        <div className='flex flex-row justify-center items-center gap-2 mt-10'>
                        <h2 className='text-center font-serif px-4 py-2'>{elem.game}</h2>
                        <form action={addToWishlist.bind(null,elem.id)}>
                            <button className='bg-pink-900 rounded px-4 py-2' type='submit' >Add to Wishlist</button>
                        </form>
                        </div>

                    </div>
                ))
            }
        </div>
        <Pagination/>
        
            
        
    </div>
  )
}

export default list
