import fs from 'fs';
import { lessons } from '../data/lessons.js';

const updated = [
  {
    "id": "grammar-future-simple",
    "backHref": "tenses.html",
    "backLabel": "Back to Tenses",
    "title": "Future Simple Tense",
    "skill": "Grammar",
    "category": "Future Tenses",
    "level": "Beginner",
    "description": "Make predictions, promises, and spontaneous decisions.",
    "introduction": "Unlike the past or present, the future does not exist yet. It is entirely in our minds. Because of this, English does not have one single 'Future' verb ending (like -ed for the past). Instead, we use helper words like 'Will' and 'Going to' to build the future. The trick is knowing WHICH helper to use. 'Will' and 'Going to' are not always the same! Let's learn how to predict the future correctly.",
    "learningGoals": [
      "Use 'Will' for spontaneous decisions, promises, and uncertain predictions.",
      "Use 'Be going to' for planned events and predictions based on present evidence.",
      "Understand that the main verb never changes form in the future tense."
    ],
    "meaning": "'Will' implies a sudden thought, a promise, or a guess. 'Going to' implies a solid plan or a conclusion based on obvious evidence right now.",
    "uses": [
      "Spontaneous Decision (Will): 'We need milk.' -> 'I will buy some.'",
      "Planned Action (Going to): 'I am going to buy milk after work.' (I planned this yesterday).",
      "Evidence Prediction (Going to): 'Look at those black clouds, it is going to rain.'"
    ],
    "patterns": [
      {
        "name": "The Will Pattern",
        "formula": "Subject + Will + Base Verb",
        "explanation": "Example: I will go. She will see. (Negative: will not / won't)."
      },
      {
        "name": "The Going To Pattern",
        "formula": "Subject + am/is/are + going to + Base Verb",
        "explanation": "Example: I am going to go. She is going to see."
      }
    ],
    "stepByStep": "How to choose your future:<br><br>1. <strong>Are you deciding right this second?</strong> Use <em>Will</em>. -> 'The phone is ringing. I <em>will</em> answer it.'<br>2. <strong>Did you decide yesterday?</strong> Use <em>Going to</em>. -> 'I <em>am going to</em> visit my mom this weekend.'<br>3. <strong>Are you making a promise?</strong> Use <em>Will</em>. -> 'I <em>will</em> always love you.'<br>4. <strong>Are you predicting based on what you see?</strong> Use <em>Going to</em>. -> 'He is running too fast, he <em>is going to</em> fall!'",
    "examples": [
      { "type": "Will (Decision)", "sentence": "I'll have the chicken, please.", "note": "Deciding at a restaurant." },
      { "type": "Will (Prediction)", "sentence": "I think robots will rule the world one day.", "note": "A guess about the distant future." },
      { "type": "Going To (Plan)", "sentence": "We are going to buy a house next year.", "note": "We have been saving money for this plan." },
      { "type": "Going To (Evidence)", "sentence": "Watch out! You are going to drop those plates!", "note": "I can see the plates slipping." }
    ],
    "commonMistakes": [
      {
        "wrong": "I will to go.",
        "correct": "I will go.",
        "explanation": "'Will' is a modal verb. It NEVER takes 'to'.",
        "fix": "Will + naked verb."
      },
      {
        "wrong": "I going to sleep.",
        "correct": "I am going to sleep.",
        "explanation": "You must include the 'Be' verb (am/is/are) when using 'going to'.",
        "fix": "Always use am/is/are + going to."
      },
      {
        "wrong": "I won't to do it.",
        "correct": "I won't do it.",
        "explanation": "'Won't' is the contraction of 'will not'. No 'to' allowed.",
        "fix": "Won't + naked verb."
      }
    ],
    "quickComparison": "<strong>Will vs Present Continuous:</strong> For solid, confirmed plans (like flights), native speakers actually prefer the Present Continuous: 'I am flying to London tomorrow' sounds more certain than 'I am going to fly to London'.",
    "indonesianLearnerWarning": "Indonesian uses 'akan' for both 'will' and 'going to'. This means you must actively learn to distinguish between spontaneous decisions (will) and planned actions (going to) in English.",
    "practicePrompts": [
      "Choose Will or Going to: The phone rings. You say, 'I ___ answer it.'",
      "Choose Will or Going to: You bought tickets last week. 'We ___ ___ ___ see a concert tonight.'",
      "Correct the mistake: 'He will goes to the store.'",
      "Make a prediction about the year 2050 using 'will'."
    ],
    "classroomUse": "<strong>The Fortune Teller vs The Planner:</strong> One student plays a fortune teller making wild guesses ('You will marry a billionaire'). Another student plays a strict planner checking their calendar ('I am going to marry John next Tuesday').",
    "summary": [
      "Use 'Will' for sudden decisions, promises, and guesses about the future.",
      "Use 'Be going to' for planned actions and predictions based on visual evidence.",
      "'Will' is a modal verb, so it never takes 'to' or 's'.",
      "You must use am/is/are with 'going to'."
    ]
  },
  {
    "id": "grammar-future-continuous",
    "backHref": "tenses.html",
    "backLabel": "Back to Tenses",
    "title": "Future Continuous Tense",
    "skill": "Grammar",
    "category": "Future Tenses",
    "level": "Intermediate",
    "description": "Describe actions that will be in progress at a specific time in the future.",
    "introduction": "Imagine it is 8:00 PM tomorrow. What will you be doing exactly at that moment? You won't just 'start' an action, the action will already be in progress. You will be in the middle of it. We use the Future Continuous to project ourselves into the future and imagine an ongoing background scene. 'At 8:00 PM tomorrow, I will be eating dinner.' Let's learn how to describe future progress.",
    "learningGoals": [
      "Use the Future Continuous to talk about actions in progress at a specific future time.",
      "Master the formula: Will + be + Verb-ing.",
      "Learn to use it for polite inquiries about someone's plans."
    ],
    "meaning": "An action will start before a specific future time, and will continue after it. You will be 'in the middle' of doing it.",
    "uses": [
      "Future action in progress: Don't call me at 9 PM. I will be sleeping.",
      "Polite inquiry: Will you be using the car tomorrow? (Asking about a plan without demanding anything)."
    ],
    "patterns": [
      {
        "name": "The Future Continuous Formula",
        "formula": "Subject + will be + Verb-ing",
        "explanation": "Example: I will be waiting. They will be playing."
      }
    ],
    "stepByStep": "How to describe an ongoing future action:<br><br>1. <strong>Pick a specific future time:</strong> Tomorrow at 10 AM.<br>2. <strong>Imagine what action will be in progress:</strong> Flying to New York.<br>3. <strong>Apply the formula (will be + ing):</strong> I + will be + flying.<br>4. <strong>Result:</strong> 'Tomorrow at 10 AM, I <em>will be flying</em> to New York.'",
    "examples": [
      { "type": "In Progress", "sentence": "This time next week, I will be sitting on a beach.", "note": "Projecting into a future ongoing state." },
      { "type": "Interruption", "sentence": "When you arrive tonight, we will be eating dinner.", "note": "We will already be in the middle of eating when you arrive." },
      { "type": "Polite Question", "sentence": "Will you be going to the store later?", "note": "A very polite way to ask about someone's plans, often to ask for a favor." }
    ],
    "commonMistakes": [
      {
        "wrong": "I will being working tomorrow.",
        "correct": "I will be working tomorrow.",
        "explanation": "Because 'will' is a modal, the next verb MUST be the base form. It must always be 'be'. Never 'am', 'is', 'are', or 'being'.",
        "fix": "Always use 'will be'."
      },
      {
        "wrong": "At 8 PM, I will work.",
        "correct": "At 8 PM, I will be working.",
        "explanation": "If you say 'I will work at 8 PM', it implies you will START working at exactly 8 PM. If you mean you are in the middle of working at 8 PM, you must use the continuous tense.",
        "fix": "Use continuous for actions in progress at a specific time."
      }
    ],
    "quickComparison": "<strong>Future Simple vs Continuous:</strong> 'I will call you at 6' (The phone rings exactly at 6). 'I will be calling you around 6' (I plan to make the call sometime in that time window).",
    "indonesianLearnerWarning": "In Indonesian, you would say 'Besok jam 8 saya akan sedang tidur'. This translates very well to 'will (akan) be (sedang) sleeping'. Keep that logic!",
    "practicePrompts": [
      "Turn this into Future Continuous: 'I (wait) for you at the station at 5 PM.' -> 'I ___ ___ ___ for you...'",
      "Correct the mistake: 'She will is studying tomorrow morning.'",
      "Write a polite question asking if someone will use the printer later."
    ],
    "classroomUse": "<strong>The Time Machine:</strong> Draw a clock set to a random time tomorrow. Ask a student: 'It is 3 PM tomorrow. What will you be doing?' The student must answer with 'I will be...' based on their actual schedule.",
    "summary": [
      "Use Future Continuous for actions in progress at a specific time in the future.",
      "The formula is Will + be + Verb-ing.",
      "It is often used to describe what you will be in the middle of doing.",
      "It is also used for very polite questions about other people's plans."
    ]
  },
  {
    "id": "grammar-future-perfect",
    "backHref": "tenses.html",
    "backLabel": "Back to Tenses",
    "title": "Future Perfect Tense",
    "skill": "Grammar",
    "category": "Future Tenses",
    "level": "Advanced",
    "description": "Talk about actions that will be finished BEFORE a specific time in the future.",
    "introduction": "You are building a house. It takes time. But you know that next December, the work will be finished. How do you express this? You want to look into the future, and then look backward at a finished action! We use the Future Perfect to say 'By this time in the future, the action will already be 100% complete.' It is the tense of deadlines and accomplishments. Let's learn how to sound like a visionary project manager.",
    "learningGoals": [
      "Understand the Future Perfect as an action completed BEFORE a future point.",
      "Master the formula: Will + have + Past Participle (V3).",
      "Learn to use the keyword 'By' (By tomorrow, By 2030)."
    ],
    "meaning": "You are establishing a future deadline, and declaring that an action will be totally finished before that deadline arrives.",
    "uses": [
      "Deadlines: I will have finished the report by Friday.",
      "Future accomplishments: By the time I am 30, I will have bought a house."
    ],
    "patterns": [
      {
        "name": "The Future Perfect Formula",
        "formula": "Subject + will have + Past Participle (V3)",
        "explanation": "Example: I will have finished. She will have left."
      },
      {
        "name": "The 'By' Pattern",
        "formula": "By [Time], Subject + will have + V3",
        "explanation": "Example: By Friday, we will have completed the project."
      }
    ],
    "stepByStep": "How to set a future deadline:<br><br>1. <strong>Set the deadline (By):</strong> 'By 5:00 PM.'<br>2. <strong>Identify the action to complete:</strong> 'Clean the house.'<br>3. <strong>Apply the formula (will have + V3):</strong> I + will have + cleaned.<br>4. <strong>Result:</strong> 'By 5:00 PM, I <em>will have cleaned</em> the house.' (If you arrive at 5:01 PM, the house is clean).",
    "examples": [
      { "type": "Deadline", "sentence": "I will have cooked dinner by the time you get home.", "note": "Dinner will be ready before you arrive." },
      { "type": "Future State", "sentence": "By next year, they will have been married for 10 years.", "note": "Calculating a duration up to a future point." },
      { "type": "Negative", "sentence": "I won't have saved enough money by Christmas.", "note": "The action will NOT be complete before the deadline." }
    ],
    "commonMistakes": [
      {
        "wrong": "She will has finished by tomorrow.",
        "correct": "She will have finished by tomorrow.",
        "explanation": "The 'Will' rule strikes again! Modal verbs must be followed by the base form of the verb. Therefore, it is ALWAYS 'will have', never 'will has'.",
        "fix": "Always use 'will have', even for he/she/it."
      },
      {
        "wrong": "I will finish the report by Friday.",
        "correct": "I will have finished the report by Friday.",
        "explanation": "While 'will finish' is understood, 'will have finished' is grammatically accurate when using 'By [Time]' to stress completion.",
        "fix": "Use Future Perfect with 'by' deadlines."
      }
    ],
    "quickComparison": "<strong>Will do vs Will have done:</strong> 'I will read the book on Sunday' (I will start reading it on Sunday). 'I will have read the book by Sunday' (I will finish reading it before Sunday).",
    "indonesianLearnerWarning": "Indonesian uses 'akan sudah' (will already). This translates perfectly! 'Akan (will) sudah (have) selesai (finished)'. Just remember the V3 form.",
    "practicePrompts": [
      "Complete the sentence: 'By the time I am 40, I ___ ___ ___ (travel) to ten countries.'",
      "Correct the mistake: 'He will has eaten all the food by 8 PM.'",
      "Write a sentence about something you 'will have finished' by the end of this year."
    ],
    "classroomUse": "<strong>The Five-Year Plan:</strong> Ask students to imagine their life in exactly 5 years. They must write three sentences starting with 'By [Year], I will have...' (e.g., 'By 2030, I will have graduated university').",
    "summary": [
      "Use Future Perfect to describe an action that will be completed BEFORE a future deadline.",
      "The formula is Will + have + Past Participle (V3).",
      "The word 'By' (By tomorrow, By next year) is the most common trigger word for this tense.",
      "Always use 'will have', never 'will has'."
    ]
  },
  {
    "id": "grammar-future-perfect-continuous",
    "backHref": "tenses.html",
    "backLabel": "Back to Tenses",
    "title": "Future Perfect Continuous Tense",
    "skill": "Grammar",
    "category": "Future Tenses",
    "level": "Advanced",
    "description": "Emphasize the duration of an ongoing action up to a future point.",
    "introduction": "This is the rarest and longest tense in English! Imagine you started working at a company in 2020. Next year is 2025. You want to celebrate your anniversary. You are combining duration (continuous), completion up to a point (perfect), and looking into the future (future). 'Next year, I will have been working here for 5 years.' This tense is entirely about calculating the length of an ongoing action at a specific point in the future. Let's do some time math.",
    "learningGoals": [
      "Use this tense to calculate the duration of an action up to a future deadline.",
      "Master the massive formula: Will + have + been + Verb-ing.",
      "Understand why this tense is so rare in everyday speech."
    ],
    "meaning": "You project yourself into the future, look back at an ongoing action, and state exactly how long it has been happening.",
    "uses": [
      "Anniversaries and milestones: By next month, we will have been dating for a year.",
      "Calculating exhaustion: By the time we arrive, I will have been driving for 10 hours."
    ],
    "patterns": [
      {
        "name": "The Ultimate Formula",
        "formula": "Subject + will have been + Verb-ing",
        "explanation": "Example: I will have been studying. They will have been playing."
      }
    ],
    "stepByStep": "How to calculate future duration:<br><br>1. <strong>Identify the future point:</strong> 'By 6 PM.'<br>2. <strong>Identify the ongoing action:</strong> 'Wait for the train.'<br>3. <strong>Calculate the duration:</strong> 'For three hours.'<br>4. <strong>Apply the massive formula:</strong> 'By 6 PM, I <em>will have been waiting</em> for three hours!'",
    "examples": [
      { "type": "Milestone", "sentence": "By December, I will have been learning English for exactly two years.", "note": "Celebrating a duration." },
      { "type": "Exhaustion", "sentence": "When she finally lands, she will have been traveling for 24 hours.", "note": "Emphasizing how tiring it will be." }
    ],
    "commonMistakes": [
      {
        "wrong": "By next year, I will be working here for ten years.",
        "correct": "By next year, I will have been working here for ten years.",
        "explanation": "If you mention the DURATION ('for ten years'), you must use the Perfect form ('have been'), not just the continuous form.",
        "fix": "Duration + Future = Future Perfect Continuous."
      },
      {
        "wrong": "By tomorrow, I will have been knowing him for a year.",
        "correct": "By tomorrow, I will have known him for a year.",
        "explanation": "Even in the rarest tense in English, the Stative Verb rule remains supreme! Never use stative verbs (know, like, want) in continuous tenses.",
        "fix": "Use Future Perfect instead."
      }
    ],
    "quickComparison": "<strong>Future Continuous vs Future Perfect Continuous:</strong> 'At 5 PM, I will be working' (Focus on the action happening at that moment). 'At 5 PM, I will have been working for 8 hours' (Focus on the exhausting duration of the action up to that moment).",
    "indonesianLearnerWarning": "This tense is almost never used in Indonesian; you would just use simple future and a time word. In English, it is the ultimate flex of grammatical knowledge, used mostly in professional or dramatic contexts.",
    "practicePrompts": [
      "Complete the sentence: 'By next Friday, we ___ ___ ___ ___ (live) in this house for exactly a decade.'",
      "Correct the mistake: 'She will has been waiting for hours.'",
      "Write a sentence calculating how long you 'will have been studying' English by the end of this year."
    ],
    "classroomUse": "<strong>The Anniversary Calculator:</strong> Have students calculate an upcoming milestone. 'I started playing guitar in 2022. So, by 2030, I will have been playing guitar for 8 years!'",
    "summary": [
      "Use Future Perfect Continuous to state how long an ongoing action will have lasted by a certain future time.",
      "The formula is Will + have + been + Verb-ing.",
      "It is almost always used with time phrases like 'for [duration]' and 'by [future time]'.",
      "It is the longest verb phrase in the English language."
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
console.log('Updated 4 future tense lessons using ESM');
