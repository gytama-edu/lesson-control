import fs from 'fs';
import { lessons } from '../data/lessons.js';

const updated = [
  {
    "id": "grammar-prepositions-overview",
    "backHref": "prepositions.html",
    "backLabel": "Back to Prepositions",
    "title": "What Are Prepositions?",
    "skill": "Grammar",
    "category": "Preposition Foundations",
    "level": "Beginner",
    "description": "Learn what prepositions are and the relationships they show.",
    "introduction": "Welcome to the world of prepositions! Have you ever wondered how words connect to show where things are, when things happen, or why we do things? Prepositions are the tiny, hardworking words in English that act like the glue in a sentence. They connect a noun to the rest of the sentence to show us time, place, direction, and relationship. Without them, our sentences would fall apart like a building with no cement. Let's learn how these small words make a huge difference in your English fluency.",
    "learningGoals": [
      "Understand that prepositions show relationships between words.",
      "Recognize common prepositions of time, place, direction, reason, method, connection, or topic."
    ],
    "meaning": "Prepositions are small connecting words (like 'in', 'on', 'at', 'with', 'by') that show the relationship between a noun (or pronoun) and the rest of the sentence. They never stand alone; they always introduce a noun, pronoun, or noun phrase. Their main job is to indicate time (when), place (where), direction (where to), reason (why), method (how), connection (with what), or topic (about what).",
    "uses": [
      "To show location or place (Where is it? e.g., on the table, in the room).",
      "To show time (When did it happen? e.g., at 5 PM, on Monday).",
      "To show direction or movement (Where is it going? e.g., to the store, into the box).",
      "To show relationships like method, reason, or possession (How? Why? Whose? e.g., by bus, for you, with my friend)."
    ],
    "patterns": [
      {
        "name": "The Golden Rule of Prepositions",
        "formula": "Preposition + Noun / Pronoun / Noun Phrase",
        "explanation": "A preposition must ALWAYS be followed by a noun, pronoun, or noun phrase. This following word is called the 'object of the preposition'. A preposition is almost never followed directly by a verb."
      }
    ],
    "stepByStep": "Here is how you can spot and use a preposition in a sentence:<br><br>1. <strong>Find the noun or pronoun</strong> that needs to be connected to the sentence. For example: 'the table'.<br>2. <strong>Determine the relationship</strong>. Do you want to say the book is on top of it, underneath it, or next to it?<br>3. <strong>Choose the right preposition</strong>. If it is on top and touching the surface, use 'on'.<br>4. <strong>Connect them</strong>. 'The book is <em>on the table</em>.' The preposition 'on' connects 'the book' and 'the table'.",
    "examples": [
      { "type": "Simple Place", "sentence": "The keys are on the table.", "note": "'on' connects 'keys' and 'table' to show location (surface)." },
      { "type": "Simple Time", "sentence": "I wake up at 6 AM.", "note": "'at' shows the specific time." },
      { "type": "Simple Direction", "sentence": "She walked to the park.", "note": "'to' shows the destination." },
      { "type": "Simple Method", "sentence": "He traveled by train.", "note": "'by' shows how he traveled." },
      { "type": "Simple Connection", "sentence": "I went with my sister.", "note": "'with' shows who accompanied the speaker." },
      
      { "type": "Classroom", "sentence": "Write your name on the paper.", "note": "Common teacher instruction showing surface location." },
      { "type": "Classroom", "sentence": "Please look at the whiteboard.", "note": "'at' shows the direction of looking." },
      { "type": "Classroom", "sentence": "We will have a quiz on Friday.", "note": "'on' is used for days of the week." },
      
      { "type": "Real-Life", "sentence": "Let's meet at the coffee shop.", "note": "'at' shows a specific point on a map." },
      { "type": "Real-Life", "sentence": "This package is for you.", "note": "'for' shows who receives the package." },
      { "type": "Real-Life", "sentence": "I read an article about space.", "note": "'about' introduces the topic." },
      
      { "type": "Advanced", "sentence": "Despite the heavy rain, they continued the match.", "note": "'Despite' is a preposition showing contrast." },
      { "type": "Advanced", "sentence": "The temperature dropped below freezing.", "note": "'below' acts as a preposition indicating a level lower than something else." }
    ],
    "commonMistakes": [
      {
        "wrong": "I go school.",
        "correct": "I go to school.",
        "explanation": "You are moving towards a destination, so you must use the preposition of direction 'to'.",
        "fix": "Always use 'to' after 'go' when stating a destination."
      },
      {
        "wrong": "I am waiting my friend.",
        "correct": "I am waiting for my friend.",
        "explanation": "The verb 'wait' requires the preposition 'for' before its object.",
        "fix": "Memorize 'wait for' as a complete phrase."
      },
      {
        "wrong": "We discussed about the project.",
        "correct": "We discussed the project.",
        "explanation": "Some verbs like 'discuss' already mean 'talk about'. Adding 'about' is redundant.",
        "fix": "Remove 'about'. Just use 'discuss' + the noun."
      },
      {
        "wrong": "I arrived to the airport.",
        "correct": "I arrived at the airport.",
        "explanation": "'Arrive' takes 'at' for a point/building, or 'in' for a city/country. It never takes 'to'.",
        "fix": "Change 'to' to 'at'."
      },
      {
        "wrong": "She is married with him.",
        "correct": "She is married to him.",
        "explanation": "This is a direct translation error from many languages. In English, we say 'married to'.",
        "fix": "Use 'to' instead of 'with' after married."
      }
    ],
    "quickComparison": "<strong>Preposition vs. Conjunction:</strong> Prepositions are followed by nouns or noun phrases (e.g., <em>Because of the rain</em>). Conjunctions are followed by full clauses with a subject and verb (e.g., <em>Because it rained</em>).",
    "indonesianLearnerWarning": "In Indonesian, the word 'di' covers 'in', 'on', and 'at'. The word 'ke' covers 'to' and 'into'. Because English has many more specific prepositions, do not translate word-for-word. Learn the specific English rule for each situation instead.",
    "practicePrompts": [
      "Identify all the prepositions in this sentence: 'The cat jumped over the fence and ran into the house.'",
      "Complete the sentence: 'I have a meeting ___ Monday ___ 9 AM.'",
      "Correct the mistake: 'I will call you at the evening.'",
      "Make your own sentence describing where three objects in your room are located using in, on, and under.",
      "Speaking prompt: Tell a partner about your daily commute. Use prepositions like from, to, by, and at."
    ],
    "classroomUse": "<strong>Preposition Hunt:</strong> Give students a short reading passage and ask them to circle every preposition they find. Then, have them underline the noun phrase that follows it. This visualizes 'The Golden Rule of Prepositions'.",
    "summary": [
      "Prepositions connect nouns to the rest of the sentence.",
      "They act as the glue for time, place, direction, and reason.",
      "The Golden Rule: A preposition is ALWAYS followed by a noun, pronoun, or noun phrase.",
      "Prepositions are rarely followed by verbs.",
      "Never translate prepositions directly from your native language."
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
    "introduction": "Now that you know what a preposition is, it's time to look at the bigger picture: the prepositional phrase. A preposition rarely works alone. It always brings a partner—a noun or pronoun. Together, they form a 'prepositional phrase'. Think of a prepositional phrase as a single block of Lego. You can attach this block to different parts of your sentence to add rich details about when, where, how, or which one. Learning to see these phrases as single units will dramatically improve both your reading comprehension and your sentence-building skills.",
    "learningGoals": [
      "Identify prepositional phrases in a sentence.",
      "Understand that prepositional phrases act as adjectives or adverbs to add extra information."
    ],
    "meaning": "A prepositional phrase is a group of words that begins with a preposition and ends with a noun, pronoun, or noun phrase. The noun at the end is called the 'object of the preposition'. Once combined, the whole phrase acts like an adjective (describing a noun) or an adverb (describing a verb, telling us when, where, or how).",
    "uses": [
      "To act as an adjective: telling us 'which one' (e.g., The boy <em>in the blue shirt</em>).",
      "To act as an adverb of place: telling us 'where' (e.g., We slept <em>in the tent</em>).",
      "To act as an adverb of time: telling us 'when' (e.g., They left <em>after the movie</em>).",
      "To act as an adverb of manner: telling us 'how' (e.g., She spoke <em>with confidence</em>)."
    ],
    "patterns": [
      {
        "name": "The Prepositional Phrase Formula",
        "formula": "Preposition + (Modifiers) + Noun / Pronoun",
        "explanation": "Every phrase starts with the preposition and ends with the noun. Any words in between (like 'the', 'a', or adjectives like 'big red') are part of the phrase too."
      }
    ],
    "stepByStep": "How to build and identify a prepositional phrase:<br><br>1. <strong>Start with the preposition:</strong> 'under'.<br>2. <strong>Add modifiers (optional):</strong> 'the big, heavy'.<br>3. <strong>Add the noun object:</strong> 'table'.<br>4. <strong>Combine them:</strong> 'under the big, heavy table'.<br>5. <strong>Attach it to a sentence:</strong> 'The cat slept <em>under the big, heavy table</em>.' The whole phrase acts as one unit telling us WHERE the cat slept.",
    "examples": [
      { "type": "Simple Adverbial (Place)", "sentence": "She studies in the library.", "note": "'in the library' describes where she studies." },
      { "type": "Simple Adverbial (Time)", "sentence": "We will eat after class.", "note": "'after class' describes when we will eat." },
      { "type": "Simple Adjectival", "sentence": "The man in the black suit is the manager.", "note": "'in the black suit' describes WHICH man." },
      { "type": "Simple Manner", "sentence": "He fixed the car with ease.", "note": "'with ease' describes HOW he fixed it." },
      { "type": "Simple Direction", "sentence": "They walked across the bridge.", "note": "'across the bridge' shows the path of movement." },
      
      { "type": "Classroom", "sentence": "Put your books under your desks.", "note": "'under your desks' is the place phrase." },
      { "type": "Classroom", "sentence": "The student at the back has a question.", "note": "'at the back' describes the student." },
      { "type": "Classroom", "sentence": "We will review this before the exam.", "note": "'before the exam' is the time phrase." },
      
      { "type": "Real-Life", "sentence": "I spilled coffee on my new shirt.", "note": "Place phrase acting as an adverb." },
      { "type": "Real-Life", "sentence": "The shop across the street sells great pastry.", "note": "Adjective phrase describing 'shop'." },
      { "type": "Real-Life", "sentence": "She answered the phone during dinner.", "note": "Time phrase describing when she answered." },
      
      { "type": "Advanced", "sentence": "The documents on the executive's desk must be signed by tomorrow.", "note": "Two phrases: 'on the executive's desk' (adjective) and 'by tomorrow' (adverb)." },
      { "type": "Advanced", "sentence": "He succeeded through sheer determination and hard work.", "note": "'through sheer determination and hard work' is a long phrase showing method." }
    ],
    "commonMistakes": [
      {
        "wrong": "She put the keys in.",
        "correct": "She put the keys in her bag.",
        "explanation": "A prepositional phrase must have an object (a noun). If it doesn't, it is not a complete phrase (and 'in' is acting as an adverb instead).",
        "fix": "Always finish the phrase with a noun object."
      },
      {
        "wrong": "The boy in the shirt blue.",
        "correct": "The boy in the blue shirt.",
        "explanation": "Inside the prepositional phrase, normal word order rules apply. Adjectives must come before the noun.",
        "fix": "Move the adjective before the noun object."
      },
      {
        "wrong": "He talked to she.",
        "correct": "He talked to her.",
        "explanation": "If the object of a preposition is a pronoun, it MUST be an object pronoun (me, him, her, us, them), not a subject pronoun.",
        "fix": "Change the subject pronoun to an object pronoun."
      },
      {
        "wrong": "We met in the Monday.",
        "correct": "We met on Monday.",
        "explanation": "Using the wrong preposition completely breaks the phrase's meaning. Days require 'on'.",
        "fix": "Choose the correct preposition for the specific noun."
      },
      {
        "wrong": "The car in the garage is belong to me.",
        "correct": "The car in the garage belongs to me.",
        "explanation": "Students sometimes confuse the prepositional phrase with the verb. 'in the garage' just describes the car; it doesn't replace the main verb structure.",
        "fix": "Make sure the main sentence still has a proper subject and verb."
      }
    ],
    "quickComparison": "<strong>Prepositional Phrase vs. Clause:</strong> A phrase does not have a subject acting on a verb. <em>'in the morning'</em> is a phrase. <em>'when morning came'</em> is a clause because it has a subject (morning) and a verb (came).",
    "indonesianLearnerWarning": "In Indonesian, adjective phrases often come after the noun, just like English ('buku di atas meja' = 'the book on the table'). However, remember that if you use a pronoun inside the phrase, it must be the object form (e.g., 'untuk saya' = 'for me', never 'for I').",
    "practicePrompts": [
      "Identify the prepositional phrase and its object: 'The dog slept under the warm blanket.'",
      "Expand this sentence by adding a prepositional phrase of time: 'I will finish my homework.'",
      "Correct the mistake: 'This gift is for they.'",
      "Write a sentence containing two prepositional phrases: one for place, and one for time.",
      "Speaking prompt: Look around the room. Describe where five different items are using prepositional phrases."
    ],
    "classroomUse": "<strong>Sentence Expansion Relay:</strong> Write a basic sentence on the board (e.g., 'The cat jumped.'). Divide the class into teams. Each team must take turns adding one prepositional phrase to the sentence to make it longer and longer (e.g., 'The cat jumped [over the fence] [into the garden] [during the night]...').",
    "summary": [
      "A prepositional phrase always starts with a preposition and ends with a noun or pronoun.",
      "The noun at the end is called the 'object of the preposition'.",
      "If the object is a pronoun, it must be an object pronoun (me, him, her, us, them).",
      "These phrases act like giant adjectives or adverbs.",
      "They provide essential details like when, where, which one, and how."
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
    "introduction": "Welcome to one of the trickiest parts of the English language: dependent prepositions. Sometimes, a preposition isn't chosen because of logic (like 'in' for a box or 'on' for a table). Instead, it is chosen simply because the word before it demands it. Just like certain people are married and always attend parties together, certain English verbs, adjectives, and nouns are 'married' to specific prepositions. You cannot guess these by translating from your native language; you must learn them as a single vocabulary unit. Let's explore these inseparable couples.",
    "learningGoals": [
      "Recognize that certain verbs, adjectives, and nouns require specific prepositions.",
      "Learn to study vocabulary as fixed 'chunks' or phrases rather than isolated words.",
      "Identify common preposition combinations."
    ],
    "meaning": "Dependent prepositions are prepositions that must follow a specific verb, adjective, or noun to connect it to an object. There is often no logical rule for why a specific preposition is used. For example, why are we 'good AT' something but 'interested IN' something else? It's just the way the language evolved. You must memorize the word and the preposition together.",
    "uses": [
      "To connect an intransitive verb to its object (e.g., listen TO music).",
      "To connect an adjective describing feelings or skills to the trigger (e.g., afraid OF spiders).",
      "To connect a noun to its related subject matter (e.g., the reason FOR the delay)."
    ],
    "patterns": [
      {
        "name": "Verb + Preposition",
        "formula": "Verb + Specific Preposition + Object",
        "explanation": "Examples: wait for, listen to, agree with, look at, look for, depend on."
      },
      {
        "name": "Adjective + Preposition",
        "formula": "Verb 'to be' + Adjective + Specific Preposition + Object",
        "explanation": "Examples: interested in, good at, bad at, famous for, afraid of, similar to."
      },
      {
        "name": "Noun + Preposition",
        "formula": "Noun + Specific Preposition + Object",
        "explanation": "Examples: reason for, solution to, advantage of, increase in, problem with."
      }
    ],
    "stepByStep": "How to master dependent prepositions:<br><br>1. <strong>Stop translating.</strong> Do not try to translate the preposition directly from your language. It will often be wrong.<br>2. <strong>Learn chunks.</strong> When you write a new word in your notebook, write its preposition with it. Don't write 'listen'. Write 'listen to'. Don't write 'good'. Write 'good at'.<br>3. <strong>Use them in context.</strong> Practice making sentences about yourself using the new combinations. Memory loves personal connection.",
    "examples": [
      { "type": "Verb + Prep", "sentence": "I am listening to music.", "note": "'listen' requires 'to'." },
      { "type": "Verb + Prep", "sentence": "It depends on the weather.", "note": "'depend' requires 'on'." },
      { "type": "Adjective + Prep", "sentence": "She is good at mathematics.", "note": "'good' (for skills) requires 'at'." },
      { "type": "Adjective + Prep", "sentence": "I am interested in history.", "note": "'interested' requires 'in'." },
      { "type": "Noun + Prep", "sentence": "What is the reason for this mistake?", "note": "'reason' requires 'for'." },
      
      { "type": "Classroom", "sentence": "Please look at the board.", "note": "'look at' means to focus your eyes on something." },
      { "type": "Classroom", "sentence": "Who knows the answer to question 5?", "note": "'answer' as a noun takes 'to'." },
      { "type": "Classroom", "sentence": "Are you ready for the test?", "note": "'ready' takes 'for'." },
      
      { "type": "Real-Life", "sentence": "I am waiting for the bus.", "note": "'wait' requires 'for'." },
      { "type": "Real-Life", "sentence": "He apologized for being late.", "note": "'apologize' requires 'for' the action." },
      { "type": "Real-Life", "sentence": "We are very proud of you.", "note": "'proud' requires 'of'." },
      
      { "type": "Advanced", "sentence": "She is responsible for managing the entire marketing department.", "note": "'responsible' takes 'for'. Notice it is followed by an -ing verb." },
      { "type": "Advanced", "sentence": "There has been a significant increase in the cost of living.", "note": "'increase' as a noun takes 'in'." }
    ],
    "commonMistakes": [
      {
        "wrong": "I listen music every day.",
        "correct": "I listen to music every day.",
        "explanation": "'Listen' cannot take a direct object. It must have the preposition 'to' before the object.",
        "fix": "Always say 'listen to'."
      },
      {
        "wrong": "She is good in speaking English.",
        "correct": "She is good at speaking English.",
        "explanation": "In many languages, 'in' is used for skills. In English, the phrase is 'good at' or 'bad at'.",
        "fix": "Change 'in' to 'at'."
      },
      {
        "wrong": "I am interested about that book.",
        "correct": "I am interested in that book.",
        "explanation": "Although we 'talk about' things, we are 'interested in' things.",
        "fix": "Change 'about' to 'in'."
      },
      {
        "wrong": "We need a solution of this problem.",
        "correct": "We need a solution to this problem.",
        "explanation": "The noun 'solution' pairs with 'to', not 'of'.",
        "fix": "Use 'to' with solution."
      },
      {
        "wrong": "He is married with Sarah.",
        "correct": "He is married to Sarah.",
        "explanation": "This is a very common direct translation error. In English, you are married TO someone.",
        "fix": "Change 'with' to 'to'."
      }
    ],
    "quickComparison": "<strong>Look at vs. Look for:</strong> 'Look at' means to focus your eyes on something (Look at the board). 'Look for' means to search for something (I am looking for my keys). The preposition changes the verb's meaning entirely!",
    "indonesianLearnerWarning": "Indonesian speakers often say 'good in' (bagus di/dalam), 'married with' (menikah dengan), and 'discuss about' (membahas tentang). You must unlearn these translations. Memorize the English pairs: 'good at', 'married to', and 'discuss' (no preposition!).",
    "practicePrompts": [
      "Fill in the blank: 'Are you afraid ___ the dark?'",
      "Correct the mistake: 'It depends of the situation.'",
      "Write three sentences using 'good at', 'interested in', and 'proud of'.",
      "Fill in the blank: 'I need to ask my teacher for the answer ___ this question.'",
      "Speaking prompt: Tell a partner about three things you are 'good at' and two things you are 'bad at'."
    ],
    "classroomUse": "<strong>Preposition Match-Up:</strong> Create two sets of cards. One set has verbs/adjectives (interested, good, wait, depend). The other has prepositions (in, at, for, on). Have students race in groups to match the couples perfectly.",
    "summary": [
      "Many verbs, adjectives, and nouns are permanently 'married' to specific prepositions.",
      "There is no logical rule for these; they must be memorized.",
      "Never translate these combinations directly from your native language.",
      "Learn vocabulary in chunks (e.g., memorize 'interested in', not just 'interested').",
      "If a verb follows these prepositions, it must be an -ing verb (e.g., good at *playing*)."
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
console.log('Updated 3 lessons using ESM');
