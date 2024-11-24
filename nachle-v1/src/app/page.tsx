import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div>
      <Navbar/>
    <div className="h-screen flex flex-col justify-center items-center text-center relative bg-white/90">
      {/* Background image with reduced opacity */}
      <div
        className="absolute top-0 left-0 w-full h-3/4"
        style={{
          backgroundImage: 'url(https://img.freepik.com/premium-photo/horizontal-grunge-style-poster-banner-design-with-group-hiphop-dancers_115124-441.jpg)',
          backgroundPosition: 'top',
          backgroundSize: 'cover',
          opacity: 0.9,
        }}
      ></div>

      {/* Grey-white gradient overlay */}
      <div
        className="absolute top-0 left-0 w-full h-3/4 "
        style={{
          background: 'linear-gradient(to bottom, gray, white)',
          opacity: 0.5,
        }}
      ></div>

      {/* Content */}
      <div className="bg-white/70 p-8 rounded-md shadow-md z-10 opacity-90">
        <h1 className="text-5xl font-bold text-gray-800 ">Welcome to Mudra</h1>
        <p className="mt-4 text-lg text-gray-600">
          Explore the best dance workshops around you, tailored to your style and location.
        </p>
        <div className="mt-6 space-x-4">
          <Link href='/signup'><button className="px-6 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700">
            Get Started
          </button></Link>
          <Link href='/about'><button className="px-6 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300">
            Know More About Us
          </button></Link>
        </div>
      </div>
      
    </div>
    <div>hello</div>
    </div>
  );
}