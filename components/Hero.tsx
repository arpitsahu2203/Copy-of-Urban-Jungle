import React, { useLayoutEffect } from 'react';
import gsap from 'gsap';

export default function Hero() {
  useLayoutEffect(() => {
    let t1 = gsap.timeline();
    
    t1.from(".Welcome , .Discover1", {
      opacity: 0,
      duration: 3,
      delay: 1,
      stagger: 0.75
    });
    
    // Note: In standard GSAP timelines, animations run sequentially. 
    // The original code had these separate in the timeline constructor or passed as arguments.
    // To match the exact behavior of `gsap.timeline(gsap.from(...), gsap.from(...))` 
    // which effectively starts them together or in sequence depending on how it was written,
    // I will chain them.
    
    gsap.from(".Shop1", {
      y: 150,
      duration: 3.5,
      opacity: 0,
      delay: 1 // Syncing delay roughly with start
    });
    
  }, []);

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
        <span className="Welcome uppercase tracking-[0.2em] text-sm md:text-base font-medium mb-4">
          Welcome to Urban Jungle Co.
        </span>
        <h1 className="Discover1 text-4xl md:text-6xl lg:text-7xl font-bold mb-2 serif-font leading-tight">
          Discover the Beauty of
        </h1>
        <h1 className="Discover1 text-4xl md:text-6xl lg:text-7xl font-bold mb-8 serif-font leading-tight">
          Nature at Your Fingertips
        </h1>
        <button className="Shop1 bg-white text-lime-900 px-8 py-3 md:px-10 md:py-4 rounded-full font-semibold uppercase tracking-wider hover:bg-lime-700 hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg">
          Shop Now
        </button>
      </div>
    </div>
  );
}