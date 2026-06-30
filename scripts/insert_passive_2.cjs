const fs = require('fs');
const path = require('path');

const lessonsPath = path.join(__dirname, '..', 'data', 'lessons.js');
let content = fs.readFileSync(lessonsPath, 'utf8');

const updatedLessons = {
  lesson_grammar_present_simple_passive: `{
  "id": "grammar-present-simple-passive",
  "backHref": "passive-voice.html",
  "backLabel": "Back to Passive Voice",
  "title": "Present Simple Passive",
  "skill": "Grammar",
  "category": "Passive Voice",
  "level": "Intermediate",
  "description": "Use passive voice for general facts, routines, systems, and rules.",
  "learningGoals": [
    "Learn the structure of Present Simple Passive.",
    "Understand when to use it (facts, routines, systems).",
    "Identify common errors with 'be' verb agreement in the present."
  ],
  "meaning": "Present Simple Passive is used when we want to talk about things that are generally true, happen regularly (routines), or are part of a system, but we want to focus on the receiver of the action, not the doer.",
  "keyIdeas": [
    "It is used for general facts and repeated actions.",
    "The focus is on what happens, not who does it.",
    "We use 'am', 'is', or 'are' based on the subject, followed by Verb 3."
  ],
  "patterns": [
    {
      "name": "Present Simple Passive",
      "formula": "Subject + am/is/are + Verb 3",
      "examples": [
        {
          "en": "English is spoken in many countries.",
          "id": "Bahasa Inggris dituturkan di banyak negara.",
          "explanation": "General fact. Focus on the language."
        },
        {
          "en": "The classroom is cleaned every morning.",
          "id": "Ruang kelas dibersihkan setiap pagi.",
          "explanation": "Routine action. Focus on the classroom."
        },
        {
          "en": "These books are used by many students.",
          "id": "Buku-buku ini digunakan oleh banyak siswa.",
          "explanation": "System/fact. Plural subject 'books' takes 'are'."
        },
        {
          "en": "The documents are checked before submission.",
          "id": "Dokumen-dokumen tersebut diperiksa sebelum penyerahan.",
          "explanation": "Part of a process or rule."
        },
        {
          "en": "Rice is eaten in many Asian countries.",
          "id": "Beras/Nasi dimakan di banyak negara Asia.",
          "explanation": "General cultural fact."
        }
      ]
    }
  ],
  "commonMistakes": [
    {
      "wrong": "English spoken in many countries.",
      "correct": "English is spoken in many countries.",
      "explanation": "You must include the 'be' verb (is/are)."
    },
    {
      "wrong": "English is speak in many countries.",
      "correct": "English is spoken in many countries.",
      "explanation": "The main verb must be in Verb 3 (past participle) form."
    },
    {
      "wrong": "These books is used.",
      "correct": "These books are used.",
      "explanation": "The 'be' verb must match the new subject. 'Books' is plural, so use 'are'."
    }
  ],
  "introduction": "Think about the rules in a library or the daily routine at a school. If you say, 'The janitor cleans the classroom every morning,' you are focusing on the janitor. But what if you want to focus on the classroom itself? You would say, 'The classroom is cleaned every morning.'<br><br>This is the Present Simple Passive. We use it to describe systems, routines, rules, and general facts when the receiver of the action is the most important part of the message.<br><br>You will see this structure everywhere in formal writing, instructions, and news because it sounds objective and professional. Mastering it requires remembering two things: choosing the correct present tense 'be' verb (am, is, or are) and always using Verb 3.",
  "stepByStep": "1. <strong>Identify the receiver:</strong> Make it the subject (e.g., 'The documents').<br>2. <strong>Choose am/is/are:</strong> Match it to the subject ('The documents are').<br>3. <strong>Use Verb 3:</strong> Add the past participle ('checked').<br>4. <strong>Result:</strong> 'The documents are checked.'",
  "indonesianLearnerWarning": "Subject-verb agreement is tricky here. Indonesian learners often use 'is' for everything, but if the new subject is plural (like 'books' or 'rules'), you must use 'are'."
}`,

  lesson_grammar_past_simple_passive: `{
  "id": "grammar-past-simple-passive",
  "backHref": "passive-voice.html",
  "backLabel": "Back to Passive Voice",
  "title": "Past Simple Passive",
  "skill": "Grammar",
  "category": "Passive Voice",
  "level": "Intermediate",
  "description": "Use passive voice for completed past actions focusing on the result.",
  "learningGoals": [
    "Learn the structure of Past Simple Passive.",
    "Understand when to use it (completed past events).",
    "Differentiate between 'was' and 'were'."
  ],
  "meaning": "Past Simple Passive is used to talk about actions that were completed in the past, where the focus is on the receiver of the action or the result, rather than who did it.",
  "keyIdeas": [
    "It describes finished past events.",
    "The focus is on what happened to the subject.",
    "We use 'was' or 'were' based on the subject, followed by Verb 3."
  ],
  "patterns": [
    {
      "name": "Past Simple Passive",
      "formula": "Subject + was/were + Verb 3",
      "examples": [
        {
          "en": "The window was broken yesterday.",
          "id": "Jendela itu dipecahkan kemarin.",
          "explanation": "A completed past event. Focus is on the window."
        },
        {
          "en": "The lesson was explained clearly.",
          "id": "Pelajaran tersebut dijelaskan dengan jelas.",
          "explanation": "Focus on the lesson."
        },
        {
          "en": "The files were deleted by accident.",
          "id": "File-file tersebut dihapus secara tidak sengaja.",
          "explanation": "Plural subject 'files' takes 'were'."
        },
        {
          "en": "The house was built in 1998.",
          "id": "Rumah tersebut dibangun pada tahun 1998.",
          "explanation": "A historical fact focusing on the creation of the house."
        },
        {
          "en": "The students were invited to the event.",
          "id": "Para siswa diundang ke acara tersebut.",
          "explanation": "Plural subject receiving an action."
        }
      ]
    }
  ],
  "commonMistakes": [
    {
      "wrong": "The window broken yesterday.",
      "correct": "The window was broken yesterday.",
      "explanation": "You must include the past 'be' verb (was/were)."
    },
    {
      "wrong": "The files was deleted.",
      "correct": "The files were deleted.",
      "explanation": "'Files' is plural, so it must take 'were', not 'was'."
    },
    {
      "wrong": "The house was build in 1998.",
      "correct": "The house was built in 1998.",
      "explanation": "Always use Verb 3 (built), not Verb 1 (build)."
    }
  ],
  "introduction": "When we tell stories about the past, we often want to describe what happened to things or people. For example, if you enter a room and see broken glass, you don't know who did it. You can only say, 'The window was broken yesterday.'<br><br>This is the Past Simple Passive. It is perfect for describing past events, historical facts, accidents, or completed processes when the person responsible is unknown or less important than the event itself.<br><br>The structure is very similar to the Present Simple Passive, but instead of using 'am/is/are', we step back in time and use 'was' or 'were'.",
  "stepByStep": "1. <strong>Identify the receiver:</strong> Make it the subject (e.g., 'The house').<br>2. <strong>Choose was/were:</strong> Match it to the subject ('The house was').<br>3. <strong>Use Verb 3:</strong> Add the past participle ('built').<br>4. <strong>Result:</strong> 'The house was built in 1998.'",
  "indonesianLearnerWarning": "Because Indonesian doesn't change verbs for past tense, learners often say 'The window is broken yesterday'. Always remember to change the 'be' verb to 'was' or 'were' when talking about the past."
}`,

  lesson_grammar_present_perfect_passive: `{
  "id": "grammar-present-perfect-passive",
  "backHref": "passive-voice.html",
  "backLabel": "Back to Passive Voice",
  "title": "Present Perfect Passive",
  "skill": "Grammar",
  "category": "Passive Voice",
  "level": "Upper-Intermediate",
  "description": "Connect a completed action to the present result using passive voice.",
  "learningGoals": [
    "Learn the structure of Present Perfect Passive.",
    "Understand the connection between past action and present result.",
    "Differentiate between 'has been' and 'have been'."
  ],
  "meaning": "Present Perfect Passive connects a recently completed action to the present moment. The focus is on the present result of the action, not on the specific time it happened or the person who did it.",
  "keyIdeas": [
    "It shows that an action is finished and the result matters right now.",
    "We use 'has been' or 'have been' based on the subject, followed by Verb 3.",
    "It is very common for status updates and reporting progress."
  ],
  "patterns": [
    {
      "name": "Present Perfect Passive",
      "formula": "Subject + has/have been + Verb 3",
      "examples": [
        {
          "en": "The task has been completed.",
          "id": "Tugas tersebut telah diselesaikan.",
          "explanation": "The result is that the task is finished now."
        },
        {
          "en": "The documents have been checked.",
          "id": "Dokumen-dokumen tersebut telah diperiksa.",
          "explanation": "Plural subject 'documents' takes 'have been'."
        },
        {
          "en": "The classroom has been cleaned.",
          "id": "Ruang kelas telah dibersihkan.",
          "explanation": "It looks clean right now."
        },
        {
          "en": "Several mistakes have been found.",
          "id": "Beberapa kesalahan telah ditemukan.",
          "explanation": "Focus on the discovery of the mistakes."
        },
        {
          "en": "The decision has been made.",
          "id": "Keputusan telah dibuat.",
          "explanation": "The action is complete, and the decision stands now."
        }
      ]
    }
  ],
  "commonMistakes": [
    {
      "wrong": "The task has completed.",
      "correct": "The task has been completed.",
      "explanation": "Without 'been', it sounds like the task completed itself (active voice)."
    },
    {
      "wrong": "The documents have checked.",
      "correct": "The documents have been checked.",
      "explanation": "You must include 'been' to make it passive."
    },
    {
      "wrong": "The decision has been make.",
      "correct": "The decision has been made.",
      "explanation": "Always use Verb 3 (made), not Verb 1 (make)."
    }
  ],
  "introduction": "Imagine a manager asks for a progress update on a project. You could say, 'I finished the report.' But if you want to sound more professional and focus purely on the work, you would say, 'The report has been finished.'<br><br>The Present Perfect Passive is incredibly useful for giving status updates, reporting news, or describing changes that affect the present moment. It tells the listener, 'This action is complete, and the result is what matters right now.'<br><br>The key is to remember the word 'been'. Without it, the sentence becomes active, which can lead to confusing statements like 'The report has finished' (meaning the report itself did something).",
  "stepByStep": "1. <strong>Identify the receiver:</strong> Make it the subject (e.g., 'The decision').<br>2. <strong>Choose has/have:</strong> Match it to the subject ('The decision has').<br>3. <strong>Add 'been':</strong> ('The decision has been').<br>4. <strong>Use Verb 3:</strong> ('The decision has been made.').",
  "indonesianLearnerWarning": "Indonesian learners often translate 'telah di-' simply as 'has + Verb 3' and forget 'been'. 'The task has finished' sounds very wrong in English. It must be 'The task has BEEN finished'."
}`,

  lesson_grammar_future_passive: `{
  "id": "grammar-future-passive",
  "backHref": "passive-voice.html",
  "backLabel": "Back to Passive Voice",
  "title": "Future Passive",
  "skill": "Grammar",
  "category": "Passive Voice",
  "level": "Upper-Intermediate",
  "description": "Talk about actions that will happen to the subject in the future.",
  "learningGoals": [
    "Learn the structure of Future Passive.",
    "Use it to talk about future plans, announcements, and predictions.",
    "Avoid missing the 'be' verb in future passive sentences."
  ],
  "meaning": "Future Passive is used when we want to talk about an action that will happen to the subject in the future. The focus is on the future event or result, not on who will do it.",
  "keyIdeas": [
    "It describes planned or expected future events.",
    "We use 'will be' for all subjects, followed by Verb 3.",
    "It is widely used in announcements, schedules, and promises."
  ],
  "patterns": [
    {
      "name": "Future Passive",
      "formula": "Subject + will be + Verb 3",
      "examples": [
        {
          "en": "The results will be announced tomorrow.",
          "id": "Hasilnya akan diumumkan besok.",
          "explanation": "Focus on the future event."
        },
        {
          "en": "The classroom will be cleaned after school.",
          "id": "Ruang kelas akan dibersihkan setelah sekolah.",
          "explanation": "Focus on the future plan for the room."
        },
        {
          "en": "The meeting will be held next week.",
          "id": "Rapat tersebut akan diadakan minggu depan.",
          "explanation": "Standard formal announcement."
        },
        {
          "en": "The package will be delivered tonight.",
          "id": "Paket tersebut akan dikirimkan malam ini.",
          "explanation": "Focus on the service provided."
        },
        {
          "en": "The new rule will be explained later.",
          "id": "Aturan baru tersebut akan dijelaskan nanti.",
          "explanation": "Promising a future action without specifying who will do it."
        }
      ]
    }
  ],
  "commonMistakes": [
    {
      "wrong": "The results will announced tomorrow.",
      "correct": "The results will be announced tomorrow.",
      "explanation": "You cannot put 'will' directly before a past participle (Verb 3) in passive. You must include 'be'."
    },
    {
      "wrong": "The package will delivered tonight.",
      "correct": "The package will be delivered tonight.",
      "explanation": "Missing the 'be' verb is the most common error in Future Passive."
    },
    {
      "wrong": "The meeting will be hold next week.",
      "correct": "The meeting will be held next week.",
      "explanation": "Always use Verb 3 (held), not Verb 1 (hold)."
    }
  ],
  "introduction": "When a school principal makes an announcement, they don't usually say, 'We will announce the results tomorrow.' Instead, they say, 'The results will be announced tomorrow.' This shifts the focus from the school administration to the information that students care about: the results.<br><br>The Future Passive is an excellent tool for talking about schedules, plans, promises, and formal announcements. It allows you to describe what will happen without needing to focus on who will do the work.<br><br>The structure is very consistent: 'will be' is used for every subject, singular or plural. The only challenge is remembering to include the word 'be'.",
  "stepByStep": "1. <strong>Identify the receiver:</strong> Make it the subject (e.g., 'The meeting').<br>2. <strong>Add 'will be':</strong> ('The meeting will be').<br>3. <strong>Use Verb 3:</strong> ('The meeting will be held').<br>4. <strong>Add the time (optional):</strong> ('next week').",
  "indonesianLearnerWarning": "In Indonesian, 'akan di-' translates directly to 'will + Verb 3' in many students' minds (akan = will, di = Verb 3). This causes them to drop the 'be'. 'Will announced' is always wrong. It must be 'will BE announced'."
}`
};

for (const [key, jsonContent] of Object.entries(updatedLessons)) {
  const startMarker = 'const ' + key + ' = {';
  const endMarker = '};';
  
  const startIndex = content.indexOf(startMarker);
  if (startIndex === -1) {
    const exportIndex = content.lastIndexOf('export {');
    const newDecl = 'const ' + key + ' = ' + jsonContent + ';\n\n';
    content = content.substring(0, exportIndex) + newDecl + content.substring(exportIndex);
    
    // removed
    // removed
    // removed
    // removed
  } else {
    let endIndex = content.indexOf(endMarker, startIndex);
    if (endIndex === -1) {
      console.error('Could not find end of ' + key);
      continue;
    }
    endIndex += endMarker.length;
    const replacement = 'const ' + key + ' = ' + jsonContent + ';';
    content = content.substring(0, startIndex) + replacement + content.substring(endIndex);
  }
}

fs.writeFileSync(lessonsPath, content, 'utf8');
console.log('Script 2 complete.');
