import React from 'react';
import { 
  Compass, 
  Eye, 
  ShieldAlert, 
  Layers, 
  BarChart3, 
  Play, 
  Sparkles, 
  ArrowRight, 
  Zap, 
  Radio, 
  Target as TargetIcon,
  CheckCircle2
} from 'lucide-react';

interface ScryShowcaseSectionProps {
  onLaunchScry: () => void;
}

export const ScryShowcaseSection: React.FC<ScryShowcaseSectionProps> = ({ onLaunchScry }) => {
  return (
    <section id="scry-section" className="py-16 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#142338] border border-[#2DD4BF]/40 text-[#2DD4BF] text-xs font-mono-code mb-4">
          <Compass className="w-3.5 h-3.5" />
          <span>The Pure Practice Engine · scrying.cloud.run</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold font-display text-white tracking-tight leading-tight">
          Scry Practice Cockpit
        </h2>
        <p className="mt-4 text-base sm:text-lg text-[#9FA6D1] leading-relaxed">
          Laser-focused on target acquisition, coordinate logging, ideograms, and declaring Analytic Overlay (AOL). 
          Zero marketing fluff inside the cockpit—pure operational discipline.
        </p>
      </div>

      {/* Hero Showcase Card */}
      <div className="bg-[#0A0C1C] border border-[#242A5C] rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#2DD4BF] animate-ping" />
              <span className="text-xs font-mono-code text-[#2DD4BF] uppercase tracking-wider">
                Live Coordinate Engine Ready
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
              Strictly Protocol-Compliant Testing & Calibration
            </h3>

            <p className="text-sm sm:text-base text-[#C2C7E8] leading-relaxed">
              When entering the operational viewing state, any cognitive distraction reduces your signal-to-noise ratio. 
              That is why Scry is engineered as a standalone, distraction-free environment:
            </p>

            {/* Checklist */}
            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#2DD4BF] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Cryptographic Blind Coordinates</h4>
                  <p className="text-xs text-[#8A90B8]">
                    Randomized 8-character hashes linked to encrypted targets prevent subconscious frontloading.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#2DD4BF] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">Built-in AOL Quenching Margin</h4>
                  <p className="text-xs text-[#8A90B8]">
                    Dedicated quarantine panel allows viewers to record left-brain guesses, drop the pen, and reset their aperture.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#2DD4BF] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-white">4-Way Blind Candidate Judge Mode</h4>
                  <p className="text-xs text-[#8A90B8]">
                    Blind evaluation against decoys before unmasking the target prevents post-hoc confirmation bias.
                  </p>
                </div>
              </div>
            </div>

            {/* Launch CTA */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                type="button"
                onClick={onLaunchScry}
                className="py-4 px-8 rounded-xl bg-gradient-to-r from-[#2DD4BF] via-[#5EEAD4] to-[#C4B5FD] hover:from-white hover:to-[#2DD4BF] text-[#080914] font-bold font-display text-sm tracking-wider uppercase flex items-center justify-center gap-2 shadow-xl shadow-[#2DD4BF]/20 transition-all active:scale-95"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>Launch Scry Practice Engine</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <span className="text-xs font-mono-code text-[#71779E] text-center sm:text-left">
                Hosted at <span className="text-[#2DD4BF]">scrying.cloud.run</span>
              </span>
            </div>
          </div>

          {/* Right Interactive Preview Cockpit */}
          <div className="lg:col-span-5 bg-[#080914] border border-[#242A5C] rounded-2xl p-6 shadow-inner relative">
            <div className="flex items-center justify-between border-b border-[#242A5C]/60 pb-3 mb-4">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
                <span className="text-[11px] font-mono-code text-[#8A90B8] ml-2">SCRY // SESSION COCKPIT</span>
              </div>
              <span className="text-[10px] font-mono-code text-[#2DD4BF] px-2 py-0.5 rounded bg-[#162B3D] border border-[#2DD4BF]/30">
                ACTIVE
              </span>
            </div>

            {/* Target Coordinate Display */}
            <div className="bg-[#0F122B] border border-[#242A5C] rounded-xl p-4 text-center mb-4">
              <span className="text-[10px] uppercase font-mono-code text-[#71779E] block mb-1">
                BLIND TARGET COORDINATE
              </span>
              <span className="text-2xl sm:text-3xl font-mono-code font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#D8B4FE] to-[#2DD4BF] tracking-widest">
                8492 — 1048
              </span>
              <div className="text-[10px] text-[#A78BFA] mt-1">Stage 1 Coordinate Priming</div>
            </div>

            {/* Mini Ideogram Mockup */}
            <div className="bg-[#05060D] border border-[#242A5C] rounded-xl p-3 h-28 relative flex items-center justify-center mb-4 overflow-hidden">
              <svg className="w-full h-full stroke-[#2DD4BF]" viewBox="0 0 200 80" fill="none">
                <path d="M 20 60 Q 60 10 100 45 T 180 30" strokeWidth="2.5" strokeLinecap="round" />
                <circle cx="20" cy="60" r="3" fill="#2DD4BF" />
                <circle cx="180" cy="30" r="3" fill="#D8B4FE" />
              </svg>
              <span className="absolute bottom-1.5 right-2 text-[9px] font-mono-code text-[#71779E]">
                Ballistic Ideogram: Wave / Dynamic
              </span>
            </div>

            {/* Simulated AOL Quarantine Pill */}
            <div className="p-2.5 rounded-lg bg-[#2E1218]/40 border border-[#EF4444]/40 flex items-center justify-between text-xs mb-4">
              <div className="flex items-center gap-1.5 text-[#FCA5A5]">
                <ShieldAlert className="w-3.5 h-3.5 text-[#EF4444]" />
                <span className="font-mono-code text-[11px]">AOL DECLARED: "Ocean Pier"</span>
              </div>
              <span className="text-[9px] text-[#EF4444] uppercase font-mono-code bg-[#EF4444]/10 px-1.5 py-0.5 rounded">
                QUENCHED
              </span>
            </div>

            {/* Cockpit Mini Button */}
            <button
              type="button"
              onClick={onLaunchScry}
              className="w-full py-2.5 rounded-lg bg-[#181B3C] border border-[#2DD4BF]/50 hover:bg-[#2DD4BF] hover:text-[#080914] text-[#2DD4BF] text-xs font-semibold font-display tracking-wider uppercase transition-all flex items-center justify-center gap-1.5"
            >
              <span>Engage Live Practice Session</span>
              <ChevronRightIcon className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Feature Pillar Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl bg-[#0D0F24] border border-[#242A5C] space-y-3">
          <div className="w-10 h-10 rounded-xl bg-[#1B2544] text-[#2DD4BF] flex items-center justify-center border border-[#2DD4BF]/30">
            <TargetIcon className="w-5 h-5" />
          </div>
          <h4 className="text-lg font-bold font-display text-white">Coordinate Generation</h4>
          <p className="text-xs text-[#8A90B8] leading-relaxed">
            Targets curated across 3 difficulty tiers (Natural Landforms, Manmade Architectural Gestalts, Complex Dynamic Events).
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-[#0D0F24] border border-[#242A5C] space-y-3">
          <div className="w-10 h-10 rounded-xl bg-[#2A183C] text-[#C4B5FD] flex items-center justify-center border border-[#C4B5FD]/30">
            <ShieldAlert className="w-5 h-5" />
          </div>
          <h4 className="text-lg font-bold font-display text-white">AOL Quenching Architecture</h4>
          <p className="text-xs text-[#8A90B8] leading-relaxed">
            Follows Ingo Swann's right-margin quarantine rule. Purges conscious mind stories before they taint sensory impressions.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-[#0D0F24] border border-[#242A5C] space-y-3">
          <div className="w-10 h-10 rounded-xl bg-[#142338] text-[#5EEAD4] flex items-center justify-center border border-[#5EEAD4]/30">
            <Radio className="w-5 h-5" />
          </div>
          <h4 className="text-lg font-bold font-display text-white">Binaural Acoustic Priming</h4>
          <p className="text-xs text-[#8A90B8] leading-relaxed">
            Multi-harmonic audio engine generating 10Hz Alpha and 6Hz Theta frequencies to quiet beta brainwave chatter.
          </p>
        </div>
      </div>
    </section>
  );
};

function ChevronRightIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}
