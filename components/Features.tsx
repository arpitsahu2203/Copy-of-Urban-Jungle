import React from 'react';
import { ShieldCheck, Truck, Package, Heart } from 'lucide-react';

const FeatureItem = ({ icon: Icon, title, description }: { icon: React.ElementType, title: string, description: string }) => (
  <div className="flex flex-col items-center text-center p-6 bg-gray-50 rounded-lg hover:shadow-md transition-shadow duration-300 group">
    <div className="mb-4 p-4 bg-green-100 rounded-full text-green-700 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
      <Icon size={32} strokeWidth={1.5} />
    </div>
    <h3 className="text-lg font-bold text-gray-900 mb-2 uppercase tracking-wide">{title}</h3>
    <p className="text-gray-600 font-light">{description}</p>
  </div>
);

export default function Features() {
  return (
    <section className="py-16 bg-white">
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