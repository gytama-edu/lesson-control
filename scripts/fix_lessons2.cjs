const fs = require('fs');
const path = require('path');

const lessonsPath = path.join(__dirname, '..', 'data', 'lessons.js');
let lines = fs.readFileSync(lessonsPath, 'utf8').split('\n');

const clauseIdx = lines.findIndex(l => l.startsWith('const lesson_grammar_clause_overview = {'));
let originalContent = lines.slice(clauseIdx).join('\n');

const passiveKeys = [
  'lesson_grammar_passive_voice_overview',
  'lesson_grammar_active_vs_passive_voice',
  'lesson_grammar_object_to_subject_passive',
  'lesson_grammar_by_agent_passive',
  'lesson_grammar_present_simple_passive',
  'lesson_grammar_past_simple_passive',
  'lesson_grammar_present_perfect_passive',
  'lesson_grammar_future_passive',
  'lesson_grammar_passive_for_processes',
  'lesson_grammar_passive_for_news_reports',
  'lesson_grammar_passive_for_formal_instructions',
  'lesson_grammar_passive_unknown_unimportant_doer',
  'lesson_grammar_modal_passive',
  'lesson_grammar_passive_with_two_objects',
  'lesson_grammar_get_passive',
  'lesson_grammar_common_passive_voice_mistakes'
];

let finalContent = originalContent;

const exportStart = finalContent.indexOf('export const lessons = [');
if (exportStart !== -1) {
  const exportEnd = finalContent.indexOf('];', exportStart);
  let exportBlock = finalContent.substring(exportStart + 'export const lessons = ['.length, exportEnd);
  
  const passiveKeysStr = passiveKeys.join(',\n  ');
  exportBlock = '\n  ' + passiveKeysStr + ',\n' + exportBlock;
  finalContent = finalContent.substring(0, exportStart) + 'export const lessons = [' + exportBlock + '];\n';
}

fs.writeFileSync(lessonsPath, finalContent, 'utf8');
console.log('Cleaned lessons.js (removed corrupted beginning)');
