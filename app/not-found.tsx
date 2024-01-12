import Link from 'next/link'
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
    <div className="max-w-md p-8 bg-black rounded shadow-md">
    <Image className="mx-auto pt-4" width="250" height="300" alt="image" src="https://i.imgur.com/3yshaEp.png" />
    <h2 className="text-2xl font-bold mb-4">Page doesn&apos;t exist</h2>
    <p className="text-gray-600 mb-6">
        404! This page doesn&apos;t exist, or you don&apos;t have access to it.
    </p>
    <p className="text-gray-600 mb-6">
        Try contacting us at spectrum@pccoepune.org, or go back to the home page.
    </p>
    <Link href="/">Return Home</Link>
    <p className="text-gray-600 mt-6">
        <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">otherwise, for cute dogs pics, click here</Link>
    </p>
</div>
</div>
  )
}