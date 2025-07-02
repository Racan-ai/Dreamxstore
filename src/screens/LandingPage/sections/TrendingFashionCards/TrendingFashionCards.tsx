import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const TrendingFashionCards = (): JSX.Element => {
  // Card data based on the Figma designs
  const trendingCards = [
    {
      id: 1,
      type: "denim",
      title: "LEVEL UP YOUR DENIM",
      subtitle: "50% DISCOUNT SALE",
      badge: "Dream Denim Collection 2024",
      image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      backgroundColor: "#4A90E2",
      textColor: "white",
      hasPattern: true
    },
    {
      id: 2,
      type: "luxury",
      title: "luxury is in the detail",
      image: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      backgroundColor: "#B91C1C",
      textColor: "white",
      isVerticalText: true
    },
    {
      id: 3,
      type: "basics",
      title: "FIELD BASICS",
      subtitle: "Essential Collection",
      date: "2024.03.20 18:22:24",
      image: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      backgroundColor: "#F5F5F5",
      textColor: "black",
      hasFrame: true
    },
    {
      id: 4,
      type: "sale",
      title: "COLLECTION 23/24",
      subtitle: "SALE 30% OFF",
      code: "USE CODE: SALE30",
      image: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      backgroundColor: "#2D2D2D",
      textColor: "white",
      hasHighlight: true
    }
  ];

  return (
    <section className="w-full py-8 sm:py-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0 mb-8 sm:mb-10 md:mb-12 lg:mb-16">
          <h2 className="font-['Shinko_Sans-Regular',Helvetica] font-normal text-black text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight">
            Trending Fashion
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

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 lg:gap-8">
          {trendingCards.map((card) => (
            <Card
              key={card.id}
              className="relative overflow-hidden border-0 rounded-lg cursor-pointer group transition-all duration-300 hover:scale-105 hover:shadow-xl"
              style={{ backgroundColor: card.backgroundColor }}
            >
              <CardContent className="p-0 relative h-[280px] sm:h-[300px] md:h-[320px] lg:h-[280px] xl:h-[300px]">
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundImage: `url(${card.image})` }}
                />
                
                {/* Overlay */}
                <div 
                  className="absolute inset-0 opacity-80"
                  style={{ backgroundColor: card.backgroundColor }}
                />

                {/* Content based on card type */}
                {card.type === "denim" && (
                  <>
                    {/* Badge */}
                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 border border-white/30">
                      <span className="text-white text-xs font-medium">{card.badge}</span>
                    </div>
                    
                    {/* Main Text */}
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-bold leading-tight mb-2">
                        {card.title}
                      </h3>
                      <div className="flex items-center gap-2">
                        <span className="text-white text-sm font-medium">{card.subtitle}</span>
                        {/* Pattern squares */}
                        <div className="flex gap-1">
                          <div className="w-3 h-3 bg-yellow-400"></div>
                          <div className="w-3 h-3 bg-yellow-400"></div>
                          <div className="w-3 h-3 bg-black"></div>
                          <div className="w-3 h-3 bg-black"></div>
                        </div>
                      </div>
                    </div>
                  </>
                )}

                {card.type === "luxury" && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div 
                      className="text-white text-lg sm:text-xl font-light tracking-wider"
                      style={{ 
                        writingMode: 'vertical-rl',
                        textOrientation: 'mixed'
                      }}
                    >
                      {card.title}
                    </div>
                  </div>
                )}

                {card.type === "basics" && (
                  <>
                    {/* Frame overlay */}
                    <div className="absolute top-4 left-4 w-20 h-24 border-2 border-black bg-white/80 backdrop-blur-sm">
                      <div className="p-2 text-xs text-black font-medium">
                        FIELD<br/>BASICS
                      </div>
                    </div>
                    
                    {/* Date */}
                    <div className="absolute bottom-4 left-4 text-black text-xs font-mono">
                      {card.date}
                    </div>
                    
                    {/* Title */}
                    <div className="absolute bottom-12 left-4">
                      <h3 className="text-black text-lg font-bold">{card.title}</h3>
                      <p className="text-black text-sm">{card.subtitle}</p>
                    </div>
                  </>
                )}

                {card.type === "sale" && (
                  <>
                    {/* Sale text */}
                    <div className="absolute top-6 left-6">
                      <div className="text-white text-sm font-medium mb-1">{card.subtitle}</div>
                      <div className="text-white text-xs">{card.code}</div>
                    </div>
                    
                    {/* Collection title */}
                    <div className="absolute bottom-6 left-6">
                      <h3 className="text-white text-2xl font-bold">{card.title}</h3>
                    </div>
                    
                    {/* Highlight accent */}
                    <div className="absolute top-6 right-6 w-1 h-16 bg-yellow-400"></div>
                  </>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mobile: Show only 2 cards in a row for better visibility */}
        <div className="sm:hidden grid grid-cols-2 gap-3 mt-8">
          <h3 className="col-span-2 text-lg font-medium text-gray-600 mb-4">Trending</h3>
          {trendingCards.slice(0, 4).map((card) => (
            <Card
              key={`mobile-${card.id}`}
              className="relative overflow-hidden border-0 rounded-lg cursor-pointer group transition-all duration-300"
              style={{ backgroundColor: card.backgroundColor }}
            >
              <CardContent className="p-0 relative h-[160px]">
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${card.image})` }}
                />
                
                {/* Overlay */}
                <div 
                  className="absolute inset-0 opacity-80"
                  style={{ backgroundColor: card.backgroundColor }}
                />

                {/* Simplified mobile content */}
                <div className="absolute bottom-3 left-3 right-3">
                  <h4 className="text-white text-sm font-bold leading-tight">
                    {card.type === "denim" ? "LEVEL UP" : 
                     card.type === "luxury" ? "LUXURY" :
                     card.type === "basics" ? "BASICS" : "SALE"}
                  </h4>
                  {card.subtitle && (
                    <p className="text-white text-xs opacity-90">{card.subtitle}</p>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};