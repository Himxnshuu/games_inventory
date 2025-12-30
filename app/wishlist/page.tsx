import React from 'react'
import {cookies} from 'next/headers'
import jwt from 'jsonwebtoken'
import {query} from '@/lib/db'
import Image from 'next/image'
import { revalidatePath } from 'next/cache'
const page = async () => {
    const cookieStore=await cookies()
        const token :any=cookieStore.get('authToken')?.value;
    
        const decode:any=jwt.verify(token,process.env.JWT_SECRET!)
        const userId=decode.id
    


    const res=await query("SELECT DISTINCT g.* FROM wishlist w JOIN games g ON g.game_id=w.game_id WHERE w.user_id=$1",[userId])

    const data=res.rows

    const removeFromWishlist = async (id:any)=>{
        "use server"
        await query("DELETE FROM wishlist WHERE game_id=$1 AND user_id=$2",[id,userId])
        console.log(`game removed: ${id}`)
        revalidatePath("/wishlist")
    }


  return (
    <div>

    <h1 className='text-4xl text-center m-10 bg-accent px-4 py-2 rounded'>Wishlist</h1>
    <div className='grid grid-cols-3 '>
        {
            data.map((elem:any)=>(
                 <div key={elem.game_id} 
                 >
                    <div className='flex flex-col gap-4 m-5 justify-items-center items-center'>
                    <Image
                    src={elem.thumbnail_url}
                    alt='cover'
                    width={400}
                    height={300}
                    />
                    <div className='flex flex-row gap-2 mt-10'>
                    <h1 className='px-4 py-2 font-serif'>{elem.game}</h1>
                    <form action={removeFromWishlist.bind(null,elem.game_id)}>
                        <button className='bg-pink-900 rounded px-4 py-2' type='submit'>Remove from wishlist</button>
                    </form>
                    </div>
                    </div>
                </div>
            ))
        }


    </div>
    </div>
  )
}

export default page
