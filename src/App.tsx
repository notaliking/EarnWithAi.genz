import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'motion/react';
import { useEffect } from 'react';
import { Header } from './components/Header.tsx';
import { Footer } from './components/Footer.tsx';
import { Home } from './pages/Home.tsx';
import { ToolsVault } from './pages/ToolsVault.tsx';
import { Article } from './pages/Article.tsx';
import { Blog } from './pages/Blog.tsx';
import { About } from './pages/About.tsx';
import { AILab } from './pages/AILab.tsx';

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export default function App() {
  const location = useLocation();

  // Scroll to section handling for hash links
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        // Delay slightly for React to finish rendering
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, [location.pathname, location.hash]);

  return (
    <div className="min-h-screen selection:bg-neon-cyan selection:text-black bg-dark-bg text-gray-200">
      <Header />
      
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about" element={<About />} />
          <Route path="/tools" element={<ToolsVault />} />
          <Route path="/lab" element={<AILab />} />
          <Route path="/blog/:id" element={<Article />} />
        </Routes>
      </AnimatePresence>

      <Footer />
    </div>
  );
}
