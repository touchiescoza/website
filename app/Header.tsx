import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  return (
    <main>
        <div className="bg-black text-white text-xl p-2 m-0 items-center">
            <Link href="/"><Image src="/logo3.jpg" alt="Touchies Logo" width={50} height={50} /></Link>
        </div>
    </main>
  )
}

export default Header
