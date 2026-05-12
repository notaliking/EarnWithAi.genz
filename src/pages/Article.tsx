import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Zap, ArrowLeft, ShieldCheck } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { POSTS } from '../constants.ts';

export const Article = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const post = POSTS.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!post) {
    return (
      <div className="pt-40 text-center">
        <h1 className="text-4xl font-bold mb-4">404 - Alpha Not Found</h1>
        <button onClick={() => navigate('/')} className="text-neon-cyan hover:underline bg-transparent border-none cursor-pointer">Return Home</button>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="pt-32 pb-20 px-6 container mx-auto max-w-3xl"
    >
      <button 
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-gray-400 hover:text-white mb-10 bg-transparent border-none cursor-pointer font-bold text-sm"
      >
        <ArrowLeft size={16} /> Back to guides
      </button>

      <div className="mb-10">
        <div className="flex items-center gap-4 mb-6">
          <span className="bg-neon-cyan/10 text-neon-cyan px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest">{post.category}</span>
          <span className="text-gray-500 text-sm font-medium">{new Date(post.date).toLocaleDateString()}</span>
          <span className="flex items-center gap-1.5 text-neon-green/80 text-[10px] font-black uppercase tracking-widest bg-neon-green/5 px-3 py-1 rounded-full border border-neon-green/10">
            <ShieldCheck size={12} /> Fact Checked
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl font-heading font-bold mb-8 leading-tight text-white">{post.title}</h1>
        
        {/* Featured Image */}
        <div className="relative aspect-video mb-12 rounded-[40px] overflow-hidden border border-white/10 group">
          <img 
            src={post.featuredImage} 
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/60 to-transparent"></div>
        </div>

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

      <div className="glass rounded-3xl p-8 md:p-12 prose prose-invert prose-neon max-w-none shadow-2xl">
        <div className="markdown-body">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </div>

      {/* Author Bio Section (EEAT) */}
      <div className="mt-16 p-8 glass rounded-[40px] border border-white/10 flex flex-col md:flex-row items-center gap-8 bg-gradient-to-br from-white/5 to-transparent">
        <div className="w-24 h-24 rounded-full bg-neon-cyan/20 flex items-center justify-center font-bold text-4xl text-neon-cyan shrink-0 border border-neon-cyan/30 shadow-neon">
          {post.author[0]}
        </div>
        <div>
          <div className="flex items-center gap-3 mb-2">
            <h4 className="text-xl font-bold text-white">{post.author}</h4>
            <span className="bg-neon-green/10 text-neon-green text-[10px] font-black px-2 py-1 rounded uppercase tracking-[0.2em] border border-neon-green/20">Verified Alpha Leaker</span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-4">
            {post.author === 'Z-Lord' 
              ? "Z-Lord is a multi-disciplinary growth hacker who has built 3 automated agencies using custom AI workflows. He specializes in prompt engineering and market-gap analysis for the Gen-Z economy."
              : "A specialized content strategist focused on the intersection of generative AI and viral social growth. With over 5 years in digital marketing, they test every strategy manually before sharing."}
          </p>
          <div className="flex gap-4">
            <span className="text-[10px] font-black text-neon-cyan uppercase tracking-widest cursor-default">Expertise: Automation, ROI Analysis</span>
          </div>
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
};
