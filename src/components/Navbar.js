import React from 'react'

function Navbar() {
  return (
    <div>
      <nav className="bg-blue-500 p-4 flex justify-between items-center">
        <div className="text-white font-bold text-xl">
          iNote
        </div>
        <div className="flex items-center space-x-4">
          <a href="/" className="text-white">Home</a>
          <a href="/about" className="text-white">About</a>
          <button className="bg-white text-blue-500 px-3 py-2 rounded-full">Sign Up</button>
          <button className="bg-white text-blue-500 px-3 py-2 rounded-full">Login</button>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
