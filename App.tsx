import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import TrendingProducts from './components/TrendingProducts';
import FlashSale from './components/FlashSale';
import About from './components/About';
import Reviews from './components/Reviews';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-800 antialiased overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <TrendingProducts />
      <FlashSale />
      <About />
      <Reviews />
      <CallToAction />
      <Footer />
    </div>
  );
}