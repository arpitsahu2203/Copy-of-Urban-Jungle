import React, { useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  useLayoutEffect(() => {
    const t2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".About",
        scrub: 3,
        start: "top 10%",
        end: "+=500%",
        pin: true,
        scroller: "body"
      }
    });

    t2.from(".Aimage", {
      x: -200,
      opacity: 0,
      duration: 0.75
    });

    t2.from(".AboutH1 .Your", {
      x: -100,
      opacity: 0,
      stagger: 0.5,
      duration: 0.75
    });

    t2.from(".abo .ab", {
      x: -100,
      opacity: 0,
      stagger: 0.5,
      duration: 0.75
    });

    t2.from(".Adata .Cust", {
      x: -100,
      opacity: 0,
      stagger: 0.5,
      duration: 0.75
    });

    return () => {
        if (t2.scrollTrigger) t2.scrollTrigger.kill();
        t2.kill();
    }
  }, []);

  return (
    <section className="About py-24 bg-stone-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image Side */}
          <div className="w-full lg:w-1/2">
            <div className="relative">
                <div className="absolute top-4 -left-4 w-full h-full border-2 border-lime-800 rounded-lg z-0 hidden md:block"></div>
                <img 
                    src="https://images.unsplash.com/photo-1610232603071-0070518c79d7?q=80&w=880&auto=format&fit=crop" 
                    alt="Potted plant" 
                    className="Aimage relative z-10 w-full h-[500px] object-cover rounded-lg shadow-2xl"
                />
            </div>
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="AboutH1">
                <h2 className="Your text-4xl md:text-5xl lg:text-6xl font-bold text-stone-900 serif-font leading-tight">
                Your Premier
                </h2>
                <h2 className="Your text-4xl md:text-5xl lg:text-6xl font-bold text-stone-900 serif-font leading-tight">
                <span className="text-lime-800">Destination</span> for All
                </h2>
                <h2 className="Your text-4xl md:text-5xl lg:text-6xl font-bold text-stone-900 serif-font leading-tight">
                Green.
                </h2>
            </div>
            
            <div className="abo space-y-4 text-lg text-stone-600 leading-relaxed">
              <p className="ab">
                At Urban Jungle Co., we believe in the transformative power of plants. 
              </p>
              <p className="ab">
                Whether you're a seasoned gardener or just starting your green journey, 
                our curated selection of plants will inspire and enrich your living space.
              </p>
              <p className="ab">
                  We source our plants from sustainable growers and ensure every leaf meets our high standards of quality before it reaches your doorstep.
              </p>
            </div>

            <div className="Adata flex gap-12 pt-4">
              <div className="Cust">
                <h3 className="text-4xl font-bold text-lime-800 mb-1">98%</h3>
                <p className="text-stone-500 uppercase tracking-wide text-sm font-semibold">Customer Satisfaction</p>
              </div>
              <div className="Cust">
                <h3 className="text-4xl font-bold text-lime-800 mb-1">103K</h3>
                <p className="text-stone-500 uppercase tracking-wide text-sm font-semibold">Plants Sold</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}