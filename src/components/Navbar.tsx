import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, User, Home } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-indigo-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Shield className="h-6 w-6" />
          <span className="text-xl font-bold">AuthPrivacy</span>
        </Link>
        <div className="flex space-x-6">
          <Link to="/" className="flex items-center space-x-1 hover:text-indigo-200">
            <Home className="h-5 w-5" />
            <span>Home</span>
          </Link>
          <Link to="/dashboard" className="flex items-center space-x-1 hover:text-indigo-200">
            <User className="h-5 w-5" />
            <span>Dashboard</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;