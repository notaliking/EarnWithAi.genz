import { motion } from 'motion/react';
import { ShieldCheck, Coins, Zap, Heart } from 'lucide-react';

export const About = () => {
  return (
    <main className="pt-32 px-6 md:px-10 pb-20 container mx-auto">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-5xl md:text-8xl font-heading font-black uppercase tracking-tighter mb-12 text-center text-white">
          We're Not Just <span className="neon-text text-white">Another</span> Blog 💀
        </h1>
        
        <div className="glass p-8 md:p-12 rounded-[40px] mb-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-neon-cyan/10 blur-3xl rounded-full"></div>
          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed font-body mb-8">
            <span className="text-white font-black italic">EarnWithAI.genz</span> was born out of a simple frustration: seeing Gen-Z get left behind while boomers talk about AI like it's just "magic spell checking."
          </p>
          <p className="text-lg text-gray-400 leading-relaxed mb-8">
            We're here to bridge the gap. We don't care about theory; we care about **transactions**. We test tools, find the alpha, and build the funnels so you can automate your income and buy back your time.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="flex flex-col items-center text-center p-6 glass rounded-3xl border-none">
              <ShieldCheck className="text-neon-cyan mb-4" size={40} />
              <h3 className="font-bold text-white mb-2 uppercase tracking-widest text-xs">Vetted Alpha</h3>
              <p className="text-gray-500 text-sm">Every tool we list is tested for ROI.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 glass rounded-3xl border-none">
              <Zap className="text-neon-pink mb-4" size={40} />
              <h3 className="font-bold text-white mb-2 uppercase tracking-widest text-xs">Fast Moves</h3>
              <p className="text-gray-500 text-sm">The AI space moves fast. We move faster.</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 glass rounded-3xl border-none">
              <Coins className="text-neon-green mb-4" size={40} />
              <h3 className="font-bold text-white mb-2 uppercase tracking-widest text-xs">Profit First</h3>
              <p className="text-gray-500 text-sm">If it doesn't print, it doesn't get posted.</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-heading font-bold mb-6 text-white uppercase italic">Built by the generation for the generation.</h2>
          <div className="flex items-center justify-center gap-2 text-gray-500">
            <span>Made with</span> <Heart className="text-neon-pink" size={16} /> <span>and high-grade prompts.</span>
          </div>
        </div>
      </motion.div>
    </main>
  );
};
