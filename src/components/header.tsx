'use client'
import React from 'react'
import { usePathname } from "next/navigation";
import Link from "next/link";

const accessLink = ["/","/performance","/reliability","/scale"]

export default function Header() {
  const pathname = usePathname()
  //替换解决方案
  //https://nextjs.org/docs/app/building-your-application/routing/route-groups
  if(!accessLink.includes(pathname))
      return null;

  console.log(pathname)
  return (
    <div className="absolute w-full z-10">
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
