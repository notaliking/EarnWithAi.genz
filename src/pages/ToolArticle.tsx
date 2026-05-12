import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, ExternalLink, ShieldCheck, Zap } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { TOOLS } from '../constants.ts';
import { useEffect } from 'react';

export const ToolArticle = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const tool = TOOLS.find(t => t.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!tool) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-black text-white mb-4 uppercase italic tracking-tighter">Alpha Not Found</h1>
          <Link to="/tools" className="text-neon-cyan hover:underline">Back to Vault</Link>
        </div>
      </div>
    );
  }

  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-32 px-6 md:px-10 pb-20 container mx-auto max-w-4xl"
    >
      <button 
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors mb-10 uppercase font-black text-[10px] tracking-widest bg-transparent border-none cursor-pointer"
      >
        <ArrowLeft size={14} /> Back to Vault
      </button>

      <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
        <div className="text-8xl md:text-9xl glass p-8 rounded-[40px] border-neon-cyan/20 shadow-neon-small animate-pulse-slow">
          {tool.emoji}
        </div>
        <div className="text-center md:text-left">
          <span className="text-neon-cyan font-black uppercase tracking-[0.4em] text-xs mb-4 block">{tool.category}</span>
          <h1 className="text-5xl md:text-7xl font-heading font-black uppercase tracking-tighter mb-6 text-white leading-none">
            {tool.name}
          </h1>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
            {tool.hasAffiliate && (
              <div className="flex items-center gap-2 bg-neon-green/10 text-neon-green border border-neon-green/20 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest">
                <ShieldCheck size={14} /> Alpha Partner
              </div>
            )}
            <div className="flex items-center gap-2 bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/20 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest">
              <Zap size={14} /> AI Verified
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        <div className="md:col-span-2">
          {tool.content ? (
            <div className="markdown-body prose prose-invert prose-neon max-w-none">
              <ReactMarkdown>{tool.content}</ReactMarkdown>
            </div>
          ) : (
            <div className="glass p-10 rounded-[32px] text-center italic text-gray-500">
              Detailed alpha documentation is currently being encrypted by our agents. Access the tool directly below.
            </div>
          )}
        </div>

        <aside className="space-y-8">
          <div className="glass p-8 rounded-[32px] border-neon-cyan/20 sticky top-32">
            <h3 className="text-white font-black uppercase tracking-tighter text-lg mb-4">Direct Access</h3>
            <p className="text-gray-400 text-sm mb-8 leading-relaxed">
              Launch this tool in a new matrix window to start your automation sequence immediately.
            </p>
            <a 
              href={tool.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-3 bg-neon-cyan text-dark-bg py-5 rounded-2xl font-black uppercase tracking-tighter hover:shadow-neon hover:scale-[1.02] transition-all no-underline"
            >
              Launch {tool.name} <ExternalLink size={18} />
            </a>
            {tool.hasAffiliate && (
              <p className="text-[10px] text-gray-500 mt-6 italic text-center leading-tight">
                * By using our link, you help power the Alpha Feed. No extra cost to you.
              </p>
            )}
          </div>
          
          <div className="glass p-8 rounded-[32px] border-neon-pink/10 bg-gradient-to-t from-neon-pink/5 to-transparent">
            <h4 className="text-neon-pink font-black uppercase tracking-widest text-[10px] mb-4">Tactical Warning</h4>
            <p className="text-gray-400 text-xs italic leading-relaxed">
              "Efficiency is the silent weapon of the 21st century. Those who master these tools build empires while others watch."
            </p>
          </div>
        </aside>
      </div>
    </motion.main>
  );
};
