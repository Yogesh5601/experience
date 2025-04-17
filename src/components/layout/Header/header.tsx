import Link from "next/link";
import React from "react";
import MobileView from "./MobileView";

const Header = () => {
  const menu = [
    { field: "Services", link: "#services" },
    { field: "Works", link: "#works" },
    { field: "Resume", link: "#resume" },
    { field: "Skills", link: "#skills" },
    { field: "Contact", link: "#contact" },
  ];

  return (
    <div className="w-full flex px-8 py-6 bg-black text-white">
      <div className="flex w-full max-w-screen-xl mx-auto items-center justify-between">
        {/* Logo */}
        <div className="text-4xl font-bold">
          <Link href="/">Portfolio</Link>
        </div>

        {/* Navigation Menu */}
        <nav className="hidden md:flex space-x-8 text-base font-medium tracking-wide">
          {menu.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="hover:text-purple-400"
            >
              {item.field}
            </Link>
          ))}
        </nav>

        {/* Hire Me Button */}
        <div className="ml-auto md:ml-0">
          <Link
            href="#contact"
            className="px-4 py-2 border border-purple-600 rounded-md text-purple-400 hover:bg-purple-600 hover:text-white transition-colors"
          >
            Hire me
          </Link>
        </div>
      </div>
      <div className="md:hidden">
        <MobileView />
      </div>
    </div>
  );
};

export default Header;
