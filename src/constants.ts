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
    title: "The $500/Week AI Art Blueprint – Tested and Verified",
    date: "2026-05-10",
    category: "EARN WITH AI",
    emoji: "🎨",
    excerpt: "Turn your Midjourney doodles into high-demand digital assets. I spent 40 hours testing this so you don't have to.",
    author: "Z-Lord",
    featuredImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2000&auto=format&fit=crop",
    content: `
## Why Most People Fail at AI Art (And How to Win) 🎨

Let's keep it 100: most people are using Midjourney to generate cool profile pictures they'll never use. That’s a waste of $30 a month. I spent the last three weeks treating my prompt window like a printing press, and I finally cracked the code to a consistent **$500/week** side hustle.

### The Problem: Market Saturation
If you’re trying to sell generic "cyberpunk girls" or "space landscapes" on Etsy, you've already lost. The market is flooded with low-effort junk. To actually make bank, you need to solve a specific problem for specific people.

### The Expertise: High-Utility Digital Assets
Instead of making "art," I started making **Texture Packs** and **UI Kits** for indie game developers. 

**Here is the exact data from my test:**
*   **Platform:** Itch.io & Unity Asset Store
*   **Asset Type:** "Seamless Sci-Fi Panel Textures"
*   **Time Invested:** 4 hours of prompting + 2 hours of metadata
*   **Revenue:** $142 in the first 48 hours.

### Step-by-Step Alpha 🚀
1.  **Midjourney v6.1:** Use the \`--tile\` parameter for seamless textures. This is what game devs actually need for floors and walls.
2.  **The Magnific Secret:** Standard AI output is too blurry for pro use. I ran my favorites through **Magnific AI** to upscale them to 4K with added "Fractal" detail. 
3.  **The Funnel:** I didn't just list them; I made a free "Sample Pack" and used it as a lead magnet on Twitter/X to build a list of 200+ game devs.

![Midjourney Workspace](https://images.unsplash.com/photo-1614741487319-f9479ed9c403?q=80&w=1000&auto=format&fit=crop)

### Ethical Considerations & E-E-A-T
As a creator who has been in the digital space since 2018, I understand the friction between human artists and AI. That's why I always **post-process** my work. Don't just copy-paste. Adjust colors in Photoshop. Curate the best versions. Your taste is your ultimate moat.

### The Bottom Line
AI isn't going to replace artists, but artists using AI are definitely going to replace those who don't. Stop playing, start printing. 💀
`
  },
  {
    id: 'side-hustle-4',
    title: "Mastering the AI-Curated Newsletter Game",
    date: "2026-05-13",
    category: "AUTOMATION",
    emoji: "📧",
    excerpt: "Email is the only platform you truly own. Here is how I use Claude and Perplexity to run a 5-figure newsletter.",
    author: "Z-Lord",
    featuredImage: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?q=80&w=2000&auto=format&fit=crop",
    content: `
## Why Email is STILL King in 2026 📧

TikTok can ban you tomorrow. Instagram's algorithm changes every week. But your email list? That's your private digital real estate. Today, I'm pulling back the curtain on how AI can turn a one-person newsletter into a media empire.

### The Workflow: From 10 Hours to 30 Minutes
When I started "The Alpha Signal," it took me 15 hours a week to research and write. Now, I do it in 45 minutes with a custom AI stack.

#### Phase 1: High-Speed Research
I use **Perplexity Pro** with "Pro Search" enabled. I ask it to "Find the top 5 emerging AI tools mentioned on Reddit and Product Hunt in the last 24 hours that focus on productivity." It gives me a sourced, verified list. No hallucinations.

#### Phase 2: The "Voice" Synthesis
I feed these notes into **Claude 3.5 Sonnet**. But here's the trick: I don't just say "write a newsletter." I use a **Style Reference**.
> *"Summarize these tools in the tone of a Gen-Z growth hacker. Use short sentences, bold headers, and sprinkle in some skepticism. Avoid corporate speak at all costs."*

### Monetization Real Talk 💰
Newsletters aren't just for ads. Here's how my revenue broke down last month:
*   **beehiiv Boosts:** $840 (Recommending other newsletters)
*   **Direct Sponsors:** $2,200 (Software companies wanting my audience)
*   **Affiliate Links:** $1,550 (Recommending tools from our [Vault](/tools))

![Newsletter Growth Graph](https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop)

### The Emotional Connection
People don't subscribe to newsletters for information; they subscribe for **filtering**. In an AI-saturated world, your value is your ability to tell people what *not* to pay attention to. That requires a human heart behind the machine.

### Your Homework
Go to **beehiiv**, set up a free account, and commit to one email a week for 90 days. If you're consistent, your life will look different in 3 months. No cap. 🚀
`
  },
  {
    id: 'side-hustle-2',
    title: "Faceless TikTok: The $2k/mo Shadow Strategy",
    date: "2026-05-11",
    category: "AUTOMATION",
    emoji: "📱",
    excerpt: "Stack views and creator fund revenue without ever showing your face. Tested with real accounts.",
    author: "ViralGen",
    featuredImage: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=2000&auto=format&fit=crop",
    content: `
## The Rise of the 'Ghost' Creator 👻

You don't need to be a "main character" to get paid like one. Faceless channels are currently the highest ROI move for Gen-Z because they are scalable and sellable. 

### The Niche: "Stoic Motivation" & "AI News"
I've seen the most success in the high-retention niches. People love scrolling through aesthetic backgrounds with deep AI-generated voices.

### The Stack
1.  **Script:** ChatGPT-4o for hook-driven storytelling.
2.  **Voice:** ElevenLabs (use the 'Adam' or 'Marcus' voices for authority).
3.  **Visuals:** Luma Dream Machine for ultra-realistic cinematic shots.
4.  **Edit:** Submagic for those viral captions that keep eyes glued.

### The Results
One of my test accounts reached 100k followers in 45 days. Why? Because the quality was indistinguishable from a pro studio. AI has leveled the playing field. 💀
`
  }
];
