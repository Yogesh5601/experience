"use client"

import Link from "next/link";
import React, { useState, useEffect } from "react";
import MobileView from "./MobileView";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // Create intersection observer for each section
    const observerOptions = {
      threshold: 0.5,
      rootMargin: "-50% 0px -50% 0px",
    };

    const observerCallback = (entries: any[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections - including contact
    const sections = ["home", "services", "works", "resume", "skills", "contact"];
    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) observer.observe(element);
    });

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const menu = [
    { field: "Services", link: "#services", id: "services" },
    { field: "Works", link: "#works", id: "works" },
    { field: "Resume", link: "#resume", id: "resume" },
    { field: "Skills", link: "#skills", id: "skills" },
    { field: "Contact", link: "#contact", id: "contact" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/90 backdrop-blur-md' 
        : 'bg-transparent'
    }`}>
      <div className="w-full flex px-6 lg:px-8 py-4 lg:py-6">
        <div className="flex w-full max-w-screen-xl mx-auto items-center justify-between">
          {/* Logo */}
          <div className="text-2xl lg:text-4xl font-bold">
            <Link 
              href="/" 
              className="text-gradient hover:scale-105 transition-transform duration-300 focus:outline-none"
            >
              Portfolio
            </Link>
          </div>

          {/* Desktop Navigation Menu */}
          <nav className="hidden md:flex space-x-8 text-base font-medium tracking-wide">
            {menu.map((item, index) => {
              const isActive = activeSection === item.id;
              return (
                <Link
                  key={index}
                  href={item.link}
                  className={`relative group text-gray-300 hover:text-white transition-colors duration-300 ${
                    isActive ? 'text-white' : ''
                  } focus:outline-none`}
                >
                  {item.field}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-accent to-accent-light transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </Link>
              );
            })}
          </nav>

          {/* Desktop Hire Me Button */}
          <div className="hidden md:block">
            <Link
              href="#contact"
              className="relative overflow-hidden px-6 py-3 border border-accent rounded-lg text-accent hover:text-white transition-colors duration-300 group"
            >
              <span className="relative z-10">Hire me</span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-accent-light transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Mobile View */}
      <MobileView />
    </header>
  );
};

export default Header;
