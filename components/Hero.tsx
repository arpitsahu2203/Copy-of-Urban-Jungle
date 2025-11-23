import React from 'react';

export default function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1518564747095-d2fbe4b452b7?q=80&w=1132&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-center items-center text-center text-white px-4">
        <span className="uppercase tracking-[0.2em] text-sm md:text-base font-medium mb-4 animate-fade-in-up">
          Welcome to Urban Jungle Co.
        </span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-2 serif-font leading-tight animate-fade-in-up delay-100">
          Discover the Beauty of
        </h1>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 serif-font leading-tight animate-fade-in-up delay-200">
          Nature at Your Fingertips
        </h1>
        <button className="bg-white text-green-900 px-8 py-3 md:px-10 md:py-4 rounded-full font-semibold uppercase tracking-wider hover:bg-green-600 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg animate-fade-in-up delay-300">
          Shop Now
        </button>
      </div>
    </div>
  );
}