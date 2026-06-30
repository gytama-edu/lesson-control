import fs from 'fs';
import { lessons } from '../data/lessons.js';

const updated = [
  {
    "id": "grammar-frequency-adverb-position",
    "backHref": "word-order.html",
    "backLabel": "Back to Word Order",
    "title": "Frequency Adverb Position",
    "skill": "Grammar",
    "category": "Word Order",
    "level": "Intermediate",
    "description": "Learn where to place words like always, usually, and sometimes.",
    "introduction": "You know how to say 'I drink coffee.' But what if you want to say HOW OFTEN you drink it? You use Adverbs of Frequency (always, usually, often, sometimes, rarely, never). These words don't follow the M-P-T rule at the end of the sentence. Instead, they jump right into the middle of the sentence! Let's learn exactly where they belong.",
    "learningGoals": [
      "Identify common adverbs of frequency.",
      "Place frequency adverbs BEFORE normal verbs.",
      "Understand the exception for placing them AFTER the 'be' verb."
    ],
    "meaning": "Adverbs of frequency tell us how often an action happens, ranging from 100% (always) to 0% (never).",
    "uses": [
      "Describing routines, habits, and schedules."
    ],
    "patterns": [
      {
        "name": "The Normal Verb Rule",
        "formula": "Subject + Frequency Adverb + Normal Verb",
        "explanation": "Example: I ALWAYS drink coffee. He NEVER eats meat."
      },
      {
        "name": "The Be Verb Exception",
        "formula": "Subject + Be Verb + Frequency Adverb",
        "explanation": "Example: I am ALWAYS tired. She is NEVER late."
      }
    ],
    "stepByStep": "How to place a frequency adverb:<br><br>1. <strong>Look at your verb. Is it the 'Be' verb (am/is/are)?</strong><br>2. <strong>If YES:</strong> Put the adverb AFTER it. -> 'He is <em>often</em> busy.'<br>3. <strong>If NO:</strong> Put the adverb BEFORE the normal verb. -> 'He <em>often</em> works late.'<br>4. <strong>Result:</strong> Two different positions depending purely on the verb type.",
    "examples": [
      { "type": "Normal Verb", "sentence": "They usually take the bus to work.", "note": "Before 'take'." },
      { "type": "Normal Verb", "sentence": "We rarely watch television.", "note": "Before 'watch'." },
      { "type": "Be Verb", "sentence": "The weather is always unpredictable.", "note": "After 'is'." },
      { "type": "Be Verb", "sentence": "I am sometimes confused by English grammar.", "note": "After 'am'." }
    ],
    "commonMistakes": [
      {
        "wrong": "I play always tennis.",
        "correct": "I always play tennis.",
        "explanation": "With normal verbs, the adverb MUST go before the verb, not after it.",
        "fix": "Move 'always' before 'play'."
      },
      {
        "wrong": "Always she is late.",
        "correct": "She is always late.",
        "explanation": "While 'sometimes' and 'usually' can occasionally go at the beginning of a sentence, 'always' and 'never' almost never do.",
        "fix": "Put the adverb after the Be verb."
      }
    ],
    "quickComparison": "<strong>Always vs Everyday:</strong> 'Always' is an adverb of frequency and goes in the middle (I always study). 'Every day' is a time phrase and goes at the end (I study every day).",
    "indonesianLearnerWarning": "In Indonesian, 'selalu' or 'kadang-kadang' are quite flexible and often go at the front or middle. In English, you must strictly memorize the Be Verb vs Normal Verb rule.",
    "practicePrompts": [
      "Place the word 'never': 'I eat seafood.'",
      "Place the word 'usually': 'She is happy.'",
      "Correct the mistake: 'He watches often movies.'",
      "Write a sentence about something you 'always' do on Sundays."
    ],
    "classroomUse": "<strong>The Routine Interview:</strong> Students interview a partner using a questionnaire (How often do you...). The partner must answer in full sentences using the correct frequency adverb position ('I rarely eat breakfast.').",
    "summary": [
      "Frequency adverbs (always, never, often) go in the MIDDLE of the sentence.",
      "If the verb is a normal action verb (play, eat), put the adverb BEFORE it.",
      "If the verb is the 'be' verb (is, am, are), put the adverb AFTER it.",
      "Time phrases like 'every day' or 'once a week' go at the end of the sentence."
    ]
  },
  {
    "id": "grammar-manner-place-time-adverbs",
    "backHref": "word-order.html",
    "backLabel": "Back to Word Order",
    "title": "Adverbs of Manner, Place, Time",
    "skill": "Grammar",
    "category": "Word Order",
    "level": "Intermediate",
    "description": "Understand the positions for describing how, where, and when actions happen.",
    "introduction": "We learned the M-P-T rule for adding extra information to the end of a sentence. Now, let's look specifically at single-word adverbs (like 'slowly', 'here', 'now'). While prepositional phrases ('in the park') are stuck at the end of the sentence, single-word adverbs sometimes have a bit more freedom to move around. Let's learn when they are fixed and when they can fly.",
    "learningGoals": [
      "Review the standard end-position for Manner, Place, and Time adverbs.",
      "Learn when Manner adverbs can move to the middle of the sentence.",
      "Learn when Time adverbs can move to the front of the sentence."
    ],
    "meaning": "Single-word adverbs function just like longer phrases, but their shorter length gives them slightly more syntactic flexibility in English.",
    "uses": [
      "Adding descriptive detail to actions (How, Where, When)."
    ],
    "patterns": [
      {
        "name": "The Standard End Position",
        "formula": "S + V + O + Adverb",
        "explanation": "Example: I drove the car slowly."
      },
      {
        "name": "The Mid-Position (Manner)",
        "formula": "S + Adverb + V + O",
        "explanation": "Example: I slowly drove the car. (Allowed for emphasis)."
      },
      {
        "name": "The Front-Position (Time)",
        "formula": "Adverb + S + V + O",
        "explanation": "Example: Yesterday, I drove the car. (Allowed for emphasis)."
      }
    ],
    "stepByStep": "How to move adverbs for emphasis:<br><br>1. <strong>Start with the standard sentence:</strong> 'She read the letter carefully.'<br>2. <strong>Do you want to emphasize the ACTION of reading?</strong> Move 'carefully' to the mid-position.<br>3. <strong>Result:</strong> 'She <em>carefully</em> read the letter.'<br>4. <strong>Rule of thumb:</strong> Place adverbs ('here', 'outside') almost NEVER move. Time adverbs ('now', 'yesterday') easily move to the front.",
    "examples": [
      { "type": "End Position (Standard)", "sentence": "He opened the door quietly.", "note": "Most common, neutral phrasing." },
      { "type": "Mid Position (Manner)", "sentence": "He quietly opened the door.", "note": "Emphasizes the stealthy action." },
      { "type": "Front Position (Time)", "sentence": "Recently, I have been very busy.", "note": "Sets the time frame for the whole sentence immediately." },
      { "type": "Place Adverb (Fixed)", "sentence": "The children are playing outside.", "note": "Cannot easily say 'Outside the children are playing'." }
    ],
    "commonMistakes": [
      {
        "wrong": "She opened carefully the door.",
        "correct": "She carefully opened the door. OR She opened the door carefully.",
        "explanation": "The Golden Rule strikes again! You cannot put the adverb between the verb and the object.",
        "fix": "Move it before the verb, or after the object."
      },
      {
        "wrong": "Here he lives.",
        "correct": "He lives here.",
        "explanation": "Single-word Place adverbs (here, there, everywhere, somewhere, nowhere) rarely move to the front of the sentence unless for poetic/dramatic effect.",
        "fix": "Keep Place adverbs at the end."
      }
    ],
    "quickComparison": "<strong>Prepositional Phrase vs Adverb:</strong> 'In a quiet way' (Phrase) vs 'Quietly' (Adverb). Both express manner, but 'quietly' is much more likely to move to the mid-position.",
    "indonesianLearnerWarning": "In Indonesian, moving adverbs for emphasis is very common and flexible. English is much more rigid. When in doubt, stick to the end of the sentence (M-P-T).",
    "practicePrompts": [
      "Move the manner adverb to the mid-position: 'He answered the question angrily.'",
      "Move the time adverb to the front-position: 'We are leaving now.'",
      "Correct the mistake: 'I read quickly the book.'",
      "Write a sentence using the adverb 'suddenly' at the beginning."
    ],
    "classroomUse": "<strong>The Moving Target:</strong> Write a sentence on the board: 'I ate the sandwich.' Hand a student a card that says 'quickly'. Ask them to place it on the board. (They have two correct options). Hand another student a card that says 'outside'. (Only one correct option).",
    "summary": [
      "M-P-T adverbs usually go at the end of the sentence.",
      "Manner adverbs (quickly, carefully) can often move to the mid-position (before the verb).",
      "Time adverbs (now, recently) can often move to the front of the sentence.",
      "Place adverbs (here, outside) almost always stay at the end.",
      "Never put an adverb between the Verb and the Object."
    ]
  },
  {
    "id": "grammar-adverbs-with-be-and-auxiliaries",
    "backHref": "word-order.html",
    "backLabel": "Back to Word Order",
    "title": "Adverbs with Be and Auxiliaries",
    "skill": "Grammar",
    "category": "Word Order",
    "level": "Advanced",
    "description": "Master the placement of adverbs when using helper verbs and be verbs.",
    "introduction": "We know that adverbs of frequency go BEFORE normal verbs, but AFTER the 'Be' verb. But what happens when you have a complex verb phrase with helping verbs (auxiliaries)? What if the sentence is 'I have been working'? Where does the adverb go? This is where word order can get very tricky. Let's learn the 'Sandwich Rule' for complex verbs.",
    "learningGoals": [
      "Identify auxiliary verbs (have, has, had, will, can, could, must).",
      "Learn to place adverbs BETWEEN the auxiliary and the main verb (The Sandwich Rule).",
      "Learn what to do when there are two auxiliary verbs."
    ],
    "meaning": "Adverbs modify the main action. When a verb phrase is split into helpers and main actions, the adverb tries to get as close to the main action as possible, usually nesting right in the middle.",
    "uses": [
      "Placing adverbs (always, probably, definitely, certainly) accurately in complex tenses."
    ],
    "patterns": [
      {
        "name": "The Sandwich Rule",
        "formula": "Auxiliary Verb + Adverb + Main Verb",
        "explanation": "Example: I have (Aux) always (Adverb) loved (Main) you."
      },
      {
        "name": "The Double Auxiliary Rule",
        "formula": "First Aux + Adverb + Second Aux + Main Verb",
        "explanation": "Example: I will (Aux1) probably (Adverb) be (Aux2) working (Main)."
      }
    ],
    "stepByStep": "How to make an adverb sandwich:<br><br>1. <strong>Identify your full verb phrase:</strong> 'He will finish the project.'<br>2. <strong>Identify the auxiliary (helper):</strong> 'will'.<br>3. <strong>Identify the main verb:</strong> 'finish'.<br>4. <strong>Insert the adverb:</strong> Put 'definitely' right between them.<br>5. <strong>Result:</strong> 'He <em>will definitely finish</em> the project.'",
    "examples": [
      { "type": "Present Perfect", "sentence": "She has rarely visited us.", "note": "Between 'has' and 'visited'." },
      { "type": "Future", "sentence": "They will certainly agree with you.", "note": "Between 'will' and 'agree'." },
      { "type": "Modal", "sentence": "You should always wear a helmet.", "note": "Between 'should' and 'wear'." },
      { "type": "Double Auxiliary", "sentence": "The building has slowly been sinking.", "note": "Between 'has' and 'been'." }
    ],
    "commonMistakes": [
      {
        "wrong": "I always have loved you.",
        "correct": "I have always loved you.",
        "explanation": "Do not place the adverb before the first auxiliary verb. It belongs inside the sandwich.",
        "fix": "Auxiliary + Adverb + Main Verb."
      },
      {
        "wrong": "He will definitely to come.",
        "correct": "He will definitely come.",
        "explanation": "Remember modal rules! Do not let the adverb confuse you into adding 'to'.",
        "fix": "No 'to' after modals, even with an adverb."
      }
    ],
    "quickComparison": "<strong>Probably vs Maybe:</strong> 'Maybe' goes at the front (Maybe I will go). 'Probably' goes in the sandwich (I will probably go).",
    "indonesianLearnerWarning": "In Indonesian, 'Saya selalu sudah tahu' (I always have known) puts the adverb before the helper. In English, it must go in the middle: 'I have always known'.",
    "practicePrompts": [
      "Place 'never': 'I have seen that movie.'",
      "Place 'probably': 'It will rain tomorrow.'",
      "Place 'certainly': 'She is working right now.'",
      "Correct the mistake: 'He always is complaining.'"
    ],
    "classroomUse": "<strong>The Sandwich Drill:</strong> Write 'Subject + Aux + Adverb + Verb' on the board. Give students a subject ('The cat'), an aux ('has'), an adverb ('secretly'), and a verb ('eaten'). Have them assemble the sandwich.",
    "summary": [
      "When using helping verbs (have/will/can), put the adverb BETWEEN the helper and the main verb.",
      "We call this the 'Sandwich Rule'.",
      "If there are two helpers (will be), the adverb goes after the FIRST helper.",
      "This applies to frequency adverbs (always) and certainty adverbs (probably, definitely)."
    ]
  },
  {
    "id": "grammar-already-just-still-yet-ever",
    "backHref": "word-order.html",
    "backLabel": "Back to Word Order",
    "title": "Already, Just, Still, Yet, Ever",
    "skill": "Grammar",
    "category": "Word Order",
    "level": "Advanced",
    "description": "Learn the specific positions for these common time adverbs.",
    "introduction": "Five small words cause massive headaches for English learners: Already, Just, Still, Yet, and Ever. They are all related to time, and they are usually used with the Present Perfect tense. However, they refuse to follow the same word order rules! Some go in the middle, some go at the end, and some go before the auxiliary. Let's map out exactly where these five troublemakers belong.",
    "learningGoals": [
      "Place 'already', 'just', and 'ever' in the mid-position (the sandwich).",
      "Place 'yet' at the very end of the sentence.",
      "Place 'still' BEFORE the auxiliary verb (an exception to the rule!)."
    ],
    "meaning": "These adverbs relate actions to the present moment. 'Already' = sooner than expected. 'Just' = a very short time ago. 'Still' = continuing longer than expected. 'Yet' = up until now. 'Ever' = at any time in your life.",
    "uses": [
      "Adding precise timing context to Perfect tenses and continuous actions."
    ],
    "patterns": [
      {
        "name": "The Sandwich Trio (Already, Just, Ever)",
        "formula": "Auxiliary + (Already/Just/Ever) + Main Verb",
        "explanation": "Example: I have already finished. I have just arrived. Have you ever gone?"
      },
      {
        "name": "The Tail End (Yet)",
        "formula": "Sentence + Yet",
        "explanation": "Example: I haven't finished yet. (Used in negatives and questions)."
      },
      {
        "name": "The Rebel (Still)",
        "formula": "Subject + Still + Auxiliary + Verb",
        "explanation": "Example: I still haven't finished. (Notice it comes BEFORE 'haven't')."
      }
    ],
    "stepByStep": "How to map these five words:<br><br>1. <strong>Already / Just:</strong> Put them in the middle. -> 'I have <em>already</em> eaten.'<br>2. <strong>Ever:</strong> Put it in the middle of a question. -> 'Have you <em>ever</em> eaten sushi?'<br>3. <strong>Yet:</strong> Put it at the very end. -> 'I haven't eaten <em>yet</em>.'<br>4. <strong>Still:</strong> Put it BEFORE the negative auxiliary. -> 'I <em>still</em> haven't eaten.'",
    "examples": [
      { "type": "Already", "sentence": "She has already left the office.", "note": "Sooner than expected." },
      { "type": "Just", "sentence": "They have just announced the winner.", "note": "A moment ago." },
      { "type": "Ever", "sentence": "Has he ever flown in a helicopter?", "note": "At any time." },
      { "type": "Yet", "sentence": "Are we there yet?", "note": "Waiting for an outcome." },
      { "type": "Still", "sentence": "I still don't understand.", "note": "Continuing confusion." }
    ],
    "commonMistakes": [
      {
        "wrong": "I have yet finished the report.",
        "correct": "I haven't finished the report yet.",
        "explanation": "'Yet' goes at the end of the sentence, and is almost always used with a negative verb or in a question.",
        "fix": "Move 'yet' to the end."
      },
      {
        "wrong": "I haven't still decided.",
        "correct": "I still haven't decided.",
        "explanation": "'Still' is the rebel. It goes BEFORE the negative auxiliary verb, not after it.",
        "fix": "Subject + Still + Negative Verb."
      }
    ],
    "quickComparison": "<strong>Still vs Yet (Negatives):</strong> 'I still haven't eaten' (Emphasizes that I am waiting and getting impatient). 'I haven't eaten yet' (A simple fact, stating that it will happen later).",
    "indonesianLearnerWarning": "In Indonesian, 'belum' covers both 'not yet' and 'still not'. You must split them conceptually in English. And 'sudah' (already) often goes at the front or end in Indonesian, but must be sandwiched in English (have already done).",
    "practicePrompts": [
      "Place 'already': 'We have seen that movie.'",
      "Place 'yet': 'She hasn't called me.'",
      "Place 'still': 'He hasn't arrived.'",
      "Place 'just': 'I have finished my homework.'"
    ],
    "classroomUse": "<strong>The Placement Race:</strong> Write five sentences on the board missing these adverbs. Have five students race to the board with cards (Already, Just, Still, Yet, Ever) and stick them in the exact right grammatical spot.",
    "summary": [
      "'Already', 'Just', and 'Ever' follow the Sandwich Rule (between the helper and main verb).",
      "'Yet' goes at the absolute end of the sentence (used in negatives/questions).",
      "'Still' breaks the rules and goes BEFORE a negative auxiliary verb (I still haven't).",
      "These five words are essential for mastering the Present Perfect tense."
    ]
  }
];

updated.forEach(upd => {
  let idx = lessons.findIndex(l => l.id === upd.id);
  if(idx !== -1) {
    lessons[idx] = { ...lessons[idx], ...upd };
  }
});

const dataPrefix = "export const lessons = ";
fs.writeFileSync('data/lessons.js', dataPrefix + JSON.stringify(lessons, null, 2) + ';\n');
console.log('Updated 4 word order adverb lessons using ESM');
