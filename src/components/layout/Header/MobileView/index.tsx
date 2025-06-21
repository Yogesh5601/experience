// "use client"
// import { useState, useEffect, SetStateAction } from "react";
// import { Home, Briefcase, FileText, User, Code } from "lucide-react";

// const MobileNav = () => {
//   const [isVisible, setIsVisible] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);
//   const [activeSection, setActiveSection] = useState("home");

//   const navItems = [
//     { href: "#services", icon: Briefcase, label: "Services" },
//     { href: "#works", icon: Code, label: "Works" },
//     { href: "#home", icon: Home, label: "Home", isHome: true },
//     { href: "#resume", icon: FileText, label: "Resume" },
//     { href: "#skills", icon: User, label: "Skills" },
//   ];

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;
//       setIsVisible(currentScrollY < lastScrollY || currentScrollY < 10);
//       setLastScrollY(currentScrollY);
//     };

//     // Create intersection observer for each section
//     const observerOptions = {
//       threshold: 0.5,
//       rootMargin: "-50% 0px -50% 0px",
//     };

//     const observerCallback = (entries: any[]) => {
//       entries.forEach((entry: { isIntersecting: any; target: { id: SetStateAction<string>; }; }) => {
//         if (entry.isIntersecting) {
//           setActiveSection(entry.target.id);
//         }
//       });
//     };

//     const observer = new IntersectionObserver(
//       observerCallback,
//       observerOptions
//     );

//     // Observe all sections
//     navItems.forEach((item) => {
//       const sectionId = item.href.replace("#", "");
//       const element = document.getElementById(sectionId);
//       if (element) observer.observe(element);
//     });

//     window.addEventListener("scroll", handleScroll, { passive: true });

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//       observer.disconnect();
//     };
//   }, [lastScrollY]);

//   const handleClick = (href: string) => (e: { preventDefault: () => void; }) => {
//     e.preventDefault();
//     const sectionId = href.replace("#", "");
//     const element = document.getElementById(sectionId);
//     if (element) {
//       element.scrollIntoView({ behavior: "smooth" });
//     } else if (sectionId === "home") {
//       window.scrollTo({ top: 0, behavior: "smooth" });
//     }
//   };

//   return (
//     <div
//       className={`fixed bottom-0 left-0 w-full z-50 backdrop-blur-md bg-black/80 border-t border-gray-800 transition-transform duration-300 ${
//         isVisible ? "translate-y-0" : "translate-y-full"
//       }`}
//     >
//       <div className="flex justify-around items-center h-16 px-2 max-w-lg mx-auto">
//         {navItems.map((item) => {
//           const sectionId = item.href.replace("#", "");
//           return (
//             <a
//               key={item.label}
//               href={item.href}
//               onClick={handleClick(item.href)}
//               className={`relative group flex flex-col items-center justify-center ${
//                 item.isHome ? "-mt-6" : ""
//               }`}
//             >
//               {item.isHome ? (
//                 <div className="relative">
//                   <div
//                     className={`absolute -inset-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-md transition-opacity duration-300 ${
//                       activeSection === "home"
//                         ? "opacity-75 group-hover:opacity-100"
//                         : "opacity-0 group-hover:opacity-75"
//                     }`}
//                   />
//                   <div
//                     className={`relative bg-black p-4 rounded-full border transition-colors duration-300 ${
//                       activeSection === "home"
//                         ? "border-purple-500 group-hover:border-purple-400"
//                         : "border-gray-700 group-hover:border-purple-500"
//                     }`}
//                   >
//                     <item.icon
//                       className={`w-6 h-6 transition-colors duration-300 ${
//                         activeSection === "home"
//                           ? "text-purple-500 group-hover:text-purple-400"
//                           : "text-gray-400 group-hover:text-purple-500"
//                       }`}
//                     />
//                   </div>
//                 </div>
//               ) : (
//                 <div
//                   className={`p-2 rounded-lg transition-colors duration-300 ${
//                     activeSection === sectionId
//                       ? "bg-gray-800/50"
//                       : "group-hover:bg-gray-800/50"
//                   }`}
//                 >
//                   <item.icon
//                     className={`w-5 h-5 transition-colors duration-300 ${
//                       activeSection === sectionId
//                         ? "text-purple-400"
//                         : "text-gray-400 group-hover:text-purple-400"
//                     }`}
//                   />
//                 </div>
//               )}
//               <span
//                 className={`text-xs mt-1 transition-colors duration-300 ${
//                   activeSection === sectionId
//                     ? "text-purple-400"
//                     : "text-gray-400 group-hover:text-purple-400"
//                 }`}
//               >
//                 {item.label}
//               </span>
//             </a>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default MobileNav;


