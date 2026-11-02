import React, { useState } from 'react';
import { 
  Sparkles, 
  Compass, 
  BookOpen, 
  Bot, 
  Layers, 
  ShieldCheck, 
  Play, 
  ArrowRight, 
  Radio, 
  HelpCircle, 
  ExternalLink,
  ChevronDown,
  Atom,
  Lock,
  Search,
  Code
} from 'lucide-react';
import { MalychiteAgentChat } from './MalychiteAgentChat';
import { JourneyThroughDimensionsBook } from './JourneyThroughDimensionsBook';
import { ScryShowcaseSection } from './ScryShowcaseSection';
import { AgentDeploymentGuideModal } from './AgentDeploymentGuideModal';

interface MalychiteHubProps {
  onLaunchScry: () => void;
  onOpenAmbientRadio?: () => void;
}

export const MalychiteHub: React.FC<MalychiteHubProps> = ({
  onLaunchScry,
  onOpenAmbientRadio,
}) => {
  const [isDeployGuideOpen, setIsDeployGuideOpen] = useState(false);
  const [selectedAgentTopic, setSelectedAgentTopic] = useState<string | null>(null);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAskAgentAbout = (topic?: string) => {
    scrollToSection('agent-section');
    if (topic) {
      setSelectedAgentTopic(topic);
    }
  };

  return (
    <div className="w-full text-[#E0E2EC]">
      {/* Hero Section */}
      <section className="relative pt-16 sm:pt-24 pb-20 px-4 sm:px-6 max-w-7xl mx-auto text-center overflow-hidden">
        {/* Ambient Backlight Radiance */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-[#7C3AED]/20 via-[#3B82F6]/15 to-[#2DD4BF]/20 blur-3xl pointer-events-none -z-10 rounded-full" />

        {/* Brand Crest */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#141738] border border-[#2DD4BF]/40 text-[#2DD4BF] text-xs font-mono-code mb-6 shadow-lg shadow-[#2DD4BF]/10">
          <span className="w-2 h-2 rounded-full bg-[#2DD4BF] animate-ping" />
          <span>DECLASSIFIED CONSCIOUSNESS & CRV MATRIX</span>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-display tracking-tight text-white max-w-5xl mx-auto leading-tight">
          Perception Beyond <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D8B4FE] via-[#C4B5FD] to-[#2DD4BF]">
            Spacetime Constraints
          </span>
        </h1>

        {/* Subhead */}
        <p className="mt-6 text-base sm:text-xl text-[#9FA6D1] max-w-3xl mx-auto leading-relaxed font-sans">
          Welcome to the unified hub for <strong className="text-white">Malychite</strong>. 
          Consult our interactive AI Guide, delve into the quantum metaphysics of <em className="text-[#C4B5FD] not-italic font-semibold">Journey Through Dimensions</em>, 
          and train your sensory accuracy with the <span className="text-[#2DD4BF] font-semibold">Scry Practice Engine</span>.
        </p>

        {/* Hero CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => scrollToSection('agent-section')}
            className="w-full sm:w-auto px-7 py-4 rounded-xl bg-gradient-to-r from-[#7C3AED] via-[#6366F1] to-[#2DD4BF] hover:opacity-95 text-[#080914] font-bold font-display text-sm tracking-wider uppercase flex items-center justify-center gap-2 shadow-xl shadow-[#7C3AED]/30 transition-all active:scale-95"
          >
            <Bot className="w-4 h-4" />
            <span>Consult Malychite Guide</span>
          </button>

          <button
            type="button"
            onClick={onLaunchScry}
            className="w-full sm:w-auto px-7 py-4 rounded-xl bg-[#141738] border border-[#2DD4BF]/50 hover:border-[#2DD4BF] text-[#2DD4BF] hover:text-white font-bold font-display text-sm tracking-wider uppercase flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg shadow-[#2DD4BF]/10"
          >
            <Compass className="w-4 h-4 text-[#2DD4BF]" />
            <span>Launch Scry Engine</span>
          </button>

          <button
            type="button"
            onClick={() => scrollToSection('book-section')}
            className="w-full sm:w-auto px-6 py-4 rounded-xl bg-[#0E1026] border border-[#242A5C] hover:border-[#C4B5FD] text-[#C4B5FD] font-semibold text-sm flex items-center justify-center gap-2 transition-all"
          >
            <BookOpen className="w-4 h-4" />
            <span>Explore the Book</span>
          </button>
        </div>

        {/* 3 Pillars Overview Bar */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto text-left">
          <div 
            onClick={() => scrollToSection('agent-section')}
            className="p-5 rounded-2xl bg-[#0E1026]/90 border border-[#242A5C] hover:border-[#7C3AED]/60 cursor-pointer transition-all hover:bg-[#121535] group"
          >
            <div className="flex items-center justify-between text-xs font-mono-code text-[#7C3AED] mb-2">
              <span className="flex items-center gap-1.5 text-[#C4B5FD]">
                <Bot className="w-3.5 h-3.5" /> THE AGENT
              </span>
              <span className="text-[#71779E] group-hover:text-white transition-colors">&rarr;</span>
            </div>
            <h3 className="font-bold font-display text-white text-base">The Front-of-House Guide</h3>
            <p className="text-xs text-[#8A90B8] mt-1 leading-relaxed">
              Trained on Malychite's research notebook. Clarifies CRV protocols, quenches mental blocks, and answers questions 24/7.
            </p>
          </div>

          <div 
            onClick={() => scrollToSection('book-section')}
            className="p-5 rounded-2xl bg-[#0E1026]/90 border border-[#242A5C] hover:border-[#C4B5FD]/60 cursor-pointer transition-all hover:bg-[#121535] group"
          >
            <div className="flex items-center justify-between text-xs font-mono-code text-[#C4B5FD] mb-2">
              <span className="flex items-center gap-1.5 text-[#D8B4FE]">
                <BookOpen className="w-3.5 h-3.5" /> THE BOOK
              </span>
              <span className="text-[#71779E] group-hover:text-white transition-colors">&rarr;</span>
            </div>
            <h3 className="font-bold font-display text-white text-base">Journey Through Dimensions</h3>
            <p className="text-xs text-[#8A90B8] mt-1 leading-relaxed">
              Our core theoretical foundation. Bridges Bohmian quantum holography with military intelligence records.
            </p>
          </div>

          <div 
            onClick={onLaunchScry}
            className="p-5 rounded-2xl bg-[#0E1026]/90 border border-[#242A5C] hover:border-[#2DD4BF]/60 cursor-pointer transition-all hover:bg-[#121535] group"
          >
            <div className="flex items-center justify-between text-xs font-mono-code text-[#2DD4BF] mb-2">
              <span className="flex items-center gap-1.5 text-[#5EEAD4]">
                <Compass className="w-3.5 h-3.5" /> THE APP
              </span>
              <span className="text-[#71779E] group-hover:text-white transition-colors">&rarr;</span>
            </div>
            <h3 className="font-bold font-display text-white text-base">Scry Practice Engine</h3>
            <p className="text-xs text-[#8A90B8] mt-1 leading-relaxed">
              Clean, distraction-free software tool for blind coordinate drills, ideogram sketching, and declaring AOL.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 1: The Malychite Agent / Bot Embed Window */}
      <section id="agent-section" className="py-16 px-4 sm:px-6 max-w-5xl mx-auto scroll-mt-20">
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181B3C] border border-[#7C3AED]/40 text-[#D8B4FE] text-xs font-mono-code mb-3">
            <Bot className="w-3.5 h-3.5 text-[#2DD4BF]" />
            <span>Interactive Front-of-House Expert</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-white">
            Meet Amathiest, Your AI RV Guide
          </h2>
          <p className="text-sm text-[#9FA6D1] mt-2">
            Ask questions about declassified history, CRV protocols, avoiding mental blocks, or the theory in our book.
          </p>
        </div>

        {/* Embedded Live Agent Window */}
        <MalychiteAgentChat 
          onLaunchScry={onLaunchScry}
          onOpenBookSection={() => scrollToSection('book-section')}
          onOpenDeployGuide={() => setIsDeployGuideOpen(true)}
        />
      </section>

      {/* SECTION 2: Journey Through Dimensions (The Book) */}
      <JourneyThroughDimensionsBook 
        onLaunchScry={onLaunchScry}
        onAskAgentAboutBook={(topic) => handleAskAgentAbout(topic)}
      />

      {/* SECTION 3: Scry (The Pure Practice Engine) */}
      <ScryShowcaseSection 
        onLaunchScry={onLaunchScry}
      />

      {/* SECTION 4: Declassified SRI & Stargate Heritage */}
      <section className="py-16 px-4 sm:px-6 max-w-7xl mx-auto border-t border-[#242A5C]/60">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-mono-code text-[#2DD4BF] tracking-wider uppercase">
            Rigorous Historical Lineage
          </span>
          <h3 className="text-2xl sm:text-4xl font-bold font-display text-white mt-1">
            Built on 23 Years of Declassified Science
          </h3>
          <p className="mt-3 text-xs sm:text-sm text-[#8A90B8]">
            We follow the empirical methodologies documented in CIA, DIA, and INSCOM declassified archives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-[#090B1A] border border-[#242A5C] text-left">
            <span className="text-xs font-mono-code text-[#C4B5FD]">1972 — 1978</span>
            <h4 className="text-sm font-bold font-display text-white mt-1">SRI Early Calibrations</h4>
            <p className="text-xs text-[#71779E] mt-2 leading-relaxed">
              Harold Puthoff and Russell Targ validate non-local coordinate viewing under shielded laboratory conditions.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#090B1A] border border-[#242A5C] text-left">
            <span className="text-xs font-mono-code text-[#2DD4BF]">1978 — 1985</span>
            <h4 className="text-sm font-bold font-display text-white mt-1">GRILL FLAME & CRV</h4>
            <p className="text-xs text-[#71779E] mt-2 leading-relaxed">
              Ingo Swann codifies the 6-stage protocol and establishes the AOL Quenching quarantine protocol.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#090B1A] border border-[#242A5C] text-left">
            <span className="text-xs font-mono-code text-[#5EEAD4]">1985 — 1991</span>
            <h4 className="text-sm font-bold font-display text-white mt-1">SUN STREAK Operations</h4>
            <p className="text-xs text-[#71779E] mt-2 leading-relaxed">
              Fort Meade remote viewing unit applies coordinate protocols to counter-narcotics and hostages.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#090B1A] border border-[#242A5C] text-left">
            <span className="text-xs font-mono-code text-[#D8B4FE]">1995 — PRESENT</span>
            <h4 className="text-sm font-bold font-display text-white mt-1">Stargate Declassification</h4>
            <p className="text-xs text-[#71779E] mt-2 leading-relaxed">
              CIA archives made public, opening the protocol for civilian research, training engines, and literature.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 5: Deploy Guide Trigger Banner */}
      <section className="py-12 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-[#181B3C] via-[#10142F] to-[#0D152B] border border-[#242A5C] rounded-3xl p-6 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-mono-code text-[#2DD4BF]">
              <Code className="w-4 h-4" />
              <span>CREATOR ARCHITECTURE TOOLKIT</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
              Deploy Your Own Malychite Agent
            </h3>
            <p className="text-xs sm:text-sm text-[#9FA6D1] max-w-xl">
              Export the complete system instructions for a custom Google Gem or grab the AI Studio embed code to host this widget on any site.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <button
              type="button"
              onClick={() => setIsDeployGuideOpen(true)}
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#2DD4BF] text-[#080914] font-bold text-xs uppercase tracking-wider font-display flex items-center justify-center gap-2 shadow-lg shadow-[#7C3AED]/20 active:scale-95"
            >
              <Code className="w-4 h-4" />
              <span>View Deployment Guide</span>
            </button>

            <button
              type="button"
              onClick={onLaunchScry}
              className="px-5 py-3.5 rounded-xl bg-[#090B1A] border border-[#2DD4BF]/50 text-[#2DD4BF] hover:text-white font-semibold text-xs flex items-center justify-center gap-2"
            >
              <Compass className="w-4 h-4" />
              <span>Launch Scry</span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#242A5C]/60 bg-[#060710] py-12 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto space-y-8">
          {/* Ecosystem Breakdown Row */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs text-[#9FA6D1] pb-6 border-b border-[#242A5C]/40">
            <span className="flex items-center gap-1.5 text-[#2DD4BF] font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Malychite Non-Local Ecosystem:</span>
            </span>
            <span className="flex items-center gap-1">
              <span className="text-white font-medium">1. Scry</span> (Pure Practice Engine)
            </span>
            <span className="text-[#353D82]">·</span>
            <span className="flex items-center gap-1">
              <span className="text-white font-medium">2. The Agent</span> (24/7 Front-of-House Guide)
            </span>
            <span className="text-[#353D82]">·</span>
            <span className="flex items-center gap-1">
              <span className="text-white font-medium">3. The Book</span> (Journey Through Dimensions)
            </span>
            <button
              type="button"
              onClick={() => setIsDeployGuideOpen(true)}
              className="text-xs font-mono-code text-[#C4B5FD] hover:text-white underline underline-offset-2 ml-1 flex items-center gap-1"
            >
              <span>Deploy Guide</span>
              <span>&rarr;</span>
            </button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-[#71779E]">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 rounded-lg bg-[#181B3C] border border-[#2DD4BF]/40 flex items-center justify-center text-[#2DD4BF]">
                <Sparkles className="w-3.5 h-3.5" />
              </div>
              <div>
                <span className="font-display font-bold text-white text-sm tracking-wider">MALYCHITE</span>
                <p className="text-[10px] text-[#5A6087]">Non-Local Perception & Coordinate Research</p>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-6">
              <button
                type="button"
                onClick={() => scrollToSection('agent-section')}
                className="hover:text-[#5EEAD4] transition-colors"
              >
                AI Guide
              </button>
              <button
                type="button"
                onClick={() => scrollToSection('book-section')}
                className="hover:text-[#5EEAD4] transition-colors"
              >
                The Book
              </button>
              <button
                type="button"
                onClick={onLaunchScry}
                className="hover:text-[#2DD4BF] transition-colors font-semibold"
              >
                Scry Practice Engine
              </button>
              <button
                type="button"
                onClick={() => setIsDeployGuideOpen(true)}
                className="hover:text-[#C4B5FD] transition-colors"
              >
                Deployment Guide
              </button>
            </div>

            <div className="text-[11px] font-mono-code text-[#5A6087]">
              &copy; {new Date().getFullYear()} Malychite. All rights reserved.
            </div>
          </div>
        </div>
      </footer>

      {/* Deployment Guide Modal */}
      <AgentDeploymentGuideModal 
        isOpen={isDeployGuideOpen}
        onClose={() => setIsDeployGuideOpen(false)}
      />
    </div>
  );
};
