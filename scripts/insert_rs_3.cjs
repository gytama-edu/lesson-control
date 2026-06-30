const fs = require('fs');
const path = require('path');

const lessonsPath = path.join(__dirname, '..', 'data', 'lessons.js');
let content = fs.readFileSync(lessonsPath, 'utf8');

const newLessons = [
  {
    "id": "grammar-reported-yes-no-questions",
    "backHref": "reported-speech.html",
    "backLabel": "Back to Reported Speech",
    "title": "Reported Yes/No Questions",
    "skill": "Grammar",
    "category": "Reported Speech",
    "level": "Intermediate",
    "description": "Report simple questions using if or whether with statement word order.",
    "learningGoals": [
      "Use 'if' or 'whether' to connect a reported Yes/No question.",
      "Change question word order back into statement word order."
    ],
    "meaning": "When reporting a question that can be answered with Yes or No, we cannot use 'that'. Instead, we use 'if' or 'whether', and we change the sentence back to a normal statement structure (Subject + Verb).",
    "keyIdeas": [
      "Use the reporting verb 'ask', not 'say' or 'tell'.",
      "Connect the two parts with 'if' or 'whether'.",
      "Do NOT use question structures (like 'do', 'does', 'did', or inverted verbs). The reported question is technically a statement now."
    ],
    "patterns": [
      {
        "name": "Reporting Yes/No Questions",
        "formula": "Subject + asked + (Person) + if/whether + Subject + Verb",
        "examples": [
          {
            "en": "Direct: \\\"Are you hungry?\\\"",
            "id": "Langsung: \\\"Apakah kamu lapar?\\\"",
            "explanation": "Verb 'Are' comes before subject 'you'."
          },
          {
            "en": "Reported: She asked if I was hungry.",
            "id": "Dilaporkan: Dia bertanya apakah saya lapar.",
            "explanation": "Subject 'I' comes before verb 'was'. No question mark."
          },
          {
            "en": "Direct: \\\"Do you like coffee?\\\"",
            "id": "Langsung: \\\"Apakah kamu suka kopi?\\\"",
            "explanation": "Uses 'Do'."
          },
          {
            "en": "Reported: He asked whether I liked coffee.",
            "id": "Dilaporkan: Dia bertanya apakah saya suka kopi.",
            "explanation": "Drop the 'do'. Backshift 'like' to 'liked'."
          }
        ]
      }
    ],
    "commonMistakes": [
      {
        "wrong": "She asked me if was I hungry.",
        "correct": "She asked me if I was hungry.",
        "explanation": "Do not use question word order (verb-subject) in a reported question."
      },
      {
        "wrong": "He asked did I like coffee.",
        "correct": "He asked if I liked coffee.",
        "explanation": "Drop the 'did' and backshift the main verb."
      }
    ],
    "introduction": "Questions behave very differently than statements when they are reported. If a friend asks you, 'Are you okay?', how do you tell someone else about it? You can't say, 'He asked that are you okay.' That sounds broken.<br><br>First, a reported question is no longer a question; it's a statement *about* a question. Therefore, you must remove the question mark, drop helper verbs like 'do/does/did', and put the subject before the verb. Second, because there is no question word (like Who or What), you need a bridge word to connect the sentence. We use 'if' or 'whether'.",
    "stepByStep": "1. <strong>Use 'ask':</strong> 'He asked me...'<br>2. <strong>Add the bridge:</strong> '...if...'<br>3. <strong>Find the subject:</strong> Change 'are you' to 'I'.<br>4. <strong>Fix the word order and backshift:</strong> Change to a statement (I am) and shift back (I was).<br>5. <strong>Result:</strong> 'He asked me if I was hungry.' (NO question mark).",
    "indonesianLearnerWarning": "In Indonesian, 'apakah' translates perfectly to 'if/whether' here (Dia bertanya apakah...). The hard part is remembering to un-invert the English verb (change 'was I' to 'I was'). Practice 'flattening' the question into a statement.",
    "practicePrompts": [
      "Report: \\\"Is it raining?\\\" (She asked...)",
      "Report: \\\"Did you finish?\\\" (He asked me...)"
    ],
    "classroomUse": "<strong>Teacher Tip:</strong> The 'Interview Interview' game. Student A asks Student B Yes/No questions. Student C listens and must report: 'A asked B if he liked pizza, and B said...'",
    "quickComparison": "<strong>Question:</strong> Are you ready? <strong>Reported:</strong> He asked if I was ready.",
    "summary": [
      "Use 'if' or 'whether' for Yes/No questions.",
      "Change back to statement word order (Subject + Verb).",
      "Remove 'do', 'does', or 'did'.",
      "Do not use a question mark."
    ]
  },
  {
    "id": "grammar-reported-wh-questions",
    "backHref": "reported-speech.html",
    "backLabel": "Back to Reported Speech",
    "title": "Reported WH-Questions",
    "skill": "Grammar",
    "category": "Reported Speech",
    "level": "Intermediate",
    "description": "Keep the question word and change to statement word order.",
    "learningGoals": [
      "Use the WH-word as the connection instead of 'if'.",
      "Apply statement word order to WH-questions."
    ],
    "meaning": "When reporting a WH-question (Who, What, Where, When, Why, How), we keep the original question word as the bridge. We do NOT use 'if' or 'that'. Just like Yes/No questions, we must change the word order back to a normal statement.",
    "keyIdeas": [
      "The WH-word (what, where, how) connects the reporting verb to the clause.",
      "The word order must be Subject + Verb.",
      "Helper verbs (do, does, did) disappear."
    ],
    "patterns": [
      {
        "name": "Reporting WH-Questions",
        "formula": "Subject + asked + (Person) + WH-Word + Subject + Verb",
        "examples": [
          {
            "en": "Direct: \\\"Where are you going?\\\"",
            "id": "Langsung: \\\"Ke mana kamu akan pergi?\\\"",
            "explanation": "Verb 'are' before subject 'you'."
          },
          {
            "en": "Reported: He asked where I was going.",
            "id": "Dilaporkan: Dia bertanya ke mana saya akan pergi.",
            "explanation": "Bridge is 'where'. Order is subject 'I' then verb 'was'."
          },
          {
            "en": "Direct: \\\"What do you want?\\\"",
            "id": "Langsung: \\\"Apa yang kamu inginkan?\\\"",
            "explanation": "Uses helper 'do'."
          },
          {
            "en": "Reported: She asked what I wanted.",
            "id": "Dilaporkan: Dia bertanya apa yang saya inginkan.",
            "explanation": "Drop 'do'. Backshift 'want' to 'wanted'."
          }
        ]
      }
    ],
    "commonMistakes": [
      {
        "wrong": "He asked me where was I going.",
        "correct": "He asked me where I was going.",
        "explanation": "Do not use question word order in reported questions."
      },
      {
        "wrong": "She asked me what did I want.",
        "correct": "She asked me what I wanted.",
        "explanation": "Drop 'did' and backshift the main verb."
      }
    ],
    "introduction": "Reporting a WH-question is almost exactly the same as reporting a Yes/No question, but with one big difference: you don't need to add 'if' or 'whether'. The WH-word (What, Where, Why, etc.) is strong enough to act as the bridge all by itself.<br><br>The biggest trap for learners is keeping the question format. If someone asks, 'Where is the station?', your brain wants to report it as 'He asked where is the station.' But remember, you are not asking a question anymore. You are stating a fact about a question. You must flatten it: 'He asked where the station was.'",
    "stepByStep": "1. <strong>Use 'ask':</strong> 'She asked me...'<br>2. <strong>Keep the WH-word:</strong> '...where...'<br>3. <strong>Find the subject and verb:</strong> 'is the station' -> subject is 'the station'.<br>4. <strong>Flatten and backshift:</strong> Put subject first, then the backshifted verb ('the station was').<br>5. <strong>Result:</strong> 'She asked me where the station was.'",
    "indonesianLearnerWarning": "In spoken English, even native speakers sometimes accidentally say 'He asked where was I going' because the question rhythm is so catchy. Train yourself to break that rhythm and speak it like a flat statement.",
    "practicePrompts": [
      "Report: \\\"Why are you crying?\\\" (He asked...)",
      "Report: \\\"When does the train leave?\\\" (She asked...)"
    ],
    "classroomUse": "<strong>Teacher Tip:</strong> Play 'Nosy Neighbor'. Have one student act as a nosy neighbor who didn't hear a conversation. They must ask another student: 'What did he ask you?' 'He asked me where I lived.'",
    "quickComparison": "<strong>Direct:</strong> What time is it? <strong>Reported:</strong> He asked what time it was.",
    "summary": [
      "Keep the original WH-word.",
      "Do NOT use 'that' or 'if'.",
      "Change back to statement word order (Subject + Verb)."
    ]
  },
  {
    "id": "grammar-reported-commands-instructions",
    "backHref": "reported-speech.html",
    "backLabel": "Back to Reported Speech",
    "title": "Reported Commands and Instructions",
    "skill": "Grammar",
    "category": "Reported Speech",
    "level": "Intermediate",
    "description": "Report commands and instructions using 'to' + base verb.",
    "learningGoals": [
      "Use 'tell' or 'order' for commands.",
      "Connect the command with 'to' (positive) or 'not to' (negative).",
      "Avoid backshifting verbs in commands."
    ],
    "meaning": "When someone gives a command (an imperative sentence like 'Sit down!' or 'Don't move!'), we do not use 'that' or backshift the tense. Instead, we use an infinitive phrase ('to' + verb).",
    "keyIdeas": [
      "Use strong reporting verbs like 'tell', 'order', or 'command'.",
      "Use 'to + Verb 1' for positive commands.",
      "Use 'not to + Verb 1' for negative commands."
    ],
    "patterns": [
      {
        "name": "Reporting Positive Commands",
        "formula": "Subject + told/ordered + Person + to + Verb 1",
        "examples": [
          {
            "en": "Direct: \\\"Sit down.\\\"",
            "id": "Langsung: \\\"Duduklah.\\\"",
            "explanation": "A direct command."
          },
          {
            "en": "Reported: The teacher told me to sit down.",
            "id": "Dilaporkan: Guru menyuruh saya untuk duduk.",
            "explanation": "Uses 'to' + base verb."
          }
        ]
      },
      {
        "name": "Reporting Negative Commands",
        "formula": "Subject + told/ordered + Person + not to + Verb 1",
        "examples": [
          {
            "en": "Direct: \\\"Don't move!\\\"",
            "id": "Langsung: \\\"Jangan bergerak!\\\"",
            "explanation": "A negative command."
          },
          {
            "en": "Reported: The police ordered him not to move.",
            "id": "Dilaporkan: Polisi memerintahkannya untuk tidak bergerak.",
            "explanation": "Uses 'not to'. We drop the 'Don't'."
          }
        ]
      }
    ],
    "commonMistakes": [
      {
        "wrong": "He told me that sit down.",
        "correct": "He told me to sit down.",
        "explanation": "Do not use 'that' for commands."
      },
      {
        "wrong": "She told me to don't talk.",
        "correct": "She told me not to talk.",
        "explanation": "Drop 'don't' and use 'not to'."
      }
    ],
    "introduction": "Reporting a command is the easiest type of reported speech because there is no tense backshifting to worry about! If a boss says, 'Finish the report,' or a parent says, 'Don't touch the stove,' you just need to act like a messenger.<br><br>Instead of building a complex clause with subjects and backshifted verbs, you simply attach an action to a person using the word 'to'. Think of it as pointing an arrow at someone: 'He told John TO finish the report.' It is fast, efficient, and very common in the workplace and classroom.",
    "stepByStep": "1. <strong>Choose a strong verb:</strong> 'told', 'ordered', 'instructed'.<br>2. <strong>Add the person:</strong> 'The boss told me...'<br>3. <strong>If positive:</strong> Add 'to' + base verb ('...to finish it.').<br>4. <strong>If negative:</strong> Replace 'Don't' with 'not to' + base verb ('...not to be late.').",
    "indonesianLearnerWarning": "In Indonesian, we often say 'Dia menyuruh saya jangan...' (He told me don't...). In English, 'jangan' (don't) must transform into 'not to'. Never say 'told me don't'.",
    "practicePrompts": [
      "Report: \\\"Open the door.\\\" (He told me...)",
      "Report: \\\"Don't touch that.\\\" (She told him...)"
    ],
    "classroomUse": "<strong>Teacher Tip:</strong> Play 'Simon Says', but with a twist. After you give a command ('Simon says touch your nose'), ask a student: 'What did I just tell you to do?' Answer: 'You told us to touch our noses.'",
    "quickComparison": "<strong>Statement:</strong> He told me that he was late. <strong>Command:</strong> He told me to be on time.",
    "summary": [
      "Do not use 'that' for commands.",
      "Use 'to + verb' for positive commands.",
      "Use 'not to + verb' for negative commands."
    ]
  },
  {
    "id": "grammar-reported-requests-advice-suggestions",
    "backHref": "reported-speech.html",
    "backLabel": "Back to Reported Speech",
    "title": "Reported Requests, Advice, and Suggestions",
    "skill": "Grammar",
    "category": "Reported Speech",
    "level": "Upper-Intermediate",
    "description": "Learn the different patterns for reporting advice and suggestions.",
    "learningGoals": [
      "Report polite requests using 'ask' + to-infinitive.",
      "Report advice using 'advise' + to-infinitive.",
      "Report suggestions using 'suggest' + V-ing or 'suggest that'."
    ],
    "meaning": "Requests are softer than commands, so we use 'ask' instead of 'tell'. Advice uses 'advise'. Suggestions are unique because the reporting verb 'suggest' follows a totally different grammar pattern.",
    "keyIdeas": [
      "Requests use: ask + person + to + verb.",
      "Advice uses: advise + person + to + verb.",
      "Suggestions use: suggest + V-ing (or 'suggest that'). DO NOT use 'suggest person to'."
    ],
    "patterns": [
      {
        "name": "Reporting Requests",
        "formula": "Subject + asked + Person + to + Verb 1",
        "examples": [
          {
            "en": "Direct: \\\"Please help me.\\\"",
            "id": "Langsung: \\\"Tolong bantu saya.\\\"",
            "explanation": "A polite request."
          },
          {
            "en": "Reported: He asked me to help him.",
            "id": "Dilaporkan: Dia meminta saya untuk membantunya.",
            "explanation": "We drop 'please' and use 'to'."
          }
        ]
      },
      {
        "name": "Reporting Suggestions (The Tricky One)",
        "formula": "Subject + suggested + V-ing",
        "examples": [
          {
            "en": "Direct: \\\"Let's go to the park.\\\"",
            "id": "Langsung: \\\"Ayo pergi ke taman.\\\"",
            "explanation": "A suggestion."
          },
          {
            "en": "Reported: She suggested going to the park.",
            "id": "Dilaporkan: Dia menyarankan untuk pergi ke taman.",
            "explanation": "Notice there is no 'me' and no 'to'."
          }
        ]
      }
    ],
    "commonMistakes": [
      {
        "wrong": "She suggested me to go to the park.",
        "correct": "She suggested going to the park.",
        "explanation": "NEVER use 'suggest someone to do something'. It is a huge grammatical error in English."
      },
      {
        "wrong": "He asked to me to help.",
        "correct": "He asked me to help.",
        "explanation": "Do not use 'to' before the person object with 'ask' or 'tell'."
      }
    ],
    "introduction": "When someone says 'Please pass the salt' or 'Let's get pizza,' they aren't giving a military command, and they aren't asking a factual question. They are making a request or a suggestion. How do we report these softer interactions?<br><br>Requests and advice are easy: they follow the exact same arrow pattern as commands (He asked me TO pass the salt). However, suggestions are the ultimate trap for learners. The verb 'suggest' has its own unique rules that break all the patterns we've learned so far.",
    "stepByStep": "1. <strong>For Requests:</strong> Use 'ask' + person + to + verb (He asked me to help).<br>2. <strong>For Advice:</strong> Use 'advise' + person + to + verb (The doctor advised me to rest).<br>3. <strong>For Suggestions:</strong> Use 'suggest' + V-ing (He suggested eating pizza). Drop the person entirely!",
    "indonesianLearnerWarning": "Indonesian directly translates to 'Dia menyarankan saya untuk pergi' (He suggested me to go). THIS IS WRONG IN ENGLISH. You must force yourself to say 'He suggested going' or 'He suggested that we go'.",
    "practicePrompts": [
      "Report: \\\"Please wait here.\\\" (She asked him...)",
      "Report: \\\"Let's order pizza.\\\" (He suggested...)"
    ],
    "classroomUse": "<strong>Teacher Tip:</strong> Put a big red 'X' over the phrase 'suggest me to' on the whiteboard. It is one of the most persistent errors for learners. Do rapid-fire drills converting 'Let's...' into 'He suggested V-ing'.",
    "quickComparison": "<strong>Command:</strong> He told me to go. <strong>Suggestion:</strong> He suggested going.",
    "summary": [
      "Report requests using 'ask someone to'.",
      "Report advice using 'advise someone to'.",
      "Report suggestions using 'suggest V-ing'. Never say 'suggest me to'."
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
  console.log('Script RS 3 complete.');
} else {
  console.log('Could not find end bracket.');
}
