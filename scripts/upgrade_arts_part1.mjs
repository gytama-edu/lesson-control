import fs from 'fs';
import { lessons } from '../data/lessons.js';

const updated = [
  {
    "id": "grammar-articles-determiners-overview",
    "backHref": "articles-determiners.html",
    "backLabel": "Back to Articles & Determiners",
    "title": "What Are Articles and Determiners?",
    "skill": "Grammar",
    "category": "Articles & Determiners",
    "level": "Beginner",
    "description": "Learn that determiners come before nouns and help identify quantity, ownership, distance, or specific meaning.",
    "introduction": "Imagine walking into a room and saying, 'Give me book.' The person you are talking to would immediately be confused. Which book? A specific one? Any book? My book? Your book? In English, nouns rarely like to stand alone. They usually need a 'determiner' to introduce them. A determiner is a tiny word that sits right in front of a noun and acts as a spotlight, telling the listener exactly which noun you mean. Articles (a, an, the) are the most famous determiners, but there are many others. Let's learn how to shine the spotlight correctly.",
    "learningGoals": [
      "Understand the purpose of determiners.",
      "Identify articles as a specific type of determiner.",
      "Recognize that singular countable nouns generally require a determiner."
    ],
    "meaning": "Determiners are words that introduce a noun. They do not describe the noun's size or color (that is an adjective's job). Instead, they clarify identity, quantity, or ownership. 'The' points to a specific thing. 'A/An' points to a general thing. 'My' points to ownership. 'Some' points to an unknown quantity.",
    "uses": [
      "To point to a specific noun: The, This, That, These, Those.",
      "To introduce a general or new noun: A, An.",
      "To show ownership: My, Your, His, Her, Our, Their.",
      "To show quantity: Some, Any, Many, Much, Few, All, Both."
    ],
    "patterns": [
      {
        "name": "The Naked Noun Rule",
        "formula": "Determiner + Singular Countable Noun",
        "explanation": "In English, a singular countable noun (like 'car', 'apple', or 'cat') cannot stand 'naked' in a sentence. It MUST have a determiner before it. You cannot say 'I bought car'. You must say 'I bought A car' or 'I bought MY car'."
      }
    ],
    "stepByStep": "How to use a determiner:<br><br>1. <strong>Identify the noun:</strong> 'dog'.<br>2. <strong>Ask yourself:</strong> Is it singular and countable? Yes. (So it cannot be naked).<br>3. <strong>Decide what you want to communicate.</strong><br>4. Ownership? -> 'My dog.'<br>5. A specific one? -> 'The dog.'<br>6. Any general one? -> 'A dog.'<br>7. Distance? -> 'That dog.'",
    "examples": [
      { "type": "Article", "sentence": "I saw a bird in the tree.", "note": "'a' and 'the' are articles." },
      { "type": "Demonstrative", "sentence": "I want to buy this car.", "note": "'this' points to a specific car nearby." },
      { "type": "Possessive", "sentence": "Where is your phone?", "note": "'your' shows ownership." },
      { "type": "Quantifier", "sentence": "I need some water.", "note": "'some' shows an unspecified amount." },
      
      { "type": "Classroom", "sentence": "Open your books to page 10.", "note": "'your' determines whose books." },
      { "type": "Classroom", "sentence": "The teacher is absent.", "note": "'the' points to a specific teacher." },
      
      { "type": "Real-Life", "sentence": "Can I have an apple?", "note": "General request for one item." },
      { "type": "Real-Life", "sentence": "Those shoes are too expensive.", "note": "Pointing to specific plural items far away." },
      
      { "type": "Advanced", "sentence": "Every employee must attend the meeting.", "note": "'every' is a determiner of distribution." }
    ],
    "commonMistakes": [
      {
        "wrong": "I have computer at home.",
        "correct": "I have a computer at home.",
        "explanation": "A 'computer' is a singular countable noun. It cannot be naked. It needs a determiner.",
        "fix": "Always put a determiner (a, my, the) before singular countable nouns."
      },
      {
        "wrong": "She is the my best friend.",
        "correct": "She is my best friend.",
        "explanation": "You cannot stack two main determiners together. You cannot use an article (the) AND a possessive (my) for the same noun.",
        "fix": "Choose only one determiner to lead the noun phrase."
      }
    ],
    "quickComparison": "<strong>Determiner vs. Adjective:</strong> Adjectives describe (a <em>red</em> car, a <em>fast</em> car). You can have many adjectives (a fast red car). Determiners identify (<em>the</em> car, <em>my</em> car). You usually only have ONE determiner, and it always goes first.",
    "indonesianLearnerWarning": "In Indonesian, nouns often stand completely alone (Saya punya mobil). In English, 'I have car' is a huge grammar error. Always ask yourself: whose car? which car? how many cars? Add the determiner!",
    "practicePrompts": [
      "Identify the determiner: 'Those apples are sour.'",
      "Correct the mistake: 'He wants to buy house in London.'",
      "List three different determiners you could put before the word 'book'.",
      "Speaking prompt: Look around the room. Name 5 things you see, making sure to use a determiner for each (e.g., 'the clock, my shoes, a pen...')."
    ],
    "classroomUse": "<strong>No Naked Nouns!</strong> Create a poster that says 'No Naked Nouns' with a picture of a singular noun. Whenever a student says 'I saw cat', point to the poster until they correct it to 'I saw A cat'.",
    "summary": [
      "Determiners introduce nouns and clarify meaning.",
      "Articles (a, an, the) are just one type of determiner.",
      "Singular countable nouns cannot stand naked; they MUST have a determiner.",
      "Do not stack main determiners (never say 'the my car').",
      "Determiners always go at the very front of the noun phrase, before any adjectives."
    ]
  },
  {
    "id": "grammar-countable-uncountable-determiners",
    "backHref": "articles-determiners.html",
    "backLabel": "Back to Articles & Determiners",
    "title": "Countable vs Uncountable Determiners",
    "skill": "Grammar",
    "category": "Articles & Determiners",
    "level": "Intermediate",
    "description": "Understand how to use determiners with countable and uncountable nouns.",
    "introduction": "Not all nouns are created equal. Some things can be easily counted (one apple, two apples). Other things cannot be separated and counted easily (one water? two waters? No!). Because of this, English determiners are very picky. Some determiners only like countable nouns. Others only like uncountable nouns. If you mix them up, you will sound very unnatural. Let's learn which determiners belong to which family.",
    "learningGoals": [
      "Distinguish between countable and uncountable nouns.",
      "Learn which determiners can only be used with countable nouns (many, few, a/an).",
      "Learn which determiners can only be used with uncountable nouns (much, little)."
    ],
    "meaning": "Countable nouns are individual objects, people, or ideas you can count. Uncountable nouns are materials, liquids, abstract ideas, or collections of things that are seen as a whole. Determiners act differently depending on the noun's countability.",
    "uses": [
      "With Countable Nouns ONLY: A/An, Many, A few, Few, Several.",
      "With Uncountable Nouns ONLY: Much, A little, Little, A bit of.",
      "With BOTH: The, Some, Any, A lot of, My/Your/His."
    ],
    "patterns": [
      {
        "name": "The Countable Pattern",
        "formula": "Many / A few / Several + Plural Countable Noun",
        "explanation": "Example: Many cars, a few friends, several books."
      },
      {
        "name": "The Uncountable Pattern",
        "formula": "Much / A little + Uncountable Noun",
        "explanation": "Example: Much money, a little water. (Never use plurals here!)."
      },
      {
        "name": "The Universal Pattern",
        "formula": "Some / A lot of + Plural Count OR Uncountable",
        "explanation": "Example: Some cars AND Some water. A lot of friends AND A lot of money."
      }
    ],
    "stepByStep": "How to choose the right quantifier:<br><br>1. <strong>Look at the noun:</strong> 'information'.<br>2. <strong>Ask: Is it countable?</strong> No, information is an uncountable concept in English.<br>3. <strong>Choose an uncountable/universal determiner:</strong> You cannot use 'many'. You must use 'much' or 'a lot of'.<br>4. <strong>Result:</strong> 'I have <em>a lot of</em> information.'",
    "examples": [
      { "type": "Countable Only", "sentence": "There are many people here.", "note": "'People' is plural countable." },
      { "type": "Countable Only", "sentence": "I have a few questions.", "note": "'Questions' are countable." },
      { "type": "Uncountable Only", "sentence": "We don't have much time.", "note": "'Time' is uncountable." },
      { "type": "Uncountable Only", "sentence": "Add a little sugar to the tea.", "note": "'Sugar' is uncountable." },
      { "type": "Both", "sentence": "I need some apples and some milk.", "note": "'Some' works for both." },
      
      { "type": "Classroom", "sentence": "Do you have any questions?", "note": "Any + Plural Countable." },
      { "type": "Classroom", "sentence": "I need some help.", "note": "Some + Uncountable." },
      
      { "type": "Real-Life", "sentence": "There is too much traffic today.", "note": "Traffic is uncountable." },
      { "type": "Real-Life", "sentence": "I have several meetings today.", "note": "Meetings are countable." }
    ],
    "commonMistakes": [
      {
        "wrong": "I have many informations for you.",
        "correct": "I have a lot of information for you.",
        "explanation": "'Information' is uncountable. It cannot take 'many', and it cannot take an 's'.",
        "fix": "Use 'much' or 'a lot of' for information, advice, news, furniture, and homework."
      },
      {
        "wrong": "He gave me an advice.",
        "correct": "He gave me some advice.",
        "explanation": "'A' and 'An' mean 'one'. You cannot have 'one' of an uncountable noun.",
        "fix": "Never use a/an with uncountable nouns. Use 'some'."
      },
      {
        "wrong": "We don't have many money.",
        "correct": "We don't have much money.",
        "explanation": "While you can count dollars and coins, the word 'money' itself is uncountable.",
        "fix": "Use 'much' or 'a lot of' with money."
      }
    ],
    "quickComparison": "<strong>Countable vs Uncountable trick:</strong> If you can put a number right in front of it (1 book, 2 books), it's countable. If you can't (1 water? 2 waters?), it's uncountable.",
    "indonesianLearnerWarning": "Indonesian uses 'banyak' for both countable and uncountable (banyak mobil, banyak air). In English, 'banyak' splits into 'many' (cars) and 'much' (water). If you are confused, use 'a lot of'—it works for both!",
    "practicePrompts": [
      "Choose much or many: 'How ___ brothers do you have?'",
      "Choose much or many: 'How ___ rice do you want?'",
      "Correct the mistake: 'I have a good news!'",
      "List three determiners you can use with the uncountable word 'music'.",
      "Speaking prompt: What do you have 'a lot of' in your room? What do you have 'a few' of?"
    ],
    "classroomUse": "<strong>The Sort Game:</strong> Write a list of nouns on the board (water, pens, time, dollars, money, advice, chairs, furniture). Ask students to sort them into two columns: 'Takes MANY' and 'Takes MUCH'.",
    "summary": [
      "Countable nouns can be counted (1 apple, 2 apples). Uncountable nouns cannot (water, air, advice).",
      "A/An, Many, and Few are ONLY for countable nouns.",
      "Much and Little are ONLY for uncountable nouns.",
      "Some, Any, and A lot of can be used for both.",
      "Never put an 's' on an uncountable noun, and never use 'a/an' with it."
    ]
  },
  {
    "id": "grammar-singular-plural-general-meaning",
    "backHref": "articles-determiners.html",
    "backLabel": "Back to Articles & Determiners",
    "title": "Singular, Plural, and General Meaning",
    "skill": "Grammar",
    "category": "Articles & Determiners",
    "level": "Intermediate",
    "description": "Learn when to use articles and when to use nouns without articles.",
    "introduction": "We learned earlier that singular countable nouns cannot be naked. But what about plural nouns? What about uncountable nouns? Can they be naked? Yes! The presence or absence of an article completely changes whether you are talking about something specific or talking about things in general. Let's learn how to make general statements without making grammatical errors.",
    "learningGoals": [
      "Understand how to talk about things in general.",
      "Learn when to use zero article (no determiner).",
      "Differentiate between specific references ('the apples') and general references ('apples')."
    ],
    "meaning": "When you want to talk about all things of a certain type in general (e.g., all cats in the world, all water), you do NOT use an article before plural countable nouns or uncountable nouns. We call this the 'Zero Article'. If you use 'the', you are limiting it to a specific group.",
    "uses": [
      "To talk generally about a category: Zero Article + Plural Noun (Cats are cute).",
      "To talk generally about a substance/idea: Zero Article + Uncountable Noun (Water is wet).",
      "To talk about a specific group: The + Plural Noun (The cats in my house are cute)."
    ],
    "patterns": [
      {
        "name": "General Statement (Plural)",
        "formula": "[Nothing] + Plural Noun",
        "explanation": "Example: 'Apples are healthy.' (Means all apples in general)."
      },
      {
        "name": "General Statement (Uncountable)",
        "formula": "[Nothing] + Uncountable Noun",
        "explanation": "Example: 'Love is blind.' (Means love in general)."
      },
      {
        "name": "Specific Statement",
        "formula": "The + Plural / Uncountable",
        "explanation": "Example: 'The apples on the table are bad.' (Only those specific apples)."
      }
    ],
    "stepByStep": "How to make a general statement:<br><br>1. <strong>Think of your topic:</strong> 'dogs'.<br>2. <strong>Ask: Am I talking about specific dogs in this room?</strong> No, all dogs everywhere.<br>3. <strong>Apply Zero Article:</strong> Do not use 'the'.<br>4. <strong>Result:</strong> 'Dogs are friendly animals.'<br>5. <strong>Warning:</strong> Remember, you can NEVER use Zero Article for a singular countable noun. You cannot say 'Dog is friendly.'",
    "examples": [
      { "type": "General Plural", "sentence": "Tigers are dangerous.", "note": "All tigers. No article." },
      { "type": "General Uncountable", "sentence": "Information is power.", "note": "All information. No article." },
      { "type": "Specific Plural", "sentence": "The tigers at the zoo are sleeping.", "note": "Specific tigers. Uses 'the'." },
      { "type": "Specific Uncountable", "sentence": "The information in this report is wrong.", "note": "Specific information. Uses 'the'." },
      
      { "type": "Classroom", "sentence": "Teachers must be patient.", "note": "General." },
      { "type": "Classroom", "sentence": "The teachers in this school are great.", "note": "Specific." },
      
      { "type": "Real-Life", "sentence": "I love listening to music.", "note": "Music in general." },
      { "type": "Real-Life", "sentence": "I didn't like the music at the party.", "note": "Specific music." }
    ],
    "commonMistakes": [
      {
        "wrong": "The cats are very independent animals.",
        "correct": "Cats are very independent animals.",
        "explanation": "If you add 'the', a native speaker thinks you are talking about specific cats that you just mentioned. To make a general fact, drop 'the'.",
        "fix": "Remove 'the' when making general statements about plural nouns."
      },
      {
        "wrong": "I like the pizza.",
        "correct": "I like pizza.",
        "explanation": "If you say 'the pizza', someone will ask 'Which pizza? The one we had yesterday?' If you mean you like the food in general, drop 'the'.",
        "fix": "Remove 'the' when stating general preferences."
      },
      {
        "wrong": "Car is expensive.",
        "correct": "Cars are expensive.",
        "explanation": "You cannot make a general statement using a naked singular countable noun. You must make it plural (Cars are) or use A/An (A car is).",
        "fix": "Always use plural nouns for general statements about countable objects."
      }
    ],
    "quickComparison": "<strong>'A' vs 'Plural' for General Meaning:</strong> You can say 'A dog is a loyal animal' OR 'Dogs are loyal animals'. Both mean exactly the same thing! But 'Dogs are...' is much more common in modern English.",
    "indonesianLearnerWarning": "In Indonesian, adding 'itu' (the) is sometimes used even for general things. In English, 'the' strictly means specific. If you are stating a general fact about life, food, or animals, do NOT use 'the'.",
    "practicePrompts": [
      "Add 'the' or leave blank: 'I think ___ computers are changing the world.'",
      "Add 'the' or leave blank: '___ computers in this office are broken.'",
      "Correct the mistake: 'The money is important, but it isn't everything.'",
      "Write a general sentence about your favorite food.",
      "Speaking prompt: Do you think 'technology' makes life better? Answer using general statements."
    ],
    "classroomUse": "<strong>The Generalization Debate:</strong> Give students controversial topics (e.g., video games, fast food, teenagers). Have them write three general statements on the board without using 'the' to start a debate.",
    "summary": [
      "To talk about things in general, use plural nouns or uncountable nouns with NO article.",
      "Never use 'the' for general statements (The cats are cute = WRONG for a general fact).",
      "Use 'the' only when referring to a specific, restricted group (The cats in my house).",
      "Remember: Singular countable nouns can NEVER be used this way. They always need a determiner."
    ]
  },
  {
    "id": "grammar-articles-noun-phrases",
    "backHref": "articles-determiners.html",
    "backLabel": "Back to Articles & Determiners",
    "title": "Articles Inside Noun Phrases",
    "skill": "Grammar",
    "category": "Articles & Determiners",
    "level": "Intermediate",
    "description": "Learn where to place articles when there are adjectives in front of the noun.",
    "introduction": "We know that a determiner sits in front of a noun. 'The dog'. But what happens when you want to describe the dog? What if it's a big, black, angry dog? Where does the article go? A noun phrase is like a train. The noun is the engine at the back, the adjectives are the passenger cars, and the determiner is the conductor at the very front. Let's learn how to order the words in a noun phrase correctly.",
    "learningGoals": [
      "Understand the structure of a noun phrase.",
      "Place articles and determiners at the absolute beginning of the noun phrase.",
      "Ensure the article (a/an) matches the sound of the word immediately following it, not the noun."
    ],
    "meaning": "A noun phrase is a group of words that functions as a single noun. It consists of the core noun and all the words that modify it. The rule is simple: The determiner (article) must ALWAYS be the first word of the entire noun phrase.",
    "uses": [
      "To describe a noun in detail: A + Adjective + Noun.",
      "To add multiple details: The + Adverb + Adjective + Noun."
    ],
    "patterns": [
      {
        "name": "The Basic Noun Phrase",
        "formula": "Determiner + Adjective + Noun",
        "explanation": "Example: A red car. The tall man. My new shoes."
      },
      {
        "name": "The Extended Noun Phrase",
        "formula": "Determiner + Adverb + Adjective + Noun",
        "explanation": "Example: A very red car. The incredibly tall man. My really old shoes."
      }
    ],
    "stepByStep": "How to build a noun phrase and choose a/an:<br><br>1. <strong>Start with the noun:</strong> 'apple'.<br>2. <strong>Add an adjective:</strong> 'red apple'.<br>3. <strong>Add the article at the front:</strong> 'a' or 'an'?<br>4. <strong>The Sound Rule:</strong> Look at the word IMMEDIATELY after the blank. It is 'red'. 'Red' starts with a consonant sound.<br>5. <strong>Result:</strong> '<em>A</em> red apple.' (Even though 'apple' starts with a vowel, the word right next to the article is 'red').",
    "examples": [
      { "type": "Basic", "sentence": "I bought a blue shirt.", "note": "Determiner + Adjective + Noun." },
      { "type": "A/An shift", "sentence": "It is an interesting book.", "note": "'an' is used because 'interesting' starts with a vowel sound." },
      { "type": "A/An shift", "sentence": "It is a very interesting book.", "note": "'a' is used because 'very' starts with a consonant sound." },
      { "type": "Multiple Adjectives", "sentence": "The big old wooden table.", "note": "'The' stays at the very front." },
      
      { "type": "Classroom", "sentence": "Please read the short text.", "note": "Standard structure." },
      { "type": "Classroom", "sentence": "She is an excellent student.", "note": "'an' matches 'excellent'." },
      
      { "type": "Real-Life", "sentence": "We had a really good time.", "note": "A + Adverb + Adjective + Noun." },
      { "type": "Real-Life", "sentence": "That is an unusually large dog.", "note": "'an' matches 'unusually'." }
    ],
    "commonMistakes": [
      {
        "wrong": "I bought red a car.",
        "correct": "I bought a red car.",
        "explanation": "The determiner cannot be in the middle of the noun phrase. It must be at the very beginning.",
        "fix": "Move the article to the front."
      },
      {
        "wrong": "He is a honest man.",
        "correct": "He is an honest man.",
        "explanation": "The 'h' in honest is silent. Therefore, the word starts with a vowel sound (o-nest).",
        "fix": "Use 'an' before silent 'h' words (hour, honest, honor)."
      },
      {
        "wrong": "She is an university student.",
        "correct": "She is a university student.",
        "explanation": "The 'u' in university is pronounced like 'you' (a consonant 'y' sound). Therefore, it takes 'a'.",
        "fix": "Use 'a' before 'u' words that sound like 'you' (university, uniform, union)."
      },
      {
        "wrong": "It is a ugly building.",
        "correct": "It is an ugly building.",
        "explanation": "You must match the a/an to the adjective 'ugly', not just ignore it.",
        "fix": "Always look at the word immediately following the article."
      }
    ],
    "quickComparison": "<strong>An hour vs A house:</strong> Both start with 'h'. But 'hour' has a silent 'h' (vowel sound -> an hour). 'House' has a hard 'h' (consonant sound -> a house).",
    "indonesianLearnerWarning": "In Indonesian, adjectives come after the noun (mobil merah). In English, they come before (red car). This means you have to put the determiner at the very beginning (a red car), separating the 'a' completely from the noun it belongs to.",
    "practicePrompts": [
      "Choose a or an: '___ extremely cold day.'",
      "Choose a or an: '___ European country.' (Hint: European sounds like 'Your').",
      "Correct the mistake: 'I saw beautiful a bird.'",
      "Build a noun phrase using these words: dog, the, friendly, incredibly.",
      "Speaking prompt: Describe a friend using an adjective and the correct article (e.g., 'He is an amazing friend')."
    ],
    "classroomUse": "<strong>The Noun Phrase Train:</strong> Give students cards with Nouns, Adjectives, Adverbs, and Articles. Ask them to physically stand in a line at the front of the classroom in the correct order to make a long noun phrase.",
    "summary": [
      "The determiner (article) always goes at the absolute front of the noun phrase.",
      "The order is: Article + (Adverb) + Adjective + Noun.",
      "Choose 'a' or 'an' based on the SOUND of the word immediately following it, not the noun.",
      "Watch out for silent 'h' (an hour) and 'u' sounds that act like 'y' (a university)."
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
console.log('Updated 4 article lessons using ESM');
