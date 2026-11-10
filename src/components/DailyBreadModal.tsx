import React, { useState, useMemo } from 'react';
import { X, Copy, Check, Sparkles, ArrowRight, Calendar } from 'lucide-react';
import { breadTestamentData, Book, Chapter, Verse } from '../data/breadTestament';
import { formatDailyBreadCitation } from '../utils/formatCitation';

interface DailyBreadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (targetId: string) => void;
}

interface PickedVerse {
  book: Book;
  chapter: Chapter;
  verse: Verse;
  targetId: string;
}

// Deterministic string hash for consistent daily selection
function getDailyVerseIndex(dateStr: string, totalCount: number): number {
  let hash = 5381;
  for (let i = 0; i < dateStr.length; i++) {
    hash = ((hash << 5) + hash + dateStr.charCodeAt(i)) >>> 0;
  }
  return hash % totalCount;
}

export const DailyBreadModal: React.FC<DailyBreadModalProps> = ({ isOpen, onClose, onNavigate }) => {
  const [copied, setCopied] = useState(false);

  // Flatten all 553 verses
  const allVerses = useMemo<PickedVerse[]>(() => {
    const list: PickedVerse[] = [];
    breadTestamentData.books.forEach((book) => {
      book.chapters.forEach((chapter) => {
        chapter.verses.forEach((verse) => {
          list.push({
            book,
            chapter,
            verse,
            targetId: `${chapter.id}-v-${verse.num.replace(':', '-')}`,
          });
        });
      });
    });
    return list;
  }, []);

  // Today's date string in YYYY-MM-DD
  const now = new Date();
  const dateKey = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;

  const formattedDate = now.toLocaleDateString(undefined, {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  // Calculate today's fixed verse (changes once daily at midnight)
  const todaysVerse = useMemo(() => {
    if (allVerses.length === 0) return null;
    const index = getDailyVerseIndex(dateKey, allVerses.length);
    return allVerses[index];
  }, [allVerses, dateKey]);

  if (!isOpen || !todaysVerse) return null;

  const handleCopy = () => {
    const textToCopy = formatDailyBreadCitation(
      todaysVerse.book.number,
      todaysVerse.book.id,
      todaysVerse.chapter.title,
      todaysVerse.chapter.chapterIndex,
      todaysVerse.verse.num,
      todaysVerse.verse.text,
      now
    );
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="w-full max-w-lg rounded-2xl border border-[#443a2f] p-5 sm:p-8 bg-[#1a1713] text-[#fefce8] shadow-2xl relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Subtle background glow */}
        <div className="absolute -top-16 -right-16 w-44 h-44 rounded-full bg-yellow-400/5 blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3.5 right-3.5 p-2 rounded-xl text-[#b8ad9c] hover:text-[#fefce8] hover:bg-[#25201a] transition-colors"
          title="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Badge & Date */}
        <div className="flex items-center gap-3 mb-4">
          <span className="p-2.5 rounded-xl bg-[#25201a] border border-[#3e352b] text-2xl select-none shrink-0">
            🍞
          </span>
          <div className="min-w-0">
            <div className="flex items-center gap-1.5 text-xs font-cinzel tracking-widest uppercase text-[#fef08a]">
              <Sparkles className="w-3.5 h-3.5" />
              Daily Bread of Wisdom
            </div>
            <h3 className="font-cinzel text-base sm:text-lg font-bold text-[#fefce8] truncate">
              Today&apos;s Sacred Crumb
            </h3>
            <div className="flex items-center gap-1.5 text-[11px] text-[#b8ad9c] font-cinzel mt-0.5">
              <Calendar className="w-3 h-3 text-[#fef08a]" />
              <span>{formattedDate}</span>
            </div>
          </div>
        </div>

        {/* Today's Verse Card */}
        <div className="my-5 p-4 sm:p-6 rounded-xl bg-[#14120f] border border-[#362e25] relative">
          <div className="text-4xl text-[#fef08a]/20 font-serif leading-none absolute top-3 left-3 select-none">
            &ldquo;
          </div>
          <p className="font-faustina text-base sm:text-xl text-[#fef9c3] leading-relaxed italic relative z-10 pl-3 sm:pl-4">
            {todaysVerse.verse.text}
          </p>
          <div className="mt-4 pt-3 border-t border-[#2d251d] flex flex-col sm:flex-row sm:items-center justify-between text-xs text-[#b8ad9c] gap-1 font-cinzel">
            <span className="font-semibold text-[#fef08a]">{todaysVerse.book.number}</span>
            <span>
              {todaysVerse.chapter.title} • Verse {todaysVerse.verse.num}
            </span>
          </div>
        </div>

        {/* Daily Schedule Notice */}
        <div className="mb-4 text-center text-[11px] font-cinzel text-[#8c8273]">
          🌾 A single portion of wisdom for each day • Renews tomorrow at midnight
        </div>

        {/* Action Buttons (Copy & Read in Context only - no redraw button) */}
        <div className="flex items-center justify-end gap-2.5 pt-1">
          <button
            onClick={handleCopy}
            className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl border border-[#3e352b] bg-[#221c17] text-[#ded6c9] hover:text-[#fef08a] hover:bg-[#2c241c] text-xs sm:text-sm font-cinzel transition-all"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? 'Copied Verse' : 'Copy'}</span>
          </button>

          <button
            onClick={() => {
              onNavigate(todaysVerse.targetId);
              onClose();
            }}
            className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-yellow-400 hover:bg-yellow-300 text-stone-950 font-bold text-xs sm:text-sm font-cinzel shadow-md transition-all"
          >
            <span>Read in Context</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
