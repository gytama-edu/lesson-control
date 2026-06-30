const fs = require('fs');
const path = require('path');

const lessonsPath = path.join(__dirname, '..', 'data', 'lessons.js');
let content = fs.readFileSync(lessonsPath, 'utf8');

const newLessons = [
  {
    "id": "grammar-reported-speech-overview",
    "backHref": "reported-speech.html",
    "backLabel": "Back to Reported Speech",
    "title": "What Is Reported Speech?",
    "skill": "Grammar",
    "category": "Reported Speech",
    "level": "Beginner",
    "description": "Understand how to tell someone what another person said.",
    "learningGoals": [
      "Understand the purpose of reported speech.",
      "Recognize the difference between direct quotes and reported meaning."
    ],
    "meaning": "Reported speech (also called indirect speech) is how we communicate what someone else said, thought, or asked, without using their exact words or quotation marks.",
    "keyIdeas": [
      "We use reported speech to share information, gossip, relay messages, or tell stories.",
      "We focus on the meaning of the message, not the exact original words.",
      "The tense, pronouns, and time words often change to fit the current speaker's perspective."
    ],
    "patterns": [
      {
        "name": "The Basic Structure",
        "formula": "Reporter + Reporting Verb + (that) + Reported Clause",
        "examples": [
          {
            "en": "She said (that) she was tired.",
            "id": "Dia bilang bahwa dia lelah.",
            "explanation": "We are reporting what she felt at that time."
          },
          {
            "en": "He told me he lived in Jakarta.",
            "id": "Dia memberitahu saya bahwa dia tinggal di Jakarta.",
            "explanation": "We are passing on his information."
          }
        ]
      }
    ],
    "commonMistakes": [
      {
        "wrong": "She said me she was tired.",
        "correct": "She told me she was tired. (OR: She said she was tired.)",
        "explanation": "You cannot use 'said' directly with a person object like 'me'."
      }
    ],
    "introduction": "Have you ever wanted to tell your friend a secret that someone else told you? When you pass on that message, you are using reported speech! For example, if Budi says, 'I am hungry,' you don't go to your friend and say: Budi said, 'I am hungry.' You naturally adjust it: 'Budi said that he was hungry.'<br><br>In English, reported speech is an essential conversational skill. It allows us to summarize conversations, report news, and share information. Instead of acting like a human tape recorder repeating exact quotes, we adjust the grammar to fit our current perspective.",
    "stepByStep": "1. <strong>Listen to the original statement.</strong> (e.g., 'I like coffee.')<br>2. <strong>Choose a reporting verb.</strong> (e.g., 'He said...')<br>3. <strong>Adjust the pronouns.</strong> ('I' becomes 'he'.)<br>4. <strong>Adjust the tense if necessary.</strong> ('like' becomes 'liked'.)<br>5. <strong>Put it together:</strong> 'He said that he liked coffee.'",
    "indonesianLearnerWarning": "In Indonesian, reported speech is very simple. We just add 'bahwa' (that) and keep the rest of the sentence almost exactly the same (Dia bilang bahwa dia suka kopi). In English, we must shift the verbs backward in time. This 'backshifting' is the hardest part for Indonesian learners, so pay close attention to the tense changes!",
    "practicePrompts": [
      "Why do we use reported speech instead of direct speech?",
      "What is the difference between 'say' and 'tell'?"
    ],
    "classroomUse": "<strong>Teacher Tip:</strong> Play a game of 'Telephone'. Whisper a sentence to one student, have them whisper it to the next, and the last student must report to the class: 'Budi said that...'",
    "quickComparison": "<strong>Direct vs Reported:</strong> Direct is the exact original audio. Reported is your summary of the meaning.",
    "summary": [
      "Reported speech shares meaning, not exact words.",
      "It requires changes in pronouns and tenses.",
      "'Say' and 'tell' are the most common reporting verbs."
    ]
  },
  {
    "id": "grammar-direct-vs-reported-speech",
    "backHref": "reported-speech.html",
    "backLabel": "Back to Reported Speech",
    "title": "Direct Speech vs Reported Speech",
    "skill": "Grammar",
    "category": "Reported Speech",
    "level": "Beginner",
    "description": "Compare exact quotes with reported meanings.",
    "learningGoals": [
      "Identify direct speech visually (quotation marks).",
      "Understand when to use direct speech vs reported speech."
    ],
    "meaning": "Direct speech repeats the exact words spoken and uses quotation marks. Reported speech summarizes the meaning of what was said without quotation marks, adjusting the grammar to fit the reporter's point of view.",
    "keyIdeas": [
      "Direct speech is common in novels, scripts, and formal quotes.",
      "Reported speech is common in everyday conversation, news, and storytelling.",
      "Direct speech feels dramatic; reported speech feels conversational."
    ],
    "patterns": [
      {
        "name": "Direct vs Reported",
        "formula": "Direct: Speaker said, \\\"Exact words.\\\" | Reported: Speaker said (that) adjusted words.",
        "examples": [
          {
            "en": "Direct: John said, \\\"I am busy.\\\"",
            "id": "Langsung: John berkata, \\\"Saya sibuk.\\\"",
            "explanation": "Exact words."
          },
          {
            "en": "Reported: John said that he was busy.",
            "id": "Dilaporkan: John bilang bahwa dia sibuk.",
            "explanation": "Summarized meaning."
          }
        ]
      }
    ],
    "commonMistakes": [
      {
        "wrong": "John said that \\\"he was busy.\\\"",
        "correct": "John said that he was busy.",
        "explanation": "Never use quotation marks with reported speech."
      }
    ],
    "introduction": "When you read a novel, you often see characters talking to each other using quotation marks. This is Direct Speech. It's like pressing 'play' on a recording. But when you are chatting with your friends at a cafe, you rarely use quotation marks with your voice.<br><br>Instead, you naturally translate what people said into your own words. You use Reported Speech. Understanding the difference between these two styles helps you know when to be dramatic and exact (Direct) and when to be conversational and flowing (Reported).",
    "stepByStep": "1. <strong>Identify the goal:</strong> Do you need to quote someone exactly, or just share the idea?<br>2. <strong>If quoting:</strong> Use a comma, open quotes, use exact words, close quotes.<br>3. <strong>If sharing the idea:</strong> Drop the quotes, add 'that', and shift the pronouns and tense.",
    "indonesianLearnerWarning": "Indonesians often write English essays using too much Direct Speech because it feels easier. Try to convert quotes into Reported Speech to make your writing flow much more naturally.",
    "practicePrompts": [
      "Transform this to reported speech: Mary said, \\\"I love this city.\\\"",
      "Transform this to direct speech: He said he was tired."
    ],
    "classroomUse": "<strong>Teacher Tip:</strong> Show a short video clip. Pause it and ask half the class to write exactly what the character said (Direct), and the other half to summarize it (Reported).",
    "quickComparison": "<strong>Direct:</strong> Exact words, quotes, dramatic. <strong>Reported:</strong> Summarized, no quotes, conversational.",
    "summary": [
      "Direct speech uses quotation marks.",
      "Reported speech adjusts grammar and removes quotes.",
      "Reported speech is more natural for daily conversations."
    ]
  },
  {
    "id": "grammar-reporting-verbs-say-tell-ask",
    "backHref": "reported-speech.html",
    "backLabel": "Back to Reported Speech",
    "title": "Reporting Verbs: Say, Tell, and Ask",
    "skill": "Grammar",
    "category": "Reported Speech",
    "level": "Beginner",
    "description": "Learn the grammar patterns for the most common reporting verbs.",
    "learningGoals": [
      "Master the grammatical difference between say and tell.",
      "Know when to use ask for questions and requests."
    ],
    "meaning": "Reporting verbs introduce the reported speech. 'Say' focuses on the words spoken, 'tell' focuses on who received the message, and 'ask' is used for questions or requests.",
    "keyIdeas": [
      "TELL must be followed by a person (an object).",
      "SAY is NOT followed by a person (unless you use 'to').",
      "ASK is used for reporting questions."
    ],
    "patterns": [
      {
        "name": "Say vs Tell vs Ask",
        "formula": "Say + (that) | Tell + Person + (that) | Ask + Person",
        "examples": [
          {
            "en": "She said (that) it was raining.",
            "id": "Dia bilang hujan.",
            "explanation": "Focus is on the information."
          },
          {
            "en": "She told me (that) it was raining.",
            "id": "Dia memberitahu saya bahwa hujan.",
            "explanation": "Focus includes the listener ('me')."
          },
          {
            "en": "She asked me if it was raining.",
            "id": "Dia bertanya kepada saya apakah hujan.",
            "explanation": "Reporting a question."
          }
        ]
      }
    ],
    "commonMistakes": [
      {
        "wrong": "He said me that he was tired.",
        "correct": "He told me that he was tired.",
        "explanation": "'Say' cannot take a direct personal object. Use 'tell'."
      },
      {
        "wrong": "He told that he was tired.",
        "correct": "He said that he was tired. (OR: He told me...)",
        "explanation": "'Tell' MUST have a person after it."
      }
    ],
    "introduction": "Before you can report what someone said, you need a 'door' to enter the sentence. Reporting verbs are that door. The three most common doors are 'say', 'tell', and 'ask'.<br><br>Many learners mix up 'say' and 'tell' because they mean almost the same thing. But grammatically, they behave very differently. Think of 'tell' as throwing a ball—you have to throw it TO someone. You must 'tell someone'. Think of 'say' as dropping a ball—you just say the words out loud. Mastering these verbs is your first big step to perfect reported speech.",
    "stepByStep": "1. <strong>Are you reporting a question?</strong> Use 'ask'.<br>2. <strong>Are you mentioning the listener (me, him, John)?</strong> Use 'tell' (He told John).<br>3. <strong>Are you only mentioning the words spoken?</strong> Use 'say' (He said).",
    "indonesianLearnerWarning": "In Indonesian, 'berkata', 'bilang', 'memberitahu' can sometimes be swapped easily. In English, the rule is strict: TELL + PERSON. Never say 'He told that...'",
    "practicePrompts": [
      "Fill in the blank: She ____ me that she was leaving.",
      "Fill in the blank: They ____ they were hungry."
    ],
    "classroomUse": "<strong>Teacher Tip:</strong> Do a rapid-fire drill. Shout out a pronoun (me, him, her) or nothing (blank). Students must instantly reply with 'tell' or 'say'.",
    "quickComparison": "<strong>Say vs Tell:</strong> Say (words). Tell (person) (words).",
    "summary": [
      "Use 'tell' when you mention the listener.",
      "Use 'say' when you don't mention the listener.",
      "Use 'ask' for reported questions."
    ]
  },
  {
    "id": "grammar-reported-speech-pronoun-time-place-changes",
    "backHref": "reported-speech.html",
    "backLabel": "Back to Reported Speech",
    "title": "Pronoun, Time, and Place Changes",
    "skill": "Grammar",
    "category": "Reported Speech",
    "level": "Intermediate",
    "description": "Understand how to adjust words when the reporting situation changes.",
    "learningGoals": [
      "Change pronouns to match the reporter's perspective.",
      "Shift time words (e.g., tomorrow -> the next day).",
      "Shift place words (e.g., here -> there)."
    ],
    "meaning": "When we report speech, we are usually in a different place, at a different time, and we are a different person than the original speaker. Therefore, words related to person (I, you), time (now, today), and place (here, this) must change to remain logical.",
    "keyIdeas": [
      "Pronouns change to reflect who is reporting.",
      "Time words shift away from the present (e.g., yesterday -> the day before).",
      "Place/Demonstrative words shift away from the speaker (e.g., here -> there, this -> that)."
    ],
    "patterns": [
      {
        "name": "Common Shifts",
        "formula": "Now -> Then | Here -> There | Tomorrow -> The next day",
        "examples": [
          {
            "en": "Direct: \\\"I will do it tomorrow.\\\"",
            "id": "Langsung: \\\"Saya akan melakukannya besok.\\\"",
            "explanation": "Original perspective."
          },
          {
            "en": "Reported: He said he would do it the next day.",
            "id": "Dilaporkan: Dia bilang dia akan melakukannya keesokan harinya.",
            "explanation": "'I' becomes 'he'. 'Tomorrow' becomes 'the next day'."
          }
        ]
      }
    ],
    "commonMistakes": [
      {
        "wrong": "On Monday, he said: \\\"I am busy today.\\\" -> He said he was busy today.",
        "correct": "He said he was busy that day.",
        "explanation": "If it is no longer Monday, 'today' is wrong. You must change it to 'that day'."
      }
    ],
    "introduction": "Imagine your friend calls you on Tuesday from Bali and says, 'I am having a great time here today!' Now, imagine it is Friday, you are in Jakarta, and you are telling someone about the call. If you say, 'He said I am having a great time here today,' it sounds like YOU are having a great time in Jakarta on Friday!<br><br>To make sense, you have to adjust the perspective: 'He said HE was having a great time THERE THAT DAY.' Reported speech requires you to update the GPS coordinates of the sentence: Who is talking? Where are they? When is it?",
    "stepByStep": "1. <strong>Update the Person:</strong> Change I/We to He/She/They based on who spoke.<br>2. <strong>Update the Place:</strong> If they said 'here', change it to 'there'. 'This' becomes 'that'.<br>3. <strong>Update the Time:</strong> 'Now' -> 'then'. 'Today' -> 'that day'. 'Tomorrow' -> 'the next day'. 'Yesterday' -> 'the day before'.",
    "indonesianLearnerWarning": "In Indonesian, we often keep words like 'besok' or 'kemarin' the same when reporting, relying on context. In English, you are expected to mathematically shift these words (the previous day, the following day) to avoid confusion.",
    "practicePrompts": [
      "Change this word for reported speech: 'yesterday'.",
      "Change this word for reported speech: 'here'."
    ],
    "classroomUse": "<strong>Teacher Tip:</strong> Create a 'Time Machine' roleplay. Have a student say a sentence 'in the past', then have another student report it 'in the present', focusing on shifting the time words.",
    "quickComparison": "<strong>Direct vs Reported Time:</strong> Today -> That day. Tomorrow -> The next day. Now -> Then.",
    "summary": [
      "Reported speech changes the perspective of the sentence.",
      "Pronouns must match the new speaker.",
      "Time and place words shift backward or away."
    ]
  }
];

const endBracket = '];';
const endBracketIndex = content.lastIndexOf(endBracket);

if (endBracketIndex !== -1) {
  let insertion = '';
  for (const lesson of newLessons) {
    insertion += JSON.stringify(lesson, null, 2) + ',\n';
  }
  content = content.substring(0, endBracketIndex) + insertion + content.substring(endBracketIndex);
  fs.writeFileSync(lessonsPath, content, 'utf8');
  console.log('Script RS 1 complete.');
} else {
  console.log('Could not find end bracket.');
}
