import {cookies} from 'next/headers'
import { NextResponse } from 'next/server'
import {redirect } from 'next/navigation'
export async function POST(request:Request){
    
    const cookieStore=await cookies()
    const token=cookieStore.get('authToken')


    if(token){
        cookieStore.set('authToken','',{
            httpOnly:true,
            secure:process.env.NODE_ENV==='production',
            expires:new Date(0),
            path:'/'

        })
        redirect('/')
        return NextResponse.json({message:"logged out "})
    }
    
    return NextResponse.json({message:'couldnt log out'})




}