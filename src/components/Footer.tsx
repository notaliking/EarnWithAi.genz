import { Heart, Twitter, Send } from 'lucide-react';
import { SITE_CONFIG } from '../constants.ts';

export const Footer = () => (
  <footer className="mt-20 border-t border-white/10 p-10 glass text-center relative overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-neon-cyan to-transparent opacity-50"></div>
    <div className="mb-10 max-w-2xl mx-auto">
      <h3 className="text-2xl font-heading font-bold mb-4">Don't get left on read by the AI revolution 💀</h3>
      <p className="text-gray-400 mb-6">Join 12,000+ others stacking paper with the weekly sauce.</p>
      <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-2">
        <input 
          type="email" 
          placeholder="Drop your email..." 
          className="bg-white/5 border border-white/20 rounded-xl p-3 w-full outline-none focus:border-neon-cyan transition-colors text-white"
        />
        <button className="bg-neon-pink text-white px-8 py-3 rounded-xl font-bold hover:scale-105 transition-transform active:scale-95 shadow-neon-pink border-none cursor-pointer">
          Join
        </button>
      </div>
    </div>
    <div className="flex justify-center gap-6 mb-8">
      <a href="#" className="p-3 glass rounded-full text-gray-400 hover:text-neon-cyan transition-colors"><Twitter size={20} /></a>
      <a href="#" className="p-3 glass rounded-full text-gray-400 hover:text-neon-pink transition-colors"><Send size={20} /></a>
    </div>
    <p className="text-gray-500 text-sm">
      © {new Date().getFullYear()} {SITE_CONFIG.title} | <a href="#" className="underline hover:text-white transition-colors">Privacy</a> | <a href="/sitemap.xml" className="underline hover:text-white transition-colors">Sitemap</a> | Made with <Heart size={12} className="inline text-neon-pink" /> & AI
    </p>
  </footer>
);
