import Link from "next/link";
import React from "react";

const Header = () => {
  const menu = [
    { field: "Services", link: "#services" },
    { field: "Works", link: "#works" },
    { field: "Resume", link: "#resume" },
    { field: "Skills", link: "#skills" },
    // { field: "Testimonials", link: "#testimonials" },
    { field: "Contact", link: "#contact" },
  ];

  return (
    <div className="w-full flex px-8 py-6 bg-black text-white">
      <div className="flex w-full max-w-screen-xl mx-auto items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold">
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
            href="/hire"
            className="px-4 py-2 border border-purple-600 rounded-md text-purple-400 hover:bg-purple-600 hover:text-white transition-colors"
          >
            Hire me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;

// const Header = () => {
//   const menuItems = [
//     { name: "Services", href: "/services" },
//     { name: "Works", href: "/works" },
//     { name: "Resume", href: "/resume" },
//     { name: "Skills", href: "/skills" },
//     { name: "Testimonials", href: "/testimonials" },
//     { name: "Contact", href: "/contact" },
//   ];

//   return (
//     <header className="max-w-screen-xl mx-auto flex items-center justify-between px-8 py-6 bg-black text-white">
//       <div className="flex items-center space-x-4">
//         <div className="text-2xl font-bold">G</div>
//         <span>mail@gerolddesign.com</span>
//       </div>
//       <nav className="hidden md:flex space-x-8">
//         {menuItems.map((item) => (
//           <Link key={item.name} href={item.href}>
//             {item.name}
//           </Link>
//         ))}
//       </nav>
//       <Link
//         href="/hire"
//         className="bg-purple-600 px-4 py-2 rounded-full text-white hover:bg-purple-500"
//       >
//         Hire me!
//       </Link>
//     </header>
//   );
// };

// export default Header;
