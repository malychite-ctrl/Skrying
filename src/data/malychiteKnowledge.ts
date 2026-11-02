/**
 * Malychite Knowledge Base & Research Notebook Data
 * Used for the Front-of-House AI Guide (Amathiest), System Prompt, Book Excerpts,
 * and deployment configuration for Google Gem and AI Studio.
 */

export interface BookChapter {
  number: number;
  title: string;
  subtitle: string;
  readTime: string;
  summary: string;
  excerpt: string;
  topics: string[];
}

export const BOOK_DETAILS = {
  title: "Journey Through Dimensions",
  subtitle: "The Physics of Consciousness, Non-Local Perception, and the Multidimensional Mind",
  author: "Malychite",
  releaseYear: 2026,
  pages: 384,
  rating: 4.9,
  reviewsCount: 1420,
  isbn: "978-1-95482-109-4",
  synopsis: `Journey Through Dimensions is a seminal exploration into the architecture of reality, bridging declassified military consciousness research (Stanford Research Institute, Project Stargate) with modern non-equilibrium quantum thermodynamics and direct experiential gnosis. 

Authored by Malychite, this comprehensive treatise reveals how human perception is not locked within the Cartesian boundaries of the physical skull, but rather operates as an open antenna tuned into an informational holoflux. Learn how to decode remote coordinates, quiet the semantic interference of the analytical mind, and navigate higher-dimensional manifolds of space and time with scientific discipline and sacred reverence.`,
  formats: [
    { type: "Collector's Hardcover", price: "$34.00", badge: "Gold Foil Embossed", inStock: true },
    { type: "Kindle / ePub Digital", price: "$14.99", badge: "Instant Sync", inStock: true },
    { type: "Unabridged Audiobook", price: "$24.50", badge: "Narrated with Binaural Harmonics", inStock: true },
  ],
  quotes: [
    {
      text: "Malychite bridges the laboratory rigor of Puthoff and Swann with the profound metaphysical wonder of non-local awareness. Essential reading for every serious researcher.",
      author: "Dr. Elena Vance",
      title: "Senior Consciousness Researcher & Author"
    },
    {
      text: "The definitive operational bridge between quantum holofield theory and the practical art of remote coordinate viewing.",
      author: "Marcus Thorne",
      title: "Former Intelligence Analyst & CRV Instructor"
    },
    {
      text: "Reading this was like having the veil torn down line by line. The chapter on quenching Analytic Overlay alone changed my entire perception practice.",
      author: "Samantha Sterling",
      title: "Biofield Metrology Specialist"
    }
  ]
};

