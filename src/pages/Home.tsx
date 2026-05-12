import { motion } from 'motion/react';
import { ArrowRight, Rocket, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { POSTS } from '../constants.ts';
import { Post } from '../types.ts';

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
        <div className="absolute top-4 left-4 bg-dark-bg/40 backdrop-blur-md px-3 py-2 rounded-xl text-2xl">
          {post.emoji}
        </div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <span className="text-[10px] font-black uppercase tracking-widest text-neon-cyan mb-3 block">{post.category}</span>
        <h3 className="text-2xl font-heading font-bold mb-4 group-hover:text-neon-cyan transition-colors text-white">
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

export const Home = () => {
  const featuredPost = POSTS[0];
  
  return (
    <main className="pt-24 select-none">
      {/* Hero Section */}
      <section className="container mx-auto px-6 md:px-10 py-12 flex flex-col lg:flex-row gap-12 items-center relative min-h-[75vh]">
        <div className="absolute w-[600px] h-[600px] bg-neon-cyan/5 rounded-full blur-[180px] -top-60 -left-60 pointer-events-none"></div>
        <div className="absolute w-[600px] h-[600px] bg-neon-pink/5 rounded-full blur-[180px] -bottom-60 -right-60 pointer-events-none"></div>

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
            <h1 className="text-[45px] md:text-[85px] xl:text-[110px] leading-[0.85] font-heading font-black uppercase tracking-tighter mb-8 bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">
              Make <span className="neon-text text-white">Bank</span><br />
              With AI <span className="inline-block hover:animate-bounce cursor-default">💸</span>
            </h1>
            <p className="text-lg md:text-2xl text-gray-400 max-w-lg mb-10 leading-relaxed font-body">
              The ultimate sauce for Gen-Z to automate side hustles and stack paper using Artificial Intelligence. <span className="text-white font-bold">No cap.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/blog" 
                className="bg-neon-cyan text-dark-bg px-10 py-5 rounded-2xl font-black text-xl hover:shadow-[0_0_30px_rgba(69,240,223,0.6)] transition-all hover:scale-105 active:scale-95 cursor-pointer uppercase tracking-tighter border-none text-center no-underline"
              >
                Read Guides
              </Link>
              <Link to="/tools" className="bg-white/5 border border-white/10 text-white px-10 py-5 rounded-2xl font-black text-xl hover:bg-white/10 transition-all hover:scale-105 active:scale-95 cursor-pointer uppercase tracking-tighter text-center no-underline">
                Top Tools
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="w-full lg:w-2/5 flex flex-col gap-8 z-10">
          <Link to={`/blog/${featuredPost.id}`} className="no-underline">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white/5 border border-white/10 rounded-[40px] p-8 backdrop-blur-3xl relative overflow-hidden group cursor-pointer h-full min-h-[400px] flex flex-col justify-end"
            >
              {/* Background Featured Image */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={featuredPost.featuredImage} 
                  alt={featuredPost.title}
                  className="w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-700 group-hover:scale-105 transform"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-bg via-dark-bg/40 to-transparent"></div>
              </div>

              <div className="relative z-10">
                <div className="mb-6">
                  <span className="bg-neon-pink text-white text-[10px] font-black px-4 py-2 rounded-full uppercase tracking-widest shadow-neon-pink">Featured Alpha</span>
                </div>
                <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-700 ease-out inline-block">{featuredPost.emoji}</div>
                <span className="text-neon-cyan font-bold text-xs uppercase tracking-[0.3em] mb-4 block">Side Hustle Discovery</span>
                <h3 className="text-3xl font-heading font-bold mt-2 mb-4 leading-tight group-hover:text-neon-cyan transition-colors text-white">
                  {featuredPost.title}
                </h3>
                <p className="text-gray-400 text-base mb-8 leading-relaxed line-clamp-2">
                  {featuredPost.excerpt}
                </p>
                <div className="inline-flex items-center text-neon-pink font-black gap-3 group-hover:gap-5 transition-all uppercase tracking-widest text-xs">
                  UNLOCK THE STRATEGY <ArrowRight size={18} />
                </div>
              </div>
            </motion.div>
          </Link>

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

      {/* Market Pulse Bar */}
      <section className="w-full bg-white/5 border-y border-white/10 py-8 px-6 md:px-10 z-10 flex flex-wrap justify-between items-center gap-8 mt-12 backdrop-blur-md">
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
      </section>

      {/* Latest Posts */}
      <section id="blog" className="container mx-auto px-6 md:px-10 py-32">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <div>
            <span className="text-neon-pink font-black uppercase tracking-[0.4em] text-xs mb-4 block">Streaming Alpha</span>
            <h2 className="text-5xl md:text-7xl font-heading font-black uppercase tracking-tighter text-white">
              Fresh <span className="text-neon-pink drop-shadow-[0_0_10px_rgba(255,0,127,0.3)]">Alpha</span> <span className="inline-block hover:scale-125 transition-transform cursor-default">🚀</span>
            </h2>
          </div>
          <Link to="/blog" className="text-gray-400 hover:text-white font-black uppercase tracking-widest text-xs flex items-center gap-2 group no-underline mb-2">
            View All Alpha <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {POSTS.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </section>

      {/* Tool Vault Banner */}
      <section id="tools" className="container mx-auto px-6 md:px-10 pb-32">
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
          <Link to="/tools" className="bg-neon-green text-dark-bg px-14 py-6 rounded-2xl font-black text-2xl hover:shadow-[0_0_40px_rgba(57,255,20,0.5)] transition-all transform hover:-rotate-2 active:scale-95 border-none cursor-pointer uppercase tracking-tighter no-underline inline-block">
            Unlock the Vault 🔓
          </Link>
        </motion.div>
      </section>
    </main>
  );
};
