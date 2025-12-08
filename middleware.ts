import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import {redirect} from 'next/navigation'
import * as jose from 'jose';



export async function middleware(request : NextRequest){
  const protectedPaths =['/']
  const path=request.nextUrl.pathname

  const token=request.cookies.get('authToken')?.value

  const isProtected=protectedPaths.some(p=>path.startsWith(p))
  const isSignInPage = path==='/sign-in'

  if(isProtected && !token){
    const signInUrl = new URL('/sign-in',request.url)
    // signInUrl.searchParams.set('next',path)
    return NextResponse.redirect(signInUrl)
  }
  if(token){
    const secret = new TextEncoder().encode(process.env.JWT_SECRET!)
  
  try{
    await jose.jwtVerify(token,secret)

    if(isSignInPage){
      return NextResponse.redirect(new URL('/list',request.url))
    }

  }catch(error){
    const response= NextResponse.redirect(new URL('/sign-in',request.url))
    response.cookies.delete('authToken')
    return response;
  }
}
  return NextResponse.next()

}

export const config={
  matcher: ['/list']
}