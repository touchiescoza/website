import React from 'react'
import Link from 'next/link'

const NavBar = () => {
  return (
    <main>
        <div>
            <NavBar className="space-x-4 p-2 m-2 item-centre">
                <Link href="/">Home</Link>
                <Link href="/">News</Link>
                <Link href="/">Events</Link>
                <Link href="/">Leagues</Link>
            </NavBar>
        </div>
    </main>
  )
}

export default NavBar