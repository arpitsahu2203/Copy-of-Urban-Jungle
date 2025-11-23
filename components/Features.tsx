import React, { useLayoutEffect } from 'react';
import { ShieldCheck, Truck, Package, Heart } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FeatureItem = ({ icon: Icon, title, description }: { icon: React.ElementType, title: string, description: string }) => (
  <div className="Property flex flex-col items-center text-center p-6 bg-stone-50 rounded-lg hover:shadow-md transition-shadow duration-300 group">
    <div className="mb-4 p-4 bg-lime-100 rounded-full text-lime-700 group-hover:bg-lime-700 group-hover:text-white transition-colors duration-300">
      <Icon size={32} strokeWidth={1.5} />
    </div>
    <h3 className="text-lg font-bold text-stone-900 mb-2 uppercase tracking-wide">{title}</h3>
    <p className="text-stone-600 font-light">{description}</p>
  </div>
);

export default function Features() {
  useLayoutEffect(() => {
    gsap.from(".Text2 .Property", {
      opacity: 0,
      y: -50,
      duration: 1,
      stagger: 0.3,
      delay: 0.3,
      scrollTrigger: {
        trigger: ".Text2 .Property",
        scroller: "body",
        start: "top 80%",
        end: "top 30%"
      }
    });
  }, []);

  return (
    <section className="Text2 py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureItem 
            icon={ShieldCheck} 
            title="Secure Payments" 
            description="Safe, simple, and secure" 
          />
          <FeatureItem 
            icon={Truck} 
            title="Free Shipping" 
            description="Delivered to your door, free" 
          />
          <FeatureItem 
            icon={Package} 
            title="Delivered with Care" 
            description="From our hands to yours" 
          />
          <FeatureItem 
            icon={Heart} 
            title="Excellent Service" 
            description="Your satisfaction, our priority" 
          />
        </div>
      </div>
    </section>
  );
}