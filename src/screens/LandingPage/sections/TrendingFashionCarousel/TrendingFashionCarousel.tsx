import React, { useState, useEffect } from "react";
import { Button } from "../../../../components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const TrendingFashionCarousel = (): JSX.Element => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Product data with different background colors
  const products = [
    {
      id: 1,
      brand: "Polo Ralph Lauren",
      title: "CUSTOM FIT LINEN SHIRT - Shirt",
      price: "£180.00",
      priceNote: "VAT include",
      image: "https://i.postimg.cc/CL0ds16s/beb37d8dbbeccdd5c7b1f2afb47ebae2-removebg-preview.png",
      backgroundColor: "#f5f5f5",
      colorDot: "#000000",
      link: "https://www.zalando.co.uk/polo-ralph-lauren/"
    },
    {
      id: 2,
      brand: "Polo Ralph Lauren",
      title: "CUSTOM FIT LINEN SHIRT - Shirt",
      price: "£180.00",
      priceNote: "VAT include",
      image: "https://i.postimg.cc/DyNHK0CN/c43d229b4b06d599a5f55dde846bdf8b-removebg-preview.png",
      backgroundColor: "#ffeaea",
      colorDot: "#dc2626",
      link: "https://www.zalando.co.uk/polo-ralph-lauren/"
    },
    {
      id: 3,
      brand: "Polo Ralph Lauren",
      title: "CUSTOM FIT LINEN SHIRT - Shirt",
      price: "£180.00",
      priceNote: "VAT include",
      image: "https://i.postimg.cc/CL0ds16s/beb37d8dbbeccdd5c7b1f2afb47ebae2-removebg-preview.png",
      backgroundColor: "#e0f2fe",
      colorDot: "#0284c7",
      link: "https://www.zalando.co.uk/polo-ralph-lauren/"
    }
  ];

  const currentProduct = products[currentSlide];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + products.length) % products.length);
  };

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      className="relative w-full h-[600px] sm:h-[700px] md:h-[800px] lg:h-[900px] xl:h-[920px] border border-solid border-[#004d84] transition-colors duration-700 ease-in-out"
      style={{ backgroundColor: currentProduct.backgroundColor }}
    >
      {/* Navigation Arrows */}
      <Button
        onClick={prevSlide}
        className="absolute w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] md:w-[68px] md:h-[68px] top-1/2 -translate-y-1/2 left-4 sm:left-6 md:left-8 lg:left-[115px] bg-[#dbdbdb33] hover:bg-[#dbdbdb66] rounded-full shadow-[0px_4px_10px_#00000040] flex items-center justify-center p-0 border-0 transition-all duration-300 hover:scale-110 z-10"
      >
        <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-gray-700" />
      </Button>

      <Button
        onClick={nextSlide}
        className="absolute w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] md:w-[68px] md:h-[68px] top-1/2 -translate-y-1/2 right-4 sm:right-6 md:right-8 lg:right-[115px] bg-[#dbdbdb33] hover:bg-[#dbdbdb66] rounded-full shadow-[0px_4px_10px_#00000040] flex items-center justify-center p-0 border-0 transition-all duration-300 hover:scale-110 z-10"
      >
        <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-gray-700" />
      </Button>

      {/* Desktop Layout */}
      <div className="hidden lg:flex items-center justify-center h-full px-8 xl:px-16">
        {/* Product Image - Left Side */}
        <div className="flex-1 flex justify-center items-center">
          <div className="relative w-[400px] h-[400px] xl:w-[500px] xl:h-[500px] 2xl:w-[643px] 2xl:h-[643px]">
            <img
              src={currentProduct.image}
              alt={currentProduct.title}
              className="w-full h-full object-contain transition-all duration-700 ease-in-out"
            />
          </div>
        </div>

        {/* Product Information - Right Side */}
        <div className="flex-1 flex flex-col justify-center space-y-6 xl:space-y-8 px-8">
          {/* Brand and Title */}
          <div className="space-y-2">
            <a
              href={currentProduct.link}
              rel="noopener noreferrer"
              target="_blank"
              className="font-['Poppins',Helvetica] font-normal text-black text-3xl xl:text-4xl 2xl:text-[40px] leading-tight hover:underline transition-all duration-300"
            >
              {currentProduct.brand}
            </a>
            <h3 className="font-['Poppins',Helvetica] font-normal text-black text-3xl xl:text-4xl 2xl:text-[40px] leading-tight">
              {currentProduct.title}
            </h3>
          </div>

          {/* Price */}
          <div className="font-['Inter',Helvetica] font-medium text-[#ff4d4d] text-lg xl:text-xl">
            {currentProduct.price}
            <span className="ml-1">{currentProduct.priceNote}</span>
          </div>

          {/* Shop Now Button */}
          <div className="flex items-center space-y-4 flex-col items-start">
            <Button className="w-[250px] h-[70px] xl:w-[282px] xl:h-[85px] bg-white rounded-[35px] xl:rounded-[42.75px] border-2 border-solid border-black hover:bg-gray-50 transition-all duration-300 hover:scale-105">
              <span className="font-['Inter',Helvetica] font-medium text-black text-2xl xl:text-[32px] [-webkit-text-stroke:1px_#000000]">
                Shop Now
              </span>
            </Button>

            {/* Color Selector */}
            <div 
              className="w-[60px] h-[60px] xl:w-[78px] xl:h-[77px] rounded-full border-2 border-gray-300 transition-colors duration-700 ease-in-out"
              style={{ backgroundColor: currentProduct.colorDot }}
            />
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden flex flex-col items-center justify-center h-full px-4 sm:px-6 space-y-6 sm:space-y-8">
        {/* Product Image */}
        <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px]">
          <img
            src={currentProduct.image}
            alt={currentProduct.title}
            className="w-full h-full object-contain transition-all duration-700 ease-in-out"
          />
        </div>

        {/* Product Information */}
        <div className="text-center space-y-4 sm:space-y-6 max-w-md">
          {/* Brand and Title */}
          <div className="space-y-2">
            <a
              href={currentProduct.link}
              rel="noopener noreferrer"
              target="_blank"
              className="block font-['Poppins',Helvetica] font-normal text-black text-2xl sm:text-3xl md:text-4xl leading-tight hover:underline transition-all duration-300"
            >
              {currentProduct.brand}
            </a>
            <h3 className="font-['Poppins',Helvetica] font-normal text-black text-2xl sm:text-3xl md:text-4xl leading-tight">
              {currentProduct.title}
            </h3>
          </div>

          {/* Price */}
          <div className="font-['Inter',Helvetica] font-medium text-[#ff4d4d] text-lg sm:text-xl">
            {currentProduct.price}
            <span className="ml-1">{currentProduct.priceNote}</span>
          </div>

          {/* Shop Now Button and Color Selector */}
          <div className="flex flex-col items-center space-y-4">
            <Button className="w-[220px] h-[60px] sm:w-[250px] sm:h-[70px] bg-white rounded-[30px] sm:rounded-[35px] border-2 border-solid border-black hover:bg-gray-50 transition-all duration-300 hover:scale-105">
              <span className="font-['Inter',Helvetica] font-medium text-black text-xl sm:text-2xl [-webkit-text-stroke:1px_#000000]">
                Shop Now
              </span>
            </Button>

            {/* Color Selector */}
            <div 
              className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] rounded-full border-2 border-gray-300 transition-colors duration-700 ease-in-out"
              style={{ backgroundColor: currentProduct.colorDot }}
            />
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {products.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-black w-6 sm:w-8' 
                : 'bg-black/30 hover:bg-black/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
};