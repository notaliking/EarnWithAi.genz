import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Zap, ArrowLeft } from 'lucide-react';
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
        </div>
        <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6 leading-tight text-white">{post.title}</h1>
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
