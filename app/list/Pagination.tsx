"use client"
import React from 'react'
import { useRouter,useSearchParams } from 'next/navigation';
const Pagination = ({totalPages}:{totalPages:number}) => {
  const router=useRouter()
  const searchParams=useSearchParams()
  const page= Number(searchParams.get("page")) || 1;
  const setPage=(newPage:any)=>{
    router.push(`?page=${newPage}`)
  }
  return (
    <div className='flex flex-row gap-3 items-center justify-center mt-10 mb-10'>
      <button className='bg-pink-900 rounded px-4 py-2'
      onClick={()=>page>1?setPage(page-1):null}>Prev</button>
        <span>Page {page}</span>
      <button 
      className='bg-pink-900 rounded px-4 py-2'
      onClick={()=>page<totalPages?setPage(page+1):null}>Next</button>
      {/* page.url push page as search param to url and then in route take page and set offset accordingly */}
    </div>
  )
}

export default Pagination
