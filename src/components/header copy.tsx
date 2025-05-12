'use client'
import React from 'react'
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Header1() {
  const pathname = usePathname()
  return (
    
    <div className="absolute w-full">
    <div className="flex justify-between container mx-auto text-white p-8">
      <Link className="text-3xl font-bold" href="/">Home</Link>
      <div className="text-xl space-x-4">
        <Link className={pathname==="/performance"?"text-purple-500":""} href="/performance" >Performance</Link>
        <Link className={pathname==="/reliability"?"text-green-500":""} href="/reliability">Reliability</Link>
        <Link className={pathname==="/scale"?"text-yellow-500":""} href="/scale">Scale</Link>
      </div>
    </div>
  </div>
  )
}
