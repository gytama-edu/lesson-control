import fs from 'fs';
import { lessons } from '../data/lessons.js';

const updated = [
  {
    "id": "grammar-yes-no-question-word-order",
    "backHref": "word-order.html",
    "backLabel": "Back to Word Order",
    "title": "Yes/No Question Word Order",
    "skill": "Grammar",
    "category": "Word Order",
    "level": "Beginner",
    "description": "Learn the auxiliary movement required for simple yes/no questions.",
    "introduction": "In many languages, you can turn a statement into a question just by raising your voice at the end: 'You are coming?' In English, while people do this casually, grammatically correct questions require you to actually move words around. If you don't physically change the word order, it's not a true English question. Let's learn how to flip the sentence.",
    "learningGoals": [
      "Learn to swap the Subject and the Auxiliary verb to make a question.",
      "Learn to use 'Do/Does/Did' when there is no auxiliary verb.",
      "Understand that the main verb stays frozen in a question."
    ],
    "meaning": "By moving an auxiliary verb to the very front of the sentence, you signal to the listener immediately that you are asking a question that requires a 'Yes' or 'No' answer.",
    "uses": [
      "Asking for confirmation, permission, or basic facts."
    ],
    "patterns": [
      {
        "name": "The Flip (Be & Auxiliaries)",
        "formula": "Aux/Be + Subject + Main Verb + Object?",
        "explanation": "Example: Statement: He is playing. -> Question: Is he playing? (Swap the first two words)."
      },
      {
        "name": "The 'Do' Insertion (Normal Verbs)",
        "formula": "Do/Does/Did + Subject + Base Verb + Object?",
        "explanation": "Example: Statement: You like pizza. -> Question: Do you like pizza? (Insert 'Do' at the front)."
      }
    ],
    "stepByStep": "How to ask a Yes/No question:<br><br>1. <strong>Look at your statement:</strong> 'She can swim.'<br>2. <strong>Is there a helper verb (is, are, can, will, have)?</strong> Yes ('can').<br>3. <strong>Flip it:</strong> Swap 'She' and 'Can'. -> '<em>Can she</em> swim?'<br>4. <strong>What if there is NO helper?</strong> 'He likes cats.'<br>5. <strong>Insert DO/DOES/DID:</strong> Put 'Does' at the front, and strip the 's' from the main verb. -> '<em>Does he</em> like cats?'",
    "examples": [
      { "type": "The Flip (Be)", "sentence": "Are you hungry?", "note": "Statement: You are hungry." },
      { "type": "The Flip (Modal)", "sentence": "Will they win?", "note": "Statement: They will win." },
      { "type": "Do Insertion (Present)", "sentence": "Do you live here?", "note": "Statement: You live here." },
      { "type": "Do Insertion (Past)", "sentence": "Did she call?", "note": "Statement: She called. (Notice 'call' loses its -ed)." }
    ],
    "commonMistakes": [
      {
        "wrong": "You like coffee?",
        "correct": "Do you like coffee?",
        "explanation": "Relying purely on voice intonation is grammatically incorrect. You must use the auxiliary word order.",
        "fix": "Always start a yes/no question with an auxiliary verb."
      },
      {
        "wrong": "Does he likes coffee?",
        "correct": "Does he like coffee?",
        "explanation": "Once you add 'Does' or 'Did' to the front, it absorbs all the tense/plural grammar. The main verb must be stripped naked (base form).",
        "fix": "Never put an 's' or 'ed' on the main verb in a question."
      }
    ],
    "quickComparison": "<strong>Do you have vs Have you got:</strong> In American English, we say 'Do you have a car?' (treating 'have' as a normal verb). In British English, they often say 'Have you got a car?' (treating 'have' as an auxiliary and flipping it). Both are correct.",
    "indonesianLearnerWarning": "In Indonesian, you just add 'Apakah' to the front of the statement. English is trickier. Sometimes you add 'Do/Does/Did' (like Apakah), but sometimes you have to physically flip the words (Is he...). Practice both patterns.",
    "practicePrompts": [
      "Turn this into a question: 'They are sleeping.'",
      "Turn this into a question: 'We need more time.'",
      "Correct the mistake: 'Did you went to the store?'",
      "Write a Yes/No question asking someone if they speak Spanish."
    ],
    "classroomUse": "<strong>The Flip Drill:</strong> The teacher states a fact ('John is tall', 'Mary plays tennis'). The student must instantly turn it into a Yes/No question ('Is John tall?', 'Does Mary play tennis?').",
    "summary": [
      "English questions require a change in word order, not just a change in voice tone.",
      "If the sentence has a helper verb (is, are, can, will), swap it with the subject.",
      "If the sentence has a normal verb (play, eat), insert Do/Does/Did at the front.",
      "Always use the base verb after Do/Does/Did."
    ]
  },
  {
    "id": "grammar-wh-question-word-order",
    "backHref": "word-order.html",
    "backLabel": "Back to Word Order",
    "title": "WH-Question Word Order",
    "skill": "Grammar",
    "category": "Word Order",
    "level": "Beginner",
    "description": "Master the structure of open questions using what, where, when, why, who, and how.",
    "introduction": "Yes/No questions are easy, but what if you need actual information? You need to ask open questions using WH-words (What, Where, When, Why, Who, How). The good news is that if you know how to make a Yes/No question, you already know how to make a WH-question. You just add one extra step at the very beginning. Let's learn the QUASM formula.",
    "learningGoals": [
      "Memorize the QUASM formula (Question word, Auxiliary, Subject, Main verb).",
      "Learn to place WH-words at the absolute front of the sentence.",
      "Understand that the Yes/No question order remains intact behind the WH-word."
    ],
    "meaning": "WH-questions demand specific information, not just a yes or no. The word order clearly signals exactly what piece of information the speaker is missing.",
    "uses": [
      "Gathering information (time, place, reason, method, identity)."
    ],
    "patterns": [
      {
        "name": "The QUASM Formula",
        "formula": "QUestion word + Aux + Subject + Main verb",
        "explanation": "Example: Where (QU) do (Aux) you (S) live (M)?"
      }
    ],
    "stepByStep": "How to build a WH-question:<br><br>1. <strong>Start with a Yes/No question:</strong> 'Are you going?'<br>2. <strong>Identify what information you want:</strong> The location (Where).<br>3. <strong>Stick the WH-word on the front:</strong> '<em>Where</em> are you going?'<br>4. <strong>Another example:</strong> 'Did he buy it?' -> Want to know the reason? -> '<em>Why</em> did he buy it?'<br>5. <strong>Result:</strong> QUASM structure.",
    "examples": [
      { "type": "What (Thing)", "sentence": "What do you want?", "note": "QU + Aux + S + M" },
      { "type": "Where (Place)", "sentence": "Where is she working?", "note": "QU + Aux + S + M" },
      { "type": "When (Time)", "sentence": "When will they arrive?", "note": "QU + Aux + S + M" },
      { "type": "Why (Reason)", "sentence": "Why did you say that?", "note": "QU + Aux + S + M" },
      { "type": "How (Method)", "sentence": "How can I help?", "note": "QU + Aux + S + M" }
    ],
    "commonMistakes": [
      {
        "wrong": "Where you live?",
        "correct": "Where do you live?",
        "explanation": "You cannot just put a WH-word in front of a statement. You MUST still use the auxiliary verb (do/does/did/is/are) after the WH-word.",
        "fix": "Remember QU-A-S-M. You forgot the A."
      },
      {
        "wrong": "Why he is crying?",
        "correct": "Why is he crying?",
        "explanation": "Failure to flip the Subject and Auxiliary. It must be Aux + Subject.",
        "fix": "Always put the Auxiliary before the Subject in a question."
      }
    ],
    "quickComparison": "<strong>Who vs Whom:</strong> 'Who do you love?' is standard modern English. 'Whom do you love?' is technically strictly correct (because 'whom' is the object), but it sounds very formal and old-fashioned today. Stick with 'Who'.",
    "indonesianLearnerWarning": "In Indonesian, the question word often stays at the end of the sentence! ('Kamu pergi ke mana?' = You go where?). In English, the WH-word MUST be dragged to the very front of the sentence. ('Where are you going?').",
    "practicePrompts": [
      "Turn this into a Where question: 'Are you eating?' -> '___ ___ you eating?'",
      "Turn this into a Why question: 'Did he leave?' -> '___ ___ he leave?'",
      "Correct the mistake: 'What time the movie starts?'",
      "Write a question asking a friend how they make their coffee."
    ],
    "classroomUse": "<strong>The QUASM Builder:</strong> Write QU - A - S - M on the board in four columns. Give students a statement ('John bought a car yesterday'). Have them build a 'What' question, a 'Who' question, and a 'When' question by filling in the columns.",
    "summary": [
      "WH-questions use the QUASM formula (Question word, Auxiliary, Subject, Main verb).",
      "They are built by taking a Yes/No question and sticking a WH-word on the front.",
      "You cannot just put a WH-word in front of a regular statement (Where you live is wrong).",
      "The WH-word must always be the very first word in the sentence."
    ]
  },
  {
    "id": "grammar-subject-object-question-word-order",
    "backHref": "word-order.html",
    "backLabel": "Back to Word Order",
    "title": "Subject and Object Questions",
    "skill": "Grammar",
    "category": "Word Order",
    "level": "Advanced",
    "description": "Understand the difference when asking about the doer versus the receiver of an action.",
    "introduction": "We just learned the QUASM formula. 'Who did you call?' This asks about the receiver of the action (the Object). But what happens if you don't know who did the action in the first place? 'Who called you?' Notice there is no 'did' in that sentence! When you ask about the Subject (the actor), all the normal question rules disappear. Let's learn this advanced, rule-breaking question structure.",
    "learningGoals": [
      "Distinguish between asking about the Object (receiver) and the Subject (actor).",
      "Learn to drop the auxiliary (do/does/did) when asking a Subject question.",
      "Learn to use normal statement word order for Subject questions."
    ],
    "meaning": "Subject questions ask 'Who did this?' Object questions ask 'Who did you do this to?'",
    "uses": [
      "Investigating who caused an action vs investigating what the result of an action was."
    ],
    "patterns": [
      {
        "name": "The Object Question (Normal)",
        "formula": "Who/What + Aux + Subject + Main Verb",
        "explanation": "Example: Who did (Aux) you (S) see? (You saw someone. I want to know who)."
      },
      {
        "name": "The Subject Question (Rebel)",
        "formula": "Who/What + Main Verb + Object",
        "explanation": "Example: Who saw (V) you (O)? (Someone saw you. I want to know who. Notice there is NO auxiliary 'did')."
      }
    ],
    "stepByStep": "How to ask a Subject Question:<br><br>1. <strong>Identify the unknown:</strong> Someone broke the window.<br>2. <strong>Is the unknown the Actor (Subject)?</strong> Yes.<br>3. <strong>Replace the Subject with 'Who' or 'What'.</strong><br>4. <strong>DO NOT CHANGE ANYTHING ELSE.</strong> Do not add 'did'. Do not flip anything.<br>5. <strong>Result:</strong> '<em>Who</em> broke the window?' (Instead of 'John broke the window').",
    "examples": [
      { "type": "Object (Normal)", "sentence": "What did Shakespeare write?", "note": "Asking about the books." },
      { "type": "Subject (Rebel)", "sentence": "Who wrote Hamlet?", "note": "Asking about the author. No 'did'." },
      { "type": "Object (Normal)", "sentence": "Who did you invite?", "note": "You are the actor. Who is the receiver?" },
      { "type": "Subject (Rebel)", "sentence": "Who invited you?", "note": "Someone is the actor. You are the receiver." }
    ],
    "commonMistakes": [
      {
        "wrong": "Who did break the window?",
        "correct": "Who broke the window?",
        "explanation": "This is a massive error. Never use 'do/does/did' when asking about the Subject.",
        "fix": "Remove 'did' and use the normal past tense verb (broke)."
      },
      {
        "wrong": "What does happen next?",
        "correct": "What happens next?",
        "explanation": "Again, 'What' is the subject of the sentence. Do not use 'does'.",
        "fix": "Remove 'does' and use the normal present tense verb (happens)."
      }
    ],
    "quickComparison": "<strong>Who do you love vs Who loves you:</strong> 'Who do you love?' (You are the Subject. You are doing the loving). 'Who loves you?' (Someone else is the Subject. They are doing the loving).",
    "indonesianLearnerWarning": "Indonesian uses 'Siapa yang...' for Subject questions. This is actually very similar to English! 'Siapa yang memecahkan jendela?' translates directly word-for-word to 'Who broke the window?'. The trick is remembering NOT to add 'did'.",
    "practicePrompts": [
      "Make a subject question: '___ happened yesterday?'",
      "Make an object question: 'What ___ you do yesterday?'",
      "Correct the mistake: 'Who did tell you that secret?'",
      "Write a subject question asking who ate your pizza."
    ],
    "classroomUse": "<strong>The Phone Call:</strong> Draw two stick figures on the board. A (calling) and B (answering). Ask the class: 'If we want to know who A called, what do we ask?' (Who did A call?). 'If we want to know who called B, what do we ask?' (Who called B?).",
    "summary": [
      "Object questions ask about the receiver and follow normal rules (Who did you call?).",
      "Subject questions ask about the actor and BREAK the normal rules.",
      "In a Subject question, NEVER use do/does/did.",
      "In a Subject question, use the normal statement word order (Who broke it?)."
    ]
  },
  {
    "id": "grammar-indirect-question-word-order",
    "backHref": "word-order.html",
    "backLabel": "Back to Word Order",
    "title": "Indirect Question Word Order",
    "skill": "Grammar",
    "category": "Word Order",
    "level": "Advanced",
    "description": "Learn how polite, embedded questions use statement word order instead of question order.",
    "introduction": "You walk up to a stranger and ask, 'Where is the station?' This is direct, but it can sound a bit rude or abrupt. To be polite, we often use introductory phrases like 'Could you tell me...' or 'Do you know...'. But when you do this, a strange grammatical rule kicks in: the question part stops being a question! Let's learn the weird and wonderful rule of Indirect Questions.",
    "learningGoals": [
      "Recognize introductory phrases (Do you know, Can you tell me).",
      "Learn to reverse the word order BACK to a normal statement inside the indirect question.",
      "Learn to completely remove do/does/did from indirect questions."
    ],
    "meaning": "Indirect questions soften your inquiry. Because the introductory phrase ('Do you know') is already doing the grammatical job of asking the question, the rest of the sentence doesn't have to.",
    "uses": [
      "Being polite to strangers, writing professional emails, showing respect."
    ],
    "patterns": [
      {
        "name": "The Direct Question",
        "formula": "WH-word + Aux + Subject + Verb",
        "explanation": "Example: Where is he? What time does it start?"
      },
      {
        "name": "The Indirect Question",
        "formula": "Intro Phrase + WH-word + Subject + Verb",
        "explanation": "Example: Do you know where he is? (Notice 'he is', not 'is he')."
      }
    ],
    "stepByStep": "How to make a polite indirect question:<br><br>1. <strong>Start with your direct question:</strong> 'Where is the bank?'<br>2. <strong>Add your polite intro:</strong> 'Could you tell me...'<br>3. <strong>UN-FLIP the question:</strong> Change 'is the bank' back to statement order 'the bank is'.<br>4. <strong>Result:</strong> 'Could you tell me where <em>the bank is</em>?'<br>5. <strong>Rule for do/does/did:</strong> If the direct question has do/does/did, completely delete it. 'What time does it start?' -> 'Do you know what time <em>it starts</em>?'",
    "examples": [
      { "type": "Direct (Be)", "sentence": "Who is that man?", "note": "Question word order." },
      { "type": "Indirect (Be)", "sentence": "Do you know who that man is?", "note": "Statement word order." },
      { "type": "Direct (Aux)", "sentence": "Where did she go?", "note": "Uses 'did'." },
      { "type": "Indirect (Aux)", "sentence": "Can you tell me where she went?", "note": "'Did' is deleted, verb goes to past tense." }
    ],
    "commonMistakes": [
      {
        "wrong": "Do you know where is the station?",
        "correct": "Do you know where the station is?",
        "explanation": "This is the most common error in advanced English. You cannot have a double question. The 'Do you know' is the question. The 'where the station is' must be a statement.",
        "fix": "Always un-flip the second part."
      },
      {
        "wrong": "Could you tell me what time does the train leave?",
        "correct": "Could you tell me what time the train leaves?",
        "explanation": "Never use do/does/did inside an indirect question.",
        "fix": "Delete 'does' and add 's' to the main verb."
      }
    ],
    "quickComparison": "<strong>I don't know:</strong> This exact same rule applies to statements like 'I don't know'. You say 'I don't know where he is' (NOT 'I don't know where is he').",
    "indonesianLearnerWarning": "Because Indonesian doesn't flip words to make questions in the first place, this rule might actually be easier for you! Just translate 'Apakah kamu tahu di mana dia?' directly: 'Do you know where he is?'. Don't overthink it and try to add English question grammar to the second half.",
    "practicePrompts": [
      "Make this indirect: 'What is her name?' -> 'Do you know what ___ ___ ___?'",
      "Make this indirect: 'Where did he go?' -> 'Can you tell me where ___ ___?'",
      "Correct the mistake: 'I don't know what time is it.'",
      "Write a polite email sentence asking what time the meeting starts."
    ],
    "classroomUse": "<strong>The Lost Tourist:</strong> Student A acts like a rude tourist, asking direct questions ('Where is the bathroom!'). Student B must act as their polite translator, turning to the teacher and asking ('Excuse me, could you tell us where the bathroom is?').",
    "summary": [
      "Indirect questions are used to be polite.",
      "Because the intro phrase (Do you know) is a question, the rest of the sentence must use statement word order.",
      "UN-FLIP 'is he' to 'he is'.",
      "DELETE do/does/did entirely (What time does it start -> what time it starts).",
      "This same rule applies to 'I don't know...'."
    ]
  },
  {
    "id": "grammar-common-word-order-mistakes",
    "backHref": "word-order.html",
    "backLabel": "Back to Word Order",
    "title": "Common Word Order Mistakes",
    "skill": "Grammar",
    "category": "Word Order",
    "level": "Intermediate",
    "description": "A repair-style lesson summarizing frequent word order errors across all structures.",
    "introduction": "Word order is the backbone of English. If you have a small vocabulary but perfect word order, people will understand you. If you have a huge vocabulary but messy word order, nobody will understand you. We've covered SVO, Adverbs, Adjectives, and Questions. Now, let's do a rapid-fire review of the most dangerous word order mistakes that learners make, and how to permanently fix them.",
    "learningGoals": [
      "Review the Verb-Object separation error.",
      "Review the Adjective position error.",
      "Review the Double Question error.",
      "Review the Subject-Verb inversion error in statements."
    ],
    "meaning": "This is a practical review lesson combining all Word Order pathways into a single editing checklist.",
    "uses": [
      "Self-editing, proofreading, and improving speaking fluency."
    ],
    "patterns": [
      {
        "name": "Error 1: The Broken SVO",
        "formula": "Wrong: I like very much coffee. -> Right: I like coffee very much.",
        "explanation": "Never separate the Verb and the Object."
      },
      {
        "name": "Error 2: The Backwards Adjective",
        "formula": "Wrong: The car black. -> Right: The black car.",
        "explanation": "Adjectives always go before the noun."
      },
      {
        "name": "Error 3: The Double Question",
        "formula": "Wrong: Do you know who is he? -> Right: Do you know who he is?",
        "explanation": "Indirect questions use statement word order."
      }
    ],
    "stepByStep": "How to proofread your sentences:<br><br>1. <strong>Check your V and O:</strong> Are my verbs touching my objects? (Good).<br>2. <strong>Check your Adjectives:</strong> Are they in front of the nouns? (Good).<br>3. <strong>Check your Adverbs:</strong> Are they at the end (M-P-T) or before the main verb (Frequency)? (Good).<br>4. <strong>Check your Questions:</strong> Did I flip the auxiliary? (Good). If it's an indirect question, did I un-flip it? (Good).",
    "examples": [
      { "type": "Fixed SVO", "sentence": "He speaks English fluently.", "note": "Not 'He speaks fluently English'." },
      { "type": "Fixed Adverb", "sentence": "I always drink tea.", "note": "Not 'I drink always tea'." },
      { "type": "Fixed Indirect", "sentence": "I wonder where she went.", "note": "Not 'I wonder where did she go'." },
      { "type": "Fixed Subject", "sentence": "Yesterday, the boy went home.", "note": "Not 'Yesterday went the boy home'." }
    ],
    "commonMistakes": [
      {
        "wrong": "Went he to the store.",
        "correct": "He went to the store.",
        "explanation": "In some languages (like German), if you start a sentence with a Time word, you flip the Subject and Verb. English DOES NOT DO THIS. It is always SVO, no matter what.",
        "fix": "Always keep Subject before Verb in a statement."
      }
    ],
    "quickComparison": "<strong>Basic vs Advanced Word Order:</strong> Basic: 'I bought a red car yesterday.' Advanced (but following the exact same rules!): 'I frequently bought beautiful red cars at the dealership yesterday.'",
    "indonesianLearnerWarning": "Pay special attention to Error 1 (The Broken SVO) and Error 2 (The Backwards Adjective). These are the two areas where Indonesian and English rules clash the hardest.",
    "practicePrompts": [
      "Fix the SVO error: 'I watched last night a movie.'",
      "Fix the Adjective error: 'She has eyes blue.'",
      "Fix the Indirect Question error: 'Can you tell me where is the bank?'",
      "Fix the Adverb error: 'He plays always video games.'"
    ],
    "classroomUse": "<strong>The Grammar Mechanic:</strong> Hand out a 'broken' paragraph containing one of each of these four errors. Have students race to identify and 'repair' all four mistakes in the paragraph.",
    "summary": [
      "Never put an adverb between a Verb and an Object.",
      "Single adjectives always go before the noun.",
      "Frequency adverbs go before the main verb (but after 'be').",
      "Indirect questions use statement word order.",
      "English is a strict SVO language. Master this, and everything else falls into place."
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
console.log('Updated 5 word order question/mistakes lessons using ESM');
