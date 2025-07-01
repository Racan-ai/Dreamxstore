import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "../../../../components/ui/button";

export const HeroCarousel = (): JSX.Element => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  // Slide data with high-quality fashion images and hyperlinks
  const slides = [
    {
      id: 1,
      image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
      title: "Summer Collection",
      buttonText: "Buy Now",
      link: "/summer-collection"
    },
    {
      id: 2,
      image: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
      title: "Urban Style",
      buttonText: "Shop Now",
      link: "/urban-style"
    },
    {
      id: 3,
      image: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
      title: "Premium Quality",
      buttonText: "Explore",
      link: "/premium-collection"
    },
    {
      id: 4,
      image: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
      title: "New Arrivals",
      buttonText: "View All",
      link: "/new-arrivals"
    }
  ];

  // Auto-advance slides every 6 seconds
  useEffect(() => {
    if (!isHovered) {
      intervalRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 6000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isHovered, slides.length]);

  // Handle mouse movement for arrow positioning
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (carouselRef.current) {
      const rect = carouselRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const isLeftSide = mousePosition.x < (carouselRef.current?.offsetWidth || 0) / 2;

  return (
    <section 
      ref={carouselRef}
      className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[450px] xl:h-[520px] overflow-hidden z-10"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
    >
      {/* Slides Container */}
      <div 
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%) translateZ(0)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className="relative w-full h-full flex-shrink-0"
          >
            {/* Clickable Background Image */}
            <a 
              href={slide.link}
              className="absolute inset-0 block cursor-pointer group"
            >
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
              
              {/* Hover overlay for better UX */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </a>
            
            {/* Buy Now Button - Responsive positioning and sizing */}
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-8 md:left-8 lg:bottom-10 lg:left-10 z-10">
              <Button 
                onClick={() => window.location.href = slide.link}
                className="bg-white text-[#004d84] hover:bg-gray-50 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 text-sm sm:text-base md:text-lg lg:text-xl font-semibold rounded-sm shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 h-[48px] sm:h-[56px] md:h-[64px] lg:h-[68px] xl:h-[69px]"
              >
                {slide.buttonText}
              </Button>
            </div>

            {/* Title overlay - Responsive sizing */}
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 md:top-8 md:left-8 lg:top-10 lg:left-10 z-10">
              <h2 className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light tracking-wide opacity-90">
                {slide.title}
              </h2>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows - Show on Hover - Responsive sizing */}
      {isHovered && (
        <>
          {/* Left Arrow - Shows when hovering on left side */}
          {isLeftSide && (
            <Button
              onClick={prevSlide}
              className="absolute top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 bg-white/90 hover:bg-white border-0 rounded-full p-0 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-110 z-20"
              style={{
                left: Math.max(16, mousePosition.x - 60),
              }}
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 xl:w-9 xl:h-9 text-gray-800" />
            </Button>
          )}

          {/* Right Arrow - Shows when hovering on right side */}
          {!isLeftSide && (
            <Button
              onClick={nextSlide}
              className="absolute top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18 lg:h-18 bg-white/90 hover:bg-white border-0 rounded-full p-0 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-110 z-20"
              style={{
                left: Math.min(mousePosition.x + 16, (carouselRef.current?.offsetWidth || 0) - 64),
              }}
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 xl:w-9 xl:h-9 text-gray-800" />
            </Button>
          )}
        </>
      )}

      {/* Slide Indicators - Responsive positioning */}
      <div className="absolute bottom-2 sm:bottom-3 md:bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 sm:gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-white w-4 sm:w-6' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </section>
  );
};