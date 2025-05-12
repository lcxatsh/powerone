import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="absolute w-full text-white z-20">
      <h2>自定义的局部局部Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  )
}