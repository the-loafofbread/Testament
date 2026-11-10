import React, { useState, useEffect, useRef } from 'react';
import { Search, X, BookOpen, Scroll, Flame, Sparkles, Filter, ChevronRight } from 'lucide-react';
import { searchTestament, SearchResult, SearchCategory } from '../utils/search';
import { breadTestamentData } from '../data/breadTestament';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (targetId: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose, onNavigate }) => {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<SearchCategory>('all');
  const [bookFilter, setBookFilter] = useState('all');
  const [results, setResults] = useState<SearchResult[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 60);
    }
  }, [isOpen]);

  useEffect(() => {
    const res = searchTestament(query, category, bookFilter);
    setResults(res.slice(0, 60)); // limit to 60 for snappy performance
  }, [query, category, bookFilter]);

  // Keyboard escape listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const highlightMatch = (text: string, term: string) => {
    if (!term.trim()) return text;
    const parts = text.split(new RegExp(`(${term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi'));
    return (
      <span>
        {parts.map((part, i) =>
          part.toLowerCase() === term.toLowerCase() ? (
            <mark key={i} className="bg-yellow-300 text-stone-950 px-1 py-0.5 rounded font-bold">
              {part}
            </mark>
          ) : (
            part
          )
        )}
      </span>
    );
  };

  const getCategoryIcon = (cat: SearchResult['category']) => {
    switch (cat) {
      case 'prayer':
      case 'benediction':
        return <Sparkles className="w-3.5 h-3.5 text-yellow-300" />;
      case 'commandment':
        return <Flame className="w-3.5 h-3.5 text-yellow-400" />;
      case 'book':
        return <BookOpen className="w-3.5 h-3.5 text-[#ded6c9]" />;
      case 'chapter':
        return <Scroll className="w-3.5 h-3.5 text-yellow-300" />;
      default:
        return <span className="text-xs">🍞</span>;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-3 sm:pt-16 px-2 sm:px-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="w-full max-w-3xl rounded-2xl border border-[#443a2f] shadow-2xl overflow-hidden flex flex-col max-h-[92vh] sm:max-h-[85vh] bg-[#1a1713] text-[#fefce8]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Header Bar */}
        <div className="p-3.5 sm:p-5 border-b border-[#362e25] bg-[#161310] flex items-center gap-2.5 sm:gap-3">
          <div className="p-2 rounded-xl bg-[#25201a] border border-[#3e352b] text-[#fef08a] shrink-0">
            <Search className="w-4 sm:w-5 h-4 sm:h-5" />
          </div>

          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search verses, prayers, commandments, chapters, or books..."
            className="flex-1 bg-transparent text-sm sm:text-lg text-[#fefce8] placeholder:text-[#8c8273] focus:outline-none font-faustina min-w-0"
          />

          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1.5 rounded-lg text-[#b8ad9c] hover:text-[#fefce8] hover:bg-[#25201a] transition-colors shrink-0"
            >
              <X className="w-4 h-4" />
            </button>
          )}

          <button
            onClick={onClose}
            className="px-2.5 py-1 text-xs font-cinzel tracking-wider rounded-lg border border-[#3e352b] text-[#fef08a] hover:bg-[#25201a] transition-colors shrink-0"
          >
            ESC
          </button>
        </div>

        {/* Category Filters */}
        <div className="px-3 sm:px-4 py-2.5 bg-[#181410] border-b border-[#362e25] flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs">
          <span className="text-[#b8ad9c] font-cinzel text-xs flex items-center gap-1 mr-1">
            <Filter className="w-3 h-3 text-[#fef08a]" /> Filter:
          </span>

          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5 max-w-full">
            {[
              { id: 'all', label: 'All' },
              { id: 'prayers', label: 'Prayers' },
              { id: 'commandments', label: 'Commandments' },
              { id: 'books', label: 'Books' },
              { id: 'chapters', label: 'Chapters' },
              { id: 'verses', label: 'Verses' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setCategory(tab.id as SearchCategory)}
                className={`shrink-0 px-2.5 py-1 rounded-full text-xs font-cinzel transition-all border ${
                  category === tab.id
                    ? 'bg-[#362f27] text-[#fef08a] border-yellow-500/60 font-bold'
                    : 'bg-[#201b16] text-[#b8ad9c] border-transparent hover:border-[#3e352b] hover:text-[#fefce8]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Book Scope Dropdown */}
          <div className="ml-auto w-full sm:w-auto mt-2 sm:mt-0">
            <select
              value={bookFilter}
              onChange={(e) => setBookFilter(e.target.value)}
              className="w-full sm:w-auto bg-[#14120f] border border-[#3e352b] rounded-lg px-2.5 py-1 text-xs text-[#fef08a] font-cinzel focus:outline-none focus:border-yellow-400 cursor-pointer"
            >
              <option value="all">All 10 Books</option>
              {breadTestamentData.books.map((b) => (
                <option key={b.id} value={b.id}>
                  {b.number.split(':')[0]}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Results List */}
        <div className="flex-1 overflow-y-auto p-2.5 sm:p-4 divide-y divide-[#2d251d] space-y-1 sm:space-y-2">
          {results.length === 0 ? (
            <div className="text-center py-12 px-4">
              <div className="text-4xl mb-3">🥖</div>
              <p className="font-cinzel text-[#fef9c3] text-base">No sacred verses found</p>
              <p className="text-[#b8ad9c] text-xs sm:text-sm mt-1 font-faustina">
                Try searching for words like &ldquo;Poy&rdquo;, &ldquo;famine&rdquo;, &ldquo;commandment&rdquo;, &ldquo;fire&rdquo;, or &ldquo;Benediction&rdquo;
              </p>
            </div>
          ) : (
            results.map((res) => (
              <div
                key={res.id}
                onClick={() => {
                  onNavigate(res.targetElementId);
                  onClose();
                }}
                className="group p-2.5 sm:p-3.5 rounded-xl hover:bg-[#252019] border border-transparent hover:border-[#443a2f] cursor-pointer transition-all flex flex-col gap-1.5"
              >
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="flex items-center gap-1 text-[11px] font-cinzel uppercase px-2 py-0.5 rounded-md bg-[#221c17] border border-[#3e352b] text-[#fef08a]">
                      {getCategoryIcon(res.category)}
                      {res.categoryLabel}
                    </span>
                    {res.citation && (
                      <span className="text-xs font-mono text-[#b8ad9c] bg-[#1e1914] px-1.5 py-0.5 rounded">
                        {res.citation}
                      </span>
                    )}
                  </div>
                  <ChevronRight className="w-4 h-4 text-[#8c8273] group-hover:text-[#fef08a] group-hover:translate-x-0.5 transition-all shrink-0" />
                </div>

                <div className="font-cinzel text-xs sm:text-base font-semibold text-[#fefce8] group-hover:text-[#fef08a] transition-colors">
                  {highlightMatch(res.title, query)}
                </div>

                <p className="font-faustina text-xs sm:text-sm text-[#ded6c9] leading-relaxed line-clamp-2">
                  {highlightMatch(res.snippet, query)}
                </p>
              </div>
            ))
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="p-3 bg-[#15120f] border-t border-[#362e25] flex items-center justify-between text-xs text-[#b8ad9c] font-cinzel">
          <span>{results.length} passages matched</span>
          <span className="hidden sm:inline">Click passage to illuminate &amp; scroll</span>
        </div>
      </div>
    </div>
  );
};
