"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen bg-white flex flex-col items-center justify-center p-8 text-center">
      <h1 className="text-6xl font-bold tracking-tighter mb-8">SYSTEM CRASH</h1>
      <p className="text-2xl font-light text-gray-500 mb-12">
        Something went wrong in the infrastructure. <br />
        <span className="text-black font-medium italic">"pls visit again we are working on this currently"</span>
      </p>
      
      <div className="flex gap-4">
        <button
          onClick={() => reset()}
          className="px-8 py-4 bg-black text-white rounded-full font-semibold hover:scale-105 transition-all"
        >
          Retry Node
        </button>
        <Link 
          href="/" 
          className="px-8 py-4 border border-black text-black rounded-full font-semibold hover:bg-black hover:text-white transition-all"
        >
          Go Home
        </Link>
      </div>
    </main>
  );
}