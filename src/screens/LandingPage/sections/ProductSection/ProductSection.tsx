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
    <section className="w-full py-8 sm:py-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        {/* Category Buttons - Made smaller */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-6 lg:gap-8 mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          {categories.map((category) => (
            <Button
              key={category.id}
              onClick={() => setActiveCategory(category.name)}
              className={`
                h-[35px] sm:h-[40px] md:h-[45px] lg:h-[50px] xl:h-[55px]
                px-4 sm:px-5 md:px-6 lg:px-8 xl:px-10
                rounded-[18px] sm:rounded-[20px] md:rounded-[25px] lg:rounded-[30px] xl:rounded-[35px]
                border border-solid border-black
                shadow-[0px_4px_10px_#00000040]
                font-['Inter',Helvetica] font-medium
                text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl
                transition-all duration-300
                whitespace-nowrap
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

        {/* Section Header with increased gap */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <h2 className="font-['Shinko_Sans-Regular',Helvetica] font-normal text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight">
            T-shirts For Men
          </h2>
          
          <div className="flex items-center gap-2 flex-shrink-0">
            <Button
              variant="link"
              className="font-['Poppins',Helvetica] font-medium text-[#0e6eff] text-base sm:text-lg md:text-xl lg:text-2xl underline p-0 h-auto hover:text-[#0056cc] transition-colors whitespace-nowrap"
            >
              View More
            </Button>
            <svg 
              className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-[#0e6eff] flex-shrink-0" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
            </svg>
          </div>
        </div>

        {/* Products Horizontal Scroll with 1px radius */}
        <div className="relative">
          <div className="flex gap-4 sm:gap-5 md:gap-6 lg:gap-8 overflow-x-auto scrollbar-hide pb-4">
            {products.map((product) => (
              <Card
                key={product.id}
                className="flex-shrink-0 w-[200px] sm:w-[240px] md:w-[280px] lg:w-[320px] xl:w-[360px] border-0 rounded-[1px] overflow-hidden group cursor-pointer shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <CardContent className="p-0">
                  <div className="relative w-full h-[280px] sm:h-[320px] md:h-[360px] lg:h-[400px] xl:h-[440px]">
                    {/* Product Image */}
                    <div
                      className="w-full h-full bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                      style={{ backgroundImage: `url(${product.image})` }}
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                    {/* Heart Icon - Top Right */}
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-3 sm:top-4 right-3 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full border border-white/30 transition-all duration-300 hover:scale-110"
                    >
                      <Heart className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white" />
                    </Button>

                    {/* View/Arrow Icon - Positioned relative to text like in reference */}
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white hover:bg-gray-100 rounded-full shadow-lg transition-all duration-300 hover:scale-110 border border-gray-200"
                    >
                      <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-black" />
                    </Button>

                    {/* Product Info - Bottom Left - Positioned to align with arrow */}
                    <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-white max-w-[calc(100%-80px)] sm:max-w-[calc(100%-100px)]">
                      <h3 className="font-['Poppins',Helvetica] font-medium text-xs sm:text-sm md:text-base lg:text-lg mb-1 leading-tight line-clamp-2">
                        {product.name}
                      </h3>
                      <p className="font-['Poppins',Helvetica] font-medium text-xs sm:text-sm md:text-base text-white/90">
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