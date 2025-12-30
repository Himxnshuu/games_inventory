import {query} from '@/lib/db'
import { NextResponse } from 'next/server';
 

export async function POST(request:Request){
    const {id}=await request.json();

    const res=await query("DELETE FROM wishlist WHERE game_id=$1",[id])

    const games=await query("SELECT * FROM WISHLIST")

    return NextResponse.json(games)
    

}