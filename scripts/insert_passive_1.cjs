const fs = require('fs');
const path = require('path');

const lessonsPath = path.join(__dirname, '..', 'data', 'lessons.js');
let content = fs.readFileSync(lessonsPath, 'utf8');

const updatedLessons = {
  lesson_grammar_passive_voice_overview: `{
  "id": "grammar-passive-voice-overview",
  "backHref": "passive-voice.html",
  "backLabel": "Back to Passive Voice",
  "title": "What Is Passive Voice?",
  "skill": "Grammar",
  "category": "Passive Voice",
  "level": "Beginner",
  "description": "Understand how passive voice changes the focus of a sentence.",
  "learningGoals": [
    "Understand the core difference between active and passive voice.",
    "Learn why changing the focus of a sentence is useful.",
    "Recognize that passive voice is a choice of focus, not just a formula."
  ],
  "meaning": "Passive voice is a structure that changes the focus of a sentence from the <strong>doer</strong> of the action to the <strong>receiver</strong> of the action. We use it when the action, result, or affected object is more important than the person doing the action.",
  "keyIdeas": [
    "Active voice focuses on the doer: <em>Someone broke the window.</em>",
    "Passive voice focuses on the receiver: <em>The window was broken.</em>",
    "Passive voice always uses a form of the 'be' verb and Verb 3 (past participle)."
  ],
  "patterns": [
    {
      "name": "Focus on the Receiver",
      "formula": "Receiver + be verb + Verb 3",
      "examples": [
        {
          "en": "The window was broken.",
          "id": "Jendelanya dipecahkan.",
          "explanation": "We don't know who broke it, so we focus on the window."
        },
        {
          "en": "The homework was checked by the teacher.",
          "id": "Pekerjaan rumah itu diperiksa oleh guru.",
          "explanation": "The focus is on the homework, even though we mention the teacher."
        },
        {
          "en": "English is spoken around the world.",
          "id": "Bahasa Inggris dituturkan di seluruh dunia.",
          "explanation": "The language (English) is more important than the people speaking it."
        }
      ]
    }
  ],
  "commonMistakes": [
    {
      "wrong": "The window broken.",
      "correct": "The window was broken.",
      "explanation": "Passive voice always needs a 'be' verb (am, is, are, was, were) before the main verb."
    },
    {
      "wrong": "The homework checked by the teacher.",
      "correct": "The homework was checked by the teacher.",
      "explanation": "Without the 'be' verb, it sounds like the homework itself was checking something."
    }
  ],
  "introduction": "Imagine a student says, 'Someone stole my bag.' This sentence is clear because it tells us that an unknown person did the action. But sometimes, the person who did the action is not the most important part of the message.<br><br>In English, we can change the focus and say, 'My bag was stolen.' Now the sentence focuses on the bag, not the unknown person. This is the basic idea of passive voice: we move attention from the doer of the action to the person or thing affected by the action.<br><br>Passive voice is useful when the action, result, or affected object is more important than the person doing the action. We often see it in news reports, formal explanations, classroom instructions, processes, signs, rules, and everyday situations where the doer is unknown or not important.",
  "stepByStep": "1. <strong>Identify the action:</strong> What happened?<br>2. <strong>Identify the doer and receiver:</strong> Who did it, and what received it?<br>3. <strong>Choose the focus:</strong> Is the receiver more important? Use passive voice.<br>4. <strong>Apply the structure:</strong> Receiver + be verb + Verb 3.",
  "indonesianLearnerWarning": "Indonesian learners often use 'di-' for passive voice. In English, you must remember to add the 'be' verb (is, are, was, were). Don't just use the main verb by itself."
}`,

  lesson_grammar_active_vs_passive_voice: `{
  "id": "grammar-active-vs-passive-voice",
  "backHref": "passive-voice.html",
  "backLabel": "Back to Passive Voice",
  "title": "Active Voice vs Passive Voice",
  "skill": "Grammar",
  "category": "Passive Voice",
  "level": "Beginner",
  "description": "Compare active and passive sentences and know when to use each.",
  "learningGoals": [
    "Understand the difference in focus between active and passive sentences.",
    "Learn when active voice is a better choice.",
    "Learn when passive voice is a better choice."
  ],
  "meaning": "Active voice means the subject <strong>does</strong> the action. Passive voice means the subject <strong>receives</strong> the action. Both sentences can describe the same event, but they tell the listener what is most important.",
  "keyIdeas": [
    "Active voice is usually clearer, more direct, and stronger.",
    "Passive voice is useful when the receiver, action, or result is more important.",
    "Use active when the doer is important. Use passive when the doer is unknown, obvious, or unnecessary."
  ],
  "patterns": [
    {
      "name": "Comparing Active and Passive",
      "formula": "Active: Doer + Verb + Receiver. Passive: Receiver + be + Verb 3 (+ by Doer).",
      "examples": [
        {
          "en": "Active: The chef cooked the meal.",
          "id": "Aktif: Koki itu memasak makanan tersebut.",
          "explanation": "Focuses on the chef. The chef is important."
        },
        {
          "en": "Passive: The meal was cooked by the chef.",
          "id": "Pasif: Makanan tersebut dimasak oleh koki itu.",
          "explanation": "Focuses on the meal. The meal is more important."
        },
        {
          "en": "Active: The police arrested the suspect.",
          "id": "Aktif: Polisi menangkap tersangka itu.",
          "explanation": "Direct and clear."
        },
        {
          "en": "Passive: The suspect was arrested.",
          "id": "Pasif: Tersangka itu ditangkap.",
          "explanation": "The focus is on what happened to the suspect. It's obvious the police did it, so we can omit them."
        }
      ]
    }
  ],
  "commonMistakes": [
    {
      "wrong": "The homework was checked by the teacher.",
      "correct": "The teacher checked the homework. (If the teacher is the focus)",
      "explanation": "If the person doing the action is the main point of the sentence, active voice is usually better and more natural."
    }
  ],
  "introduction": "How do you decide between active and passive voice? Imagine you are telling a story about your father. You would say, 'My father repaired the car.' This is active voice, and it puts the focus firmly on your father. He is the hero of the sentence.<br><br>Now imagine you are talking to a mechanic about your car. You might say, 'The car was repaired yesterday.' Here, you are using passive voice. The focus is entirely on the car and the fact that it is fixed. Who fixed it doesn't matter as much as the result.<br><br>Both sentences are grammatically correct, but they serve different purposes. Active voice is strong, clear, and direct. Passive voice is incredibly useful when the result matters more than the person who did the work.",
  "stepByStep": "1. <strong>Who is doing the action?</strong> Is this person important to your message?<br>2. <strong>If yes:</strong> Use Active Voice (The teacher explained the rule).<br>3. <strong>If no (or unknown/obvious):</strong> Use Passive Voice (The rule was explained).",
  "indonesianLearnerWarning": "In Indonesian, active and passive are often used interchangeably without much change in tone. In English, overusing passive voice can make your writing sound weak or overly complicated. Default to active voice unless you have a good reason to use passive."
}`,

  lesson_grammar_object_to_subject_passive: `{
  "id": "grammar-object-to-subject-passive",
  "backHref": "passive-voice.html",
  "backLabel": "Back to Passive Voice",
  "title": "Object to Subject Transformation",
  "skill": "Grammar",
  "category": "Passive Voice",
  "level": "Intermediate",
  "description": "Learn the steps to transform an active sentence into a passive one.",
  "learningGoals": [
    "Identify the object in an active sentence.",
    "Move the object to the subject position correctly.",
    "Apply the correct 'be' verb and Verb 3."
  ],
  "meaning": "To make a passive sentence, we take the <strong>object</strong> (the thing receiving the action) from an active sentence and turn it into the <strong>new subject</strong>.",
  "keyIdeas": [
    "The original object moves to the front of the sentence.",
    "We add a 'be' verb that matches the tense of the original sentence and the number (singular/plural) of the new subject.",
    "The main verb changes to Verb 3 (past participle)."
  ],
  "patterns": [
    {
      "name": "The Transformation Process",
      "formula": "Object -> New Subject + be + Verb 3",
      "examples": [
        {
          "en": "Active: The students cleaned the classroom.",
          "id": "Aktif: Para siswa membersihkan ruang kelas.",
          "explanation": "Object: 'the classroom'. Tense: past simple ('cleaned')."
        },
        {
          "en": "Passive: The classroom was cleaned by the students.",
          "id": "Pasif: Ruang kelas dibersihkan oleh para siswa.",
          "explanation": "New subject: 'The classroom'. Be verb: 'was' (past singular). Verb 3: 'cleaned'."
        },
        {
          "en": "Active: She wrote the report.",
          "id": "Aktif: Dia menulis laporan tersebut.",
          "explanation": "Object: 'the report'."
        },
        {
          "en": "Passive: The report was written by her.",
          "id": "Pasif: Laporan tersebut ditulis olehnya.",
          "explanation": "Verb 'wrote' becomes 'was written'."
        }
      ]
    }
  ],
  "commonMistakes": [
    {
      "wrong": "The report was wrote by her.",
      "correct": "The report was written by her.",
      "explanation": "Always use Verb 3 (past participle) in passive voice, not Verb 2 (past simple)."
    },
    {
      "wrong": "The students was cleaned the classroom.",
      "correct": "The classroom was cleaned by the students.",
      "explanation": "You must move the object ('the classroom') to the front. You can't just add a 'be' verb to the active sentence."
    }
  ],
  "introduction": "Transforming an active sentence into a passive sentence is like rearranging furniture in a room to change the focus. You have all the same pieces, but you are putting something new in the center.<br><br>Let's take a simple sentence: 'The students cleaned the classroom.' The action is 'cleaned'. Who did it? The students. What received the action? The classroom. The classroom is the object.<br><br>To make this passive, we take that object ('the classroom') and move it to the front, making it the star of the sentence. Then, we adjust the verb to show that the classroom received the action. Learning this step-by-step process is crucial for mastering passive structure.",
  "stepByStep": "1. <strong>Find the object:</strong> What receives the action? (e.g., 'the classroom').<br>2. <strong>Move it to the front:</strong> Make the object the new subject ('The classroom...').<br>3. <strong>Choose the 'be' verb:</strong> Look at the original tense. If it was past, use 'was' or 'were' ('The classroom was...').<br>4. <strong>Use Verb 3:</strong> Change the main verb to its past participle form ('...cleaned').<br>5. <strong>Add 'by + doer' (optional):</strong> Only if necessary ('...by the students').",
  "indonesianLearnerWarning": "Pay close attention to irregular Verb 3 forms (like written, spoken, driven, broken). In Indonesian, the verb word doesn't change when you use 'di-', but in English, you must memorize the Verb 3 forms."
}`,

  lesson_grammar_by_agent_passive: `{
  "id": "grammar-by-agent-passive",
  "backHref": "passive-voice.html",
  "backLabel": "Back to Passive Voice",
  "title": "By-Agent and When to Omit It",
  "skill": "Grammar",
  "category": "Passive Voice",
  "level": "Intermediate",
  "description": "Understand when to include the doer and when to omit it.",
  "learningGoals": [
    "Understand what the 'by-agent' is.",
    "Know when it is important to include the by-agent.",
    "Recognize situations where the by-agent should be omitted."
  ],
  "meaning": "In a passive sentence, the phrase <strong>by + doer</strong> (e.g., 'by the teacher') is called the agent. It tells us who performed the action. However, we do not always need to use it.",
  "keyIdeas": [
    "Include the agent when the doer is important, surprising, or adds necessary information.",
    "Omit the agent when the doer is unknown, obvious, unimportant, or too general."
  ],
  "patterns": [
    {
      "name": "Including the Agent (Important/Surprising)",
      "formula": "Passive Sentence + by + Doer",
      "examples": [
        {
          "en": "The Mona Lisa was painted by Leonardo da Vinci.",
          "id": "Mona Lisa dilukis oleh Leonardo da Vinci.",
          "explanation": "The doer (Leonardo da Vinci) is very important historical information."
        },
        {
          "en": "The window was broken by my little brother.",
          "id": "Jendela itu dipecahkan oleh adik laki-lakiku.",
          "explanation": "We are specifically identifying who caused the problem."
        }
      ]
    },
    {
      "name": "Omitting the Agent (Unknown/Obvious/Unimportant)",
      "formula": "Passive Sentence (Stop)",
      "examples": [
        {
          "en": "My phone was stolen.",
          "id": "Ponsel saya dicuri.",
          "explanation": "We don't know who stole it, so we omit 'by someone'."
        },
        {
          "en": "The suspect was arrested.",
          "id": "Tersangka itu ditangkap.",
          "explanation": "It's obvious that the police arrested him, so 'by the police' is unnecessary."
        },
        {
          "en": "English is spoken in many countries.",
          "id": "Bahasa Inggris dituturkan di banyak negara.",
          "explanation": "The doers ('people') are too general and unimportant to mention."
        }
      ]
    }
  ],
  "commonMistakes": [
    {
      "wrong": "My phone was stolen by someone.",
      "correct": "My phone was stolen.",
      "explanation": "Adding 'by someone' gives no useful information. It is better to just omit it."
    },
    {
      "wrong": "The Mona Lisa was painted.",
      "correct": "The Mona Lisa was painted by Leonardo da Vinci.",
      "explanation": "If the doer is a key piece of information, do not omit the agent."
    }
  ],
  "introduction": "One of the biggest misconceptions about passive voice is that every sentence must end with 'by someone' or 'by people'. In reality, adding 'by someone' to a sentence like 'My phone was stolen' doesn't help the listener. They already know someone stole it; what they care about is the phone!<br><br>The 'by-agent' is the part of the sentence that tells us who did the action. It is a powerful tool, but it should be used carefully. We only include it when the person who did the action is important or surprising.<br><br>If the doer is a mystery, if it's completely obvious (like police arresting a suspect), or if it's just 'people in general', we drop the 'by-agent' entirely. This makes sentences cleaner and more professional.",
  "stepByStep": "1. <strong>Form the passive sentence:</strong> Focus on the receiver and the action.<br>2. <strong>Ask yourself:</strong> Does the listener need to know who did this?<br>3. <strong>If yes:</strong> Add 'by + person' (e.g., 'by the manager').<br>4. <strong>If no (unknown, obvious, general):</strong> Stop the sentence after the verb.",
  "indonesianLearnerWarning": "Indonesian learners often feel a strong urge to include 'oleh seseorang' (by someone) because it feels like the sentence is unfinished without it. In English, omitting the agent is completely normal and often preferred."
}`
};

for (const [key, jsonContent] of Object.entries(updatedLessons)) {
  const startMarker = 'const ' + key + ' = {';
  const endMarker = '};';
  
  const startIndex = content.indexOf(startMarker);
  if (startIndex === -1) {
    // Need to append if not exists
    const exportIndex = content.lastIndexOf('export {');
    const newDecl = 'const ' + key + ' = ' + jsonContent + ';\n\n';
    content = content.substring(0, exportIndex) + newDecl + content.substring(exportIndex);
    
    // Add to export list
    // removed
    // removed
    // removed
    // removed
  } else {
    // Replace
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
console.log('Script 1 complete.');
