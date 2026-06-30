const fs = require('fs');

const content = fs.readFileSync('data/lessons.js', 'utf8');
const lines = content.split('\n');

// Find the last ];
let lastIdx = lines.length - 1;
while(lastIdx >= 0 && !lines[lastIdx].includes('];')) {
  lastIdx--;
}

if(lastIdx === -1) {
  console.error("Could not find ];");
  process.exit(1);
}

// Get everything before ];
let modified = lines.slice(0, lastIdx).join('\n');

const newLessons = [
  {
    "id": "grammar-prepositions-overview",
    "backHref": "prepositions.html",
    "backLabel": "Back to Prepositions",
    "title": "What Are Prepositions?",
    "skill": "Grammar",
    "category": "Preposition Foundations",
    "level": "Beginner",
    "description": "Learn what prepositions are and the relationships they show.",
    "learningGoals": [
      "Understand that prepositions show relationships between words.",
      "Recognize common prepositions of time, place, direction, reason, method, connection, or topic."
    ],
    "meaning": "Prepositions are small connecting words that show the relationship between a noun (or pronoun) and the rest of the sentence. They often indicate time (when), place (where), direction, reason, method, connection, or topic.",
    "keyIdeas": [
      "Common prepositions: in, on, at, to, from, with, for, about, before, after, during, by.",
      "Prepositions usually come before nouns, pronouns, or noun phrases."
    ],
    "patterns": [
      "Preposition + Noun/Pronoun/Noun Phrase"
    ],
    "examples": [
      { "type": "Place", "sentence": "The book is on the table.", "note": "'on' shows where the book is." },
      { "type": "Time", "sentence": "I study at night.", "note": "'at' shows when." },
      { "type": "Direction", "sentence": "She went to school.", "note": "'to' shows direction." },
      { "type": "Topic", "sentence": "We talked about the lesson.", "note": "'about' introduces the topic." }
    ],
    "commonMistakes": [
      "Mistake: 'I go school.' | Solution: Missing a preposition of direction. Correct: 'I go to school.'",
      "Mistake: 'I arrived to school.' | Solution: Wrong preposition. Correct: 'I arrived at school.'",
      "Mistake: 'We discussed about the topic.' | Solution: Some verbs don't need a preposition. Correct: 'We discussed the topic.'"
    ],
    "repairSteps": [],
    "practicePrompts": [
      "Identify the preposition: 'She waited for her friend.'",
      "Fill in the blank: 'I left my keys ___ the desk.'"
    ],
    "classroomUse": "Give students a list of basic sentences missing prepositions (e.g. 'I walk ___ the park') and have them choose the best fit to change the sentence's meaning.",
    "quickComparison": "Arrived at (point) vs Arrived in (city/country).",
    "summary": [
      "Prepositions connect nouns to the rest of the sentence.",
      "They show when, where, how, or why."
    ]
  },
  {
    "id": "grammar-prepositions-phrases-intro",
    "backHref": "prepositions.html",
    "backLabel": "Back to Prepositions",
    "title": "Prepositions and Prepositional Phrases",
    "skill": "Grammar",
    "category": "Preposition Foundations",
    "level": "Intermediate",
    "description": "Understand how to combine prepositions with objects to form complete phrases.",
    "learningGoals": [
      "Identify prepositional phrases in a sentence.",
      "Understand that prepositional phrases add extra information."
    ],
    "meaning": "A prepositional phrase is a group of words that begins with a preposition and ends with a noun, pronoun, or noun phrase (called the object of the preposition). These phrases act like adjectives or adverbs to add extra details to a sentence.",
    "keyIdeas": [
      "Pattern: preposition + object of preposition.",
      "Prepositional phrases add extra information to a sentence and usually tell us when, where, or which one."
    ],
    "patterns": [
      "preposition + noun / pronoun / noun phrase"
    ],
    "examples": [
      { "type": "Place Phrase", "sentence": "She studies in the library.", "note": "'in the library' tells us where." },
      { "type": "Time Phrase", "sentence": "We met after class.", "note": "'after class' tells us when." },
      { "type": "Descriptive Phrase", "sentence": "The student with the red bag is my friend.", "note": "'with the red bag' describes which student." }
    ],
    "commonMistakes": [
      "Mistake: Using a preposition without a clear object. | Solution: Make sure every preposition has a noun or pronoun following it.",
      "Mistake: Putting prepositional phrases in confusing positions. | Solution: Keep the phrase close to the word it describes."
    ],
    "repairSteps": [],
    "practicePrompts": [
      "Identify the prepositional phrase: 'They walked across the street.'",
      "Add a prepositional phrase of time to: 'I will finish my homework.'"
    ],
    "classroomUse": "Have students write simple sentences (e.g., 'The cat slept.') and then pass the paper to a partner who must add a prepositional phrase ('The cat slept under the table.').",
    "quickComparison": "Noun: 'The table'. Prepositional phrase: 'Under the table'.",
    "summary": [
      "A prepositional phrase starts with a preposition and ends with a noun.",
      "They add extra details like time, place, and description to sentences."
    ]
  },
  {
    "id": "grammar-prepositions-after-words",
    "backHref": "prepositions.html",
    "backLabel": "Back to Prepositions",
    "title": "Prepositions After Nouns, Verbs, and Adjectives",
    "skill": "Grammar",
    "category": "Preposition Foundations",
    "level": "Intermediate",
    "description": "Learn that some words naturally pair with specific prepositions.",
    "learningGoals": [
      "Recognize that certain verbs, adjectives, and nouns require specific prepositions.",
      "Learn to study prepositions as fixed patterns rather than individual words."
    ],
    "meaning": "In English, many words are 'married' to specific prepositions. You can't just guess the preposition based on logic or direct translation; you have to learn them as fixed combinations or patterns.",
    "keyIdeas": [
      "Verb + preposition pairs: listen to, wait for, depend on, look at, look for.",
      "Adjective + preposition pairs: interested in, good at, afraid of, proud of, similar to.",
      "Noun + preposition pairs: reason for, solution to, problem with, effect on."
    ],
    "patterns": [
      "Specific Verb/Adjective/Noun + Specific Preposition"
    ],
    "examples": [
      { "type": "Verb + Prep", "sentence": "I am listening to music.", "note": "'listen' always pairs with 'to' for an object." },
      { "type": "Adjective + Prep", "sentence": "She is good at mathematics.", "note": "'good' pairs with 'at' for skills." },
      { "type": "Noun + Prep", "sentence": "What is the reason for this?", "note": "'reason' pairs with 'for'." }
    ],
    "commonMistakes": [
      "Mistake: 'listen music' | Solution: Missing preposition. Correct: 'listen to music'.",
      "Mistake: 'interested about English' | Solution: Wrong preposition. Correct: 'interested in English'.",
      "Mistake: 'good in speaking' | Solution: Wrong preposition. Correct: 'good at speaking'."
    ],
    "repairSteps": [],
    "practicePrompts": [
      "Choose the correct preposition: 'I am afraid (in/of/at) spiders.'",
      "Fill in the blank: 'It depends ___ the weather.'"
    ],
    "classroomUse": "Play a matching game where students match a verb or adjective to its correct preposition partner.",
    "quickComparison": "Good at (skill) vs Good for (benefit).",
    "summary": [
      "Many verbs, adjectives, and nouns are followed by fixed prepositions.",
      "These patterns must be memorized."
    ]
  },
  {
    "id": "grammar-preposition-adverb-conjunction",
    "backHref": "prepositions.html",
    "backLabel": "Back to Prepositions",
    "title": "Preposition vs Adverb vs Conjunction",
    "skill": "Grammar",
    "category": "Preposition Foundations",
    "level": "Intermediate",
    "description": "Explore how some words can act as different parts of speech depending on the sentence.",
    "learningGoals": [
      "Understand that the same word can be a preposition, adverb, or conjunction.",
      "Learn simple tests to identify the word's grammatical role."
    ],
    "meaning": "Some words in English (like 'before', 'inside', 'after') can change their grammatical role depending on what follows them. If followed by a noun phrase, it's a preposition. If it connects two clauses, it's a conjunction. If it describes direction or place with no object, it's an adverb.",
    "keyIdeas": [
      "Preposition: Followed by a noun/noun phrase. (before class)",
      "Conjunction: Connects two clauses; followed by subject + verb. (before the class started)",
      "Adverb: Describes direction/place without an object. (Come inside.)"
    ],
    "patterns": [
      "Word + Noun Phrase = Preposition",
      "Word + Subject + Verb = Conjunction",
      "Verb + Word (no object following) = Adverb"
    ],
    "examples": [
      { "type": "Preposition", "sentence": "We ate before class.", "note": "'before' + noun ('class')." },
      { "type": "Conjunction", "sentence": "We ate before the class started.", "note": "'before' + clause ('the class started')." },
      { "type": "Adverb vs Preposition", "sentence": "Come inside. (Adverb) / The dog is inside the house. (Preposition)", "note": "No object vs object." }
    ],
    "commonMistakes": [
      "Mistake: Confusing 'during' (prep) and 'while' (conj). Example: 'during I studied'. | Solution: Use 'while' before a clause: 'while I studied'. Use 'during' before a noun: 'during the class'."
    ],
    "repairSteps": [],
    "practicePrompts": [
      "Is 'after' a preposition or conjunction here: 'After dinner, we slept.'",
      "Is 'around' an adverb or preposition here: 'He walked around the park.'"
    ],
    "classroomUse": "Give students a list of sentences and ask them to circle the word (e.g. 'after') and underline what follows it to determine its part of speech.",
    "quickComparison": "During the movie (Prep) vs While the movie was playing (Conj).",
    "summary": [
      "If followed by a noun, it's a preposition.",
      "If followed by a subject and verb, it's a conjunction.",
      "If there is no object, it's an adverb."
    ]
  },
  {
    "id": "grammar-prepositions-in-on-at-time",
    "backHref": "prepositions.html",
    "backLabel": "Back to Prepositions",
    "title": "In, On, and At for Time",
    "skill": "Grammar",
    "category": "Prepositions of Time",
    "level": "Beginner",
    "description": "Understand the core time prepositions and their general rules.",
    "learningGoals": [
      "Learn the general rule for choosing in, on, and at for time.",
      "Apply these prepositions accurately to dates, months, and specific times."
    ],
    "meaning": "The prepositions 'in', 'on', and 'at' organize time like a funnel. 'In' is for large, general time periods. 'On' is for more specific days and dates. 'At' is for the most specific, exact points in time.",
    "keyIdeas": [
      "In = larger time periods (months, years, seasons, parts of the day).",
      "On = specific days and dates.",
      "At = specific, exact points in time (clock times, night, holidays)."
    ],
    "patterns": [
      "in + month/year/season",
      "on + day/date",
      "at + clock time"
    ],
    "examples": [
      { "type": "In (Large periods)", "sentence": "in the morning, in July, in 2026, in the future.", "note": "General times." },
      { "type": "On (Days/Dates)", "sentence": "on Monday, on my birthday, on June 10.", "note": "Specific days." },
      { "type": "At (Exact points)", "sentence": "at 7 p.m., at night, at the weekend.", "note": "Exact times. Note: 'at the weekend' is British style." }
    ],
    "commonMistakes": [
      "Mistake: 'in Monday' | Solution: Days require 'on'. Correct: 'on Monday'.",
      "Mistake: 'on 7 p.m.' | Solution: Clock times require 'at'. Correct: 'at 7 p.m.'",
      "Mistake: 'at 2026' | Solution: Years require 'in'. Correct: 'in 2026'."
    ],
    "repairSteps": [],
    "practicePrompts": [
      "Fill in the blank: 'We have a meeting ___ Friday ___ 9 a.m.'",
      "Choose the correct word: 'I was born (in/on/at) August.'"
    ],
    "classroomUse": "Draw a large inverted triangle (funnel) on the board. Put 'IN' at the wide top, 'ON' in the middle, and 'AT' at the narrow bottom point.",
    "quickComparison": "In (Month) -> On (Day) -> At (Time).",
    "summary": [
      "Use 'in' for months, years, and long periods.",
      "Use 'on' for days and specific dates.",
      "Use 'at' for precise times and 'night'."
    ]
  },
  {
    "id": "grammar-before-after-during-while",
    "backHref": "prepositions.html",
    "backLabel": "Back to Prepositions",
    "title": "Before, After, During, and While",
    "skill": "Grammar",
    "category": "Prepositions of Time",
    "level": "Intermediate",
    "description": "Learn how to place events in sequence correctly.",
    "learningGoals": [
      "Understand the difference between during (preposition) and while (conjunction).",
      "Correctly use before and after."
    ],
    "meaning": "To talk about when things happen in relation to other events, we use sequencing words. 'Before' means earlier than. 'After' means later than. 'During' and 'While' mean at the same time, but they have different grammatical rules.",
    "keyIdeas": [
      "Before and after can work with nouns (prepositions) or clauses (conjunctions).",
      "During + noun / noun phrase (Preposition).",
      "While + clause (Conjunction). Make the difference between during and while very clear."
    ],
    "patterns": [
      "before/after + noun OR clause",
      "during + noun phrase",
      "while + subject + verb"
    ],
    "examples": [
      { "type": "Before / After", "sentence": "before class, before the class started, after lunch, after we finished.", "note": "They are flexible." },
      { "type": "During (Prep)", "sentence": "She fell asleep during the lesson.", "note": "during + noun." },
      { "type": "While (Conj)", "sentence": "She fell asleep while the teacher was explaining.", "note": "while + clause." }
    ],
    "commonMistakes": [
      "Mistake: 'during I studied' | Solution: 'During' needs a noun. Correct: 'while I studied' or 'while I was studying'.",
      "Mistake: 'while the lesson' | Solution: 'While' needs a clause. Correct: 'during the lesson'."
    ],
    "repairSteps": [],
    "practicePrompts": [
      "Choose the correct word: '(During / While) the movie, my phone rang.'",
      "Choose the correct word: 'I listened to music (during / while) I was running.'"
    ],
    "classroomUse": "Write 'During' and 'While' as two column headers. Have students sort phrases ('the game', 'they were playing', 'the rain', 'it rained') into the correct column.",
    "quickComparison": "During the meeting (noun phrase) vs While we were meeting (clause).",
    "summary": [
      "Before and after show sequence and can take nouns or clauses.",
      "During is a preposition for noun phrases.",
      "While is a conjunction for clauses."
    ]
  },
  {
    "id": "grammar-since-for-from-until",
    "backHref": "prepositions.html",
    "backLabel": "Back to Prepositions",
    "title": "Since, For, From, and Until",
    "skill": "Grammar",
    "category": "Prepositions of Time",
    "level": "Intermediate",
    "description": "Master starting points, ending points, and durations of time.",
    "learningGoals": [
      "Differentiate between starting points (since/from), durations (for), and ending points (until).",
      "Connect since and for to Perfect tenses."
    ],
    "meaning": "When talking about a period of time, we need to show the beginning, the length, or the end. 'Since' and 'From' mark the beginning. 'For' measures the length. 'Until' marks the end.",
    "keyIdeas": [
      "Since = starting point (used with perfect tenses: since Monday, since 2020).",
      "For = duration or length of time (for two hours, for three years).",
      "From = starting point, often paired with 'to' or 'until' (from Monday to Friday).",
      "Until = ending point (until 5 p.m., until tomorrow)."
    ],
    "patterns": [
      "since + specific past point",
      "for + amount of time",
      "from [start] to/until [end]"
    ],
    "examples": [
      { "type": "Since (Start)", "sentence": "I have lived here since 2020.", "note": "Point in time." },
      { "type": "For (Duration)", "sentence": "I have lived here for three years.", "note": "Length of time." },
      { "type": "From... To", "sentence": "The store is open from 9 a.m. to 5 p.m.", "note": "Start and end." },
      { "type": "Until (End)", "sentence": "I will wait until tomorrow.", "note": "Ending point." }
    ],
    "commonMistakes": [
      "Mistake: 'I have worked here since two years.' | Solution: Two years is a duration. Correct: 'for two years'.",
      "Mistake: 'I have worked here for 2020.' | Solution: 2020 is a point in time. Correct: 'since 2020'."
    ],
    "repairSteps": [],
    "practicePrompts": [
      "Fill in the blank: 'I studied ___ three hours.'",
      "Fill in the blank: 'I have known him ___ we were children.'"
    ],
    "classroomUse": "Draw a timeline. Put an 'X' at a past year for 'since', a bracket covering a period for 'for', and an arrow pointing to a future 'stop sign' for 'until'.",
    "quickComparison": "Since 2 PM (point) vs For 2 hours (duration).",
    "summary": [
      "Since and from mark the start.",
      "For measures the duration.",
      "Until marks the end."
    ]
  },
  {
    "id": "grammar-by-within-in-deadlines",
    "backHref": "prepositions.html",
    "backLabel": "Back to Prepositions",
    "title": "By, Within, and In for Deadlines",
    "skill": "Grammar",
    "category": "Prepositions of Time",
    "level": "Advanced",
    "description": "Learn how to express deadlines and time limits clearly.",
    "learningGoals": [
      "Differentiate between by, within, and in when talking about the future.",
      "Express deadlines accurately."
    ],
    "meaning": "When setting deadlines or making promises about time, prepositions change the meaning slightly. 'By' means 'no later than'. 'Within' means 'inside a period'. 'In' means 'after a certain amount of time passes'.",
    "keyIdeas": [
      "By = no later than a specific deadline (by Friday).",
      "Within = inside a period of time, before the time is up (within two hours).",
      "In = after a period of time from now, or from a reference point (in ten minutes)."
    ],
    "patterns": [
      "by + specific time/day",
      "within + amount of time",
      "in + amount of time"
    ],
    "examples": [
      { "type": "By (Deadline)", "sentence": "Submit the report by 5 p.m.", "note": "At or before 5 p.m." },
      { "type": "Within (Inside a limit)", "sentence": "I will finish it within two hours.", "note": "Before two hours pass." },
      { "type": "In (Future point)", "sentence": "I will call you in ten minutes.", "note": "Exactly ten minutes from now." }
    ],
    "commonMistakes": [
      "Mistake: 'I will submit it until Friday.' (when meaning deadline) | Solution: 'Until' implies continuous action stopping at Friday. For a single deadline, use 'by'. Correct: 'I will submit it by Friday.'"
    ],
    "repairSteps": [],
    "practicePrompts": [
      "Choose the correct word: 'You must finish the exam (by / in) 3:00 PM.'",
      "Choose the correct word: 'The pizza will arrive (in / by) 30 minutes.'"
    ],
    "classroomUse": "Use a real-world scenario. Tell students they have a project due 'by' Friday, they must complete a quiz 'within' 10 minutes, and the bell will ring 'in' 5 minutes.",
    "quickComparison": "By Friday (deadline) vs Until Friday (continuous action stopping on Friday).",
    "summary": [
      "Use 'by' for strict deadlines.",
      "Use 'within' for actions that will happen inside a time limit.",
      "Use 'in' for a future time relative to now."
    ]
  },
  {
    "id": "grammar-prepositions-in-on-at-place",
    "backHref": "prepositions.html",
    "backLabel": "Back to Prepositions",
    "title": "In, On, and At for Place",
    "skill": "Grammar",
    "category": "Prepositions of Place and Movement",
    "level": "Beginner",
    "description": "Understand how to describe locations using the core space prepositions.",
    "learningGoals": [
      "Learn the general rules for choosing in, on, and at for physical spaces.",
      "Apply these prepositions accurately to everyday locations."
    ],
    "meaning": "Just like time, the prepositions 'in', 'on', and 'at' organize physical space. 'In' implies being enclosed or inside an area. 'On' implies being on a surface or line. 'At' implies a specific point or general location.",
    "keyIdeas": [
      "In = inside an enclosed area or 3D space (room, city, box).",
      "On = touching a surface or on a line (table, wall, street).",
      "At = a specific point or public place serving a function (at school, at home, at the bus stop)."
    ],
    "patterns": [
      "in + enclosed space/city",
      "on + surface/street",
      "at + specific point"
    ],
    "examples": [
      { "type": "In (Enclosed space)", "sentence": "in the room, in Jakarta, in a box.", "note": "Inside boundaries." },
      { "type": "On (Surface)", "sentence": "on the table, on the wall, on the second floor.", "note": "Resting on a surface." },
      { "type": "At (Specific point)", "sentence": "at school, at home, at the bus stop.", "note": "Specific locations or points of interest." }
    ],
    "commonMistakes": [
      "Mistake: 'I am in home.' | Solution: Home is considered a specific point. Correct: 'I am at home.'",
      "Mistake: 'The book is in the table.' | Solution: It rests on the surface. Correct: 'The book is on the table.'",
      "Mistake: 'I study on school.' | Solution: School is a specific location point. Correct: 'I study at school.'"
    ],
    "repairSteps": [],
    "practicePrompts": [
      "Fill in the blank: 'There is a picture ___ the wall.'",
      "Choose the correct word: 'We will meet (in/on/at) the cafe.'"
    ],
    "classroomUse": "Use a physical box and a ball. Put the ball IN the box, ON the box, and AT the box (next to it as a point of reference) to visually demonstrate.",
    "quickComparison": "In the building (physically inside) vs At the building (the general location).",
    "summary": [
      "Use 'in' for 3D spaces and enclosed areas.",
      "Use 'on' for flat surfaces.",
      "Use 'at' for specific points or locations."
    ]
  },
  {
    "id": "grammar-above-over-under-below-between-among",
    "backHref": "prepositions.html",
    "backLabel": "Back to Prepositions",
    "title": "Above, Over, Under, Below, Between, and Among",
    "skill": "Grammar",
    "category": "Prepositions of Place and Movement",
    "level": "Intermediate",
    "description": "Learn to describe vertical positions and relationships between items.",
    "learningGoals": [
      "Differentiate between above/over and under/below.",
      "Understand the difference between between and among."
    ],
    "meaning": "These prepositions describe where things are in relation to each other, especially vertically (high/low) or within a group.",
    "keyIdeas": [
      "Above = higher than (not directly over). Over = higher than, sometimes covering or crossing.",
      "Under = directly lower or covered. Below = lower than a point or level.",
      "Between = in the middle of two distinct items.",
      "Among = surrounded by or part of a larger group."
    ],
    "patterns": [
      "Noun 1 + is + [Preposition] + Noun 2"
    ],
    "examples": [
      { "type": "Above vs Over", "sentence": "The lamp is above the table. / The plane flew over the city.", "note": "Higher vs Crossing." },
      { "type": "Under vs Below", "sentence": "The cat is under the chair. / The temperature is below zero.", "note": "Directly underneath vs Lower on a scale." },
      { "type": "Between vs Among", "sentence": "The bank is between the school and the mosque. / She was among her friends.", "note": "Two separate things vs Inside a group." }
    ],
    "commonMistakes": [
      "Mistake: 'He sat between many people.' | Solution: For a large group, use 'among'. Correct: 'He sat among many people.'",
      "Mistake: 'under zero degrees' | Solution: For scales and levels, use 'below'. Correct: 'below zero degrees.'"
    ],
    "repairSteps": [],
    "practicePrompts": [
      "Choose the correct word: 'The river flows (under/below) the bridge.'",
      "Choose the correct word: 'He divided the money (between/among) the two brothers.'"
    ],
    "classroomUse": "Have students arrange items on their desks. 'Put your pen under your book.' 'Hold your hand over the desk.'",
    "quickComparison": "Between two items vs Among three or more items.",
    "summary": [
      "Over and under describe direct vertical alignment or covering.",
      "Above and below describe higher or lower levels.",
      "Between is for two items, among is for groups."
    ]
  },
  {
    "id": "grammar-to-into-onto-from-out-of",
    "backHref": "prepositions.html",
    "backLabel": "Back to Prepositions",
    "title": "To, Into, Onto, From, and Out Of",
    "skill": "Grammar",
    "category": "Prepositions of Place and Movement",
    "level": "Intermediate",
    "description": "Master prepositions that describe movement towards or away from places.",
    "learningGoals": [
      "Understand prepositions that indicate dynamic movement rather than static position.",
      "Differentiate between to, into, and onto."
    ],
    "meaning": "While 'in', 'on', and 'at' tell us where something currently is (static), prepositions like 'to', 'into', and 'onto' tell us where something is going (dynamic movement).",
    "keyIdeas": [
      "To = direction or destination (I go to school).",
      "Into = movement from outside to inside (She walked into the room).",
      "Onto = movement to a surface (The cat jumped onto the table).",
      "From = starting point (I come from Bekasi).",
      "Out of = movement from inside to outside (He walked out of the room)."
    ],
    "patterns": [
      "Movement Verb + [Preposition] + Destination"
    ],
    "examples": [
      { "type": "Destination", "sentence": "I go to school.", "note": "General direction/destination." },
      { "type": "Entering", "sentence": "She walked into the room.", "note": "Moving inside." },
      { "type": "Exiting", "sentence": "He walked out of the room.", "note": "Moving outside." },
      { "type": "Surface movement", "sentence": "The cat jumped onto the table.", "note": "Landing on a surface." }
    ],
    "commonMistakes": [
      "Mistake: 'I entered to the room.' | Solution: The verb 'enter' already means 'go into'. No preposition needed. Correct: 'I entered the room.'",
      "Mistake: 'She went in the room.' (when movement is intended) | Solution: Use 'into' for dynamic movement. Correct: 'She went into the room.'"
    ],
    "repairSteps": [],
    "practicePrompts": [
      "Choose the correct word: 'He poured the water (in/into) the glass.'",
      "Fill in the blank: 'We drove ___ Jakarta to Bandung.'"
    ],
    "classroomUse": "Act out verbs! Have a student walk 'to' the door, walk 'out of' the room, walk 'into' the room, and jump 'onto' a spot on the floor.",
    "quickComparison": "In (static inside) vs Into (moving inside).",
    "summary": [
      "Use 'to', 'into', and 'onto' with verbs of movement.",
      "Use 'from' and 'out of' to show the origin or exiting."
    ]
  },
  {
    "id": "grammar-across-through-along-around-past",
    "backHref": "prepositions.html",
    "backLabel": "Back to Prepositions",
    "title": "Across, Through, Along, Around, and Past",
    "skill": "Grammar",
    "category": "Prepositions of Place and Movement",
    "level": "Intermediate",
    "description": "Describe paths, directions, and continuous movement accurately.",
    "learningGoals": [
      "Understand complex movement prepositions.",
      "Differentiate between across (surface) and through (volume)."
    ],
    "meaning": "These prepositions describe the path an object takes when moving. They tell you the shape or the route of the movement.",
    "keyIdeas": [
      "Across = from one side to another on a surface (walk across the street).",
      "Through = entering one side and exiting the other in a 3D space (train through a tunnel).",
      "Along = following a line or path (walk along the river).",
      "Around = in a circular direction or near different parts (walk around the park).",
      "Past = moving beyond a point (walk past the house)."
    ],
    "patterns": [
      "Movement Verb + [Preposition] + Path/Object"
    ],
    "examples": [
      { "type": "Across (Surface)", "sentence": "We walked across the street.", "note": "From one side to the other." },
      { "type": "Through (Volume)", "sentence": "The train went through the tunnel.", "note": "Inside and out." },
      { "type": "Along (Line)", "sentence": "We walked along the river.", "note": "Following the line of the river." },
      { "type": "Past (Beyond)", "sentence": "He walked past my house.", "note": "He continued further than my house." }
    ],
    "commonMistakes": [
      "Mistake: 'through the street' | Solution: A street is a flat surface. Use 'across'. Correct: 'across the street.'",
      "Mistake: 'across the tunnel' | Solution: A tunnel is a 3D volume. Use 'through'. Correct: 'through the tunnel.'"
    ],
    "repairSteps": [],
    "practicePrompts": [
      "Choose the correct word: 'We took a boat (across/through) the lake.'",
      "Choose the correct word: 'The bird flew (across/through) the open window.'"
    ],
    "classroomUse": "Draw simple icons on the board: a line crossing a rectangle (across), an arrow going inside a tube (through), a line parallel to a wavy line (along), a circle (around), and an arrow bypassing an X (past).",
    "quickComparison": "Across a bridge vs Through a tunnel.",
    "summary": [
      "Across is for flat surfaces; through is for enclosed spaces.",
      "Along follows a line.",
      "Past means to go beyond."
    ]
  },
  {
    "id": "grammar-verb-preposition-patterns",
    "backHref": "prepositions.html",
    "backLabel": "Back to Prepositions",
    "title": "Verb + Preposition Patterns",
    "skill": "Grammar",
    "category": "Preposition Patterns and Common Mistakes",
    "level": "Intermediate",
    "description": "Memorize common verbs that require specific prepositions to sound natural.",
    "learningGoals": [
      "Learn essential verb + preposition pairings.",
      "Identify verbs that do NOT need prepositions."
    ],
    "meaning": "Some verbs always travel with a specific preposition when they take an object. You cannot guess these by translating from your native language; you just have to learn them as pairs.",
    "keyIdeas": [
      "Common pairs: listen to, wait for, depend on, belong to, apologize for, agree with, talk about, look at, look for, believe in.",
      "Some verbs do NOT take prepositions in English, even if they do in other languages (e.g. discuss, enter, marry)."
    ],
    "patterns": [
      "Verb + Specific Preposition + Object"
    ],
    "examples": [
      { "type": "Dependent prepositions", "sentence": "I am waiting for the bus.", "note": "'wait' pairs with 'for'." },
      { "type": "Verbs without prepositions", "sentence": "We discussed the problem. / I entered the room. / She married him.", "note": "No prepositions needed." }
    ],
    "commonMistakes": [
      "Mistake: 'discuss about' | Solution: Drop 'about'. Correct: 'discuss'.",
      "Mistake: 'enter to' | Solution: Drop 'to'. Correct: 'enter'.",
      "Mistake: 'marry with' | Solution: Drop 'with'. Correct: 'marry'."
    ],
    "repairSteps": [],
    "practicePrompts": [
      "Fill in the blank: 'This book belongs ___ Sarah.'",
      "Correct this sentence: 'They discussed about the plan.'"
    ],
    "classroomUse": "Create flashcards. Verb on one side, preposition on the other. Include 'blank' cards for verbs that don't need prepositions (discuss, enter).",
    "quickComparison": "Look at (focus eyes on) vs Look for (search).",
    "summary": [
      "Learn verbs and their prepositions as a single unit.",
      "Beware of verbs like 'discuss' and 'enter' which take direct objects without prepositions."
    ]
  },
  {
    "id": "grammar-adjective-preposition-patterns",
    "backHref": "prepositions.html",
    "backLabel": "Back to Prepositions",
    "title": "Adjective + Preposition Patterns",
    "skill": "Grammar",
    "category": "Preposition Patterns and Common Mistakes",
    "level": "Intermediate",
    "description": "Learn the prepositions that follow descriptive words, like 'good at' and 'interested in.'",
    "learningGoals": [
      "Learn essential adjective + preposition pairings.",
      "Correct common errors resulting from direct translation."
    ],
    "meaning": "Similar to verbs, many adjectives require a specific preposition to connect to an object. These fixed phrases describe feelings, abilities, or characteristics.",
    "keyIdeas": [
      "Common pairs: interested in, good at, bad at, afraid of, proud of, similar to, different from, responsible for, worried about, famous for."
    ],
    "patterns": [
      "Verb 'to be' + Adjective + Specific Preposition + Object"
    ],
    "examples": [
      { "type": "Interests and Abilities", "sentence": "I am interested in grammar. She is good at speaking.", "note": "'interested' takes 'in'. 'good' takes 'at'." },
      { "type": "Comparisons", "sentence": "This answer is different from mine.", "note": "'different' takes 'from'." },
      { "type": "Feelings", "sentence": "He is afraid of the dark. We are proud of you.", "note": "Both take 'of'." }
    ],
    "commonMistakes": [
      "Mistake: 'interested about' | Solution: Correct: 'interested in'.",
      "Mistake: 'good in' | Solution: Correct: 'good at'.",
      "Mistake: 'different with' | Solution: Correct: 'different from'."
    ],
    "repairSteps": [],
    "practicePrompts": [
      "Fill in the blank: 'I am not very good ___ math.'",
      "Fill in the blank: 'Are you worried ___ the test?'"
    ],
    "classroomUse": "Have students write 'Me Too' sentences. One says 'I am interested in movies.' If another student agrees, they say 'Me too!' and practice the pattern.",
    "quickComparison": "Good at (ability) vs Good for (healthy/beneficial).",
    "summary": [
      "Learn adjective and preposition combinations as fixed vocabulary.",
      "Do not translate prepositions directly from your native language."
    ]
  },
  {
    "id": "grammar-noun-preposition-patterns",
    "backHref": "prepositions.html",
    "backLabel": "Back to Prepositions",
    "title": "Noun + Preposition Patterns",
    "skill": "Grammar",
    "category": "Preposition Patterns and Common Mistakes",
    "level": "Advanced",
    "description": "Master common noun pairings, such as 'reason for' and 'solution to.'",
    "learningGoals": [
      "Learn essential noun + preposition pairings.",
      "Enhance academic and formal writing by using correct combinations."
    ],
    "meaning": "Certain nouns also demand specific prepositions to link them to other nouns. Getting these right makes your English sound much more natural and professional.",
    "keyIdeas": [
      "Common pairs: reason for, solution to, answer to, problem with, effect on, increase in, relationship between, difference between, advantage of, disadvantage of."
    ],
    "patterns": [
      "Noun + Specific Preposition + Object"
    ],
    "examples": [
      { "type": "Causes and Solutions", "sentence": "What is the reason for your answer? / We need a solution to this problem.", "note": "'reason for' and 'solution to'." },
      { "type": "Comparisons", "sentence": "There is a difference between these words.", "note": "'difference between'." },
      { "type": "Impacts", "sentence": "Pollution has a bad effect on the environment.", "note": "'effect on'." }
    ],
    "commonMistakes": [
      "Mistake: 'solution for this problem' | Solution: 'solution to' is more standard. Correct: 'solution to this problem'.",
      "Mistake: 'answer of the question' | Solution: Correct: 'answer to the question'."
    ],
    "repairSteps": [],
    "practicePrompts": [
      "Fill in the blank: 'I have a problem ___ my computer.'",
      "Fill in the blank: 'What is the answer ___ question number 5?'"
    ],
    "classroomUse": "Provide a list of nouns (reason, answer, problem, effect) and have students race to write the correct preposition next to each.",
    "quickComparison": "Reason for (the cause) vs Solution to (the fix).",
    "summary": [
      "Nouns have fixed preposition partners just like verbs and adjectives.",
      "Memorize combinations like 'solution to', 'reason for', and 'effect on'."
    ]
  },
  {
    "id": "grammar-common-preposition-mistakes",
    "backHref": "prepositions.html",
    "backLabel": "Back to Prepositions",
    "title": "Common Preposition Mistakes",
    "skill": "Grammar",
    "category": "Preposition Patterns and Common Mistakes",
    "level": "All Levels",
    "description": "Repair the most frequent errors made with English prepositions.",
    "learningGoals": [
      "Identify and correct the most common preposition errors.",
      "Use a checklist to verify preposition choices."
    ],
    "meaning": "Prepositions are one of the hardest parts of English because they rarely translate perfectly between languages. This lesson acts as a repair clinic for the most frequent errors.",
    "keyIdeas": [
      "Errors usually happen because of direct translation.",
      "Checklist 1: Is it showing time, place, movement, topic, or connection?",
      "Checklist 2: Is the word after it a noun phrase or a clause?",
      "Checklist 3: Is this a fixed pattern?",
      "Checklist 4: Does the verb actually need a preposition?"
    ],
    "patterns": [],
    "examples": [
      { "type": "Movement Error", "sentence": "Wrong: I arrived to school. / Correct: I arrived at school.", "note": "Arrive takes at or in." },
      { "type": "Adjective Error", "sentence": "Wrong: I am interested about English. / Correct: I am interested in English.", "note": "Fixed pattern." },
      { "type": "Adjective Error", "sentence": "Wrong: She is good in speaking. / Correct: She is good at speaking.", "note": "Fixed pattern." },
      { "type": "Verb Error", "sentence": "Wrong: We discussed about the lesson. / Correct: We discussed the lesson.", "note": "Discuss takes no preposition." },
      { "type": "Verb Error", "sentence": "Wrong: I entered to the room. / Correct: I entered the room.", "note": "Enter takes no preposition." },
      { "type": "Time Error", "sentence": "Wrong: I have studied since two years. / Correct: I have studied for two years.", "note": "Duration = for." },
      { "type": "Time Error", "sentence": "Wrong: I will submit it until Friday. / Correct: I will submit it by Friday.", "note": "Deadline = by." },
      { "type": "Place Error", "sentence": "Wrong: The book is in the table. / Correct: The book is on the table.", "note": "Surface = on." }
    ],
    "commonMistakes": [
      "Mistake: Translating word-for-word. | Solution: Learn prepositions as parts of phrases, not as individual words."
    ],
    "repairSteps": [],
    "practicePrompts": [
      "Fix this sentence: 'I am afraid from spiders.'",
      "Fix this sentence: 'He went in the room.'"
    ],
    "classroomUse": "Write all the 'Wrong' sentences on the board. Group students and have them find and correct all the errors. The first group to fix them all wins.",
    "quickComparison": "Translated prepositions vs Contextual prepositions.",
    "summary": [
      "Stop translating prepositions directly.",
      "Check if you are dealing with time, place, movement, or a fixed pattern.",
      "Remember that some English verbs do not need prepositions at all."
    ]
  }
];

if (modified.endsWith(',')) {
    // it shouldn't, but just in case
} else {
    modified += ',';
}

fs.writeFileSync('data/lessons.js', modified + '\n' + newLessons.map(l => JSON.stringify(l, null, 2)).join(',\n') + '\n];\n');
console.log('Appended lessons successfully.');
