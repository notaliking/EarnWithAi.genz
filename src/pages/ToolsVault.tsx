import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { TOOLS } from '../constants.ts';
import { Tool } from '../types.ts';

const ToolCard = ({ tool }: { tool: Tool }) => (
  <motion.div 
    layout
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    className="glass p-6 rounded-3xl group relative overflow-hidden border border-white/10 hover:border-neon-cyan/50 transition-all flex flex-col h-full bg-dark-bg/20"
  >
    <div className="flex justify-between items-start mb-4">
      <div className="text-4xl group-hover:scale-125 transition-transform duration-500">{tool.emoji}</div>
      {tool.hasAffiliate && (
        <span className="bg-neon-green/10 text-neon-green text-[8px] font-black px-2 py-1 rounded uppercase tracking-widest border border-neon-green/20">Alpha Partner</span>
      )}
    </div>
    <span className="text-neon-cyan font-bold text-[10px] uppercase tracking-[0.2em] mb-2 block">{tool.category}</span>
    <h3 className="text-xl font-heading font-bold mb-3 group-hover:text-neon-cyan transition-colors text-white">{tool.name}</h3>
    <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed line-clamp-2">{tool.description}</p>
    
    <div className="flex items-center justify-between gap-4 mt-auto">
      <Link 
        to={`/tools/${tool.id}`}
        className="flex-grow flex items-center justify-center gap-2 bg-white/5 group-hover:bg-neon-cyan/10 text-white group-hover:text-neon-cyan py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all no-underline border border-white/5 group-hover:border-neon-cyan/30"
      >
        Read Alpha <ArrowRight size={12} />
      </Link>
      <a 
        href={tool.link} 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-12 h-10 flex items-center justify-center glass rounded-xl text-gray-500 hover:text-neon-cyan hover:border-neon-cyan transition-all"
        title="Direct Access"
      >
        <ExternalLink size={16} />
      </a>
    </div>
    
    <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-neon-cyan/5 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
  </motion.div>
);

export const ToolsVault = () => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');

  const categories = ['All', ...new Set(TOOLS.map(t => t.category))];

  const filteredTools = TOOLS.filter(t => {
    const matchesSearch = t.name.toLowerCase().includes(search.toLowerCase()) || 
                         t.description.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === 'All' || t.category === category;
    return matchesSearch && matchesCategory;
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-32 px-6 md:px-10 pb-20 container mx-auto">
      <div className="mb-16 text-center md:text-left">
        <h1 className="text-5xl md:text-8xl font-heading font-black uppercase tracking-tighter mb-6 text-white">
          The <span className="neon-text">Alpha</span> Vault 🔓
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl font-body leading-relaxed">
          The curated list of AI tools to automate your workflow and scale your side hustles. No gatekeeping, just pure utility.
        </p>
      </div>

      {/* Main Content Area with Sidebar */}
      <div className="flex flex-col lg:flex-row gap-12">
        {/* Sidebar */}
        <aside className="lg:w-64 shrink-0">
          <div className="sticky top-32 lg:max-h-[calc(100vh-160px)] lg:overflow-y-auto scrollbar-hide overscroll-contain">
            <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 mb-6 px-4">Categories</h2>
            <nav className="flex flex-col gap-2">
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`flex items-center justify-between px-6 py-4 rounded-2xl text-[11px] font-black uppercase tracking-widest transition-all border-none cursor-pointer text-left w-full ${
                    category === cat 
                    ? 'bg-neon-cyan text-dark-bg shadow-neon' 
                    : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {cat}
                  {category === cat && <motion.div layoutId="active-cat" className="w-1.5 h-1.5 rounded-full bg-dark-bg" />}
                </button>
              ))}
            </nav>

            <div className="mt-12 p-6 glass rounded-3xl border-neon-pink/20 bg-gradient-to-br from-neon-pink/10 to-transparent hidden lg:block">
              <h3 className="text-white font-black uppercase tracking-tighter text-sm mb-3 italic">Alpha Tip 💡</h3>
              <p className="text-gray-400 text-[10px] leading-relaxed">
                Most pro users combine 3+ tools from the vault to build fully automated income streams.
              </p>
            </div>
          </div>
        </aside>

        {/* Content */}
        <div className="flex-grow">
          {/* Search Bar */}
          <div className="mb-10 flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="relative w-full group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-hover:text-neon-cyan transition-colors" size={18} />
              <input 
                type="text" 
                placeholder="Search the vault for specific alpha..." 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full glass bg-white/5 border border-white/10 rounded-2xl py-5 pl-12 pr-6 outline-none focus:border-neon-cyan focus:shadow-neon transition-all text-white font-bold text-sm"
              />
            </div>
          </div>

          {/* Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filteredTools.map(tool => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredTools.length === 0 && (
            <div className="text-center py-32 glass rounded-[40px] border-dashed border-white/20">
              <div className="text-6xl mb-6 opacity-20">💀</div>
              <h3 className="text-xl font-heading font-bold text-gray-500">No Alpha found in this sector.</h3>
              <p className="text-gray-600 mt-2 text-sm">Try a different search or category.</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};
