import { writeFileSync } from 'fs';
import bibleData from './bookChapterVerseData.mjs';

function generateReferences() {
  const references = [];

  bibleData.forEach(book => {
    // Add book-level reference
    references.push({
      book: book.name,
      reference: book.name
    });

    book.chapters.forEach((verseCount, chapterIndex) => {
      const chapter = chapterIndex + 1;
      
      // Add chapter-level reference
      references.push({
        book: book.name,
        chapter,
        reference: `${book.name} ${chapter}`
      });

      // Add verse-level references
      for (let verse = 1; verse <= verseCount; verse++) {
        references.push({
          book: book.name,
          chapter,
          verse,
          reference: `${book.name} ${chapter}:${verse}`
        });
      }
    });
  });

  return references;
}

const scriptureReferences = generateReferences();
writeFileSync('scripts/scriptureReferences.json', JSON.stringify(scriptureReferences, null, 2));

console.log(`Generated ${scriptureReferences.length} scripture references.`);