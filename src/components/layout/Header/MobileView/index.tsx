"use client"
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Briefcase, FileText, User, Code, X, Menu } from "lucide-react";

const MobileNav = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: "#services", icon: Briefcase, label: "Services" },
    { href: "#works", icon: Code, label: "Works" },
    { href: "#home", icon: Home, label: "Home", isHome: true },
    { href: "#resume", icon: FileText, label: "Resume" },
    { href: "#skills", icon: User, label: "Skills" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 10);
      setLastScrollY(currentScrollY);
    };

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

  const handleClick = (href: string) => (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const sectionId = href.replace("#", "");
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else if (sectionId === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <motion.button
        className="fixed top-2 right-4 z-50 p-2 bg-accent rounded-full shadow-glow lg:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        whileTap={{ scale: 0.95 }}
      >
        <AnimatePresence mode="wait">
          {isMenuOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X size={24} className="text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Menu size={24} className="text-white" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="flex flex-col items-center justify-center h-full space-y-8"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              {navItems.map((item, index) => {
                const sectionId = item.href.replace("#", "");
                const isActive = activeSection === sectionId;
                
                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    onClick={handleClick(item.href)}
                    className={`flex items-center gap-4 text-2xl font-medium transition-all duration-300 ${
                      isActive ? 'text-accent' : 'text-gray-300 hover:text-white'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <item.icon size={28} />
                    {item.label}
                  </motion.a>
                );
              })}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Bottom Navigation */}
      {/* <motion.div
        className={`fixed bottom-0 left-0 w-full z-30 backdrop-blur-md bg-black/80 border-t border-gray-800 transition-all duration-300 lg:hidden ${
          isVisible ? "translate-y-0" : "translate-y-full"
        }`}
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex justify-around items-center h-16 px-2 max-w-lg mx-auto">
          {navItems.map((item, index) => {
            const sectionId = item.href.replace("#", "");
            const isActive = activeSection === sectionId;
            
            return (
              <motion.a
                key={item.label}
                href={item.href}
                onClick={handleClick(item.href)}
                className={`relative group flex flex-col items-center justify-center ${
                  item.isHome ? "-mt-6" : ""
                }`}
                whileTap={{ scale: 0.9 }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {item.isHome ? (
                  <div className="relative">
                    <motion.div
                      className={`absolute -inset-3 bg-gradient-to-r from-accent to-accent-light rounded-full blur-md transition-opacity duration-300 ${
                        isActive ? "opacity-75" : "opacity-0"
                      }`}
                      animate={isActive ? { scale: [1, 1.1, 1] } : {}}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <div
                      className={`relative bg-black p-4 rounded-full border transition-colors duration-300 ${
                        isActive
                          ? "border-accent"
                          : "border-gray-700 group-hover:border-accent"
                      }`}
                    >
                      <item.icon
                        className={`w-6 h-6 transition-colors duration-300 ${
                          isActive
                            ? "text-accent"
                            : "text-gray-400 group-hover:text-accent"
                        }`}
                      />
                    </div>
                  </div>
                ) : (
                  <div
                    className={`p-2 rounded-lg transition-colors duration-300 ${
                      isActive ? "bg-accent/20" : "group-hover:bg-gray-800/50"
                    }`}
                  >
                    <item.icon
                      className={`w-5 h-5 transition-colors duration-300 ${
                        isActive
                          ? "text-accent"
                          : "text-gray-400 group-hover:text-accent"
                      }`}
                    />
                  </div>
                )}
                <span
                  className={`text-xs mt-1 transition-colors duration-300 ${
                    isActive
                      ? "text-accent"
                      : "text-gray-400 group-hover:text-accent"
                  }`}
                >
                  {item.label}
                </span>
              </motion.a>
            );
          })}
        </div>
      </motion.div> */}
    </>
  );
};

export default MobileNav;