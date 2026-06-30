const fs = require('fs');
const path = require('path');

const lessonsPath = path.join(__dirname, '..', 'data', 'lessons.js');
let lines = fs.readFileSync(lessonsPath, 'utf8').split('\n');

const clauseIdx = lines.findIndex(l => l.startsWith('const lesson_grammar_clause_overview = {'));
let originalContent = lines.slice(clauseIdx).join('\n');

// 1. Overview
const lesson1 = \`const lesson_grammar_passive_voice_overview = {
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
};\`;

const lesson2 = \`const lesson_grammar_active_vs_passive_voice = {
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
};\`;

const lesson3 = \`const lesson_grammar_object_to_subject_passive = {
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
};\`;

const lesson4 = \`const lesson_grammar_by_agent_passive = {
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
};\`;

const lesson5 = \`const lesson_grammar_present_simple_passive = {
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
};\`;

const lesson6 = \`const lesson_grammar_past_simple_passive = {
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
};\`;

const lesson7 = \`const lesson_grammar_present_perfect_passive = {
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
};\`;

const lesson8 = \`const lesson_grammar_future_passive = {
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
};\`;

const lesson9 = \`const lesson_grammar_passive_for_processes = {
  "id": "grammar-passive-for-processes",
  "backHref": "passive-voice.html",
  "backLabel": "Back to Passive Voice",
  "title": "Passive for Processes",
  "skill": "Grammar",
  "category": "Passive Voice",
  "level": "Upper-Intermediate",
  "description": "Explain steps in a process where the action matters more than the doer.",
  "learningGoals": [
    "Understand why passive voice is ideal for describing processes.",
    "Learn to sequence passive steps logically (First, Next, Then).",
    "Apply present simple passive to describe manufacturing or natural processes."
  ],
  "meaning": "When we explain how something is made or how a system works (a process), the people doing the work are usually less important than the steps themselves. Passive voice allows us to focus entirely on the materials, the product, and the sequence of actions.",
  "keyIdeas": [
    "Used in science, manufacturing, recipes, and technical writing.",
    "Present Simple Passive is the most common tense used for general processes.",
    "Sequence words (First, Next, Then, Finally) help connect the passive sentences clearly."
  ],
  "patterns": [
    {
      "name": "Describing a Process",
      "formula": "Sequence word + Subject + am/is/are + Verb 3",
      "examples": [
        {
          "en": "First, the tea leaves are picked by hand.",
          "id": "Pertama, daun teh dipetik dengan tangan.",
          "explanation": "Focuses on the leaves, not the farmers."
        },
        {
          "en": "Next, they are dried in the sun.",
          "id": "Selanjutnya, daun-daun tersebut dijemur di bawah sinar matahari.",
          "explanation": "Continues the process focusing on the product."
        },
        {
          "en": "Then, the dried leaves are packed into boxes.",
          "id": "Kemudian, daun kering tersebut dikemas ke dalam kotak.",
          "explanation": "Clear step-by-step description."
        },
        {
          "en": "Finally, the boxes are shipped to supermarkets.",
          "id": "Akhirnya, kotak-kotak tersebut dikirim ke supermarket.",
          "explanation": "The end of the process."
        }
      ]
    }
  ],
  "commonMistakes": [
    {
      "wrong": "First, the farmers pick the tea. Next, they dry it. Then, they pack it.",
      "correct": "First, the tea is picked. Next, it is dried. Then, it is packed.",
      "explanation": "While active voice is grammatical, it focuses too much on 'the farmers'. For technical descriptions or IELTS Task 1, passive voice is the standard expected style."
    },
    {
      "wrong": "Next, the leaves is dried.",
      "correct": "Next, the leaves are dried.",
      "explanation": "Pay attention to subject-verb agreement. 'Leaves' is plural."
    }
  ],
  "introduction": "If you watch a documentary about how chocolate is made, the narrator won't say, 'A man harvests the cocoa pods. Then another man opens them. Then a machine crushes them.' That focuses too much on the workers and machines, and not enough on the chocolate!<br><br>Instead, the narrator will say, 'The cocoa pods are harvested. Then they are opened, and the beans are crushed.' This is the power of the passive voice in describing processes. It keeps the spotlight exactly where it belongs: on the product going through the steps.<br><br>This skill is essential for technical writing, science reports, and is a key requirement if you are preparing for exams like the IELTS Academic Writing Task 1.",
  "stepByStep": "1. <strong>Identify the material:</strong> Make it the subject (e.g., 'The beans').<br>2. <strong>Add a sequence word:</strong> (e.g., 'First', 'Next').<br>3. <strong>Apply passive structure:</strong> (e.g., 'First, the beans are crushed.').<br>4. <strong>Continue:</strong> Keep the focus on the material in the next steps.",
  "indonesianLearnerWarning": "In Indonesian, describing a process with 'di-' (dipetik, dikeringkan, dikemas) is very natural. In English, you must consciously remember the 'be' verb for every single step. Don't let your English revert to active voice halfway through the description."
};\`;

const lesson10 = \`const lesson_grammar_passive_for_news_reports = {
  "id": "grammar-passive-for-news-reports",
  "backHref": "passive-voice.html",
  "backLabel": "Back to Passive Voice",
  "title": "Passive for News and Reports",
  "skill": "Grammar",
  "category": "Passive Voice",
  "level": "Upper-Intermediate",
  "description": "Understand why passive voice is common in news reporting.",
  "learningGoals": [
    "Understand why journalists use passive voice to sound objective.",
    "Recognize common passive structures in news headlines and articles.",
    "Apply passive voice to report events without naming a specific doer."
  ],
  "meaning": "In news reporting, journalists often use passive voice to maintain an objective tone, to focus on the victims or the event itself, or because the person responsible is unknown or legally protected.",
  "keyIdeas": [
    "Passive voice sounds more formal and objective than active voice.",
    "It allows reporters to state facts without assigning blame (e.g., 'Mistakes were made').",
    "It is used when the event is more important than who caused it."
  ],
  "patterns": [
    {
      "name": "Objective Reporting",
      "formula": "Subject (Victim/Event) + be + Verb 3",
      "examples": [
        {
          "en": "Three people were injured in the accident.",
          "id": "Tiga orang terluka dalam kecelakaan tersebut.",
          "explanation": "Focuses on the victims, not the driver who caused it."
        },
        {
          "en": "The building was destroyed by the fire.",
          "id": "Bangunan tersebut hancur oleh api.",
          "explanation": "Focuses on the tragedy."
        },
        {
          "en": "A new law has been passed.",
          "id": "Sebuah undang-undang baru telah disahkan.",
          "explanation": "Focuses on the law, rather than the specific politicians."
        },
        {
          "en": "The suspect is being questioned by the police.",
          "id": "Tersangka sedang diperiksa oleh polisi.",
          "explanation": "Present continuous passive. Focus on the suspect."
        },
        {
          "en": "Mistakes were made during the investigation.",
          "id": "Kesalahan-kesalahan dibuat selama penyelidikan.",
          "explanation": "A classic PR phrase to avoid saying 'We made mistakes'."
        }
      ]
    }
  ],
  "commonMistakes": [
    {
      "wrong": "The fire destroyed the building.",
      "correct": "The building was destroyed by the fire.",
      "explanation": "Active voice is okay, but passive is often preferred in news to emphasize the impact on the subject (the building)."
    },
    {
      "wrong": "Three people was injured.",
      "correct": "Three people were injured.",
      "explanation": "Remember to match plural subjects ('people') with plural 'be' verbs ('were')."
    }
  ],
  "introduction": "When you read a newspaper or watch a news broadcast, you will notice a specific style of language. A journalist rarely says, 'A bad driver injured three people today.' Instead, they say, 'Three people were injured today.'<br><br>Why? Because the focus of the news is the tragedy and the victims, not the driver. Passive voice allows journalists to structure their sentences around what is most important or dramatic.<br><br>Furthermore, passive voice helps maintain an objective, professional tone. It is also used carefully by public relations teams and politicians to avoid direct blame, using famous phrases like 'Mistakes were made' rather than 'I made a mistake'.",
  "stepByStep": "1. <strong>Identify the 'headline' focus:</strong> What is the most important part of the story? (e.g., 'A new law').<br>2. <strong>Make it the subject:</strong> Start the sentence with it.<br>3. <strong>Apply the appropriate tense:</strong> Use Present Perfect ('has been passed') for recent news, or Past Simple ('was passed') for finished events.",
  "indonesianLearnerWarning": "Indonesian news also heavily relies on passive structures (e.g., 'Telah ditemukan...'). When translating these concepts, ensure you don't drop the 'be' verb in English (e.g., 'Has been found', not 'Has found')."
};\`;

const lesson11 = \`const lesson_grammar_passive_for_formal_instructions = {
  "id": "grammar-passive-for-formal-instructions",
  "backHref": "passive-voice.html",
  "backLabel": "Back to Passive Voice",
  "title": "Passive for Formal Instructions",
  "skill": "Grammar",
  "category": "Passive Voice",
  "level": "Upper-Intermediate",
  "description": "Use passive voice to make instructions sound formal and official.",
  "learningGoals": [
    "Understand the tone difference between active and passive instructions.",
    "Use passive voice for rules, signs, and manuals.",
    "Apply modal verbs with passive voice for instructions."
  ],
  "meaning": "While everyday instructions use the imperative (e.g., 'Turn off your phone'), formal instructions, rules, and signs often use passive voice (e.g., 'Phones must be turned off'). This makes the rule sound more objective, official, and less like a personal command.",
  "keyIdeas": [
    "Passive instructions feel less personal and more like a general rule.",
    "They are common in manuals, exams, legal documents, and public signs.",
    "They often use modals like 'must be', 'should be', or 'are to be'."
  ],
  "patterns": [
    {
      "name": "Formal Rules and Signs",
      "formula": "Subject + must/should be + Verb 3",
      "examples": [
        {
          "en": "All phones must be turned off during the exam.",
          "id": "Semua ponsel harus dimatikan selama ujian.",
          "explanation": "Sounds more official than 'Turn off your phone'."
        },
        {
          "en": "Payments should be made by the 5th of every month.",
          "id": "Pembayaran sebaiknya dilakukan sebelum tanggal 5 setiap bulannya.",
          "explanation": "A polite but firm rule in a contract."
        },
        {
          "en": "Hard hats must be worn in this area.",
          "id": "Helm proyek harus dipakai di area ini.",
          "explanation": "A standard safety sign."
        },
        {
          "en": "Applications must be submitted online.",
          "id": "Aplikasi harus diserahkan secara online.",
          "explanation": "A formal administrative instruction."
        }
      ]
    }
  ],
  "commonMistakes": [
    {
      "wrong": "You must to turn off your phone.",
      "correct": "All phones must be turned off.",
      "explanation": "Using 'you' can sound too direct or conversational for an official sign. Passive voice removes 'you' and focuses on the object (phones)."
    },
    {
      "wrong": "Hard hats must wear.",
      "correct": "Hard hats must be worn.",
      "explanation": "The hard hats don't wear themselves. You need 'be + Verb 3'."
    }
  ],
  "introduction": "Imagine you are writing the rules for a university examination hall. If you write, 'You must turn off your phone,' it sounds a bit like a teacher talking directly to a naughty student. It's personal.<br><br>To make the rule sound like an unchangeable, official policy that applies to everyone, you use passive voice: 'All phones must be turned off.'<br><br>By removing the word 'you' and focusing on the object ('phones'), the instruction feels more professional, objective, and authoritative. This is why you see passive voice on signs, in legal contracts, in manuals, and in official communications.",
  "stepByStep": "1. <strong>Identify the object of the rule:</strong> What needs to be managed? (e.g., 'Payments').<br>2. <strong>Choose a modal:</strong> Use 'must' for strong rules, 'should' for strong advice.<br>3. <strong>Add 'be' + Verb 3:</strong> ('Payments must be made').",
  "indonesianLearnerWarning": "In Indonesian, signs are often active imperatives ('Harap matikan HP'). In English, while 'Please turn off your phone' is fine, formal settings strongly prefer the passive 'Phones must be turned off'."
};\`;

const lesson12 = \`const lesson_grammar_passive_unknown_unimportant_doer = {
  "id": "grammar-passive-unknown-unimportant-doer",
  "backHref": "passive-voice.html",
  "backLabel": "Back to Passive Voice",
  "title": "Unknown or Unimportant Doers",
  "skill": "Grammar",
  "category": "Passive Voice",
  "level": "Intermediate",
  "description": "Learn how to express ideas when you don't know who did the action.",
  "learningGoals": [
    "Identify situations where the doer is unknown.",
    "Identify situations where the doer is obvious or unimportant.",
    "Use passive voice to solve the problem of missing information."
  ],
  "meaning": "Sometimes we simply don't know who did something, or the answer is so obvious that saying it is a waste of time. In these cases, active voice is awkward, but passive voice provides an elegant solution.",
  "keyIdeas": [
    "If you don't know who did it, use passive to avoid saying 'Someone' or 'They'.",
    "If everyone knows who did it (e.g., police arrest, doctors operate), use passive.",
    "Omit the 'by-agent' entirely."
  ],
  "patterns": [
    {
      "name": "The Unknown Doer",
      "formula": "Subject + be + Verb 3",
      "examples": [
        {
          "en": "My bicycle was stolen last night.",
          "id": "Sepeda saya dicuri tadi malam.",
          "explanation": "We don't know who stole it. 'Someone stole my bicycle' is less natural."
        },
        {
          "en": "This ancient temple was built 2,000 years ago.",
          "id": "Kuil kuno ini dibangun 2.000 tahun yang lalu.",
          "explanation": "We don't know the specific names of the builders."
        }
      ]
    },
    {
      "name": "The Obvious Doer",
      "formula": "Subject + be + Verb 3",
      "examples": [
        {
          "en": "The thief was arrested.",
          "id": "Pencuri itu ditangkap.",
          "explanation": "It is obvious that the police arrested him."
        },
        {
          "en": "The patient was operated on yesterday.",
          "id": "Pasien tersebut dioperasi kemarin.",
          "explanation": "It is obvious that a surgeon did it."
        },
        {
          "en": "The streets are cleaned every night.",
          "id": "Jalan-jalan dibersihkan setiap malam.",
          "explanation": "The specific street cleaners are unimportant to the message."
        }
      ]
    }
  ],
  "commonMistakes": [
    {
      "wrong": "They arrested the thief.",
      "correct": "The thief was arrested.",
      "explanation": "Using 'They' for obvious doers (like police) is grammatically okay but sounds informal and vague. Passive is much better."
    },
    {
      "wrong": "Someone stole my bicycle.",
      "correct": "My bicycle was stolen.",
      "explanation": "'Someone' adds no information. The passive version is more focused on what matters."
    }
  ],
  "introduction": "Imagine you walk outside and your bicycle is missing. You don't know who took it. You could run inside and say, 'Someone stole my bicycle!' This is grammatically correct, but the word 'someone' is basically useless information.<br><br>English gives us a better tool for this situation: the passive voice. By saying 'My bicycle was stolen,' you remove the need for a 'doer' entirely. You solve the problem of missing information by simply focusing on the object.<br><br>We do the same thing when the doer is too obvious. If you say, 'The police arrested the thief,' you are wasting words. Who else arrests thieves? Say, 'The thief was arrested.' It is cleaner, faster, and sounds much more natural.",
  "stepByStep": "1. <strong>Is the doer unknown or obvious?</strong> (e.g., 'someone' or 'the police').<br>2. <strong>If yes:</strong> Drop the doer.<br>3. <strong>Focus on the receiver:</strong> Make the receiver the subject ('My bicycle').<br>4. <strong>Apply passive structure:</strong> ('My bicycle was stolen').",
  "indonesianLearnerWarning": "Indonesian also drops obvious agents (e.g., 'Pencuri itu ditangkap'). However, translating 'someone stole it' to 'seseorang mencurinya' is common in Indonesian. In English, train yourself to prefer the passive ('It was stolen')."
};\`;

const lesson13 = \`const lesson_grammar_modal_passive = {
  "id": "grammar-modal-passive",
  "backHref": "passive-voice.html",
  "backLabel": "Back to Passive Voice",
  "title": "Modal Passive",
  "skill": "Grammar",
  "category": "Passive Voice",
  "level": "Advanced",
  "description": "Combine modal verbs with passive voice for richer meanings.",
  "learningGoals": [
    "Learn how to structure sentences using modals + passive voice.",
    "Express possibility, ability, advice, and obligation in the passive.",
    "Understand past modal passives (should have been)."
  ],
  "meaning": "Modal verbs (can, could, should, must, might) add meaning like ability, advice, or obligation. By combining them with passive voice, we can say things like 'It can be done' or 'It must be finished'.",
  "keyIdeas": [
    "Present/Future Modal Passive: Modal + be + Verb 3.",
    "Past Modal Passive: Modal + have been + Verb 3.",
    "The word 'be' or 'have been' never changes form after a modal."
  ],
  "patterns": [
    {
      "name": "Present/Future Modal Passive",
      "formula": "Subject + modal + be + Verb 3",
      "examples": [
        {
          "en": "The problem can be solved.",
          "id": "Masalah tersebut dapat diselesaikan.",
          "explanation": "Ability/Possibility."
        },
        {
          "en": "The forms must be signed.",
          "id": "Formulir-formulir tersebut harus ditandatangani.",
          "explanation": "Strong obligation."
        },
        {
          "en": "The package might be delayed.",
          "id": "Paket tersebut mungkin tertunda.",
          "explanation": "Possibility."
        }
      ]
    },
    {
      "name": "Past Modal Passive",
      "formula": "Subject + modal + have been + Verb 3",
      "examples": [
        {
          "en": "The door should have been locked.",
          "id": "Pintu tersebut seharusnya dikunci.",
          "explanation": "Regret/Criticism about a past mistake."
        },
        {
          "en": "The flight might have been cancelled.",
          "id": "Penerbangan tersebut mungkin telah dibatalkan.",
          "explanation": "Past possibility."
        }
      ]
    }
  ],
  "commonMistakes": [
    {
      "wrong": "The problem can solved.",
      "correct": "The problem can be solved.",
      "explanation": "You must include 'be' after the modal."
    },
    {
      "wrong": "The door should be locked yesterday.",
      "correct": "The door should have been locked yesterday.",
      "explanation": "For past regrets, you must use 'have been', not just 'be'."
    }
  ],
  "introduction": "When managing a project, you might look at a difficult task and say, 'We can solve this.' But what if you are the boss, looking at the big picture? You would say, 'This problem can be solved.'<br><br>By combining modal verbs (can, must, should) with the passive voice, you can express ability, obligation, and advice while keeping the focus entirely on the work. 'The report must be finished.' 'The email should be sent.'<br><br>These structures are the backbone of professional communication, problem-solving, and rule-making. They allow you to be firm and clear without pointing fingers.",
  "stepByStep": "1. <strong>Identify the receiver:</strong> ('The problem').<br>2. <strong>Add the modal:</strong> ('The problem can').<br>3. <strong>Add 'be' (or 'have been' for past):</strong> ('The problem can be').<br>4. <strong>Use Verb 3:</strong> ('The problem can be solved').",
  "indonesianLearnerWarning": "Indonesian translates 'dapat diselesaikan' as 'can + Verb 3' directly (dapat = can, diselesaikan = Verb 3). Don't forget that English requires the bridge word 'be' between the modal and the past participle."
};\`;

const lesson14 = \`const lesson_grammar_passive_with_two_objects = {
  "id": "grammar-passive-with-two-objects",
  "backHref": "passive-voice.html",
  "backLabel": "Back to Passive Voice",
  "title": "Passive with Two Objects",
  "skill": "Grammar",
  "category": "Passive Voice",
  "level": "Advanced",
  "description": "Learn how to make sentences passive when the verb has two objects.",
  "learningGoals": [
    "Identify sentences with two objects (direct and indirect).",
    "Learn the two different ways to make these sentences passive.",
    "Understand which passive form is more common in natural English."
  ],
  "meaning": "Some verbs, like 'give', 'send', 'offer', and 'teach', often have two objects: a person (who receives it) and a thing (what is given). Because there are two objects, we can make two different passive sentences.",
  "keyIdeas": [
    "Active: 'They gave (1) him (2) a prize.'",
    "Passive Option A (focus on person): 'He was given a prize.'",
    "Passive Option B (focus on thing): 'A prize was given to him.'",
    "Option A (making the person the subject) is usually much more common and natural."
  ],
  "patterns": [
    {
      "name": "Person as Subject (Most Common)",
      "formula": "Person + be + Verb 3 + Thing",
      "examples": [
        {
          "en": "He was given a prize.",
          "id": "Dia diberi hadiah.",
          "explanation": "Focuses on the person who received it. This is very natural in English."
        },
        {
          "en": "I was offered a job.",
          "id": "Saya ditawari pekerjaan.",
          "explanation": "Focuses on 'I'."
        },
        {
          "en": "We were taught English by Mr. Smith.",
          "id": "Kami diajari bahasa Inggris oleh Pak Smith.",
          "explanation": "Focuses on the students ('we')."
        }
      ]
    },
    {
      "name": "Thing as Subject (More Formal/Specific)",
      "formula": "Thing + be + Verb 3 + to/for + Person",
      "examples": [
        {
          "en": "A prize was given to him.",
          "id": "Sebuah hadiah diberikan kepadanya.",
          "explanation": "Focuses heavily on the prize itself."
        },
        {
          "en": "A job was offered to me.",
          "id": "Sebuah pekerjaan ditawarkan kepada saya.",
          "explanation": "Focuses on the job."
        }
      ]
    }
  ],
  "commonMistakes": [
    {
      "wrong": "A prize was given him.",
      "correct": "A prize was given to him.",
      "explanation": "If you make the thing the subject, you usually must use 'to' or 'for' before the person."
    },
    {
      "wrong": "He was given to a prize.",
      "correct": "He was given a prize.",
      "explanation": "Do not use 'to' if the person is the subject."
    }
  ],
  "introduction": "When a company offers you a job, they give you an offer. The active sentence is: 'The company offered me a job.' Here, 'me' is the person receiving it, and 'a job' is the thing being given. There are two objects.<br><br>So, how do we make this passive? We have two choices. We can focus on the job: 'A job was offered to me.' Or we can focus on you: 'I was offered a job.'<br><br>While both are grammatically correct, native English speakers heavily prefer making the person the subject. 'I was offered a job' sounds much more natural and conversational than 'A job was offered to me.' Mastering this preference will make your English sound much more fluent.",
  "stepByStep": "1. <strong>Identify the person and the thing:</strong> ('me' and 'a job').<br>2. <strong>Prefer the person:</strong> Make the person the subject ('I').<br>3. <strong>Apply passive structure:</strong> ('I was offered').<br>4. <strong>Add the thing:</strong> ('I was offered a job').",
  "indonesianLearnerWarning": "Indonesian has a very similar structure ('Saya diberi hadiah' vs 'Hadiah diberikan kepada saya'). Rely on this instinct, and remember that just like in Indonesian, 'Saya diberi' is usually the more natural choice."
};\`;

const lesson15 = \`const lesson_grammar_get_passive = {
  "id": "grammar-get-passive",
  "backHref": "passive-voice.html",
  "backLabel": "Back to Passive Voice",
  "title": "Get Passive",
  "skill": "Grammar",
  "category": "Passive Voice",
  "level": "Advanced",
  "description": "Explore a more informal and conversational way to form the passive voice.",
  "learningGoals": [
    "Understand the difference between 'be' passive and 'get' passive.",
    "Learn when it is appropriate to use 'get' instead of 'be'.",
    "Identify common expressions that use the 'get' passive."
  ],
  "meaning": "In informal, spoken English, we often use the verb 'get' instead of 'be' to form the passive voice. It usually describes an action that happens unexpectedly, accidentally, or involves some effort or change of state.",
  "keyIdeas": [
    "Structure: Subject + get/got + Verb 3.",
    "It is more dynamic and action-focused than the 'be' passive.",
    "It is strictly for informal or conversational use. Do not use it in formal writing."
  ],
  "patterns": [
    {
      "name": "The Get Passive",
      "formula": "Subject + get(s)/got/will get + Verb 3",
      "examples": [
        {
          "en": "My car got stolen last night.",
          "id": "Mobil saya kecurian tadi malam.",
          "explanation": "Unexpected, negative event. More conversational than 'was stolen'."
        },
        {
          "en": "They got married in Spain.",
          "id": "Mereka menikah di Spanyol.",
          "explanation": "A change of state. Very common fixed expression."
        },
        {
          "en": "He got fired from his job.",
          "id": "Dia dipecat dari pekerjaannya.",
          "explanation": "An unexpected action affecting him."
        },
        {
          "en": "The window got broken during the storm.",
          "id": "Jendela itu pecah selama badai.",
          "explanation": "An accident."
        }
      ]
    }
  ],
  "commonMistakes": [
    {
      "wrong": "The new law got passed by the government.",
      "correct": "The new law was passed by the government.",
      "explanation": "Do not use 'get' passive for formal events, news reports, or academic writing. Use 'be' passive instead."
    },
    {
      "wrong": "He got steal his phone.",
      "correct": "His phone got stolen.",
      "explanation": "The 'get' passive still follows passive rules: the receiver must be the subject, followed by Verb 3."
    }
  ],
  "introduction": "If you listen to native English speakers talking in a coffee shop, you might hear them say, 'My car got stolen,' or 'He got fired.' They rarely say, 'My car was stolen,' in a casual chat. Why?<br><br>This is the 'get' passive. It is a conversational shortcut that makes the sentence feel more dynamic, unexpected, or emotional. We use 'get' instead of 'be' (am, is, are, was, were).<br><br>While the 'get' passive is fantastic for sounding fluent and natural in conversation, it has a strict rule: never use it in formal writing. In an essay or a business report, always stick to the standard 'be' passive.",
  "stepByStep": "1. <strong>Is the situation informal?</strong> If yes, proceed.<br>2. <strong>Is it an action, accident, or change?</strong> (e.g., getting fired, getting married).<br>3. <strong>Replace 'be' with 'get/got':</strong> Use 'got' for past tense ('He got fired').<br>4. <strong>Use Verb 3:</strong> Just like normal passive.",
  "indonesianLearnerWarning": "In Indonesian, verbs like 'kecurian', 'kehujanan', or 'terpukul' often carry this exact feeling of an unexpected or accidental action. The 'get' passive is the closest English equivalent to these forms."
};\`;

const lesson16 = \`const lesson_grammar_common_passive_voice_mistakes = {
  "id": "grammar-common-passive-voice-mistakes",
  "backHref": "passive-voice.html",
  "backLabel": "Back to Passive Voice",
  "title": "Common Passive Voice Mistakes",
  "skill": "Grammar",
  "category": "Passive Voice",
  "level": "Advanced",
  "description": "Repair common errors and solidify your understanding of passive voice.",
  "learningGoals": [
    "Identify missing 'be' verbs in passive sentences.",
    "Correct errors with intransitive verbs that cannot be passive.",
    "Recognize when active voice is a better choice."
  ],
  "meaning": "Even advanced learners make mistakes with the passive voice. This lesson reviews the most common traps, from structural errors to stylistic problems.",
  "keyIdeas": [
    "Never forget the 'be' verb.",
    "You cannot make a passive sentence if the verb has no object (intransitive verbs like 'happen', 'arrive', 'sleep').",
    "Don't overuse passive voice. If the doer is important, use active voice."
  ],
  "patterns": [
    {
      "name": "Missing the 'Be' Verb",
      "formula": "Error: Subject + Verb 3. Correct: Subject + be + Verb 3.",
      "examples": [
        {
          "en": "Wrong: The house built in 1990.",
          "id": "Salah",
          "explanation": "The house cannot build itself."
        },
        {
          "en": "Right: The house was built in 1990.",
          "id": "Benar",
          "explanation": "The 'be' verb is required."
        }
      ]
    },
    {
      "name": "Passive with Intransitive Verbs",
      "formula": "Verbs without objects (happen, occur, arrive, sleep, die) cannot be passive.",
      "examples": [
        {
          "en": "Wrong: The accident was happened yesterday.",
          "id": "Salah",
          "explanation": "'Happen' has no object. It cannot be passive."
        },
        {
          "en": "Right: The accident happened yesterday.",
          "id": "Benar",
          "explanation": "Use active voice."
        },
        {
          "en": "Wrong: He was died last year.",
          "id": "Salah",
          "explanation": "'Die' has no object."
        },
        {
          "en": "Right: He died last year.",
          "id": "Benar",
          "explanation": "Active voice."
        }
      ]
    }
  ],
  "commonMistakes": [
    {
      "wrong": "The car was repaired by the mechanic.",
      "correct": "The mechanic repaired the car. (If you want to focus on the mechanic's good work)",
      "explanation": "Overusing passive voice makes writing heavy and weak. Only use it when the receiver is more important than the doer."
    }
  ],
  "introduction": "You have learned all the rules of the passive voice. You know the structures, the tenses, and the reasons to use it. But in the heat of a conversation or an exam, mistakes still happen.<br><br>The most common mistake is simply forgetting the 'be' verb, especially in tenses like the present perfect or future. Another major trap is trying to force an intransitive verb (like 'happen' or 'arrive') into a passive structure. Since these verbs don't have objects, they can never be passive.<br><br>Finally, the biggest stylistic mistake is using passive voice too much. It is a tool, not a rule. If you know who did the action, and that person is important, be bold: use the active voice.",
  "stepByStep": "1. <strong>Check the verb:</strong> Does it need an object? If no (like 'happen'), it MUST be active.<br>2. <strong>Check the structure:</strong> Do you have a 'be' verb AND Verb 3?<br>3. <strong>Check the style:</strong> Is the doer important? If yes, change it back to active voice.",
  "indonesianLearnerWarning": "Because 'terjadi' feels like a passive word in Indonesian (ter- prefix), many learners say 'was happened' or 'was occurred'. Memorize this rule: 'Happen', 'occur', and 'die' are always active in English."
};\`;

const allPassiveLessons = [
  lesson1, lesson2, lesson3, lesson4,
  lesson5, lesson6, lesson7, lesson8,
  lesson9, lesson10, lesson11, lesson12,
  lesson13, lesson14, lesson15, lesson16
].join('\\n\\n');

let finalContent = allPassiveLessons + '\\n\\n' + originalContent;

// Now, update the export list
const exportStart = finalContent.indexOf('export const lessons = [');
if (exportStart !== -1) {
  const exportEnd = finalContent.indexOf('];', exportStart);
  let exportBlock = finalContent.substring(exportStart + 'export const lessons = ['.length, exportEnd);
  
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
  ].join(',\\n  ');
  
  exportBlock = '\\n  ' + passiveKeys + ',\\n' + exportBlock;
  finalContent = finalContent.substring(0, exportStart) + 'export const lessons = [' + exportBlock + '];\\n';
}

fs.writeFileSync(lessonsPath, finalContent, 'utf8');
console.log('Fixed lessons.js');
