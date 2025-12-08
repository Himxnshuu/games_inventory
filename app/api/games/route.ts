import {query} from '@/lib/db'
import Pagination from '@/app/list/Pagination'
import { NextResponse } from 'next/server'
export async function GET(request: Request){
    try{
    
    

    const res=await query("SELECT * FROM games LIMIT 5 ")
    const data=res.rows
    return NextResponse.json(data);
    }catch(err){
        console.log(err)
        return NextResponse.json({error:"Server Side error"},{status:500})
    }


}