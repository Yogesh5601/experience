"use client"
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, Briefcase, FileText, User, Code } from "lucide-react";

const MobileNav = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Lock scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
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

    // Define sections to observe
    const sections = ["home", "services", "works", "resume", "skills", "contact"];
    
    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []); // Empty dependency array

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

  // Define navItems for rendering
  const navItems = [
    { href: "#services", icon: Briefcase, label: "Services" },
    { href: "#works", icon: Code, label: "Works" },
    { href: "#home", icon: Home, label: "Home", isHome: true },
    { href: "#resume", icon: FileText, label: "Resume" },
    { href: "#skills", icon: User, label: "Skills" },
  ];

  return (
    <>
      {/* Mobile Menu Button (with consistent gap) */}
      <AnimatePresence mode="wait">
        {(
          <motion.button
            key={isMenuOpen ? "close" : "menu"}
            className="fixed top-4 right-4 z-[10001] p-3 bg-accent rounded-full shadow-glow border-2 border-white/30 lg:hidden flex items-center justify-center"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            whileTap={{ scale: 0.95 }}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            initial={{ rotate: isMenuOpen ? -90 : 90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: isMenuOpen ? 90 : -90, opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ width: 48, height: 48 }} // ensures outer button is always big and round
          >
            <span className="flex items-center justify-center" style={{ width:24, height:24 }}>
              {/* Hamburger */}
              {!isMenuOpen && (
                <span className="relative w-6 h-6 flex flex-col items-center justify-center gap-[5px]">
                  <span style={{height:'2px',background:'#fff',width:'18px',borderRadius:0}}/>
                  <span style={{height:'2px',background:'#fff',width:'18px',borderRadius:0}}/>
                  <span style={{height:'2px',background:'#fff',width:'18px',borderRadius:0}}/>
                </span>
              )}
              {/* Cross */}
              {isMenuOpen && (
                <span className="relative w-6 h-6 flex items-center justify-center">
                  <span style={{height:'2px',background:'#fff',width:'20px',position:'absolute',left:2,top:'50%',marginTop:-1,borderRadius:0,transform:'rotate(45deg)'}} />
                  <span style={{height:'2px',background:'#fff',width:'20px',position:'absolute',left:2,top:'50%',marginTop:-1,borderRadius:0,transform:'rotate(-45deg)'}} />
                </span>
              )}
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-black z-[9999] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            style={{ touchAction: "none" }}
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
    </>
  );
};

export default MobileNav;