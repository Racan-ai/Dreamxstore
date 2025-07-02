import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const TrendingFashionCards = (): JSX.Element => {
  // Card data with clean images - no text overlays or filters
  const trendingCards = [
    {
      id: 1,
      image: "https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    },
    {
      id: 2,
      image: "https://images.pexels.com/photos/1926769/pexels-photo-1926769.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    },
    {
      id: 3,
      image: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    },
    {
      id: 4,
      image: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
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

        {/* Desktop: Custom Layout - First row (wider left, narrower right), Second row (narrower left, wider right) */}
        <div className="hidden lg:block">
          {/* First Row - Wider left card, narrower right card */}
          <div className="flex gap-6 xl:gap-8 mb-6 xl:mb-8">
            {/* Card 1 - Wider (60%) */}
            <Card className="relative overflow-hidden border-0 rounded-lg cursor-pointer flex-[3]">
              <CardContent className="p-0 relative h-[280px] xl:h-[320px] 2xl:h-[360px]">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${trendingCards[0].image})` }}
                />
              </CardContent>
            </Card>
            
            {/* Card 2 - Narrower (40%) */}
            <Card className="relative overflow-hidden border-0 rounded-lg cursor-pointer flex-[2]">
              <CardContent className="p-0 relative h-[280px] xl:h-[320px] 2xl:h-[360px]">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${trendingCards[1].image})` }}
                />
              </CardContent>
            </Card>
          </div>

          {/* Second Row - Narrower left card, wider right card */}
          <div className="flex gap-6 xl:gap-8">
            {/* Card 3 - Narrower (40%) */}
            <Card className="relative overflow-hidden border-0 rounded-lg cursor-pointer flex-[2]">
              <CardContent className="p-0 relative h-[280px] xl:h-[320px] 2xl:h-[360px]">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${trendingCards[2].image})` }}
                />
              </CardContent>
            </Card>
            
            {/* Card 4 - Wider (60%) */}
            <Card className="relative overflow-hidden border-0 rounded-lg cursor-pointer flex-[3]">
              <CardContent className="p-0 relative h-[280px] xl:h-[320px] 2xl:h-[360px]">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${trendingCards[3].image})` }}
                />
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Tablet: 2 columns */}
        <div className="hidden sm:grid lg:hidden sm:grid-cols-2 gap-4 md:gap-6">
          {trendingCards.map((card) => (
            <Card
              key={card.id}
              className="relative overflow-hidden border-0 rounded-lg cursor-pointer"
            >
              <CardContent className="p-0 relative h-[250px] md:h-[300px]">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${card.image})` }}
                />
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mobile: 1 column */}
        <div className="sm:hidden grid grid-cols-1 gap-4">
          {trendingCards.map((card) => (
            <Card
              key={card.id}
              className="relative overflow-hidden border-0 rounded-lg cursor-pointer"
            >
              <CardContent className="p-0 relative h-[200px]">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${card.image})` }}
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};