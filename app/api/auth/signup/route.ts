import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import {query } from '@/lib/db'

export async function POST(request: Request){
    try{
        const {name,email,password}= await request.json();

        const hashedPassword= await bcrypt.hash(password, 10);

        const res = await query(
            "INSERT INTO users(name,email,password) VALUES($1,$2,$3) RETURNING id,email",[name,email,hashedPassword]
            
        );
        


        return NextResponse.json({message:"User created successfully"}, {status:201});
        
    }catch(error){
        return NextResponse.json({message:"Internal Server Error"}, {status:500});
    }

}
