import fs from 'fs';
import { lessons } from '../data/lessons.js';

const updated = [
  {
    "id": "grammar-past-future-simple",
    "backHref": "tenses.html",
    "backLabel": "Back to Tenses",
    "title": "Past Future Simple Tense",
    "skill": "Grammar",
    "category": "Past Future Tenses",
    "level": "Intermediate",
    "description": "Talk about plans made in the past that were meant for the future.",
    "introduction": "Have you ever made a promise, but then broken it? How do you explain that? Yesterday, you said, 'I will call you.' But today, you didn't call. When you explain the story today, you say: 'I told you that I WOULD call you.' This is the Past Future tense. It is used to report a future plan that was made in the past, or to imagine a hypothetical situation. Let's learn how to travel backward to look forward.",
    "learningGoals": [
      "Understand how 'will' changes to 'would' when reporting past promises or plans.",
      "Use 'would' to describe hypothetical (imaginary) situations.",
      "Understand how 'am/is/are going to' changes to 'was/were going to' for past intentions."
    ],
    "meaning": "The action was in the future FROM the perspective of a moment in the past. Or, the action is entirely imaginary.",
    "uses": [
      "Reported Speech: He said he would help me.",
      "Past Intentions: I was going to call you, but I forgot.",
      "Hypotheticals (Conditionals): If I had money, I would buy a car."
    ],
    "patterns": [
      {
        "name": "The 'Would' Pattern",
        "formula": "Subject + would + Base Verb",
        "explanation": "Example: I would go. She would help. (Negative: wouldn't)."
      },
      {
        "name": "The Past Intention Pattern",
        "formula": "Subject + was/were + going to + Base Verb",
        "explanation": "Example: I was going to call you. (Often implies the action didn't happen)."
      }
    ],
    "stepByStep": "How to report a past promise:<br><br>1. <strong>The original promise (Yesterday):</strong> 'I <em>will</em> finish the report.'<br>2. <strong>Reporting it today:</strong> Change 'will' to 'would'.<br>3. <strong>Apply the formula:</strong> 'He said he <em>would finish</em> the report.'<br>4. <strong>Using 'Going to':</strong> 'I <em>am going to</em> cook.' -> 'I told you I <em>was going to</em> cook.'",
    "examples": [
      { "type": "Reported Promise", "sentence": "She promised she would return the money.", "note": "Original thought: 'I will return the money'." },
      { "type": "Failed Intention", "sentence": "I was going to clean my room, but I fell asleep.", "note": "A plan that didn't happen." },
      { "type": "Hypothetical", "sentence": "I would travel the world if I were rich.", "note": "An imaginary situation." }
    ],
    "commonMistakes": [
      {
        "wrong": "He said he will help me yesterday.",
        "correct": "He said he would help me yesterday.",
        "explanation": "If the main reporting verb is in the past ('said'), the future verb must shift back in time from 'will' to 'would'.",
        "fix": "Always shift 'will' to 'would' in past stories."
      },
      {
        "wrong": "I would to go.",
        "correct": "I would go.",
        "explanation": "'Would' is a modal verb. No 'to' allowed.",
        "fix": "Would + Base Verb."
      }
    ],
    "quickComparison": "<strong>Will vs Would:</strong> 'I will help you' (A promise right now). 'I would help you' (I want to help you, but I can't / An imaginary promise).",
    "indonesianLearnerWarning": "In Indonesian, you might say 'Dia bilang dia akan datang' (He said he will come). In English, 'akan' MUST shift to its past form 'would' when reported in a past story.",
    "practicePrompts": [
      "Report this statement: John said, 'I will fix it.' -> John said he ___ fix it.",
      "Express a failed plan: 'I ___ ___ ___ call you, but my phone died.'",
      "Correct the mistake: 'I knew it will rain.'",
      "Write a sentence about what you 'would' do if you won the lottery."
    ],
    "classroomUse": "<strong>The Broken Promises Game:</strong> Pair students up. Student A makes a promise on Monday ('I will bring cookies'). Fast forward to Friday. Student B accuses Student A: 'But on Monday, you said you would bring cookies!'",
    "summary": [
      "Use 'would' as the past tense of 'will' to report past promises and plans.",
      "Use 'was/were going to' to talk about past intentions (especially plans that failed).",
      "'Would' is also the main word used for imaginary, hypothetical situations (I would buy a mansion)."
    ]
  },
  {
    "id": "grammar-past-future-continuous",
    "backHref": "tenses.html",
    "backLabel": "Back to Tenses",
    "title": "Past Future Continuous Tense",
    "skill": "Grammar",
    "category": "Past Future Tenses",
    "level": "Advanced",
    "description": "Describe an action that was expected to be ongoing at a past time.",
    "introduction": "This tense is rare, but very precise. Imagine yesterday, you made a prediction about this morning. 'At 9 AM tomorrow, I will be flying.' Now, the flight was canceled. How do you describe that broken expectation? 'I WOULD BE flying right now, but the flight was canceled.' We use this to describe an ongoing action that we expected to happen, but usually didn't. Let's learn the tense of broken ongoing expectations.",
    "learningGoals": [
      "Use this tense to express an action that was supposed to be in progress.",
      "Use it for hypothetical ongoing actions.",
      "Master the formula: Would + be + Verb-ing."
    ],
    "meaning": "From a past perspective, an action was predicted to be in progress at a certain time. Or, in a hypothetical world, the action is in progress right now.",
    "uses": [
      "Failed ongoing plan: I would be sleeping right now if the dog wasn't barking.",
      "Reported ongoing plan: He said he would be waiting for us."
    ],
    "patterns": [
      {
        "name": "The Past Future Continuous Formula",
        "formula": "Subject + would be + Verb-ing",
        "explanation": "Example: I would be sleeping. She would be working."
      }
    ],
    "stepByStep": "How to describe an imaginary ongoing action:<br><br>1. <strong>Identify the current reality:</strong> You are taking an exam.<br>2. <strong>Identify the imaginary alternative:</strong> Sitting on a beach.<br>3. <strong>Apply the formula:</strong> I + would be + sitting.<br>4. <strong>Result:</strong> 'If I didn't have this exam, I <em>would be sitting</em> on a beach right now.'",
    "examples": [
      { "type": "Hypothetical Ongoing", "sentence": "I would be enjoying this party if the music wasn't so loud.", "note": "Imagining a different current reality." },
      { "type": "Reported Ongoing Plan", "sentence": "They told us they would be traveling all day Tuesday.", "note": "Reporting a future continuous plan in the past." }
    ],
    "commonMistakes": [
      {
        "wrong": "He said he will be waiting.",
        "correct": "He said he would be waiting.",
        "explanation": "When reporting a past conversation ('He said'), the future tense must shift back. 'Will' becomes 'would'.",
        "fix": "Shift 'will' to 'would' in reported speech."
      },
      {
        "wrong": "I would being working.",
        "correct": "I would be working.",
        "explanation": "'Would' is a modal. It requires the base verb 'be'.",
        "fix": "Always 'would be'."
      }
    ],
    "quickComparison": "<strong>Would do vs Would be doing:</strong> 'I would go to the party' (Imaginary single event). 'I would be dancing at the party right now' (Imaginary ongoing action happening right now).",
    "indonesianLearnerWarning": "This is a very specific nuance. Translating it as 'akan sedang' (would be) in a hypothetical context requires a strong grasp of English conditionals (If clauses).",
    "practicePrompts": [
      "Complete the hypothetical: 'If I were on vacation, I ___ ___ ___ (sleep) right now.'",
      "Correct the mistake: 'I thought they will be arriving today.'",
      "Write a sentence about what you 'would be doing' right now if you weren't studying English."
    ],
    "classroomUse": "<strong>The Alternate Universe:</strong> Ask students: 'If you were a millionaire, what would you be doing right this second?' 'I would be flying on a private jet!' 'I would be swimming in a pool of gold!'",
    "summary": [
      "Use Past Future Continuous to describe an imaginary action in progress, or a reported plan that was supposed to be in progress.",
      "The formula is Would + be + Verb-ing.",
      "It is heavily used in 'If' sentences (conditionals) to imagine a different reality happening right now."
    ]
  },
  {
    "id": "grammar-past-future-perfect",
    "backHref": "tenses.html",
    "backLabel": "Back to Tenses",
    "title": "Past Future Perfect Tense",
    "skill": "Grammar",
    "category": "Past Future Tenses",
    "level": "Advanced",
    "description": "Express what would have been completed in an alternate past.",
    "introduction": "This is the tense of regret. When you look back at a past mistake, and imagine how things could have been different, you use the Past Future Perfect. 'If I had studied, I WOULD HAVE PASSED the test.' But you didn't study. And you didn't pass. This tense allows us to create an alternate timeline in the past, and describe the finished results of that fake timeline. Let's learn how to rewrite history.",
    "learningGoals": [
      "Use this tense for 'Type 3 Conditionals' (Imaginary Past).",
      "Master the formula: Would + have + Past Participle (V3).",
      "Express regrets and impossible past scenarios."
    ],
    "meaning": "An action was expected to be completed in the past, but it didn't happen. The reality is the opposite of the sentence.",
    "uses": [
      "Regrets: I would have called you, but I lost your number.",
      "Impossible conditions: If you had asked me, I would have helped you."
    ],
    "patterns": [
      {
        "name": "The Imaginary Past Formula",
        "formula": "Subject + would have + Past Participle (V3)",
        "explanation": "Example: I would have gone. She would have won."
      }
    ],
    "stepByStep": "How to express a past regret:<br><br>1. <strong>Identify the past failure:</strong> I drove too fast and crashed my car.<br>2. <strong>Create the imaginary condition:</strong> If I had driven slowly...<br>3. <strong>Apply the formula to the imaginary result:</strong> I + would not have + crashed.<br>4. <strong>Result:</strong> 'If I had driven slowly, I <em>would not have crashed</em>.'",
    "examples": [
      { "type": "Regret", "sentence": "I would have bought that house, but someone else beat me to it.", "note": "Reality: I didn't buy the house." },
      { "type": "Relief", "sentence": "If we had left 5 minutes later, we would have missed the train.", "note": "Reality: We didn't miss the train. Phew!" },
      { "type": "Reported Expectation", "sentence": "He told me he would have finished the painting by Friday.", "note": "Reporting a future perfect plan in the past." }
    ],
    "commonMistakes": [
      {
        "wrong": "If I had money, I would have bought it.",
        "correct": "If I had had money, I would have bought it.",
        "explanation": "For the 'imaginary past' (Type 3 conditional), the 'If' clause must use Past Perfect (had had, had known), and the result clause must use Past Future Perfect (would have bought).",
        "fix": "Match Past Perfect with Past Future Perfect."
      },
      {
        "wrong": "I would had gone.",
        "correct": "I would have gone.",
        "explanation": "'Would' is a modal! It must be followed by the base form 'have'. Never 'had' or 'has'.",
        "fix": "Always 'would have'."
      }
    ],
    "quickComparison": "<strong>Would go vs Would have gone:</strong> 'I would go to the party' (The party is tonight. I might still go, but probably not). 'I would have gone to the party' (The party was yesterday. It is impossible to go now).",
    "indonesianLearnerWarning": "Indonesian doesn't have strict conditional verb forms; 'Kalau saya tahu, saya akan datang' relies on context. In English, you MUST use 'would have + V3' to signal that the event is dead and buried in the past.",
    "practicePrompts": [
      "Complete the regret: 'I failed the test. I ___ ___ ___ (pass) if I had studied.'",
      "Correct the mistake: 'I would has helped you.'",
      "Write a sentence about something you 'would have done' yesterday if you had more free time."
    ],
    "classroomUse": "<strong>The Butterfly Effect:</strong> Create a chain of regrets. Student A: 'If I had woken up early, I would have eaten breakfast.' Student B: 'If he had eaten breakfast, he wouldn't have been hungry.' Student C: 'If he hadn't been hungry, he wouldn't have stolen the pizza.'",
    "summary": [
      "Use Past Future Perfect to describe an imaginary past result.",
      "The formula is Would + have + Past Participle (V3).",
      "It is primarily used for regrets and impossible conditions (If I had known, I would have helped).",
      "Always use 'have', never 'has' or 'had' (as the modal helper)."
    ]
  },
  {
    "id": "grammar-past-future-perfect-continuous",
    "backHref": "tenses.html",
    "backLabel": "Back to Tenses",
    "title": "Past Future Perfect Continuous",
    "skill": "Grammar",
    "category": "Past Future Tenses",
    "level": "Advanced",
    "description": "Describe the imaginary duration of an ongoing action in the past.",
    "introduction": "You have reached the final boss of English tenses. This tense is almost exclusively used in formal literature or highly complex conditional sentences. It combines everything: Past, Future, Perfect, and Continuous. It describes an ongoing action that you IMAGINED would have lasted a certain amount of time, but didn't. 'If he hadn't fired me, I WOULD HAVE BEEN WORKING there for twenty years next month.' Let's master the longest, most theoretical tense in English.",
    "learningGoals": [
      "Understand this tense as an imaginary calculation of past duration.",
      "Master the formula: Would + have + been + Verb-ing.",
      "Recognize that it is rarely used in casual conversation."
    ],
    "meaning": "In an alternate reality, an action was ongoing, and you are stating exactly how long it lasted before being interrupted.",
    "uses": [
      "Imaginary duration: If the car hadn't broken down, we would have been driving for 6 hours by now."
    ],
    "patterns": [
      {
        "name": "The Final Formula",
        "formula": "Subject + would have been + Verb-ing",
        "explanation": "Example: I would have been sleeping. They would have been running."
      }
    ],
    "stepByStep": "How to calculate imaginary duration:<br><br>1. <strong>Identify the real interruption:</strong> The alarm rang at 5 AM.<br>2. <strong>Identify the imaginary ongoing action:</strong> Sleeping.<br>3. <strong>Calculate the imaginary duration:</strong> For 8 hours.<br>4. <strong>Apply the formula:</strong> I + would have been + sleeping.<br>5. <strong>Result:</strong> 'If the alarm hadn't rung, I <em>would have been sleeping</em> for 8 hours.'",
    "examples": [
      { "type": "Imaginary Duration", "sentence": "If the rain hadn't stopped the match, they would have been playing for three hours.", "note": "Calculating the time of a fake reality." },
      { "type": "Reported Future Duration", "sentence": "He told me that by December, he would have been living there for a decade.", "note": "Reporting a Future Perfect Continuous sentence in the past." }
    ],
    "commonMistakes": [
      {
        "wrong": "I would have been known him for years.",
        "correct": "I would have known him for years.",
        "explanation": "Even at the very top level of English grammar, the Stative Verb rule cannot be broken. Never use 'knowing' in a continuous tense.",
        "fix": "Use Past Future Perfect for stative verbs."
      }
    ],
    "quickComparison": "<strong>Would have worked vs Would have been working:</strong> 'I would have worked yesterday' (Simple imaginary action). 'I would have been working all day yesterday' (Focus on the exhausting, ongoing duration of the imaginary action).",
    "indonesianLearnerWarning": "This tense is purely theoretical for most learners. While technically possible to translate, focus on mastering the simpler tenses before worrying about this one. It is a marker of absolute fluency.",
    "practicePrompts": [
      "Complete the massive formula: 'If I hadn't quit, I ___ ___ ___ ___ (study) at that university for four years by now.'",
      "Correct the mistake: 'I would had been waiting.'",
      "Write a sentence imagining how long you 'would have been sleeping' if your alarm didn't ring today."
    ],
    "classroomUse": "<strong>The Grammar Flex:</strong> Have students try to write the longest grammatically correct sentence they can, using this tense and as many adverbs and prepositional phrases as possible.",
    "summary": [
      "This tense describes the duration of an imaginary ongoing action in the past.",
      "The formula is Would + have + been + Verb-ing.",
      "It is the rarest and most complex tense in English.",
      "Congratulations, you have mastered the English Tense system!"
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
console.log('Updated 4 past future tense lessons using ESM');
