import { Post, SiteConfig, Tool } from './types.ts';

export const SITE_CONFIG: SiteConfig = {
  title: "EarnWithAI.genz",
  description: "The ultimate guide for Gen-Z to make bank using AI tools. No cap, just income. 🚀",
  socials: {
    twitter: "EarnWithAI",
    tiktok: "@earnwithai"
  }
};

export const TOOLS: Tool[] = [
  // --- IMAGE GENERATION ---
  { id: 'midjourney', name: 'Midjourney', category: 'Image Gen', description: 'The gold standard for artistic AI images. Best for high-end aesthetics.', link: 'https://midjourney.com', hasAffiliate: false, emoji: '🎨' },
  { id: 'dalle3', name: 'DALL-E 3', category: 'Image Gen', description: 'OpenAIs powerful image creator with incredible prompt adherence.', link: 'https://openai.com/dall-e-3', hasAffiliate: false, emoji: '🖼️' },
  { id: 'flux', name: 'Flux.1', category: 'Image Gen', description: 'The new open-source king. Realistic and handles text perfectly.', link: 'https://blackforestlabs.ai', hasAffiliate: false, emoji: '🔥' },
  { id: 'canva', name: 'Canva Magic Studio', category: 'Design', description: 'Essential for quick Gen-Z social media graphics and templates.', link: 'https://canva.com', hasAffiliate: true, emoji: '✨' },
  { id: 'magnific', name: 'Magnific AI', category: 'Image Gen', description: 'The ultimate image upscaler and detailer. Pro level only.', link: 'https://magnific.ai', hasAffiliate: true, emoji: '🔬' },
  { id: 'adobefirefly', name: 'Adobe Firefly', category: 'Design', description: 'Legally safe AI generation integrated into Creative Cloud.', link: 'https://adobe.com/firefly', hasAffiliate: true, emoji: '🖌️' },

  // --- VIDEO & ANIMATION ---
  { id: 'luma-dream', name: 'Luma Dream Machine', category: 'Video', description: 'Stunningly realistic video generation from text or images.', link: 'https://lumalabs.ai/dream-machine', hasAffiliate: false, emoji: '🎥' },
  { id: 'runway-gen3', name: 'Runway Gen-3 Alpha', category: 'Video', description: 'Hollywood-level video control and quality. Pure alpha.', link: 'https://runwayml.com', hasAffiliate: false, emoji: '🎬' },
  { id: 'kling', name: 'Kling AI', category: 'Video', description: 'Incredibly long and stable AI video generations.', link: 'https://klingai.com', hasAffiliate: false, emoji: '👾' },
  { id: 'heygen', name: 'HeyGen', category: 'Video', description: 'Avatar creation for faceless channels. Top tier quality.', link: 'https://heygen.com', hasAffiliate: true, emoji: '👤' },
  { id: 'invideo', name: 'InVideo AI', category: 'Video', description: 'Turn scripts into ready-to-post videos in minutes.', link: 'https://invideo.io', hasAffiliate: true, emoji: '📼' },
  { id: 'pika', name: 'Pika Labs', category: 'Video', description: 'Creative animation and effect tool. Very Gen-Z vibes.', link: 'https://pika.art', hasAffiliate: false, emoji: '🐦' },

  // --- WRITING & SEO ---
  { id: 'claude', name: 'Claude 3.5 Sonnet', category: 'Writing', description: 'The smartest writer on the planet. Best for long-form content.', link: 'https://anthropic.com', hasAffiliate: false, emoji: '🧠' },
  { id: 'gemini', name: 'Gemini 1.5 Pro', category: 'Writing', description: 'Massive context window. Analyzing whole books/codebases in seconds.', link: 'https://gemini.google.com', hasAffiliate: false, emoji: '💎' },
  { id: 'chatgpt', name: 'ChatGPT-4o', category: 'Writing', description: 'The all-around champ. Voice, search, and logic in one app.', link: 'https://chatgpt.com', hasAffiliate: false, emoji: '🤖' },
  { id: 'jasper', name: 'Jasper', category: 'Marketing', description: 'AI built specifically for brands and advertising copy.', link: 'https://jasper.ai', hasAffiliate: true, emoji: '📈' },
  { id: 'copy-ai', name: 'Copy.ai', category: 'Marketing', description: 'Automating high-scale marketing workflows for agencies.', link: 'https://copy.ai', hasAffiliate: true, emoji: '✍️' },
  { id: 'surfer-seo', name: 'Surfer SEO', category: 'SEO', description: 'Analyze your content to guarantee page 1 rankings.', link: 'https://surferseo.com', hasAffiliate: true, emoji: '🌐' },

  // --- AUTOMATION & HUSTLE ---
  { id: 'make', name: 'Make.com', category: 'Automation', description: 'Connect anything to anything. The backbone of AI hustles.', link: 'https://make.com', hasAffiliate: true, emoji: '⚙️' },
  { id: 'zapier', name: 'Zapier Central', category: 'Automation', description: 'No-code bots that work across 6,000+ apps.', link: 'https://zapier.com', hasAffiliate: true, emoji: '⚡' },
  { id: 'perplexity', name: 'Perplexity Pro', category: 'Research', description: 'AI-powered search engine that cites every source. 10x speed.', link: 'https://perplexity.ai', hasAffiliate: true, emoji: '🔍' },
  { id: 'gumroad', name: 'Gumroad', category: 'Selling', description: 'Top site for selling AI-generated digital products.', link: 'https://gumroad.com', hasAffiliate: false, emoji: '💰' },
  { id: 'beehiiv', name: 'beehiiv', category: 'Newsletter', description: 'The essential platform for AI-powered newsletters.', link: 'https://beehiiv.com', hasAffiliate: true, emoji: '🐝' },

  // --- AUDIO & VOICE ---
  { id: 'elevenlabs', name: 'ElevenLabs', category: 'Audio', description: 'The best AI voices globally. Perfect for TikTok narrations.', link: 'https://elevenlabs.io', hasAffiliate: true, emoji: '🎙️' },
  { id: 'suno', name: 'Suno AI', category: 'Audio', description: 'Create full, radio-ready songs in seconds. Viral bait.', link: 'https://suno.com', hasAffiliate: false, emoji: '🎵' },
  { id: 'udio', name: 'Udio', category: 'Audio', description: 'Unmatched musical fidelity. The high-end king of AI music.', link: 'https://udio.com', hasAffiliate: false, emoji: '🎹' },
  { id: 'riverside', name: 'Riverside.fm', category: 'Audio', description: 'AI-powered podcast and video recording. Pro specs.', link: 'https://riverside.fm', hasAffiliate: true, emoji: '🎤' },

  // --- BUSINESS & PRODUCTIVITY ---
  { id: 'notion', name: 'Notion AI', category: 'Productivity', description: 'The all-in-one workspace now with built-in intelligence.', link: 'https://notion.so', hasAffiliate: true, emoji: '📝' },
  { id: 'gamma', name: 'Gamma', category: 'Design', description: 'AI that creates full presentations and websites from a prompt.', link: 'https://gamma.app', hasAffiliate: true, emoji: '🪄' },
  { id: 'tome', name: 'Tome', category: 'Design', description: 'Generative storytelling for pitch decks and visual narratives.', link: 'https://tome.app', hasAffiliate: false, emoji: '📖' },
  { id: 'fireflies', name: 'Fireflies.ai', category: 'Productivity', description: 'AI meeting assistant that records, transcribes, and summarizes.', link: 'https://fireflies.ai', hasAffiliate: true, emoji: '🦗' },
  { id: 'otter', name: 'Otter.ai', category: 'Productivity', description: 'Smart note-taking and real-time transcription for teams.', link: 'https://otter.ai', hasAffiliate: true, emoji: '🦦' },

  // --- DEVELOPER TOOLS ---
  { id: 'cursor', name: 'Cursor', category: 'Dev', description: 'The AI code editor that actually understands your whole project.', link: 'https://cursor.com', hasAffiliate: false, emoji: '💻' },
  { id: 'v0', name: 'v0.dev', category: 'Dev', description: 'Vercels AI for generating production-ready React UI code.', link: 'https://v0.dev', hasAffiliate: false, emoji: '⚡' },
  { id: 'github-copilot', name: 'GitHub Copilot', category: 'Dev', description: 'The OG AI pair programmer. Essential for devs.', link: 'https://github.com/features/copilot', hasAffiliate: false, emoji: '🐙' },
  { id: 'replit', name: 'Replit Agent', category: 'Dev', description: 'Build and deploy full-stack apps just by chatting.', link: 'https://replit.com', hasAffiliate: false, emoji: '🌀' },

  // --- SOCIAL & VIRAL ---
  { id: 'opus-clip', name: 'OpusClip', category: 'Video', description: 'Turn long videos into viral shorts in one click.', link: 'https://opus.pro', hasAffiliate: true, emoji: '🎬' },
  { id: 'submagic', name: 'Submagic', category: 'Video', description: 'The best viral captions for TikTok and Reels. Dynamic AF.', link: 'https://submagic.co', hasAffiliate: true, emoji: '💬' },
  { id: 'captions', name: 'Captions.ai', category: 'Video', description: 'AI studio for creators. Teleprompter, eye-contact fix, etc.', link: 'https://captions.ai', hasAffiliate: false, emoji: '📱' },
  { id: 'mubert', name: 'Mubert', category: 'Audio', description: 'Generative AI music for content creators. No copyright issues.', link: 'https://mubert.com', hasAffiliate: true, emoji: '🎧' },

  // --- DATA & DATA SCRAPING ---
  { id: 'browse-ai', name: 'Browse AI', category: 'Automation', description: 'The easiest way to extract and monitor data from any website.', link: 'https://browse.ai', hasAffiliate: true, emoji: '🕸️' },
  { id: 'instabase', name: 'Instabase', category: 'Automation', description: 'AI for understanding any document or unstructured data.', link: 'https://instabase.com', hasAffiliate: false, emoji: '📑' },
];

