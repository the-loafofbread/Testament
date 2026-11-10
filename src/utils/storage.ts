export interface BookmarkItem {
  id: string;
  targetId: string;
  bookTitle: string;
  chapterTitle: string;
  verseNum: string;
  text: string;
  savedAt: string;
}

const STORAGE_KEY = 'bread_testament_bookmarks_v1';

export function getBookmarks(): BookmarkItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export function isBookmarked(targetId: string): boolean {
  const bookmarks = getBookmarks();
  return bookmarks.some((b) => b.targetId === targetId);
}

export function toggleBookmark(item: Omit<BookmarkItem, 'savedAt'>): boolean {
  const current = getBookmarks();
  const exists = current.find((b) => b.targetId === item.targetId);

  let updated: BookmarkItem[];
  let wasAdded = false;

  if (exists) {
    updated = current.filter((b) => b.targetId !== item.targetId);
    wasAdded = false;
  } else {
    updated = [{ ...item, savedAt: new Date().toLocaleDateString() }, ...current];
    wasAdded = true;
  }

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (err) {
    console.error('Failed to save bookmark', err);
  }

  return wasAdded;
}
