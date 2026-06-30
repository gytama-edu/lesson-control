import fs from 'fs';
import { lessons } from '../data/lessons.js';

const updated = [
  {
    "id": "grammar-can-could-be-able-to",
    "backHref": "modals.html",
    "backLabel": "Back to Modals",
    "title": "Can, Could, and Be Able To",
    "skill": "Grammar",
    "category": "Modals",
    "level": "Intermediate",
    "description": "Learn how to express present, past, and future ability using can, could, and be able to.",
    "introduction": "How do you tell someone about a skill you have? You use 'can'. 'I can swim.' But what if you want to say you had that skill when you were a child, but lost it? 'I could swim.' And what if you want to say you will learn that skill next year? 'I will can swim?' No! That's illegal in English. Because modal verbs are frozen, we need a secret weapon—'be able to'—to talk about ability in the future or in perfect tenses. Let's learn how to talk about your skills across time.",
    "learningGoals": [
      "Use 'can' for general present ability.",
      "Use 'could' for general past ability.",
      "Use 'be able to' as a flexible substitute for all other tenses (especially future)."
    ],
    "meaning": "'Can' and 'Could' show that you have the physical or mental power to do something. 'Be able to' means the exact same thing, but it is a normal verb phrase, which means it can change shape for any tense (am able to, was able to, will be able to, have been able to).",
    "uses": [
      "Present Ability: I can speak French. / I am able to speak French.",
      "Past Ability: I could read when I was four. / I was able to read.",
      "Future Ability: I will be able to drive next year. (NEVER 'will can')."
    ],
    "patterns": [
      {
        "name": "The Present/Past Modal Pattern",
        "formula": "Subject + Can/Could + Base Verb",
        "explanation": "Example: I can swim. I could swim."
      },
      {
        "name": "The Flexible Substitute",
        "formula": "Subject + [Be verb in any tense] + able to + Base Verb",
        "explanation": "Example: I will be able to go. I have been able to sleep."
      }
    ],
    "stepByStep": "How to talk about future ability:<br><br>1. <strong>Start with your sentence:</strong> 'I learn to drive.'<br>2. <strong>Add future:</strong> 'I will learn to drive.'<br>3. <strong>Try to add ability:</strong> 'I will can drive.' -> STOP! Two modals together are illegal.<br>4. <strong>Substitute 'can':</strong> Change 'can' to 'be able to'.<br>5. <strong>Result:</strong> 'I will <em>be able to</em> drive.'",
    "examples": [
      { "type": "Present", "sentence": "She can play the piano.", "note": "General current skill." },
      { "type": "Past", "sentence": "My grandfather could speak five languages.", "note": "General past skill." },
      { "type": "Future", "sentence": "With practice, you will be able to pass the test.", "note": "Future skill." },
      { "type": "Present Perfect", "sentence": "I haven't been able to sleep lately.", "note": "Because 'can' has no perfect form." },
      { "type": "Specific Past Achievement", "sentence": "The fire was bad, but they were able to escape.", "note": "(Advanced: We use 'were able to', not 'could', for a single successful difficult event)." }
    ],
    "commonMistakes": [
      {
        "wrong": "I will can help you tomorrow.",
        "correct": "I will be able to help you tomorrow.",
        "explanation": "You cannot stack two modal verbs ('will' and 'can') next to each other.",
        "fix": "Use 'be able to' for the future."
      },
      {
        "wrong": "I can to swim.",
        "correct": "I can swim.",
        "explanation": "Remember the Golden Rule of modals. No 'to'.",
        "fix": "Drop the 'to'."
      }
    ],
    "quickComparison": "<strong>Could vs Was able to:</strong> For a general past skill, use 'could' (I could run fast). For surviving one specific difficult situation, use 'was able to' (The car crashed, but I was able to escape).",
    "indonesianLearnerWarning": "In Indonesian, 'akan bisa' (will can) makes perfect sense and is commonly used. You must actively train yourself out of saying 'will can' in English.",
    "practicePrompts": [
      "Translate to the correct pattern: 'Next year, I (will can) speak English fluently.'",
      "Choose the correct word: 'When I was young, I (can / could) run for miles.'",
      "Correct the mistake: 'She has can play the guitar since 2010.'",
      "Write a sentence about a skill you will have in five years using 'will be able to'."
    ],
    "classroomUse": "<strong>The Skill Timeline:</strong> Draw a timeline on the board (Past, Present, Future). Have students write one sentence for each using the same skill: 'I couldn't cook. I can cook. I will be able to cook like a chef.'",
    "summary": [
      "Use 'can' for present skills and ability.",
      "Use 'could' for past skills and ability.",
      "Never stack modals (e.g., 'will can').",
      "Use 'be able to' as a substitute for any tense (will be able to, have been able to).",
      "Use 'was able to' for surviving one specific difficult situation in the past."
    ]
  },
  {
    "id": "grammar-permission-can-could-may",
    "backHref": "modals.html",
    "backLabel": "Back to Modals",
    "title": "Permission with Can, Could, and May",
    "skill": "Grammar",
    "category": "Modals",
    "level": "Beginner",
    "description": "Understand the levels of politeness when asking for and giving permission.",
    "introduction": "You need to leave the room. How do you ask? If you say 'I leave now?', it sounds demanding. To ask for permission, we flip a modal verb to the front of the sentence. But which one should you choose? English has three main modals for permission—Can, Could, and May—and choosing the wrong one can make you sound too casual to your boss, or too formal to your best friend. Let's learn how to navigate the politeness ladder.",
    "learningGoals": [
      "Use 'Can' for casual, everyday permission with friends or equals.",
      "Use 'Could' for polite permission with colleagues or strangers.",
      "Use 'May' for highly formal permission with authority figures."
    ],
    "meaning": "When asking if you are allowed to do something, the meaning is exactly the same across all three words. The only difference is the 'register' (the level of formality and respect).",
    "uses": [
      "CAN I...? (Casual / Direct)",
      "COULD I...? (Polite / Soft)",
      "MAY I...? (Formal / Respectful)"
    ],
    "patterns": [
      {
        "name": "The Permission Question",
        "formula": "Modal + I + Base Verb + (Please)?",
        "explanation": "Example: Can I go? Could I go? May I go?"
      },
      {
        "name": "Giving Permission (The Answer)",
        "formula": "Yes, you can. / Yes, you may. (NEVER 'Yes, you could').",
        "explanation": "'Could' is only used in the question to soften it. The answer is always 'can' or 'may'."
      }
    ],
    "stepByStep": "How to choose your politeness level:<br><br>1. <strong>Look at who you are talking to.</strong><br>2. <strong>Is it a friend, sibling, or close coworker?</strong> Use <em>Can</em>. -> 'Can I borrow your pen?'<br>3. <strong>Is it a stranger, a client, or an older person?</strong> Use <em>Could</em>. -> 'Could I use your phone, please?'<br>4. <strong>Is it a strict teacher, a judge, or a CEO?</strong> Use <em>May</em>. -> 'May I speak, your honor?'",
    "examples": [
      { "type": "Casual (Can)", "sentence": "Mom, can I watch TV?", "note": "Relaxed family setting." },
      { "type": "Polite (Could)", "sentence": "Excuse me, could I sit here?", "note": "Talking to a stranger on a train." },
      { "type": "Formal (May)", "sentence": "May I see your passport, please?", "note": "Official or highly respectful setting." },
      { "type": "Giving Permission", "sentence": "Yes, you can go now.", "note": "Teacher giving permission to students." },
      { "type": "Classroom", "sentence": "Teacher, may I go to the bathroom?", "note": "The classic schoolroom phrase." }
    ],
    "commonMistakes": [
      {
        "wrong": "Q: Could I borrow this? A: Yes, you could.",
        "correct": "Q: Could I borrow this? A: Yes, you can.",
        "explanation": "We use 'could' in the question to sound hesitant and polite. When you grant permission, you don't need to be hesitant. You use 'can'.",
        "fix": "Never answer a permission question with 'Yes, you could'."
      },
      {
        "wrong": "May you help me?",
        "correct": "Could you help me?",
        "explanation": "'May' is almost exclusively used with 'I' or 'We' to ask for permission for yourself. You don't use 'May you' to ask someone else to do a task.",
        "fix": "Use 'May I...?' for permission. Use 'Could you...?' for requests."
      }
    ],
    "quickComparison": "<strong>Can I vs May I:</strong> A famous teacher joke: Student: 'Can I go to the bathroom?' Teacher: 'I don't know, can you?' (Meaning: Do you have the physical ability?). In modern English, 'Can I' is perfectly acceptable for permission, but 'May I' is grammatically stricter.",
    "indonesianLearnerWarning": "In Indonesian, 'Boleh saya...?' covers all these levels. In English, you must actively assess your relationship with the listener to choose between Can, Could, and May.",
    "practicePrompts": [
      "Choose the best modal: Talking to a judge in court. '___ I approach the bench?'",
      "Choose the best modal: Talking to your sister. '___ I wear your jacket?'",
      "Correct the mistake in the answer: 'Could I leave early?' -> 'Yes, you could.'",
      "Write a polite question asking a stranger to use their charger."
    ],
    "classroomUse": "<strong>The Roleplay Game:</strong> Give students a task (e.g., borrowing a laptop). Have them practice asking a partner three times: once acting like a best friend (Can), once acting like a nervous employee (Could), and once acting like a royal servant (May).",
    "summary": [
      "Use 'Can I' for casual permission with friends and family.",
      "Use 'Could I' for polite permission with strangers and colleagues.",
      "Use 'May I' for formal permission with authority figures.",
      "Always answer 'Could I' questions with 'Yes, you can' (not 'could').",
      "Never say 'May you...?'"
    ]
  },
  {
    "id": "grammar-polite-requests-can-could-would",
    "backHref": "modals.html",
    "backLabel": "Back to Modals",
    "title": "Polite Requests with Can, Could, and Would",
    "skill": "Grammar",
    "category": "Modals",
    "level": "Intermediate",
    "description": "Learn how to ask someone else to do something for you using polite modals.",
    "introduction": "If you want someone to open a window, you could just say: 'Open the window.' But in English-speaking cultures, giving direct commands is often considered rude or bossy. Instead of demanding action, we ask a question. We use modal verbs to soften the request, making it sound like we are giving the other person a choice. Let's learn how to use Can, Could, and Would to get what you want, politely.",
    "learningGoals": [
      "Understand the difference between asking for permission (I) and making a request (You).",
      "Use 'Can you' for casual requests.",
      "Use 'Could you' and 'Would you' for polite, softened requests."
    ],
    "meaning": "When making a request, you are asking someone else to perform an action. You are not asking if they have the physical ability to do it; you are asking if they are willing to do it. 'Could' and 'Would' are the most common ways to soften this request.",
    "uses": [
      "CAN YOU...? (Casual / Direct / Friends)",
      "COULD YOU...? (Polite / Soft / Professional)",
      "WOULD YOU...? (Polite / Asking about willingness)"
    ],
    "patterns": [
      {
        "name": "The Request Pattern",
        "formula": "Modal + You + Base Verb + (Please)?",
        "explanation": "Example: Can you help? Could you help? Would you help?"
      },
      {
        "name": "The Mind Pattern",
        "formula": "Would you mind + Verb-ing?",
        "explanation": "Example: Would you mind helping me? (Very polite)."
      }
    ],
    "stepByStep": "How to make a polite request:<br><br>1. <strong>Identify what you want:</strong> 'Pass the salt.'<br>2. <strong>Determine the setting:</strong> Dinner with your boss.<br>3. <strong>Choose a soft modal:</strong> 'Could' or 'Would'.<br>4. <strong>Form the question:</strong> '<em>Could you</em> pass the salt?'<br>5. <strong>Add please (optional but good):</strong> 'Could you pass the salt, please?'",
    "examples": [
      { "type": "Casual (Can)", "sentence": "Can you grab me a coffee?", "note": "Talking to a coworker you know well." },
      { "type": "Polite (Could)", "sentence": "Could you send me that report?", "note": "Standard polite office communication." },
      { "type": "Polite (Would)", "sentence": "Would you hold the door for me?", "note": "Asking a stranger for a favor." },
      { "type": "Very Polite (Mind)", "sentence": "Would you mind closing the window?", "note": "Notice the '-ing' verb after 'mind'." },
      { "type": "Classroom", "sentence": "Could you repeat that, please?", "note": "Student politely asking the teacher." }
    ],
    "commonMistakes": [
      {
        "wrong": "May you open the door?",
        "correct": "Could you open the door?",
        "explanation": "This is a very common error! 'May' is for permission (May I?). It is almost NEVER used to make a request of someone else (May you?).",
        "fix": "Always use Can/Could/Would with 'you'."
      },
      {
        "wrong": "You can help me?",
        "correct": "Can you help me?",
        "explanation": "Requests must be formatted as questions, which means the modal must come BEFORE the subject.",
        "fix": "Flip the modal and the subject."
      },
      {
        "wrong": "Would you mind to close the door?",
        "correct": "Would you mind closing the door?",
        "explanation": "The phrase 'would you mind' is special. It is always followed by an '-ing' verb (gerund), never an infinitive.",
        "fix": "Would you mind + verb-ing."
      }
    ],
    "quickComparison": "<strong>Permission vs Request:</strong> Permission = I want to do it (Can I?). Request = I want YOU to do it (Can you?).",
    "indonesianLearnerWarning": "In Indonesian, 'Tolong buka pintu' (Help open the door) is perfectly polite. In English, starting with a verb sounds like an order. You must wrap the verb in a modal question: 'Could you open the door, please?'",
    "practicePrompts": [
      "Turn this command into a polite request: 'Give me your phone number.'",
      "Turn this command into a very polite request using 'mind': 'Turn down the music.'",
      "Correct the mistake: 'May you tell me the time?'",
      "Write a sentence asking a waiter to bring the bill."
    ],
    "classroomUse": "<strong>The Rude to Polite Translation:</strong> The teacher gives a series of rude commands ('Sit down!', 'Give me a pencil!', 'Be quiet!'). Students must instantly translate them into polite 'Could you...' requests.",
    "summary": [
      "Use 'Can you...?' for casual requests.",
      "Use 'Could you...?' or 'Would you...?' for polite, professional requests.",
      "Never use 'May you...?'",
      "'Would you mind' must be followed by an '-ing' verb.",
      "In English culture, formatting a request as a question is the standard way to be polite."
    ]
  },
  {
    "id": "grammar-offers-suggestions-modals",
    "backHref": "modals.html",
    "backLabel": "Back to Modals",
    "title": "Offers and Suggestions with Modals",
    "skill": "Grammar",
    "category": "Modals",
    "level": "Intermediate",
    "description": "Learn how to offer help and suggest ideas using modals like shall, could, and would.",
    "introduction": "You see someone carrying a heavy box. How do you offer to help? Your friends are bored on a Friday night. How do you suggest a plan? Modals are the perfect tools for being helpful and collaborative. By using words like 'Shall', 'Could', and 'Would', you can offer solutions without sounding aggressive or pushy. Let's learn the polite formulas for hospitality and brainstorming.",
    "learningGoals": [
      "Use 'Shall I...?' and 'Can I...?' to offer help.",
      "Use 'Would you like...?' to offer things (food, drink).",
      "Use 'We could...' to suggest ideas gently."
    ],
    "meaning": "When offering help or suggesting ideas, we use modals to present an option to the listener. It shows that you are willing to act, but you are leaving the final decision up to them.",
    "uses": [
      "Offering Help: Shall I...? / Can I...?",
      "Offering Things: Would you like...?",
      "Suggesting Ideas: We could... / Shall we...?"
    ],
    "patterns": [
      {
        "name": "The Action Offer",
        "formula": "Shall I / Can I + Base Verb?",
        "explanation": "Example: Shall I carry that for you? Can I help you?"
      },
      {
        "name": "The Object Offer",
        "formula": "Would you like + Noun (or to + Verb)?",
        "explanation": "Example: Would you like some coffee? Would you like to sit down?"
      },
      {
        "name": "The Gentle Suggestion",
        "formula": "Subject + Could + Base Verb",
        "explanation": "Example: We could go to the cinema tonight."
      }
    ],
    "stepByStep": "How to make a suggestion vs an offer:<br><br>1. <strong>Do you want to give them something to eat/drink?</strong> Use <em>Would you like</em>. -> 'Would you like a cookie?'<br>2. <strong>Do you want to do the work for them?</strong> Use <em>Shall I</em>. -> 'Shall I open the window?'<br>3. <strong>Do you want to brainstorm an activity together?</strong> Use <em>We could</em>. -> 'We could order pizza later.'",
    "examples": [
      { "type": "Offering Help", "sentence": "Shall I call a taxi for you?", "note": "Very polite, slightly British." },
      { "type": "Offering Help", "sentence": "Can I give you a hand?", "note": "Friendly, common everywhere." },
      { "type": "Offering Things", "sentence": "Would you like some more water?", "note": "The standard hospitality phrase." },
      { "type": "Suggesting Ideas", "sentence": "We could try that new restaurant.", "note": "A soft, gentle idea." },
      { "type": "Suggesting Plans", "sentence": "Shall we leave now?", "note": "Asking for agreement." }
    ],
    "commonMistakes": [
      {
        "wrong": "Do you want that I help you?",
        "correct": "Shall I help you? (Or: Do you want me to help you?)",
        "explanation": "Direct translation from romantic languages often results in 'that I help'. Use 'Shall I' instead.",
        "fix": "Use 'Shall I + verb'."
      },
      {
        "wrong": "Will you like some coffee?",
        "correct": "Would you like some coffee?",
        "explanation": "When offering food, drinks, or seats, always use 'would'. 'Will' is not used for hospitality offers.",
        "fix": "Always use 'Would you like'."
      },
      {
        "wrong": "We can to go to the park.",
        "correct": "We could go to the park.",
        "explanation": "When brainstorming ideas, 'could' is softer and more polite than 'can'. And remember, no 'to'!",
        "fix": "Drop the 'to' and use 'could' for soft suggestions."
      }
    ],
    "quickComparison": "<strong>Should vs Could (Suggestions):</strong> 'We should go' is a strong recommendation (I think it's the best idea). 'We could go' is a soft suggestion (It is one of many possible ideas).",
    "indonesianLearnerWarning": "In Indonesian, 'Mau kopi?' (Want coffee?) is common. In English, 'Do you want coffee?' is okay for close friends, but 'Would you like some coffee?' is the required polite form for guests or customers.",
    "practicePrompts": [
      "Make an offer to a guest arriving at your house: '___ you like a glass of water?'",
      "Offer to carry a heavy bag: '___ I carry that for you?'",
      "Suggest an idea for the weekend: 'We ___ go to the beach.'",
      "Correct the mistake: 'Will you like to sit down?'"
    ],
    "classroomUse": "<strong>The Brainstorming Session:</strong> The teacher presents a problem ('It's raining and we can't go outside'). Students must use 'We could...' to suggest alternative activities.",
    "summary": [
      "Use 'Shall I...?' or 'Can I...?' to politely offer your help.",
      "Use 'Would you like...?' to offer food, drinks, or objects.",
      "Use 'We could...' to make gentle suggestions and brainstorm ideas.",
      "Use 'Shall we...?' to suggest starting an activity together."
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
console.log('Updated 4 modal ability/permission lessons using ESM');
