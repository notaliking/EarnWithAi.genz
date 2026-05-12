import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Send, Loader2, RefreshCcw } from 'lucide-react';
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY || '');

export const HustleRecommender = () => {
  const [input, setInput] = useState('');
  const [recommendation, setRecommendation] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getRecommendation = async () => {
    if (!input.trim()) return;
    
    setLoading(true);
    setError(null);
    try {
      const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });
      const prompt = `You are a Gen-Z high-growth side hustle expert. 
      The user says: "${input}". 
      Based on this, suggest one highly specific, actionable AI-powered side hustle. 
      Use Gen-Z slang like "no cap", "alpha", "printing", "stacking".
      Markdown format: 
      ### [Hustle Name] [Emoji]
      **The Alpha:** [Why it works now]
      **The Stack:** [2-3 specific AI tools to use]
      **Action Plan:** [3 bullet points to start today]
      Keep it short and punchy.`;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      setRecommendation(response.text());
    } catch (err) {
      console.error(err);
      setError('The AI oracle is offline. Try again later, fam.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-neon-cyan/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto glass p-8 md:p-16 rounded-[40px] border-neon-cyan/20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neon-cyan/10 border border-neon-cyan/20 text-neon-cyan text-xs font-black uppercase tracking-widest mb-6">
              <Sparkles size={14} /> AI Oracle Beta
            </div>
            <h2 className="text-4xl md:text-6xl font-heading font-black uppercase tracking-tighter mb-6 text-white">
              Get Your Personal <span className="neon-text">Alpha</span> 📡
            </h2>
            <p className="text-gray-400 text-lg md:text-xl">
              Tell the AI what you're good at (or what you hate). We'll find your perfect automated income stream.
            </p>
          </div>

          {!recommendation ? (
            <div className="space-y-6">
              <div className="relative group">
                <textarea 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="e.g. 'I'm a good artist but I hate talking to people' or 'I want to make $1k/mo while in college'..."
                  className="w-full bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 text-lg text-white font-medium outline-none focus:border-neon-cyan focus:shadow-neon transition-all min-h-[150px] placeholder:text-gray-600"
                />
              </div>
              <button 
                onClick={getRecommendation}
                disabled={loading || !input.trim()}
                className="w-full bg-white text-dark-bg py-6 rounded-3xl font-black uppercase tracking-tighter text-xl hover:bg-neon-cyan transition-all hover:scale-[1.02] active:scale-95 disabled:opacity-50 disabled:scale-100 flex items-center justify-center gap-3 border-none cursor-pointer"
              >
                {loading ? (
                  <>
                    <Loader2 className="animate-spin" /> Mining Alpha...
                  </>
                ) : (
                  <>
                    Scan My Future <Send size={20} />
                  </>
                )}
              </button>
              {error && <p className="text-neon-pink text-center font-bold text-sm uppercase tracking-widest">{error}</p>}
            </div>
          ) : (
            <AnimatePresence>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-8"
              >
                <div className="prose prose-invert max-w-none prose-headings:font-heading prose-headings:uppercase prose-headings:tracking-tighter prose-h3:text-3xl prose-h3:text-neon-cyan prose-strong:text-white prose-p:text-gray-400">
                  <div className="markdown-body p-8 rounded-3xl bg-white/5 border border-white/10">
                    <div dangerouslySetInnerHTML={{ __html: recommendation.replace(/\n/g, '<br />') }} />
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button 
                    onClick={() => setRecommendation(null)}
                    className="flex-1 bg-white/10 text-white py-4 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-white/20 transition-all border-none flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <RefreshCcw size={16} /> Try Another Prompt
                  </button>
                  <a 
                    href="/tools" 
                    className="flex-1 bg-neon-cyan text-dark-bg py-4 rounded-2xl font-black uppercase tracking-widest text-xs text-center no-underline hover:shadow-neon transition-all cursor-pointer"
                  >
                    Find Tools to Build This
                  </a>
                </div>
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </div>
    </section>
  );
};
