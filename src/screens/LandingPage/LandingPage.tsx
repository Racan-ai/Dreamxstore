import React from "react";
import { HeroSection } from "./sections/HeroSection";
import { HeroCarousel } from "./sections/HeroCarousel";
import { BrandMarquee } from "./sections/BrandMarquee";
import { OverallSection } from "./sections/OverallSection";
import { ProductSection } from "./sections/ProductSection";
import { TrendingFashionCarousel } from "./sections/TrendingFashionCarousel";
import { TrendingFashionCards } from "./sections/TrendingFashionCards";
import { Footer } from "./sections/Footer";
import { FloatingChatButton } from "./sections/FloatingChatButton";

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
          
          {/* Overall Section - New section with image and content */}
          <OverallSection />
          
          {/* Product Section - Category buttons and horizontal scroll products */}
          <ProductSection />
          
          {/* Trending Fashion Carousel - New carousel section */}
          <TrendingFashionCarousel />
          
          {/* Trending Fashion Cards - New cards section */}
          <TrendingFashionCards />
        </main>

        {/* Footer */}
        <Footer />

        {/* Floating Chat Button */}
        <FloatingChatButton />
      </div>
    </div>
  );
};