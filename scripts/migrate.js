const fs = require('fs');

const dataPath = 'data/lessons.js';
const content = fs.readFileSync(dataPath, 'utf8');

// Match the array export
const arrayMatch = content.match(/export const lessons = (\[[\s\S]*\]);/);
if (!arrayMatch) {
  console.error("Could not find lessons array");
  process.exit(1);
}

let lessons = [];
try {
  // Using eval to parse JS object since it might not be strict JSON
  lessons = eval(arrayMatch[1]);
} catch (e) {
  console.error("Error parsing lessons:", e);
  process.exit(1);
}

// Map over lessons and convert `content` to structured fields if it exists
lessons.forEach(lesson => {
  if (!lesson.content) return;
  
  const md = lesson.content;
  
  // Find sections
  const sections = md.split(/###\s+/).filter(Boolean);
  
  // First section is usually introduction (no ### heading before it originally, but we split by ###)
  // Wait, if content starts with "### Title", the first section is the introduction.
  
  let introStr = "";
  let meaningStr = "";
  let patternsStr = "";
  let stepByStepStr = "";
  let mistakesStr = "";
  let comparisonStr = "";
  let indoStr = "";
  let practiceStr = "";
  let classroomStr = "";
  let summaryStr = "";
  
  sections.forEach(sec => {
    const lines = sec.trim().split('\n');
    const titleLine = lines[0].toLowerCase();
    const body = lines.slice(1).join('\n').trim();
    
    // convert markdown to HTML string for the body, using simple regex for bold, italic, lists.
    // Actually, we can just store the HTML directly, or keep markdown and let marked parse the specific fields!
    // But Articles & Determiners don't use markdown parser in frontend?
    // Wait, Articles & Determiners fields contain HTML tags (like <br>, <strong>, <em>).
    
  });
});
