export function getBookRomanNumeral(bookTitleOrNumber: string, fallbackId?: string): string {
  // Matches "BOOK III: THE BOOK OF FOOD POISONING" -> "III"
  const match = bookTitleOrNumber.match(/BOOK\s+([IVXLCDM]+)/i);
  if (match) {
    return match[1].toUpperCase();
  }

  // Fallback if ID is provided e.g. "book-3"
  if (fallbackId) {
    const idMatch = fallbackId.match(/book-(\d+)/i);
    if (idMatch) {
      const idx = parseInt(idMatch[1], 10);
      const romans = ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'];
      if (romans[idx]) return romans[idx];
    }
  }

  return bookTitleOrNumber;
}

export function getChapterNumber(chapterTitle: string, fallbackIndex?: number): number | string {
  // Matches "Chapter 1 — The Age of Abundance" -> 1
  const match = chapterTitle.match(/Chapter\s+(\d+)/i);
  if (match) {
    return parseInt(match[1], 10);
  }
  return fallbackIndex !== undefined ? fallbackIndex : chapterTitle;
}

export function formatDailyBreadCitation(
  bookNumber: string,
  bookId: string,
  chapterTitle: string,
  chapterIndex?: number,
  verseNum: string = '',
  verseText: string = '',
  date: Date = new Date()
): string {
  const roman = getBookRomanNumeral(bookNumber, bookId);
  const chapNum = getChapterNumber(chapterTitle, chapterIndex);
  const mm = String(date.getMonth() + 1).padStart(2, '0');
  const dd = String(date.getDate()).padStart(2, '0');
  const yyyy = date.getFullYear();

  return `${roman},${chapNum}, ${verseNum}: — "*${verseText}*"\n-# (The Bread Testament • Daily Bread for ${dd}/${mm}/${yyyy})`;
}

export function formatStandardVerseCitation(
  bookNumber: string,
  bookId: string,
  chapterTitle: string,
  chapterIndex?: number,
  verseNum: string = '',
  verseText: string = ''
): string {
  const roman = getBookRomanNumeral(bookNumber, bookId);
  const chapNum = getChapterNumber(chapterTitle, chapterIndex);

  return `${roman},${chapNum}, ${verseNum}: — ${verseText}`;
}
