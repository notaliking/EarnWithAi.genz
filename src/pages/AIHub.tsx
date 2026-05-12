import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Image as ImageIcon, Sparkles, Brain, Bot, Lightbulb, Camera, Loader2, User, Zap } from 'lucide-react';
import { GoogleGenAI } from "@google/genai";

const TAB_CONFIG = [
  { id: 'chat', label: 'AI Chat', icon: Bot, color: 'neon-cyan' },
  { id: 'ideas', label: 'Hustle Ideas', icon: Lightbulb, color: 'neon-pink' },
  { id: 'vision', label: 'Vision AI', icon: Camera, color: 'neon-purple' },
  { id: 'images', label: 'AI Art', icon: ImageIcon, color: 'neon-yellow' },
];

export const AIHub = () => {
  const [activeTab, setActiveTab] = useState('chat');
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'ai', text: string }[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const scrollRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      const scrollElement = scrollRef.current;
      const scrollToBottom = () => {
        scrollElement.scrollTo({
          top: scrollElement.scrollHeight,
          behavior: 'smooth'
        });
      };
      
      // Use both requestAnimationFrame and a small timeout to ensure DOM has rendered
      requestAnimationFrame(() => {
        setTimeout(scrollToBottom, 100);
      });
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() && !selectedImage) return;
    
    const userMsg = { role: 'user' as const, text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const apiKey = process.env.GEMINI_API_KEY;
      
      // We check for the raw value to see if injection happened
      if (!apiKey || apiKey === 'undefined' || apiKey === 'MY_GEMINI_API_KEY' || apiKey === '') {
        console.error("API Key Check Failed. Current value:", apiKey);
        throw new Error('API_KEY_MISSING');
      }

      const ai = new GoogleGenAI({ apiKey });
      
      let prompt = input;
      if (activeTab === 'ideas') {
        prompt = `Generate 3 specific, high-profit AI business ideas based on this context: ${input}. Each idea should include: 1. The concept 2. The target audience 3. How to monetize it using free AI tools.`;
      }

      const textModel = "gemini-3-flash-preview";

      if (activeTab === 'vision' && selectedImage) {
        const base64Data = selectedImage.split(',')[1];
        const response = await ai.models.generateContent({
          model: textModel,
          contents: {
            parts: [
              { inlineData: { mimeType: "image/jpeg", data: base64Data } },
              { text: input || "Analyze this image and tell me how I can monetize something related to it, or improve it with AI." }
            ]
          }
        });
        setMessages(prev => [...prev, { role: 'ai', text: response.text || "I see it, but I can't think of anything right now." }]);
      } else if (activeTab === 'images') {
         const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash-image',
          contents: { parts: [{ text: input }] },
        });
        
        let imageUrl = null;
        for (const part of response.candidates?.[0]?.content?.parts || []) {
          if (part.inlineData) {
            imageUrl = `data:image/png;base64,${part.inlineData.data}`;
            break;
          }
        }
        
        if (imageUrl) {
          setGeneratedImage(imageUrl);
          setMessages(prev => [...prev, { role: 'ai', text: "Your masterpiece is ready! 🎨✨" }]);
        } else {
          setMessages(prev => [...prev, { role: 'ai', text: response.text || "Failed to generate image." }]);
        }
      } else {
        const response = await ai.models.generateContent({
          model: textModel,
          contents: prompt,
          config: {
            systemInstruction: "You are EarnWithAI.genz's lead AI strategist. Your tone is bold, helpful, and highly focused on monetization and efficiency for Gen Z entrepreneurs. Keep answers concise but packed with value.",
          }
        });
        setMessages(prev => [...prev, { role: 'ai', text: response.text || "Sorry, the matrix is flickering. Try again." }]);
      }
    } catch (error: any) {
      console.error("Gemini AI Error:", error);
      let errorMsg = "Matrix Error: Check your connection or API limit.";
      
      if (error?.message === 'API_KEY_MISSING' || error?.message?.includes('403') || error?.message?.includes('PERMISSION_DENIED') || error?.message?.includes('API_KEY_INVALID')) {
        errorMsg = "Matrix Access Denied: Please verify your Gemini API key in Settings > Secrets. Shared apps may require you to provide your own key.";
      } else if (error?.message?.includes('429') || error?.message?.includes('RESOURCE_EXHAUSTED')) {
        errorMsg = "API Limit Reached: The grid is overloaded. Try again in a minute or check your quota.";
      } else if (error?.name === 'ReferenceError' && error?.message?.includes('process')) {
        errorMsg = "Configuration Error: API access logic mismatch. The team is on it.";
      }
      
      setMessages(prev => [...prev, { role: 'ai', text: errorMsg }]);
    } finally {
      setIsLoading(false);
      setSelectedImage(null);
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <main className="pt-20 md:pt-24 px-2 md:px-4 pb-2 md:pb-4 w-full mx-auto h-[100dvh] md:h-screen flex flex-col overflow-hidden">
      <div className="mb-2 shrink-0 md:px-4">
        <h1 className="text-2xl md:text-5xl font-heading font-black uppercase tracking-tighter text-white">
          AI <span className="neon-text">Command</span> Center 🛸
        </h1>
        <p className="text-gray-400 font-body text-[10px] md:text-xs">
          The ultimate suite of Google Gemini tools live on your dashboard.
        </p>
      </div>

      <div className="flex-grow flex flex-col md:flex-row gap-2 md:gap-4 h-full overflow-hidden min-h-0">
        {/* Sidebar Tabs */}
        <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-y-auto scrollbar-hide shrink-0 pb-1 md:pb-0 md:w-48 lg:w-64">
          {TAB_CONFIG.map(tab => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                setMessages([]);
                setGeneratedImage(null);
              }}
              className={`flex items-center gap-4 px-4 md:px-6 py-3 md:py-4 rounded-xl md:rounded-2xl font-black uppercase tracking-widest text-[8px] md:text-[10px] transition-all whitespace-nowrap
                ${activeTab === tab.id 
                  ? `bg-neon-cyan text-dark-bg shadow-[0_0_20px_rgba(69,240,223,0.3)]` 
                  : 'glass text-gray-400 hover:text-white hover:bg-white/10'}`}
            >
              <tab.icon size={14} className="md:w-4 md:h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Main Interface */}
        <div className="flex-grow flex flex-col glass rounded-2xl md:rounded-3xl border border-white/5 relative overflow-hidden bg-dark-bg/40 backdrop-blur-3xl min-h-0">
          {/* Messages Area */}
          <div ref={scrollRef} className="flex-grow overflow-y-auto p-4 md:p-6 space-y-4 md:space-y-6 scrollbar-hide overscroll-contain">
            {messages.length === 0 && (
              <div className="h-full flex flex-col items-center justify-center text-center opacity-30 select-none">
                <Brain size={80} className="mb-4 animate-pulse" />
                <h3 className="text-2xl font-black uppercase tracking-tighter">Awaiting Logic...</h3>
                <p className="font-mono text-xs">READY_FOR_PROMPT_INPUT</p>
              </div>
            )}
            
            {messages.map((msg, i) => (
              <motion.div
                initial={{ opacity: 0, x: msg.role === 'user' ? 20 : -20 }}
                animate={{ opacity: 1, x: 0 }}
                key={i}
                className={`flex gap-4 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-lg ${msg.role === 'user' ? 'bg-neon-pink text-white' : 'bg-neon-cyan text-dark-bg'}`}>
                  {msg.role === 'user' ? <User size={20} /> : <Sparkles size={20} />}
                </div>
                <div className={`p-4 rounded-2xl max-w-[90%] md:max-w-[75%] ${msg.role === 'user' ? 'bg-white/10 text-white font-medium' : 'bg-dark-bg/60 text-gray-100 border border-white/5 shadow-inner'}`}>
                  <p className="text-sm md:text-base leading-relaxed whitespace-pre-wrap">{msg.text}</p>
                </div>
              </motion.div>
            ))}

            {activeTab === 'images' && generatedImage && (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="flex justify-center py-6">
                <div className="relative group">
                  <img 
                    src={generatedImage} 
                    alt="Generated" 
                    className="max-w-full md:max-w-lg rounded-3xl shadow-[0_0_50px_rgba(69,240,223,0.3)] border-4 border-neon-cyan/20" 
                  />
                  <a 
                    href={generatedImage} 
                    download="EarnWithAI_Generated.png"
                    className="absolute bottom-4 right-4 bg-neon-cyan text-dark-bg px-4 py-2 rounded-xl font-black text-[10px] uppercase opacity-0 group-hover:opacity-100 transition-opacity no-underline"
                  >
                    Download Alpha 💾
                  </a>
                </div>
              </motion.div>
            )}

            {isLoading && (
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-neon-cyan text-dark-bg flex items-center justify-center">
                  <Loader2 className="animate-spin" size={20} />
                </div>
                <div className="italic text-gray-500 text-sm py-2">Consulting with the AI Matrix...</div>
              </div>
            )}
          </div>

          {/* Prompt Area */}
          <div className="p-6 border-t border-white/5 bg-white/5 backdrop-blur-xl">
            {selectedImage && (
              <div className="mb-4 flex items-center gap-4 animate-in fade-in slide-in-from-bottom-2">
                <div className="relative w-16 h-16 rounded-lg overflow-hidden border-2 border-neon-cyan">
                  <img src={selectedImage} alt="Preview" className="w-full h-full object-cover" />
                  <button onClick={() => setSelectedImage(null)} className="absolute top-0 right-0 bg-red-500 text-white rounded-bl-lg p-1">×</button>
                </div>
                <span className="text-xs text-neon-cyan uppercase font-bold tracking-widest">Image Loaded into Logic Matrix</span>
              </div>
            )}
            
            <div className="flex items-center gap-4">
              {activeTab === 'vision' && (
                <button 
                  onClick={() => fileInputRef.current?.click()}
                  className="w-12 h-12 flex items-center justify-center glass rounded-2xl text-neon-cyan hover:bg-neon-cyan hover:text-dark-bg transition-all"
                >
                  <Camera size={20} />
                </button>
              )}
              <input 
                type="text"
                placeholder={
                  activeTab === 'chat' ? 'Ask anything about automation...' :
                  activeTab === 'ideas' ? 'Describe your niche or skills...' :
                  activeTab === 'vision' ? 'Ask about this image...' :
                  'Describe the art you want to create...'
                }
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                className="flex-grow bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-neon-cyan transition-all text-sm md:text-base font-medium placeholder:italic"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="w-12 h-12 flex items-center justify-center bg-neon-cyan text-dark-bg rounded-2xl shadow-xl hover:scale-105 active:scale-95 transition-all"
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <input 
        type="file" 
        hidden 
        ref={fileInputRef} 
        accept="image/*" 
        onChange={handleImageUpload} 
      />
    </main>
  );
};
