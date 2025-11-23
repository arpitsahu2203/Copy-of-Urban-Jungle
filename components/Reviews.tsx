import React, { useLayoutEffect } from 'react';
import { Quote } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ReviewProps {
  text: string;
  name: string;
  image: string;
  className?: string;
}

const ReviewCard = ({ text, name, image, className = "" }: ReviewProps) => (
  <div className={`bg-white p-8 rounded-2xl shadow-lg border border-stone-100 ${className}`}>
    <Quote className="text-lime-200 mb-6 rotate-180" size={48} fill="currentColor" />
    <p className="text-stone-600 text-lg italic mb-6 leading-relaxed">"{text}"</p>
    <div className="flex items-center gap-4">
      <img src={image} alt={name} className="w-14 h-14 rounded-full object-cover border-2 border-lime-100" />
      <span className="font-bold text-stone-900">{name}</span>
    </div>
  </div>
);

export default function Reviews() {
  useLayoutEffect(() => {
    const t3 = gsap.timeline({
        scrollTrigger: {
            trigger: ".Reviews",
            scrub: 3,
            start: "top 5%",
            end: "+=300%",
            pin: true,
            scroller: "body"
        }
    });

    t3.from(".RleftTop", {
        x: -200,
        opacity: 0,
    });

    t3.from(".RrightTop", {
        x: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.5
    });

    t3.from(".RleftDown", {
        x: -100,
        opacity: 0,
        stagger: 0.5,
        duration: 0.75
    });

    t3.from(".RrightDown", {
        x: 100,
        opacity: 0,
        stagger: 0.5,
        duration: 0.75
    });

    return () => {
        if (t3.scrollTrigger) t3.scrollTrigger.kill();
        t3.kill();
    }
  }, []);

  return (
    <section className="Reviews py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          {/* Left Column */}
          <div className="w-full lg:w-1/2 flex flex-col gap-8">
            <div className="RleftTop mb-8">
              <h2 className="text-4xl md:text-5xl font-bold text-stone-900 serif-font mb-4">What Our Customers Say</h2>
              <p className="text-stone-600 text-lg">Discover the reasons why people love us and why we've become their go-to partner for all things green.</p>
            </div>
            
            <div className="RleftDown">
                <ReviewCard 
                text="I am absolutely thrilled with the service I received from their company! They were attentive, responsive, and genuinely cared about meeting my needs. I highly recommend them."
                name="Sam Altman"
                image="https://plus.unsplash.com/premium_photo-1739786996060-2769f1ded135?q=80&w=880&auto=format&fit=crop"
                />
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-1/2 flex flex-col gap-8 lg:pt-16">
            <div className="RrightTop">
                <ReviewCard 
                text="I am absolutely thrilled with the service I received from their company! They were attentive, responsive, and genuinely cared about meeting my needs. I highly recommend them."
                name="Trevor Philips"
                image="https://plus.unsplash.com/premium_photo-1739206781762-6b28bac44141?q=80&w=880&auto=format&fit=crop"
                />
            </div>
            
            <div className="RrightDown">
                <ReviewCard 
                text="Their team exceeded our expectations. Their creative approach and attention to detail brought our vision to life. Highly recommended!"
                name="Peter Parker"
                image="https://plus.unsplash.com/premium_photo-1739786995646-480d5cfd83dc?q=80&w=880&auto=format&fit=crop"
                />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}