import { breadTestamentData, Book, Chapter, Verse, NotablePrayer } from '../data/breadTestament';

export type SearchCategory = 'all' | 'prayers' | 'commandments' | 'chapters' | 'books' | 'verses';

export interface SearchResult {
  id: string;
  targetElementId: string;
  category: 'prayer' | 'commandment' | 'book' | 'chapter' | 'verse' | 'benediction';
  categoryLabel: string;
  bookTitle?: string;
  chapterTitle?: string;
  citation?: string;
  title: string;
  snippet: string;
  matchedText?: string;
}

export function searchTestament(
  query: string,
  category: SearchCategory = 'all',
  bookFilter: string = 'all'
): SearchResult[] {
  const trimmed = query.trim().toLowerCase();
  const results: SearchResult[] = [];

  if (!trimmed) {
    // Return notable prayers and first chapters as default suggested items when query is empty
    if (category === 'all' || category === 'prayers' || category === 'commandments') {
      breadTestamentData.notablePrayers.forEach((p) => {
        if (category === 'commandments' && p.category !== 'commandment') return;
        results.push({
          id: p.id,
          targetElementId: p.targetId,
          category: p.category === 'commandment' ? 'commandment' : 'prayer',
          categoryLabel: p.category === 'commandment' ? 'Commandment' : 'Sacred Liturgy',
          title: p.title,
          snippet: p.previewText,
          citation: p.subtitle,
        });
      });
    }
    return results;
  }

  // 1. Search Notable Prayers & Liturgies
  if (category === 'all' || category === 'prayers' || category === 'commandments') {
    breadTestamentData.notablePrayers.forEach((p) => {
      const isCmd = p.category === 'commandment';
      if (category === 'commandments' && !isCmd) return;
      if (
        p.title.toLowerCase().includes(trimmed) ||
        p.subtitle.toLowerCase().includes(trimmed) ||
        p.previewText.toLowerCase().includes(trimmed)
      ) {
        results.push({
          id: p.id,
          targetElementId: p.targetId,
          category: isCmd ? 'commandment' : 'prayer',
          categoryLabel: isCmd ? 'Commandment' : 'Prayer & Liturgy',
          title: p.title,
          snippet: p.previewText,
          citation: p.subtitle,
        });
      }
    });
  }

  // 2. Search Books
  if ((category === 'all' || category === 'books') && bookFilter === 'all') {
    breadTestamentData.books.forEach((book) => {
      if (
        book.number.toLowerCase().includes(trimmed) ||
        book.subtitle.toLowerCase().includes(trimmed) ||
        book.id.toLowerCase().includes(trimmed)
      ) {
        results.push({
          id: `result-${book.id}`,
          targetElementId: book.id,
          category: 'book',
          categoryLabel: 'Book',
          title: book.number,
          snippet: book.subtitle,
          citation: `${book.chapters.length} Chapters`,
        });
      }
    });
  }

  // 3. Search Chapters
  if (category === 'all' || category === 'chapters') {
    breadTestamentData.books.forEach((book) => {
      if (bookFilter !== 'all' && book.id !== bookFilter) return;

      book.chapters.forEach((chapter) => {
        if (chapter.title.toLowerCase().includes(trimmed)) {
          const firstVerse = chapter.verses[0]?.text || '';
          results.push({
            id: `result-${chapter.id}`,
            targetElementId: chapter.id,
            category: 'chapter',
            categoryLabel: 'Chapter',
            bookTitle: book.number,
            title: `${book.number} — ${chapter.title}`,
            snippet: firstVerse,
            citation: `${chapter.verses.length} Verses`,
          });
        }
      });
    });
  }

  // 4. Search Benediction
  if (category === 'all' || category === 'prayers' || category === 'verses') {
    const ben = breadTestamentData.benediction;
    if (
      ben.title.toLowerCase().includes(trimmed) ||
      ben.quote.toLowerCase().includes(trimmed) ||
      ben.amen.toLowerCase().includes(trimmed) ||
      ben.hygieneReminder.toLowerCase().includes(trimmed)
    ) {
      results.push({
        id: 'result-benediction-main',
        targetElementId: 'benediction',
        category: 'benediction',
        categoryLabel: 'Benediction',
        title: ben.title,
        snippet: `"${ben.quote}" — ${ben.amen} (${ben.hygieneReminder})`,
        citation: 'The Final Verse',
      });
    }

    ben.lines.forEach((line, idx) => {
      if (line.toLowerCase().includes(trimmed)) {
        results.push({
          id: `result-benediction-line-${idx}`,
          targetElementId: 'benediction',
          category: 'benediction',
          categoryLabel: 'Benediction Line',
          title: 'The Benediction of the Loaf',
          snippet: line,
          citation: `Line ${idx + 1}`,
        });
      }
    });
  }

  // 5. Search Verses (across all 553 verses)
  if (category === 'all' || category === 'verses') {
    breadTestamentData.books.forEach((book) => {
      if (bookFilter !== 'all' && book.id !== bookFilter) return;

      book.chapters.forEach((chapter) => {
        chapter.verses.forEach((verse) => {
          const matchNum = verse.num.toLowerCase().includes(trimmed);
          const matchText = verse.text.toLowerCase().includes(trimmed);

          if (matchNum || matchText) {
            results.push({
              id: `result-verse-${chapter.id}-${verse.num.replace(':', '-')}`,
              targetElementId: `${chapter.id}-v-${verse.num.replace(':', '-')}`,
              category: 'verse',
              categoryLabel: 'Verse',
              bookTitle: book.number,
              chapterTitle: chapter.title,
              title: `${book.number} | ${chapter.title} [${verse.num}]`,
              snippet: verse.text,
              citation: verse.num,
            });
          }
        });
      });
    });
  }

  return results;
}
