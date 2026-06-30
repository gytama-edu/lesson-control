const fs = require('fs');
const path = require('path');

const lessonsPath = path.join(__dirname, '..', 'data', 'lessons.js');
let content = fs.readFileSync(lessonsPath, 'utf8');

const newLessons = [
  {
    "id": "grammar-reported-statements",
    "backHref": "reported-speech.html",
    "backLabel": "Back to Reported Speech",
    "title": "Reported Statements",
    "skill": "Grammar",
    "category": "Reported Speech",
    "level": "Intermediate",
    "description": "Learn the structure for reporting basic statements.",
    "learningGoals": [
      "Structure a basic reported statement using a reporting verb and 'that'.",
      "Apply backshifting to present tenses."
    ],
    "meaning": "When we report a statement (a normal sentence, not a question or command), we connect the reporting verb to the reported clause, optionally using the word 'that'.",
    "keyIdeas": [
      "The word 'that' is optional but common in formal English.",
      "The tense in the reported clause usually shifts back one step into the past (backshifting)."
    ],
    "patterns": [
      {
        "name": "Reporting a Statement",
        "formula": "Subject + said/told (someone) + (that) + Subject + Backshifted Verb",
        "examples": [
          {
            "en": "Direct: \\\"I need help.\\\"",
            "id": "Langsung: \\\"Saya butuh bantuan.\\\"",
            "explanation": "Present simple statement."
          },
          {
            "en": "Reported: He said (that) he needed help.",
            "id": "Dilaporkan: Dia bilang bahwa dia butuh bantuan.",
            "explanation": "'need' shifts back to 'needed'."
          }
        ]
      }
    ],
    "commonMistakes": [
      {
        "wrong": "She said me that she was happy.",
        "correct": "She told me that she was happy.",
        "explanation": "Remember the say/tell rule: tell + person."
      }
    ],
    "introduction": "Reporting a statement is the most common use of reported speech. Imagine you are acting as a bridge between two people who couldn't talk to each other directly.<br><br>The structure is very simple: You start with your reporting verb ('He said' or 'He told me'), you build the bridge (the word 'that', though you can drop it in casual conversation), and then you deliver the adjusted message. The most important rule to remember is that because the original words were spoken in the past, the grammar of the message usually takes one step backward in time.",
    "stepByStep": "1. <strong>Start with the reporter:</strong> 'Sarah said...' or 'Sarah told John...'<br>2. <strong>Add 'that':</strong> 'Sarah said that...' (Optional).<br>3. <strong>Adjust the subject:</strong> '...she...'<br>4. <strong>Backshift the verb:</strong> Change present to past. ('...was tired.').",
    "indonesianLearnerWarning": "In spoken English, native speakers drop the word 'that' all the time (He said he was tired). Don't panic if you don't hear it. But in formal writing, it's safer to include 'that'.",
    "practicePrompts": [
      "Report this: \\\"I work in London.\\\" (She said...)",
      "Report this: \\\"We are happy.\\\" (They told us...)"
    ],
    "classroomUse": "<strong>Teacher Tip:</strong> Pair students up. Student A reads a random fact. Student B must report it to the class: 'Budi said that elephants sleep standing up.'",
    "quickComparison": "<strong>With 'that' vs Without:</strong> 'He said that he was cold' (Formal/Clear) vs 'He said he was cold' (Casual/Spoken).",
    "summary": [
      "Use said or told + person.",
      "Connect with the optional word 'that'.",
      "Shift the tense back one step."
    ]
  },
  {
    "id": "grammar-reported-speech-present-to-past",
    "backHref": "reported-speech.html",
    "backLabel": "Back to Reported Speech",
    "title": "Present to Past Tense Changes",
    "skill": "Grammar",
    "category": "Reported Speech",
    "level": "Intermediate",
    "description": "Shift present tenses one step back into past forms (backshift).",
    "learningGoals": [
      "Master the backshift from Present Simple to Past Simple.",
      "Master the backshift from Present Continuous to Past Continuous."
    ],
    "meaning": "Because reporting usually happens after the original speech, we push the original present tenses one step back into the past. This is called 'backshifting'.",
    "keyIdeas": [
      "Am/Is/Are -> Was/Were",
      "Verb 1 (eat) -> Verb 2 (ate)",
      "Do/Does not -> Did not"
    ],
    "patterns": [
      {
        "name": "Present Simple -> Past Simple",
        "formula": "V1 -> V2",
        "examples": [
          {
            "en": "Direct: \\\"I like tea.\\\"",
            "id": "Langsung: \\\"Saya suka teh.\\\"",
            "explanation": "Present simple."
          },
          {
            "en": "Reported: She said she liked tea.",
            "id": "Dilaporkan: Dia bilang dia suka teh.",
            "explanation": "Past simple."
          }
        ]
      },
      {
        "name": "Present Continuous -> Past Continuous",
        "formula": "am/is/are + V-ing -> was/were + V-ing",
        "examples": [
          {
            "en": "Direct: \\\"I am working.\\\"",
            "id": "Langsung: \\\"Saya sedang bekerja.\\\"",
            "explanation": "Present continuous."
          },
          {
            "en": "Reported: He said he was working.",
            "id": "Dilaporkan: Dia bilang dia sedang bekerja.",
            "explanation": "Past continuous."
          }
        ]
      }
    ],
    "commonMistakes": [
      {
        "wrong": "She said she is tired.",
        "correct": "She said she was tired.",
        "explanation": "Unless the fact is still universally true right now, you must backshift 'is' to 'was'."
      }
    ],
    "introduction": "When you report speech, you are standing in the present, looking back at a conversation that happened in the past. Because that conversation is now history, the grammar needs to reflect that time has passed.<br><br>The rule is simple: take one step back in time. If the person used a present tense, you push it into the past tense. This 'backshifting' is the core mechanic of reported speech.",
    "stepByStep": "1. <strong>Identify the verb in the direct quote.</strong> (e.g., 'am playing')<br>2. <strong>Take one step back.</strong> What is the past version of 'am'? ('was').<br>3. <strong>Apply the new verb.</strong> ('He said he was playing.').",
    "indonesianLearnerWarning": "Indonesian verbs do not have tenses, so backshifting feels unnatural. You must actively train your brain to hear 'I am' and output 'He was'.",
    "practicePrompts": [
      "Backshift this verb: is -> ____",
      "Backshift this verb: play -> ____",
      "Backshift this verb: don't like -> ____"
    ],
    "classroomUse": "<strong>Teacher Tip:</strong> Do a 'One Step Back' drill. You say a present tense verb (e.g., 'is sleeping'), and the class must shout out the backshifted version ('was sleeping').",
    "quickComparison": "<strong>Direct vs Reported:</strong> Present -> Past. Continuous -> Past Continuous.",
    "summary": [
      "Backshifting means moving the tense one step back in time.",
      "Present simple becomes past simple.",
      "Present continuous becomes past continuous."
    ]
  },
  {
    "id": "grammar-reported-speech-past-perfect-modal-changes",
    "backHref": "reported-speech.html",
    "backLabel": "Back to Reported Speech",
    "title": "Past, Perfect, and Modal Changes",
    "skill": "Grammar",
    "category": "Reported Speech",
    "level": "Upper-Intermediate",
    "description": "Understand how past tenses and modals change in reported speech.",
    "learningGoals": [
      "Backshift Past Simple to Past Perfect.",
      "Backshift Present Perfect to Past Perfect.",
      "Know which modals change (will, can, may) and which stay the same (would, could, should)."
    ],
    "meaning": "If the original speaker already used a past tense or a perfect tense, we push it back as far as it can go: into the Past Perfect. Some modal verbs also shift backward, while others remain unchanged.",
    "keyIdeas": [
      "Past Simple (V2) -> Past Perfect (had + V3).",
      "Present Perfect (have/has + V3) -> Past Perfect (had + V3).",
      "Will -> Would, Can -> Could, May -> Might."
    ],
    "patterns": [
      {
        "name": "Past and Perfect Backshifts",
        "formula": "V2 / have V3 -> had + V3",
        "examples": [
          {
            "en": "Direct: \\\"I saw the movie.\\\" (Past Simple)",
            "id": "Langsung: \\\"Saya melihat film itu.\\\"",
            "explanation": "Already in the past."
          },
          {
            "en": "Reported: He said he had seen the movie.",
            "id": "Dilaporkan: Dia bilang dia telah melihat film itu.",
            "explanation": "Pushed back to past perfect."
          },
          {
            "en": "Direct: \\\"I have finished.\\\" (Present Perfect)",
            "id": "Langsung: \\\"Saya sudah selesai.\\\"",
            "explanation": "Present perfect."
          },
          {
            "en": "Reported: She said she had finished.",
            "id": "Dilaporkan: Dia bilang dia telah selesai.",
            "explanation": "Pushed back to past perfect."
          }
        ]
      },
      {
        "name": "Modal Backshifts",
        "formula": "Will -> Would | Can -> Could | May -> Might",
        "examples": [
          {
            "en": "Direct: \\\"I will go.\\\"",
            "id": "Langsung: \\\"Saya akan pergi.\\\"",
            "explanation": "Future promise."
          },
          {
            "en": "Reported: He said he would go.",
            "id": "Dilaporkan: Dia bilang dia akan pergi.",
            "explanation": "Shifted modal."
          }
        ]
      }
    ],
    "commonMistakes": [
      {
        "wrong": "He said he will go.",
        "correct": "He said he would go.",
        "explanation": "'Will' must backshift to 'would' in reported speech."
      }
    ],
    "introduction": "What happens when the person you are quoting already talked about the past? For example, what if they said, 'I went to the store'? You can't just leave it as 'went' because you need to show that their action happened *before* they even spoke to you.<br><br>The solution is the Past Perfect tense (had + Verb 3). It is the 'deep past'. Both Past Simple and Present Perfect get pushed back into this 'deep past' box. Additionally, future plans and abilities (will, can, may) get pushed back into their past forms (would, could, might).",
    "stepByStep": "1. <strong>Identify the verb:</strong> Is it V2, 'have/has + V3', or a modal?<br>2. <strong>If V2 or Present Perfect:</strong> Change it to 'had + V3'.<br>3. <strong>If modal:</strong> Change will->would, can->could, may->might.<br>4. <strong>If already past modal:</strong> (would, could, should, might) -> Do not change it!",
    "indonesianLearnerWarning": "This double-past concept is very abstract in Indonesian. Just remember the formula: if the original sentence had 'sudah/telah' (have/has) or was in the past, always convert it to 'had' + Verb 3 in reported speech.",
    "practicePrompts": [
      "Backshift: 'I lost my keys.' -> He said he ____ his keys.",
      "Backshift: 'I can swim.' -> She said she ____ swim."
    ],
    "classroomUse": "<strong>Teacher Tip:</strong> Focus heavily on 'will' to 'would'. Have students write down their New Year's resolutions ('I will...'). Then have their partners report them: 'He said he would...'",
    "quickComparison": "<strong>Modals:</strong> Will -> Would. Can -> Could. Should -> Should (No change).",
    "summary": [
      "Past Simple and Present Perfect both become Past Perfect.",
      "Will, Can, and May shift to Would, Could, and Might.",
      "Would, Could, Should, and Might do not change."
    ]
  },
  {
    "id": "grammar-reported-speech-no-tense-change",
    "backHref": "reported-speech.html",
    "backLabel": "Back to Reported Speech",
    "title": "When Tenses Do Not Change",
    "skill": "Grammar",
    "category": "Reported Speech",
    "level": "Advanced",
    "description": "Learn when to keep the original tense to preserve meaning.",
    "learningGoals": [
      "Understand when backshifting is optional or incorrect.",
      "Identify general truths and ongoing situations where tenses do not change."
    ],
    "meaning": "You do not always have to backshift. If the information is still a general truth, a scientific fact, or a situation that is still ongoing right now, you can keep the original present tense.",
    "keyIdeas": [
      "If the reporting verb is in the present (e.g., 'He says'), do not backshift.",
      "If the statement is a timeless fact (e.g., 'Water boils at 100 degrees'), do not backshift.",
      "If the situation is still true right now (e.g., 'I live in Paris' and they still do), backshifting is optional."
    ],
    "patterns": [
      {
        "name": "General Truths / Facts",
        "formula": "Reported statement keeps Present Simple",
        "examples": [
          {
            "en": "Direct: The teacher said, \\\"The earth goes around the sun.\\\"",
            "id": "Langsung: Guru berkata, \\\"Bumi mengelilingi matahari.\\\"",
            "explanation": "Scientific fact."
          },
          {
            "en": "Reported: The teacher said that the earth goes around the sun.",
            "id": "Dilaporkan: Guru bilang bahwa bumi mengelilingi matahari.",
            "explanation": "No backshift needed because it is always true."
          }
        ]
      },
      {
        "name": "Still True Situations",
        "formula": "Keep present tense if still relevant",
        "examples": [
          {
            "en": "Direct: \\\"I am hungry!\\\" (said 5 minutes ago)",
            "id": "Langsung: \\\"Saya lapar!\\\"",
            "explanation": "They are probably still hungry."
          },
          {
            "en": "Reported: John said he is hungry.",
            "id": "Dilaporkan: John bilang dia lapar.",
            "explanation": "We keep 'is' because it is still true right now."
          }
        ]
      }
    ],
    "commonMistakes": [
      {
        "wrong": "He says that he was tired.",
        "correct": "He says that he is tired.",
        "explanation": "If the reporting verb is present ('says' instead of 'said'), you NEVER backshift."
      }
    ],
    "introduction": "So far, we have treated backshifting as an absolute rule. But grammar is about meaning, not just math. Sometimes, shifting the tense backward actually creates the wrong meaning.<br><br>If your friend says 'I love chocolate,' and you report it as 'He said he loved chocolate,' someone might ask, 'Oh, does he not love it anymore?' To show that a fact is still true, or is a universal law of nature, we break the backshifting rule and keep the verb in the present tense.",
    "stepByStep": "1. <strong>Look at the reporting verb:</strong> Is it 'says' or 'tells'? If yes, STOP. Do not backshift.<br>2. <strong>Look at the fact:</strong> Is it a scientific law or timeless truth? If yes, do not backshift.<br>3. <strong>Look at the situation:</strong> Is it still happening right now? (e.g., 'I am still at the office'). If yes, you can choose to keep it in the present tense.",
    "indonesianLearnerWarning": "This is actually good news for Indonesian learners! In these specific cases, the English rule matches the Indonesian instinct to just report the meaning without changing the verb tense.",
    "practicePrompts": [
      "Report this fact: The scientist said, \\\"Water freezes at 0 degrees.\\\"",
      "Report this (it is still true): Budi says, \\\"I am busy.\\\""
    ],
    "classroomUse": "<strong>Teacher Tip:</strong> Contrast two situations. Situation 1: A friend said 'I am sick' last month. Situation 2: A friend said 'I am sick' five minutes ago. Have students report both to see how the tense choice changes the meaning.",
    "quickComparison": "<strong>Still True:</strong> 'He said he is sick' (Still sick now). <strong>Past Fact:</strong> 'He said he was sick' (Sick in the past).",
    "summary": [
      "Do not backshift if the reporting verb is present ('says').",
      "Do not backshift general truths or scientific facts.",
      "You can keep present tense if the situation is still true right now."
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
  console.log('Script RS 2 complete.');
} else {
  console.log('Could not find end bracket.');
}
