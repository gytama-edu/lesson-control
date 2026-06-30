import fs from 'fs';
import { lessons } from '../data/lessons.js';

const updated = [
  {
    "id": "grammar-may-might-could-possibility",
    "backHref": "modals.html",
    "backLabel": "Back to Modals",
    "title": "May, Might, and Could for Possibility",
    "skill": "Grammar",
    "category": "Modals",
    "level": "Intermediate",
    "description": "Express possibility and uncertainty in the present and future.",
    "introduction": "When you look at dark clouds in the sky, you don't know for sure if water will fall. If you say 'It will rain,' you are stating a future fact. But what if you aren't sure? You need to express possibility. English uses the modals 'May', 'Might', and 'Could' to express that something is possible, but not 100% certain. They are the grammar of guessing.",
    "learningGoals": [
      "Use may, might, and could to talk about future or present possibilities.",
      "Understand that all three mean roughly the same thing ('maybe').",
      "Form negative guesses correctly (may not / might not)."
    ],
    "meaning": "When used for possibility, 'may', 'might', and 'could' all mean 'perhaps' or 'maybe'. Some textbooks claim 'may' is 50% certain and 'might' is 30% certain, but in modern spoken English, they are used interchangeably.",
    "uses": [
      "Future Possibility: I might go to the party. (Maybe I will go).",
      "Present Possibility: He could be at home. (Maybe he is at home right now)."
    ],
    "patterns": [
      {
        "name": "The Possibility Pattern",
        "formula": "Subject + May / Might / Could + Base Verb",
        "explanation": "Example: It might rain. We may win."
      },
      {
        "name": "The Negative Possibility",
        "formula": "Subject + May not / Might not + Base Verb",
        "explanation": "Example: I might not go. (Notice we DO NOT use 'could not' for negative guesses!)."
      }
    ],
    "stepByStep": "How to make a guess about the present:<br><br>1. <strong>Identify what you are guessing about:</strong> Where is John?<br>2. <strong>Form the guess:</strong> He is at the office.<br>3. <strong>Add the modal of uncertainty:</strong> Replace 'is' with 'might be'.<br>4. <strong>Result:</strong> 'He <em>might be</em> at the office.'",
    "examples": [
      { "type": "Future", "sentence": "Take an umbrella, it may rain later.", "note": "Predicting the future." },
      { "type": "Future", "sentence": "I might go to Japan next year.", "note": "Uncertain plan." },
      { "type": "Present", "sentence": "Don't eat that mushroom, it could be poisonous.", "note": "Guessing a current fact." },
      { "type": "Negative", "sentence": "I might not come to work tomorrow, I feel sick.", "note": "Guessing that an action will NOT happen." }
    ],
    "commonMistakes": [
      {
        "wrong": "It maybe rain.",
        "correct": "It may rain. (Or: Maybe it will rain).",
        "explanation": "'Maybe' is an adverb that goes at the beginning of a sentence. 'May be' (two words) or 'may + verb' is the modal structure inside the sentence.",
        "fix": "Don't use 'maybe' as a verb."
      },
      {
        "wrong": "He couldn't be at the party.",
        "correct": "He might not be at the party.",
        "explanation": "For negative guesses (maybe he is NOT there), we only use 'might not' or 'may not'. 'Couldn't' means something is logically impossible (0% chance).",
        "fix": "Use might not/may not for 'maybe not'."
      },
      {
        "wrong": "She might comes.",
        "correct": "She might come.",
        "explanation": "Modals never take an 's'.",
        "fix": "Base verb only."
      }
    ],
    "quickComparison": "<strong>Might vs Can:</strong> We do NOT use 'can' for specific future possibilities. 'It can rain tomorrow' is wrong. You must say 'It might rain tomorrow'. ('Can' is used for general truths: 'It can be very hot in July').",
    "indonesianLearnerWarning": "Indonesian relies heavily on the word 'mungkin' (maybe) at the start of sentences. Try to practice putting the uncertainty inside the verb phrase: Instead of 'Maybe I will go' (Mungkin saya akan pergi), practice saying 'I might go'.",
    "practicePrompts": [
      "Rewrite using 'might': 'Maybe she is asleep.' -> 'She ___ asleep.'",
      "Rewrite using 'may not': 'Maybe they will not win.' -> 'They ___ win.'",
      "Correct the mistake: 'I could not go to the party, I'm not sure yet.'",
      "Write a sentence guessing what the weather will be like tomorrow."
    ],
    "classroomUse": "<strong>What's in the Box?:</strong> Bring a closed box to class. Shake it. Have students make sentences guessing what is inside: 'It could be a pen.' 'It might be money.'",
    "summary": [
      "Use may, might, and could to say that something is possible (maybe).",
      "They follow the standard modal rule: Modal + Base Verb.",
      "For negative guesses (maybe not), use 'may not' or 'might not'.",
      "Do NOT use 'could not' for a simple negative guess.",
      "Do NOT use 'can' for specific future possibilities."
    ]
  },
  {
    "id": "grammar-must-cant-couldnt-deduction",
    "backHref": "modals.html",
    "backLabel": "Back to Modals",
    "title": "Must, Can’t, and Couldn’t for Deduction",
    "skill": "Grammar",
    "category": "Modals",
    "level": "Advanced",
    "description": "Learn how to make strong, logical guesses based on evidence.",
    "introduction": "You hear a knock at the door at exactly 3:00 PM. You know the postman always comes at 3:00 PM. You don't say 'It might be the postman.' You say 'It MUST be the postman!' This is called Deduction. It means making a strong, logical conclusion based on evidence. In English, we use 'Must' when we are 99% sure something is true, and we use 'Can't' when we are 99% sure something is impossible. Let's play detective.",
    "learningGoals": [
      "Use 'must' for strong affirmative deductions (I am sure it is true).",
      "Use 'can't' or 'couldn't' for strong negative deductions (I am sure it is false).",
      "Understand that 'must' here means certainty, not obligation."
    ],
    "meaning": "When used for deduction, 'Must' means 'I am logically certain this is true'. 'Can't' means 'I am logically certain this is impossible'. These are the strongest forms of guessing.",
    "uses": [
      "MUST: 99% sure it is true (You have been working for 12 hours, you must be tired).",
      "CAN'T / COULDN'T: 99% sure it is false (That can't be John, John is in Paris)."
    ],
    "patterns": [
      {
        "name": "The Certainty Pattern",
        "formula": "Subject + Must / Can't + Base Verb (often 'be')",
        "explanation": "Example: It must be true. It can't be true."
      }
    ],
    "stepByStep": "How to make a deduction:<br><br>1. <strong>Look at the evidence:</strong> The man is driving a Ferrari and wearing a Rolex.<br>2. <strong>Make a logical conclusion:</strong> He is rich.<br>3. <strong>Apply the modal of certainty:</strong> Replace 'is' with 'must be'.<br>4. <strong>Result:</strong> 'He <em>must be</em> rich.'",
    "examples": [
      { "type": "Must (True)", "sentence": "You haven't eaten all day. You must be starving.", "note": "Logical conclusion based on facts." },
      { "type": "Must (True)", "sentence": "Whose jacket is this? It must belong to Sarah.", "note": "She is the only one who wears that brand." },
      { "type": "Can't (Impossible)", "sentence": "You just slept for 10 hours. You can't be tired.", "note": "It is logically impossible." },
      { "type": "Can't (Impossible)", "sentence": "That couldn't be the CEO, he is much older.", "note": "Evidence contradicts the claim." }
    ],
    "commonMistakes": [
      {
        "wrong": "He must not be the killer, he was in another city.",
        "correct": "He can't be the killer, he was in another city.",
        "explanation": "This is a major rule: The opposite of 'Must' (for deduction) is NOT 'Must not'. The opposite is 'Can't'. ('Must not' is only for rules/prohibition).",
        "fix": "Always use 'can't' for 'I am sure it is false'."
      },
      {
        "wrong": "That must to be him.",
        "correct": "That must be him.",
        "explanation": "Modals never take 'to'.",
        "fix": "Drop the 'to'."
      }
    ],
    "quickComparison": "<strong>Might vs Must:</strong> 'He might be the killer' (30-50% sure, maybe yes, maybe no). 'He must be the killer' (99% sure, we found his fingerprints).",
    "indonesianLearnerWarning": "In Indonesian, 'pasti' (certainly/must be) and 'tidak mungkin' (impossible/can't be) perfectly match 'must' and 'can't'. Just remember the English grammatical structure: Subject + Modal + Verb.",
    "practicePrompts": [
      "Fill in the blank with must or can't: 'The ground is wet. It ___ be raining.'",
      "Fill in the blank with must or can't: 'She just bought a huge mansion. She ___ be poor.'",
      "Correct the mistake: 'That must not be the right answer, the math is wrong.'",
      "Write a deduction about someone who is yawning constantly."
    ],
    "classroomUse": "<strong>The Detective Game:</strong> Show a picture of a messy room (a broken window, muddy footprints, an empty safe). Have students make deductions using 'Must' and 'Can't'. 'The thief must be tall.' 'The thief can't be a child.'",
    "summary": [
      "Use 'must' when you are logically certain something is true.",
      "Use 'can't' or 'couldn't' when you are logically certain something is impossible.",
      "The opposite of 'must be' is 'can't be' (NOT 'must not be').",
      "This is called Deduction, and it is based on evidence."
    ]
  },
  {
    "id": "grammar-should-could-would-have",
    "backHref": "modals.html",
    "backLabel": "Back to Modals",
    "title": "Should Have, Could Have, and Would Have",
    "skill": "Grammar",
    "category": "Modals",
    "level": "Advanced",
    "description": "Master the 'Modal Perfect' to talk about the past: regrets, missed opportunities, and imagined results.",
    "introduction": "How do you talk about something that didn't happen? 'I failed the test because I didn't study.' That's a fact. But what if you want to express REGRET? 'I should have studied.' What if you had the ability, but chose not to? 'I could have studied.' Modals normally talk about the present or future. To force them into the past to talk about imaginary situations, we use a structure called the Modal Perfect (Modal + Have + Past Participle). Let's learn how to complain about the past.",
    "learningGoals": [
      "Understand the Modal Perfect formula: Modal + Have + Verb 3 (Past Participle).",
      "Use 'should have' for regrets and past mistakes.",
      "Use 'could have' for missed opportunities and past abilities.",
      "Use 'would have' for imagined results in the past."
    ],
    "meaning": "The Modal Perfect always talks about an 'unreal' past. 'Should have' means it was a good idea, but you DIDN'T do it. 'Could have' means it was possible, but it DIDN'T happen. 'Would have' means you wanted to do it, but something stopped you.",
    "uses": [
      "SHOULD HAVE: Regrets / Mistakes (I should have listened to you).",
      "COULD HAVE: Missed Possibility (We could have won the game).",
      "WOULD HAVE: Imagined Result (I would have called, but my battery died)."
    ],
    "patterns": [
      {
        "name": "The Modal Perfect Pattern",
        "formula": "Subject + Modal + Have + Past Participle (V3)",
        "explanation": "Example: I should have gone. (Often contracted in speech to 'should've', 'could've', 'would've')."
      }
    ],
    "stepByStep": "How to express regret:<br><br>1. <strong>Identify the past mistake:</strong> I didn't lock the door, and my bike was stolen.<br>2. <strong>Identify what was the right thing to do:</strong> Lock the door.<br>3. <strong>Apply the formula:</strong> I + should have + locked.<br>4. <strong>Result:</strong> 'I <em>should have locked</em> the door.' (I regret my action).",
    "examples": [
      { "type": "Should Have (Regret)", "sentence": "I should have gone to bed earlier.", "note": "Reality: I stayed up late, and now I am tired." },
      { "type": "Should Not Have (Mistake)", "sentence": "You shouldn't have yelled at her.", "note": "Reality: You yelled at her, and it was a bad idea." },
      { "type": "Could Have (Opportunity)", "sentence": "She could have been a professional athlete, but she chose to become a doctor.", "note": "Reality: She had the ability, but didn't do it." },
      { "type": "Would Have (Imagined)", "sentence": "I would have bought the car, but it was too expensive.", "note": "Reality: I wanted to, but the price stopped me." }
    ],
    "commonMistakes": [
      {
        "wrong": "I should of gone.",
        "correct": "I should have gone.",
        "explanation": "Because 'should've' sounds like 'should of' when spoken quickly, even native English speakers make this spelling mistake. It is grammatically impossible to use 'of' here.",
        "fix": "Always write 'have' (or 've)."
      },
      {
        "wrong": "She could has helped.",
        "correct": "She could have helped.",
        "explanation": "Because the modal blocks conjugation, you must ALWAYS use the base form 'have'. Never use 'has' or 'had' after a modal, even for he/she/it.",
        "fix": "Modal + HAVE + V3. Always."
      },
      {
        "wrong": "I would have go.",
        "correct": "I would have gone.",
        "explanation": "You must use the Past Participle (Verb 3) after 'have'.",
        "fix": "Memorize your irregular V3 forms (gone, seen, eaten)."
      }
    ],
    "quickComparison": "<strong>Should do vs Should have done:</strong> 'You should study' (Advice for right now). 'You should have studied' (It's too late, you already failed the test).",
    "indonesianLearnerWarning": "In Indonesian, you might say 'Seharusnya saya pergi' (Should I go / I should have gone). English strictly requires the 'Have + V3' structure to show that the opportunity is dead and buried in the past.",
    "practicePrompts": [
      "Express a regret about eating too much: 'I shouldn't ___ so much cake.'",
      "Express a missed opportunity: 'We ___ won the match, but we made a mistake.'",
      "Correct the mistake: 'He should has told me the truth.'",
      "Write a sentence about something you 'would have' done yesterday, but couldn't."
    ],
    "classroomUse": "<strong>The Regret Circle:</strong> Give students a bad outcome (e.g., 'I got a speeding ticket'). They must go around the circle giving 'should have' advice about the past: 'You shouldn't have driven so fast.' 'You should have looked at the sign.'",
    "summary": [
      "The formula is Modal + Have + Past Participle (V3).",
      "Use 'should have' for regrets and past mistakes.",
      "Use 'could have' for missed opportunities.",
      "Use 'would have' for imagined results that didn't happen.",
      "Always use 'have'. Never use 'has' or 'of'."
    ]
  },
  {
    "id": "grammar-must-may-might-cant-have",
    "backHref": "modals.html",
    "backLabel": "Back to Modals",
    "title": "Must Have, May Have, Might Have, and Can’t Have",
    "skill": "Grammar",
    "category": "Modals",
    "level": "Advanced",
    "description": "Make logical deductions and guesses about events that already happened.",
    "introduction": "You come home and the window is broken. The TV is missing. What happened? You didn't see it happen, so you have to guess. 'A thief MUST HAVE broken in.' When we play detective about events that have already finished in the past, we use the Modal Perfect structure (Modal + Have + Verb 3). Let's learn how to investigate the past.",
    "learningGoals": [
      "Use 'must have' to make a strong, certain guess about the past.",
      "Use 'can't have' to state that something was impossible in the past.",
      "Use 'might have' or 'may have' to make a weak guess about the past."
    ],
    "meaning": "These structures allow us to look at present evidence and guess what caused it in the past. 'Must have' means you are 99% sure it happened. 'Might have' means it's a 50/50 possibility. 'Can't have' means you are 99% sure it did not happen.",
    "uses": [
      "MUST HAVE: 99% Sure (The ground is wet. It must have rained).",
      "MIGHT / MAY HAVE: 50% Sure (Where is my phone? I might have left it at home).",
      "CAN'T HAVE: 0% Possible (He can't have stolen the car, he was with me)."
    ],
    "patterns": [
      {
        "name": "The Past Deduction Pattern",
        "formula": "Subject + Modal + Have + Past Participle (V3)",
        "explanation": "Example: He must have forgotten. She might have left."
      }
    ],
    "stepByStep": "How to investigate a past event:<br><br>1. <strong>Look at the evidence:</strong> John failed the test. He looks very sad.<br>2. <strong>Make a logical guess:</strong> He didn't study.<br>3. <strong>How sure are you?</strong> Very sure.<br>4. <strong>Apply the formula:</strong> He + must not have + studied.<br>5. <strong>Result:</strong> 'He <em>must not have studied</em>.'",
    "examples": [
      { "type": "Must Have (Certainty)", "sentence": "You must have been terrified during the earthquake.", "note": "I am logically sure you were scared." },
      { "type": "Might Have (Possibility)", "sentence": "I might have dropped my keys in the parking lot.", "note": "I'm not sure, it's just a guess." },
      { "type": "Can't Have (Impossibility)", "sentence": "You can't have seen a dinosaur, they are extinct.", "note": "It is logically impossible." },
      { "type": "Must Have (Conclusion)", "sentence": "Someone ate the cake. It must have been the dog.", "note": "Solving a mystery." }
    ],
    "commonMistakes": [
      {
        "wrong": "He must has left.",
        "correct": "He must have left.",
        "explanation": "As with all Modal Perfects, you must always use the base word 'have', regardless of the subject.",
        "fix": "Always Modal + HAVE."
      },
      {
        "wrong": "He couldn't has done it.",
        "correct": "He couldn't have done it.",
        "explanation": "Same rule. Use 'have', not 'has'. ('Couldn't have' is used interchangeably with 'can't have').",
        "fix": "Drop the 'has'."
      },
      {
        "wrong": "The thief must not have the key.",
        "correct": "The thief must not have had the key.",
        "explanation": "If 'have' is the main action verb (possession), you still need the grammatical 'have'. So you get 'have had'.",
        "fix": "Modal + Have + Had."
      }
    ],
    "quickComparison": "<strong>Must have vs Should have:</strong> 'He must have forgotten' (I am guessing that he forgot). 'He should have remembered' (I am angry that he didn't remember). One is a guess, the other is a judgment.",
    "indonesianLearnerWarning": "In Indonesian, you just add 'pasti' (must) or 'mungkin' (might) to a past tense sentence (Pasti dia lupa). In English, you must master the three-part grammar structure: Modal + Have + Verb 3 (He must have forgotten).",
    "practicePrompts": [
      "Fill in the blank with must have or might have: 'My wallet is gone! Someone ___ stolen it!' (You are 99% sure).",
      "Fill in the blank with must have or can't have: 'He ___ run a marathon, he is entirely out of shape.' (It's impossible).",
      "Correct the mistake: 'She might has gone to the store.'",
      "Write a sentence guessing what happened to the dinosaurs using 'might have'."
    ],
    "classroomUse": "<strong>The Crime Scene:</strong> Draw a broken vase and a cat running away on the board. Ask the students to act like detectives. 'The cat must have knocked it over.' 'The dog can't have done it, he is outside.'",
    "summary": [
      "Use 'must have + V3' when you are sure something happened in the past.",
      "Use 'might have + V3' when you think something possibly happened.",
      "Use 'can't have + V3' when you are sure something did NOT happen.",
      "Always use 'have', never 'has' or 'had' (as the helping verb).",
      "This structure is used for guessing, deducing, and investigating the past."
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
console.log('Updated 4 modal possibility/deduction lessons using ESM');
