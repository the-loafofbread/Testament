import React, { useState, useEffect } from 'react';
import { X, Bookmark, Trash2, ExternalLink, Copy, Check } from 'lucide-react';
import { getBookmarks, toggleBookmark, BookmarkItem } from '../utils/storage';
import { formatStandardVerseCitation } from '../utils/formatCitation';

interface BookmarksDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (targetId: string) => void;
}

export const BookmarksDrawer: React.FC<BookmarksDrawerProps> = ({ isOpen, onClose, onNavigate }) => {
  const [bookmarks, setBookmarks] = useState<BookmarkItem[]>([]);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      setBookmarks(getBookmarks());
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleRemove = (item: BookmarkItem) => {
    toggleBookmark(item);
    setBookmarks(getBookmarks());
  };

  const handleCopy = (item: BookmarkItem) => {
    const textToCopy = formatStandardVerseCitation(
      item.bookTitle,
      '',
      item.chapterTitle,
      undefined,
      item.verseNum,
      item.text
    );
    navigator.clipboard.writeText(textToCopy);
    setCopiedId(item.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/75 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="w-full sm:max-w-md h-full bg-[#1a1714] border-l border-[#3e362d] text-[#fefce8] flex flex-col shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-4 sm:p-5 border-b border-[#362e25] bg-[#15120f] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-[#241f1a] border border-[#3e352b] text-[#fef08a]">
              <Bookmark className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            </div>
            <div>
              <h3 className="font-cinzel text-base sm:text-lg font-bold text-[#fefce8]">
                Saved Scriptures
              </h3>
              <p className="text-xs text-[#b8ad9c] font-cinzel">
                {bookmarks.length} {bookmarks.length === 1 ? 'verse' : 'verses'} preserved
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-[#b8ad9c] hover:text-[#fefce8] hover:bg-[#25201a] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-3.5 sm:p-4 space-y-3">
          {bookmarks.length === 0 ? (
            <div className="text-center py-16 px-4">
              <div className="text-4xl mb-3">🌾</div>
              <p className="font-cinzel text-[#fef9c3] text-base">No verses preserved yet</p>
              <p className="font-faustina text-sm text-[#b8ad9c] mt-1 max-w-xs mx-auto">
                While reading the sacred books, click the bookmark icon on any verse to keep it close at hand.
              </p>
            </div>
          ) : (
            bookmarks.map((bm) => (
              <div
                key={bm.id}
                className="p-3.5 sm:p-4 rounded-xl bg-[#221c17] border border-[#383026] hover:border-[#4d4234] transition-all flex flex-col gap-2 group"
              >
                <div className="flex items-center justify-between text-xs font-cinzel text-[#fef08a]">
                  <span className="font-semibold">{bm.bookTitle.split(':')[0]}</span>
                  <span className="font-mono text-[#b8ad9c]">v. {bm.verseNum}</span>
                </div>

                <div className="text-xs text-[#b8ad9c] font-cinzel">
                  {bm.chapterTitle}
                </div>

                <p className="font-faustina text-sm text-[#fefce8] italic leading-relaxed line-clamp-3">
                  &ldquo;{bm.text}&rdquo;
                </p>

                <div className="pt-2 border-t border-[#2e261e] flex items-center justify-between text-xs">
                  <span className="text-[11px] text-[#8c8273]">Saved {bm.savedAt}</span>
                  <div className="flex items-center gap-1.5">
                    <button
                      onClick={() => handleCopy(bm)}
                      title="Copy verse"
                      className="p-1.5 rounded-lg text-[#b8ad9c] hover:text-[#fef08a] hover:bg-[#2b241e] transition-colors"
                    >
                      {copiedId === bm.id ? (
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                    <button
                      onClick={() => {
                        onNavigate(bm.targetId);
                        onClose();
                      }}
                      title="Go to passage"
                      className="p-1.5 rounded-lg text-[#b8ad9c] hover:text-[#fef08a] hover:bg-[#2b241e] transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => handleRemove(bm)}
                      title="Remove bookmark"
                      className="p-1.5 rounded-lg text-[#b8ad9c] hover:text-yellow-200 hover:bg-[#322920] transition-colors"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
