import React from 'react';
import { Quote } from 'lucide-react';

interface ReviewProps {
  text: string;
  name: string;
  image: string;
  className?: string;
}

const ReviewCard = ({ text, name, image, className = "" }: ReviewProps) => (
  <div className={`bg-white p-8 rounded-2xl shadow-lg border border-gray-100 ${className}`}>
    <Quote className="text-green-200 mb-6 rotate-180" size={48} fill="currentColor" />
    <p className="text-gray-600 text-lg italic mb-6 leading-relaxed">"{text}"</p>
    <div className="flex items-center gap-4">
      <img src={image} alt={name} className="w-14 h-14 rounded-full object-cover border-2 border-green-100" />
      <span className="font-bold text-gray-900">{name}</span>
    </div>
  </div>
);

export default function Reviews() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          {/* Left Column - Header + 1 Review */}
          <div className="w-full lg:w-1/2 flex flex-col gap-8">
            <div className="mb-8">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 serif-font mb-4">What Our Customers Say</h2>
              <p className="text-gray-600 text-lg">Discover the reasons why people love us and why we've become their go-to partner for all things green.</p>
            </div>
            
            <ReviewCard 
              text="I am absolutely thrilled with the service I received from their company! They were attentive, responsive, and genuinely cared about meeting my needs. I highly recommend them."
              name="Sam Altman"
              image="https://plus.unsplash.com/premium_photo-1739786996060-2769f1ded135?q=80&w=880&auto=format&fit=crop"
            />
          </div>

          {/* Right Column - 2 Reviews */}
          <div className="w-full lg:w-1/2 flex flex-col gap-8 lg:pt-16">
            <ReviewCard 
              text="I am absolutely thrilled with the service I received from their company! They were attentive, responsive, and genuinely cared about meeting my needs. I highly recommend them."
              name="Trevor Philips"
              image="https://plus.unsplash.com/premium_photo-1739206781762-6b28bac44141?q=80&w=880&auto=format&fit=crop"
            />
            
            <ReviewCard 
              text="Their team exceeded our expectations. Their creative approach and attention to detail brought our vision to life. Highly recommended!"
              name="Peter Parker"
              image="https://plus.unsplash.com/premium_photo-1739786995646-480d5cfd83dc?q=80&w=880&auto=format&fit=crop"
            />
          </div>
        </div>
      </div>
    </section>
  );
}