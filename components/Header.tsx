
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, PhoneCall, ShieldCheck } from 'lucide-react';

const Header: React.FC<{ onInquire: () => void }> = ({ onInquire }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Philosophy', path: '/philosophy' },
    { name: 'Services', path: '/services' },
    { name: 'Who We Serve', path: '/industries' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const headerTheme = (location.pathname === '/' && !isScrolled) ? 'bg-transparent text-white' : 'bg-white/95 backdrop-blur-lg border-b border-emerald-900/10 shadow-lg py-4 text-emerald-950';

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${headerTheme} ${!isScrolled && location.pathname === '/' ? 'py-6' : 'py-4'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="">
            <img src="./public/assets/logos/ls-mainLogo600x200.png" alt="Legify Solutions Logo" className="w-48" />
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
              <span className={`absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-500 transition-all group-hover:w-full ${location.pathname === link.path ? 'w-full' : ''}`}></span>
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
          className={`lg:hidden p-2 rounded-lg transition-colors ${location.pathname === '/' && !isScrolled ? 'text-white bg-emerald-900/20' : 'text-emerald-950 bg-emerald-50'}`} 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-emerald-100 p-8 flex flex-col gap-6 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path} 
              className={`text-xl font-black transition-colors ${location.pathname === link.path ? 'text-emerald-600' : 'text-emerald-950'}`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
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
      )}
    </header>
  );
};

export default Header;