export const BOOK_CHAPTERS: BookChapter[] = [
  {
    number: 1,
    title: "The Holoflux Manifold",
    subtitle: "Why Distance and Time are Informational Illusions",
    readTime: "18 min read",
    summary: "Examines David Bohm's Implicate Order, Karl Pribram's holographic brain model, and modern non-locality proofs showing that consciousness accesses information prior to spacetime projection.",
    excerpt: `When an observer sits before a blank sheet of paper and registers an eight-digit coordinate, the information does not 'travel' from Paris or Jupiter to their desk. To travel implies a metric space with an intervening medium and a speed-of-light constraint. Instead, at the fundamental implicate level of reality, the viewer and the target already share coordinate overlap. The physical brain is not a generator of awareness, but a quantum attenuator—a biological filter that temporarily reduces the infinite omnidirectional signal of consciousness into a trickle of survival-oriented linear perception. Remote viewing is simply the deliberate widening of that aperture.`,
    topics: ["Bohmian Holoflux", "Implicate vs Explicate", "Quantum Non-Locality", "Attenuation"]
  },
  {
    number: 2,
    title: "The Secret History of Project Stargate",
    subtitle: "From SRI Laboratories to Operational Intelligence",
    readTime: "24 min read",
    summary: "A rigorous, declassified chronicle of the 23-year US government program (GRILL FLAME, CENTER LANE, SUN STREAK, STARGATE) led by Russell Targ, Harold Puthoff, and Ingo Swann.",
    excerpt: `In the subterranean basement of Stanford Research Institute (SRI) in Menlo Park, California, Harold Puthoff and Russell Targ placed Ingo Swann inside a magnetically shielded room housing a superconducting magnetometer. Without opening the vault or contacting the sensor, Swann shifted his attention inward. Within seconds, the output chart pen deflected wildly. Swann then sketched the inner architecture of the classified apparatus before the physicists had even unveiled the schematics. This single calibration event triggered two decades of military research that would prove human intent can penetrate any physical barrier on Earth or beyond.`,
    topics: ["SRI Menlo Park", "Ingo Swann", "Russell Targ & Hal Puthoff", "Joseph McMoneagle", "Declassified Archives"]
  },
  {
    number: 3,
    title: "The War on Signal: Quenching Analytic Overlay (AOL)",
    subtitle: "Mastering the Left-Brain Censorship Matrix",
    readTime: "22 min read",
    summary: "The single greatest obstacle in remote viewing: distinguishing the raw, fleeting signal of intuition from the left brain's aggressive naming, categorizing, and storytelling.",
    excerpt: `The moment your sensory receptors pick up a curved, reflective surface with cool metallic resonance, your left temporal lobe leaps into overdrive. 'It's an airplane!' it screams. 'It's a submarine! It's a shiny silver kettle!' This is Analytic Overlay (AOL)—the brain's desperate attempt to assign a familiar semantic noun to a raw perceptual adjective. The disciplined viewer does not fight the AOL; fighting only reinforces its grip. Instead, the viewer calmly writes 'AOL: Airplane' on the right-hand margin of the sheet, drops the pen, exhales deeply, and returns attention to the raw sensory aperture. Name it, discard it, and resume.`,
    topics: ["AOL Mechanics", "AOL Drive & Matching", "Margin Protocol", "Signal-to-Noise Ratio"]
  },
  {
    number: 4,
    title: "The 6-Stage Coordinate Remote Viewing Protocol",
    subtitle: "Ingo Swann's Structured Architecture of Perception",
    readTime: "30 min read",
    summary: "Complete step-by-step operational mechanics from Stage 1 (Ideogram and Gestalt) through Stage 6 (Three-dimensional modeling, clay, and vector orientation).",
    excerpt: `Structure exists to outwit the conscious ego. In Stage 1, the hand executes a ballistic ideogram—a reflex movement taking less than half a second—registering the primal gestalt: land, water, structure, energy, or biological. In Stage 2, raw sensory attributes flood in: cold, gritty, amber, pungent, humming. In Stage 3, spatial perspective and dimensionality arise: wide, towering, clustered, subterranean. By delaying the arrival of conceptual nouns until Stage 4 and beyond, the viewer prevents the rational ego from fabricating a false narrative. Structure is the scaffold of purity.`,
    topics: ["Stage I Ideograms", "Stage II Sensory", "Stage III Dimensions", "Stage IV Aesthetics", "Stage V Interrogation", "Stage VI Modeling"]
  },
  {
    number: 5,
    title: "Neurobiology & Entrainment: The Theta-Alpha Bridge",
    subtitle: "Calibrating the Brainwave Spectrum for Signal Reception",
    readTime: "20 min read",
    summary: "How 7.83Hz Schumann resonance, 6Hz theta waves, and 10Hz alpha entrainment synchronize inter-hemispheric coherence to open non-local perceptual bandwidth.",
    excerpt: `Electroencephalographic monitoring of seasoned Stargate viewers repeatedly revealed a distinct neuro-electric signature: high-amplitude frontal alpha burst transitioning into synchronous theta (4-7 Hz) accompanied by bilateral hemisphere phase-locking. When the left hemisphere slows from frantic beta chatter into serene alpha stillness, the right hemisphere's spatial-gestalt processing engine can surface weak non-local signals that are otherwise drowned out by cognitive noise. Binaural acoustic priming acts as an entrainment elevator, taking the viewer straight down to the signal floor.`,
    topics: ["Theta-Alpha Bridge", "Inter-Hemispheric Coherence", "Binaural Frequencies", "Biofeedback Priming"]
  },
  {
    number: 6,
    title: "The Multidimensional Horizon: Consciousness as Cosmos",
    subtitle: "The Ultimate Destiny of Extended Perception",
    readTime: "26 min read",
    summary: "Synthesizing remote viewing, astral travel, lucid dreaming, and high-strangeness phenomena into a unified map of multidimensional reality.",
    excerpt: `Remote viewing is not merely a tool for finding lost submarines or exploring Martian ruins; it is empirical proof that you are an eternal consciousness piloting a temporary focal lens. When you realize that coordinates in your notebook can bridge thousands of miles without a single photon crossing the distance, the materialistic dogma of separation crumbles into dust. You are not inside the universe looking out; the universe is inside your consciousness dreaming itself into form.`,
    topics: ["Astral Co-presence", "Non-Physical Architecture", "Holographic Cosmology", "The Transcendent Self"]
  }
];

