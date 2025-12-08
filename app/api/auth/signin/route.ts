import { query } from "@/lib/db";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
interface User {
  id: number;
  email: string;
  password: string;
  name?: string;
}

export async function POST(request: Request) {
  const req = await request.json();
  const email = req.email;
  const password = req.password;
  const res = await query("SELECT * FROM users WHERE email=$1", [email]);
  const user = res.rows[0] as unknown as User;
  console.log("user details :", user);
  if (!user) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }
  const passwordMatch = await bcrypt.compare(password, user.password);

  

  if (passwordMatch) {
    const token = jwt.sign(
      { id: user.id, email: user.email },
      process.env.JWT_SECRET!,{expiresIn:'1D'}
    );
    const response = NextResponse.json({ message: "Succes" }, { status: 200 });
    response.cookies.set("authToken", token, {
      httpOnly: true,
      path: "/",
      maxAge: 24* 60 * 60,
      sameSite: "lax"
    });

    return response;
  }
  return NextResponse.json({ message: "Invalid password" }, { status: 401 });
}
