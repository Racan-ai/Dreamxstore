import React from "react";
import { HeroSection } from "./sections/HeroSection";
import { HeroCarousel } from "./sections/HeroCarousel";
import { BrandMarquee } from "./sections/BrandMarquee";

export const LandingPage = (): JSX.Element => {
  return (
    <div className="bg-white w-full min-h-screen">
      <div className="bg-white w-full max-w-none mx-auto relative">
        {/* Hero Section - Fixed Navigation */}
        <HeroSection />
        
        {/* Main Content - Add top padding to account for fixed header */}
        <main className="pt-0">
          {/* Hero Carousel - Auto-sliding section */}
          <HeroCarousel />
          
          {/* Brand Marquee - Animated brand logos */}
          <BrandMarquee />
        </main>
      </div>
    </div>
  );
};