"use client"
import { useState, useEffect, SetStateAction } from "react";
import { Home, Briefcase, FileText, User, Code } from "lucide-react";

const MobileNav = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    // Moved navItems inside useEffect - now it's a local constant
    const navItems = [
      { href: "#services", icon: Briefcase, label: "Services" },
      { href: "#works", icon: Code, label: "Works" },
      { href: "#home", icon: Home, label: "Home", isHome: true },
      { href: "#resume", icon: FileText, label: "Resume" },
      { href: "#skills", icon: User, label: "Skills" },
    ];

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 10);
      setLastScrollY(currentScrollY);
    };

    // Create intersection observer for each section
    const observerOptions = {
      threshold: 0.5,
      rootMargin: "-50% 0px -50% 0px",
    };

    const observerCallback = (entries: any[]) => {
      entries.forEach((entry: { isIntersecting: any; target: { id: SetStateAction<string>; }; }) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // Observe all sections using the local navItems
    navItems.forEach((item) => {
      const sectionId = item.href.replace("#", "");
      const element = document.getElementById(sectionId);
      if (element) observer.observe(element);
    });

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, [lastScrollY]);

  // We still need navItems for the render part, so define it here too
  const navItems = [
    { href: "#services", icon: Briefcase, label: "Services" },
    { href: "#works", icon: Code, label: "Works" },
    { href: "#home", icon: Home, label: "Home", isHome: true },
    { href: "#resume", icon: FileText, label: "Resume" },
    { href: "#skills", icon: User, label: "Skills" },
  ];

  const handleClick = (href: string) => (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    const sectionId = href.replace("#", "");
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div
      className={`fixed bottom-0 left-0 w-full z-50 backdrop-blur-md bg-black/80 border-t border-gray-800 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="flex justify-around items-center h-16 px-2 max-w-lg mx-auto">
        {navItems.map((item) => {
          const sectionId = item.href.replace("#", "");
          return (
            <a
              key={item.label}
              href={item.href}
              onClick={handleClick(item.href)}
              className={`relative group flex flex-col items-center justify-center ${
                item.isHome ? "-mt-6" : ""
              }`}
            >
              {item.isHome ? (
                <div className="relative">
                  <div
                    className={`absolute -inset-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-md transition-opacity duration-300 ${
                      activeSection === "home"
                        ? "opacity-75 group-hover:opacity-100"
                        : "opacity-0 group-hover:opacity-75"
                    }`}
                  />
                  <div
                    className={`relative bg-black p-4 rounded-full border transition-colors duration-300 ${
                      activeSection === "home"
                        ? "border-purple-500 group-hover:border-purple-400"
                        : "border-gray-700 group-hover:border-purple-500"
                    }`}
                  >
                    <item.icon
                      className={`w-6 h-6 transition-colors duration-300 ${
                        activeSection === "home"
                          ? "text-purple-500 group-hover:text-purple-400"
                          : "text-gray-400 group-hover:text-purple-500"
                      }`}
                    />
                  </div>
                </div>
              ) : (
                <div
                  className={`p-2 rounded-lg transition-colors duration-300 ${
                    activeSection === sectionId
                      ? "bg-gray-800/50"
                      : "group-hover:bg-gray-800/50"
                  }`}
                >
                  <item.icon
                    className={`w-5 h-5 transition-colors duration-300 ${
                      activeSection === sectionId
                        ? "text-purple-400"
                        : "text-gray-400 group-hover:text-purple-400"
                    }`}
                  />
                </div>
              )}
              <span
                className={`text-xs mt-1 transition-colors duration-300 ${
                  activeSection === sectionId
                    ? "text-purple-400"
                    : "text-gray-400 group-hover:text-purple-400"
                }`}
              >
                {item.label}
              </span>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default MobileNav;