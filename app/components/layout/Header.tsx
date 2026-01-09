import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  return (
    <header className="bg-black text-white shadow-lg">
      <div className="container mx-auto px-4 flex items-center justify-center">
        <Link 
          href="/" 
          className="hover:opacity-80 transition-opacity duration-300"
        >
          <Image 
            src="/logo3.jpg" 
            alt="Touchies - Touch Rugby South Africa" 
            width={100} 
            height={100} 
            className="rounded-lg shadow-sm"
          />
        </Link>
      </div>
    </header>
  )
}

export default Header