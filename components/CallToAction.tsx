import React from 'react';

export default function CallToAction() {
  return (
    <section className="py-0">
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
        <div className="w-full md:w-1/2 bg-green-900 flex flex-col justify-center items-start p-10 md:p-20 text-white">
          <h2 className="text-3xl md:text-5xl font-bold serif-font mb-6 leading-tight">
            Ready to Find your<br />Perfect Plant?
          </h2>
          <p className="text-green-100 text-lg mb-10 max-w-md">
            Browse our online store or visit us in person to experience the beauty of nature firsthand.
          </p>
          <button className="bg-white text-green-900 hover:bg-green-100 font-bold py-4 px-12 rounded-full transition-colors duration-300 shadow-lg">
            Shop Now
          </button>
        </div>

      </div>
    </section>
  );
}