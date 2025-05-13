import React from 'react';
import logo from '../assets/Nexcent.png';
import { FaInstagram, FaDribbble, FaTwitter, FaYoutube, FaPaperPlane } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#263238] text-white py-12 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row flex-wrap gap-y-10 md:gap-y-0 md:gap-x-8">
        
        {/* Logo and Socials */}
        <div className="flex-1 min-w-[200px]">
          <div className="mb-4">
            <img src={logo} alt="Logo" className="h-6 w-auto" />
          </div>
          <p className="text-sm mb-4">Copyright © 2020 Nexcent ltd. All rights reserved</p>
          <div className="flex space-x-4 text-xl">
            <a href="#"><FaInstagram className="hover:text-gray-400" /></a>
            <a href="#"><FaDribbble className="hover:text-gray-400" /></a>
            <a href="#"><FaTwitter className="hover:text-gray-400" /></a>
            <a href="#"><FaYoutube className="hover:text-gray-400" /></a>
          </div>
        </div>

        {/* Company Links */}
        <div className="flex-1 min-w-[200px]">
          <h3 className="font-semibold mb-2">Company</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:underline">About us</a></li>
            <li><a href="#" className="hover:underline">Blog</a></li>
            <li><a href="#" className="hover:underline">Contact us</a></li>
            <li><a href="#" className="hover:underline">Pricing</a></li>
            <li><a href="#" className="hover:underline">Testimonials</a></li>
          </ul>
        </div>

        {/* Support Links */}
        <div className="flex-1 min-w-[200px]">
          <h3 className="font-semibold mb-2">Support</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="#" className="hover:underline">Help center</a></li>
            <li><a href="#" className="hover:underline">Terms of service</a></li>
            <li><a href="#" className="hover:underline">Legal</a></li>
            <li><a href="#" className="hover:underline">Privacy policy</a></li>
            <li><a href="#" className="hover:underline">Status</a></li>
          </ul>
        </div>

        {/* Subscribe */}
        <div className="flex-1 min-w-[200px]">
          <h3 className="font-semibold mb-4">Stay up to date</h3>
          <div className="relative">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full px-4 py-2 pr-10 rounded border border-white bg-transparent text-white placeholder-white"
            />
            <FaPaperPlane className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
