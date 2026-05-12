import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-10 py-6 flex justify-between items-center ${isScrolled ? 'glass shadow-2xl backdrop-blur-xl bg-dark-bg/80' : 'bg-transparent'}`}>
      <Link to="/" className="text-2xl md:text-3xl font-bold italic tracking-tighter cursor-pointer group no-underline">
        <span className="text-white transition-all duration-300">EarnWithAI</span>
        <span className="text-neon-pink transition-all duration-300 group-hover:brightness-125">.genz</span>
      </Link>
      <nav className="hidden md:flex gap-10 font-semibold text-gray-300 uppercase tracking-[0.2em] text-[10px]">
        <Link to="/" className={`hover:text-neon-cyan transition-all duration-200 no-underline ${location.pathname === '/' ? 'text-neon-cyan' : ''}`}>Home</Link>
        <Link to="/ai-hub" className={`hover:text-neon-cyan transition-all duration-200 no-underline ${location.pathname === '/ai-hub' ? 'text-neon-cyan' : ''}`}>AI Hub 🛸</Link>
        <Link to="/blog" className={`hover:text-white transition-all duration-200 no-underline ${location.pathname === '/blog' ? 'text-neon-cyan' : ''}`}>Blog</Link>
        <Link to="/tools" className={`hover:text-white transition-all duration-200 no-underline uppercase font-semibold text-[10px] tracking-[0.2em] ${location.pathname === '/tools' ? 'text-neon-cyan' : ''}`}>Tools Library</Link>
        <Link to="/about" className={`hover:text-white transition-all duration-200 no-underline ${location.pathname === '/about' ? 'text-neon-cyan' : ''}`}>About</Link>
      </nav>
      <Link to="/tools" className="bg-neon-cyan text-dark-bg px-6 py-2 rounded-full font-black uppercase tracking-tighter hover:scale-105 transition-transform shadow-[0_0_15px_rgba(69,240,223,0.4)] active:scale-95 cursor-pointer no-underline text-xs md:text-sm">
        Get Rich 🚀
      </Link>
    </header>
  );
};
