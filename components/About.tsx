import React from 'react';

export default function About() {
  return (
    <section className="py-24 bg-stone-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image Side */}
          <div className="w-full lg:w-1/2">
            <div className="relative">
                <div className="absolute top-4 -left-4 w-full h-full border-2 border-green-800 rounded-lg z-0 hidden md:block"></div>
                <img 
                    src="https://images.unsplash.com/photo-1610232603071-0070518c79d7?q=80&w=880&auto=format&fit=crop" 
                    alt="Potted plant" 
                    className="relative z-10 w-full h-[500px] object-cover rounded-lg shadow-2xl"
                />
            </div>
          </div>

          {/* Text Side */}
          <div className="w-full lg:w-1/2 space-y-8">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 serif-font leading-tight">
              Your Premier<br />
              <span className="text-green-800">Destination</span> for All<br />
              Green.
            </h2>
            
            <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
              <p>
                At Urban Jungle Co., we believe in the transformative power of plants. 
                Whether you're a seasoned gardener or just starting your green journey, 
                our curated selection of plants will inspire and enrich your living space.
              </p>
              <p>
                  We source our plants from sustainable growers and ensure every leaf meets our high standards of quality before it reaches your doorstep.
              </p>
            </div>

            <div className="flex gap-12 pt-4">
              <div>
                <h3 className="text-4xl font-bold text-green-800 mb-1">98%</h3>
                <p className="text-gray-500 uppercase tracking-wide text-sm font-semibold">Customer Satisfaction</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-green-800 mb-1">103K</h3>
                <p className="text-gray-500 uppercase tracking-wide text-sm font-semibold">Plants Sold</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}