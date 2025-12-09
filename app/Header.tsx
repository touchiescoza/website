import React from 'react'
import Link from 'next/link'


const Header = () => {
  return (
    <main>
        <div className="bg-black text-white text-xl p-2 m-0 items-center">
            <Link href="/">Touchies{/*replace this with a logo*/ }</Link>
        </div>
    </main>
  )
}

export default Header
