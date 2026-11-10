import React from 'react';
import { Book } from '../data/breadTestament';
import { ChapterCard } from './ChapterCard';

interface BookSectionProps {
  book: Book;
  fontSize: 'sm' | 'md' | 'lg' | 'xl';
  onPlaySpeech?: (text: string) => void;
  speakingText?: string | null;
  activeGlowingVerseId?: string | null;
  onToggleVerseGlow?: (verseId: string) => void;
}

export const BookSection: React.FC<BookSectionProps> = ({
  book,
  fontSize,
  onPlaySpeech,
  speakingText,
  activeGlowingVerseId,
  onToggleVerseGlow,
}) => {
  return (
    <section id={book.id} className="scroll-mt-24 pt-4 sm:pt-6 pb-8 sm:pb-12">
      {/* Book Monument Header */}
      <div className="text-center my-6 sm:my-8 p-5 sm:p-8 md:p-10 rounded-2xl bg-gradient-to-b from-[#241f19] to-[#191512] border border-[#443a2f] shadow-2xl relative overflow-hidden">
        {/* Wheat flourish decoration */}
        <div className="flex items-center justify-center gap-2.5 sm:gap-3 text-yellow-300 mb-2.5 sm:mb-3 text-base sm:text-lg select-none">
          <span>🌾</span>
          <span className="w-12 sm:w-16 h-px bg-gradient-to-r from-transparent via-yellow-400/60 to-transparent" />
          <span>🍞</span>
          <span className="w-12 sm:w-16 h-px bg-gradient-to-r from-transparent via-yellow-400/60 to-transparent" />
          <span>🌾</span>
        </div>

        <h1 className="font-cinzel text-xl sm:text-3xl md:text-4xl font-extrabold text-[#fefce8] tracking-wider uppercase drop-shadow-sm px-2">
          {book.number}
        </h1>

        <p className="font-medieval text-sm sm:text-lg md:text-xl text-[#fef08a] mt-2 sm:mt-3 max-w-2xl mx-auto italic opacity-95 px-3 leading-relaxed">
          {book.subtitle}
        </p>

        <div className="mt-3 sm:mt-4 flex items-center justify-center gap-2 text-xs font-cinzel text-[#b8ad9c]">
          <span>{book.chapters.length} Chapters</span>
          <span>•</span>
          <span>
            {book.chapters.reduce((sum, c) => sum + c.verses.length, 0)} Verses
          </span>
        </div>
      </div>

      {/* Chapters */}
      <div className="space-y-4 sm:space-y-6">
        {book.chapters.map((chapter) => (
          <ChapterCard
            key={chapter.id}
            chapter={chapter}
            book={book}
            fontSize={fontSize}
            onPlaySpeech={onPlaySpeech}
            speakingText={speakingText}
            activeGlowingVerseId={activeGlowingVerseId}
            onToggleVerseGlow={onToggleVerseGlow}
          />
        ))}
      </div>
    </section>
  );
};