export const POSTS: Post[] = [
  {
    id: 'side-hustle-1',
    title: "How I Made $500 with AI Art – No Cap",
    date: "2026-05-10",
    category: "EARN WITH AI",
    emoji: "🎨",
    excerpt: "Turn your midjourney doodles into actual dollars with this simple funnel.",
    author: "Z-Lord",
    content: `
## The AI Art Revolution 🚀

Listen, if you think AI art is just for profile pictures, you're missing the bag. Here's exactly how I turned a **Midjourney** subscription into $500 in my first week.

### The Strategy
1. **Find the Niche:** Don't just make "cool art." Make high-quality texture packs for game devs.
2. **Upscale:** Use tools like Magnific AI to make them 4K.
3. **The Market:** List them on Itch.io and Unity Store.

### Why this works:
* Low effort, high scale
* Passive income once listed
* Infinite variations

### Conclusion
Stop scrolling and start prompting. The AI revolution isn't waiting for you to catch up. 💀
    `
  },
  {
    id: 'side-hustle-2',
    title: "Automate Faceless TikTok Channels with AI",
    date: "2026-05-11",
    category: "AUTOMATION",
    emoji: "📱",
    excerpt: "Stack views and creator fund revenue without ever showing your face.",
    author: "ViralGen",
    content: "Content coming soon..."
  },
  {
    id: 'side-hustle-3',
    title: "AI Copywriting: The New Gold Mine",
    date: "2026-05-12",
    category: "FREELANCING",
    emoji: "✍️",
    excerpt: "How to use Claude and Gemini to write high-converting ads for brands.",
    author: "PromptQueen",
    content: "Content coming soon..."
  },
  {
    id: 'side-hustle-4',
    title: "The $1,000/mo AI Newsletter Blueprint",
    date: "2026-05-13",
    category: "AUTOMATION",
    emoji: "📧",
    excerpt: "How to build, grow, and monetize an AI-curated newsletter on beehiiv.",
    author: "Z-Lord",
    content: `
## The Newsletter Gold Rush 📧

Newsletters are the new real estate. With AI, you can curate, write, and format a professional-grade newsletter in 30 minutes a week.

### The Stack
1. **Curator:** Use Perplexity to find the top AI news of the week.
2. **Writer:** Feed the news into Claude 3.5 with a specific "Gen-Z" tone prompt.
3. **Platform:** beehiiv for growth tools and monetization.

### Growth Strategy
*   Post "Thread Alphas" on Twitter/X.
*   Run small TikTok ads with ElevenLabs voiceovers.
*   Collaborate with other AI newsletters for cross-promos.

### Conclusion
Don't sleep on email. It's the only platform you actually own. 🚀
    `
  },
  {
    id: 'side-hustle-5',
    title: "Faceless YouTube: The Ultimate Passive Income",
    date: "2026-05-14",
    category: "VIDEO",
    emoji: "📺",
    excerpt: "Use Luma and HeyGen to build a channel that prints cash while you sleep.",
    author: "ViralGen",
    content: "Content coming soon..."
  },
  {
    id: 'side-hustle-6',
    title: "Ghostwriting for CEOs with Claude 3.5",
    date: "2026-05-15",
    category: "FREELANCING",
    emoji: "🕴️",
    excerpt: "CEOs are too busy to post on LinkedIn. Do it for them using AI and charge $2k/mo.",
    author: "PromptQueen",
    content: "Content coming soon..."
  },
  {
    id: 'side-hustle-7',
    title: "Automated E-com Support: Agency Alpha",
    date: "2026-05-16",
    category: "AGENCY",
    emoji: "🛒",
    excerpt: "Build custom GPTs for Shopify brands to handle 90% of their tickets.",
    author: "AlphaDev",
    content: "Content coming soon..."
  }
];
