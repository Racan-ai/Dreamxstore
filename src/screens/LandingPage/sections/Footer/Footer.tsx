import React from "react";
import { Button } from "../../../../components/ui/button";
import { Instagram, Facebook, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";

export const Footer = (): JSX.Element => {
  const currentYear = new Date().getFullYear();

  // Footer navigation data
  const footerSections = [
    {
      title: "COMPANY",
      links: [
        { name: "Home", href: "/" },
        { name: "How to do", href: "/how-to" },
        { name: "Catalog", href: "/catalog" },
        { name: "Resources", href: "/resources" },
      ]
    },
    {
      title: "DISCOVER",
      links: [
        { name: "Customers", href: "/customers" },
        { name: "Freelancers", href: "/freelancers" },
        { name: "Dream X", href: "/dream-x" },
      ]
    },
    {
      title: "ABOUT",
      links: [
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
        { name: "Join", href: "/join" },
      ]
    },
    {
      title: "LEGAL",
      links: [
        { name: "Privacy Policy", href: "/privacy" },
        { name: "Terms & Conditions", href: "/terms" },
        { name: "Refund Policy", href: "/refund" },
        { name: "Shipping Policy", href: "/shipping" },
      ]
    }
  ];

  const socialLinks = [
    { icon: Instagram, href: "https://instagram.com/dreamxstore", label: "Instagram" },
    { icon: Facebook, href: "https://facebook.com/dreamxstore", label: "Facebook" },
    { icon: Twitter, href: "https://twitter.com/dreamxstore", label: "Twitter" },
    { icon: Youtube, href: "https://youtube.com/dreamxstore", label: "YouTube" },
  ];

  const contactInfo = [
    {
      city: "Raleigh",
      address: "123 N. Harrington Street",
      details: "Raleigh, NC 27603",
      phone: "919.833.4413"
    },
    {
      city: "Charlotte", 
      address: "250 East Peterson Drive",
      details: "Charlotte, NC 28217",
      phone: "704.333.7772"
    }
  ];

  return (
    <footer className="bg-[#2a2a2a] text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-12 sm:py-16 md:py-20 lg:py-24">
        {/* Top Section - Logo and Navigation */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 mb-12 lg:mb-16">
          {/* Logo and Brand Section */}
          <div className="lg:col-span-1 space-y-6">
            <div className="flex items-center space-x-3">
              <img
                src="https://i.postimg.cc/T3dfzRPx/Dream-X-Store.png"
                alt="Dream X Store"
                className="h-12 sm:h-14 md:h-16 w-auto object-contain"
              />
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-wider">
                Dream X Store
              </h3>
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-light">
                Elevating fashion through custom clothing and personalized style experiences.
              </p>
            </div>

            {/* Social Media Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  variant="ghost"
                  size="icon"
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 hover:scale-110"
                  asChild
                >
                  <a href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.label}>
                    <social.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Navigation Sections */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {footerSections.map((section) => (
              <div key={section.title} className="space-y-4 sm:space-y-6">
                <h4 className="text-sm sm:text-base font-semibold tracking-wider text-white uppercase">
                  {section.title}
                </h4>
                <ul className="space-y-2 sm:space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Button
                        variant="link"
                        className="text-gray-300 hover:text-white text-sm sm:text-base font-light p-0 h-auto transition-colors duration-300"
                        asChild
                      >
                        <a href={link.href}>{link.name}</a>
                      </Button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Information Section */}
        <div className="border-t border-gray-600 pt-8 lg:pt-12 mb-8 lg:mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {contactInfo.map((location) => (
              <div key={location.city} className="space-y-3">
                <h5 className="text-lg sm:text-xl font-semibold text-white">
                  {location.city}
                </h5>
                <div className="space-y-2 text-gray-300 text-sm sm:text-base">
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                    <div>
                      <p>{location.address}</p>
                      <p>{location.details}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Phone className="w-4 h-4 flex-shrink-0" />
                    <p>{location.phone}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="bg-[#f1ff8c] rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 mb-8 lg:mb-12">
          <div className="text-center space-y-4 sm:space-y-6">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-black tracking-wide">
              Let's work <span className="font-semibold">together</span>
            </h3>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
              <Button
                variant="link"
                className="text-black hover:text-gray-700 text-base sm:text-lg font-medium underline p-0 h-auto transition-colors"
                asChild
              >
                <a href="/contact">Get in Touch</a>
              </Button>
              <Button
                variant="link"
                className="text-black hover:text-gray-700 text-base sm:text-lg font-medium underline p-0 h-auto transition-colors"
                asChild
              >
                <a href="/careers">Careers</a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-600 bg-[#1a1a1a]">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 py-6 sm:py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright and Company Info */}
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-gray-400 text-sm">
              <p>©{currentYear} Cline Design</p>
              <div className="flex space-x-4">
                <Button
                  variant="link"
                  className="text-gray-400 hover:text-white text-sm p-0 h-auto transition-colors"
                  asChild
                >
                  <a href="/terms">Terms of Use</a>
                </Button>
                <Button
                  variant="link"
                  className="text-gray-400 hover:text-white text-sm p-0 h-auto transition-colors"
                  asChild
                >
                  <a href="/privacy">Privacy Policy</a>
                </Button>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-gray-400" />
              <Button
                variant="link"
                className="text-gray-400 hover:text-white text-sm font-medium p-0 h-auto transition-colors"
                asChild
              >
                <a href="/newsletter">Subscribe to Newsletter</a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Large Brand Name at Bottom */}
      <div className="bg-[#0a0a0a] py-8 sm:py-12 md:py-16 lg:py-20 overflow-hidden">
        <div className="text-center">
          <h2 className="text-6xl sm:text-8xl md:text-9xl lg:text-[12rem] xl:text-[14rem] font-black text-white/5 tracking-wider select-none">
            CLINE
          </h2>
        </div>
      </div>
    </footer>
  );
};