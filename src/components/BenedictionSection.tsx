import React, { useState } from 'react';
import { Volume2, VolumeX, Copy, Check, Sparkles } from 'lucide-react';
import { Benediction } from '../data/breadTestament';

interface BenedictionSectionProps {
  benediction: Benediction;
  fontSize: 'sm' | 'md' | 'lg' | 'xl';
  onPlaySpeech?: (text: string) => void;
  speakingText?: string | null;
}

export const BenedictionSection: React.FC<BenedictionSectionProps> = ({
  benediction,
  fontSize,
  onPlaySpeech,
  speakingText,
}) => {
  const [copied, setCopied] = useState(false);

  const fullBenedictionSpeech = [
    benediction.title,
    ...benediction.lines,
    benediction.quote,
    benediction.amen,
    benediction.hygieneReminder,
  ].join('. ');

  const handleCopy = () => {
    const textToCopy = [
      benediction.title,
      '',
      ...benediction.lines,
      '',
      `"${benediction.quote}"`,
      '',
      benediction.amen,
      '',
      benediction.hygieneReminder,
      '',
      '— The Bread Testament',
    ].join('\n');

    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  const isSpeaking = speakingText === fullBenedictionSpeech;

  const handleRead = () => {
    if (onPlaySpeech) {
      onPlaySpeech(fullBenedictionSpeech);
    }
  };

  const getFontSizeClass = () => {
    switch (fontSize) {
      case 'sm':
        return 'text-sm sm:text-base md:text-lg leading-relaxed';
      case 'lg':
        return 'text-lg sm:text-xl md:text-2xl leading-loose';
      case 'xl':
        return 'text-xl sm:text-2xl md:text-3xl leading-loose';
      default:
        return 'text-base sm:text-lg md:text-xl leading-relaxed';
    }
  };

  return (
    <section id="benediction" className="scroll-mt-24 pt-6 sm:pt-8 pb-12 sm:pb-16">
      <div className="rounded-3xl bg-gradient-to-b from-[#241f1a] via-[#1c1813] to-[#15120f] border border-[#483d31] p-5 sm:p-10 md:p-12 shadow-[0_0_50px_rgba(0,0,0,0.5)] text-center relative overflow-hidden">
        {/* Glow behind */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-yellow-400/5 rounded-full blur-3xl pointer-events-none" />

        {/* Action bar */}
        <div className="flex items-center justify-end gap-2 mb-4 sm:mb-6">
          {onPlaySpeech && (
            <button
              onClick={handleRead}
              className={`px-3 py-1.5 rounded-xl border text-xs font-cinzel flex items-center gap-1.5 transition-colors ${
                isSpeaking
                  ? 'bg-yellow-400 text-stone-950 border-yellow-300 font-bold'
                  : 'bg-[#25201a] border-[#3e362d] text-[#ded6c9] hover:text-[#fef08a] hover:bg-[#2d251e]'
              }`}
            >
              {isSpeaking ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">{isSpeaking ? 'Speaking...' : 'Listen'}</span>
            </button>
          )}

          <button
            onClick={handleCopy}
            className="px-3 py-1.5 rounded-xl border border-[#3e362d] bg-[#25201a] text-[#ded6c9] hover:text-[#fef08a] hover:bg-[#2d251e] text-xs font-cinzel flex items-center gap-1.5 transition-colors"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied' : 'Copy'}</span>
          </button>
        </div>

        {/* Title */}
        <div className="mb-6 sm:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#25201a] border border-yellow-500/30 text-[#fef08a] text-xs font-cinzel uppercase tracking-widest mb-3">
            <Sparkles className="w-3.5 h-3.5" /> The Final Verse
          </div>
          <h2 className="font-cinzel text-xl sm:text-3xl md:text-4xl font-extrabold text-[#fefce8] tracking-wider">
            THE FINAL VERSE
          </h2>
          <p className="font-medieval text-base sm:text-xl md:text-2xl text-[#fef08a] italic mt-2 opacity-95">
            The Benediction of the Loaf
          </p>
        </div>

        {/* Benediction Lines */}
        <div className={`space-y-3 sm:space-y-4 max-w-3xl mx-auto font-faustina text-[#e8e0d5] ${getFontSizeClass()}`}>
          {benediction.lines.map((line, index) => {
            if (!line.trim()) {
              return <div key={index} className="h-3 sm:h-4" />;
            }
            return (
              <p
                key={index}
                className="transition-all duration-300 hover:text-[#fef08a] hover:scale-[1.01] cursor-default select-text"
              >
                {line}
              </p>
            );
          })}
        </div>

        {/* Benediction Central Quote */}
        {benediction.quote && (
          <div className="my-8 sm:my-10 max-w-xl mx-auto p-5 sm:p-7 rounded-2xl bg-[#161310] border-x-4 border-yellow-400 shadow-inner">
            <p className="font-cinzel text-lg sm:text-2xl md:text-3xl font-extrabold text-[#fef08a] italic tracking-wide">
              &ldquo;{benediction.quote}&rdquo;
            </p>
          </div>
        )}

        {/* Amen */}
        <div className="font-cinzel text-3xl sm:text-5xl md:text-6xl font-black text-[#fef08a] tracking-widest mt-8 sm:mt-10 drop-shadow-[0_0_20px_rgba(234,179,8,0.4)] animate-pulse">
          {benediction.amen}
        </div>

        {/* Hygiene Reminder */}
        {benediction.hygieneReminder && (
          <div className="font-medieval text-sm sm:text-lg md:text-xl text-[#fef9c3] mt-6 sm:mt-8 italic opacity-95">
            {benediction.hygieneReminder}
          </div>
        )}
      </div>
    </section>
  );
};
