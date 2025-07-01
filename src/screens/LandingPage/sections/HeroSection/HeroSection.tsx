import React, { useState } from "react";
import { Avatar, AvatarImage } from "../../../../components/ui/avatar";
import { Button } from "../../../../components/ui/button";
import { X, Menu } from "lucide-react";

export const HeroSection = (): JSX.Element => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Navigation links data
  const navLinks = [
    { text: "Home", className: "whitespace-nowrap" },
    { text: "About us" },
    { text: "Services" },
    { text: "Contact" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 w-full h-[100px] bg-white z-[100] border-b border-gray-100 shadow-sm">
      <div className="w-full h-full mx-auto relative flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
        {/* Logo */}
        <div className="flex items-center flex-shrink-0">
          <img
            src="https://i.postimg.cc/xTVNmCps/Dream-X-Store.png"
            alt="Dream X Store"
            className="h-10 sm:h-12 w-auto object-contain"
          />
        </div>

        {/* Desktop Navigation - Properly positioned */}
        <nav className="hidden lg:flex items-center gap-4 xl:gap-6 2xl:gap-8 flex-shrink-0">
          {navLinks.map((link, index) => (
            <Button
              key={index}
              variant="link"
              className={`[font-family:'Azeret_Mono',Helvetica] font-normal text-black text-base xl:text-lg hover:text-[#004d84] transition-colors p-0 h-auto whitespace-nowrap ${link.className || ""}`}
            >
              {link.text}
            </Button>
          ))}

          {/* CTA Button - Much smaller text and better proportions */}
          <Button className="w-[90px] xl:w-[100px] 2xl:w-[110px] h-[30px] xl:h-[32px] 2xl:h-[34px] bg-[#f0ff7f] rounded-[1px] hover:bg-[#e5f570] transition-colors ml-4 xl:ml-6 2xl:ml-8 flex-shrink-0 flex items-center justify-center">
            <span className="[font-family:'Azeret_Mono',Helvetica] font-normal text-[#004d84] text-[10px] xl:text-[11px] 2xl:text-[12px] whitespace-nowrap leading-none">
              Get Started
            </span>
          </Button>

          {/* Enhanced User Avatar - Responsive sizing */}
          <div className="relative pl-2 group flex-shrink-0">
            <Avatar className="w-[32px] h-[32px] xl:w-[36px] xl:h-[36px] 2xl:w-[40px] 2xl:h-[40px] ring-2 ring-gray-200 hover:ring-[#004d84] transition-all duration-300 cursor-pointer shadow-md hover:shadow-lg">
              <AvatarImage
                src="/ellipse-1.png"
                alt="User profile"
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </Avatar>
            
            {/* Online status indicator - Responsive sizing */}
            <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 xl:w-3 xl:h-3 bg-green-500 border-2 border-white rounded-full shadow-sm"></div>
            
            {/* Hover tooltip */}
            <div className="absolute top-full right-0 mt-2 px-3 py-1 bg-gray-900 text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
              Profile Settings
              <div className="absolute -top-1 right-3 w-2 h-2 bg-gray-900 rotate-45"></div>
            </div>
          </div>
        </nav>

        {/* Mobile Menu Button - Responsive sizing */}
        <Button
          variant="ghost"
          className="lg:hidden p-2 h-auto flex-shrink-0"
          onClick={toggleMobileMenu}
        >
          <Menu className="w-6 h-6 sm:w-7 sm:h-7 text-black" />
        </Button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-[150] lg:hidden" 
          onClick={toggleMobileMenu} 
        />
      )}

      {/* Mobile Menu - Fixed positioning with higher z-index */}
      <div className={`fixed top-0 right-0 h-full w-[85vw] max-w-[320px] bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-[200] lg:hidden ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header with Logo and Profile */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <img
                src="https://i.postimg.cc/xTVNmCps/Dream-X-Store.png"
                alt="Dream X Store"
                className="h-8 w-auto object-contain"
              />
              
              {/* Mobile Profile Avatar */}
              <div className="relative">
                <Avatar className="w-8 h-8 ring-2 ring-gray-200 shadow-sm">
                  <AvatarImage
                    src="/ellipse-1.png"
                    alt="User profile"
                    className="object-cover"
                  />
                </Avatar>
                <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-green-500 border-2 border-white rounded-full"></div>
              </div>
            </div>
            
            <Button
              variant="ghost"
              className="p-2 h-auto"
              onClick={toggleMobileMenu}
            >
              <X className="w-6 h-6 text-gray-600" />
            </Button>
          </div>

          {/* Mobile Menu Content */}
          <div className="flex-1 px-6 py-8 flex flex-col justify-center">
            <div className="space-y-6 text-center">
              {navLinks.map((link, index) => (
                <div key={index} className="border-b border-gray-200 pb-4">
                  <Button
                    variant="link"
                    className="text-xl sm:text-2xl font-bold text-black p-0 h-auto font-mono uppercase tracking-wider hover:text-[#004d84] transition-colors"
                    onClick={toggleMobileMenu}
                  >
                    {link.text.toUpperCase()}
                  </Button>
                </div>
              ))}
              
              {/* Get Started Button in Menu */}
              <div className="pt-4">
                <Button
                  variant="link"
                  className="text-xl sm:text-2xl font-bold text-black p-0 h-auto font-mono uppercase tracking-wider hover:text-[#004d84] transition-colors"
                  onClick={toggleMobileMenu}
                >
                  GET STARTED
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};