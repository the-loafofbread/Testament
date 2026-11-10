/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { breadTestamentData, Book } from './data/breadTestament';
import { CrumbsBackground } from './components/CrumbsBackground';
import { HeaderNav } from './components/HeaderNav';
import { BookSection } from './components/BookSection';
import { BenedictionSection } from './components/BenedictionSection';
import { Footer } from './components/Footer';
import { SearchModal } from './components/SearchModal';
import { DailyBreadModal } from './components/DailyBreadModal';
import { BookmarksDrawer } from './components/BookmarksDrawer';
import { ChevronLeft, ChevronRight, BookOpen } from 'lucide-react';

export default function App() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isDailyBreadOpen, setIsDailyBreadOpen] = useState(false);
  const [isBookmarksOpen, setIsBookmarksOpen] = useState(false);
  const [fontSize, setFontSize] = useState<'sm' | 'md' | 'lg' | 'xl'>('md');
  const [crumbsEnabled, setCrumbsEnabled] = useState(true);
  const [viewMode, setViewMode] = useState<'continuous' | 'single'>('continuous');
  const [selectedBookId, setSelectedBookId] = useState<string>('all');
  const [speakingText, setSpeakingText] = useState<string | null>(null);

  // Global hotkeys (e.g. / or Ctrl+K to open search)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        (e.key === '/' || ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k')) &&
        !['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)
      ) {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Handle initial URL hash on mount
  useEffect(() => {
    const hash = window.location.hash.replace('#', '');
    if (hash) {
      setTimeout(() => {
        navigateToElement(hash);
      }, 300);
    }
  }, []);

  // Smooth scroll and illuminate target
  const navigateToElement = (targetId: string) => {
    // If we're in single-book mode, determine which book contains this element
    if (viewMode === 'single') {
      if (targetId.startsWith('book-')) {
        const bookId = targetId.split('-chapter-')[0].split('-v-')[0];
        setSelectedBookId(bookId);
      } else if (targetId === 'benediction') {
        setSelectedBookId('benediction');
      } else if (targetId === 'header') {
        // stay
      }
    }

    setTimeout(() => {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });

        // Highlight element with gold pulse glow
        el.classList.add('highlight-verse');
        setTimeout(() => {
          el.classList.remove('highlight-verse');
        }, 5500);

        // Update URL hash without reload
        if (history.pushState) {
          history.pushState(null, '', `#${targetId}`);
        } else {
          window.location.hash = targetId;
        }
      }
    }, 60);
  };

  // Text-to-Speech management
  const handlePlaySpeech = (text: string) => {
    if (!('speechSynthesis' in window)) {
      alert('Speech synthesis is not supported in this browser.');
      return;
    }

    window.speechSynthesis.cancel();

    if (speakingText === text) {
      setSpeakingText(null);
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.88; // slightly slower, peaceful scripture pacing
    utterance.pitch = 0.95;

    // Pick best English voice if available
    const voices = window.speechSynthesis.getVoices();
    const dignifiedVoice =
      voices.find((v) => v.lang.startsWith('en') && (v.name.includes('Natural') || v.name.includes('Serena') || v.name.includes('Daniel') || v.name.includes('Oliver'))) ||
      voices.find((v) => v.lang.startsWith('en'));
    if (dignifiedVoice) {
      utterance.voice = dignifiedVoice;
    }

    utterance.onend = () => setSpeakingText(null);
    utterance.onerror = () => setSpeakingText(null);

    setSpeakingText(text);
    window.speechSynthesis.speak(utterance);
  };

  const handleStopSpeaking = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setSpeakingText(null);
  };

  // Navigation helpers for Single-Book mode
  const getBookIndex = (id: string) => breadTestamentData.books.findIndex((b) => b.id === id);
  const currentSingleBook = breadTestamentData.books.find((b) => b.id === selectedBookId);

  const handleNextBook = () => {
    const curIdx = getBookIndex(selectedBookId);
    if (curIdx >= 0 && curIdx < breadTestamentData.books.length - 1) {
      const nextId = breadTestamentData.books[curIdx + 1].id;
      setSelectedBookId(nextId);
      navigateToElement(nextId);
    } else if (curIdx === breadTestamentData.books.length - 1) {
      setSelectedBookId('benediction');
      navigateToElement('benediction');
    }
  };

  const handlePrevBook = () => {
    if (selectedBookId === 'benediction') {
      const lastBookId = breadTestamentData.books[breadTestamentData.books.length - 1].id;
      setSelectedBookId(lastBookId);
      navigateToElement(lastBookId);
    } else {
      const curIdx = getBookIndex(selectedBookId);
      if (curIdx > 0) {
        const prevId = breadTestamentData.books[curIdx - 1].id;
        setSelectedBookId(prevId);
        navigateToElement(prevId);
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#151310] text-[#fefce8] relative selection:bg-yellow-400/20 selection:text-[#fef08a]">
      {/* Ambient background particles */}
      <CrumbsBackground enabled={crumbsEnabled} />

      {/* Radial warmth glow in background (non-red golden haze) */}
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-40"
        style={{
          backgroundImage: `
            radial-gradient(circle at 50% 0%, rgba(234, 179, 8, 0.12) 0%, transparent 65%),
            radial-gradient(circle at 50% 100%, rgba(161, 98, 7, 0.08) 0%, transparent 75%)
          `,
        }}
      />

      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Sticky Control & Brand Header */}
        <HeaderNav
          onOpenSearch={() => setIsSearchOpen(true)}
          onOpenBookmarks={() => setIsBookmarksOpen(true)}
          onOpenDailyBread={() => setIsDailyBreadOpen(true)}
          fontSize={fontSize}
          onChangeFontSize={setFontSize}
          crumbsEnabled={crumbsEnabled}
          onToggleCrumbs={() => setCrumbsEnabled(!crumbsEnabled)}
          selectedBookId={selectedBookId}
          onSelectBookId={(id) => {
            setSelectedBookId(id);
            if (id !== 'all' && viewMode === 'continuous') {
              navigateToElement(id);
            }
          }}
          viewMode={viewMode}
          onToggleViewMode={() =>
            setViewMode(viewMode === 'continuous' ? 'single' : 'continuous')
          }
          isSpeaking={!!speakingText}
          onStopSpeaking={handleStopSpeaking}
          onNavigate={navigateToElement}
        />

        {/* Main Testament Container */}
        <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 pt-4">
          {/* Reading View Modes */}
          {viewMode === 'single' ? (
            /* Single Book Study Mode */
            <div className="py-4">
              {selectedBookId === 'benediction' ? (
                <BenedictionSection
                  benediction={breadTestamentData.benediction}
                  fontSize={fontSize}
                  onPlaySpeech={handlePlaySpeech}
                  speakingText={speakingText}
                />
              ) : currentSingleBook ? (
                <div>
                  <BookSection
                    book={currentSingleBook}
                    fontSize={fontSize}
                    onPlaySpeech={handlePlaySpeech}
                    speakingText={speakingText}
                  />

                  {/* Prev/Next Book Pagination Controls */}
                  <div className="my-6 sm:my-8 p-3.5 sm:p-4 rounded-2xl bg-[#1e1a15] border border-[#3e352b] flex items-center justify-between font-cinzel text-xs sm:text-sm gap-2">
                    <button
                      onClick={handlePrevBook}
                      disabled={getBookIndex(selectedBookId) === 0}
                      className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-[#3e352b] bg-[#241f1a] text-[#ded6c9] hover:text-[#fef08a] hover:bg-[#2c241c] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                    >
                      <ChevronLeft className="w-4 h-4" />
                      <span>Prev Book</span>
                    </button>

                    <button
                      onClick={() => setViewMode('continuous')}
                      className="hidden sm:inline-flex items-center gap-1 text-[#b8ad9c] hover:text-[#fef08a]"
                    >
                      <BookOpen className="w-4 h-4 text-yellow-300" /> Switch to Continuous Scroll
                    </button>

                    <button
                      onClick={handleNextBook}
                      className="flex items-center gap-1.5 px-3 py-2 rounded-xl border border-[#3e352b] bg-[#241f1a] text-[#ded6c9] hover:text-[#fef08a] hover:bg-[#2c241c] transition-colors"
                    >
                      <span>
                        {selectedBookId === breadTestamentData.books[breadTestamentData.books.length - 1].id
                          ? 'Benediction'
                          : 'Next Book'}
                      </span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <p className="font-cinzel text-base sm:text-lg text-[#fef9c3]">
                    Select a book from the navigation above to read
                  </p>
                </div>
              )}
            </div>
          ) : (
            /* Continuous Full Testament Scroll Mode */
            <div className="space-y-12">
              {breadTestamentData.books.map((book) => (
                <BookSection
                  key={book.id}
                  book={book}
                  fontSize={fontSize}
                  onPlaySpeech={handlePlaySpeech}
                  speakingText={speakingText}
                />
              ))}

              {/* The Benediction of the Loaf */}
              <BenedictionSection
                benediction={breadTestamentData.benediction}
                fontSize={fontSize}
                onPlaySpeech={handlePlaySpeech}
                speakingText={speakingText}
              />
            </div>
          )}
        </main>

        {/* Sacred Footer */}
        <Footer onScrollToTop={() => navigateToElement('header')} />
      </div>

      {/* Universal Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigate={navigateToElement}
      />

      {/* Daily Bread Wisdom Modal */}
      <DailyBreadModal
        isOpen={isDailyBreadOpen}
        onClose={() => setIsDailyBreadOpen(false)}
        onNavigate={navigateToElement}
      />

      {/* Preserved Verses Drawer */}
      <BookmarksDrawer
        isOpen={isBookmarksOpen}
        onClose={() => setIsBookmarksOpen(false)}
        onNavigate={navigateToElement}
      />
    </div>
  );
}
