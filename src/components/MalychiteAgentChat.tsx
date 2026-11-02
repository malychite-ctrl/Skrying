import React, { useState, useRef, useEffect } from 'react';
import { 
  Send, 
  Sparkles, 
  RotateCcw, 
  BookOpen, 
  Compass, 
  Check, 
  Copy, 
  Bot, 
  User, 
  ShieldAlert, 
  ChevronRight,
  ExternalLink,
  Code
} from 'lucide-react';

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  text: string;
  source?: string;
  timestamp: string;
  suggestedActions?: Array<{ label: string; action: 'scry' | 'book' | 'prompt'; target?: string }>;
}

interface MalychiteAgentChatProps {
  onLaunchScry?: () => void;
  onOpenBookSection?: () => void;
  onOpenDeployGuide?: () => void;
}

const STARTER_PROMPTS = [
  "How do I quench Analytic Overlay (AOL) during a session?",
  "Explain Stage 1 Ideograms vs Stage 2 Sensory impressions",
  "What was Project Stargate's greatest breakthrough at SRI?",
  "What is 'Journey Through Dimensions' about and why should I read it?",
  "How do I use the Scry practice engine for blind targets?"
];

export const MalychiteAgentChat: React.FC<MalychiteAgentChatProps> = ({
  onLaunchScry,
  onOpenBookSection,
  onOpenDeployGuide,
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      role: 'assistant',
      text: `Greetings. I am **Amathiest**, the guide on Malychite's remote viewing site. I am here to help you navigate coordinate remote viewing, the history of Project Stargate, and the principles in *Journey Through Dimensions*.

Whether you are debugging mental noise in your sessions, curious about SRI's 23-year military intelligence program, or preparing to run blind target drills on the **Scry** practice engine, ask me anything below.`,
      source: 'Amathiest Guide',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      suggestedActions: [
        { label: 'Launch Scry Practice Drill', action: 'scry' },
        { label: 'Explore Journey Through Dimensions', action: 'book' }
      ]
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const handleSendMessage = async (textToSend?: string) => {
    const text = (textToSend || inputValue).trim();
    if (!text || isLoading) return;

    const userMessage: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      // Build lightweight history context
      const historyContext = messages.slice(-6).map(m => ({
        role: m.role,
        text: m.text,
      }));

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: text,
          history: historyContext,
        }),
      });

      if (!res.ok) {
        throw new Error(`Server returned ${res.status}`);
      }

      const data = await res.json();
      const replyText = data.reply || "I am currently recalibrating my non-local signal. Please retry in a moment.";

      // Determine contextual action chips
      const suggestedActions: Array<{ label: string; action: 'scry' | 'book' | 'prompt'; target?: string }> = [];
      const lower = replyText.toLowerCase();
      if (lower.includes('scry') || lower.includes('practice') || lower.includes('drill') || lower.includes('coordinate')) {
        suggestedActions.push({ label: 'Launch Scry Practice Engine', action: 'scry' });
      }
      if (lower.includes('journey through dimensions') || lower.includes('book') || lower.includes('chapter')) {
        suggestedActions.push({ label: 'View Book & Read Excerpt', action: 'book' });
      }

      const botMessage: ChatMessage = {
        id: `bot-${Date.now()}`,
        role: 'assistant',
        text: replyText,
        source: data.source === 'gemini-3.8-flash' ? 'Gemini 3.8 Flash (AI Studio)' : 'Malychite Research Lab Archive',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        suggestedActions: suggestedActions.length > 0 ? suggestedActions : undefined,
      };

      setMessages(prev => [...prev, botMessage]);
    } catch (err: any) {
      console.error('Chat error:', err);
      const errorMessage: ChatMessage = {
        id: `bot-err-${Date.now()}`,
        role: 'assistant',
        text: `**Connection recalibration:** Unable to connect to the live AI Studio agent right now. You can still test practice coordinates directly in Scry or explore the chapters in Journey Through Dimensions.`,
        source: 'System Offline Fallback',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        suggestedActions: [
          { label: 'Open Scry Engine', action: 'scry' },
          { label: 'Explore the Book', action: 'book' }
        ]
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  };

  const handleCopyText = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: 'welcome-reset',
        role: 'assistant',
        text: `Session re-initialized. The perceptual aperture is clear. What would you like to explore regarding CRV protocols, Project Stargate, or the theory in *Journey Through Dimensions*?`,
        source: 'Amathiest Guide',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        suggestedActions: [
          { label: 'Launch Scry Practice Drill', action: 'scry' },
          { label: 'Explore Journey Through Dimensions', action: 'book' }
        ]
      }
    ]);
  };

  // Basic markdown parser for headings, bold, bullet points
  const renderFormattedContent = (content: string) => {
    if (!content) return null;
    const lines = content.split('\n');
    return lines.map((line, idx) => {
      // Heading 3
      if (line.startsWith('### ')) {
        return (
          <h4 key={idx} className="text-base font-bold text-[#5EEAD4] font-display mt-3 mb-1.5 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#5EEAD4]" />
            {line.replace('### ', '')}
          </h4>
        );
      }
      // Heading 2 or 1
      if (line.startsWith('## ') || line.startsWith('# ')) {
        return (
          <h3 key={idx} className="text-lg font-bold text-[#E9D5FF] font-display mt-3 mb-1">
            {line.replace(/#+ /, '')}
          </h3>
        );
      }
      // Bullet point
      if (line.trim().startsWith('- ') || line.trim().startsWith('* ')) {
        const itemText = line.trim().replace(/^[-*]\s+/, '');
        return (
          <li key={idx} className="ml-4 list-disc text-sm text-[#D4D8F0] my-1 leading-relaxed">
            {renderInlineMarkdown(itemText)}
          </li>
        );
      }
      // Numbered list
      if (/^\d+\.\s+/.test(line.trim())) {
        const itemText = line.trim().replace(/^\d+\.\s+/, '');
        return (
          <li key={idx} className="ml-4 list-decimal text-sm text-[#D4D8F0] my-1 leading-relaxed">
            {renderInlineMarkdown(itemText)}
          </li>
        );
      }
      // Empty line
      if (!line.trim()) {
        return <div key={idx} className="h-2" />;
      }
      // Regular paragraph
      return (
        <p key={idx} className="text-sm text-[#D4D8F0] leading-relaxed my-1">
          {renderInlineMarkdown(line)}
        </p>
      );
    });
  };

  // Helper for inline bold, italic, code
  const renderInlineMarkdown = (text: string) => {
    if (!text) return null;
    // Split by bold (**text**)
    const parts = text.split(/(\*\*.*?\*\*|\*.*?\*|`.*?`)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={i} className="text-white font-semibold">{part.slice(2, -2)}</strong>;
      }
      if (part.startsWith('*') && part.endsWith('*')) {
        return <em key={i} className="text-[#C4B5FD] italic">{part.slice(1, -1)}</em>;
      }
      if (part.startsWith('`') && part.endsWith('`')) {
        return (
          <code key={i} className="px-1.5 py-0.5 rounded bg-[#1B1F44] text-[#2DD4BF] font-mono-code text-xs">
            {part.slice(1, -1)}
          </code>
        );
      }
      return part;
    });
  };

  return (
    <div className="w-full bg-[#0D0F22] border border-[#242A5C] rounded-2xl shadow-2xl flex flex-col overflow-hidden">
      {/* Agent Window Header */}
      <div className="bg-[#10132E] border-b border-[#242A5C] px-4 sm:px-6 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#7C3AED] via-[#6366F1] to-[#2DD4BF] flex items-center justify-center shadow-lg shadow-[#7C3AED]/30">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full bg-[#2DD4BF] border-2 border-[#10132E] animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-display font-bold text-white text-base tracking-wide">
                Amathiest RV Guide
              </h3>
              <span className="text-[10px] uppercase font-mono-code px-2 py-0.5 rounded bg-[#1B2544] border border-[#2DD4BF]/30 text-[#2DD4BF]">
                Live Guide
              </span>
            </div>
            <p className="text-xs text-[#8A90B8]">
              Trained on Research Notebook, Stargate Archives & Journey Through Dimensions
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {onOpenDeployGuide && (
            <button
              type="button"
              onClick={onOpenDeployGuide}
              className="hidden sm:flex items-center gap-1.5 text-xs px-2.5 py-1.5 rounded-lg bg-[#141738] border border-[#242A5C] text-[#C4B5FD] hover:text-white hover:border-[#2DD4BF]/50 transition-all"
              title="See deployment instructions for Google Gem or AI Studio embed"
            >
              <Code className="w-3.5 h-3.5" />
              <span>Deploy Guide</span>
            </button>
          )}

          <button
            type="button"
            onClick={handleResetChat}
            className="p-1.5 text-[#8A90B8] hover:text-[#5EEAD4] rounded-lg hover:bg-[#1B1F44] transition-colors"
            title="Reset conversation"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Preset Starter Prompts Bar */}
      <div className="bg-[#0A0C1C] border-b border-[#242A5C]/60 px-4 py-2.5 overflow-x-auto scrollbar-none flex items-center gap-2">
        <span className="text-[11px] uppercase tracking-wider text-[#71779E] shrink-0 font-mono-code flex items-center gap-1">
          <Bot className="w-3 h-3" /> Quick Query:
        </span>
        {STARTER_PROMPTS.map((prompt, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => handleSendMessage(prompt)}
            disabled={isLoading}
            className="text-xs whitespace-nowrap px-3 py-1 rounded-full bg-[#141738] border border-[#242A5C] text-[#C4B5FD] hover:text-white hover:border-[#2DD4BF]/60 hover:bg-[#1B1F44] transition-all shrink-0 active:scale-95"
          >
            {prompt}
          </button>
        ))}
      </div>

      {/* Message Stream */}
      <div className="p-4 sm:p-6 space-y-4 max-h-[500px] sm:max-h-[560px] overflow-y-auto">
        {messages.map((message) => {
          const isUser = message.role === 'user';
          return (
            <div
              key={message.id}
              className={`flex gap-3 sm:gap-4 ${isUser ? 'justify-end' : 'justify-start'}`}
            >
              {!isUser && (
                <div className="w-8 h-8 rounded-lg bg-[#181B3C] border border-[#2DD4BF]/40 flex items-center justify-center shrink-0 mt-1 text-[#2DD4BF]">
                  <Bot className="w-4 h-4" />
                </div>
              )}

              <div
                className={`max-w-[85%] sm:max-w-[80%] rounded-2xl p-4 sm:p-5 relative group ${
                  isUser
                    ? 'bg-gradient-to-r from-[#4C1D95]/80 to-[#2E1065]/90 border border-[#7C3AED]/40 text-white rounded-tr-none'
                    : 'bg-[#121530] border border-[#242A5C] text-[#E0E2EC] rounded-tl-none shadow-lg'
                }`}
              >
                {/* Message Header */}
                <div className="flex items-center justify-between gap-4 mb-2 text-[11px] text-[#71779E]">
                  <span className="font-semibold text-[#8A90B8]">
                    {isUser ? 'You' : 'Malychite Guide'}
                  </span>
                  <div className="flex items-center gap-2">
                    {message.source && (
                      <span className="text-[10px] text-[#2DD4BF] font-mono-code">
                        [{message.source}]
                      </span>
                    )}
                    <span>{message.timestamp}</span>
                    <button
                      type="button"
                      onClick={() => handleCopyText(message.id, message.text)}
                      className="opacity-0 group-hover:opacity-100 hover:text-white transition-opacity ml-1"
                      title="Copy response"
                    >
                      {copiedId === message.id ? (
                        <Check className="w-3.5 h-3.5 text-[#2DD4BF]" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Message Body */}
                <div className="space-y-1">
                  {renderFormattedContent(message.text)}
                </div>

                {/* Contextual Action Buttons */}
                {message.suggestedActions && message.suggestedActions.length > 0 && (
                  <div className="mt-4 pt-3 border-t border-[#242A5C]/60 flex flex-wrap gap-2">
                    {message.suggestedActions.map((actionItem, aIdx) => (
                      <button
                        key={aIdx}
                        type="button"
                        onClick={() => {
                          if (actionItem.action === 'scry' && onLaunchScry) {
                            onLaunchScry();
                          } else if (actionItem.action === 'book' && onOpenBookSection) {
                            onOpenBookSection();
                          }
                        }}
                        className="flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-gradient-to-r from-[#1E2958] to-[#15193B] border border-[#2DD4BF]/50 text-[#5EEAD4] hover:border-[#5EEAD4] hover:text-white transition-all shadow-sm active:scale-95"
                      >
                        {actionItem.action === 'scry' ? (
                          <Compass className="w-3.5 h-3.5 text-[#2DD4BF]" />
                        ) : (
                          <BookOpen className="w-3.5 h-3.5 text-[#C4B5FD]" />
                        )}
                        <span>{actionItem.label}</span>
                        <ChevronRight className="w-3 h-3 opacity-60" />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {isUser && (
                <div className="w-8 h-8 rounded-lg bg-[#3B1F74] border border-[#7C3AED]/40 flex items-center justify-center shrink-0 mt-1 text-[#D8B4FE]">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          );
        })}

        {/* Loading Indicator */}
        {isLoading && (
          <div className="flex gap-3 sm:gap-4 items-center">
            <div className="w-8 h-8 rounded-lg bg-[#181B3C] border border-[#2DD4BF]/40 flex items-center justify-center shrink-0 text-[#2DD4BF] animate-pulse">
              <Sparkles className="w-4 h-4 animate-spin" />
            </div>
            <div className="bg-[#121530] border border-[#242A5C] rounded-2xl rounded-tl-none p-4 text-xs text-[#8A90B8] flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#2DD4BF] animate-ping" />
              <span>Accessing holographic research notebook & non-local archives...</span>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Chat Input Box */}
      <div className="bg-[#10132E] border-t border-[#242A5C] p-3 sm:p-4">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendMessage();
          }}
          className="flex items-center gap-2"
        >
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ask about CRV stages, quenching AOL, Stargate history, or Journey Through Dimensions..."
            disabled={isLoading}
            className="flex-1 bg-[#090B1A] border border-[#242A5C] focus:border-[#2DD4BF] rounded-xl px-4 py-3 text-sm text-white placeholder-[#5A6087] outline-none transition-colors"
          />

          <button
            type="submit"
            disabled={!inputValue.trim() || isLoading}
            className="px-4 py-3 bg-gradient-to-r from-[#7C3AED] via-[#6366F1] to-[#2DD4BF] hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed text-[#080914] font-bold rounded-xl flex items-center gap-1.5 transition-all shadow-md active:scale-95 shrink-0"
          >
            <Send className="w-4 h-4" />
            <span className="hidden sm:inline text-xs uppercase tracking-wider font-display">Transmit</span>
          </button>
        </form>

        <div className="flex items-center justify-between text-[11px] text-[#5A6087] mt-2 px-1">
          <span>Tuned for remote viewing training & theoretical physics.</span>
          <span className="hidden sm:inline font-mono-code text-[#2DD4BF]/70">Model: Gemini 3.8 Flash</span>
        </div>
      </div>
    </div>
  );
};
