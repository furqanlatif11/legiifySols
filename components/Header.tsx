import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, PhoneCall, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { lockScroll, unlockScroll } from "../utils/scrollLock";
import { servicePageConfigs } from "../data/services";

const serviceNavItems = Object.values(servicePageConfigs).map((c) => ({
  name: c.h1,
  path: `/services/${c.slug}`,
}));

const Header: React.FC<{ onInquire: () => void }> = ({ onInquire }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
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

  // Scroll to top on route change (skip when navigating to a specific anchor)
  useEffect(() => {
    if (!location.hash) window.scrollTo(0, 0);
    setIsMenuOpen(false);
    setIsServicesOpen(false);
    setIsMobileServicesOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Philosophy", path: "/philosophy" },
    { name: "Services", path: "/services" },
    { name: "Pricing", path: "/pricing" },
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

              if (link.name === "Services") {
                const isServicesActive = location.pathname.startsWith("/services");

                return (
                  <div
                    key={link.name}
                    className="relative"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <Link
                      to={link.path}
                      className="relative flex items-center gap-1 text-xs font-black tracking-widest uppercase py-2"
                      aria-haspopup="true"
                      aria-expanded={isServicesOpen}
                    >
                      <span
                        className={`transition-colors ${
                          isServicesActive
                            ? "text-emerald-600"
                            : "hover:text-emerald-500"
                        }`}
                      >
                        {link.name}
                      </span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform ${
                          isServicesOpen ? "rotate-180" : ""
                        }`}
                      />

                      {isServicesActive && (
                        <motion.div
                          layoutId="activeNavIndicator"
                          className="absolute -bottom-1 left-0 right-0 h-[2px] bg-emerald-600 rounded-full"
                          transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        />
                      )}
                    </Link>

                    <AnimatePresence>
                      {isServicesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.15 }}
                          className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-72"
                        >
                          <div className="bg-white text-emerald-950 rounded-2xl shadow-2xl border border-emerald-900/10 p-3 normal-case">
                            {serviceNavItems.map((service) => (
                              <Link
                                key={service.path}
                                to={service.path}
                                className="block px-4 py-3 rounded-xl text-sm font-bold tracking-normal hover:bg-emerald-50 hover:text-emerald-600 transition-colors"
                              >
                                {service.name}
                              </Link>
                            ))}
                            <Link
                              to="/services"
                              className="block px-4 py-3 mt-1 rounded-xl text-xs font-black uppercase tracking-widest text-emerald-600 border-t border-emerald-900/10 hover:bg-emerald-50 transition-colors"
                            >
                              View All Services
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

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

            if (link.name === "Services") {
              const isServicesActive = location.pathname.startsWith("/services");

              return (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <button
                    onClick={() => setIsMobileServicesOpen((open) => !open)}
                    className={`group flex items-center justify-between w-full text-xl font-medium transition-all ${
                      isServicesActive ? "text-emerald-600" : "text-emerald-950"
                    }`}
                    aria-expanded={isMobileServicesOpen}
                  >
                    <span className="relative">
                      {link.name}
                      <span className="block h-[2px] w-0 bg-emerald-600 transition-all duration-300 group-hover:w-full" />
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform ${
                        isMobileServicesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isMobileServicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="flex flex-col gap-4 pt-5 pl-4">
                          {serviceNavItems.map((service) => (
                            <Link
                              key={service.path}
                              to={service.path}
                              onClick={() => setIsMenuOpen(false)}
                              className="text-base font-bold text-emerald-950/70 hover:text-emerald-600 transition-colors"
                            >
                              {service.name}
                            </Link>
                          ))}
                          <Link
                            to="/services"
                            onClick={() => setIsMenuOpen(false)}
                            className="text-sm font-black uppercase tracking-widest text-emerald-600"
                          >
                            View All Services
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            }

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