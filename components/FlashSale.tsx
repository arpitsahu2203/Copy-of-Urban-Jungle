import React, { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function FlashSale() {
  useLayoutEffect(() => {
    gsap.from(".B2Text", {
      opacity: 0,
      y: -100,
      duration: 2,
      stagger: 0.95,
      color: "#FFFFFF",
      yoyo: true,
      repeat: 0,
      scrollTrigger: {
        trigger: ".B2Text",
        scroller: "body",
        start: "top 60%",
        end: "top 30%"
      }
    });

    gsap.from(".Shop2B", {
      opacity: 0,
      duration: 3,
      scrollTrigger: {
          trigger: ".B2Text",
          start: "top 60%"
      }
    });
  }, []);

  return (
    <section className="relative py-32 md:py-40 bg-fixed bg-cover bg-center" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1530049478161-0780526964f4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
    }}>
      <div className="absolute inset-0 bg-black/50"></div>
      
      <div className="B2Text relative container mx-auto px-4 text-center text-white">
        <div className="inline-block border border-white/30 bg-white/10 backdrop-blur-sm px-8 py-10 md:px-16 md:py-16 rounded-lg max-w-3xl">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 serif-font leading-tight">
                Flash Sale: Up to 50% Off
            </h2>
            <h3 className="text-2xl md:text-4xl lg:text-5xl font-light mb-6 serif-font">
                On Select Items
            </h3>
            <p className="text-lg md:text-xl text-stone-100 mb-8 max-w-xl mx-auto font-light">
                Don’t miss out on our flash sale event! For a limited time, enjoy up to 50% off on a selection of our best-selling products.
            </p>
            <button className="Shop2B bg-lime-700 hover:bg-lime-800 text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl">
                Shop The Sale
            </button>
        </div>
      </div>
    </section>
  );
}