import React, { useState } from 'react';
import logo from '../assets/Logo.png';
import Button from './Button';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full bg-white shadow-md fixed top-0 z-50"
    >
      <div className="flex justify-between items-center px-4 lg:px-20 py-4">
        {/* Logo */}
        <div>
          <Link to="/">
            <img src={logo} alt="Logo" className="w-28" />
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10 text-gray-700 text-md">
          <Link to="/" className="transition-colors hover:text-[#4CAF4F] hover:underline">Home</Link>
          <Link to="/services" className="transition-colors hover:text-[#4CAF4F] hover:underline">Service</Link>
          <Link to="/features" className="transition-colors hover:text-[#4CAF4F] hover:underline">Product</Link>          <Link to="/testimonials" className="transition-colors hover:text-[#4CAF4F] hover:underline">Testimonials</Link>
          <Link to="/faqs" className="transition-colors hover:text-[#4CAF4F] hover:underline">FAQ</Link>
        </nav>


        {/* Desktop Buttons */}
        <div className="hidden lg:flex gap-4">
          <button className="bg-white border border-[#45a049] py-2 px-5 text-[#45a049] rounded-md 
            transition-transform transform hover:scale-105 hover:bg-[#45a049] hover:text-white 
            focus:outline-none focus:ring-2 focus:ring-[#4CAF4F]">
            Login
          </button>
          <Button />
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="lg:hidden bg-white shadow-md px-4 pb-4">
          <nav className="flex flex-col gap-4 text-gray-700 text-sm">
            <Link to="/" onClick={() => setMenuOpen(false)} className="transition-colors hover:text-[#4CAF4F]">Home</Link>
            <Link to="/services" onClick={() => setMenuOpen(false)} className="transition-colors hover:text-[#4CAF4F]">Service</Link>
            <Link to="/features" onClick={() => setMenuOpen(false)} className="transition-colors hover:text-[#4CAF4F]">Product</Link>
            <Link to="/testimonials" onClick={() => setMenuOpen(false)} className="transition-colors hover:text-[#4CAF4F]">Testimonials</Link>
            <Link to="/faqs" onClick={() => setMenuOpen(false)} className="transition-colors hover:text-[#4CAF4F]">FAQ</Link>
            <button className="bg-[#4CAF4F] py-2 px-5 text-white rounded-md 
    transition-transform transform hover:scale-105 hover:bg-white hover:text-[#4CAF4F] 
    focus:outline-none focus:ring-2 focus:ring-[#4CAF4F]">
              Login
            </button>
          </nav>

        </div>
      )}
    </motion.header>
  );
};

export default Header;
