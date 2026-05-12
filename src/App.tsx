import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Rocket, Heart, Twitter, Send, ArrowRight, Coins, Zap, ShieldCheck, DollarSign } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { POSTS, SITE_CONFIG } from './constants.ts';
import { Post } from './types.ts';

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

// --- Components ---

const Header = ({ onHomeClick }: { onHomeClick: () => void }) => {
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
        <button onClick={onHomeClick} className="text-neon-cyan transition-all duration-200 bg-transparent border-none outline-none cursor-pointer">Home</button>
        <a href="#blog" className="hover:text-white transition-all duration-200">Blog</a>
        <a href="#tools" className="hover:text-white transition-all duration-200">Tools</a>
        <a href="#about" className="hover:text-white transition-all duration-200">About</a>
      </nav>
      <button className="bg-neon-cyan text-dark-bg px-6 py-2 rounded-full font-black uppercase tracking-tighter hover:scale-105 transition-transform shadow-[0_0_15px_rgba(69,240,223,0.4)] active:scale-95 cursor-pointer border-none">
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

const Home = ({ onPostClick }: { onPostClick: (post: Post) => void }) => {
  const featuredPost = POSTS[0];
  
  return (
    <main className="pt-24">
      {/* Hero Section - Split Layout */}
      <section className="container mx-auto px-10 py-12 flex flex-col lg:flex-row gap-12 items-center relative min-h-[70vh]">
        {/* Background Blobs */}
        <div className="absolute w-[500px] h-[500px] bg-neon-cyan/10 rounded-full blur-[150px] -top-40 -left-40 pointer-events-none"></div>
        <div className="absolute w-[500px] h-[500px] bg-neon-pink/10 rounded-full blur-[150px] -bottom-40 -right-40 pointer-events-none"></div>

        {/* Left: Call to Action */}
        <div className="w-full lg:w-3/5 z-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-[70px] md:text-[100px] leading-[0.9] font-heading font-black uppercase tracking-tighter mb-8">
              Make <span className="neon-text">Bank</span><br />
              With AI <span className="inline-block hover:animate-bounce">💸</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-lg mb-10 leading-relaxed font-body">
              The ultimate sauce for Gen-Z to automate side hustles and stack paper using Artificial Intelligence. <span className="text-white font-bold">No cap.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={() => {}} className="btn-primary">
                Read Guides
              </button>
              <button onClick={() => {}} className="btn-outline">
                Top Tools
              </button>
            </div>
          </motion.div>
        </div>

        {/* Right: Featured Article Card & Quick Stats */}
        <div className="w-full lg:w-2/5 flex flex-col gap-8 z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass rounded-[32px] p-8 backdrop-blur-2xl relative overflow-hidden group cursor-pointer border border-white/10"
            onClick={() => onPostClick(featuredPost)}
          >
            <div className="absolute top-0 right-0 p-6">
              <span className="bg-neon-pink text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow-neon-pink">Featured</span>
            </div>
            <div className="text-7xl mb-6 group-hover:scale-110 transition-transform duration-500">{featuredPost.emoji}</div>
            <span className="text-neon-cyan font-bold text-xs uppercase tracking-[0.2em] mb-3 block">Side Hustle Alpha</span>
            <h3 className="text-2xl font-heading font-bold mt-2 mb-4 leading-tight group-hover:text-neon-cyan transition-colors">
              {featuredPost.title}
            </h3>
            <p className="text-gray-400 text-sm mb-8 leading-relaxed">
              {featuredPost.excerpt}
            </p>
            <div className="inline-flex items-center text-neon-pink font-bold gap-2 group-hover:gap-4 transition-all uppercase tracking-widest text-xs">
              READ FULL GUIDE <ArrowRight size={16} />
            </div>
          </motion.div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-neon-cyan/10 border border-neon-cyan/20 p-5 rounded-2xl text-center group">
              <div className="text-3xl font-black text-neon-cyan mb-1 font-heading">12K+</div>
              <div className="text-[10px] text-gray-500 uppercase font-bold tracking-tighter">Verified Earners</div>
            </div>
            <div className="bg-neon-pink/10 border border-neon-pink/20 p-5 rounded-2xl text-center group">
              <div className="text-3xl font-black text-neon-pink mb-1 font-heading">50+</div>
              <div className="text-[10px] text-gray-500 uppercase font-bold tracking-tighter">Alpha Reviews</div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Pulse Bar */}
      <section className="w-full bg-white/5 border-y border-white/10 p-6 z-10 flex flex-wrap justify-between items-center gap-6 mt-10">
        <div className="flex flex-wrap gap-12">
          <div className="flex flex-col">
            <span className="text-[10px] text-gray-500 uppercase font-black tracking-widest mb-1">Market Pulse</span>
            <span className="text-sm font-bold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse"></span> AI Automation is UP +12.4%
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] text-gray-500 uppercase font-black tracking-widest mb-1">New Alpha Tools</span>
            <span className="text-sm font-bold">7 Released Today</span>
          </div>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="flex -space-x-3">
            {['JD', 'SL', 'AK', 'ZM'].map((init, i) => (
              <div key={i} className={`w-8 h-8 rounded-full border-2 border-dark-bg flex items-center justify-center text-[10px] font-bold ${i === 3 ? 'bg-neon-cyan text-dark-bg' : 'bg-gray-700 text-white'}`}>
                {i === 3 ? '+4k' : init}
              </div>
            ))}
          </div>
          <span className="text-xs text-gray-400 font-medium">joining the movement...</span>
        </div>
      </section>

      {/* Latest Posts */}
      <section id="blog" className="container mx-auto px-10 py-24">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-5xl font-heading font-black uppercase tracking-tighter">
            Fresh <span className="text-neon-pink">Alpha</span> <span className="inline-block hover:scale-125 transition-transform">🚀</span>
          </h2>
          <a href="#" className="text-neon-cyan text-xs font-black uppercase tracking-widest hover:underline hidden sm:block">Explore All</a>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {POSTS.map((post) => (
            <BlogCard key={post.id} post={post} onClick={() => onPostClick(post)} />
          ))}
        </div>
      </section>

      {/* Tool Vault Banner */}
      <section id="tools" className="container mx-auto px-10 pb-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="glass rounded-[40px] p-12 md:p-24 text-center relative overflow-hidden border border-white/10"
        >
          <div className="absolute top-0 right-0 w-96 h-96 bg-neon-green/5 rounded-full blur-[100px] pointer-events-none"></div>
          <Rocket className="mx-auto mb-8 text-neon-green" size={56} />
          <h2 className="text-4xl md:text-6xl font-heading font-black uppercase tracking-tighter mb-8 max-w-2xl mx-auto">Access the Alpha Tool Vault</h2>
          <p className="text-gray-400 text-xl mb-12 max-w-2xl mx-auto font-body leading-relaxed">
            We've vetted over 200+ AI tools to find the ones that actually make money. No filler, just pure utility.
          </p>
          <button className="bg-neon-green text-dark-bg px-12 py-5 rounded-2xl font-black text-xl hover:shadow-[0_0_30px_rgba(57,255,20,0.4)] transition-all transform hover:-rotate-1 active:rotate-0 border-none cursor-pointer uppercase tracking-tighter">
            Unlock the Vault 🔓
          </button>
        </motion.div>
      </section>
    </main>
  );
};

