import React from 'react';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 py-12 border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          {/* Logo */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold serif-font text-green-800 tracking-wider">URBAN JUNGLE CO.</h2>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            <a href="#" className="text-gray-600 hover:text-green-700 font-medium transition-colors">Home</a>
            <a href="#" className="text-gray-600 hover:text-green-700 font-medium transition-colors">Shop</a>
            <a href="#" className="text-gray-600 hover:text-green-700 font-medium transition-colors">About</a>
            <a href="#" className="text-gray-600 hover:text-green-700 font-medium transition-colors">Contact</a>
          </div>

          {/* Socials */}
          <div className="flex gap-6 text-gray-500">
            <a href="#" className="hover:text-red-500 transition-colors"><Youtube size={24} /></a>
            <a href="#" className="hover:text-pink-600 transition-colors"><Instagram size={24} /></a>
            <a href="#" className="hover:text-blue-600 transition-colors"><Facebook size={24} /></a>
            <a href="#" className="hover:text-blue-400 transition-colors"><Twitter size={24} /></a>
          </div>

        </div>

        <div className="mt-12 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Urban Jungle Co. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}