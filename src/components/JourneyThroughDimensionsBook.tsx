import React, { useState } from 'react';
import { 
  BookOpen, 
  Sparkles, 
  Star, 
  Check, 
  ChevronRight, 
  Bookmark, 
  Layers, 
  Headphones, 
  Download, 
  ExternalLink,
  X,
  Compass,
  ArrowRight
} from 'lucide-react';
import { BOOK_DETAILS, BOOK_CHAPTERS, BookChapter } from '../data/malychiteKnowledge';

interface BookSectionProps {
  onLaunchScry?: () => void;
  onAskAgentAboutBook?: (chapterTitle?: string) => void;
}

export const JourneyThroughDimensionsBook: React.FC<BookSectionProps> = ({
  onLaunchScry,
  onAskAgentAboutBook,
}) => {
  const [selectedChapter, setSelectedChapter] = useState<BookChapter | null>(null);
  const [selectedFormat, setSelectedFormat] = useState<string>("Collector's Hardcover");
  const [orderModalOpen, setOrderModalOpen] = useState<boolean>(false);
  const [orderSuccess, setOrderSuccess] = useState<boolean>(false);

  const handleOrder = () => {
    setOrderSuccess(true);
    setTimeout(() => {
      setOrderSuccess(false);
      setOrderModalOpen(false);
    }, 2800);
  };

  return (
    <section id="book-section" className="py-16 px-4 sm:px-6 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181B3C] border border-[#7C3AED]/40 text-[#D8B4FE] text-xs font-mono-code mb-4">
          <Bookmark className="w-3.5 h-3.5 text-[#2DD4BF]" />
          <span>The Core Theoretical Product</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-bold font-display text-white tracking-tight leading-tight">
          Journey Through Dimensions
        </h2>
        <p className="mt-4 text-base sm:text-lg text-[#9FA6D1] leading-relaxed">
          The physics of consciousness, non-local perception, and the multidimensional mind. 
          Bridging declassified Stargate intelligence records with modern quantum holoflux mechanics.
        </p>
      </div>

      {/* Main Showcase Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#0B0D1E] border border-[#242A5C] rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
        {/* Atmospheric Glow */}
        <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-[#7C3AED]/15 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-32 -right-32 w-80 h-80 rounded-full bg-[#2DD4BF]/10 blur-3xl pointer-events-none" />

        {/* Column 1: 3D Realistic Holographic Book Cover Mockup */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
          <div className="relative group perspective-1000">
            {/* Book Spine & Cover Container */}
            <div className="w-64 sm:w-72 h-96 sm:h-[420px] rounded-r-2xl rounded-l-md bg-gradient-to-br from-[#1A1333] via-[#0D102A] to-[#080914] border-2 border-[#7C3AED]/50 p-6 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative transform transition-transform duration-500 hover:rotate-y-[-6deg] hover:scale-105">
              {/* Gold Foil Header Details */}
              <div className="border-b border-[#D8B4FE]/30 pb-4">
                <div className="flex items-center justify-between text-[10px] font-mono-code text-[#2DD4BF]">
                  <span>DECLASSIFIED CRV PROTOCOL</span>
                  <span>MALYCHITE</span>
                </div>
                <h3 className="font-display font-extrabold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-white via-[#E9D5FF] to-[#2DD4BF] mt-3 leading-tight tracking-wider">
                  JOURNEY THROUGH DIMENSIONS
                </h3>
                <p className="text-[11px] text-[#A78BFA] mt-1 font-sans font-medium tracking-wide">
                  The Physics of Non-Local Perception
                </p>
              </div>

              {/* Central Sacred Geometry / Coordinate Emblem */}
              <div className="my-auto py-4 flex flex-col items-center justify-center">
                <div className="relative w-28 h-28 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full border border-[#2DD4BF]/40 animate-[spin_24s_linear_infinite]" />
                  <div className="absolute inset-2 rounded-full border border-dashed border-[#C084FC]/50 animate-[spin_16s_linear_infinite_reverse]" />
                  <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#7C3AED] to-[#2DD4BF] flex items-center justify-center shadow-lg shadow-[#2DD4BF]/25">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                </div>
                <span className="text-[10px] font-mono-code text-[#71779E] mt-3">
                  ISBN: 978-1-95482-109-4
                </span>
              </div>

              {/* Cover Footer */}
              <div className="border-t border-[#D8B4FE]/20 pt-3 flex items-center justify-between text-[11px] text-[#9FA6D1]">
                <span className="font-serif tracking-widest text-white uppercase text-xs">MALYCHITE</span>
                <span className="font-mono-code text-[#2DD4BF]">384 PAGES</span>
              </div>

              {/* Left spine shadow effect */}
              <div className="absolute top-0 bottom-0 left-0 w-4 bg-gradient-to-r from-black/60 to-transparent rounded-l-md pointer-events-none" />
            </div>

            {/* Book Page Depth Shadow */}
            <div className="absolute -right-3 top-2 bottom-2 w-3 bg-[#E0E2EC]/20 rounded-r-sm blur-[0.5px] pointer-events-none" />
          </div>

          {/* Social Proof Rating */}
          <div className="mt-6 flex items-center gap-3 bg-[#121633] border border-[#242A5C] px-4 py-2 rounded-full">
            <div className="flex text-[#F59E0B]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-current" />
              ))}
            </div>
            <span className="text-xs font-semibold text-white font-mono-code">4.9 / 5.0</span>
            <span className="text-xs text-[#71779E]">({BOOK_DETAILS.reviewsCount} reviews)</span>
          </div>
        </div>

        {/* Column 2: Overview & Purchasing Options */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            <span className="text-xs font-mono-code text-[#2DD4BF] tracking-wider uppercase">
              Theory Companion to Scry
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-white mt-1">
              Understand the Physics Behind the Coordinates
            </h3>
            <p className="mt-3 text-sm sm:text-base text-[#C2C7E8] leading-relaxed">
              {BOOK_DETAILS.synopsis}
            </p>
          </div>

          {/* Available Editions Selector */}
          <div>
            <label className="text-xs font-mono-code text-[#8A90B8] uppercase tracking-wider block mb-2.5">
              Select Edition:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {BOOK_DETAILS.formats.map((format) => {
                const isSelected = selectedFormat === format.type;
                return (
                  <button
                    key={format.type}
                    type="button"
                    onClick={() => setSelectedFormat(format.type)}
                    className={`p-3.5 rounded-xl border text-left transition-all ${
                      isSelected
                        ? 'bg-[#181B3C] border-[#2DD4BF] shadow-[0_0_15px_rgba(45,212,191,0.15)] ring-1 ring-[#2DD4BF]'
                        : 'bg-[#0E1026] border-[#242A5C] hover:border-[#7C3AED]/60 text-[#8A90B8]'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold text-white">
                        {format.type.split(' ')[0]}
                      </span>
                      <span className="text-xs font-mono-code text-[#2DD4BF] font-bold">
                        {format.price}
                      </span>
                    </div>
                    <div className="text-[11px] text-[#A78BFA] mt-1 truncate">
                      {format.badge}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
            <button
              type="button"
              onClick={() => setOrderModalOpen(true)}
              className="flex-1 py-3.5 px-6 rounded-xl bg-gradient-to-r from-[#7C3AED] via-[#6366F1] to-[#2DD4BF] hover:opacity-95 text-[#080914] font-bold font-display text-sm tracking-wider uppercase flex items-center justify-center gap-2 shadow-lg shadow-[#7C3AED]/25 transition-all active:scale-95"
            >
              <span>Order {selectedFormat.split(' ')[0]} Edition</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => setSelectedChapter(BOOK_CHAPTERS[0])}
              className="py-3.5 px-5 rounded-xl bg-[#141738] border border-[#242A5C] hover:border-[#2DD4BF]/60 text-[#C4B5FD] hover:text-white font-semibold text-xs flex items-center justify-center gap-2 transition-all active:scale-95"
            >
              <BookOpen className="w-4 h-4 text-[#2DD4BF]" />
              <span>Read Chapter Excerpt</span>
            </button>
          </div>

          {/* Critical Praise Slider / Quote */}
          <div className="pt-4 border-t border-[#242A5C]/60">
            <div className="p-4 rounded-xl bg-[#090B1A] border border-[#242A5C]/60 text-xs text-[#9FA6D1] italic relative">
              "{BOOK_DETAILS.quotes[0].text}"
              <div className="mt-2 text-right not-italic font-semibold text-[#D8B4FE]">
                — {BOOK_DETAILS.quotes[0].author}, <span className="text-[#71779E] font-normal">{BOOK_DETAILS.quotes[0].title}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Chapter Breakdown Grid */}
      <div className="mt-12">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
              Inside the Treatise: 6 Dimensions of Mastery
            </h3>
            <p className="text-xs text-[#8A90B8]">
              Click any chapter to read an excerpt or consult the Malychite Agent on the topic.
            </p>
          </div>
          <span className="text-xs font-mono-code text-[#2DD4BF]">
            6 Core Chapters · 384 Pages
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {BOOK_CHAPTERS.map((chapter) => (
            <div
              key={chapter.number}
              className="bg-[#0C0E22] border border-[#242A5C] hover:border-[#2DD4BF]/50 rounded-2xl p-5 flex flex-col justify-between transition-all group hover:shadow-xl hover:shadow-[#2DD4BF]/5"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-[#71779E] mb-2 font-mono-code">
                  <span className="text-[#C4B5FD]">CHAPTER 0{chapter.number}</span>
                  <span>{chapter.readTime}</span>
                </div>
                <h4 className="text-lg font-bold font-display text-white group-hover:text-[#5EEAD4] transition-colors leading-snug">
                  {chapter.title}
                </h4>
                <p className="text-xs text-[#9FA6D1] mt-1 font-medium">
                  {chapter.subtitle}
                </p>
                <p className="text-xs text-[#6F759E] mt-3 line-clamp-3 leading-relaxed">
                  {chapter.summary}
                </p>

                {/* Topics Tag List */}
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {chapter.topics.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] px-2 py-0.5 rounded bg-[#121633] text-[#A78BFA] border border-[#242A5C]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-5 pt-4 border-t border-[#242A5C]/40 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => setSelectedChapter(chapter)}
                  className="text-xs text-[#2DD4BF] hover:text-white font-semibold flex items-center gap-1 transition-colors"
                >
                  <span>Read Excerpt</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>

                {onAskAgentAboutBook && (
                  <button
                    type="button"
                    onClick={() => onAskAgentAboutBook(chapter.title)}
                    className="text-[11px] text-[#A78BFA] hover:text-white transition-colors"
                    title="Ask the AI Guide about this chapter"
                  >
                    Ask AI Guide
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chapter Excerpt Modal / Reader */}
      {selectedChapter && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#0B0D1E] border border-[#242A5C] rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto">
            <button
              type="button"
              onClick={() => setSelectedChapter(null)}
              className="absolute top-5 right-5 text-[#8A90B8] hover:text-white p-1 rounded-lg hover:bg-[#181B3C]"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-xs font-mono-code text-[#2DD4BF] mb-2">
              CHAPTER 0{selectedChapter.number} EXCERPT · {selectedChapter.readTime}
            </div>

            <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-1">
              {selectedChapter.title}
            </h3>
            <p className="text-xs text-[#A78BFA] mb-6 font-medium">
              {selectedChapter.subtitle}
            </p>

            <div className="p-4 rounded-xl bg-[#141738] border border-[#242A5C] text-xs text-[#C2C7E8] mb-6 italic">
              "{selectedChapter.summary}"
            </div>

            <div className="space-y-4 text-sm sm:text-base text-[#D4D8F0] leading-relaxed font-sans">
              <p className="first-letter:text-4xl first-letter:font-display first-letter:text-[#5EEAD4] first-letter:float-left first-letter:mr-3 first-letter:leading-none">
                {selectedChapter.excerpt}
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#242A5C] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="text-xs text-[#71779E]">
                Extracted from <span className="text-[#C4B5FD] font-semibold">Journey Through Dimensions</span> by Malychite.
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setSelectedChapter(null);
                    setOrderModalOpen(true);
                  }}
                  className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#7C3AED] to-[#2DD4BF] text-[#080914] font-bold text-xs font-display uppercase tracking-wider"
                >
                  Order Full Book
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Order Modal */}
      {orderModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#0B0D1E] border border-[#242A5C] rounded-2xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative text-center">
            <button
              type="button"
              onClick={() => setOrderModalOpen(false)}
              className="absolute top-5 right-5 text-[#8A90B8] hover:text-white p-1"
            >
              <X className="w-5 h-5" />
            </button>

            {orderSuccess ? (
              <div className="py-6 space-y-3">
                <div className="w-14 h-14 rounded-full bg-[#2DD4BF]/20 border border-[#2DD4BF] text-[#2DD4BF] flex items-center justify-center mx-auto animate-bounce">
                  <Check className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold font-display text-white">
                  Order Dispatched into the Non-Local Stream
                </h4>
                <p className="text-xs text-[#9FA6D1]">
                  Thank you for acquiring <span className="text-[#C4B5FD]">Journey Through Dimensions</span> ({selectedFormat}). A confirmation and download manifest has been routed to your portal.
                </p>
              </div>
            ) : (
              <div className="space-y-4 text-left">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-xl bg-[#181B3C] border border-[#2DD4BF]/40 text-[#2DD4BF] flex items-center justify-center mx-auto mb-3">
                    <Bookmark className="w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-bold font-display text-white">
                    Acquire Journey Through Dimensions
                  </h4>
                  <p className="text-xs text-[#8A90B8] mt-1">
                    Select your preferred reading format below:
                  </p>
                </div>

                <div className="space-y-2 mt-4">
                  {BOOK_DETAILS.formats.map((fmt) => (
                    <div
                      key={fmt.type}
                      onClick={() => setSelectedFormat(fmt.type)}
                      className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                        selectedFormat === fmt.type
                          ? 'bg-[#181B3C] border-[#2DD4BF] text-white ring-1 ring-[#2DD4BF]'
                          : 'bg-[#0E1026] border-[#242A5C] text-[#8A90B8] hover:border-[#7C3AED]'
                      }`}
                    >
                      <div>
                        <div className="text-xs font-semibold text-white">{fmt.type}</div>
                        <div className="text-[11px] text-[#A78BFA]">{fmt.badge}</div>
                      </div>
                      <span className="text-sm font-mono-code font-bold text-[#2DD4BF]">{fmt.price}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <button
                    type="button"
                    onClick={handleOrder}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-[#7C3AED] via-[#6366F1] to-[#2DD4BF] text-[#080914] font-bold font-display text-xs uppercase tracking-wider shadow-lg shadow-[#7C3AED]/20 active:scale-95"
                  >
                    Confirm Purchase ({selectedFormat.split(' ')[0]})
                  </button>
                  <p className="text-[10px] text-center text-[#71779E] mt-2">
                    Instant digital delivery for eBook & Audiobook. Hardcover ships internationally.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
