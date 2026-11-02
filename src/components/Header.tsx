import React from 'react';
import { 
  Eye, 
  Compass, 
  BarChart3, 
  BookOpen, 
  PlusCircle, 
  Headphones, 
  Wind, 
  Moon, 
  Users,
  Radio,
  Sparkles
} from 'lucide-react';

export type ActiveView = 
  | 'hub'
  | 'session' 
  | 'daily' 
  | 'circles' 
  | 'guides' 
  | 'dreams' 
  | 'breathing' 
  | 'stats' 
  | 'protocol';

interface HeaderProps {
  activeView: ActiveView;
  onSelectView: (view: ActiveView) => void;
  onNewSession: () => void;
  onToggleRadio: () => void;
  isRadioPlaying?: boolean;
  streakCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  activeView,
  onSelectView,
  onNewSession,
  onToggleRadio,
  isRadioPlaying,
  streakCount,
}) => {
  return (
    <header className="sticky top-0 z-40 bg-[#080914]/90 backdrop-blur-md border-b border-[#242A5C]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-6">
        {/* Zone 1: Malychite Brand Crest + Scry Wordmark Switcher */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => onSelectView('hub')}
            className="flex items-center gap-2 group text-left"
            title="Return to Malychite Public Hub"
          >
            <span className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#7C3AED] via-[#6366F1] to-[#2DD4BF] flex items-center justify-center text-white text-xs font-bold shadow-md shadow-[#7C3AED]/30 group-hover:scale-105 transition-transform">
              M
            </span>
            <div className="hidden sm:block">
              <span className="text-sm font-bold font-display text-white tracking-wider block leading-none">
                MALYCHITE
              </span>
              <span className="text-[10px] font-mono-code text-[#2DD4BF] block mt-0.5">
                PUBLIC HUB
              </span>
            </div>
          </button>

          <span className="text-[#353D82] font-mono-code text-sm">/</span>

          <button
            type="button"
            onClick={() => onSelectView('session')}
            className={`text-sm sm:text-base font-bold tracking-widest transition-all px-2.5 py-1 rounded-lg font-display flex items-center gap-1.5 ${
              activeView === 'session'
                ? 'text-[#2DD4BF] bg-[#142338] border border-[#2DD4BF]/40 shadow-[0_0_10px_rgba(45,212,191,0.2)]'
                : 'text-[#9FA6D1] hover:text-white'
            }`}
            title="Launch Scry Pure Practice Engine"
          >
            <span className="w-2 h-2 rounded-full bg-[#2DD4BF]" />
            <span>SCRY</span>
          </button>
        </div>

        {/* Zone 2: Clean single-line text navigation links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-[#9FA6D1]">
          <button
            type="button"
            onClick={() => onSelectView('hub')}
            className={`whitespace-nowrap shrink-0 py-1 transition-colors hover:text-[#D8B4FE] relative flex items-center gap-1.5 ${
              activeView === 'hub' ? 'text-[#D8B4FE] font-semibold' : ''
            }`}
          >
            <span>Hub & Guide</span>
            {activeView === 'hub' && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#D8B4FE] to-[#2DD4BF]" />
            )}
          </button>

          <button
            type="button"
            onClick={() => onSelectView('session')}
            className={`whitespace-nowrap shrink-0 py-1 transition-colors hover:text-[#2DD4BF] relative ${
              activeView === 'session' ? 'text-[#2DD4BF]' : ''
            }`}
          >
            Practice
            {activeView === 'session' && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#D8B4FE] to-[#2DD4BF]" />
            )}
          </button>

          <button
            type="button"
            onClick={() => onSelectView('daily')}
            className={`whitespace-nowrap shrink-0 py-1 transition-colors hover:text-[#2DD4BF] relative flex items-center gap-1.5 ${
              activeView === 'daily' ? 'text-[#2DD4BF]' : ''
            }`}
          >
            <span>Daily</span>
            {streakCount > 0 && (
              <span className="text-[11px] font-mono-code text-[#2DD4BF] px-1 py-0.2 bg-[#1B2544] rounded border border-[#2DD4BF]/30">
                {streakCount}d
              </span>
            )}
            {activeView === 'daily' && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#D8B4FE] to-[#2DD4BF]" />
            )}
          </button>

          <button
            type="button"
            onClick={() => onSelectView('circles')}
            className={`whitespace-nowrap shrink-0 py-1 transition-colors hover:text-[#2DD4BF] relative ${
              activeView === 'circles' ? 'text-[#2DD4BF]' : ''
            }`}
          >
            Circles
            {activeView === 'circles' && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#D8B4FE] to-[#2DD4BF]" />
            )}
          </button>

          <button
            type="button"
            onClick={() => onSelectView('breathing')}
            className={`whitespace-nowrap shrink-0 py-1 transition-colors hover:text-[#2DD4BF] relative ${
              activeView === 'breathing' ? 'text-[#2DD4BF]' : ''
            }`}
          >
            Breathwork
            {activeView === 'breathing' && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#D8B4FE] to-[#2DD4BF]" />
            )}
          </button>

          <button
            type="button"
            onClick={() => onSelectView('dreams')}
            className={`whitespace-nowrap shrink-0 py-1 transition-colors hover:text-[#2DD4BF] relative ${
              activeView === 'dreams' ? 'text-[#2DD4BF]' : ''
            }`}
          >
            Dreams
            {activeView === 'dreams' && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#D8B4FE] to-[#2DD4BF]" />
            )}
          </button>

          <button
            type="button"
            onClick={() => onSelectView('guides')}
            className={`whitespace-nowrap shrink-0 py-1 transition-colors hover:text-[#2DD4BF] relative ${
              activeView === 'guides' ? 'text-[#2DD4BF]' : ''
            }`}
          >
            Teachings
            {activeView === 'guides' && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#D8B4FE] to-[#2DD4BF]" />
            )}
          </button>

          <button
            type="button"
            onClick={() => onSelectView('stats')}
            className={`whitespace-nowrap shrink-0 py-1 transition-colors hover:text-[#2DD4BF] relative ${
              activeView === 'stats' ? 'text-[#2DD4BF]' : ''
            }`}
          >
            Logbook
            {activeView === 'stats' && (
              <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#D8B4FE] to-[#2DD4BF]" />
            )}
          </button>
        </nav>

        {/* Zone 3: Actions (Ambient Radio Toggle + Primary New Target CTA) */}
        <div className="flex items-center gap-2.5 shrink-0">
          <button
            type="button"
            onClick={onToggleRadio}
            title="Toggle Binaural Meditation Radio"
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs transition-all ${
              isRadioPlaying
                ? 'bg-[#1A2548] border-[#2DD4BF] text-[#2DD4BF] shadow-[0_0_12px_rgba(45,212,191,0.2)]'
                : 'bg-[#141733] border-[#242A5C] text-[#8A90B8] hover:text-[#D8B4FE]'
            }`}
          >
            <Headphones className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Binaural Radio</span>
            {isRadioPlaying && <span className="w-1.5 h-1.5 rounded-full bg-[#2DD4BF] animate-ping" />}
          </button>

          <button
            type="button"
            onClick={onNewSession}
            className="flex items-center gap-2 px-3.5 py-2 text-xs font-semibold tracking-wider uppercase text-[#080914] bg-gradient-to-r from-[#C4B5FD] via-[#A78BFA] to-[#2DD4BF] hover:from-white hover:to-[#5EEAD4] rounded-lg shadow-md shadow-[#2DD4BF]/20 transition-all active:scale-95 whitespace-nowrap shrink-0 font-display"
          >
            <PlusCircle className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">New Target</span>
            <span className="sm:hidden">New</span>
          </button>
        </div>
      </div>

      {/* Mobile Ergonomic Navigation Scroller */}
      <div className="lg:hidden flex items-center justify-between border-t border-[#242A5C]/40 bg-[#0A0C1C] px-3 py-2 text-xs text-[#8A90B8] overflow-x-auto scrollbar-none gap-1">
        <button
          type="button"
          onClick={() => onSelectView('hub')}
          className={`flex items-center gap-1 py-1 px-2.5 rounded whitespace-nowrap ${
            activeView === 'hub' ? 'text-[#D8B4FE] font-semibold bg-[#181B3C]' : ''
          }`}
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>Hub</span>
        </button>
        <button
          type="button"
          onClick={() => onSelectView('session')}
          className={`flex items-center gap-1 py-1 px-2.5 rounded whitespace-nowrap ${
            activeView === 'session' ? 'text-[#2DD4BF] font-semibold bg-[#141E38]' : ''
          }`}
        >
          <Eye className="w-3.5 h-3.5" />
          <span>Practice</span>
        </button>
        <button
          type="button"
          onClick={() => onSelectView('daily')}
          className={`flex items-center gap-1 py-1 px-2.5 rounded whitespace-nowrap ${
            activeView === 'daily' ? 'text-[#2DD4BF] font-semibold bg-[#141E38]' : ''
          }`}
        >
          <Compass className="w-3.5 h-3.5" />
          <span>Daily</span>
        </button>
        <button
          type="button"
          onClick={() => onSelectView('circles')}
          className={`flex items-center gap-1 py-1 px-2.5 rounded whitespace-nowrap ${
            activeView === 'circles' ? 'text-[#2DD4BF] font-semibold bg-[#141E38]' : ''
          }`}
        >
          <Users className="w-3.5 h-3.5" />
          <span>Circles</span>
        </button>
        <button
          type="button"
          onClick={() => onSelectView('breathing')}
          className={`flex items-center gap-1 py-1 px-2.5 rounded whitespace-nowrap ${
            activeView === 'breathing' ? 'text-[#2DD4BF] font-semibold bg-[#141E38]' : ''
          }`}
        >
          <Wind className="w-3.5 h-3.5" />
          <span>Breath</span>
        </button>
        <button
          type="button"
          onClick={() => onSelectView('dreams')}
          className={`flex items-center gap-1 py-1 px-2.5 rounded whitespace-nowrap ${
            activeView === 'dreams' ? 'text-[#2DD4BF] font-semibold bg-[#141E38]' : ''
          }`}
        >
          <Moon className="w-3.5 h-3.5" />
          <span>Dreams</span>
        </button>
        <button
          type="button"
          onClick={() => onSelectView('guides')}
          className={`flex items-center gap-1 py-1 px-2.5 rounded whitespace-nowrap ${
            activeView === 'guides' ? 'text-[#2DD4BF] font-semibold bg-[#141E38]' : ''
          }`}
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span>Teachings</span>
        </button>
        <button
          type="button"
          onClick={() => onSelectView('stats')}
          className={`flex items-center gap-1 py-1 px-2.5 rounded whitespace-nowrap ${
            activeView === 'stats' ? 'text-[#2DD4BF] font-semibold bg-[#141E38]' : ''
          }`}
        >
          <BarChart3 className="w-3.5 h-3.5" />
          <span>Logbook</span>
        </button>
      </div>
    </header>
  );
};
