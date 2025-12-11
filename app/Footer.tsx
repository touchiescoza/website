import React from 'react'

const Footer = () => {
  return (
    <main>
        <div>
            <footer className="bg-black text-white text-center p-4 mt-4">
                &copy; {new Date().getFullYear()} Touchies. All rights reserved.
            </footer>
        </div>
    
    
    </main>
    
  )
}

export default Footer