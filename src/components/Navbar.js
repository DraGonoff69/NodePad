import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <nav className="bg-blue-500 p-4 flex justify-between items-center">
        <div className="text-white font-bold text-xl">
          NodePad: Effortless Store Note!
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-white">Home</Link>
          <Link to="/About" className="text-white">Notes</Link>
          <Link to="/SignUp" className="bg-white text-blue-500 px-3 py-2 rounded-full">Sign Up</Link>
          <Link to="/Login" className="bg-white text-blue-500 px-3 py-2 rounded-full">Login</Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;
