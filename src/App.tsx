import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Rocket, Heart, Twitter, Send, ArrowRight, Coins, Zap, ShieldCheck, DollarSign, ExternalLink, Filter, Search } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { POSTS, SITE_CONFIG, TOOLS } from './constants.ts';
import { Post, Tool } from './types.ts';

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// --- Components ---

const Header = ({ onHomeClick, onToolsClick }: { onHomeClick: () => void; onToolsClick: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-10 py-6 flex justify-between items-center ${isScrolled ? 'glass shadow-2xl' : 'bg-transparent'}`}>
      <button onClick={onHomeClick} className="text-3xl font-bold italic tracking-tighter cursor-pointer group bg-transparent border-none outline-none">
        <span className="text-white transition-all duration-300">EarnWithAI</span>
        <span className="text-neon-pink transition-all duration-300 group-hover:brightness-125">.genz</span>
      </button>
      <nav className="hidden md:flex gap-10 font-semibold text-gray-300 uppercase tracking-[0.2em] text-[10px]">
        <button onClick={onHomeClick} className="hover:text-neon-cyan transition-all duration-200 bg-transparent border-none outline-none cursor-pointer">Home</button>
        <a href="#blog" className="hover:text-white transition-all duration-200">Blog</a>
        <button onClick={onToolsClick} className="hover:text-white transition-all duration-200 bg-transparent border-none outline-none cursor-pointer uppercase font-semibold text-[10px] tracking-[0.2em]">Tools</button>
        <a href="#about" className="hover:text-white transition-all duration-200">About</a>
      </nav>
      <button className="bg-neon-cyan text-dark-bg px-6 py-2 rounded-full font-black uppercase tracking-tighter hover:scale-105 transition-transform shadow-[0_0_15px_rgba(69,240,223,0.4)] active:scale-95 cursor-pointer border-none" onClick={onToolsClick}>
        Get Rich 🚀
      </button>
    </header>
  );
};

const Footer = () => (
  <footer className="mt-20 border-t border-white/10 p-10 glass text-center relative overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-cyan to-transparent opacity-50"></div>
    <div className="mb-10 max-w-2xl mx-auto">
      <h3 className="text-2xl font-heading font-bold mb-4">Don't get left on read by the AI revolution 💀</h3>
      <p className="text-gray-400 mb-6">Join 12,000+ others stacking paper with the weekly sauce.</p>
      <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-2">
        <input 
          type="email" 
          placeholder="Drop your email..." 
          className="bg-white/5 border border-white/20 rounded-xl p-3 w-full outline-none focus:border-neon-cyan transition-colors"
        />
        <button className="bg-neon-pink px-8 py-3 rounded-xl font-bold hover:scale-105 transition-transform active:scale-95 shadow-neon-pink border-none cursor-pointer">
          Join
        </button>
      </div>
    </div>
    <div className="flex justify-center gap-6 mb-8">
      <a href="#" className="p-3 glass rounded-full hover:text-neon-cyan transition-colors"><Twitter size={20} /></a>
      <a href="#" className="p-3 glass rounded-full hover:text-neon-pink transition-colors"><Send size={20} /></a>
    </div>
    <p className="text-gray-500 text-sm">
      © {new Date().getFullYear()} {SITE_CONFIG.title} | <a href="#" className="underline hover:text-white transition-colors">Privacy</a> | Made with <Heart size={12} className="inline text-neon-pink" /> & AI
    </p>
  </footer>
);

const BlogCard = ({ post, onClick }: { post: Post; onClick: () => void }) => (
  <motion.article 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="glass rounded-3xl overflow-hidden hover:scale-[1.02] transition-transform cursor-pointer group"
    onClick={onClick}
  >
    <div className="h-48 bg-white/5 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-500 bg-gradient-to-br from-white/5 to-white/0">
      {post.emoji}
    </div>
    <div className="p-6">
      <span className="text-xs font-bold uppercase tracking-widest text-neon-cyan mb-2 block">{post.category}</span>
      <h3 className="text-2xl font-heading font-bold mb-4 group-hover:text-neon-cyan transition-colors">
        {post.title}
      </h3>
      <p className="text-gray-400 text-sm line-clamp-2 mb-4 leading-relaxed">{post.excerpt}</p>
      <div className="flex items-center gap-2 text-neon-pink font-bold text-sm">
        Read Alpha <ArrowRight size={16} />
      </div>
    </div>
  </motion.article>
);

const Home = ({ onPostClick, onToolsClick }: { onPostClick: (post: Post) => void; onToolsClick: () => void }) => {
  const featuredPost = POSTS[0];
  
  return (
    <main className="pt-24 select-none">
      {/* Hero Section - Split Layout */}
      <section className="container mx-auto px-10 py-12 flex flex-col lg:flex-row gap-12 items-center relative min-h-[75vh]">
        {/* Background Blobs */}
        <div className="absolute w-[600px] h-[600px] bg-neon-cyan/5 rounded-full blur-[180px] -top-60 -left-60 pointer-events-none"></div>
        <div className="absolute w-[600px] h-[600px] bg-neon-pink/5 rounded-full blur-[180px] -bottom-60 -right-60 pointer-events-none"></div>

        {/* Left: Call to Action */}
        <div className="w-full lg:w-3/5 z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 glass rounded-full border-neon-cyan/20">
              <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse"></span>
              <span className="text-[10px] font-black uppercase tracking-widest text-neon-cyan">Status: Stacking Paper 💸</span>
            </div>
            <h1 className="text-[60px] md:text-[85px] xl:text-[110px] leading-[0.85] font-heading font-black uppercase tracking-tighter mb-8 bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
              Make <span className="neon-text text-white">Bank</span><br />
              With AI <span className="inline-block hover:animate-bounce cursor-default">💸</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-lg mb-10 leading-relaxed font-body">
              The ultimate sauce for Gen-Z to automate side hustles and stack paper using Artificial Intelligence. <span className="text-white font-bold">No cap.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => {
                  const blogSection = document.getElementById('blog');
                  blogSection?.scrollIntoView({ behavior: 'smooth' });
                }} 
                className="bg-neon-cyan text-dark-bg px-10 py-5 rounded-2xl font-black text-xl hover:shadow-[0_0_30px_rgba(69,240,223,0.6)] transition-all hover:scale-105 active:scale-95 cursor-pointer uppercase tracking-tighter border-none"
              >
                Read Guides
              </button>
              <button onClick={onToolsClick} className="bg-white/5 border border-white/10 text-white px-10 py-5 rounded-2xl font-black text-xl hover:bg-white/10 transition-all hover:scale-105 active:scale-95 cursor-pointer uppercase tracking-tighter">
                Top Tools
              </button>
            </div>
          </motion.div>
        </div>

        {/* Right: Featured Article Card & Quick Stats */}
        <div className="w-full lg:w-2/5 flex flex-col gap-8 z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/5 border border-white/10 rounded-[40px] p-8 backdrop-blur-3xl relative overflow-hidden group cursor-pointer"
            onClick={() => onPostClick(featuredPost)}
          >
            <div className="absolute top-0 right-0 p-6">
              <span className="bg-neon-pink text-white text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-widest shadow-neon-pink animate-pulse">Featured Alpha</span>
            </div>
            <div className="text-8xl mb-8 group-hover:scale-110 transition-transform duration-700 ease-out">{featuredPost.emoji}</div>
            <span className="text-neon-cyan font-bold text-xs uppercase tracking-[0.3em] mb-4 block">Side Hustle Discovery</span>
            <h3 className="text-3xl font-heading font-bold mt-2 mb-4 leading-tight group-hover:text-neon-cyan transition-colors">
              {featuredPost.title}
            </h3>
            <p className="text-gray-400 text-base mb-8 leading-relaxed">
              {featuredPost.excerpt}
            </p>
            <div className="inline-flex items-center text-neon-pink font-black gap-3 group-hover:gap-5 transition-all uppercase tracking-widest text-xs">
              UNLOCK THE STRATEGY <ArrowRight size={18} />
            </div>
            
            {/* Decorative element */}
            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-neon-pink/10 blur-3xl rounded-full"></div>
          </motion.div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-neon-cyan/5 border border-neon-cyan/10 p-6 rounded-3xl text-center group transition-colors hover:bg-neon-cyan/10">
              <div className="text-4xl font-black text-neon-cyan mb-1 font-heading">12 K+</div>
              <div className="text-[10px] text-gray-500 uppercase font-black tracking-widest">Verified Earners</div>
            </div>
            <div className="bg-neon-pink/5 border border-neon-pink/10 p-6 rounded-3xl text-center group transition-colors hover:bg-neon-pink/10">
              <div className="text-4xl font-black text-neon-pink mb-1 font-heading">50 +</div>
              <div className="text-[10px] text-gray-500 uppercase font-black tracking-widest">Alpha Reviews</div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Pulse Bar - Sticky-ish */}
      <section className="w-full bg-white/5 border-y border-white/10 py-8 px-10 z-10 flex flex-wrap justify-between items-center gap-8 mt-12 backdrop-blur-md">
        <div className="flex flex-wrap gap-12">
          <div className="flex flex-col">
            <span className="text-[10px] text-gray-500 uppercase font-black tracking-[0.2em] mb-2">Market Pulse</span>
            <span className="text-base font-bold flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-neon-green opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-neon-green"></span>
              </span>
              AI Automation Flow is UP <span className="text-neon-green">+12.4%</span>
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] text-gray-500 uppercase font-black tracking-[0.2em] mb-2">New Alpha Released</span>
            <div className="flex items-center gap-2">
              <Zap size={14} className="text-neon-cyan" />
              <span className="text-base font-bold">7 Major Tools Detected Today</span>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-6 glass px-6 py-3 rounded-2xl">
          <div className="flex -space-x-3">
            {[
              { init: 'JD', bg: 'bg-gray-700' },
              { init: 'SL', bg: 'bg-gray-600' },
              { init: 'AK', bg: 'bg-gray-500' },
              { init: '+4k', bg: 'bg-neon-cyan text-dark-bg' }
            ].map((u, i) => (
              <div key={i} className={`w-10 h-10 rounded-full border-2 border-dark-bg flex items-center justify-center text-[10px] font-black ${u.bg}`}>
                {u.init}
              </div>
            ))}
          </div>
          <span className="text-xs text-gray-400 font-bold uppercase tracking-widest">Joining the move...</span>
        </div>
      </section>

      {/* Latest Posts */}
      <section id="blog" className="container mx-auto px-10 py-32 text-blue-500">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <span className="text-neon-pink font-black uppercase tracking-[0.4em] text-xs mb-4 block">Streaming Alpha</span>
            <h2 className="text-5xl md:text-7xl font-heading font-black uppercase tracking-tighter text-white">
              Fresh <span className="text-neon-pink drop-shadow-[0_0_10px_rgba(255,0,127,0.3)]">Alpha</span> <span className="inline-block hover:scale-125 transition-transform cursor-default">🚀</span>
            </h2>
          </div>
          <a href="#" className="bg-white/5 border border-white/10 px-8 py-3 rounded-full text-xs font-black uppercase tracking-widest text-white hover:bg-white/10 transition-all">Explore All Guides</a>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {POSTS.map((post) => (
            <BlogCard key={post.id} post={post} onClick={() => onPostClick(post)} />
          ))}
        </div>
      </section>

      {/* Tool Vault Banner */}
      <section id="tools" className="container mx-auto px-10 pb-32">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-[50px] p-12 md:p-28 text-center relative overflow-hidden border border-white/10 group shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-neon-green/5 rounded-full blur-[120px] pointer-events-none group-hover:bg-neon-green/10 transition-colors duration-1000"></div>
          <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-neon-cyan/5 rounded-full blur-[100px] pointer-events-none"></div>
          
          <Rocket className="mx-auto mb-10 text-neon-green group-hover:scale-110 transition-transform" size={64} />
          <h2 className="text-4xl md:text-7xl font-heading font-black uppercase tracking-tighter mb-8 max-w-4xl mx-auto leading-none">Access the AI <br/>Alpha Tool Vault</h2>
          <p className="text-gray-400 text-xl md:text-2xl mb-12 max-w-2xl mx-auto font-body leading-relaxed">
            We've vetted over <span className="text-white font-bold">200+ AI tools</span> to find the ones that actually make money. No filler, just pure utility.
          </p>
          <button onClick={onToolsClick} className="bg-neon-green text-dark-bg px-14 py-6 rounded-2xl font-black text-2xl hover:shadow-[0_0_40px_rgba(57,255,20,0.5)] transition-all transform hover:-rotate-2 active:scale-95 border-none cursor-pointer uppercase tracking-tighter">
            Unlock the Vault 🔓
          </button>
        </motion.div>
      </section>
    </main>
  );
};

const ToolCard = ({ tool }: { tool: Tool }) => (
  <motion.div 
    layout
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    className="glass p-6 rounded-3xl group relative overflow-hidden border border-white/10 hover:border-neon-cyan/50 transition-all flex flex-col h-full"
  >
    <div className="flex justify-between items-start mb-4">
      <div className="text-4xl group-hover:scale-125 transition-transform duration-500">{tool.emoji}</div>
      {tool.hasAffiliate && (
        <span className="bg-neon-green/10 text-neon-green text-[8px] font-black px-2 py-1 rounded uppercase tracking-widest border border-neon-green/20">Alpha Partner</span>
      )}
    </div>
    <span className="text-neon-cyan font-bold text-[10px] uppercase tracking-[0.2em] mb-2 block">{tool.category}</span>
    <h3 className="text-xl font-heading font-bold mb-3 group-hover:text-neon-cyan transition-colors">{tool.name}</h3>
    <p className="text-gray-400 text-sm mb-6 flex-grow leading-relaxed">{tool.description}</p>
    <a 
      href={tool.link} 
      target="_blank" 
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 text-white font-black text-xs uppercase tracking-widest hover:text-neon-cyan transition-all mt-auto"
    >
      Access Tool <ExternalLink size={14} />
    </a>
    
    {/* Glow effect on hover */}
    <div className="absolute -bottom-10 -right-10 w-24 h-24 bg-neon-cyan/5 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
  </motion.div>
);

const ToolsVault = () => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');

  const categories = ['All', ...new Set(TOOLS.map(t => t.category))];

  const filteredTools = TOOLS.filter(t => {
    const matchesSearch = t.name.toLowerCase().includes(search.toLowerCase()) || 
                         t.description.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === 'All' || t.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="pt-32 px-10 pb-20 container mx-auto">
      <div className="mb-16">
        <h1 className="text-5xl md:text-8xl font-heading font-black uppercase tracking-tighter mb-6">
          The <span className="neon-text">Alpha</span> Vault 🔓
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl font-body leading-relaxed">
          The curated list of 200+ AI tools to automate your workflow and scale your side hustles. No gatekeeping, just pure utility.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-6 mb-12 items-center justify-between">
        <div className="relative w-full md:w-96 group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-hover:text-neon-cyan transition-colors" size={18} />
          <input 
            type="text" 
            placeholder="Search the vault..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full glass bg-white/5 border border-white/10 rounded-2xl py-4 pl-12 pr-6 outline-none focus:border-neon-cyan focus:shadow-neon transition-all text-white font-bold"
          />
        </div>
        
        <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-4 md:pb-0 scrollbar-hide">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap border-none cursor-pointer ${
                category === cat 
                ? 'bg-neon-cyan text-dark-bg shadow-neon' 
                : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <motion.div 
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredTools.map(tool => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredTools.length === 0 && (
        <div className="text-center py-40 glass rounded-[40px] border-dashed border-white/20">
          <div className="text-6xl mb-6 truncate opacity-20">💀</div>
          <h3 className="text-2xl font-heading font-bold text-gray-500">No Alpha found in this sector.</h3>
          <p className="text-gray-600 mt-2">Try a different search or category.</p>
        </div>
      )}
    </main>
  );
};

// --- Main App ---

export default function App() {
  const [currentPost, setCurrentPost] = useState<Post | null>(null);
  const [view, setView] = useState<'home' | 'tools'>('home');

  // Simple scroll reset on change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [currentPost, view]);

  return (
    <div className="min-h-screen selection:bg-neon-cyan selection:text-black bg-dark-bg text-gray-200">
      <Header 
        onHomeClick={() => {
          setCurrentPost(null);
          setView('home');
        }} 
        onToolsClick={() => {
          setCurrentPost(null);
          setView('tools');
        }}
      />
      
      <AnimatePresence mode="wait">
        {currentPost ? (
          <motion.div key="article" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Article post={currentPost} />
          </motion.div>
        ) : view === 'home' ? (
          <motion.div key="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Home 
              onPostClick={(post) => setCurrentPost(post)} 
              onToolsClick={() => setView('tools')}
            />
          </motion.div>
        ) : (
          <motion.div key="tools" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <ToolsVault />
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
