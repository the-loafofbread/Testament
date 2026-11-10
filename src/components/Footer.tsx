import React from 'react';
import { breadTestamentData } from '../data/breadTestament';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  onScrollToTop: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onScrollToTop }) => {
  return (
    <footer className="mt-14 sm:mt-20 border-t border-[#362e25] bg-[#14120f] pt-10 sm:pt-14 pb-14 sm:pb-16 text-center text-[#b8ad9c] font-cinzel px-4">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* Wheat Flourish */}
        <div className="flex items-center justify-center gap-2.5 sm:gap-3 text-yellow-300 mb-4 text-lg sm:text-xl select-none">
          <span>🌾</span>
          <span className="w-12 sm:w-16 h-px bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent" />
          <span>🍞</span>
          <span className="w-12 sm:w-16 h-px bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent" />
          <span>🌾</span>
        </div>

        <p className="text-sm sm:text-base text-[#fefce8] font-semibold tracking-wide max-w-md mx-auto">
          {breadTestamentData.footer.praise}
        </p>

        <p className="text-xs sm:text-sm text-[#fef08a] font-bold mt-2 tracking-wider">
          {breadTestamentData.footer.credits}
        </p>

        {/* Back to top button */}
        <button
          onClick={onScrollToTop}
          className="mt-6 sm:mt-8 inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#221c17] border border-[#3e352b] text-[#ded6c9] hover:text-[#fef08a] hover:bg-[#2c241c] text-xs tracking-wider transition-colors shadow-sm"
        >
          <ArrowUp className="w-4 h-4" />
          <span>Ascend to the Hearth (Top)</span>
        </button>

        <div className="mt-6 text-[10px] sm:text-xs text-[#8c8273] font-mono tracking-normal">
          All 10 Books • 31 Chapters • 553 Sacred Verses • The Benediction of the Loaf
        </div>
      </div>
    </footer>
  );
};
