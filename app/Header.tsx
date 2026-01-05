import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  return (
    <header className="bg-dark text-white shadow-lg">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link 
          href="/" 
          className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-200"
        >
          <Image 
            src="/logo3.jpg" 
            alt="Touchies Logo" 
            width={60} 
            height={60} 
            className="rounded-lg shadow-sm"
          />
          <div className="hidden sm:block">
            <h1 className="text-2xl font-bold text-white">Touchies</h1>
            <p className="text-sm text-gray-300">Touch Rugby South Africa</p>
          </div>
        </Link>
        
        {/* Mobile logo text */}
        <div className="sm:hidden">
          <h1 className="text-xl font-bold text-white">Touchies</h1>
        </div>
      </div>
    </header>
  )
}

export default Header
