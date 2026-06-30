import fs from 'fs';
import { lessons } from '../data/lessons.js';

const updated = [
  {
    "id": "grammar-adjectives-before-nouns-linking-verbs",
    "backHref": "word-order.html",
    "backLabel": "Back to Word Order",
    "title": "Adjectives Before Nouns & After Linking Verbs",
    "skill": "Grammar",
    "category": "Word Order",
    "level": "Beginner",
    "description": "Learn the two primary positions for adjectives in English.",
    "introduction": "When you want to describe something, you use an adjective. 'Blue', 'big', 'happy', 'expensive'. But where do you put it? If you put it in the wrong place, your sentence will sound completely broken. English has two—and only two—safe places to put an adjective. Let's learn where they live.",
    "learningGoals": [
      "Place adjectives directly BEFORE the noun they describe.",
      "Place adjectives AFTER linking verbs (is, am, are, look, seem).",
      "Understand why putting an adjective directly after a noun is usually wrong."
    ],
    "meaning": "An adjective describes a noun. Its position tells the listener exactly which noun is being described.",
    "uses": [
      "Adding color, size, emotion, and quality to your sentences."
    ],
    "patterns": [
      {
        "name": "The Pre-Noun Position (Attributive)",
        "formula": "Adjective + Noun",
        "explanation": "Example: The blue car. A happy dog. (The adjective is attached directly to the front of the noun)."
      },
      {
        "name": "The Post-Verb Position (Predicative)",
        "formula": "Noun + Linking Verb + Adjective",
        "explanation": "Example: The car is blue. The dog looks happy. (The verb connects them)."
      }
    ],
    "stepByStep": "How to describe something:<br><br>1. <strong>Method 1 (Direct attach):</strong> Put it right before the noun. -> 'She bought a <em>beautiful</em> house.'<br>2. <strong>Method 2 (Using a verb):</strong> Use a linking verb like 'is' or 'looks'. -> 'Her house <em>is</em> beautiful.'<br>3. <strong>What NOT to do:</strong> Never put a single adjective right after a noun without a verb. -> 'She bought a house beautiful' (WRONG!).",
    "examples": [
      { "type": "Before Noun", "sentence": "He is wearing a red shirt.", "note": "Red describes the shirt." },
      { "type": "Before Noun", "sentence": "It was a terrible movie.", "note": "Terrible describes the movie." },
      { "type": "After Verb", "sentence": "The shirt is red.", "note": "'Is' links the shirt and the color." },
      { "type": "After Verb", "sentence": "The movie seemed terrible.", "note": "'Seemed' links the movie and the opinion." }
    ],
    "commonMistakes": [
      {
        "wrong": "The sky blue is beautiful.",
        "correct": "The blue sky is beautiful. (OR: The sky is blue and beautiful).",
        "explanation": "In many languages, adjectives go after the noun. In English, a single adjective must go BEFORE the noun it describes.",
        "fix": "Always put the adjective before the noun."
      },
      {
        "wrong": "She looks beautifully.",
        "correct": "She looks beautiful.",
        "explanation": "As we learned in SVC word order, linking verbs take adjectives, not adverbs.",
        "fix": "Use adjectives after linking verbs."
      }
    ],
    "quickComparison": "<strong>English vs Romantic Languages:</strong> In Spanish, it's 'el gato negro' (the cat black). In French, it's 'le chat noir' (the cat black). In English, it MUST be 'the black cat'. The adjective comes first.",
    "indonesianLearnerWarning": "Indonesian uses the Noun + Adjective order! 'Kucing hitam' literally translates to 'Cat black'. You must train your brain to flip this backwards when speaking English: 'Black cat'.",
    "practicePrompts": [
      "Combine these: 'The car is fast.' -> 'It is a ___ ___.'",
      "Combine these: 'The coffee is hot.' -> 'I am drinking ___ ___.'",
      "Correct the mistake: 'I want a phone new.'",
      "Write a sentence using the word 'expensive' BEFORE a noun."
    ],
    "classroomUse": "<strong>The Noun-Adjective Flip:</strong> The teacher says a phrase in the students' native language (e.g., 'Rumah besar'). The students must shout the English translation, proving they remembered to flip the word order ('Big house!').",
    "summary": [
      "There are only two places for an adjective.",
      "Position 1: Directly BEFORE the noun (The cold water).",
      "Position 2: AFTER a linking verb (The water is cold).",
      "Never put a single adjective directly after a noun (The water cold is wrong)."
    ]
  },
  {
    "id": "grammar-order-of-multiple-adjectives",
    "backHref": "word-order.html",
    "backLabel": "Back to Word Order",
    "title": "Order of Multiple Adjectives",
    "skill": "Grammar",
    "category": "Word Order",
    "level": "Advanced",
    "description": "Master the natural sequence when using more than one adjective.",
    "introduction": "What if you want to describe a noun with three different adjectives? You have a car. It is old. It is red. It is Italian. Do you say 'the Italian red old car'? No, that sounds crazy to a native speaker. Do you say 'the red old Italian car'? Still sounds weird. English has a secret, unwritten rule that dictates exactly what order multiple adjectives must follow. Even native speakers don't know the rule, they just know what 'sounds right'. Let's unlock the secret.",
    "learningGoals": [
      "Memorize the standard adjective order (OSASCOMP).",
      "Understand why Opinions come first and Materials come last.",
      "Learn not to overuse multiple adjectives in writing."
    ],
    "meaning": "The closer an adjective is to the noun, the more permanent and objective that trait is. Your opinion can change in a second, so it goes first. The material it is made of cannot change, so it goes right next to the noun.",
    "uses": [
      "Stacking multiple descriptive words naturally."
    ],
    "patterns": [
      {
        "name": "The OSASCOMP Rule",
        "formula": "Opinion, Size, Age, Shape, Color, Origin, Material, Purpose + Noun",
        "explanation": "Example: A lovely (Opinion) little (Size) old (Age) rectangular (Shape) green (Color) French (Origin) silver (Material) whittling (Purpose) knife."
      }
    ],
    "stepByStep": "How to order adjectives:<br><br>1. <strong>Opinion always goes first:</strong> Beautiful, ugly, delicious.<br>2. <strong>Physical facts go in the middle (Size, Age, Shape, Color):</strong> Big, old, round, red.<br>3. <strong>Permanent identity goes last (Origin, Material, Purpose):</strong> Japanese, wooden, racing.<br>4. <strong>Result:</strong> 'A beautiful big old red Japanese wooden racing boat.' (Though you should never use this many in real life!)",
    "examples": [
      { "type": "Opinion + Fact", "sentence": "A beautiful red dress.", "note": "Not 'a red beautiful dress'." },
      { "type": "Size + Color", "sentence": "A big black dog.", "note": "Not 'a black big dog'." },
      { "type": "Age + Origin", "sentence": "An old Italian clock.", "note": "Not 'an Italian old clock'." },
      { "type": "Color + Material", "sentence": "A white cotton shirt.", "note": "Not 'a cotton white shirt'." }
    ],
    "commonMistakes": [
      {
        "wrong": "I bought a leather beautiful new jacket.",
        "correct": "I bought a beautiful new leather jacket.",
        "explanation": "Opinion (beautiful) goes first. Age (new) goes in the middle. Material (leather) goes last.",
        "fix": "Opinion -> Fact -> Material."
      },
      {
        "wrong": "She has black long hair.",
        "correct": "She has long black hair.",
        "explanation": "Size/Shape (long) comes before Color (black).",
        "fix": "Size before Color."
      }
    ],
    "quickComparison": "<strong>Commas vs No Commas:</strong> If adjectives are in different categories (Size, Color), you usually don't need commas (A big red dog). If they are in the same category (two opinions), you use a comma (A funny, smart dog).",
    "indonesianLearnerWarning": "Because Indonesian puts adjectives after the noun, a phrase like 'A big red car' translates backwards as 'Mobil (Car) merah (red) besar (big)'. The entire order is completely reversed! Pay close attention to this.",
    "practicePrompts": [
      "Order these words: (wooden / beautiful / old) table.",
      "Order these words: (black / small / plastic) box.",
      "Correct the mistake: 'I love that French old song.'",
      "Write a phrase describing a pair of shoes using Opinion, Color, and Material."
    ],
    "classroomUse": "<strong>The Adjective Train:</strong> The teacher writes a noun on the board ('a car'). Students take turns adding one adjective at a time, but they must place it in the correct grammatical order relative to the other adjectives already on the board.",
    "summary": [
      "When using multiple adjectives, follow the OSASCOMP rule.",
      "Opinion goes first (beautiful, ugly).",
      "Size, Age, Shape, and Color go in the middle (big, old, round, red).",
      "Origin, Material, and Purpose go last, right next to the noun (Italian, wooden, racing).",
      "Try to use no more than three adjectives before a noun in normal writing."
    ]
  },
  {
    "id": "grammar-adjective-phrases-extra-description",
    "backHref": "word-order.html",
    "backLabel": "Back to Word Order",
    "title": "Adjective Phrases",
    "skill": "Grammar",
    "category": "Word Order",
    "level": "Advanced",
    "description": "Understand how to expand adjectives with prepositions and extra descriptions.",
    "introduction": "We learned that single adjectives go BEFORE the noun ('The tall man'). But what if your description requires a whole phrase? What if you want to say the man is 'tall for his age' or 'interested in history'? You cannot put a whole phrase before the noun ('The interested in history man' is completely wrong). When adjectives get long and complicated, they behave differently. Let's learn how to handle heavy adjectives.",
    "learningGoals": [
      "Recognize adjective phrases (adjectives followed by prepositions).",
      "Learn to place adjective phrases AFTER the noun.",
      "Learn to use relative clauses (who/which) for long descriptions."
    ],
    "meaning": "An adjective phrase provides complex detail that a single word cannot capture. Because it is 'heavy' (made of multiple words), it must drop behind the noun so it doesn't interrupt the flow of the sentence.",
    "uses": [
      "Adding complex, specific details to a noun."
    ],
    "patterns": [
      {
        "name": "The Heavy Phrase Rule",
        "formula": "Noun + Adjective Phrase",
        "explanation": "Example: A man (Noun) full of anger (Phrase). (Not 'a full of anger man')."
      },
      {
        "name": "The Relative Clause Alternative",
        "formula": "Noun + Who/Which/That is + Adjective Phrase",
        "explanation": "Example: A man who is full of anger. (This is often clearer)."
      }
    ],
    "stepByStep": "How to handle heavy descriptions:<br><br>1. <strong>Look at your description:</strong> 'afraid of the dark'.<br>2. <strong>Is it a single word?</strong> No, it's a phrase.<br>3. <strong>Can you put it before the noun?</strong> No. ('The afraid of the dark boy' is illegal).<br>4. <strong>Put it AFTER the noun:</strong> 'The boy <em>afraid of the dark</em> cried.'<br>5. <strong>Better option:</strong> Use a relative clause. 'The boy <em>who was afraid of the dark</em> cried.'",
    "examples": [
      { "type": "Single Adjective", "sentence": "The angry man shouted.", "note": "One word, goes before." },
      { "type": "Adjective Phrase", "sentence": "The man angry at the world shouted.", "note": "Heavy phrase, goes after." },
      { "type": "Relative Clause", "sentence": "The man who was angry at the world shouted.", "note": "Clearest option." },
      { "type": "Adjective Phrase", "sentence": "I want a room big enough for three people.", "note": "Cannot say 'a big enough for three people room'." }
    ],
    "commonMistakes": [
      {
        "wrong": "He is a good at tennis player.",
        "correct": "He is a player good at tennis. (Or: He is a player who is good at tennis.)",
        "explanation": "You cannot stack a prepositional phrase ('at tennis') between an adjective and a noun.",
        "fix": "Move the whole heavy phrase behind the noun."
      },
      {
        "wrong": "The full of water glass spilled.",
        "correct": "The glass full of water spilled.",
        "explanation": "Again, the heavy phrase must follow the noun.",
        "fix": "Noun + Phrase."
      }
    ],
    "quickComparison": "<strong>Light vs Heavy:</strong> Light: 'The sleeping baby'. Heavy: 'The baby sleeping in the crib'. (Once you add the prepositional phrase, it must move behind the noun).",
    "indonesianLearnerWarning": "Indonesian handles this naturally because ALL adjectives and phrases go after the noun ('gelas yang penuh air'). Just remember that in English, single words go front, heavy phrases go back.",
    "practicePrompts": [
      "Fix this sentence: 'I need a ready for the party dress.'",
      "Fix this sentence: 'The interested in science students went to the museum.'",
      "Rewrite this using a relative clause: 'The car parked outside is mine.'",
      "Write a sentence describing a 'man' using the phrase 'tired of waiting'."
    ],
    "classroomUse": "<strong>The Weight Test:</strong> Give students a noun ('a book') and a single adjective ('red'). They write 'a red book'. Then give them a phrase ('full of pictures'). They must realize it's too 'heavy' and move it: 'a book full of pictures'.",
    "summary": [
      "Single adjectives go BEFORE the noun (The happy girl).",
      "Adjective phrases (multi-word descriptions) go AFTER the noun (The girl happy with her grade).",
      "It is usually better and clearer to use a relative clause for heavy phrases (The girl who is happy with her grade).",
      "Never stack a prepositional phrase between an adjective and a noun."
    ]
  },
  {
    "id": "grammar-common-adjective-order-mistakes",
    "backHref": "word-order.html",
    "backLabel": "Back to Word Order",
    "title": "Common Adjective Order Mistakes",
    "skill": "Grammar",
    "category": "Word Order",
    "level": "Intermediate",
    "description": "A repair-style lesson to fix typical errors with adjective placement.",
    "introduction": "Even advanced English learners make mistakes with adjectives. Because different languages have entirely different rules for description, our brains constantly try to translate directly, resulting in weird English. Let's do a rapid-fire review of the three most common adjective order mistakes so you can sound more like a native speaker.",
    "learningGoals": [
      "Review the Noun-Adjective error.",
      "Review the Adverb-Linking Verb error.",
      "Review the Multiple Adjective order error."
    ],
    "meaning": "This is a practical review lesson focused on fixing deeply ingrained habits.",
    "uses": [
      "Self-correction and editing your own writing/speech."
    ],
    "patterns": [
      {
        "name": "Error 1: The Backwards Translation",
        "formula": "Wrong: The car black. -> Right: The black car.",
        "explanation": "Never put a single adjective after a noun."
      },
      {
        "name": "Error 2: The Adverb Trap",
        "formula": "Wrong: It tastes badly. -> Right: It tastes bad.",
        "explanation": "Never use an adverb (-ly) after a linking verb (taste, smell, look, feel)."
      },
      {
        "name": "Error 3: The Fact First Error",
        "formula": "Wrong: A red beautiful dress. -> Right: A beautiful red dress.",
        "explanation": "Always put your Opinion before physical Facts."
      }
    ],
    "stepByStep": "How to edit your own adjectives:<br><br>1. <strong>Check position:</strong> Did I put the single adjective before the noun?<br>2. <strong>Check linking verbs:</strong> If I used 'look', 'smell', or 'feel', did I use an adjective (not an adverb)?<br>3. <strong>Check stacking:</strong> If I have two adjectives, is my Opinion listed first?<br>4. <strong>If yes to all:</strong> Your sentence is grammatically correct.",
    "examples": [
      { "type": "Error 1 Fixed", "sentence": "I want a hot coffee.", "note": "Not 'a coffee hot'." },
      { "type": "Error 2 Fixed", "sentence": "The music sounds loud.", "note": "Not 'sounds loudly'." },
      { "type": "Error 3 Fixed", "sentence": "A nice little dog.", "note": "Not 'a little nice dog'." },
      { "type": "Bonus Error Fixed", "sentence": "The rich should help the poor.", "note": "Advanced rule: 'The + Adjective' can act as a plural noun representing a group of people." }
    ],
    "commonMistakes": [
      {
        "wrong": "She is a beautiful, intelligent, tall, young, French, amazing woman.",
        "correct": "She is an amazing, beautiful, tall young French woman.",
        "explanation": "Don't use too many adjectives! Even if the order is perfectly correct grammatically, using more than three adjectives sounds ridiculous in English.",
        "fix": "Keep it to two or three adjectives maximum."
      }
    ],
    "quickComparison": "<strong>Looks good vs Looks well:</strong> 'He looks good' means he is handsome or well-dressed (Adjective describing his appearance). 'He looks well' means he appears healthy after being sick ('Well' is acting as an adjective for health here). Both are correct, but mean different things.",
    "indonesianLearnerWarning": "Pay special attention to Error 1 (The Backwards Translation). Because Indonesian says 'Rumah baru' (House new), you will naturally want to say this in English. You must actively fight this instinct.",
    "practicePrompts": [
      "Fix the Error 1 mistake: 'I need a computer fast.'",
      "Fix the Error 2 mistake: 'The flowers smell sweetly.'",
      "Fix the Error 3 mistake: 'He lives in a brick ugly house.'",
      "Edit this sentence: 'The soup hot tastes deliciously.'"
    ],
    "classroomUse": "<strong>The Doctor is In:</strong> Give students a 'sick' paragraph full of adjective order mistakes. They must act as Grammar Doctors, highlighting the errors and writing the 'cured' version underneath.",
    "summary": [
      "Single adjectives must go BEFORE the noun.",
      "Linking verbs (look, smell, feel, seem) must be followed by ADJECTIVES, not adverbs.",
      "When stacking adjectives, Opinion always comes before Facts (Age, Color, Material)."
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
console.log('Updated 4 word order adjective lessons using ESM');
