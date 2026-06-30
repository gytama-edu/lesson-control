import fs from 'fs';
import { lessons } from '../data/lessons.js';

const updated = [
  {
    "id": "grammar-past-simple",
    "backHref": "tenses.html",
    "backLabel": "Back to Tenses",
    "title": "Past Simple Tense",
    "skill": "Grammar",
    "category": "Past Tenses",
    "level": "Beginner",
    "description": "Talk about completed actions in the past.",
    "introduction": "To tell a story, you need to go backward in time. The Past Simple is the workhorse of English storytelling. It tells the listener that an action started in the past, and—most importantly—finished in the past. It is dead and gone. However, learning this tense means memorizing the two different tribes of English verbs: the regular 'ed' verbs, and the chaotic, rule-breaking irregular verbs. Let's learn how to talk about yesterday.",
    "learningGoals": [
      "Use the Past Simple for finished actions at a specific time in the past.",
      "Understand the difference between Regular (-ed) and Irregular verbs.",
      "Use 'did' to form questions and negatives."
    ],
    "meaning": "The action is 100% completed. It has no connection to the present. We often use it with finished time markers (yesterday, last year, in 1999).",
    "uses": [
      "Finished events: I watched a movie yesterday.",
      "Series of completed actions: I woke up, ate breakfast, and left."
    ],
    "patterns": [
      {
        "name": "The Regular Pattern",
        "formula": "Subject + Verb-ed",
        "explanation": "Example: I played. She worked."
      },
      {
        "name": "The Irregular Pattern",
        "formula": "Subject + Verb 2 (Irregular Form)",
        "explanation": "Example: I went (go). She saw (see). They ate (eat)."
      },
      {
        "name": "Negative Pattern",
        "formula": "Subject + didn't + Base Verb",
        "explanation": "Example: I didn't go. (Notice the main verb goes back to normal!)."
      }
    ],
    "stepByStep": "How to talk about yesterday:<br><br>1. <strong>Choose your action:</strong> 'visit' (Regular) or 'buy' (Irregular).<br>2. <strong>Change to past tense:</strong> 'visit' becomes 'visited'. 'Buy' becomes 'bought'.<br>3. <strong>Make a positive statement:</strong> 'I <em>visited</em> London. I <em>bought</em> a shirt.'<br>4. <strong>Make a negative statement:</strong> Add 'didn't' and STRIP the verb back to normal. -> 'I <em>didn't visit</em> Paris. I <em>didn't buy</em> a hat.'",
    "examples": [
      { "type": "Regular", "sentence": "They walked to the park.", "note": "Simple -ed ending." },
      { "type": "Irregular", "sentence": "He broke his leg last week.", "note": "'Break' becomes 'broke'." },
      { "type": "Negative", "sentence": "We didn't see the accident.", "note": "Notice it is NOT 'didn't saw'." },
      { "type": "Question", "sentence": "Did you finish your homework?", "note": "Uses 'Did' at the front, main verb is base form." }
    ],
    "commonMistakes": [
      {
        "wrong": "I didn't went to the party.",
        "correct": "I didn't go to the party.",
        "explanation": "This is a massive error! 'Did' is already in the past tense. It acts like a magnet, sucking the past tense out of the main verb. The main verb must be naked (base form).",
        "fix": "Never use V2 or -ed after 'did' or 'didn't'."
      },
      {
        "wrong": "He buyed a new car.",
        "correct": "He bought a new car.",
        "explanation": "Many common verbs are irregular and do not take '-ed'.",
        "fix": "You must memorize the top 50 irregular English verbs."
      }
    ],
    "quickComparison": "<strong>Past Simple vs Present Perfect:</strong> 'I lived in Japan for a year' (I don't live there now, it's finished). 'I have lived in Japan for a year' (I still live there now).",
    "indonesianLearnerWarning": "In Indonesian, you just say 'Saya pergi kemarin' (I go yesterday). In English, 'yesterday' is not enough. You MUST change the verb to 'went'.",
    "practicePrompts": [
      "Change to past tense: 'We (eat) dinner.' -> 'We ___ dinner.'",
      "Make this negative: 'She called me.' -> 'She ___ ___ me.'",
      "Correct the mistake: 'Did you watched the movie?'",
      "Write a sentence about what you did last weekend."
    ],
    "classroomUse": "<strong>The Weekend Recap:</strong> Go around the room. Student A says 'I watched TV.' Student B must say 'He watched TV, and I ate pizza.' Student C must say 'He watched TV, she ate pizza, and I slept.' Focus on correct V2 pronunciation.",
    "summary": [
      "Use Past Simple for finished actions in the past.",
      "Regular verbs end in '-ed'. Irregular verbs must be memorized.",
      "Use 'didn't' for negatives and 'Did...?' for questions.",
      "Always use the BASE VERB after 'did' or 'didn't' (I didn't go, NOT I didn't went)."
    ]
  },
  {
    "id": "grammar-past-continuous",
    "backHref": "tenses.html",
    "backLabel": "Back to Tenses",
    "title": "Past Continuous Tense",
    "skill": "Grammar",
    "category": "Past Tenses",
    "level": "Intermediate",
    "description": "Set the scene with actions that were in progress in the past.",
    "introduction": "Imagine watching a movie. The hero walks into a room. What is happening in the background? People ARE dancing. Music IS playing. Now, imagine telling a friend about that movie the next day. You need to push that 'video feed' into the past. 'People WERE dancing. Music WAS playing.' We use the Past Continuous to describe the background scene, or to describe an ongoing action that was suddenly interrupted by a single event. Let's set the scene.",
    "learningGoals": [
      "Use the Past Continuous for actions that were 'in progress' at a specific time in the past.",
      "Use it to set the background scene in a story.",
      "Learn how to use 'while' and 'when' to interrupt a continuous action."
    ],
    "meaning": "The action was happening around a particular time in the past. It started before that time, and probably continued after it. It is the 'background' of a story.",
    "uses": [
      "In progress: I was sleeping at 10 PM yesterday.",
      "Interrupted action: I was sleeping WHEN the phone rang.",
      "Parallel actions: I was cooking WHILE he was cleaning."
    ],
    "patterns": [
      {
        "name": "The Past Continuous Formula",
        "formula": "Subject + was/were + Verb-ing",
        "explanation": "Example: I was working. They were sleeping."
      },
      {
        "name": "The Interruption Pattern",
        "formula": "Past Continuous (Background) + WHEN + Past Simple (Interruption)",
        "explanation": "Example: I was taking a shower WHEN the power went out."
      }
    ],
    "stepByStep": "How to interrupt an action:<br><br>1. <strong>Set the long, ongoing background scene:</strong> 'We were driving.'<br>2. <strong>Identify the short, sudden event:</strong> 'A deer jumped out.'<br>3. <strong>Connect them with WHEN:</strong> 'We <em>were driving</em> WHEN a deer <em>jumped</em> out.'<br>4. <strong>Result:</strong> A perfect storytelling sentence combining two past tenses.",
    "examples": [
      { "type": "In Progress", "sentence": "At 8 PM last night, I was watching a movie.", "note": "I started before 8 PM, and was still watching at 8 PM." },
      { "type": "Interruption", "sentence": "He was reading a book when the doorbell rang.", "note": "Long action interrupted by a short action." },
      { "type": "Parallel (While)", "sentence": "While I was studying, my brother was playing video games.", "note": "Two long actions happening at the same time." },
      { "type": "Negative", "sentence": "I wasn't listening to the teacher.", "note": "I was distracted." }
    ],
    "commonMistakes": [
      {
        "wrong": "When I was walking home, it was starting to rain.",
        "correct": "While I was walking home, it started to rain.",
        "explanation": "The rain is the sudden interruption (Past Simple). The walking is the long background action (Past Continuous). Don't use continuous for the sudden interruption.",
        "fix": "Long action = continuous. Short action = simple."
      },
      {
        "wrong": "I was knowing the answer yesterday.",
        "correct": "I knew the answer yesterday.",
        "explanation": "Just like Present Continuous, you CANNOT use stative verbs (know, want, like) in the Past Continuous.",
        "fix": "Use Past Simple for stative verbs."
      }
    ],
    "quickComparison": "<strong>When vs While:</strong> We usually put 'While' in front of the long ongoing action (While I was sleeping...). We usually put 'When' in front of the short sudden action (...when the phone rang).",
    "indonesianLearnerWarning": "Indonesian uses 'sedang' for this too, just with a past time marker ('Kemarin saya sedang makan'). In English, you change the 'am/is/are' to 'was/were'. It's a very logical step!",
    "practicePrompts": [
      "Complete the sentence: 'I ___ ___ (cook) dinner when the fire alarm ___ (go) off.'",
      "Choose was or were: 'They ___ waiting for the bus.'",
      "Correct the mistake: 'While I cooked, my mom called.'",
      "Write a sentence about what you were doing yesterday at 5 PM."
    ],
    "classroomUse": "<strong>The Alibi Game (Past):</strong> The 'murder' happened exactly at midnight. Students must explain what they were doing at that exact moment to prove their innocence: 'At midnight, I was walking my dog!'",
    "summary": [
      "Use Past Continuous for ongoing background actions in the past.",
      "The formula is was/were + Verb-ing.",
      "It is often combined with Past Simple to show an interruption (I was sleeping when the phone rang).",
      "Use 'While' for the long action, and 'When' for the short interruption."
    ]
  },
  {
    "id": "grammar-past-perfect",
    "backHref": "tenses.html",
    "backLabel": "Back to Tenses",
    "title": "Past Perfect Tense",
    "skill": "Grammar",
    "category": "Past Tenses",
    "level": "Advanced",
    "description": "Learn 'the past of the past' for complex storytelling.",
    "introduction": "When you tell a story, you usually tell events in order. 'I woke up. I ate breakfast. I left.' You just use Past Simple. But what if you get to work, and realize you forgot to tell your coworker about something that happened BEFORE you woke up? You can't just use Past Simple, or they'll think it just happened. You have to go deeper into the past. We call this 'The Past of the Past'. It's the Past Perfect tense, and it is the key to advanced English storytelling.",
    "learningGoals": [
      "Understand the Past Perfect as 'the past before another past action'.",
      "Master the formula: Had + Past Participle (V3).",
      "Learn to use it with time words like 'already', 'before', and 'by the time'."
    ],
    "meaning": "The Past Perfect simply shows that one action finished BEFORE another action in the past. It establishes a clear timeline.",
    "uses": [
      "The First Event: When I arrived at the station (Event 2), the train HAD LEFT (Event 1)."
    ],
    "patterns": [
      {
        "name": "The Past Perfect Formula",
        "formula": "Subject + Had + Past Participle (V3)",
        "explanation": "Example: I had eaten. She had left. We had finished."
      },
      {
        "name": "The Timeline Pattern",
        "formula": "Past Simple (Event 2) + because/after + Past Perfect (Event 1)",
        "explanation": "Example: I failed the test (Event 2) because I had not studied (Event 1)."
      }
    ],
    "stepByStep": "How to tell a 'Past of the Past' story:<br><br>1. <strong>Identify the two past events:</strong> Event A: My friend ate all the pizza (7 PM). Event B: I arrived home (8 PM).<br>2. <strong>Start with the more recent event (Past Simple):</strong> 'When I arrived home...'<br>3. <strong>Describe the older event (Past Perfect):</strong> '...my friend <em>had eaten</em> all the pizza.'<br>4. <strong>Result:</strong> 'When I arrived home, my friend had eaten all the pizza.' (I was hungry and angry!).",
    "examples": [
      { "type": "Missing an Event", "sentence": "By the time we got to the cinema, the movie had already started.", "note": "The movie starting is the oldest event." },
      { "type": "Giving a Reason", "sentence": "I couldn't buy the shoes because I had lost my wallet.", "note": "Losing the wallet caused the inability to buy." },
      { "type": "Life Experience (in the past)", "sentence": "She didn't want to go to Paris because she had been there twice before.", "note": "Past experience before the past decision." },
      { "type": "Negative", "sentence": "I didn't know who he was. I hadn't met him before.", "note": "'Had not'." }
    ],
    "commonMistakes": [
      {
        "wrong": "I woke up, I had eaten breakfast, and I went to work.",
        "correct": "I woke up, I ate breakfast, and I went to work.",
        "explanation": "Do NOT overuse the Past Perfect! If you are telling events in chronological order (1, 2, 3), just use Past Simple for all of them. Only use Past Perfect when you jump backward in time.",
        "fix": "Only use Past Perfect to clarify which of two events happened first."
      },
      {
        "wrong": "Before I arrived, he has left.",
        "correct": "Before I arrived, he had left.",
        "explanation": "Do not mix Present Perfect (has) into a past timeline. You must use 'had'.",
        "fix": "Always use 'had'."
      }
    ],
    "quickComparison": "<strong>Present Perfect vs Past Perfect:</strong> 'I have eaten' (Present Perfect: I am full RIGHT NOW). 'I had eaten' (Past Perfect: I was full AT THAT TIME YESTERDAY).",
    "indonesianLearnerWarning": "Indonesian uses 'sudah' for both Present Perfect and Past Perfect. In English, you must change 'have' to 'had' when establishing that the 'already finished' action belongs to a past story.",
    "practicePrompts": [
      "Combine these: Event 1: The rain stopped. Event 2: We went outside. -> 'When we went outside, the rain ___ ___.'",
      "Correct the mistake: 'I couldn't pay because I have forgotten my wallet.'",
      "Write a sentence about why you failed a test using 'because I hadn't...'"
    ],
    "classroomUse": "<strong>The Excuse Generator:</strong> The teacher gives a bad situation ('Why were you late for work yesterday?'). The student must invent a complex excuse using the Past Perfect ('I was late because someone had stolen my car!').",
    "summary": [
      "Use Past Perfect to describe the 'Past of the Past' (Event 1).",
      "The formula is Had + Past Participle (V3).",
      "Use it to clarify the timeline when you mention a newer past event (Past Simple) and an older past event (Past Perfect).",
      "Do not use it if you are telling a story in chronological order (1, 2, 3)."
    ]
  },
  {
    "id": "grammar-past-perfect-continuous",
    "backHref": "tenses.html",
    "backLabel": "Back to Tenses",
    "title": "Past Perfect Continuous Tense",
    "skill": "Grammar",
    "category": "Past Tenses",
    "level": "Advanced",
    "description": "Express the duration of an action before another past event.",
    "introduction": "We know the Past Perfect is the 'Past of the Past'. We know the Continuous aspect focuses on 'Duration' and '-ing' verbs. What happens when we combine them? We get the Past Perfect Continuous. This is a very specific, advanced tense used to explain WHY something looked the way it did in the past. If you walked into a room yesterday and your friend was covered in sweat, you use this tense to explain what they HAD BEEN doing leading up to that moment. Let's learn the longest verb phrase in English.",
    "learningGoals": [
      "Use this tense to emphasize HOW LONG an action was happening before another past event.",
      "Understand how it provides a reason or evidence for a past situation.",
      "Master the formula: Had + been + Verb-ing."
    ],
    "meaning": "An action was ongoing in the past, right up until another event in the past happened. It emphasizes the duration and the visible results of that effort.",
    "uses": [
      "Cause of a past state: He was tired because he had been running.",
      "Duration before an event: I had been waiting for an hour when the bus finally arrived."
    ],
    "patterns": [
      {
        "name": "The Perfect Continuous Past",
        "formula": "Subject + had + been + Verb-ing",
        "explanation": "Example: I had been working. She had been studying."
      }
    ],
    "stepByStep": "How to explain a past situation:<br><br>1. <strong>State the past situation:</strong> 'The streets were wet.'<br>2. <strong>Identify the ongoing cause:</strong> Raining for hours.<br>3. <strong>Apply the formula:</strong> It + had been + raining.<br>4. <strong>Result:</strong> 'The streets were wet because it <em>had been raining</em>.'",
    "examples": [
      { "type": "Duration Before Event", "sentence": "They had been talking for over an hour before Tony arrived.", "note": "Emphasizes the long wait." },
      { "type": "Cause of Past State", "sentence": "She failed the test because she hadn't been attending classes.", "note": "The ongoing lack of action caused the failure." },
      { "type": "Visible Evidence", "sentence": "His hands were covered in oil because he had been fixing his car.", "note": "The action caused the messy hands." }
    ],
    "commonMistakes": [
      {
        "wrong": "I was waiting for an hour when the bus arrived.",
        "correct": "I had been waiting for an hour when the bus arrived.",
        "explanation": "While 'was waiting' is understandable, grammatically, if you mention the DURATION (for an hour) leading up to a past event, you must use the Perfect Continuous.",
        "fix": "Duration + Past Interruption = Had been -ing."
      },
      {
        "wrong": "He had been knowing her for years before they married.",
        "correct": "He had known her for years before they married.",
        "explanation": "The Stative Verb rule strikes again! Never use stative verbs (know, love, believe) in continuous tenses, even this one.",
        "fix": "Use Past Perfect (had known) for stative verbs."
      }
    ],
    "quickComparison": "<strong>Present Perfect Continuous vs Past Perfect Continuous:</strong> 'I am tired because I HAVE been working' (Tired RIGHT NOW). 'I was tired because I HAD been working' (Tired YESTERDAY).",
    "indonesianLearnerWarning": "This tense is rarely translated directly into Indonesian. You usually just use past time markers and context. In English, using 'had been -ing' is a great way to sound highly fluent and precise when telling stories.",
    "practicePrompts": [
      "Explain why the boy was out of breath: 'He was out of breath because he ___ ___ ___ (run).'",
      "Complete the timeline: 'We ___ ___ ___ (drive) for six hours when the car finally broke down.'",
      "Correct the mistake: 'I had been wanting a dog for years before I got one.' (Hint: 'Want' is a stative verb)."
    ],
    "classroomUse": "<strong>The Detective's Deduction:</strong> Give students a past scenario ('When the police entered the house, the kitchen was filled with smoke'). They must invent the cause using the target tense ('Someone had been burning dinner!').",
    "summary": [
      "Use Past Perfect Continuous to show HOW LONG an action happened before another past event.",
      "The formula is Had + been + Verb-ing.",
      "It is perfect for explaining the cause of a past situation (He was wet because he had been swimming).",
      "Do not use stative verbs (know, want, like) in this tense."
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
console.log('Updated 4 past tense lessons using ESM');
