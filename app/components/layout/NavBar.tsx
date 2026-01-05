'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/news', label: 'News' },
    { href: '/events', label: 'Events' },
    { href: '/leagues', label: 'Leagues' },
  ]

  const isActive = (href: string) => {
    return pathname === href
  }

  return (
    <nav className="bg-black shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-center space-x-16 py-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`
                relative font-medium text-lg transition-all duration-300 ease-in-out
                ${isActive(item.href)
                  ? 'text-primary font-bold'
                  : 'text-white hover:text-primary'
                }
                after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-[-10px] after:left-1/2 after:transform after:-translate-x-1/2 after:transition-all after:duration-300 after:ease-in-out
                ${isActive(item.href)
                  ? 'after:w-full after:bg-primary'
                  : 'hover:after:w-full hover:after:bg-primary'
                }
              `}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <div className="flex items-center justify-between py-4">
            <span className="text-white font-semibold text-lg">Touchies</span>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-primary transition-colors duration-300 p-2"
              aria-label="Toggle mobile menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="pb-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`
                    block px-6 py-4 font-medium text-lg transition-all duration-300 ease-in-out
                    ${isActive(item.href)
                      ? 'text-primary font-bold border-l-4 border-primary bg-gray-900/10'
                      : 'text-white hover:text-primary hover:border-l-4 hover:border-primary hover:bg-gray-900/10 hover:font-semibold'
                    }
                  `}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}

export default NavBar