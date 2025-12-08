import { NextRequest, NextResponse } from "next/server"
import {query} from "@/lib/db"
import { cookies } from "next/headers"
import jwt from 'jsonwebtoken'
export async function GET(){




}

export async function POST(request: NextRequest) {
    const res = await request.json();
    const game = await res.id;
    
    const token = request.cookies.get("authToken")?.value;

    if (!token) {
        return NextResponse.json({ error: "No auth token" }, { status: 401 });
    }

    let userId: number;
    
    // --- START: Add try...catch block ---
    try {
        // 2. Verify JWT
        const decoded = jwt.verify(token, process.env.JWT_SECRET!) as {
            userId: number;
            email: string;
        };
        
        // 3. Extract userId
        userId = decoded.userId;

    } catch (error) {
        // Log the actual error that is causing the failure
        console.error("JWT Verification Error:", error); 
        
        // Return 401 if verification fails for any reason (expired, invalid signature, etc.)
        return NextResponse.json({ error: "Invalid or expired token" }, { status: 401 });
    }
    // --- END: try...catch block ---


    // 4. Database logic proceeds only if try block succeeded
    const found = await query("SELECT * FROM games WHERE id=$1 ", [game])
    
    if (found && found.rows.length > 0) { // Added check for rows.length for robustness
        // ... (Database update logic)
        
        // Using the recommended COALESCE query to handle NULL arrays:
        await query(
            `UPDATE users 
             SET wishlist = array_append(COALESCE(wishlist, '{}'), $1) 
             WHERE id=$2`,
            [game, userId]
        );
        
        return NextResponse.json(found.rows[0])
    }
    return NextResponse.json({ message: "Game not found" })
}