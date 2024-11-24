import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-6 bg-gradient-to-r from-gray-700 via-gray-900 to-black text-white shadow-lg w-screen h-16">
      {/* Logo Section */}
      <div className="flex items-center gap-4">
        <div className="text-xl font-extrabold text-yellow-400">✨</div>
        <Link href='/'>
          <div className="font-bold hover:cursor-pointer text-3xl tracking-wider hover:text-yellow-400">
            Mudra
          </div>
        </Link>
      </div>

      {/* Navigation Links */}
      <div>
        <ul className="flex gap-8 text-lg">
          <Link href='/blog'>
            <li className="hover:cursor-pointer hover:text-yellow-400 transition duration-200">Blog</li>
          </Link>
          <Link href='/contact'>
            <li className="hover:cursor-pointer hover:text-yellow-400 transition duration-200">Contact Us</li>
          </Link>
          <Link href='/about'>
            <li className="hover:cursor-pointer hover:text-yellow-400 transition duration-200">About Us</li>
          </Link>
        </ul>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-4">
        <Link href='/signup'>
          <button className="px-4 py-2 bg-yellow-400 text-black rounded-full hover:bg-yellow-300 transition duration-200 shadow-md">
            Sign Up
          </button>
        </Link>
        <Link href='/login'>
          <button className="px-4 py-2 border border-yellow-400 text-yellow-400 rounded-full hover:bg-yellow-400 hover:text-black transition duration-200">
            Login
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Navbar