import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home, User, Music, Mail, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Home", href: "#home", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Music", href: "#music", icon: Music },
  { name: "Contact", href: "#contact", icon: Mail },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navItems.map((item) => item.href.slice(1));
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Desktop & Mobile Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled ? "bg-background/90 backdrop-blur-lg shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between h-20 relative">
            {/* Logo */}
            <motion.a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#home");
              }}
              className="flex items-center gap-3"
              whileHover={{ scale: 1.05 }}
            >
              <span className="font-heading text-xl sm:text-3xl font-bold text-foreground truncate">Wekou Recordz</span>
            </motion.a>

            {/* Desktop Navigation - Centered */}
            <div className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`relative font-body text-sm font-medium tracking-wide transition-colors animated-underline ${
                    activeSection === item.href.slice(1) ? "text-primary" : "text-foreground/70 hover:text-foreground"
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Desktop Right Section - YouTube Button */}
            <div className="hidden lg:flex items-center">
              <Button
                variant="outline"
                size="sm"
                className="gap-2"
                onClick={() => window.open("https://youtube.com/@wekourecordz", "_blank")}
              >
                <Youtube className="h-4 w-4" />
                Subscribe
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Side Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Side Panel */}
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 z-50 h-full w-1/2 bg-card border-l border-border md:hidden"
            >
              {/* Close button */}
              <div className="flex justify-end p-4">
                <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                  <X className="h-6 w-6" />
                </Button>
              </div>

              {/* Navigation Items */}
              <div className="flex flex-col mt-8">
                {navItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(item.href);
                      }}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className={`mobile-nav-item ${activeSection === item.href.slice(1) ? "active" : ""}`}
                    >
                      <Icon className="h-5 w-5" />
                      <span className="font-body font-medium">{item.name}</span>
                    </motion.a>
                  );
                })}
              </div>

              {/* YouTube Subscribe Button */}
              <div className="px-4 mt-6">
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full gap-2"
                  onClick={() => {
                    setIsOpen(false);
                    window.open("https://youtube.com/@wekourecordz", "_blank");
                  }}
                >
                  <Youtube className="h-4 w-4" />
                  Subscribe to Channel
                </Button>
              </div>

              {/* Logo at bottom */}
              <div className="absolute bottom-8 left-0 right-0 flex justify-center">
                <div className="flex items-center justify-center">
                  <span className="font-heading text-2xl font-bold text-primary-background">Wekou Recordz</span>
                </div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
