import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, Image, Sparkles, Send, Loader2, Bot, User, Download, RefreshCw } from 'lucide-react';
import Markdown from 'react-markdown';

export const AILab = () => {
  const [activeTab, setActiveTab] = useState<'chat' | 'image' | 'summarize'>('chat');

  return (
    <div className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-16 text-center"
      >
        <h1 className="text-6xl md:text-8xl font-black italic tracking-tighter mb-6">
          AI <span className="text-neon-cyan drop-shadow-[0_0_15px_rgba(0,255,243,0.5)]">LAB</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto uppercase tracking-widest font-medium">
          Access the full power of Gemini 1.5 Flash in your browser. Build, generate, and explore.
        </p>
      </motion.div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {[
          { id: 'chat', label: 'Gemini Chat', icon: MessageSquare },
          { id: 'image', label: 'Image Gen', icon: Image },
          { id: 'summarize', label: 'Summarizer', icon: Sparkles }
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex items-center gap-3 px-8 py-4 rounded-full font-black uppercase tracking-tighter transition-all ${
              activeTab === tab.id
                ? 'bg-neon-cyan text-black shadow-[0_0_20px_rgba(0,255,243,0.4)] scale-105'
                : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
            }`}
          >
            <tab.icon size={20} />
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tool Content */}
      <div className="bg-white/5 border border-white/10 rounded-[40px] p-8 md:p-12 min-h-[600px] backdrop-blur-xl">
        <AnimatePresence mode="wait">
          {activeTab === 'chat' && <ChatTool key="chat" />}
          {activeTab === 'image' && <ImageTool key="image" />}
          {activeTab === 'summarize' && <SummarizerTool key="summarize" />}
        </AnimatePresence>
      </div>
    </div>
  );
};

const ChatTool = () => {
  const [messages, setMessages] = useState<{ role: 'user' | 'model'; content: string }[]>([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!input.trim() || loading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages((prev) => [...prev, { role: 'user', content: userMessage }]);
    setLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: userMessage,
          history: messages.map(m => ({
            role: m.role === 'model' ? 'model' : 'user',
            parts: [{ text: m.content }]
          }))
        }),
      });

      const data = await response.json();
      setMessages((prev) => [...prev, { role: 'model', content: data.text }]);
    } catch (err) {
      setMessages((prev) => [...prev, { role: 'model', content: "Error: AI disconnected. Check connectivity." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="flex flex-col h-[600px]"
    >
      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto mb-8 space-y-6 pr-4 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent"
      >
        {messages.length === 0 && (
          <div className="h-full flex flex-col items-center justify-center text-center space-y-4 opacity-30">
            <Bot size={64} />
            <p className="uppercase tracking-[0.2em] font-medium">Start a conversation with Gemini</p>
          </div>
        )}
        {messages.map((m, i) => (
          <div
            key={i}
            className={`flex items-start gap-4 ${m.role === 'user' ? 'flex-row-reverse' : ''}`}
          >
            <div className={`p-3 rounded-2xl ${m.role === 'user' ? 'bg-neon-cyan text-black' : 'bg-white/10 text-white'}`}>
              {m.role === 'user' ? <User size={20} /> : <Bot size={20} />}
            </div>
            <div className={`${
              m.role === 'user' 
                ? 'bg-neon-cyan/10 border border-neon-cyan/20 text-white rounded-tr-none' 
                : 'bg-white/5 border border-white/10 text-gray-300 rounded-tl-none'
            }`}>
              <div className="prose prose-invert prose-p:leading-relaxed prose-pre:bg-black/50 prose-pre:border prose-pre:border-white/10 p-5 rounded-3xl text-lg leading-relaxed">
                <Markdown>
                  {m.content}
                </Markdown>
              </div>
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex items-center gap-4">
            <div className="p-3 rounded-2xl bg-white/10 text-white">
              <Bot size={20} />
            </div>
            <div className="bg-white/5 border border-white/10 p-5 rounded-3xl rounded-tl-none">
              <Loader2 className="animate-spin text-neon-cyan" />
            </div>
          </div>
        )}
      </div>

      <form onSubmit={handleSend} className="relative">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type a message..."
          className="w-full bg-black/50 border border-white/10 rounded-full py-6 px-8 text-xl focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan/50 transition-all placeholder:text-gray-600"
        />
        <button
          type="submit"
          disabled={!input.trim() || loading}
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-neon-cyan text-black p-4 rounded-full hover:scale-110 transition-all disabled:opacity-50 disabled:hover:scale-100"
        >
          <Send size={24} />
        </button>
      </form>
    </motion.div>
  );
};

const ImageTool = () => {
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim() || loading) return;

    setLoading(true);
    setImageUrl(null);

    try {
      const response = await fetch('/api/generate-image', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: prompt.trim() }),
      });
      const data = await response.json();
      setImageUrl(data.url);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="flex flex-col items-center justify-center space-y-12"
    >
      <div className="w-full max-w-2xl text-center space-y-4">
        <h2 className="text-3xl font-black uppercase italic tracking-tighter">AI Image Generator</h2>
        <p className="text-gray-400 font-medium">Describe your vision and let Gemini's imagination run wild.</p>
      </div>

      <form onSubmit={handleGenerate} className="w-full max-w-3xl relative">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Ex: A futuristic Gen-Z office in Neo-Tokyo with pink neon lights and holograms..."
          className="w-full bg-black/50 border border-white/10 rounded-3xl py-8 px-10 text-xl focus:outline-none focus:border-neon-cyan transition-all min-h-[150px] resize-none"
        />
        <button
          type="submit"
          disabled={!prompt.trim() || loading}
          className="absolute right-6 bottom-6 bg-neon-cyan text-black px-8 py-4 rounded-full font-black uppercase tracking-tighter hover:scale-105 transition-all flex items-center gap-3 disabled:opacity-50"
        >
          {loading ? <Loader2 className="animate-spin" /> : <Sparkles size={20} />}
          {loading ? 'Generating...' : 'Ignite'}
        </button>
      </form>

      <div className="w-full max-w-4xl min-h-[400px] flex items-center justify-center border-2 border-dashed border-white/5 rounded-[40px] overflow-hidden relative group">
        {loading ? (
          <div className="flex flex-col items-center space-y-4">
            <RefreshCw className="animate-spin text-neon-cyan" size={48} />
            <p className="uppercase tracking-[0.3em] font-black animate-pulse">Rendering Reality...</p>
          </div>
        ) : imageUrl ? (
          <>
            <img 
              src={imageUrl} 
              alt="Generated AI" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
              <a 
                href={imageUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="bg-white text-black px-8 py-4 rounded-full font-black uppercase tracking-tighter flex items-center gap-3 hover:scale-110 transition-all"
              >
                <Download size={20} />
                Download Original
              </a>
            </div>
          </>
        ) : (
          <div className="text-center space-y-4 opacity-20">
            <Image size={80} className="mx-auto" />
            <p className="uppercase tracking-[0.2em] font-black">Canvas Awaiting Instructions</p>
          </div>
        )}
      </div>
    </motion.div>
  );
};

const SummarizerTool = () => {
  const [text, setText] = useState('');
  const [summary, setSummary] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSummarize = async () => {
    if (!text.trim() || loading) return;
    setLoading(true);
    setSummary('');

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: `Summarize the following text into 3-5 punchy bullet points using Gen-Z slang and bold key terms. Be authoritative and alpha. Text: ${text}`,
        }),
      });
      const data = await response.json();
      setSummary(data.text);
    } catch (err) {
      setSummary("Failed to condense. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="max-w-4xl mx-auto space-y-12"
    >
      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-6">
          <label className="block text-sm font-black uppercase tracking-widest text-gray-500">Source Material</label>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Paste that long, boring article here..."
            className="w-full h-[400px] bg-black/50 border border-white/10 rounded-3xl p-8 text-lg focus:outline-none focus:border-neon-cyan transition-all resize-none"
          />
          <button
            onClick={handleSummarize}
            disabled={!text.trim() || loading}
            className="w-full bg-neon-cyan text-black py-6 rounded-full font-black uppercase tracking-tighter text-xl hover:shadow-[0_0_30px_rgba(0,255,243,0.3)] transition-all flex items-center justify-center gap-3 disabled:opacity-50"
          >
            {loading ? <Loader2 className="animate-spin" /> : <Sparkles size={24} />}
            {loading ? 'Condensing...' : 'Condense Now'}
          </button>
        </div>

        <div className="space-y-6">
          <label className="block text-sm font-black uppercase tracking-widest text-gray-500">Alpha Summary</label>
          <div className="h-[400px] bg-white/5 border border-white/10 rounded-3xl p-8 overflow-y-auto prose prose-invert max-w-none">
            {loading ? (
              <div className="flex flex-col items-center justify-center h-full space-y-4 opacity-50">
                <Loader2 className="animate-spin text-neon-cyan" size={32} />
                <p className="font-black uppercase tracking-widest">Bot is Reading...</p>
              </div>
            ) : summary ? (
              <Markdown>{summary}</Markdown>
            ) : (
              <p className="text-gray-600 font-medium h-full flex items-center justify-center uppercase tracking-widest text-center italic">
                Clean and concise takeaways will appear here. No fluff.
              </p>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
