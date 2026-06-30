import fs from 'fs';
import { lessons } from '../data/lessons.js';

const updated = [
  {
    "id": "grammar-modals-overview",
    "backHref": "modals.html",
    "backLabel": "Back to Modals",
    "title": "What Are Modal Verbs?",
    "skill": "Grammar",
    "category": "Modals",
    "level": "Beginner",
    "description": "Learn what modal verbs are and how they add meaning to the main verb.",
    "introduction": "Normally, when you use a verb, you are stating a simple fact: 'I swim.' But what if you want to express your ability to swim? Or ask for permission? Or give someone advice? This is where modal verbs come in. A modal verb is a special type of helping verb that changes the mood or attitude of the main verb. Instead of just stating an action, you are expressing possibility, ability, obligation, or politeness.",
    "learningGoals": [
      "Understand the difference between action and attitude.",
      "Recognize the 9 core modal verbs.",
      "See how modals modify the meaning of a sentence."
    ],
    "meaning": "A modal verb does not describe an action itself. It describes the condition surrounding the action. It tells us IF the action is possible, IF the action is required, or IF the speaker is just guessing. Core modals include: can, could, will, would, shall, should, may, might, and must.",
    "uses": [
      "Ability: I can swim. (I have the physical skill).",
      "Obligation: You must swim. (It is a strict rule).",
      "Advice: You should swim. (It is a good idea).",
      "Possibility: I might swim. (Maybe yes, maybe no)."
    ],
    "patterns": [
      {
        "name": "The Modal Modification",
        "formula": "Subject + Modal + Base Verb",
        "explanation": "Example: I + can + swim. The modal always comes directly before the main verb."
      }
    ],
    "stepByStep": "How modals change meaning:<br><br>1. <strong>Start with a fact:</strong> 'He works.'<br>2. <strong>Add Ability:</strong> 'He <em>can</em> work.' (He has the skill).<br>3. <strong>Add Advice:</strong> 'He <em>should</em> work.' (It's a good idea).<br>4. <strong>Add Obligation:</strong> 'He <em>must</em> work.' (He has no choice).<br>5. <strong>Add Possibility:</strong> 'He <em>might</em> work.' (I am guessing, maybe yes, maybe no).",
    "examples": [
      { "type": "Fact vs Modal", "sentence": "Fact: It rains. Modal: It might rain.", "note": "Moving from certainty to possibility." },
      { "type": "Permission", "sentence": "May I leave early?", "note": "Asking politely." },
      { "type": "Certainty", "sentence": "That must be the postman.", "note": "A strong logical guess." },
      { "type": "Classroom", "sentence": "You must raise your hand to speak.", "note": "A classroom rule." },
      { "type": "Real-Life", "sentence": "Can you pass the salt?", "note": "A casual request at the dinner table." }
    ],
    "commonMistakes": [
      {
        "wrong": "He can to swim.",
        "correct": "He can swim.",
        "explanation": "Modals are followed directly by the base verb. You never use 'to' after a core modal.",
        "fix": "Drop the 'to'."
      },
      {
        "wrong": "She musts go now.",
        "correct": "She must go now.",
        "explanation": "Unlike normal verbs, modal verbs never take an 's' for he/she/it.",
        "fix": "Never add an 's' to a modal."
      }
    ],
    "quickComparison": "<strong>Normal Verbs vs Modals:</strong> Normal verbs change form (play, plays, played). Modals are frozen—they never change form (can, could).",
    "indonesianLearnerWarning": "In Indonesian, words like 'bisa' (can), 'harus' (must), and 'mungkin' (might) act very similarly to English modals. However, be careful not to translate the linker 'untuk' as 'to' after a modal (Saya harus pergi = I must go, NOT I must to go).",
    "practicePrompts": [
      "Change the fact to advice: 'John studies.' -> 'John ___ study.'",
      "Change the fact to ability: 'They speak French.' -> 'They ___ speak French.'",
      "Correct the mistake: 'He can sings very well.'",
      "Write a sentence expressing a rule you must follow at work or school."
    ],
    "classroomUse": "<strong>The Meaning Shift Game:</strong> Write a basic sentence on the board ('The dog eats'). Give students flashcards with different modals. Have them insert the modal and explain how the story changes (e.g., 'The dog should eat' means the dog is sick and needs food).",
    "summary": [
      "Modals are helping verbs that express attitude or condition.",
      "Core modals include: can, could, will, would, shall, should, may, might, must.",
      "They change the meaning of a sentence from a simple fact to possibility, ability, or obligation.",
      "They never take an 's'.",
      "They never take 'to' before the next verb."
    ]
  },
  {
    "id": "grammar-modal-sentence-patterns",
    "backHref": "modals.html",
    "backLabel": "Back to Modals",
    "title": "Modal Verb Sentence Patterns",
    "skill": "Grammar",
    "category": "Modals",
    "level": "Beginner",
    "description": "Learn how to build basic positive, negative, and question sentences with modal verbs.",
    "introduction": "One of the best things about modal verbs is that their grammar rules are incredibly simple and consistent. Once you learn the pattern for one modal, you know the pattern for all of them! You don't have to worry about 'do', 'does', or 'did'. You don't have to worry about adding '-s' or '-ed'. Let's master the strict, mathematical pattern that all core modal verbs follow.",
    "learningGoals": [
      "Master the Subject + Modal + Base Verb formula.",
      "Understand why you never use 'to' after a modal.",
      "Understand why you never add '-s' or '-ed' to a modal."
    ],
    "meaning": "Modals follow a frozen, unbreakable structure. They sit between the subject and the main verb, and they force the main verb to remain completely 'naked' (in its base dictionary form).",
    "uses": [
      "To express ability, permission, advice, obligation, or possibility without worrying about conjugation."
    ],
    "patterns": [
      {
        "name": "The Golden Modal Rule",
        "formula": "Subject + Modal + Base Verb",
        "explanation": "Example: She + can + play. Notice it is NOT 'plays', and it is NOT 'to play'."
      }
    ],
    "stepByStep": "How to build a positive modal sentence:<br><br>1. <strong>Choose your subject:</strong> 'He'.<br>2. <strong>Choose your modal (the attitude):</strong> 'should' (advice).<br>3. <strong>Choose your main verb (the action):</strong> 'apologize'.<br>4. <strong>Strip the verb:</strong> Make sure there is no 'to', no '-s', no '-ing', and no '-ed'.<br>5. <strong>Result:</strong> 'He should apologize.'",
    "examples": [
      { "type": "Ability", "sentence": "They can run fast.", "note": "Not 'They can to run'." },
      { "type": "Obligation", "sentence": "He must finish the report.", "note": "Not 'He must finishes'." },
      { "type": "Possibility", "sentence": "It might rain tomorrow.", "note": "Not 'It might raining'." },
      { "type": "Advice", "sentence": "We should go home.", "note": "Not 'We should to go'." },
      { "type": "Classroom", "sentence": "You must complete the test in 60 minutes.", "note": "Rule." }
    ],
    "commonMistakes": [
      {
        "wrong": "She must to call her mother.",
        "correct": "She must call her mother.",
        "explanation": "This is the #1 mistake with modals. You must NEVER use 'to' between a core modal and the main verb.",
        "fix": "Always drop 'to'."
      },
      {
        "wrong": "He cans speak English.",
        "correct": "He can speak English.",
        "explanation": "Modals never take an 's' for he/she/it.",
        "fix": "Keep the modal frozen in its base form."
      },
      {
        "wrong": "They will playing soccer.",
        "correct": "They will play soccer.",
        "explanation": "The main verb must be the base form. No '-ing'.",
        "fix": "Drop the '-ing'."
      }
    ],
    "quickComparison": "<strong>Need vs Must:</strong> 'Must' is a core modal (I must go). 'Need' is a normal verb, so it requires 'to' (I need TO go).",
    "indonesianLearnerWarning": "In Indonesian, verbs don't conjugate, so the base verb rule feels natural! Just be careful not to artificially insert 'to' because you think English requires it.",
    "practicePrompts": [
      "Find the error: 'She should to see a doctor.'",
      "Find the error: 'My brother cans play the guitar.'",
      "Find the error: 'It might raining later.'",
      "Write three sentences using 'can', 'must', and 'should' with the base verb."
    ],
    "classroomUse": "<strong>The Verb Stripper:</strong> Write sentences with mistakes on the board (e.g., 'He can to swims'). Have students come up with a red marker, cross out the 'to', and cross out the 's', leaving only the pure modal and base verb.",
    "summary": [
      "The formula is: Subject + Modal + Base Verb.",
      "Never use 'to' after a core modal.",
      "Never add '-s', '-ed', or '-ing' to the modal or the main verb.",
      "The modal must sit directly in front of the main verb."
    ]
  },
  {
    "id": "grammar-modal-negatives-questions",
    "backHref": "modals.html",
    "backLabel": "Back to Modals",
    "title": "Modal Verbs in Negatives and Questions",
    "skill": "Grammar",
    "category": "Modals",
    "level": "Beginner",
    "description": "Master how to ask questions and form negative statements using modal verbs.",
    "introduction": "When we make questions or negatives in English, we usually need the helper verbs 'do', 'does', or 'did'. For example, 'I play' becomes 'I don't play', and 'Do I play?'. But modal verbs are powerful. They don't need 'do' to help them! They are strong enough to carry the 'not' themselves, and they are strong enough to jump to the front of the sentence to make a question. Let's learn how to flip them.",
    "learningGoals": [
      "Form negative sentences by adding 'not' directly to the modal.",
      "Form questions by swapping the subject and the modal.",
      "Understand why we NEVER use 'do', 'does', or 'did' with modals."
    ],
    "meaning": "Because modals are already helping verbs, adding another helping verb (like 'do') is grammatically illegal. You simply attach 'not' to the modal to make it negative, or invert the modal and subject to ask a question.",
    "uses": [
      "Negatives: I cannot go. You should not smoke.",
      "Questions: Can I go? Should you smoke?"
    ],
    "patterns": [
      {
        "name": "The Modal Negative",
        "formula": "Subject + Modal + NOT + Base Verb",
        "explanation": "Example: You must not touch that. (Contractions: shouldn't, couldn't, can't, won't)."
      },
      {
        "name": "The Modal Question",
        "formula": "Modal + Subject + Base Verb?",
        "explanation": "Example: Can you help me? Should we leave?"
      }
    ],
    "stepByStep": "How to make a question and a negative:<br><br>1. <strong>Start with the positive:</strong> 'She can swim.'<br>2. <strong>Make it negative:</strong> Put 'not' after the modal. -> 'She <em>cannot</em> swim.' (Or: She can't swim).<br>3. <strong>Make it a question:</strong> Swap the subject and the modal. -> '<em>Can she</em> swim?'<br>4. <strong>Remember:</strong> No 'do', 'does', or 'did'!",
    "examples": [
      { "type": "Negative", "sentence": "You should not eat that.", "note": "Advice not to do something." },
      { "type": "Negative", "sentence": "He can't drive.", "note": "Lack of ability." },
      { "type": "Question", "sentence": "May I use the bathroom?", "note": "Asking for permission." },
      { "type": "Question", "sentence": "Would you like some tea?", "note": "Making an offer." },
      { "type": "Classroom", "sentence": "Must we finish this today?", "note": "Student asking about an obligation." }
    ],
    "commonMistakes": [
      {
        "wrong": "Do you can speak English?",
        "correct": "Can you speak English?",
        "explanation": "Never use 'do' or 'does' to make a question with a modal.",
        "fix": "Swap the modal and the subject."
      },
      {
        "wrong": "He doesn't should go.",
        "correct": "He should not go.",
        "explanation": "Never use 'don't' or 'doesn't' with a modal.",
        "fix": "Attach 'not' directly to the modal."
      },
      {
        "wrong": "Can I to go?",
        "correct": "Can I go?",
        "explanation": "Even in a question, you can never use 'to' before the main verb.",
        "fix": "Drop the 'to'."
      }
    ],
    "quickComparison": "<strong>Cannot vs Can not:</strong> 'Cannot' is almost always written as one word. It is the only modal that does this (we write 'should not', not 'shouldnot').",
    "indonesianLearnerWarning": "In Indonesian, you just add 'Apakah' to the front for a question. In English, you MUST flip the word order. 'Kamu bisa' (You can) must become 'Bisa kamu?' (Can you?).",
    "practicePrompts": [
      "Make this negative: 'We must leave now.'",
      "Make this a question: 'He could fix the car.'",
      "Correct the mistake: 'Does she can drive?'",
      "Write a polite question asking someone for help using 'Could'."
    ],
    "classroomUse": "<strong>The Flip Game:</strong> Toss a ball to a student and state a positive modal sentence ('I can fly'). The student must catch the ball, instantly yell the question version ('Can you fly?'), and toss it back.",
    "summary": [
      "To make a negative, add 'not' directly after the modal (should not).",
      "To make a question, swap the subject and the modal (Can you...?).",
      "NEVER use 'do', 'does', or 'did' with a modal.",
      "'Cannot' is written as one word.",
      "Contractions are very common in spoken English (can't, shouldn't)."
    ]
  },
  {
    "id": "grammar-modals-vs-normal-verbs",
    "backHref": "modals.html",
    "backLabel": "Back to Modals",
    "title": "Modal Verbs vs Normal Verbs",
    "skill": "Grammar",
    "category": "Modals",
    "level": "Beginner",
    "description": "Explore the crucial differences in behavior between modal verbs and regular action verbs.",
    "introduction": "By now, you've noticed that modal verbs are rebels. They refuse to follow the rules of normal English verbs. They hate the letter 's'. They hate the word 'to'. They refuse to work with 'do', 'does', or 'did'. To truly master English, you need a clear mental wall dividing these two types of verbs. Let's compare them side-by-side so you never mix up their rules again.",
    "learningGoals": [
      "Compare the conjugation of normal verbs vs modals.",
      "Compare how they handle the infinitive 'to'.",
      "Compare how they form negatives and questions."
    ],
    "meaning": "Normal verbs (like want, need, try, like, play) describe actions and follow standard tense rules. Modal verbs (can, must, should) describe attitudes and follow a frozen, helper-verb pattern.",
    "uses": [
      "Normal Verbs: Actions, states, routines.",
      "Modal Verbs: Adding conditions (ability, obligation, advice) to normal verbs."
    ],
    "patterns": [
      {
        "name": "The 'S' Test",
        "formula": "Normal: He plays. | Modal: He can play.",
        "explanation": "Normal verbs take an 's' for 3rd person singular. Modals do not."
      },
      {
        "name": "The 'To' Test",
        "formula": "Normal: He wants TO play. | Modal: He must play.",
        "explanation": "When putting two normal verbs together, you usually need 'to'. Modals never use 'to'."
      }
    ],
    "stepByStep": "How to handle Need vs Must (A classic test):<br><br>1. <strong>Need is a normal verb.</strong> It follows normal rules. -> 'He <em>needs to</em> go. He <em>doesn't need to</em> go. <em>Does he need to</em> go?'<br>2. <strong>Must is a modal verb.</strong> It follows rebel rules. -> 'He <em>must</em> go. He <em>must not</em> go. <em>Must he</em> go?'<br>3. <strong>Result:</strong> They mean almost the same thing, but their grammar is entirely different.",
    "examples": [
      { "type": "Normal Verb", "sentence": "She likes to read.", "note": "Takes an 's'. Takes 'to'." },
      { "type": "Modal Verb", "sentence": "She should read.", "note": "No 's'. No 'to'." },
      { "type": "Normal Negative", "sentence": "They don't want to leave.", "note": "Requires 'do' and 'not'." },
      { "type": "Modal Negative", "sentence": "They cannot leave.", "note": "Takes 'not' directly." },
      { "type": "Normal Question", "sentence": "Did you see it?", "note": "Requires 'did' for the past." },
      { "type": "Modal Question", "sentence": "Could you see it?", "note": "Flips the modal for the past." }
    ],
    "commonMistakes": [
      {
        "wrong": "He can to try.",
        "correct": "He can try.",
        "explanation": "Mixing normal rules with modal rules.",
        "fix": "Modals never take 'to'."
      },
      {
        "wrong": "Do you must work today?",
        "correct": "Must you work today? (Or: Do you have to work today?)",
        "explanation": "Mixing 'do' with a modal.",
        "fix": "Never use 'do' with a modal. (However, substituting 'have to' is much more natural in modern English)."
      }
    ],
    "quickComparison": "<strong>Will vs Want:</strong> 'Will' is a modal (I will go). 'Want' is a normal verb (I want to go).",
    "indonesianLearnerWarning": "Because Indonesian has no 'to' particle between verbs and no 'do/does' helpers, the distinction between these two categories in English requires active memorization and practice.",
    "practicePrompts": [
      "Translate to the correct pattern: 'He (want) to play, but he (cannot) play.'",
      "Correct the mistake: 'She musts to finish her homework.'",
      "Turn this into a question using 'Do': 'You need to leave.'",
      "Turn this into a question by flipping: 'You should leave.'"
    ],
    "classroomUse": "<strong>The Wall of Rules:</strong> Draw a line down the middle of the board. Label the left 'Normal Verbs (Need, Want, Try)' and the right 'Modals (Can, Must, Should)'. Have students write the rules for questions, negatives, and 'to' on each side.",
    "summary": [
      "Normal verbs take 's' (He wants). Modals do not (He can).",
      "Normal verbs need 'do/does' for questions (Does he want?). Modals just flip (Can he?).",
      "Normal verbs need 'don't/doesn't' for negatives (He doesn't want). Modals just add 'not' (He cannot).",
      "Normal verbs usually take 'to' before the next verb (want to go). Modals NEVER take 'to' (must go)."
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
console.log('Updated 4 modal foundation lessons using ESM');
