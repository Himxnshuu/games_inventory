import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import {query} from '@/lib/db'

export async function POST(request:Request) {
  const {id,userId}= await request.json();


  const res=await query("INSERT INTO wishlist(user_id,game_id) VALUES($1,$2)",[userId,id])

    return NextResponse.json({message:"wishlist updated"})

  
  
}

