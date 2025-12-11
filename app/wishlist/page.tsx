import React from 'react'
import {cookies} from 'next/headers'
import jwt from 'jsonwebtoken'
import {query} from '@/lib/db'
import Image from 'next/image'


const page = async () => {
    const cookieStore=await cookies()
        const token :any=cookieStore.get('authToken')?.value;
    
        const decode:any=jwt.verify(token,process.env.JWT_SECRET!)
        const userId=decode.id
    


    const res=await query("SELECT DISTINCT g.* FROM wishlist w JOIN games g ON g.game_id=w.game_id WHERE w.user_id=$1",[userId])

    const data=res.rows



  return (
    <div>

    <h1 className='text-4xl text-center m-10'>Wishlist</h1>
    <div className='grid grid-cols-3 '>
        {
            data.map((elem:any)=>(
                 <div key={elem.game_id} 
                 >
                    <div className='flex flex-col gap-4 m-5 justify-items-center items-center'>
                    <Image
                    src={elem.thumbnail_url}
                    alt='cover'
                    width={300}
                    height={300}
                    />
                    <h1>{elem.game}</h1>

                    </div>
                </div>
            ))
        }


    </div>
    </div>
  )
}

export default page
