import React from "react";
import { Button } from "../../../../components/ui/button";

export const OverallSection = (): JSX.Element => {
  return (
    <section className="w-full bg-[#f8f8f8] py-8 sm:py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        {/* Desktop Layout - Side by Side */}
        <div className="hidden lg:flex items-center gap-8 xl:gap-12">
          {/* Left - Image */}
          <div className="flex-1">
            <div className="relative">
              <img
                src="https://i.pinimg.com/736x/92/9b/df/929bdf0480b8369bf764bd4022539552.jpg"
                alt="Men's Collection - Overall"
                className="w-full h-auto object-cover rounded-lg"
              />
              {/* Overlay Text on Image */}
              <div className="absolute top-6 left-6 text-white">
                <p className="text-sm font-medium tracking-wider uppercase">MEN'S COLLECTION</p>
                <p className="text-sm font-medium tracking-wider uppercase">MASSIMO DUTTI</p>
              </div>
              <div className="absolute bottom-8 left-6 text-white">
                <p className="text-sm font-medium tracking-wider uppercase mb-2">F/W 2021</p>
                <h2 className="text-6xl xl:text-7xl font-bold tracking-wider uppercase">OVERALL</h2>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="flex-1 flex flex-col justify-center space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl xl:text-4xl font-light text-gray-900">
                Hey, welcome to DreamX!
              </h3>
              
              <div className="space-y-4">
                <p className="text-lg xl:text-xl text-gray-800 leading-relaxed">
                  <span className="font-semibold">#GetCustomClothing</span> tailored just for you from your favorite brands and styles.
                </p>
                <p className="text-lg xl:text-xl text-gray-800 leading-relaxed">
                  Discover exclusive, made-for-you fashion picks and personalize your wardrobe like never before.
                </p>
              </div>
            </div>

            <div className="flex justify-start">
              <Button className="bg-[#f1ff8c] hover:bg-[#e9f87a] text-black font-semibold px-12 py-6 rounded-full text-lg border border-black transition-all duration-300 hover:scale-105">
                Join Now
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Layout - Stacked */}
        <div className="lg:hidden space-y-8">
          {/* Image */}
          <div className="relative">
            <img
              src="https://i.pinimg.com/736x/92/9b/df/929bdf0480b8369bf764bd4022539552.jpg"
              alt="Men's Collection - Overall"
              className="w-full h-[300px] sm:h-[400px] object-cover rounded-lg"
            />
            {/* Overlay Text on Image */}
            <div className="absolute top-4 left-4 text-white">
              <p className="text-xs sm:text-sm font-medium tracking-wider uppercase">MEN'S COLLECTION</p>
              <p className="text-xs sm:text-sm font-medium tracking-wider uppercase">MASSIMO DUTTI</p>
            </div>
            <div className="absolute bottom-4 left-4 text-white">
              <p className="text-xs sm:text-sm font-medium tracking-wider uppercase mb-1">F/W 2021</p>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-wider uppercase">OVERALL</h2>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6 px-2">
            <h3 className="text-2xl sm:text-3xl font-light text-gray-900">
              Hey, welcome to DreamX!
            </h3>
            
            <div className="space-y-4">
              <p className="text-base sm:text-lg text-gray-800 leading-relaxed">
                <span className="font-semibold">#GetCustomClothing</span> tailored just for you from your favorite brands and styles.
              </p>
              <p className="text-base sm:text-lg text-gray-800 leading-relaxed">
                Discover exclusive, made-for-you fashion picks and personalize your wardrobe like never before.
              </p>
            </div>

            <div className="flex justify-center pt-4">
              <Button className="bg-[#f1ff8c] hover:bg-[#e9f87a] text-black font-semibold px-10 py-4 rounded-full text-base border border-black transition-all duration-300 hover:scale-105">
                Join Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};