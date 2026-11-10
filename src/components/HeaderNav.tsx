import React, { useState } from 'react';
import {
  Search,
  Bookmark,
  Sparkles,
  VolumeX,
  Type,
  BookOpen,
  Wheat,
  Menu,
  X,
  ChevronRight,
  ExternalLink,
} from 'lucide-react';
import { breadTestamentData } from '../data/breadTestament';
import { getBookmarks } from '../utils/storage';

interface HeaderNavProps {
  onOpenSearch: () => void;
  onOpenBookmarks: () => void;
  onOpenDailyBread: () => void;
  fontSize: 'sm' | 'md' | 'lg' | 'xl';
  onChangeFontSize: (size: 'sm' | 'md' | 'lg' | 'xl') => void;
  crumbsEnabled: boolean;
  onToggleCrumbs: () => void;
  selectedBookId: string;
  onSelectBookId: (id: string) => void;
  viewMode: 'continuous' | 'single';
  onToggleViewMode: () => void;
  isSpeaking: boolean;
  onStopSpeaking: () => void;
  onNavigate: (targetId: string) => void;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({
  onOpenSearch,
  onOpenBookmarks,
  onOpenDailyBread,
  fontSize,
  onChangeFontSize,
  crumbsEnabled,
  onToggleCrumbs,
  selectedBookId,
  onSelectBookId,
  viewMode,
  onToggleViewMode,
  isSpeaking,
  onStopSpeaking,
  onNavigate,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const bookmarkCount = getBookmarks().length;

  const fontSizes: Array<'sm' | 'md' | 'lg' | 'xl'> = ['sm', 'md', 'lg', 'xl'];

  const handleNextFontSize = () => {
    const curIdx = fontSizes.indexOf(fontSize);
    const nextIdx = (curIdx + 1) % fontSizes.length;
    onChangeFontSize(fontSizes[nextIdx]);
  };

  const handleBookClick = (bookId: string) => {
    onSelectBookId(bookId);
    onNavigate(bookId);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Sticky Top Control Toolbar */}
      <header className="sticky top-0 z-40 bg-[#161310]/95 backdrop-blur-md border-b border-[#362f27] px-3 sm:px-6 py-2.5 transition-all">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-2">
          {/* Brand Logo & Quick Jump */}
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <button
              onClick={() => onNavigate('header')}
              className="flex items-center gap-2 text-left group shrink-0"
              title="Return to the beginning"
            >
              <span className="text-2xl sm:text-3xl group-hover:scale-105 transition-transform select-none">
                🍞
              </span>
              <div className="truncate">
                <div className="font-cinzel text-sm sm:text-base font-bold text-[#fef9c3] group-hover:text-[#fef08a] transition-colors leading-none tracking-wide">
                  The Bread Testament
                </div>
                <div className="hidden sm:block text-[10px] text-[#b8ad9c] font-cinzel mt-0.5">
                  The Sacred Scriptures of the Breadkind
                </div>
              </div>
            </button>

            {/* Desktop Quick Book Selector */}
            <div className="hidden md:block relative ml-2">
              <select
                value={selectedBookId}
                onChange={(e) => {
                  const val = e.target.value;
                  onSelectBookId(val);
                  onNavigate(val);
                }}
                className="bg-[#231e19] border border-[#443c33] hover:border-yellow-500/50 rounded-lg px-2.5 py-1.5 text-xs font-cinzel text-[#fef08a] focus:outline-none focus:border-yellow-400 transition-colors cursor-pointer"
              >
                <option value="all">📖 Scroll All Books</option>
                {breadTestamentData.books.map((b) => (
                  <option key={b.id} value={b.id}>
                    {b.number.split(':')[0]}
                  </option>
                ))}
                <option value="benediction">✨ The Benediction</option>
              </select>
            </div>
          </div>

          {/* Controls & Tools */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Global Search Button */}
            <button
              onClick={onOpenSearch}
              className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 rounded-xl bg-[#231e19] border border-[#443c33] hover:border-yellow-500/60 text-[#fef9c3] hover:text-[#fef08a] text-xs sm:text-sm font-cinzel transition-all shadow-sm"
              title="Search prayers, chapters, verses, books (Press / or Ctrl+K)"
            >
              <Search className="w-4 h-4 text-[#fef08a]" />
              <span className="hidden sm:inline">Search</span>
              <kbd className="hidden lg:inline text-[10px] px-1.5 py-0.5 rounded bg-black/40 border border-[#443c33] text-[#fef08a] font-mono">
                /
              </kbd>
            </button>

            {/* Daily Bread Button (Desktop & Tablet) */}
            <button
              onClick={onOpenDailyBread}
              className="hidden sm:flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl border border-[#443c33] bg-[#231e19] text-[#fef9c3] hover:text-[#fef08a] hover:border-yellow-500/60 text-xs font-cinzel transition-colors"
              title="Draw a random verse of wisdom"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#fef08a]" />
              <span>Daily Bread</span>
            </button>

            {/* Bookmarks Button */}
            <button
              onClick={onOpenBookmarks}
              className="relative p-1.5 sm:px-2.5 sm:py-1.5 rounded-xl border border-[#443c33] bg-[#231e19] text-[#fef9c3] hover:text-[#fef08a] hover:border-yellow-500/60 text-xs font-cinzel flex items-center gap-1.5 transition-colors"
              title="View saved verses"
            >
              <Bookmark className="w-4 h-4 text-[#fef08a]" />
              <span className="hidden sm:inline">Saved</span>
              {bookmarkCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 min-w-4 h-4 px-1 rounded-full bg-yellow-400 text-stone-950 text-[10px] font-bold flex items-center justify-center">
                  {bookmarkCount}
                </span>
              )}
            </button>

            {/* Font Size Toggle (Desktop) */}
            <button
              onClick={handleNextFontSize}
              className="hidden md:flex items-center gap-1 p-1.5 sm:px-2 sm:py-1.5 rounded-xl border border-[#443c33] bg-[#231e19] text-[#fef9c3] hover:text-[#fef08a] hover:border-yellow-500/60 text-xs font-cinzel transition-colors"
              title={`Change text size (current: ${fontSize.toUpperCase()})`}
            >
              <Type className="w-3.5 h-3.5 text-[#fef08a]" />
              <span className="font-mono uppercase text-[11px]">{fontSize}</span>
            </button>

            {/* Floating Crumbs Toggle (Desktop) */}
            <button
              onClick={onToggleCrumbs}
              className={`hidden lg:flex items-center gap-1 p-1.5 sm:px-2 sm:py-1.5 rounded-xl border text-xs font-cinzel transition-colors ${
                crumbsEnabled
                  ? 'border-yellow-500/50 bg-[#2b251e] text-[#fef08a]'
                  : 'border-[#362f27] bg-[#1a1714] text-[#8c8273]'
              }`}
              title={crumbsEnabled ? 'Floating crumbs enabled' : 'Floating crumbs disabled'}
            >
              <Wheat className="w-3.5 h-3.5" />
            </button>

            {/* Reading Mode Toggle (Desktop) */}
            <button
              onClick={onToggleViewMode}
              className="hidden lg:flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl border border-[#443c33] bg-[#231e19] text-[#fef9c3] hover:text-[#fef08a] hover:border-yellow-500/60 text-xs font-cinzel transition-colors"
              title="Toggle continuous scroll or single book study mode"
            >
              <BookOpen className="w-3.5 h-3.5 text-[#fef08a]" />
              <span>{viewMode === 'continuous' ? 'All Books' : 'Single Book'}</span>
            </button>

            {/* Speaking Status / Stop Audio */}
            {isSpeaking && (
              <button
                onClick={onStopSpeaking}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-yellow-400 text-stone-950 font-bold text-xs font-cinzel animate-pulse"
                title="Stop audio reading"
              >
                <VolumeX className="w-4 h-4" />
                <span className="hidden md:inline">Stop</span>
              </button>
            )}

            {/* Mobile Menu Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl border border-[#443c33] bg-[#231e19] text-[#fef08a] hover:bg-[#2e2720] transition-colors"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-Over Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 md:hidden bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className="absolute top-0 right-0 w-[85%] max-w-sm h-full bg-[#1a1714] border-l border-[#3e362d] text-[#fefce8] p-5 flex flex-col shadow-2xl overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drawer Header */}
            <div className="flex items-center justify-between pb-4 border-b border-[#362f27]">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🍞</span>
                <div>
                  <h3 className="font-cinzel text-base font-bold text-[#fef08a]">The Testament</h3>
                  <p className="text-[10px] text-[#b8ad9c] font-cinzel">Quick Book Navigation</p>
                </div>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 rounded-lg text-[#b8ad9c] hover:text-[#fefce8] hover:bg-[#28221c]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Actions Card */}
            <div className="my-4 grid grid-cols-2 gap-2 text-xs font-cinzel">
              <button
                onClick={() => {
                  onOpenDailyBread();
                  setMobileMenuOpen(false);
                }}
                className="p-2.5 rounded-xl bg-[#241f1a] border border-[#3e362d] text-[#fef08a] flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-yellow-300" />
                <span>Daily Bread</span>
              </button>

              <button
                onClick={handleNextFontSize}
                className="p-2.5 rounded-xl bg-[#241f1a] border border-[#3e362d] text-[#fef08a] flex items-center justify-between"
              >
                <span className="flex items-center gap-1.5">
                  <Type className="w-4 h-4" /> Size:
                </span>
                <span className="font-mono uppercase">{fontSize}</span>
              </button>

              <button
                onClick={onToggleViewMode}
                className="col-span-2 p-2.5 rounded-xl bg-[#241f1a] border border-[#3e362d] text-[#fef08a] flex items-center justify-between"
              >
                <span className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4" /> Mode:
                </span>
                <span>{viewMode === 'continuous' ? 'Scroll All Books' : 'Single Book Study'}</span>
              </button>

              <button
                onClick={onToggleCrumbs}
                className="col-span-2 p-2 rounded-xl bg-[#241f1a] border border-[#3e362d] text-[#b8ad9c] flex items-center justify-between"
              >
                <span className="flex items-center gap-2 text-xs">
                  <Wheat className="w-3.5 h-3.5 text-yellow-300" /> Floating Crumbs:
                </span>
                <span className={crumbsEnabled ? 'text-[#fef08a] font-bold' : 'text-[#8c8273]'}>
                  {crumbsEnabled ? 'Active' : 'Off'}
                </span>
              </button>
            </div>

            {/* Book Index List */}
            <div className="flex-1 overflow-y-auto space-y-1.5 py-2">
              <div className="text-[11px] font-cinzel uppercase tracking-wider text-[#b8ad9c] px-2 mb-1">
                Books of the Testament
              </div>

              <button
                onClick={() => handleBookClick('all')}
                className={`w-full text-left p-2.5 rounded-xl text-xs font-cinzel flex items-center justify-between transition-colors ${
                  selectedBookId === 'all'
                    ? 'bg-[#322c24] text-[#fef08a] font-bold border border-yellow-500/40'
                    : 'text-[#e8e0d5] hover:bg-[#25201b]'
                }`}
              >
                <span>📜 All 10 Books (Full Scroll)</span>
                <ChevronRight className="w-3.5 h-3.5 text-[#b8ad9c]" />
              </button>

              {breadTestamentData.books.map((b) => {
                const isSelected = selectedBookId === b.id;
                return (
                  <button
                    key={b.id}
                    onClick={() => handleBookClick(b.id)}
                    className={`w-full text-left p-2.5 rounded-xl text-xs font-cinzel flex items-center justify-between transition-colors ${
                      isSelected
                        ? 'bg-[#322c24] text-[#fef08a] font-bold border border-yellow-500/40'
                        : 'text-[#e8e0d5] hover:bg-[#25201b]'
                    }`}
                  >
                    <span className="truncate pr-2">{b.number}</span>
                    <span className="text-[10px] text-[#b8ad9c] shrink-0 font-mono">
                      {b.chapters.length} ch
                    </span>
                  </button>
                );
              })}

              <button
                onClick={() => handleBookClick('benediction')}
                className={`w-full text-left p-2.5 rounded-xl text-xs font-cinzel flex items-center justify-between transition-colors ${
                  selectedBookId === 'benediction'
                    ? 'bg-[#322c24] text-[#fef08a] font-bold border border-yellow-500/40'
                    : 'text-yellow-300 hover:bg-[#25201b]'
                }`}
              >
                <span>✨ The Benediction of the Loaf</span>
                <ChevronRight className="w-3.5 h-3.5 text-[#b8ad9c]" />
              </button>
            </div>

            {/* Community link at bottom */}
            <div className="pt-3 border-t border-[#362f27] mt-auto">
              <a
                href={breadTestamentData.header.communityLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-1.5 p-2 rounded-xl bg-[#28221b] border border-[#443c33] text-xs font-cinzel text-[#fef08a] hover:bg-[#322a22]"
              >
                <span>💬 Join Council Server</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Hero Header Section */}
      <div id="header" className="pt-8 sm:pt-12 pb-6 sm:pb-8 text-center scroll-mt-20 px-4">
        {/* Halo Bread Icon with sacred hovering animation */}
        <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-3xl bg-[#221c17] border border-yellow-500/35 text-4xl sm:text-5xl mb-4 shadow-[0_0_30px_rgba(234,179,8,0.2)] select-none halo-bread">
          {breadTestamentData.header.haloIcon}
        </div>

        <h1 className="font-cinzel text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-[#fefce8] tracking-wide drop-shadow-[0_4px_16px_rgba(0,0,0,0.5)]">
          {breadTestamentData.header.title}
        </h1>

        <div className="font-medieval text-base sm:text-xl md:text-2xl text-[#fef08a] mt-2.5 sm:mt-3 tracking-wide opacity-95 max-w-xl mx-auto px-2">
          {breadTestamentData.header.subtitle}
        </div>

        {/* Scrollable Horizontal Book Navigation Strip (Mobile & Desktop) */}
        <div className="mt-6 max-w-4xl mx-auto relative px-1">
          <nav
            aria-label="Books navigation"
            className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-2.5 px-3 rounded-2xl bg-[#1e1a15]/90 border border-[#3e362d] shadow-lg scroll-smooth"
          >
            <button
              onClick={() => onNavigate('header')}
              className="shrink-0 px-3 py-1.5 text-xs font-cinzel rounded-lg transition-colors text-[#b8ad9c] hover:text-[#fefce8] hover:bg-[#28221c]"
            >
              Top
            </button>

            {breadTestamentData.books.map((b, idx) => {
              const isSelected = selectedBookId === b.id;
              return (
                <button
                  key={b.id}
                  onClick={() => {
                    onSelectBookId(b.id);
                    onNavigate(b.id);
                  }}
                  className={`shrink-0 px-3 py-1.5 text-xs font-cinzel rounded-lg transition-all ${
                    isSelected
                      ? 'bg-[#362f27] text-[#fef08a] font-bold border border-yellow-500/50 shadow-sm'
                      : 'text-[#ded6c9] hover:text-[#fef08a] hover:bg-[#28221c]'
                  }`}
                >
                  Book {idx + 1}
                </button>
              );
            })}

            <button
              onClick={() => {
                onSelectBookId('benediction');
                onNavigate('benediction');
              }}
              className={`shrink-0 px-3 py-1.5 text-xs font-cinzel rounded-lg transition-all ${
                selectedBookId === 'benediction'
                  ? 'bg-[#362f27] text-[#fef08a] font-bold border border-yellow-500/50'
                  : 'text-[#fef08a] font-bold hover:bg-[#28221c]'
              }`}
            >
              ✨ Benediction
            </button>
          </nav>
        </div>

        {/* Community Link Banner */}
        <div className="mt-4 sm:mt-5">
          <a
            href={breadTestamentData.header.communityLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#231e19] hover:bg-[#2b241e] border border-yellow-500/35 text-[#fef9c3] hover:text-[#fef08a] text-xs sm:text-sm font-cinzel tracking-wider shadow-md hover:scale-[1.02] transition-all"
          >
            <span>{breadTestamentData.header.communityText}</span>
          </a>
        </div>
      </div>
    </>
  );
};
