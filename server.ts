import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI } from '@google/genai';
import { AMETIEST_SYSTEM_PROMPT } from './src/data/malychiteKnowledge';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = parseInt(process.env.PORT || '3000', 10);
const isProduction = process.env.NODE_ENV === 'production';

app.use(express.json({ limit: '2mb' }));

// Health check endpoint
app.get('/api/health', (_req: Request, res: Response) => {
  res.json({
    status: 'ok',
    hasGeminiKey: Boolean(process.env.GEMINI_API_KEY),
    model: 'gemini-3.8-flash',
    timestamp: new Date().toISOString(),
  });
});

// Fallback intelligent knowledge generator in case GEMINI_API_KEY is not configured
function generateNotebookFallback(message: string): string {
  const query = message.toLowerCase();

  if (query.includes('aol') || query.includes('analytic overlay') || query.includes('overlay') || query.includes('block') || query.includes('noise')) {
    return `### Mastering Analytic Overlay (AOL)

In the CRV lineage developed by Ingo Swann at SRI, **Analytic Overlay (AOL)** is defined as the analytical left-hemisphere's frantic attempt to slap a known semantic label onto a weak, fleeting intuitive signal.

**The Quenching Protocol:**
1. **Identify the surge:** The moment you think *"That's the Eiffel Tower"* or *"It's a submarine,"* catch the mental leap. Raw remote viewing signals are sensory adjectives (e.g. *metallic*, *towering*, *cold*), never complex nouns.
2. **Quarantine in the margin:** On the right side of your session paper, write **"AOL: Eiffel Tower"** or **"AOL: Submarine"**.
3. **Physical release:** Lift your pen completely off the page. Take a deep, deliberate breath and look away for 5 seconds.
4. **Re-engage the coordinate:** Return your focus to the coordinate numbers without trying to guess.

*For deep training on the neurobiology of signal-to-noise ratio, review Chapter 3 ("The War on Signal") in **Journey Through Dimensions**, or open the **Scry Practice Engine** to run a real coordinate drill with our built-in AOL Quenching Tray!*`;
  }

  if (query.includes('stage') || query.includes('crv') || query.includes('coordinate remote viewing') || query.includes('protocol') || query.includes('swann')) {
    return `### The 6 Stages of Coordinate Remote Viewing (CRV)

Formulated by Ingo Swann and validated at Stanford Research Institute (SRI), CRV breaks down perception into structured gates:

- **Stage 1 (Gestalt & Ideogram):** Rapid, ballistic physical reflex capturing primal target nature (*land, water, structure, energy, biological*).
- **Stage 2 (Sensory Data):** Raw adjectives without nouns (*textures, colors, temperatures, smells, sounds*).
- **Stage 3 (Dimensionality):** Spatial perspective, vectors, relative heights, and motion.
- **Stage 4 (Aesthetic & Emotional Impact):** How the site affects the viewer and ambient intangible atmospheres.
- **Stage 5 (Interrogation):** Active probing of internal site components and dynamic functions.
- **Stage 6 (3D Modeling & Direct Spatial Analysis):** High-resolution physical modeling, cross-sections, and precise locational vectors.

*You can practice the foundational Stage 1 & 2 ideogram exercises right now using the **Scry Practice Engine** by clicking 'Launch Scry'!*`;
  }

  if (query.includes('stargate') || query.includes('history') || query.includes('sri') || query.includes('puthoff') || query.includes('targ') || query.includes('cia')) {
    return `### The Declassified Legacy of Project Stargate

Between 1972 and 1995, the US Intelligence community (CIA, DIA, INSCOM) invested millions into non-local psycho-energetics across programs codenamed **GRILL FLAME**, **CENTER LANE**, **SUN STREAK**, and finally **STARGATE**.

**Key Pioneers:**
- **Harold Puthoff & Russell Targ:** Physicists at Stanford Research Institute who subjected non-local perception to double-blind laser interferometry and magnetometer testing.
- **Ingo Swann:** The father of modern CRV, who designed the six-stage protocol specifically to prevent the conscious mind from confabulating data.
- **Joseph McMoneagle:** Remote Viewer 001, decorated Legion of Merit intelligence officer whose operational target sketches solved high-priority national security puzzles.

*Chapter 2 of **Journey Through Dimensions** contains the full declassified archive analysis, including declassified Soviet bio-communication dossiers and the physics of non-local information transfer.*`;
  }

  if (query.includes('book') || query.includes('journey through dimensions') || query.includes('buy') || query.includes('chapters') || query.includes('read')) {
    return `### Journey Through Dimensions by Malychite

**Journey Through Dimensions: The Physics of Consciousness, Non-Local Perception, and the Multidimensional Mind** is our core theoretical foundation.

**Key Dimensional Explorations:**
- **Chapter 1:** The Holoflux Manifold (Bohmian quantum holography and non-locality)
- **Chapter 2:** The Secret History of Project Stargate & SRI laboratories
- **Chapter 3:** The War on Signal: Quenching Analytic Overlay (AOL)
- **Chapter 4:** The 6-Stage CRV Protocol Architecture
- **Chapter 5:** Neurobiology & Entrainment: The Theta-Alpha Bridge
- **Chapter 6:** The Multidimensional Horizon: Consciousness as Cosmos

*You can preview reading excerpts in the **Book Section** below, or order the Collector's Hardcover and digital editions today!*`;
  }

  if (query.includes('scry') || query.includes('practice') || query.includes('drill') || query.includes('target') || query.includes('coordinate')) {
    return `### The Scry Practice Engine (scrying.cloud.run)

**Scry** is purposefully kept as a pure, distraction-free practice environment. Here is how you use it:

1. **Get Blind Coordinates:** Scry generates an 8-character randomized coordinate (e.g. \`8492-1048\`) linked to an encrypted target.
2. **Execute Stage 1 Ideogram:** On your physical sketchpad or on the digital canvas, capture your instant sensory reflex within 200 milliseconds.
3. **Log Sensory Descriptors:** Select colors, textures, temperatures, and energetic gestalts.
4. **Quarantine AOLs:** Whenever your rational brain suggests a label (*"Looks like a bridge"*), declare it in the AOL tray to keep your channel clean.
5. **Blind Judge Mode:** Before reveal, evaluate 4 blind candidates to test your hit calibration against randomized decoys.

*Click the **'Launch Scry'** button on this page to jump straight into a live session!*`;
  }

  return `Greetings. I am **Amathiest**, the guide on Malychite's remote viewing site. I am here to help you navigate coordinate remote viewing, the history of Project Stargate, and the principles in **Journey Through Dimensions**.

Here is how I can assist you right now:
- **Master the Protocol:** Inquire about Ingo Swann's 6 stages of CRV, ideogram capture, or sensory calibration.
- **Overcome Mental Blocks:** Learn how to declare and quench Analytic Overlay (AOL) to preserve your signal-to-noise ratio.
- **Explore Deep Theory:** Discover key chapters and quantum holoflux mechanics from Malychite's book *Journey Through Dimensions*.
- **Start Practical Training:** Launch the **Scry Practice Engine** to begin blind target sessions right away.

What aspect of non-local perception would you like to explore?`;
}

