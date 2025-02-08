import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from '../../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img src={logo} alt="logo" className="h-10 w-auto mr-2" />
              <span className="text-2xl font-bold text-red-800">CEYLON GLORY</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-red-600 px-3 py-2">
              Home
            </Link>
            <Link to="/sri-lankan-spices" className="text-gray-700 hover:text-red-600 px-3 py-2">
              Sri Lankan Spices
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-red-600 px-3 py-2">
              About Us
            </Link>
            <Link to="/products" className="text-gray-700 hover:text-red-600 px-3 py-2">
              Our Products
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-red-600 px-3 py-2">
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-red-600 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 text-gray-700 hover:text-red-600"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
                to="/sri-lankan-spices"
                className="block px-3 py-2 text-gray-700 hover:text-red-600"
                onClick={() => setIsOpen(false)}
            >
              Sri Lankan Spices
            </Link>
            <Link
                to="/about"
                className="block px-3 py-2 text-gray-700 hover:text-red-600"
                onClick={() => setIsOpen(false)}
            >
              About Us
            </Link>
            <Link
                to="/products"
                className="block px-3 py-2 text-gray-700 hover:text-red-600"
                onClick={() => setIsOpen(false)}
            >
              Our Products
            </Link>
            <Link
              to="/contact"
              className="block px-3 py-2 text-gray-700 hover:text-red-600"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;