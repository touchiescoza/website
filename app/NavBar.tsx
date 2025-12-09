import React from 'react'
import Link from 'next/link'

const NavBar = () => {
  return (
    <main>
        <div>
            <nav className="space-x-4 p-2 m-0 align-items:center justify-center flex bg-gray-200">
                <Link href="/">Home</Link>
                <Link href="/news">News</Link>
                <Link href="/events">Events</Link>
                <Link href="/leagues">Leagues</Link>
            </nav>
        </div>
    </main>
  )
}

export default NavBar