import React, { useState } from 'react';
import { Copy, Check, Bookmark, Volume2, VolumeX, Sparkles } from 'lucide-react';
import { Verse, Chapter, Book } from '../data/breadTestament';
import { toggleBookmark, isBookmarked } from '../utils/storage';
import { formatStandardVerseCitation } from '../utils/formatCitation';

interface VerseItemProps {
  verse: Verse;
  chapter: Chapter;
  book: Book;
  isFirstVerse?: boolean;
  fontSize: 'sm' | 'md' | 'lg' | 'xl';
  onPlaySpeech?: (text: string) => void;
  isSpeakingThis?: boolean;
  isPressed?: boolean;
  onTogglePress?: () => void;
}

export const VerseItem: React.FC<VerseItemProps> = ({
  verse,
  chapter,
  book,
  isFirstVerse = false,
  fontSize,
  onPlaySpeech,
  isSpeakingThis = false,
  isPressed = false,
  onTogglePress,
}) => {
  const [copied, setCopied] = useState(false);
  const elementId = `${chapter.id}-v-${verse.num.replace(':', '-')}`;
  const [bookmarked, setBookmarked] = useState(() => isBookmarked(elementId));

  const handleCopy = (e: React.MouseEvent) => {
    e.stopPropagation();
    const fullText = formatStandardVerseCitation(
      book.number,
      book.id,
      chapter.title,
      chapter.chapterIndex,
      verse.num,
      verse.text
    );
    navigator.clipboard.writeText(fullText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleBookmark = (e: React.MouseEvent) => {
    e.stopPropagation();
    const wasAdded = toggleBookmark({
      id: elementId,
      targetId: elementId,
      bookTitle: book.number,
      chapterTitle: chapter.title,
      verseNum: verse.num,
      text: verse.text,
    });
    setBookmarked(wasAdded);
  };

  const handleSpeech = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onPlaySpeech) {
      onPlaySpeech(verse.text);
    }
  };

  const handleTogglePress = () => {
    if (onTogglePress) {
      onTogglePress();
    }
  };

  const getFontSizeClass = () => {
    switch (fontSize) {
      case 'sm':
        return 'text-sm sm:text-base leading-relaxed';
      case 'lg':
        return 'text-lg sm:text-xl leading-loose';
      case 'xl':
        return 'text-xl sm:text-2xl leading-loose';
      default:
        return 'text-base sm:text-lg leading-relaxed';
    }
  };

  return (
    <div
      id={elementId}
      onClick={handleTogglePress}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleTogglePress();
        }
      }}
      aria-pressed={isPressed}
      className={`group relative p-3 sm:p-4 rounded-xl cursor-pointer select-text scroll-mt-28 transform-gpu will-change-[transform,box-shadow] transition-[transform,background-color,border-color,box-shadow] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        isPressed
          ? 'scale-[1.018] bg-[#28221b] border-2 border-yellow-400/90 shadow-[0_0_30px_rgba(254,240,138,0.25)] ring-1 ring-yellow-400/40 verse-illuminated z-10'
          : 'border-2 border-transparent hover:scale-[1.006] active:scale-[1.015] hover:bg-[#221c17]/80 hover:border-yellow-400/40'
      }`}
    >
      {/* Floating Sparkle Copied Toast */}
      {copied && (
        <div className="absolute -top-3.5 right-4 px-2.5 py-0.5 rounded-full bg-yellow-400 text-stone-950 font-cinzel text-[11px] font-bold shadow-lg flex items-center gap-1 z-30 animate-in fade-in slide-in-from-bottom-2 duration-200">
          <Sparkles className="w-3 h-3" /> Copied
        </div>
      )}

      <div className="flex flex-col sm:flex-row items-start gap-2.5 sm:gap-4">
        {/* Top row on mobile / Left column on desktop: Verse Number & Mobile Actions */}
        <div className="flex items-center justify-between w-full sm:w-auto sm:justify-start gap-2 shrink-0">
          <div className="flex items-center gap-1.5">
            <span
              className={`font-mono text-xs sm:text-sm font-bold px-2 py-0.5 rounded select-none transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                isPressed
                  ? 'bg-yellow-400 text-stone-950 shadow-[0_0_12px_rgba(254,240,138,0.45)] scale-105'
                  : 'text-[#fef08a] bg-[#221c17] border border-[#3e352b]'
              }`}
            >
              {verse.num}
            </span>

            {isPressed && (
              <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-cinzel text-yellow-300 bg-yellow-400/10 px-1.5 py-0.5 rounded border border-yellow-400/30 animate-in fade-in zoom-in-95 duration-300">
                <Sparkles className="w-2.5 h-2.5 text-yellow-400" />
                <span>Illuminated</span>
              </span>
            )}
          </div>

          {/* Quick action icons: visible on mobile, subtle on desktop hover */}
          <div className="flex sm:hidden items-center gap-1">
            {onPlaySpeech && (
              <button
                onClick={handleSpeech}
                title={isSpeakingThis ? 'Speaking...' : 'Listen to verse'}
                className={`p-1.5 rounded-lg transition-transform active:scale-95 ${
                  isSpeakingThis
                    ? 'bg-yellow-400 text-stone-950 font-bold animate-pulse'
                    : 'text-[#b8ad9c] hover:text-[#fef08a] bg-[#221c17]'
                }`}
              >
                {isSpeakingThis ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
              </button>
            )}

            <button
              onClick={handleBookmark}
              title={bookmarked ? 'Remove bookmark' : 'Bookmark verse'}
              className={`p-1.5 rounded-lg transition-transform active:scale-95 ${
                bookmarked
                  ? 'text-yellow-300 bg-[#2f271f] border border-yellow-500/50 scale-105'
                  : 'text-[#b8ad9c] hover:text-[#fef08a] bg-[#221c17]'
              }`}
            >
              <Bookmark className={`w-3.5 h-3.5 ${bookmarked ? 'fill-yellow-400 text-yellow-400' : ''}`} />
            </button>

            <button
              onClick={handleCopy}
              title="Copy verse"
              className="p-1.5 rounded-lg text-[#b8ad9c] hover:text-[#fef08a] bg-[#221c17] transition-transform active:scale-95"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* Verse Text: Turns to glowing pastel yellow smoothly when pressed */}
        <div
          className={`flex-1 font-faustina tracking-wide transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            isPressed
              ? 'text-yellow-200 font-medium drop-shadow-[0_0_10px_rgba(254,240,138,0.3)]'
              : 'text-[#fefce8] group-hover:text-[#fffbeb]'
          } ${getFontSizeClass()}`}
        >
          {isFirstVerse && verse.text.length > 1 ? (
            <span>
              <span
                className={`float-left text-3xl sm:text-4xl font-cinzel font-bold mr-2 leading-none transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  isPressed ? 'text-yellow-300' : 'text-[#fef08a]'
                }`}
              >
                {verse.text[0]}
              </span>
              {verse.text.slice(1)}
            </span>
          ) : (
            verse.text
          )}
        </div>

        {/* Desktop Action icons (revealed smoothly on hover) */}
        <div className="hidden sm:flex opacity-0 group-hover:opacity-100 items-center gap-1.5 transition-all pt-0.5 shrink-0">
          {onPlaySpeech && (
            <button
              onClick={handleSpeech}
              title={isSpeakingThis ? 'Speaking...' : 'Listen to verse'}
              className={`p-1.5 rounded-lg transition-all active:scale-95 ${
                isSpeakingThis
                  ? 'bg-yellow-400 text-stone-950 font-bold animate-pulse'
                  : 'text-[#b8ad9c] hover:text-[#fef08a] hover:bg-[#2b241e]'
              }`}
            >
              {isSpeakingThis ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
            </button>
          )}

          <button
            onClick={handleBookmark}
            title={bookmarked ? 'Remove bookmark' : 'Bookmark verse'}
            className={`p-1.5 rounded-lg transition-all active:scale-95 ${
              bookmarked
                ? 'text-yellow-300 bg-[#2f271f] border border-yellow-500/50 scale-105'
                : 'text-[#b8ad9c] hover:text-[#fef08a] hover:bg-[#2b241e]'
            }`}
          >
            <Bookmark className={`w-4 h-4 ${bookmarked ? 'fill-yellow-400 text-yellow-400' : ''}`} />
          </button>

          <button
            onClick={handleCopy}
            title="Copy verse"
            className="p-1.5 rounded-lg text-[#b8ad9c] hover:text-[#fef08a] hover:bg-[#2b241e] transition-all active:scale-95"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </div>
  );
};
