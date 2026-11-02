import React, { useState } from 'react';
import { 
  X, 
  Copy, 
  Check, 
  Sparkles, 
  Code, 
  Layers, 
  Bot, 
  ExternalLink, 
  Terminal, 
  Globe, 
  Zap,
  BookOpen,
  Compass
} from 'lucide-react';
import { AGENT_DEPLOYMENT_GUIDE, MALYCHITE_SYSTEM_PROMPT } from '../data/malychiteKnowledge';

interface AgentDeploymentGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AgentDeploymentGuideModal: React.FC<AgentDeploymentGuideModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<'gem' | 'aistudio' | 'architecture'>('gem');
  const [promptCopied, setPromptCopied] = useState(false);
  const [codeCopied, setCodeCopied] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(MALYCHITE_SYSTEM_PROMPT);
    setPromptCopied(true);
    setTimeout(() => setPromptCopied(false), 2200);
  };

  const handleCopySnippet = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCodeCopied(id);
    setTimeout(() => setCodeCopied(null), 2200);
  };

  const embedHtmlSnippet = `<!-- Malychite RV Assistant Embed Widget -->
<div id="malychite-assistant-root"></div>
<script 
  src="https://scrying.cloud.run/widget.js" 
  data-theme="dark" 
  data-agent="malychite-rv"
  async>
</script>`;

  const embedReactSnippet = `import { MalychiteAgentChat } from './components/MalychiteAgentChat';

export function HomePage() {
  return (
    <div className="max-w-4xl mx-auto my-12">
      <MalychiteAgentChat 
        onLaunchScry={() => window.open('https://scrying.cloud.run', '_blank')}
        onOpenBookSection={() => document.getElementById('book-section')?.scrollIntoView()}
      />
    </div>
  );
}`;

  return (
    <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      <div className="bg-[#0B0D1E] border border-[#242A5C] rounded-3xl max-w-4xl w-full shadow-2xl relative flex flex-col max-h-[92vh] overflow-hidden">
        {/* Header */}
        <div className="bg-[#10132E] border-b border-[#242A5C] p-5 sm:p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#7C3AED] via-[#6366F1] to-[#2DD4BF] flex items-center justify-center text-white shadow-lg shadow-[#7C3AED]/25">
              <Bot className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
                Two Ways to Deploy Your Agent
              </h3>
              <p className="text-xs text-[#8A90B8]">
                Custom Google Gem vs. Google AI Studio Embed
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 text-[#8A90B8] hover:text-white rounded-lg hover:bg-[#181B3C] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="bg-[#080914] border-b border-[#242A5C] px-5 sm:px-6 flex gap-4 overflow-x-auto">
          <button
            type="button"
            onClick={() => setActiveTab('gem')}
            className={`py-3.5 px-3 text-xs sm:text-sm font-semibold border-b-2 whitespace-nowrap transition-all flex items-center gap-2 ${
              activeTab === 'gem'
                ? 'border-[#2DD4BF] text-[#2DD4BF]'
                : 'border-transparent text-[#71779E] hover:text-[#C4B5FD]'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>1. Custom Google Gem (Quickest)</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('aistudio')}
            className={`py-3.5 px-3 text-xs sm:text-sm font-semibold border-b-2 whitespace-nowrap transition-all flex items-center gap-2 ${
              activeTab === 'aistudio'
                ? 'border-[#2DD4BF] text-[#2DD4BF]'
                : 'border-transparent text-[#71779E] hover:text-[#C4B5FD]'
            }`}
          >
            <Code className="w-4 h-4" />
            <span>2. AI Studio Embed (Best for Web)</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('architecture')}
            className={`py-3.5 px-3 text-xs sm:text-sm font-semibold border-b-2 whitespace-nowrap transition-all flex items-center gap-2 ${
              activeTab === 'architecture'
                ? 'border-[#2DD4BF] text-[#2DD4BF]'
                : 'border-transparent text-[#71779E] hover:text-[#C4B5FD]'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Architecture Blueprint</span>
          </button>
        </div>

        {/* Tab Body */}
        <div className="p-5 sm:p-8 overflow-y-auto space-y-6 flex-1 text-sm text-[#C2C7E8]">
          {/* TAB 1: GEM */}
          {activeTab === 'gem' && (
            <div className="space-y-6">
              <div className="p-4 rounded-2xl bg-[#141738] border border-[#242A5C] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <h4 className="font-bold text-white font-display text-base">
                    Custom Google Gem Setup
                  </h4>
                  <p className="text-xs text-[#9FA6D1] mt-0.5">
                    Create a specialized Gem called <strong className="text-[#5EEAD4]">"Malychite RV Assistant"</strong> in your Gemini workspace and share the link with your community.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={handleCopyPrompt}
                  className="py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#7C3AED] to-[#2DD4BF] text-[#080914] font-bold text-xs uppercase tracking-wider font-display shrink-0 flex items-center gap-1.5 active:scale-95 transition-all shadow-md"
                >
                  {promptCopied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  <span>{promptCopied ? 'Prompt Copied!' : 'Copy System Prompt'}</span>
                </button>
              </div>

              {/* Step Sequence */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {AGENT_DEPLOYMENT_GUIDE.gemPath.steps.map((s) => (
                  <div key={s.step} className="p-4 rounded-xl bg-[#0E1026] border border-[#242A5C] space-y-1.5">
                    <div className="flex items-center gap-2 text-xs font-mono-code text-[#2DD4BF]">
                      <span className="w-5 h-5 rounded-full bg-[#18233C] flex items-center justify-center font-bold text-[11px]">
                        {s.step}
                      </span>
                      <span>{s.title}</span>
                    </div>
                    <p className="text-xs text-[#8A90B8] leading-relaxed">
                      {s.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* System Prompt Preview */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono-code text-[#A78BFA] uppercase tracking-wider">
                    Full System Prompt (Ready to Paste):
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyPrompt}
                    className="text-xs text-[#2DD4BF] hover:text-white flex items-center gap-1"
                  >
                    {promptCopied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{promptCopied ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
                <pre className="p-4 rounded-xl bg-[#070812] border border-[#242A5C] text-xs font-mono-code text-[#D8B4FE] max-h-56 overflow-y-auto whitespace-pre-wrap leading-relaxed">
                  {MALYCHITE_SYSTEM_PROMPT}
                </pre>
              </div>
            </div>
          )}

          {/* TAB 2: AI STUDIO EMBED */}
          {activeTab === 'aistudio' && (
            <div className="space-y-6">
              <div className="p-4 rounded-2xl bg-[#141738] border border-[#242A5C]">
                <h4 className="font-bold text-white font-display text-base">
                  Google AI Studio Embed (Zero-Login Public Web Visitors)
                </h4>
                <p className="text-xs text-[#9FA6D1] mt-1">
                  By hosting the chat prompt through Google AI Studio and our backend proxy, any website visitor can converse with the Malychite Guide without needing a Google account or authentication.
                </p>
              </div>

              {/* Step Sequence */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {AGENT_DEPLOYMENT_GUIDE.aiStudioPath.steps.map((s) => (
                  <div key={s.step} className="p-4 rounded-xl bg-[#0E1026] border border-[#242A5C] space-y-1.5">
                    <div className="flex items-center gap-2 text-xs font-mono-code text-[#2DD4BF]">
                      <span className="w-5 h-5 rounded-full bg-[#18233C] flex items-center justify-center font-bold text-[11px]">
                        {s.step}
                      </span>
                      <span>{s.title}</span>
                    </div>
                    <p className="text-xs text-[#8A90B8] leading-relaxed">
                      {s.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Snippet 1: React Component */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono-code text-[#A78BFA] uppercase tracking-wider flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-[#2DD4BF]" />
                    React Embed Snippet
                  </span>
                  <button
                    type="button"
                    onClick={() => handleCopySnippet('react', embedReactSnippet)}
                    className="text-xs text-[#2DD4BF] hover:text-white flex items-center gap-1"
                  >
                    {codeCopied === 'react' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{codeCopied === 'react' ? 'Copied' : 'Copy Code'}</span>
                  </button>
                </div>
                <pre className="p-4 rounded-xl bg-[#070812] border border-[#242A5C] text-xs font-mono-code text-[#5EEAD4] overflow-x-auto whitespace-pre leading-relaxed">
                  {embedReactSnippet}
                </pre>
              </div>

              {/* Snippet 2: Standard HTML Widget */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono-code text-[#A78BFA] uppercase tracking-wider flex items-center gap-1.5">
                    <Globe className="w-3.5 h-3.5 text-[#2DD4BF]" />
                    Standard Web / CMS Embed Tag
                  </span>
                  <button
                    type="button"
                    onClick={() => handleCopySnippet('html', embedHtmlSnippet)}
                    className="text-xs text-[#2DD4BF] hover:text-white flex items-center gap-1"
                  >
                    {codeCopied === 'html' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{codeCopied === 'html' ? 'Copied' : 'Copy Code'}</span>
                  </button>
                </div>
                <pre className="p-4 rounded-xl bg-[#070812] border border-[#242A5C] text-xs font-mono-code text-[#C4B5FD] overflow-x-auto whitespace-pre leading-relaxed">
                  {embedHtmlSnippet}
                </pre>
              </div>
            </div>
          )}

          {/* TAB 3: ARCHITECTURE */}
          {activeTab === 'architecture' && (
            <div className="space-y-6">
              <div className="p-4 rounded-2xl bg-[#141738] border border-[#242A5C]">
                <h4 className="font-bold text-white font-display text-base">
                  The Clean Modular Triad
                </h4>
                <p className="text-xs text-[#9FA6D1] mt-1">
                  How your tools divide and work together seamlessly without code entanglement:
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-5 rounded-2xl bg-[#0E1026] border border-[#242A5C] space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#18233C] text-[#2DD4BF] flex items-center justify-center font-bold">
                    <Bot className="w-5 h-5" />
                  </div>
                  <h5 className="font-bold font-display text-white text-base">The Guide</h5>
                  <p className="text-xs text-[#8A90B8] leading-relaxed">
                    Dedicated AI agent acting as the front-of-house expert. Answers questions, demystifies protocols, and routes visitors.
                  </p>
                  <span className="inline-block text-[10px] font-mono-code px-2 py-0.5 rounded bg-[#162B3D] text-[#2DD4BF]">
                    24/7 Front-of-House
                  </span>
                </div>

                <div className="p-5 rounded-2xl bg-[#0E1026] border border-[#242A5C] space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#2A183C] text-[#C4B5FD] flex items-center justify-center font-bold">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <h5 className="font-bold font-display text-white text-base">The Book</h5>
                  <p className="text-xs text-[#8A90B8] leading-relaxed">
                    *Journey Through Dimensions*. Deep foundational theory, Bohmian physics, and multidimensional consciousness proofs.
                  </p>
                  <span className="inline-block text-[10px] font-mono-code px-2 py-0.5 rounded bg-[#27163B] text-[#C4B5FD]">
                    Core Theory Product
                  </span>
                </div>

                <div className="p-5 rounded-2xl bg-[#0E1026] border border-[#242A5C] space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#142338] text-[#5EEAD4] flex items-center justify-center font-bold">
                    <Compass className="w-5 h-5" />
                  </div>
                  <h5 className="font-bold font-display text-white text-base">Scry</h5>
                  <p className="text-xs text-[#8A90B8] leading-relaxed">
                    Pure practice cockpit at <code className="text-[#2DD4BF]">scrying.cloud.run</code>. Target generation, ideograms, and AOL quenching without marketing clutter.
                  </p>
                  <span className="inline-block text-[10px] font-mono-code px-2 py-0.5 rounded bg-[#162B3D] text-[#5EEAD4]">
                    Pure Practice Engine
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[#080914] border border-[#242A5C] text-xs text-[#8A90B8]">
                <strong className="text-white">Note on Research Lab:</strong> Your research notebook remains your private, sovereign laboratory. The agent synthesizes its wisdom for public benefit while keeping your source archives protected.
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="bg-[#10132E] border-t border-[#242A5C] p-4 sm:p-5 flex items-center justify-between">
          <span className="text-xs text-[#71779E] font-mono-code">
            Malychite Protocol v2.4
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-[#181B3C] border border-[#242A5C] text-white hover:border-[#2DD4BF] text-xs font-semibold transition-colors"
          >
            Close Guide
          </button>
        </div>
      </div>
    </div>
  );
};
