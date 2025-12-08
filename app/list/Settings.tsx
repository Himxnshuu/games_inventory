"use client";

import { useState } from "react";
import Link from "next/link";

export default function Settings() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative flex items-center">
        <button
        onClick={() => setOpen(!open)}
        className="px-4 py-2 text-center"
      >
       ⚙️
      </button>
        <Link
            href="/wishlist"
            className="hover:bg-gray-700 px-3 py-2 rounded"
          >
            💟 Wishlist
          </Link>
      

      {open && (
        <div className="absolute top-14 bg-gray-800 text-white shadow-lg rounded-md w-48 p-2 flex flex-col gap-2">
          
          <Link
            href="/profile"
            className="hover:bg-gray-700 px-3 py-2 rounded"
          >
            👤 Profile
          </Link>

          

          <form action="/api/logout" method="POST">
            <button
              className="w-full text-left hover:bg-red-600 px-3 py-2 rounded"
            >
              🚪 Logout
            </button>
          </form>

        </div>
      )}
    </div>
  );
}
