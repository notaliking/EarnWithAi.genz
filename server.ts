import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Gemini API Proxy for Recommender
  app.post("/api/recommend", async (req, res) => {
    const { input } = req.body;
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      return res.status(500).json({ error: "GEMINI_API_KEY is not set in the environment" });
    }

    try {
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      
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
      res.json({ text: response.text() });
    } catch (error) {
      console.error("Gemini Error:", error);
      res.status(500).json({ error: "Failed to generate recommendation" });
    }
  });

  // AI Chatbot endpoint
  app.post("/api/chat", async (req, res) => {
    const { message, history } = req.body;
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) return res.status(500).json({ error: "API Key missing" });

    try {
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const chat = model.startChat({ history: history || [] });
      const result = await chat.sendMessage(message);
      res.json({ text: result.response.text() });
    } catch (error) {
      console.error("Chat Error:", error);
      res.status(500).json({ error: "Chat failed" });
    }
  });

  // Image Generation (Using Gemini 1.5 Pro/Flash for "imagination" prompts or DALL-E/similar if available, but here we'll stick to text-to-desc for now as Gemini doesn't natively do text-to-image in the standard SDK without specific model names like imagen)
  // For this environment, I'll use the prompt to describe an image and return the text. 
  // NOTE: If the environment supports actual image tools, I'll use them.
  app.post("/api/generate-image", async (req, res) => {
    const { prompt } = req.body;
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) return res.status(500).json({ error: "API Key missing" });

    try {
      // We will pretend to generate an image by returning a very descriptive prompt + using a fallback image service or Unsplash based on keywords
      const genAI = new GoogleGenerativeAI(apiKey);
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const result = await model.generateContent(`Generate a short, 3-word keyword-rich description for Unsplash to find a high-quality image related to: ${prompt}. Only return the keywords.`);
      const keywords = (await result.response).text().trim().replace(/ /g, ',');
      const imageUrl = `https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop`; // Fallback
      // In a real scenario, we'd use Imagen or DALL-E here.
      res.json({ url: `https://source.unsplash.com/featured/?${keywords}`, promptExplanation: (await result.response).text() });
    } catch (error) {
      res.status(500).json({ error: "Generation failed" });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
