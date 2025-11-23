import React from 'react';
import { Star } from 'lucide-react';

interface ProductProps {
  image: string;
  name: string;
  type: string;
  price: number;
  rating: number;
}

const ProductCard = ({ image, name, type, price, rating }: ProductProps) => (
  <div className="flex flex-col group cursor-pointer">
    <div className="relative overflow-hidden mb-4 rounded-lg bg-gray-100 aspect-[4/5]">
      <img 
        src={image} 
        alt={name} 
        className="w-full h-full object-cover object-center transform group-hover:scale-110 transition-transform duration-500" 
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
      <button className="absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-full group-hover:translate-y-0 bg-white text-gray-900 px-6 py-2 rounded-full font-medium shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
        Add to Cart
      </button>
    </div>
    <div className="flex flex-col">
      <div className="flex text-yellow-400 mb-2">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            size={14} 
            fill={i < rating ? "currentColor" : "none"} 
            className={i < rating ? "text-yellow-400" : "text-gray-300"}
          />
        ))}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-1 font-serif">{name}</h3>
      <p className="text-gray-500 text-sm mb-2">{type}</p>
      <p className="text-green-700 font-semibold text-lg">${price}</p>
    </div>
  </div>
);

export default function TrendingProducts() {
  const products: ProductProps[] = [
    {
      name: "Kalanchoe Plant - Yellow",
      type: "Indoor Plant",
      price: 80,
      rating: 4,
      image: "https://www.ugaoo.com/cdn/shop/files/DSC_0263.jpg?v=1710231924&width=1000"
    },
    {
      name: "Pink Tulip",
      type: "Indoor Plant",
      price: 60,
      rating: 3,
      image: "https://images.unsplash.com/photo-1554631221-f9603e6808be?q=80&w=1887&auto=format&fit=crop"
    },
    {
      name: "African Violet",
      type: "Indoor Plant",
      price: 50,
      rating: 1,
      image: "https://m.media-amazon.com/images/I/41QXDjJoYLL.jpg"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 serif-font mb-4">Trending Products</h2>
          <div className="w-24 h-1 bg-green-500 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {products.map((product, index) => (
            <ProductCard 
              key={index} 
              image={product.image}
              name={product.name}
              type={product.type}
              price={product.price}
              rating={product.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
}