const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), 'data', 'lessons.js');
let fileContent = fs.readFileSync(filePath, 'utf-8');

// The file exports `lessons`. We can use regex or `eval` to read it, but since it's a JS file with `export const lessons = [ ... ];`
// It's safer to read the file, modify the string if possible, or eval it after stripping `export`.
// Let's strip `export const lessons = `, then eval it, modify the objects, and write it back.

const match = fileContent.match(/export\s+const\s+lessons\s*=\s*\[/);
if (!match) {
  console.error("Could not find 'export const lessons = ['");
  process.exit(1);
}

const startIndex = match.index + match[0].length - 1; // index of '['

// Extract the array string
let arrayStr = fileContent.substring(startIndex);
// Usually there's a semicolon at the very end
if (arrayStr.endsWith(';')) {
  arrayStr = arrayStr.slice(0, -1);
}
if (arrayStr.endsWith(';\n')) {
  arrayStr = arrayStr.slice(0, -2);
}

// Evaluate it
let lessons;
try {
  lessons = eval('(' + arrayStr + ')');
} catch (e) {
  console.error("Eval failed:", e);
  process.exit(1);
}

// Fix Modals Pathway lessons
lessons.forEach(lesson => {
  if (lesson.pathway === 'Modals Pathway') {
    // Fix examples
    if (lesson.examples && Array.isArray(lesson.examples)) {
      lesson.examples = lesson.examples.map(ex => {
        if (ex.en) {
          return {
            type: ex.type || 'Example',
            sentence: `${ex.en} / ${ex.id}`,
            note: ex.explanation || ''
          };
        }
        return ex; // leave untouched if already correct
      });
    }

    // Fix commonMistakes
    if (lesson.commonMistakes && Array.isArray(lesson.commonMistakes)) {
      lesson.commonMistakes = lesson.commonMistakes.map(mistake => {
        if (typeof mistake === 'object' && mistake.wrong) {
          return `Incorrect: '${mistake.wrong}' | Correct: '${mistake.correct}' (Why: ${mistake.explanation})`;
        }
        return mistake; // leave untouched if already a string
      });
    }

    // Fix summary
    if (lesson.quickSummary && !lesson.summary) {
      // Split by dot and space to make multiple points if possible
      const points = lesson.quickSummary.split('. ').filter(s => s.trim().length > 0).map(s => s.trim() + (s.endsWith('.') ? '' : '.'));
      lesson.summary = points;
      delete lesson.quickSummary;
    }
  }
});

// Convert back to string
const newArrayStr = JSON.stringify(lessons, null, 2);

const newFileContent = fileContent.substring(0, match.index) + 'export const lessons = ' + newArrayStr + ';\n';

fs.writeFileSync(filePath, newFileContent, 'utf-8');
console.log("Successfully fixed Modals Pathway lessons formatting.");
