"use client";

import { useState } from "react";
import Link from "next/link";

export default function Settings() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative flex items-center">
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
      

      {open && (
        <div className="absolute top-14 bg-gray-800 text-white shadow-lg rounded-md w-48 p-2 flex flex-col gap-2">
          
          <Link
            href="/profile"
            className="hover:bg-gray-700 px-3 py-2 rounded"
          >
            👤 Profile
          </Link>

          

          

        </div>
      )}
    </div>
  );
}