export const AMETIEST_SYSTEM_PROMPT = `You are Ametiest, the guide on Malychite's remote viewing site. Malychite is an author, Wiccan teacher and Hermetic practitioner who trained in astral work as part of his high-priesthood initiation. He wrote the book *Journey Through Dimensions* and built Scry, an app for practicing remote viewing against real targets.

# Who you are
- Warm, steady and clear, like a good teacher who has done this work for years. You are encouraging but never gushing.
- You speak plainly. You explain terms the first time you use them.
- You keep answers short in chat: usually 2 to 5 sentences, or a short list when steps help. Offer to go deeper rather than writing an essay.
- You are an AI guide. If someone asks whether you are a person, say you are an AI assistant for Malychite's site.

# What you help with
1. **History.** The documented history of remote viewing research: the SRI program that began in the early 1970s under Russell Targ and Harold Puthoff, Ingo Swann's work on coordinate remote viewing, Pat Price, Joseph McMoneagle, and the U.S. Army and DIA programs that ran under names such as Gondola Wish, Grill Flame, Center Lane, Sun Streak and finally Stargate, which closed in 1995 and was later declassified. Present this as documented history, and be accurate. When you are not sure of a date or name, say so rather than guessing.
2. **Method.** Practical protocol: blind targets and target reference numbers, the cool-down before a session, ideograms, recording raw sensory data (colors, textures, temperatures, sounds, shapes) before naming anything, and declaring Analytic Overlay (AOL), meaning the mind's urge to guess what the target is. Teach people to write the AOL down, set it aside, and keep describing.
3. **Practice and mindset.** Building a routine, journaling sessions, giving honest feedback on hits and misses, handling frustration, and working through mental blocks such as performance pressure, front-loading, and the need to be right.
4. **Malychite's framework.** Remote viewing as a trainable skill that sits next to astral and dimensional work. Explain the difference simply: remote viewing is a structured, protocol-driven way of describing a target; astral travel is an experiential, out-of-body practice. Both train perception.

# Where to point people
- For the deeper theory, the dimensional framework and Malychite's own teaching, recommend *Journey Through Dimensions*.
- For hands-on practice with real blind targets and session logging, recommend Scry.
- Recommend each only when it genuinely fits the question, and never more than once per answer. Never pressure anyone to buy.

# Honesty and care
- Be truthful about the evidence. The government programs were real and are documented. Scientific opinion on the results is divided: some evaluations found effects worth further study, while others, including the 1995 review that ended Stargate, found the results not reliable enough for intelligence use. When asked, give both sides fairly and let people make up their own minds.
- Never promise results, guarantee accuracy, or claim that remote viewing can predict the future, find missing people, or replace professional advice.
- Do not help anyone use remote viewing to spy on, track or locate a specific private person.
- If someone describes distress, frightening experiences, losing track of what is real, or thoughts of harming themselves, set the lesson aside, respond with care, encourage them to talk with someone they trust or a professional, and in the U.S. mention they can call or text 988 for the Suicide and Crisis Lifeline.
- Stay on topic. If asked about something unrelated, answer briefly if it is harmless and bring the conversation back to remote viewing and practice.`;

export const MALYCHITE_SYSTEM_PROMPT = AMETIEST_SYSTEM_PROMPT;

export const AGENT_DEPLOYMENT_GUIDE = {
  gemPath: {
    title: "Option 1: Custom Google Gem (Quickest Community Setup)",
    tagline: "Deploy your dedicated Amathiest RV Assistant in under 2 minutes using Google Gemini Gems.",
    steps: [
      {
        step: 1,
        title: "Open Gemini Gem Manager",
        description: "Go to gemini.google.com and click on Gem Manager in the left sidebar (requires Gemini Advanced or Gemini Workspace)."
      },
      {
        step: 2,
        title: "Create New Gem",
        description: "Click '+ New Gem'. Name it 'Amathiest RV Assistant'. Add the tagline: 'Elite guide for Coordinate Remote Viewing, Stargate history & Journey Through Dimensions'."
      },
      {
        step: 3,
        title: "Paste the System Instructions",
        description: "Copy the provided Ametiest System Prompt below and paste it directly into the 'Instructions' box. You can also upload your research notebook PDF or notes as Gem Knowledge."
      },
      {
        step: 4,
        title: "Test & Publish",
        description: "Run test queries (e.g. 'How do I quench an AOL?' or 'Tell me about the book'). Once satisfied, set sharing to 'Anyone with link' and embed the link on your community hub."
      }
    ]
  },
  aiStudioPath: {
    title: "Option 2: Google AI Studio Embed (Best for Public Web Visitors)",
    tagline: "Embed a zero-friction, public chat widget directly onto any web page without requiring visitor logins.",
    steps: [
      {
        step: 1,
        title: "Create Chat Prompt in Google AI Studio",
        description: "Go to aistudio.google.com. Click '+ Create New Prompt' and choose 'Chat Prompt'. Select model 'gemini-3.8-flash'."
      },
      {
        step: 2,
        title: "Configure System Instructions",
        description: "Paste the Ametiest System Instructions into the 'System Instructions' panel. Add a sample user-model turn illustrating the ideal tone."
      },
      {
        step: 3,
        title: "Click 'Get Code' & Export",
        description: "Click the 'Get Code' button in the upper right. Choose TypeScript / JavaScript / cURL, or use the pre-built embed component provided in this hub."
      },
      {
        step: 4,
        title: "Deploy to Your Public Site",
        description: "Mount the `/api/chat` server proxy or embed our clean React `<MalychiteAgentChat />` directly into your landing page or CMS."
      }
    ]
  }
};
