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
      className="relative w-full h-[500px] sm:h-[550px] md:h-[600px] lg:h-[550px] xl:h-[600px] border border-solid border-[#004d84] transition-colors duration-700 ease-in-out overflow-hidden"
      style={{ backgroundColor: currentProduct.backgroundColor }}
    >
      {/* Navigation Arrows - Smaller for mobile/tablet, normal for desktop */}
      <Button
        onClick={prevSlide}
        className="absolute w-[40px] h-[40px] sm:w-[45px] sm:h-[45px] md:w-[50px] md:h-[50px] lg:w-[68px] lg:h-[68px] top-1/2 -translate-y-1/2 left-4 sm:left-6 md:left-8 lg:left-[60px] xl:left-[80px] bg-[#dbdbdb33] hover:bg-[#dbdbdb66] rounded-full shadow-[0px_4px_10px_#00000040] flex items-center justify-center p-0 border-0 transition-all duration-300 hover:scale-110 z-10"
      >
        <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 lg:w-7 lg:h-7 text-gray-700" />
      </Button>

      <Button
        onClick={nextSlide}
        className="absolute w-[40px] h-[40px] sm:w-[45px] sm:h-[45px] md:w-[50px] md:h-[50px] lg:w-[68px] lg:h-[68px] top-1/2 -translate-y-1/2 right-4 sm:right-6 md:right-8 lg:right-[60px] xl:right-[80px] bg-[#dbdbdb33] hover:bg-[#dbdbdb66] rounded-full shadow-[0px_4px_10px_#00000040] flex items-center justify-center p-0 border-0 transition-all duration-300 hover:scale-110 z-10"
      >
        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-5 md:h-5 lg:w-7 lg:h-7 text-gray-700" />
      </Button>

      {/* Desktop Layout */}
      <div className="hidden lg:flex items-center h-full">
        {/* Product Image - Left Side */}
        <div className="w-1/2 flex justify-center items-center pl-8 xl:pl-16">
          <div className="relative w-[300px] h-[300px] xl:w-[350px] xl:h-[350px] 2xl:w-[400px] 2xl:h-[400px]">
            <img
              src={currentProduct.image}
              alt={currentProduct.title}
              className="w-full h-full object-contain transition-all duration-700 ease-in-out"
            />
          </div>
        </div>

        {/* Product Information - Right Side */}
        <div className="w-1/2 flex flex-col justify-center pl-8 xl:pl-12 pr-8 xl:pr-16">
          {/* Brand and Title - Left Aligned */}
          <div className="space-y-2 mb-6">
            <a
              href={currentProduct.link}
              rel="noopener noreferrer"
              target="_blank"
              className="block font-['Poppins',Helvetica] font-normal text-black text-2xl xl:text-3xl 2xl:text-[36px] leading-tight hover:underline transition-all duration-300"
            >
              {currentProduct.brand}
            </a>
            <h3 className="font-['Poppins',Helvetica] font-normal text-black text-2xl xl:text-3xl 2xl:text-[36px] leading-tight">
              {currentProduct.title}
            </h3>
          </div>

          {/* Price - Left Aligned */}
          <div className="font-['Inter',Helvetica] font-medium text-[#ff4d4d] text-lg xl:text-xl mb-6">
            {currentProduct.price}
            <span className="ml-1">{currentProduct.priceNote}</span>
          </div>

          {/* Shop Now Button - Left Aligned */}
          <div className="mb-6">
            <Button className="w-[200px] h-[60px] xl:w-[240px] xl:h-[70px] bg-white rounded-[30px] xl:rounded-[35px] border-2 border-solid border-black hover:bg-gray-50 transition-all duration-300 hover:scale-105">
              <span className="font-['Inter',Helvetica] font-medium text-black text-xl xl:text-2xl [-webkit-text-stroke:1px_#000000]">
                Shop Now
              </span>
            </Button>
          </div>

          {/* Color Selector - Left Aligned */}
          <div 
            className="w-[50px] h-[50px] xl:w-[60px] xl:h-[60px] rounded-full border-2 border-gray-300 transition-colors duration-700 ease-in-out"
            style={{ backgroundColor: currentProduct.colorDot }}
          />
        </div>
      </div>

      {/* Mobile Layout - Matching your image exactly with more bottom margin */}
      <div className="lg:hidden flex flex-col h-full px-4 sm:px-6">
        {/* Product Image - Top */}
        <div className="flex justify-center items-center pt-8 pb-6">
          <div className="relative w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] md:w-[320px] md:h-[320px]">
            <img
              src={currentProduct.image}
              alt={currentProduct.title}
              className="w-full h-full object-contain transition-all duration-700 ease-in-out"
            />
          </div>
        </div>

        {/* Product Information - Bottom with increased bottom margin */}
        <div className="flex-1 px-4 sm:px-8 pb-20 sm:pb-24 md:pb-28">
          {/* Brand and Title - Left Aligned with proper spacing */}
          <div className="mb-4">
            <a
              href={currentProduct.link}
              rel="noopener noreferrer"
              target="_blank"
              className="block font-['Poppins',Helvetica] font-normal text-black text-2xl sm:text-3xl md:text-4xl leading-tight hover:underline transition-all duration-300 mb-2"
            >
              {currentProduct.brand}
            </a>
            <h3 className="font-['Poppins',Helvetica] font-normal text-black text-2xl sm:text-3xl md:text-4xl leading-tight">
              {currentProduct.title}
            </h3>
          </div>

          {/* Price - Left Aligned with proper spacing */}
          <div className="font-['Inter',Helvetica] font-medium text-[#ff4d4d] text-lg sm:text-xl mb-6">
            {currentProduct.price}
            <span className="ml-1">{currentProduct.priceNote}</span>
          </div>

          {/* Button and Color Dot Row - Matching your image layout */}
          <div className="flex items-center justify-between">
            {/* Shop Now Button - Left side */}
            <Button className="w-[200px] h-[55px] sm:w-[240px] sm:h-[65px] bg-white rounded-[30px] border-2 border-solid border-black hover:bg-gray-50 transition-all duration-300 hover:scale-105">
              <span className="font-['Inter',Helvetica] font-medium text-black text-lg sm:text-xl [-webkit-text-stroke:1px_#000000]">
                Shop Now
              </span>
            </Button>

            {/* Color Selector - Right side */}
            <div 
              className="w-[45px] h-[45px] sm:w-[55px] sm:h-[55px] rounded-full border-2 border-gray-300 transition-colors duration-700 ease-in-out flex-shrink-0"
              style={{ backgroundColor: currentProduct.colorDot }}
            />
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
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