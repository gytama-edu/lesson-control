import fs from 'fs';
import { lessons } from '../data/lessons.js';

const updated = [
  {
    "id": "grammar-tenses-master-guide",
    "backHref": "tenses.html",
    "backLabel": "Back to Tenses",
    "title": "Tenses Master Guide",
    "skill": "Grammar",
    "category": "Tenses Pathway",
    "level": "Beginner",
    "description": "Understand how English handles time and action.",
    "introduction": "Welcome to the world of English Tenses! In some languages, verbs don't change based on time. You just say 'I eat yesterday' or 'I eat tomorrow.' English is completely different. In English, the verb itself changes its shape to tell you exactly WHEN an action happened, and exactly HOW the action happened (Was it a quick event? Was it a long process? Did it finish?). This master guide will show you the basic map of time in English.",
    "learningGoals": [
      "Understand the difference between Time (Past, Present, Future) and Aspect (Simple, Continuous, Perfect).",
      "Learn why English has 12 main tenses (and 16 if we include past future).",
      "Recognize how helper verbs (do, be, have) build the tenses."
    ],
    "meaning": "A 'tense' is a grammatical structure that shows the time of an action. An 'aspect' shows the nature of the action (e.g., whether it is ongoing or completed).",
    "uses": [
      "Navigating time accurately in all English communication."
    ],
    "patterns": [
      {
        "name": "The Time Axis",
        "formula": "Past (Before) | Present (Now) | Future (Later)",
        "explanation": "These are the three main time zones in English."
      },
      {
        "name": "The Aspect Axis",
        "formula": "Simple (Fact) | Continuous (Ongoing) | Perfect (Completed before something else)",
        "explanation": "These combine with the time zones to create all the tenses."
      }
    ],
    "stepByStep": "How to think about English verbs:<br><br>1. <strong>Ask 'When?':</strong> Did this happen in the past, present, or future?<br>2. <strong>Ask 'How?':</strong> Is it a simple fact? (Simple). Is it an ongoing video? (Continuous). Is it a bridge connecting two times? (Perfect).<br>3. <strong>Combine them:</strong> Past + Continuous = Past Continuous (I was eating). Present + Perfect = Present Perfect (I have eaten).",
    "examples": [
      { "type": "Present Simple", "sentence": "I eat.", "note": "A regular habit." },
      { "type": "Past Simple", "sentence": "I ate.", "note": "A finished event." },
      { "type": "Future Simple", "sentence": "I will eat.", "note": "A future event." },
      { "type": "Continuous Aspect", "sentence": "I am eating.", "note": "An ongoing process right now." }
    ],
    "commonMistakes": [
      {
        "wrong": "I yesterday play football.",
        "correct": "I played football yesterday.",
        "explanation": "You cannot rely on the time word ('yesterday') alone. The verb itself MUST change to the past tense ('played').",
        "fix": "Always change the verb to match the time."
      }
    ],
    "quickComparison": "<strong>Simple vs Continuous:</strong> 'Simple' tenses are like photographs (a single flash). 'Continuous' tenses are like video recordings (showing the action happening over a period of time).",
    "indonesianLearnerWarning": "Indonesian uses time markers (sudah, akan, sedang) but the verb never changes (makan). In English, the verb almost always changes its form (eat, ate, eaten, eating). This requires active memorization of verb forms.",
    "practicePrompts": [
      "Change this verb to the past: 'I walk.' -> 'I ___.'",
      "Change this verb to a continuous process: 'I read.' -> 'I ___ ___.'",
      "Identify the tense: 'They will go to the store.'"
    ],
    "classroomUse": "<strong>The Tense Grid:</strong> Draw a 3x3 grid on the board (Past/Present/Future on top, Simple/Continuous/Perfect on the side). Have students place the sentence 'I eat an apple' into every box on the grid.",
    "summary": [
      "English verbs change shape to show Time and Aspect.",
      "Time: Past, Present, Future.",
      "Aspect: Simple (facts), Continuous (ongoing actions), Perfect (completed actions).",
      "You cannot just use time words (like 'yesterday')—you MUST conjugate the verb."
    ]
  },
  {
    "id": "grammar-present-simple",
    "backHref": "tenses.html",
    "backLabel": "Back to Tenses",
    "title": "Present Simple Tense",
    "skill": "Grammar",
    "category": "Present Tenses",
    "level": "Beginner",
    "description": "Master habits, routines, and universal facts.",
    "introduction": "When you want to talk about your daily life, your habits, or facts that are always true, you use the Present Simple tense. This is the most common tense in English. However, it has one very sneaky rule that catches almost every learner: the 'Third Person S'. If you are talking about 'he', 'she', or 'it', the verb must change. Let's master the foundation of English conversation.",
    "learningGoals": [
      "Use the Present Simple for habits, routines, and permanent facts.",
      "Master the 'Third Person S' rule (He/She/It).",
      "Use 'do/does' for questions and 'don't/doesn't' for negative sentences."
    ],
    "meaning": "The Present Simple does NOT mean an action is happening right this exact second. It means the action happens regularly (every day, every week) or is permanently true.",
    "uses": [
      "Habits: I wake up at 7 AM.",
      "Routines: She goes to the gym on Mondays.",
      "Facts: Water boils at 100 degrees."
    ],
    "patterns": [
      {
        "name": "The Base Pattern (I, You, We, They)",
        "formula": "Subject + Base Verb",
        "explanation": "Example: I play tennis. They work hard."
      },
      {
        "name": "The 'S' Pattern (He, She, It)",
        "formula": "Subject + Verb-s/es",
        "explanation": "Example: He plays tennis. She works hard. (Crucial rule!)."
      },
      {
        "name": "Negative Pattern",
        "formula": "Subject + don't/doesn't + Base Verb",
        "explanation": "Example: I don't play. He doesn't play."
      }
    ],
    "stepByStep": "How to build a Present Simple sentence:<br><br>1. <strong>Identify the subject:</strong> 'My brother' (He).<br>2. <strong>Identify the verb:</strong> 'watch'.<br>3. <strong>Apply the rule:</strong> Because the subject is 'He', we must add 's' or 'es' to the verb. -> 'watches'.<br>4. <strong>Result:</strong> 'My brother <em>watches</em> TV every night.'<br>5. <strong>Make it negative:</strong> Use 'doesn't', and strip the 's' from the main verb. -> 'My brother <em>doesn't watch</em> TV.'",
    "examples": [
      { "type": "Habit", "sentence": "I drink coffee every morning.", "note": "A regular daily action." },
      { "type": "Fact", "sentence": "The sun rises in the east.", "note": "Always true. Notice the 's' on 'rises' because 'sun' is an 'it'." },
      { "type": "Negative (I/You)", "sentence": "We don't like spicy food.", "note": "Permanent preference." },
      { "type": "Negative (He/She)", "sentence": "She doesn't speak Spanish.", "note": "Notice 'speak' has no 's' because 'doesn't' absorbed it." },
      { "type": "Question", "sentence": "Do you live in New York?", "note": "Asking about a permanent situation." }
    ],
    "commonMistakes": [
      {
        "wrong": "She go to school every day.",
        "correct": "She goes to school every day.",
        "explanation": "Forgetting the 's' or 'es' for He/She/It is the most common error in this tense.",
        "fix": "Always add -s or -es for singular third-person subjects."
      },
      {
        "wrong": "He doesn't likes pizza.",
        "correct": "He doesn't like pizza.",
        "explanation": "Once you use 'does' or 'doesn't', it steals the 's'. The main verb must be naked (base form).",
        "fix": "Never put an 's' on the main verb in a negative or question."
      },
      {
        "wrong": "I am play soccer.",
        "correct": "I play soccer.",
        "explanation": "Do not mix the 'Be' verb (am/is/are) with normal action verbs in the Present Simple.",
        "fix": "Drop the 'am'."
      }
    ],
    "quickComparison": "<strong>Present Simple vs Present Continuous:</strong> 'I live in London' (Present Simple = Permanent fact, I am a resident). 'I am living in London' (Present Continuous = Temporary situation, I might move next month).",
    "indonesianLearnerWarning": "Indonesian verbs never change form. 'Dia pergi' = He goes. 'Saya pergi' = I go. You must actively train your brain to check the subject and add the 's' for He/She/It.",
    "practicePrompts": [
      "Add the correct 's': 'The dog (bark) loudly.'",
      "Make this negative: 'John likes apples.' -> 'John ___ ___ apples.'",
      "Correct the mistake: 'My friend study every night.'",
      "Write a sentence about something you do every weekend."
    ],
    "classroomUse": "<strong>The Habit Interview:</strong> Pair students up. They must ask their partner 5 questions about their daily routine ('What time do you wake up?'). Then, they must report back to the class using the 's' rule ('Maria wakes up at 6 AM').",
    "summary": [
      "Use Present Simple for habits, routines, and permanent facts.",
      "Add -s or -es to the verb if the subject is He, She, or It.",
      "Use 'don't' or 'doesn't' to make negative sentences.",
      "Do NOT use the 'Be' verb (am/is/are) with action verbs in this tense."
    ]
  },
  {
    "id": "grammar-present-continuous",
    "backHref": "tenses.html",
    "backLabel": "Back to Tenses",
    "title": "Present Continuous Tense",
    "skill": "Grammar",
    "category": "Present Tenses",
    "level": "Beginner",
    "description": "Describe actions happening right now or temporary situations.",
    "introduction": "If you want to describe an action that is happening right before your eyes, you cannot use the Present Simple. If you say 'I eat', it means you make a habit of eating. To say that the food is in your mouth right now, you must use the Present Continuous (also called Present Progressive). This tense is like a live video feed—it describes action in progress. Let's learn the 'ing' rule.",
    "learningGoals": [
      "Use the Present Continuous for actions happening exactly right now.",
      "Use it for temporary situations that are happening 'around' now.",
      "Master the formula: Be verb (am/is/are) + Verb-ing."
    ],
    "meaning": "The action started in the past, is happening right now, and will finish in the future. It is ongoing and unfinished.",
    "uses": [
      "Right now: Listen! The baby is crying.",
      "Temporary situations: I am living with my parents this month.",
      "Future plans (Advanced): We are flying to Paris tomorrow."
    ],
    "patterns": [
      {
        "name": "The Continuous Formula",
        "formula": "Subject + am/is/are + Verb-ing",
        "explanation": "Example: I am working. She is sleeping. They are running."
      },
      {
        "name": "Negative Pattern",
        "formula": "Subject + am/is/are + NOT + Verb-ing",
        "explanation": "Example: I am not working. She isn't sleeping."
      }
    ],
    "stepByStep": "How to build a Present Continuous sentence:<br><br>1. <strong>Start with the subject:</strong> 'The dog'.<br>2. <strong>Add the correct 'Be' verb helper:</strong> 'is'.<br>3. <strong>Take the main action verb:</strong> 'run'.<br>4. <strong>Add '-ing' to the action:</strong> 'running'.<br>5. <strong>Result:</strong> 'The dog <em>is running</em>.'",
    "examples": [
      { "type": "Right Now", "sentence": "I am typing a message.", "note": "The action is in progress at this exact second." },
      { "type": "Temporary", "sentence": "She is reading a great book.", "note": "She might not be reading it this exact second, but she is in the process of reading it this week." },
      { "type": "Negative", "sentence": "They aren't watching TV.", "note": "Contraction of 'are not'." },
      { "type": "Question", "sentence": "Are you listening to me?", "note": "Flipping the Subject and the Be verb." }
    ],
    "commonMistakes": [
      {
        "wrong": "I playing tennis right now.",
        "correct": "I am playing tennis right now.",
        "explanation": "You cannot use an '-ing' verb without its helper (am/is/are). They are a team.",
        "fix": "Always include the Be verb."
      },
      {
        "wrong": "I am know the answer.",
        "correct": "I know the answer.",
        "explanation": "Some verbs describe states of the mind (know, believe, understand, love). These 'stative verbs' almost NEVER take '-ing'. You cannot be 'in the process' of knowing something.",
        "fix": "Use Present Simple for stative verbs."
      }
    ],
    "quickComparison": "<strong>Present Simple vs Continuous:</strong> 'It rains a lot here' (Fact about the climate). 'It is raining right now' (Look out the window, get an umbrella!).",
    "indonesianLearnerWarning": "Indonesian uses 'sedang' (Saya sedang makan) to express this exact concept. Translating 'sedang' as 'am/is/are + ing' is one of the most reliable 1-to-1 grammar translations between the two languages!",
    "practicePrompts": [
      "Change this habit to an action happening now: 'He drives to work.' -> 'He ___ ___ to work right now.'",
      "Correct the mistake: 'They are want some water.'",
      "Correct the mistake: 'She writing an email.'",
      "Describe what you are doing right now using the Present Continuous."
    ],
    "classroomUse": "<strong>Pantomime/Charades:</strong> A student acts out an action silently in front of the class (e.g., brushing teeth). The class must guess using the Present Continuous: 'Are you eating?' 'No, I'm not eating.' 'Are you brushing your teeth?' 'Yes, I am brushing my teeth!'",
    "summary": [
      "Use Present Continuous for ongoing actions happening right now.",
      "The formula is: am/is/are + Verb-ing.",
      "Never forget the am/is/are helper verb.",
      "Do not use this tense for 'stative verbs' (know, want, like)—use Present Simple instead."
    ]
  },
  {
    "id": "grammar-present-perfect",
    "backHref": "tenses.html",
    "backLabel": "Back to Tenses",
    "title": "Present Perfect Tense",
    "skill": "Grammar",
    "category": "Present Tenses",
    "level": "Intermediate",
    "description": "Connect the past to the present with life experiences and recent events.",
    "introduction": "This is often considered the hardest tense in English! The Present Perfect is a bridge between the past and the present. We use it when an action happened in the past, but the RESULT is still important right now. If you say 'I lost my keys' (Past Simple), maybe you found them again. If you say 'I HAVE lost my keys' (Present Perfect), it means you are locked out of your house right now. Let's master the bridge of time.",
    "learningGoals": [
      "Understand that the Present Perfect connects past actions to present results.",
      "Use it for life experiences (without specific time).",
      "Use it for recent events (using just, already, yet).",
      "Master the formula: Have/Has + Past Participle (V3)."
    ],
    "meaning": "The exact time in the past does not matter. What matters is the experience or the result in the present.",
    "uses": [
      "Life Experiences: I have visited Japan. (At some point in my life).",
      "Recent Events: She has just arrived. (A few minutes ago).",
      "Unfinished Time: We have worked hard today. ('Today' is not over yet)."
    ],
    "patterns": [
      {
        "name": "The Present Perfect Formula",
        "formula": "Subject + Have/Has + Past Participle (Verb 3)",
        "explanation": "Example: I have seen. She has eaten. They have finished."
      },
      {
        "name": "Negative Pattern",
        "formula": "Subject + haven't/hasn't + Past Participle",
        "explanation": "Example: I haven't seen. He hasn't finished."
      }
    ],
    "stepByStep": "How to talk about a life experience:<br><br>1. <strong>Choose the experience:</strong> Try sushi.<br>2. <strong>Start with the Subject and Helper:</strong> 'I have'.<br>3. <strong>Find the V3 (Past Participle) form of the verb:</strong> Try -> tried.<br>4. <strong>Result:</strong> 'I <em>have tried</em> sushi.' (Meaning: I know what it tastes like now).<br>5. <strong>Warning:</strong> NEVER add a specific past time. ('I have tried sushi yesterday' is illegal!).",
    "examples": [
      { "type": "Life Experience", "sentence": "I have read that book.", "note": "I know the story. Time doesn't matter." },
      { "type": "Recent Event", "sentence": "Look! It has snowed.", "note": "The snow is on the ground right now." },
      { "type": "With 'Ever'", "sentence": "Have you ever met a famous person?", "note": "Asking about your whole life up to now." },
      { "type": "Unfinished State", "sentence": "She has lived here for ten years.", "note": "She started in the past and STILL lives here now." }
    ],
    "commonMistakes": [
      {
        "wrong": "I have seen him yesterday.",
        "correct": "I saw him yesterday.",
        "explanation": "This is the #1 mistake. You CANNOT use the Present Perfect with finished time words (yesterday, last year, in 2010). If the time is finished, use Past Simple.",
        "fix": "Drop 'have' if you specify a finished time."
      },
      {
        "wrong": "He have gone to the store.",
        "correct": "He has gone to the store.",
        "explanation": "Don't forget to use 'has' for He, She, and It.",
        "fix": "Match the helper verb to the subject."
      },
      {
        "wrong": "I have writed a letter.",
        "correct": "I have written a letter.",
        "explanation": "You must use the V3 form. Many common verbs are irregular and do not end in '-ed'.",
        "fix": "Memorize the irregular V3 list (written, spoken, seen, eaten)."
      }
    ],
    "quickComparison": "<strong>Past Simple vs Present Perfect:</strong> 'I lost my keys' (Past event, I might have new ones now). 'I have lost my keys' (Result: I am standing at my door and I can't get inside right now).",
    "indonesianLearnerWarning": "Indonesian uses 'sudah' to translate the Present Perfect! 'Saya sudah makan' translates perfectly to 'I have eaten'. Just remember never to add 'kemarin' (yesterday) to an 'I have eaten' sentence in English.",
    "practicePrompts": [
      "Turn this into Present Perfect: 'They (finish) their homework.'",
      "Correct the mistake: 'I have visited Paris in 2018.'",
      "Answer using Present Perfect: 'Why is your hair wet?' -> 'Because I ___ ___ a shower.'",
      "Write a sentence about an interesting food you 'have eaten'."
    ],
    "classroomUse": "<strong>The Experience Bingo:</strong> Give students a bingo card with actions (ride a horse, eat snails, meet a celebrity). They must walk around asking 'Have you ever...' until they find someone who says 'Yes, I have!' and mark their card.",
    "summary": [
      "Present Perfect connects the past to the present.",
      "The formula is: Have/Has + Past Participle (V3).",
      "Use it for life experiences, recent events, and actions that started in the past and continue now.",
      "NEVER use specific finished time words (yesterday, last year) with this tense."
    ]
  },
  {
    "id": "grammar-present-perfect-continuous",
    "backHref": "tenses.html",
    "backLabel": "Back to Tenses",
    "title": "Present Perfect Continuous Tense",
    "skill": "Grammar",
    "category": "Present Tenses",
    "level": "Advanced",
    "description": "Emphasize the duration of an action that started in the past and is still happening.",
    "introduction": "You are waiting for a friend. You arrived at 2:00 PM. It is now 3:00 PM. How do you express your frustration? If you say 'I am waiting', it just means right now. If you say 'I have waited', it sounds like the waiting is finished. To emphasize that you started waiting an hour ago, and you are STILL waiting right now, you need the ultimate combination tense: The Present Perfect Continuous. 'I have been waiting for an hour!' Let's learn how to complain about duration.",
    "learningGoals": [
      "Use this tense to focus on 'how long' an action has been happening.",
      "Understand the difference between 'for' (duration) and 'since' (starting point).",
      "Master the formula: Have/Has + been + Verb-ing."
    ],
    "meaning": "This tense emphasizes the length, duration, or ongoing nature of an activity that began in the past and continues into the present moment.",
    "uses": [
      "Ongoing duration: I have been studying all day.",
      "Recent visible evidence: You're sweating! Have you been running?"
    ],
    "patterns": [
      {
        "name": "The Perfect Continuous Formula",
        "formula": "Subject + have/has + been + Verb-ing",
        "explanation": "Example: I have been working. She has been reading."
      }
    ],
    "stepByStep": "How to describe an ongoing action:<br><br>1. <strong>Identify the action:</strong> 'paint the house'.<br>2. <strong>Start with the Subject and 'Have been':</strong> 'We have been'.<br>3. <strong>Add the -ing verb:</strong> 'We have been <em>painting</em> the house.'<br>4. <strong>Add the duration using FOR or SINCE:</strong> 'We have been painting the house <em>for</em> three days.' (And we still aren't finished!).",
    "examples": [
      { "type": "Duration (For)", "sentence": "I have been living here for five years.", "note": "'For' is used with an amount of time (five years, two hours)." },
      { "type": "Duration (Since)", "sentence": "She has been working since 8 AM.", "note": "'Since' is used with a starting point (8 AM, Monday, 1999)." },
      { "type": "Visible Evidence", "sentence": "Your eyes are red. Have you been crying?", "note": "The action recently stopped, but the result is visible." },
      { "type": "Negative", "sentence": "It hasn't been raining much lately.", "note": "Lack of ongoing action." }
    ],
    "commonMistakes": [
      {
        "wrong": "I am working here for three years.",
        "correct": "I have been working here for three years.",
        "explanation": "You cannot use Present Continuous (am working) with 'for' or 'since'. If you mention HOW LONG, you must use Present Perfect Continuous.",
        "fix": "Change 'am' to 'have been'."
      },
      {
        "wrong": "I have been knowing him for a long time.",
        "correct": "I have known him for a long time.",
        "explanation": "Remember stative verbs? Verbs like know, love, and believe DO NOT take '-ing'. You must use the normal Present Perfect instead.",
        "fix": "Never use stative verbs in continuous tenses."
      }
    ],
    "quickComparison": "<strong>Present Perfect vs Perfect Continuous:</strong> 'I have painted my room' (It is finished. Look at the nice walls). 'I have been painting my room' (It is not finished. I am covered in paint and tired).",
    "indonesianLearnerWarning": "Indonesian doesn't distinguish between 'I have lived here' and 'I have been living here'—both use 'sudah tinggal'. In English, if the action feels like a long, ongoing process, native speakers strongly prefer the '-ing' continuous form.",
    "practicePrompts": [
      "Complete the sentence: 'She is exhausted because she ___ ___ ___ (run) for hours.'",
      "Choose for or since: 'I have been waiting ___ 20 minutes.'",
      "Choose for or since: 'We have been studying ___ morning.'",
      "Correct the mistake: 'He is living in New York since January.'"
    ],
    "classroomUse": "<strong>The Alibi Game:</strong> A 'crime' happened at 8 PM. The police (students) interrogate suspects. The suspects must explain what they were doing leading up to that time: 'I'm innocent! I have been watching TV all evening!'",
    "summary": [
      "Use Present Perfect Continuous to emphasize HOW LONG an action has been happening.",
      "The formula is Have/Has + been + Verb-ing.",
      "Use 'for' with amounts of time (for 3 days).",
      "Use 'since' with starting points (since Monday).",
      "Never use stative verbs (know, want) in this tense."
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
console.log('Updated 5 present tense lessons using ESM');