const Article = ({ post }: { post: Post }) => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="pt-32 pb-20 px-6 container mx-auto max-w-3xl"
  >
    <div className="mb-10">
      <div className="flex items-center gap-4 mb-6">
        <span className="bg-neon-cyan/10 text-neon-cyan px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest">{post.category}</span>
        <span className="text-gray-500 text-sm font-medium">{new Date(post.date).toLocaleDateString()}</span>
      </div>
      <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight">{post.title}</h1>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-neon-pink/20 flex items-center justify-center font-bold text-neon-pink focus:outline-none">
          {post.author[0]}
        </div>
        <div>
          <div className="font-bold text-white">{post.author}</div>
          <div className="text-xs text-gray-500 font-body">Author & Alpha Leaker</div>
        </div>
      </div>
    </div>

    <div className="glass rounded-3xl p-8 md:p-12 prose prose-invert prose-neon max-w-none">
      <div className="markdown-body">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </div>

    <div className="mt-12 flex justify-center">
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="flex items-center gap-2 text-neon-cyan font-bold hover:underline bg-transparent border-none cursor-pointer"
      >
        Return to Top <Zap size={16} />
      </button>
    </div>
  </motion.div>
);

// --- Main App ---

export default function App() {
  const [currentPost, setCurrentPost] = useState<Post | null>(null);

  // Simple scroll reset on post change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [currentPost]);

  return (
    <div className="min-h-screen selection:bg-neon-cyan selection:text-black bg-dark-bg text-gray-200">
      <Header onHomeClick={() => setCurrentPost(null)} />
      
      <AnimatePresence mode="wait">
        {!currentPost ? (
          <motion.div key="home" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Home onPostClick={(post) => setCurrentPost(post)} />
          </motion.div>
        ) : (
          <motion.div key="article" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Article post={currentPost} />
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
