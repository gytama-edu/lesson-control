import fs from 'fs';
import { lessons } from '../data/lessons.js';

const updated = [
  {
    "id": "grammar-word-order-overview",
    "backHref": "word-order.html",
    "backLabel": "Back to Word Order",
    "title": "What Is Word Order?",
    "skill": "Grammar",
    "category": "Word Order",
    "level": "Beginner",
    "description": "Learn why English word order is strict and how it affects meaning.",
    "introduction": "In some languages, you can put words in almost any order, and the meaning stays the same because special endings tell you who is doing what. English is NOT like that. English lost most of its word endings centuries ago. Because of this, English relies entirely on the order of the words to make sense. If you change the order, you change the meaning completely, or you create nonsense. Let's explore why English is so strict about where words live in a sentence.",
    "learningGoals": [
      "Understand why word order is critical in English.",
      "Recognize that swapping the subject and object reverses the meaning.",
      "Learn the concept of 'fixed positions' for English words."
    ],
    "meaning": "Word order is the sequence in which words appear in a sentence. In English, the actor usually comes first, followed by the action, followed by the receiver. This sequence acts as the structural skeleton of the language.",
    "uses": [
      "Clarity: Ensures the listener knows exactly who did what to whom.",
      "Grammar: Determines if a sentence is a statement or a question."
    ],
    "patterns": [
      {
        "name": "The Reversal Effect",
        "formula": "Actor + Action + Receiver",
        "explanation": "'The dog bit the man' (Normal). 'The man bit the dog' (Crazy news story!). Changing the order changes the reality."
      }
    ],
    "stepByStep": "Why English needs strict order:<br><br>1. <strong>Look at a sentence:</strong> 'Jane loves Mark.'<br>2. <strong>Identify the actor:</strong> Jane (She comes before the verb).<br>3. <strong>Identify the receiver:</strong> Mark (He comes after the verb).<br>4. <strong>Swap them:</strong> 'Mark loves Jane.' Now Mark is the actor! The grammar doesn't change, but the reality changes.",
    "examples": [
      { "type": "Clear Meaning", "sentence": "The cat chased the mouse.", "note": "Standard actor -> action -> receiver." },
      { "type": "Reversed Meaning", "sentence": "The mouse chased the cat.", "note": "Grammatically perfect, logically weird." },
      { "type": "Nonsense", "sentence": "Chased cat the mouse the.", "note": "Without order, English collapses into nonsense." }
    ],
    "commonMistakes": [
      {
        "wrong": "Ate the boy an apple.",
        "correct": "The boy ate an apple.",
        "explanation": "You cannot start a standard English statement with the verb. The actor (Subject) must come first.",
        "fix": "Always put the Subject before the Verb."
      },
      {
        "wrong": "I like very much pizza.",
        "correct": "I like pizza very much.",
        "explanation": "You cannot put adverbs of intensity between the verb (like) and its object (pizza).",
        "fix": "Keep the verb and object together."
      }
    ],
    "quickComparison": "<strong>English vs Flexible Languages:</strong> In Latin or Russian, 'Canis hominem mordet' and 'Hominem mordet canis' both mean 'The dog bites the man'. In English, you cannot do this. Position is everything.",
    "indonesianLearnerWarning": "Indonesian actually shares a very similar Subject-Verb-Object basic word order with English! The main difficulties will arise when dealing with adjectives and questions, which we will cover later.",
    "practicePrompts": [
      "Fix the nonsense sentence: 'The drank girl water the.'",
      "Change the meaning by swapping two words: 'The car hit the truck.'",
      "Correct the mistake: 'I play every day tennis.'"
    ],
    "classroomUse": "<strong>The Human Sentence:</strong> Give three students flashcards: 'The Teacher', 'Teaches', 'The Student'. Have them stand in order. Then swap the first and last student. Ask the class: 'Does this make sense now?'",
    "summary": [
      "English has very strict word order compared to many other languages.",
      "The order of words tells us who did the action and who received it.",
      "Changing the order usually changes the meaning of the sentence entirely.",
      "The most basic rule is that the Actor (Subject) comes before the Action (Verb)."
    ]
  },
  {
    "id": "grammar-word-order-svo",
    "backHref": "word-order.html",
    "backLabel": "Back to Word Order",
    "title": "Subject + Verb + Object Order",
    "skill": "Grammar",
    "category": "Word Order",
    "level": "Beginner",
    "description": "Master the standard SVO pattern used in most English sentences.",
    "introduction": "If English grammar is a house, the S-V-O pattern is the foundation. About 80% of all sentences you will ever speak or write in English follow this exact sequence: Subject, Verb, Object. Once you internalize this rhythm, you can build millions of clear, correct sentences without even thinking about it. Let's look at the Golden Rule of English sentence building.",
    "learningGoals": [
      "Identify the Subject (Who/What does the action).",
      "Identify the Verb (The action itself).",
      "Identify the Object (Who/What receives the action).",
      "Learn never to separate the Verb and the Object."
    ],
    "meaning": "SVO means Actor -> Action -> Receiver. The Subject does something. The Verb is what they do. The Object is the thing they do it to.",
    "uses": [
      "Making clear statements about actions and events."
    ],
    "patterns": [
      {
        "name": "The SVO Formula",
        "formula": "Subject (S) + Verb (V) + Object (O)",
        "explanation": "Example: I (S) speak (V) English (O)."
      }
    ],
    "stepByStep": "How to build an SVO sentence:<br><br>1. <strong>Start with WHO:</strong> The chef (Subject).<br>2. <strong>Add WHAT THEY DID:</strong> cooked (Verb).<br>3. <strong>Add WHAT RECEIVED THE ACTION:</strong> the pasta (Object).<br>4. <strong>Result:</strong> 'The chef cooked the pasta.'<br>5. <strong>The Golden Rule:</strong> NEVER put anything between the Verb and the Object. ('The chef cooked quickly the pasta' is WRONG).",
    "examples": [
      { "type": "Basic SVO", "sentence": "She (S) drinks (V) coffee (O).", "note": "Simple present." },
      { "type": "Past SVO", "sentence": "We (S) bought (V) a new car (O).", "note": "Simple past." },
      { "type": "Future SVO", "sentence": "They (S) will build (V) a house (O).", "note": "Simple future." },
      { "type": "Classroom", "sentence": "The teacher (S) answered (V) the question (O).", "note": "Standard classroom action." }
    ],
    "commonMistakes": [
      {
        "wrong": "I speak very well English.",
        "correct": "I speak English very well.",
        "explanation": "This is a massive mistake for many learners. You cannot separate the Verb (speak) and the Object (English). The adverb phrase (very well) must go at the end.",
        "fix": "Keep the Verb and Object glued together."
      },
      {
        "wrong": "Drank he the water.",
        "correct": "He drank the water.",
        "explanation": "The Subject must come first in a statement.",
        "fix": "Always start with the Subject."
      }
    ],
    "quickComparison": "<strong>SVO vs SV:</strong> Some verbs don't need an Object. These are called Intransitive verbs. (E.g., 'I sleep.' 'The sun rises.') The pattern is just Subject + Verb.",
    "indonesianLearnerWarning": "Indonesian uses SVO! 'Saya (S) minum (V) kopi (O)'. This makes basic English sentences very easy for you to construct. Just beware of the 'no adverbs between Verb and Object' rule.",
    "practicePrompts": [
      "Identify S, V, and O: 'The company launched a new product.'",
      "Correct the mistake: 'He plays every weekend football.'",
      "Correct the mistake: 'She reads slowly the book.'",
      "Write your own SVO sentence about what you ate for breakfast."
    ],
    "classroomUse": "<strong>The Magnet Rule:</strong> Draw a magnet between the Verb and the Object on the board. Explain that they are magnetically stuck together. Write words like 'quickly' or 'often' on paper and ask students to place them—they will quickly see that they cannot break the magnetic bond between V and O.",
    "summary": [
      "The most basic English sentence pattern is Subject + Verb + Object (SVO).",
      "Subject = Actor. Verb = Action. Object = Receiver.",
      "You must NEVER put an adverb or extra information between the Verb and the Object.",
      "If you learn nothing else about word order, learn SVO."
    ]
  },
  {
    "id": "grammar-word-order-svc",
    "backHref": "word-order.html",
    "backLabel": "Back to Word Order",
    "title": "Subject + Verb + Complement Order",
    "skill": "Grammar",
    "category": "Word Order",
    "level": "Beginner",
    "description": "Understand how to order sentences with linking verbs and descriptions.",
    "introduction": "We know about SVO (Subject-Verb-Object) for actions. 'I kick the ball.' But what if there is no action? What if you just want to describe something? 'The sky is blue.' 'She looks tired.' In these sentences, nobody is doing anything to anybody else. Instead, we use a 'linking verb' to connect the Subject to a description. This pattern is called Subject-Verb-Complement (SVC). Let's learn how to build sentences that describe reality.",
    "learningGoals": [
      "Understand what a 'linking verb' is (is, am, are, seems, looks, feels).",
      "Understand what a 'Complement' is (an adjective or noun that describes the subject).",
      "Master the SVC sentence pattern."
    ],
    "meaning": "In an SVC sentence, the Verb acts like an equals sign (=). The Subject = the Complement. The Complement gives us more information about the Subject.",
    "uses": [
      "Describing states of being, emotions, appearances, and identities."
    ],
    "patterns": [
      {
        "name": "The SVC Formula",
        "formula": "Subject (S) + Linking Verb (V) + Complement (C)",
        "explanation": "Example: The soup (S) smells (V) delicious (C). (Soup = Delicious)."
      }
    ],
    "stepByStep": "How to build an SVC sentence:<br><br>1. <strong>Start with the Subject:</strong> 'My brother'.<br>2. <strong>Choose a linking verb:</strong> 'is' or 'became' or 'seems'. Let's use 'is'.<br>3. <strong>Add the Complement (the description):</strong> 'a doctor' (Noun) OR 'tall' (Adjective).<br>4. <strong>Result:</strong> 'My brother <em>is</em> a doctor.' (Brother = Doctor).",
    "examples": [
      { "type": "Adjective Complement", "sentence": "The water (S) is (V) cold (C).", "note": "Describing a state." },
      { "type": "Noun Complement", "sentence": "She (S) became (V) a teacher (C).", "note": "Describing an identity." },
      { "type": "Senses", "sentence": "That sounds (V) amazing (C).", "note": "Using sense verbs (look, sound, smell, feel, taste)." },
      { "type": "Emotion", "sentence": "I (S) feel (V) happy (C).", "note": "Describing an internal state." }
    ],
    "commonMistakes": [
      {
        "wrong": "She looks beautifully.",
        "correct": "She looks beautiful.",
        "explanation": "This is a very common advanced mistake! Linking verbs (like look, seem, feel) take Adjectives (beautiful), NOT Adverbs (beautifully). We are describing the Subject (She), not the action of looking.",
        "fix": "Always use adjectives after linking verbs."
      },
      {
        "wrong": "Is cold the water.",
        "correct": "The water is cold.",
        "explanation": "Just like SVO, you must start with the Subject.",
        "fix": "Subject first."
      }
    ],
    "quickComparison": "<strong>SVO vs SVC:</strong> SVO: 'I (S) smell (V) the pizza (O).' (I am doing the action of smelling the object). SVC: 'The pizza (S) smells (V) delicious (C).' (The pizza is not actively smelling anything; it possesses the quality of being delicious).",
    "indonesianLearnerWarning": "In Indonesian, you often drop the linking verb entirely! 'Dia guru' (He teacher). 'Air dingin' (Water cold). In English, you MUST include the linking verb (is/am/are) to make the sentence grammatically correct.",
    "practicePrompts": [
      "Identify S, V, and C: 'The movie was terrifying.'",
      "Correct the mistake: 'He seems angrily today.'",
      "Correct the mistake: 'My father a doctor.'",
      "Write an SVC sentence using the verb 'tastes'."
    ],
    "classroomUse": "<strong>The Equals Sign Game:</strong> Write a list of subjects on the left board (The weather, My dog, This song) and a list of complements on the right board (loud, crazy, sunny). Have students draw lines connecting them, inserting an '=' sign, and then read the sentence out loud using a linking verb.",
    "summary": [
      "The SVC pattern is used for descriptions, not actions.",
      "The Verb acts like an equals sign (Subject = Complement).",
      "Common linking verbs are: be, become, seem, look, feel, taste, sound, smell.",
      "Complements can be nouns (a doctor) or adjectives (happy).",
      "Never use an adverb (happily) after a linking verb."
    ]
  },
  {
    "id": "grammar-word-order-manner-place-time",
    "backHref": "word-order.html",
    "backLabel": "Back to Word Order",
    "title": "Manner, Place, and Time",
    "skill": "Grammar",
    "category": "Word Order",
    "level": "Intermediate",
    "description": "Learn the natural sequence for adding extra information to sentences.",
    "introduction": "You know how to build a basic SVO sentence: 'I ate pizza.' But what if you want to add more details? How did you eat it? Where did you eat it? When did you eat it? If you throw all this extra information into the sentence randomly, it sounds messy and confusing. English has a specific, preferred order for these details at the end of a sentence: Manner (How), Place (Where), and Time (When). We call this the M-P-T rule.",
    "learningGoals": [
      "Understand the categories of extra information: Manner, Place, and Time.",
      "Memorize the M-P-T sequence for the end of a sentence.",
      "Learn the exception for sentences involving verbs of movement."
    ],
    "meaning": "When adding adverbs or prepositional phrases to the end of a clause, native speakers naturally follow the M-P-T order to keep the sentence logically structured.",
    "uses": [
      "Expanding basic sentences with descriptive details in a natural-sounding way."
    ],
    "patterns": [
      {
        "name": "The M-P-T Formula",
        "formula": "S + V + O + Manner (How) + Place (Where) + Time (When)",
        "explanation": "Example: I ate pizza quickly (M) at the restaurant (P) last night (T)."
      }
    ],
    "stepByStep": "How to stack your details:<br><br>1. <strong>Start with the core sentence:</strong> 'She sang the song.'<br>2. <strong>Add HOW she sang (Manner):</strong> 'beautifully'. -> 'She sang the song beautifully.'<br>3. <strong>Add WHERE she sang (Place):</strong> 'at the concert'. -> 'She sang the song beautifully at the concert.'<br>4. <strong>Add WHEN she sang (Time):</strong> 'yesterday'.<br>5. <strong>Result:</strong> 'She sang the song beautifully at the concert yesterday.'",
    "examples": [
      { "type": "Manner + Place", "sentence": "He slept peacefully (M) in his bed (P).", "note": "No time specified." },
      { "type": "Place + Time", "sentence": "We met at the cafe (P) on Friday (T).", "note": "No manner specified." },
      { "type": "Full MPT", "sentence": "The team worked hard (M) in the office (P) all day (T).", "note": "All three details." },
      { "type": "Movement Exception", "sentence": "I went to London (P) by train (M) last week (T).", "note": "With movement verbs (go, come, travel), Place often comes before Manner." }
    ],
    "commonMistakes": [
      {
        "wrong": "I ate yesterday at the restaurant quickly the pizza.",
        "correct": "I ate the pizza quickly at the restaurant yesterday.",
        "explanation": "This is word order chaos. Remember the Golden Rule: NEVER separate the Verb and Object. Put 'the pizza' right after 'ate'. Then follow M-P-T.",
        "fix": "SVO first, then MPT."
      },
      {
        "wrong": "He played yesterday well.",
        "correct": "He played well yesterday.",
        "explanation": "Time almost always goes at the very end of the sentence (or the very beginning). It rarely goes in the middle.",
        "fix": "Put Time (yesterday) last."
      }
    ],
    "quickComparison": "<strong>Fronting Time:</strong> If you want to emphasize WHEN something happened, you can move the Time to the very front of the sentence. 'Yesterday (T), I ate pizza quickly (M) at the restaurant (P).' This is very common.",
    "indonesianLearnerWarning": "In Indonesian, placing Time right after the Subject is very common ('Saya kemarin makan...'). In English, this is usually incorrect. Keep Time at the end (or very beginning) of the sentence.",
    "practicePrompts": [
      "Put the words in order: (in the park / quietly / read / she / this morning).",
      "Put the words in order: (dinner / ate / eagerly / they / at home / last night).",
      "Correct the mistake: 'I drove yesterday to work slowly.'",
      "Rewrite this sentence putting the Time at the front: 'We played football enthusiastically at the stadium on Sunday.'"
    ],
    "classroomUse": "<strong>The Detail Train:</strong> Write a core SVO sentence on the board ('The monster ate the city'). Have three buckets of cards labeled 'How', 'Where', and 'When'. Have students pick one card from each bucket and build the longest possible correct sentence.",
    "summary": [
      "After the Object, extra details follow the M-P-T order: Manner, Place, Time.",
      "Manner (How): quickly, well, hard.",
      "Place (Where): at home, in the park, on the table.",
      "Time (When): yesterday, last night, at 5 PM.",
      "Time usually goes at the very end of the sentence, but can be moved to the very beginning for emphasis."
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
console.log('Updated 4 word order basic lessons using ESM');
