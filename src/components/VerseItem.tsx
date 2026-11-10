import React, { useState } from 'react';
import { Copy, Check, Bookmark, Volume2, VolumeX } from 'lucide-react';
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
}

export const VerseItem: React.FC<VerseItemProps> = ({
  verse,
  chapter,
  book,
  isFirstVerse = false,
  fontSize,
  onPlaySpeech,
  isSpeakingThis = false,
}) => {
  const [copied, setCopied] = useState(false);
  const elementId = `${chapter.id}-v-${verse.num.replace(':', '-')}`;
  const [bookmarked, setBookmarked] = useState(() => isBookmarked(elementId));

  const handleCopy = () => {
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

  const handleBookmark = () => {
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
      className="group relative p-3 sm:p-4 rounded-xl transition-all duration-200 hover:bg-[#25201a]/70 border-l-2 border-transparent hover:border-yellow-400/80 scroll-mt-28"
    >
      <div className="flex flex-col sm:flex-row items-start gap-2.5 sm:gap-4">
        {/* Top row on mobile / Left column on desktop: Verse Number & Mobile Actions */}
        <div className="flex items-center justify-between w-full sm:w-auto sm:justify-start gap-2 shrink-0">
          <span className="font-mono text-xs sm:text-sm font-bold text-[#fef08a] bg-[#221c17] px-2 py-0.5 rounded border border-[#3e352b] select-none">
            {verse.num}
          </span>

          {/* Quick action icons: visible on mobile, subtle on desktop hover */}
          <div className="flex sm:hidden items-center gap-1">
            {onPlaySpeech && (
              <button
                onClick={() => onPlaySpeech(verse.text)}
                title={isSpeakingThis ? 'Speaking...' : 'Listen to verse'}
                className={`p-1.5 rounded-lg transition-colors ${
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
              className={`p-1.5 rounded-lg transition-colors ${
                bookmarked
                  ? 'text-yellow-300 bg-[#2f271f] border border-yellow-500/50'
                  : 'text-[#b8ad9c] hover:text-[#fef08a] bg-[#221c17]'
              }`}
            >
              <Bookmark className={`w-3.5 h-3.5 ${bookmarked ? 'fill-yellow-400 text-yellow-400' : ''}`} />
            </button>

            <button
              onClick={handleCopy}
              title="Copy verse"
              className="p-1.5 rounded-lg text-[#b8ad9c] hover:text-[#fef08a] bg-[#221c17] transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* Verse Text */}
        <div className={`flex-1 font-faustina text-[#fefce8] tracking-wide ${getFontSizeClass()}`}>
          {isFirstVerse && verse.text.length > 1 ? (
            <span>
              <span className="float-left text-3xl sm:text-4xl font-cinzel font-bold text-[#fef08a] mr-2 leading-none">
                {verse.text[0]}
              </span>
              {verse.text.slice(1)}
            </span>
          ) : (
            verse.text
          )}
        </div>

        {/* Desktop Action icons (revealed smoothly on hover) */}
        <div className="hidden sm:flex opacity-0 group-hover:opacity-100 items-center gap-1.5 transition-opacity pt-0.5 shrink-0">
          {onPlaySpeech && (
            <button
              onClick={() => onPlaySpeech(verse.text)}
              title={isSpeakingThis ? 'Speaking...' : 'Listen to verse'}
              className={`p-1.5 rounded-lg transition-colors ${
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
            className={`p-1.5 rounded-lg transition-colors ${
              bookmarked
                ? 'text-yellow-300 bg-[#2f271f] border border-yellow-500/50'
                : 'text-[#b8ad9c] hover:text-[#fef08a] hover:bg-[#2b241e]'
            }`}
          >
            <Bookmark className={`w-4 h-4 ${bookmarked ? 'fill-yellow-400 text-yellow-400' : ''}`} />
          </button>

          <button
            onClick={handleCopy}
            title="Copy verse"
            className="p-1.5 rounded-lg text-[#b8ad9c] hover:text-[#fef08a] hover:bg-[#2b241e] transition-colors"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </div>
  );
};
