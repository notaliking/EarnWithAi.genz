import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { POSTS } from '../constants.ts';
import { Post } from '../types.ts';

const CATEGORIES = ['ALL', 'FOMO', 'EARN WITH AI', 'FREE TOOLS', 'TUTORIAL', 'DEPLOY', 'TRENDS'];

const BlogCard = ({ post }: { post: Post }) => (
  <motion.article 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="glass rounded-3xl overflow-hidden hover:scale-[1.02] transition-transform group flex flex-col h-full shadow-lg border border-white/5"
  >
    <Link to={`/blog/${post.id}`} className="no-underline flex flex-col h-full">
      <div className="h-56 overflow-hidden relative">
        <img 
          src={post.featuredImage} 
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/80 via-transparent to-transparent opacity-60"></div>
        <div className={`absolute top-4 left-4 bg-dark-bg/40 backdrop-blur-md px-3 py-2 rounded-xl text-2xl`}>
          {post.emoji}
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <span className="text-[10px] font-black uppercase tracking-widest text-neon-cyan mb-3 block">{post.category}</span>
        <h3 className="text-xl md:text-2xl font-heading font-bold mb-4 group-hover:text-neon-cyan transition-colors text-white">
          {post.title}
        </h3>
        <p className="text-gray-400 text-sm line-clamp-2 mb-4 leading-relaxed">{post.excerpt}</p>
        <div className="flex items-center gap-2 text-neon-pink font-bold text-sm">
          Read Alpha <ArrowRight size={16} />
        </div>
      </div>
    </Link>
  </motion.article>
);

export const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = POSTS.filter(post => {
    const matchesCategory = selectedCategory === 'ALL' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="pt-32 px-6 md:px-10 pb-20 container mx-auto">
      <div className="mb-16 text-center md:text-left flex flex-col md:flex-row justify-between items-end gap-10">
        <div className="flex-1">
          <h1 className="text-5xl md:text-8xl font-heading font-black uppercase tracking-tighter mb-6 text-white">
            The <span className="neon-text">Alpha</span> Feed 📡
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl font-body leading-relaxed">
            Daily drops on how to automate your income, leverage AI, and escape the 9-5 matrix. No filler, just pure signal.
          </p>
        </div>
        
        <div className="w-full md:w-80 relative">
          <input 
            type="text" 
            placeholder="Search the archive..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full glass bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-neon-cyan transition-all italic tracking-tight"
          />
          <Search className="absolute right-5 top-5 text-neon-cyan opacity-50" size={20} />
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-nowrap items-center gap-3 mb-12 overflow-x-auto pb-6 scrollbar-hide overscroll-x-contain -mx-2 px-2">
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-6 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all whitespace-nowrap
              ${selectedCategory === cat 
                ? 'bg-neon-cyan text-dark-bg shadow-[0_0_20px_rgba(69,240,223,0.3)]' 
                : 'glass text-gray-400 hover:text-white hover:bg-white/10'}`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {filteredPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
        {filteredPosts.length === 0 && (
          <div className="col-span-full py-20 text-center glass rounded-3xl">
            <p className="text-2xl text-gray-400 font-bold italic tracking-tight">No alpha found for this query... keep grinding! 🚀</p>
          </div>
        )}
      </div>
    </main>
  );
};
