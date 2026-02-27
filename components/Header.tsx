import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, PhoneCall } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { lockScroll, unlockScroll } from "../utils/scrollLock";

const Header: React.FC<{ onInquire: () => void }> = ({ onInquire }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === "/";

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (isMenuOpen) lockScroll();
    else unlockScroll();
    return () => unlockScroll();
  }, [isMenuOpen]);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Philosophy", path: "/philosophy" },
    { name: "Services", path: "/services" },
    { name: "Who We Serve", path: "/industries" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const headerClasses = `
    fixed top-0 left-0 right-0 z-40 transition-all duration-500
    ${
      isScrolled || !isHome
        ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-emerald-900/10 text-emerald-950 py-4"
        : "bg-transparent text-white py-6"
    }
  `;

  return (
    <>
      <header className={headerClasses}>
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src="/assets/logos/ls-mainLogo600x200_main.svg"
              alt="Ledgify Solutions Logo"
              className="w-44"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8 relative">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className="relative text-xs font-black tracking-widest uppercase py-2"
                >
                  <span
                    className={`transition-colors ${
                      isActive
                        ? "text-emerald-600"
                        : "hover:text-emerald-500"
                    }`}
                  >
                    {link.name}
                  </span>

                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-[2px] bg-emerald-600 rounded-full"
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  )}
                </Link>
              );
            })}

            {/* CTA Button */}
            <button
              onClick={onInquire}
              className="bg-emerald-600 text-white px-7 py-3 rounded-xl text-sm font-bold hover:bg-emerald-700 transition-all shadow-lg hover:shadow-emerald-500/30 flex items-center gap-2 transform hover:-translate-y-0.5"
            >
              <PhoneCall className="w-4 h-4" />
              Inquiry
            </button>
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-emerald-50 text-emerald-950"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={isMenuOpen ? "close" : "open"}
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.2 }}
              >
                {isMenuOpen ? <X /> : <Menu />}
              </motion.div>
            </AnimatePresence>
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
  {isMenuOpen && (
    <>
      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 bg-black/50 backdrop-blur-md z-50 lg:hidden"
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Drawer */}
      <motion.aside
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", stiffness: 220, damping: 28 }}
        className="fixed right-0 top-0 bottom-0 w-[85%] max-w-sm bg-white z-50 shadow-2xl lg:hidden flex flex-col"
      >
        {/* Gradient Accent */}
        <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/10 blur-3xl rounded-full -z-10" />

        {/* Drawer Header */}
        <div className="px-8 pt-8 pb-6 border-b border-emerald-100 flex items-center justify-between">
          <img
            src="/assets/logos/ls-mainLogo600x200_main.svg"
            alt="Mobile Logo"
            className="w-32"
          />

          <button
            onClick={() => setIsMenuOpen(false)}
            className="p-2 rounded-lg hover:bg-emerald-50 transition"
          >
            <X className="text-emerald-900" />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col px-8 py-10 gap-8 flex-1">
          {navLinks.map((link, index) => {
            const isActive = location.pathname === link.path;

            return (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`group flex items-center justify-between text-xl font-medium transition-all ${
                    isActive
                      ? "text-emerald-600"
                      : "text-emerald-950"
                  }`}
                >
                  <span className="relative">
                    {link.name}
                    <span className="block h-[2px] w-0 bg-emerald-600 transition-all duration-300 group-hover:w-full" />
                  </span>

                  {isActive && (
                    <motion.span
                      layoutId="mobileActiveDot"
                      className="w-2 h-2 bg-emerald-600 rounded-full"
                    />
                  )}
                </Link>
              </motion.div>
            );
          })}
        </nav>

        {/* CTA Section */}
        <div className="px-8 pb-8 pt-4 border-t border-emerald-100">
          <button
            onClick={() => {
              setIsMenuOpen(false);
              onInquire();
            }}
            className="w-full bg-emerald-900 hover:bg-emerald-800 text-white py-4 rounded-2xl font-semibold text-lg shadow-lg transition-all active:scale-95"
          >
            Get Started
          </button>

          <p className="text-xs text-emerald-600 mt-4 text-center">
            Let’s build something exceptional.
          </p>
        </div>
      </motion.aside>
    </>
  )}
</AnimatePresence>
    </>
  );
};

export default Header;