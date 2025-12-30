"use client";

import Link from "next/link";
import { useEffect,useState } from "react";
import 'react-toastify/dist/ReactToastify.css';

  import { ToastContainer, toast } from 'react-toastify';


export default function Settings() {
  
  const [searchItem,setSearchItem] =useState('');
  console.log(searchItem);

  const Notify=()=>{
    toast.success("done")
  }

  return (
    <div className="relative flex items-center">
      <ToastContainer position="top-right" autoClose={10000} />

      <button
        onClick={Notify}
        className="bg-pink-900 px-3 py-2 rounded mr-10"
      >
        toast check
      </button>
      <input
        className="text-center bg-white/30 rounded px-4 py-2"
        placeholder="Search"
        value={searchItem}
        onChange={(e)=>setSearchItem(e.target.value)}
      ></input>
        <form action="/api/auth/logout" method="POST">
            <button
              
              className=" text-left hover:bg-red-600 px-3 py-2 rounded bg-white/30 mx-20"
            >
               Logout
            </button>
          </form>
        <Link
            href="/wishlist"
            className="hover:bg-green-400 hover:text-black px-3 py-2 rounded"
          >
             Wishlist
          </Link>
      


    </div>
  );
}
