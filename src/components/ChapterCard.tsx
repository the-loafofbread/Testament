import React, { useState } from 'react';
import { Volume2, VolumeX, Copy, Check } from 'lucide-react';
import { Chapter, Book } from '../data/breadTestament';
import { VerseItem } from './VerseItem';

interface ChapterCardProps {
  chapter: Chapter;
  book: Book;
  fontSize: 'sm' | 'md' | 'lg' | 'xl';
  onPlaySpeech?: (text: string) => void;
  speakingText?: string | null;
  activeGlowingVerseId?: string | null;
  onToggleVerseGlow?: (verseId: string) => void;
}

export const ChapterCard: React.FC<ChapterCardProps> = ({
  chapter,
  book,
  fontSize,
  onPlaySpeech,
  speakingText,
  activeGlowingVerseId,
  onToggleVerseGlow,
}) => {
  const [copiedAll, setCopiedAll] = useState(false);

  const fullChapterText = chapter.verses
    .map((v) => `[${v.num}] ${v.text}`)
    .join('\n\n');

  const handleCopyChapter = () => {
    const textToCopy = `${book.number}\n${chapter.title}\n\n${fullChapterText}\n\n— The Bread Testament`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedAll(true);
    setTimeout(() => setCopiedAll(false), 2200);
  };

  const isSpeakingChapter = speakingText === fullChapterText;

  const handleReadChapter = () => {
    if (onPlaySpeech) {
      onPlaySpeech(fullChapterText);
    }
  };

  return (
    <article
      id={chapter.id}
      className="my-6 sm:my-8 rounded-2xl bg-[#1d1915] border border-[#3d342a] hover:border-yellow-500/35 p-4 sm:p-7 md:p-8 shadow-xl hover:shadow-[0_8px_32px_rgba(0,0,0,0.6)] relative scroll-mt-24 transition-all duration-300"
    >
      {/* Chapter Title Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3.5 mb-4 border-b border-[#362e25] gap-3">
        <h2 className="font-cinzel text-lg sm:text-2xl font-bold text-[#fefce8] tracking-wide flex items-center gap-2">
          <span className="text-[#fef08a] text-base sm:text-xl">📜</span>
          <span>{chapter.title}</span>
        </h2>

        <div className="flex items-center gap-2 self-start sm:self-auto shrink-0">
          <span className="text-xs font-cinzel text-[#b8ad9c] bg-[#25201a] px-2.5 py-1 rounded-full border border-[#3d342a]">
            {chapter.verses.length} verses
          </span>

          {onPlaySpeech && (
            <button
              onClick={handleReadChapter}
              title={isSpeakingChapter ? 'Pause speech' : 'Listen to chapter'}
              className={`px-2.5 py-1 rounded-lg border text-xs font-cinzel flex items-center gap-1.5 transition-colors ${
                isSpeakingChapter
                  ? 'bg-yellow-400 text-stone-950 border-yellow-300 font-bold'
                  : 'bg-[#25201a] border-[#3e362d] text-[#ded6c9] hover:text-[#fef08a] hover:bg-[#2d251e]'
              }`}
            >
              {isSpeakingChapter ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
              <span className="hidden sm:inline">
                {isSpeakingChapter ? 'Speaking...' : 'Listen'}
              </span>
            </button>
          )}

          <button
            onClick={handleCopyChapter}
            title="Copy entire chapter"
            className="px-2.5 py-1 rounded-lg border border-[#3e362d] bg-[#25201a] text-[#ded6c9] hover:text-[#fef08a] hover:bg-[#2d251e] text-xs font-cinzel flex items-center gap-1.5 transition-colors"
          >
            {copiedAll ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span className="hidden sm:inline">{copiedAll ? 'Copied' : 'Copy'}</span>
          </button>
        </div>
      </div>

      {/* Verses Container */}
      <div className="space-y-1 divide-y divide-[#2d261e]/60">
        {chapter.verses.map((verse, idx) => {
          const verseElementId = `${chapter.id}-v-${verse.num.replace(':', '-')}`;
          return (
            <VerseItem
              key={verse.num}
              verse={verse}
              chapter={chapter}
              book={book}
              isFirstVerse={idx === 0}
              fontSize={fontSize}
              onPlaySpeech={onPlaySpeech}
              isSpeakingThis={speakingText === verse.text}
              isPressed={activeGlowingVerseId === verseElementId}
              onTogglePress={() => onToggleVerseGlow?.(verseElementId)}
            />
          );
        })}
      </div>
    </article>
  );
};
