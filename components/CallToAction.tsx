import React, { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CallToAction() {
  useLayoutEffect(() => {
    gsap.from(".FindText", {
      y: -100,
      duration: 3,
      opacity: 0,
      scrollTrigger: {
        trigger: ".Find",
        start: "top 50%",
        scroller: "body",
      }
    });
  }, []);

  return (
    <section className="Find py-0">
      <div className="flex flex-col md:flex-row h-auto md:h-[600px]">
        
        {/* Image Side */}
        <div className="w-full md:w-1/2 h-64 md:h-full relative">
          <img 
            src="https://images.unsplash.com/photo-1673696718178-ffabf11f0362?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170" 
            alt="Leaf detail" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Side */}
        <div className="FindText w-full md:w-1/2 bg-lime-900 flex flex-col justify-center items-start p-10 md:p-20 text-white">
          <h2 className="text-3xl md:text-5xl font-bold serif-font mb-6 leading-tight">
            Ready to Find your<br />Perfect Plant?
          </h2>
          <p className="text-lime-100 text-lg mb-10 max-w-md">
            Browse our online store or visit us in person to experience the beauty of nature firsthand.
          </p>
          <button className="bg-white text-lime-900 hover:bg-lime-100 font-bold py-4 px-12 rounded-full transition-colors duration-300 shadow-lg">
            Shop Now
          </button>
        </div>

      </div>
    </section>
  );
}