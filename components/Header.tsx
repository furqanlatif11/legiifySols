import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, PhoneCall, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { lockScroll, unlockScroll } from '../utils/scrollLock';

const Header: React.FC<{ onInquire: () => void }> = ({ onInquire }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (isMenuOpen) lockScroll();
    else unlockScroll();
    return () => unlockScroll();
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: "Philosophy", path: "/philosophy" },
    { name: "Services", path: "/services" },
    { name: "Who We Serve", path: "/industries" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const headerTheme =
    location.pathname === "/" && !isScrolled
      ? "bg-transparent text-white"
      : "bg-white/95 backdrop-blur-lg border-b border-emerald-900/10 shadow-lg py-4 text-emerald-950";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${headerTheme} ${!isScrolled && location.pathname === "/" ? "py-6" : "py-4"}`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="">
            <img
              src="/assets/logos/ls-mainLogo600x200_main.svg"
              alt="Legify Solutions Logo"
              className="w-48"
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-xs font-black tracking-widest uppercase transition-all hover:text-emerald-500 relative group py-2`}
            >
              {link.name}
              <span
                className={`absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-500 transition-all group-hover:w-full ${location.pathname === link.path ? "w-full" : ""}`}
              ></span>
            </Link>
          ))}
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
          className={`lg:hidden p-2 rounded-lg transition-colors ${location.pathname === "/" && !isScrolled ? "text-white bg-emerald-900/20" : "text-emerald-950 bg-emerald-50"}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Open menu"
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile full-page drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-50 lg:hidden"
          >
            <div
              className="absolute inset-0 bg-black/40"
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.div
              className="absolute right-0 top-0 bottom-0 w-[75%] max-w-sm bg-white p-8 shadow-2xl flex flex-col gap-8"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <div className="flex items-center justify-between">
                <Link
                  to="/"
                  onClick={() => setIsMenuOpen(false)}
                  className="flex items-center gap-3"
                >
                  <div>
                    <Link to="/" onClick={() => setIsMenuOpen(false)}>
                      {" "}
                      <img
                        src="/public/assets/logos/ls-mainLogo600x200_main.svg"
                        alt="Mobile Nav Drawer Logo"
                        className="w-48"
                      />{" "}
                    </Link>
                  </div>
                  <span className="font-black uppercase tracking-wider">
                    Legify
                  </span>
                </Link>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <X />
                </button>
              </div>

              <nav className="flex-1 flex flex-col gap-6 mt-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-2xl font-thin border-b border-emerald-200 ${location.pathname === link.path ? "text-emerald-600" : "text-emerald-950"}`}
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>

              <div>
                <button
                  onClick={() => {
                    setIsMenuOpen(false);
                    onInquire();
                  }}
                  className="w-full bg-emerald-900 text-white py-4 rounded-xl font-bold text-lg shadow-xl flex items-center justify-center gap-3"
                >
                  <PhoneCall className="w-6 h-6" />
                  Get Started
                </button>
              </div>
            </motion.div>
          </motion.aside>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
