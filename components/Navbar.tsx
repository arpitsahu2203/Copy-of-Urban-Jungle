import React, { useState, useEffect, useLayoutEffect } from 'react';
import { Facebook, Instagram, Twitter, Youtube, Menu, X, ShoppingCart } from 'lucide-react';
import gsap from 'gsap';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useLayoutEffect(() => {
    gsap.from(".header > .right , .custom-logo", {
      y: -80,
      duration: 2,
      delay: 1,
      stagger: 0.5
    });
  }, []);

  return (
    <nav 
      className={`header fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-2 text-stone-800' : 'bg-transparent py-6 text-white'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <span className={`custom-logo text-2xl font-bold tracking-wider serif-font ${isScrolled ? 'text-lime-900' : 'text-white'}`}>
              URBAN JUNGLE CO.
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="right hidden md:flex items-center space-x-8">
            <a href="#" className="hover:text-lime-600 transition-colors font-medium">Home</a>
            <a href="#" className="hover:text-lime-600 transition-colors font-medium">Shop</a>
            <a href="#" className="hover:text-lime-600 transition-colors font-medium">About</a>
            <a href="#" className="hover:text-lime-600 transition-colors font-medium">Contact</a>
          </div>

          {/* Social Icons & Cart */}
          <div className="right hidden md:flex items-center space-x-5">
            <a href="#" className="hover:text-lime-600 transition-colors"><Youtube size={20} /></a>
            <a href="#" className="hover:text-lime-600 transition-colors"><Instagram size={20} /></a>
            <a href="#" className="hover:text-lime-600 transition-colors"><Facebook size={20} /></a>
            <a href="#" className="hover:text-lime-600 transition-colors"><Twitter size={20} /></a>
            <div className="border-l border-current pl-5 ml-2">
                 <a href="#" className="hover:text-lime-600 transition-colors"><ShoppingCart size={20} /></a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
             <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="focus:outline-none"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white text-stone-800 absolute top-full left-0 w-full shadow-lg">
          <div className="flex flex-col px-4 py-6 space-y-4">
            <a href="#" className="text-lg font-medium border-b border-stone-100 pb-2">Home</a>
            <a href="#" className="text-lg font-medium border-b border-stone-100 pb-2">Shop</a>
            <a href="#" className="text-lg font-medium border-b border-stone-100 pb-2">About</a>
            <a href="#" className="text-lg font-medium border-b border-stone-100 pb-2">Contact</a>
            <div className="flex space-x-6 pt-2 justify-center text-stone-500">
                <Instagram size={24} />
                <Facebook size={24} />
                <Twitter size={24} />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}