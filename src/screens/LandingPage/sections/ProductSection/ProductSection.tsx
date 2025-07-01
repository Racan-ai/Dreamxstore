import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Heart, ArrowUpRight } from "lucide-react";

export const ProductSection = (): JSX.Element => {
  const [activeCategory, setActiveCategory] = useState("T-Shirts");

  // Category buttons data
  const categories = [
    { id: 1, name: "Shirts", active: false },
    { id: 2, name: "T-Shirts", active: true },
    { id: 3, name: "Hoodies", active: false },
  ];

  // Product data
  const products = [
    {
      id: 1,
      name: "ART ADDICTS T-SHIRT",
      price: "Rs. 2,837.00",
      image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
      isLiked: false,
    },
    {
      id: 2,
      name: "ART ADDICTS T-SHIRT",
      price: "Rs. 2,837.00",
      image: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
      isLiked: false,
    },
    {
      id: 3,
      name: "ART ADDICTS T-SHIRT",
      price: "Rs. 2,837.00",
      image: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
      isLiked: false,
    },
    {
      id: 4,
      name: "ART ADDICTS T-SHIRT",
      price: "Rs. 2,837.00",
      image: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
      isLiked: false,
    },
    {
      id: 5,
      name: "ART ADDICTS T-SHIRT",
      price: "Rs. 2,837.00",
      image: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
      isLiked: false,
    },
    {
      id: 6,
      name: "ART ADDICTS T-SHIRT",
      price: "Rs. 2,837.00",
      image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
      isLiked: false,
    },
  ];

  return (
    <section className="w-full py-6 sm:py-8 md:py-10 bg-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        {/* Category Buttons */}
        <div className="flex justify-center gap-4 sm:gap-6 mb-6 sm:mb-8">
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setActiveCategory(category.name)}
              className={`
                h-[45px] sm:h-[55px] md:h-[65px] lg:h-[74px]
                px-6 sm:px-8 md:px-10 lg:px-12
                rounded-[35px] sm:rounded-[45px] md:rounded-[55px] lg:rounded-[68.9px]
                border border-solid border-black
                shadow-[0px_4px_10px_#00000040]
                font-['Inter',Helvetica] font-medium
                text-lg sm:text-xl md:text-2xl lg:text-[32px]
                transition-all duration-300
                ${
                  category.name === activeCategory || category.active
                    ? "bg-[#f1ff8c] text-black hover:bg-[#e9f87a]"
                    : "bg-[#f1f1f1] text-[#004d84] hover:bg-[#e8e8e8]"
                }
              `}
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Section Header */}
        <div className="flex justify-between items-center mb-4 sm:mb-6">
          <h2 className="font-['Shinko_Sans-Regular',Helvetica] font-normal text-black text-3xl sm:text-4xl md:text-5xl">
            T-shirts For Men
          </h2>
          
          <div className="flex items-center gap-2">
            <Button
              variant="link"
              className="font-['Poppins',Helvetica] font-medium text-[#0e6eff] text-lg sm:text-xl md:text-2xl underline p-0 h-auto hover:text-[#0056cc] transition-colors"
            >
              View More
            </Button>
            <svg 
              className="w-6 h-6 sm:w-7 sm:h-7 md:w-[30px] md:h-[30px] text-[#0e6eff]" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
            </svg>
          </div>
        </div>

        {/* Products Horizontal Scroll */}
        <div className="relative">
          <div className="flex gap-3 sm:gap-4 md:gap-5 overflow-x-auto scrollbar-hide pb-4">
            {products.map((product) => (
              <Card
                key={product.id}
                className="flex-shrink-0 w-[240px] sm:w-[280px] md:w-[320px] lg:w-[350px] border-0 rounded-none overflow-hidden group cursor-pointer"
              >
                <CardContent className="p-0">
                  <div className="relative w-full h-[320px] sm:h-[360px] md:h-[400px] lg:h-[420px]">
                    {/* Product Image */}
                    <div
                      className="w-full h-full bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                      style={{ backgroundImage: `url(${product.image})` }}
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {/* Heart Icon - Top Right */}
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-3 right-3 w-10 h-10 sm:w-12 sm:h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full border border-white/30 transition-all duration-300 hover:scale-110"
                    >
                      <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </Button>

                    {/* View/Arrow Icon - Bottom Right (Circular with up-right arrow) */}
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute bottom-16 sm:bottom-20 right-3 w-10 h-10 sm:w-12 sm:h-12 bg-white/90 hover:bg-white backdrop-blur-sm rounded-full border border-white/30 transition-all duration-300 hover:scale-110 shadow-lg"
                    >
                      <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
                    </Button>

                    {/* Product Info - Bottom Left */}
                    <div className="absolute bottom-3 left-3 text-white">
                      <h3 className="font-['Poppins',Helvetica] font-medium text-base sm:text-lg md:text-xl mb-1 leading-tight">
                        {product.name}
                      </h3>
                      <p className="font-['Poppins',Helvetica] font-medium text-sm sm:text-base md:text-lg">
                        {product.price}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};