// AI Studio / Gemini conversational chat endpoint
app.post('/api/chat', async (req: Request, res: Response) => {
  try {
    const { message, history } = req.body;

    if (!message || typeof message !== 'string') {
      res.status(400).json({ error: 'A valid message string is required.' });
      return;
    }

    const apiKey = process.env.GEMINI_API_KEY;

    // If Gemini API key is available, call Gemini 3.8 Flash
    if (apiKey) {
      try {
        const ai = new GoogleGenAI({ apiKey });
        
        // Build conversation contents
        const contents = [];
        
        if (Array.isArray(history)) {
          for (const item of history) {
            if (item && item.role && item.text) {
              contents.push({
                role: item.role === 'assistant' ? 'model' : 'user',
                parts: [{ text: item.text }],
              });
            }
          }
        }

        // Add current user message
        contents.push({
          role: 'user',
          parts: [{ text: message }],
        });

        const response = await ai.models.generateContent({
          model: 'gemini-3.8-flash',
          contents,
          config: {
            systemInstruction: AMETIEST_SYSTEM_PROMPT,
            temperature: 0.7,
            topP: 0.95,
          },
        });

        const replyText = response.text || '';
        res.json({
          reply: replyText,
          source: 'gemini-3.8-flash',
        });
        return;
      } catch (geminiError: any) {
        console.warn('Gemini API call failed, falling back to Malychite knowledge base:', geminiError?.message || geminiError);
        // Fall back to intelligent knowledge engine
      }
    }

    // Smart fallback with rich Malychite research notebook responses
    const fallbackReply = generateNotebookFallback(message);
    res.json({
      reply: fallbackReply,
      source: 'notebook-engine',
    });
  } catch (error: any) {
    console.error('Error handling /api/chat:', error);
    res.status(500).json({
      error: 'Failed to process conversation.',
      details: error?.message || 'Internal server error',
    });
  }
});

// Setup Vite middleware in development or serve dist in production
async function startServer() {
  if (!isProduction) {
    const { createServer } = await import('vite');
    const vite = await createServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req: Request, res: Response) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(port, '0.0.0.0', () => {
    console.log(`Malychite Portal & Server listening on port ${port} (mode: ${isProduction ? 'production' : 'development'})`);
  });
}

startServer();
