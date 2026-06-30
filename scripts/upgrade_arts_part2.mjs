import fs from 'fs';
import { lessons } from '../data/lessons.js';

const updated = [
  {
    "id": "grammar-a-and-an",
    "backHref": "articles-determiners.html",
    "backLabel": "Back to Articles & Determiners",
    "title": "A and An (Indefinite Articles)",
    "skill": "Grammar",
    "category": "Articles",
    "level": "Beginner",
    "description": "Learn to use 'a' and 'an' for singular, general, or newly introduced nouns.",
    "introduction": "When you are telling a story, you often need to introduce new characters or objects. If I say, 'I saw a man,' I am bringing someone into the story for the very first time. I don't expect you to know who he is yet. This is the job of the Indefinite Articles: 'A' and 'An'. They mean 'one of many', 'any general one', or 'something new'. Let's learn the rules for these incredibly common, but often misused, little words.",
    "learningGoals": [
      "Use 'a/an' to introduce new information.",
      "Understand that 'a/an' means 'one' and can only be used with singular countable nouns.",
      "Use 'a/an' when talking about someone's job or profession."
    ],
    "meaning": "'A' and 'An' are indefinite articles. They point to a noun that is not specific to the listener, or a noun that is being mentioned for the first time. Because they literally mean 'one', they are mathematically restricted: they can ONLY be used with singular countable nouns.",
    "uses": [
      "To introduce something new to the listener (e.g., I bought a car).",
      "To talk about any single member of a group (e.g., A doctor needs a stethoscope).",
      "To state someone's profession (e.g., She is a teacher).",
      "To describe what something is (e.g., It is a bird)."
    ],
    "patterns": [
      {
        "name": "The Introduction Pattern",
        "formula": "A / An + New Singular Countable Noun",
        "explanation": "Example: I watched a movie last night."
      },
      {
        "name": "The Profession Pattern",
        "formula": "Subject + Be Verb + A / An + Profession",
        "explanation": "Example: I am a student. He is an engineer."
      }
    ],
    "stepByStep": "How to decide if you need A/An:<br><br>1. <strong>Look at the noun:</strong> 'apple'.<br>2. <strong>Is it plural or uncountable?</strong> If yes, STOP. You cannot use A/An.<br>3. <strong>If it is singular countable, ask:</strong> Does the listener know exactly WHICH apple I am talking about?<br>4. <strong>If no (it's new or just any apple):</strong> Use A/An.<br>5. <strong>Check the sound:</strong> 'apple' starts with a vowel sound. Use 'an'.<br>6. <strong>Result:</strong> 'I want <em>an apple</em>.'",
    "examples": [
      { "type": "New Information", "sentence": "I saw a strange man outside.", "note": "The listener doesn't know him yet." },
      { "type": "Any One", "sentence": "Can you pass me a pen?", "note": "Any pen will do, I don't care which one." },
      { "type": "Profession", "sentence": "My mother is a doctor.", "note": "Required in English for jobs." },
      { "type": "Definition", "sentence": "A tomato is a fruit.", "note": "Classifying what something is." },
      
      { "type": "Classroom", "sentence": "Take a piece of paper.", "note": "Any piece." },
      { "type": "Classroom", "sentence": "I am a teacher.", "note": "Job." },
      
      { "type": "Real-Life", "sentence": "I need to buy a new phone.", "note": "Not a specific phone yet, just any new one." },
      { "type": "Real-Life", "sentence": "He drives a blue car.", "note": "Describing something he owns." }
    ],
    "commonMistakes": [
      {
        "wrong": "I bought a shoes.",
        "correct": "I bought some shoes.",
        "explanation": "'Shoes' is plural. You cannot use 'a' with plurals.",
        "fix": "Use 'some' or no article with plurals."
      },
      {
        "wrong": "I need an advice.",
        "correct": "I need some advice.",
        "explanation": "'Advice' is uncountable. You cannot use 'a/an' with uncountable nouns.",
        "fix": "Use 'some' with uncountable nouns."
      },
      {
        "wrong": "She is engineer.",
        "correct": "She is an engineer.",
        "explanation": "Unlike many other languages, English requires 'a/an' before professions.",
        "fix": "Always use 'a/an' before jobs."
      }
    ],
    "quickComparison": "<strong>A vs. One:</strong> 'A' is used for general statements (I need a pen). 'One' is used when emphasizing the exact number, usually contrasting it with two (I need one pen, not two).",
    "indonesianLearnerWarning": "In Indonesian, you often drop the article for jobs (Dia guru) and things (Saya mau beli mobil). In English, 'She is teacher' is grammatically incorrect. You MUST say 'She is a teacher' and 'I want to buy a car.'",
    "practicePrompts": [
      "Add a, an, or nothing: 'I want to be ___ astronaut.'",
      "Add a, an, or nothing: 'I drink ___ water every morning.'",
      "Correct the mistake: 'My father is businessman.'",
      "Write a sentence introducing a new pet you bought.",
      "Speaking prompt: Tell a partner what your parents' jobs are using 'a/an'."
    ],
    "classroomUse": "<strong>The Mystery Bag:</strong> Put several objects in a bag. A student reaches in, feels one, pulls it out and must announce it to the class: 'It is an apple!' 'It is a marker!'",
    "summary": [
      "A/An means 'one of many' or 'something new'.",
      "They can ONLY be used with singular countable nouns.",
      "Never use them with plurals or uncountable nouns (like water or advice).",
      "Always use A/An when stating someone's profession (He is a doctor).",
      "Choose 'a' for consonant sounds and 'an' for vowel sounds."
    ]
  },
  {
    "id": "grammar-the-article",
    "backHref": "articles-determiners.html",
    "backLabel": "Back to Articles & Determiners",
    "title": "The (Definite Article)",
    "skill": "Grammar",
    "category": "Articles",
    "level": "Intermediate",
    "description": "Learn when to use 'the' for specific, unique, or previously mentioned nouns.",
    "introduction": "If 'a' and 'an' are used for introducing new things, what happens when we mention that thing a second time? We use 'The'. The definite article 'the' is like a pointing finger. It tells the listener, 'You know exactly which one I am talking about.' Whether it's because we just talked about it, because there is only one in the room, or because there is only one in the universe, 'the' restricts the noun to a specific, identifiable thing. Let's learn when to point the finger.",
    "learningGoals": [
      "Use 'the' for second mentions of a noun.",
      "Use 'the' when both speaker and listener know which object is being discussed.",
      "Use 'the' for unique objects (the sun, the internet)."
    ],
    "meaning": "'The' makes a noun specific (definite). It assumes the listener has the background knowledge to identify WHICH noun you mean. Unlike 'a/an', 'the' is very flexible. It can be used with singular, plural, and uncountable nouns. Its only requirement is specificity.",
    "uses": [
      "Second Mention: (I saw a man. <em>The</em> man was tall).",
      "Shared Knowledge: Pointing to something in the room (Close <em>the</em> door).",
      "Unique Things: There is only one (<em>The</em> sun, <em>The</em> moon).",
      "Superlatives: The extreme limit (<em>The</em> tallest, <em>The</em> best)."
    ],
    "patterns": [
      {
        "name": "The Storytelling Sequence",
        "formula": "Sentence 1: A/An [Noun]. Sentence 2: The [Noun].",
        "explanation": "Example: I bought a car. The car is red."
      },
      {
        "name": "The Superlative Pattern",
        "formula": "The + Superlative Adjective + Noun",
        "explanation": "Example: He is the smartest student."
      }
    ],
    "stepByStep": "How to decide if you need 'The':<br><br>1. <strong>Identify the noun:</strong> 'door'.<br>2. <strong>Ask the Golden Question:</strong> Does the listener know exactly WHICH door I mean?<br>3. <strong>If they don't know:</strong> Use 'A' (Can you find a door?).<br>4. <strong>If they do know (e.g., there's only one in the room):</strong> Use 'The' (Can you close the door?).",
    "examples": [
      { "type": "Second Mention", "sentence": "I adopted a dog and a cat. The dog is very active.", "note": "We now know which dog." },
      { "type": "Shared Context", "sentence": "Can you pass the salt?", "note": "The salt on the table in front of us." },
      { "type": "Unique Object", "sentence": "The sky is very blue today.", "note": "There is only one sky." },
      { "type": "Superlative", "sentence": "This is the best movie ever.", "note": "There can only be one 'best'." },
      
      { "type": "Classroom", "sentence": "Look at the whiteboard.", "note": "There is only one whiteboard in the room." },
      { "type": "Classroom", "sentence": "Who has the answer to question 5?", "note": "There is only one correct answer." },
      
      { "type": "Real-Life", "sentence": "I'm going to the supermarket.", "note": "Usually means the local/usual one." },
      { "type": "Real-Life", "sentence": "The president gave a speech.", "note": "The unique leader of the country." }
    ],
    "commonMistakes": [
      {
        "wrong": "I like the pizza.",
        "correct": "I like pizza.",
        "explanation": "Remember from the General Meaning lesson: DO NOT use 'the' when making general statements about things you like or things in general.",
        "fix": "Only use 'the' if you mean a specific pizza on the table right now."
      },
      {
        "wrong": "She is best player.",
        "correct": "She is the best player.",
        "explanation": "Superlative adjectives (best, worst, tallest) almost always require 'the' because there can only be one 'best'.",
        "fix": "Always use 'the' with superlatives."
      },
      {
        "wrong": "We saw a moon last night.",
        "correct": "We saw the moon last night.",
        "explanation": "There is only one moon for our planet. Unique objects require 'the'.",
        "fix": "Use 'the' for sun, moon, earth, sky, internet."
      }
    ],
    "quickComparison": "<strong>A vs. The:</strong> 'I need A pen' (any pen in your bag). 'I need THE pen' (the specific blue one you just borrowed from me).",
    "indonesianLearnerWarning": "In Indonesian, 'itu' or '-nya' translates to 'the' (buku itu = the book, bukunya = the book). However, English requires 'the' much more frequently than Indonesian requires 'itu', especially with shared context (Turn on the AC).",
    "practicePrompts": [
      "Fill in the blanks: 'I read ___ book yesterday. ___ book was about history.'",
      "Choose a or the: 'Please close ___ window. It is cold in here.'",
      "Correct the mistake: 'Sun is very hot today.'",
      "Write a sentence about 'the tallest' building in your city.",
      "Speaking prompt: Give instructions to someone in the room using 'the' (e.g., 'Turn on the projector')."
    ],
    "classroomUse": "<strong>The 'Which One?' Game:</strong> Say a sentence with 'a' (I bought a phone). The students must reply with a 'the' sentence adding a detail (The phone is black). Keep passing it around.",
    "summary": [
      "Use 'the' when the listener knows exactly which thing you mean.",
      "Use 'the' for the second mention in a story.",
      "Use 'the' for unique objects (the sun, the internet).",
      "Use 'the' for superlatives (the biggest, the best).",
      "'The' can be used with singular, plural, and uncountable nouns."
    ]
  },
  {
    "id": "grammar-zero-article",
    "backHref": "articles-determiners.html",
    "backLabel": "Back to Articles & Determiners",
    "title": "The Zero Article",
    "skill": "Grammar",
    "category": "Articles",
    "level": "Advanced",
    "description": "Learn the specific rules for when absolutely no article is allowed.",
    "introduction": "Sometimes, doing nothing is the hardest rule to follow. We know that singular nouns need determiners, and general plural/uncountable nouns don't. But English has a specific set of words—meals, languages, sports, days, and academic subjects—that are fiercely independent. They refuse to take an article in almost all situations. Using 'the' with these words immediately marks you as a non-native speaker. Let's learn the rules of the 'Zero Article'.",
    "learningGoals": [
      "Identify the categories that do not take articles (meals, sports, languages, subjects).",
      "Understand exceptions (when a modifier is added).",
      "Avoid using 'the' with days, months, and years."
    ],
    "meaning": "The 'Zero Article' refers to situations where no determiner is used before a noun. This happens with proper nouns (names), abstract concepts, and specific categories of words that English has historically decided do not need introduction.",
    "uses": [
      "Meals: breakfast, lunch, dinner.",
      "Sports/Games: soccer, chess, tennis.",
      "Languages: English, Spanish, Japanese.",
      "Academic Subjects: math, history, biology.",
      "Time Words: Monday, August, 2024."
    ],
    "patterns": [
      {
        "name": "The Naked Categories",
        "formula": "[Zero Article] + [Meal / Sport / Language / Subject]",
        "explanation": "Example: I play soccer. I study math. I speak English. I ate lunch."
      }
    ],
    "stepByStep": "How to apply the Zero Article:<br><br>1. <strong>Identify the noun:</strong> 'breakfast'.<br>2. <strong>Check the categories:</strong> Is it a meal? Yes.<br>3. <strong>Apply Zero Article:</strong> Do not use a, an, or the.<br>4. <strong>Result:</strong> 'I had breakfast at 7 AM.'<br>5. <strong>The Exception:</strong> If you add an adjective describing a SPECIFIC event, you might need an article. 'I had <em>a delicious breakfast</em> yesterday.'",
    "examples": [
      { "type": "Meals", "sentence": "What's for dinner?", "note": "No article before dinner." },
      { "type": "Sports", "sentence": "She plays tennis very well.", "note": "No article before sports." },
      { "type": "Languages", "sentence": "He speaks fluent Arabic.", "note": "No article before languages." },
      { "type": "Subjects", "sentence": "Chemistry is my favorite subject.", "note": "No article before school subjects." },
      { "type": "Time/Dates", "sentence": "See you on Friday.", "note": "No article before days of the week." },
      
      { "type": "Classroom", "sentence": "Open your books for history class.", "note": "No article for the subject." },
      { "type": "Classroom", "sentence": "Please speak English.", "note": "No article for the language." },
      
      { "type": "Real-Life", "sentence": "I prefer playing chess to playing video games.", "note": "Games take zero article." },
      { "type": "Real-Life", "sentence": "We had lunch at noon.", "note": "Meals take zero article." }
    ],
    "commonMistakes": [
      {
        "wrong": "I am learning the English.",
        "correct": "I am learning English.",
        "explanation": "Languages never take 'the'. (The only exception is if you use the word 'language' after it: 'The English language').",
        "fix": "Remove 'the' before languages."
      },
      {
        "wrong": "Let's play the football.",
        "correct": "Let's play football.",
        "explanation": "Sports and games never take 'the'.",
        "fix": "Remove 'the' before sports."
      },
      {
        "wrong": "The lunch is ready.",
        "correct": "Lunch is ready.",
        "explanation": "Meals do not take articles.",
        "fix": "Remove 'the' before breakfast, lunch, and dinner."
      }
    ],
    "quickComparison": "<strong>English vs The English:</strong> 'English is difficult' (The language). 'The English drink tea' (The people of England).",
    "indonesianLearnerWarning": "This is usually easy for Indonesian speakers, because Indonesian naturally uses zero articles for these things (Saya main sepak bola = I play football). Just be careful not to over-correct and add 'the' because you think English requires it everywhere!",
    "practicePrompts": [
      "Cross out 'the' if it is wrong: 'I ate the breakfast while studying the math.'",
      "Cross out 'the' if it is wrong: 'He speaks the Spanish and plays the guitar.' (Wait! Musical instruments DO take 'the' in British English: play the guitar).",
      "Write a sentence about what sport you play and what language you speak.",
      "Speaking prompt: Describe your daily routine from morning to night. Mention your meals without using articles."
    ],
    "classroomUse": "<strong>The Zero Article Quiz:</strong> Shout out categories: 'Language!' Student: 'I speak Japanese.' Teacher: 'Sport!' Student: 'I play basketball.' Teacher: 'Meal!' Student: 'I eat dinner.'",
    "summary": [
      "Do NOT use articles before meals (breakfast, lunch, dinner).",
      "Do NOT use articles before sports and games (soccer, chess).",
      "Do NOT use articles before languages (English, Arabic).",
      "Do NOT use articles before academic subjects (math, history).",
      "Do NOT use articles before days, months, and years."
    ]
  },
  {
    "id": "grammar-articles-places-names-institutions",
    "backHref": "articles-determiners.html",
    "backLabel": "Back to Articles & Determiners",
    "title": "Articles with Places, Names, and Institutions",
    "skill": "Grammar",
    "category": "Articles",
    "level": "Advanced",
    "description": "Navigate the complex rules for articles with geography, hospitals, and schools.",
    "introduction": "Why do we say 'I live in Japan' but 'I live in THE United States'? Why do we say 'I climb Mount Everest' but 'I visit THE Himalayas'? Geographic names have the most confusing article rules in the English language. Furthermore, words like 'school', 'hospital', and 'prison' have a hidden rule where the article changes depending on WHY you are going there. Let's decode these high-level article mysteries.",
    "learningGoals": [
      "Learn which geographical names require 'the' and which take zero article.",
      "Understand the 'purpose rule' for institutions like school, hospital, and prison.",
      "Use 'the' correctly with plural countries and republics."
    ],
    "meaning": "Geography: Single mountains, lakes, and countries usually take NO article. Plural mountains, rivers, oceans, and countries with 'States/Kingdom/Republic' take 'THE'. Institutions: If you go to a hospital/school for its primary purpose (as a patient/student), you use NO article (British English). If you go as a visitor, you use 'the'.",
    "uses": [
      "Geography (Zero Article): Single countries (France), Single lakes (Lake Victoria), Single mountains (Mount Fuji), Continents (Asia).",
      "Geography (THE): Oceans/Seas (The Pacific), Rivers (The Nile), Mountain Ranges (The Alps), Plural/Group Countries (The USA, The UK, The Philippines).",
      "Institutions (Zero Article): Going for the primary purpose (Go to school, go to prison, go to hospital).",
      "Institutions (THE): Going as a visitor (Go to the school to pick up my son, go to the hospital to visit my friend)."
    ],
    "patterns": [
      {
        "name": "The Plural Geography Rule",
        "formula": "The + [Plural Name / River / Ocean / Republic]",
        "explanation": "Example: The Netherlands, The Bahamas, The Amazon River, The Czech Republic."
      },
      {
        "name": "The Institutional Purpose Rule (UK/Intl)",
        "formula": "Go to + [Institution] (Zero Article)",
        "explanation": "Example: 'He went to prison' (He is a criminal). 'He went to the prison' (He is a guard or visitor)."
      }
    ],
    "stepByStep": "How to use articles with countries:<br><br>1. <strong>Look at the country name.</strong><br>2. <strong>Is it a single word?</strong> (Japan, Brazil, Canada). Use Zero Article.<br>3. <strong>Does it have 'States', 'Kingdom', or 'Republic' in it?</strong> Use 'The' (The United States).<br>4. <strong>Is it plural (ends in 's')?</strong> Use 'The' (The Maldives).",
    "examples": [
      { "type": "Zero Article Geography", "sentence": "She traveled to Italy and climbed Mount Vesuvius.", "note": "Single country, single mountain." },
      { "type": "THE Geography", "sentence": "We sailed across the Atlantic Ocean to the UK.", "note": "Ocean, Kingdom." },
      { "type": "Institution (Purpose)", "sentence": "The children are at school.", "note": "They are students learning." },
      { "type": "Institution (Visitor)", "sentence": "The plumber is at the school fixing a pipe.", "note": "He is not a student." },
      
      { "type": "Classroom", "sentence": "Find the Sahara Desert on the map.", "note": "Deserts take 'the'." },
      { "type": "Classroom", "sentence": "What is the capital of China?", "note": "Single country, zero article." },
      
      { "type": "Real-Life", "sentence": "I broke my leg and had to go to hospital.", "note": "(British English) As a patient. Note: Americans say 'to the hospital' for everything." },
      { "type": "Real-Life", "sentence": "He spent five years in prison.", "note": "As an inmate." }
    ],
    "commonMistakes": [
      {
        "wrong": "I live in the Canada.",
        "correct": "I live in Canada.",
        "explanation": "Single countries do not take 'the'.",
        "fix": "Remove 'the' before most countries."
      },
      {
        "wrong": "We visited the Lake Baikal.",
        "correct": "We visited Lake Baikal.",
        "explanation": "Single lakes do not take 'the'. (Only plural lake groups like 'The Great Lakes' take 'the').",
        "fix": "Remove 'the' before lakes."
      },
      {
        "wrong": "I went to the university to study math.",
        "correct": "I went to university to study math.",
        "explanation": "If you are going as a student for the primary purpose of studying, do not use 'the'.",
        "fix": "Drop 'the' for school, university, hospital, prison, and church when used for their intended purpose."
      }
    ],
    "quickComparison": "<strong>Mount vs. The... Mountains:</strong> One mountain = Mount Everest (Zero Article). A line of mountains = The Rocky Mountains (The).",
    "indonesianLearnerWarning": "Pay special attention to the USA, the UK, and the Philippines. These three countries are frequently discussed and they ALWAYS require 'the'. Never say 'I want to go to USA.' You must say 'I want to go to THE USA.'",
    "practicePrompts": [
      "Add 'the' or leave blank: '___ Indonesia is an archipelago in ___ Pacific Ocean.'",
      "Add 'the' or leave blank: 'I went to ___ hospital to visit my sick grandmother.'",
      "Correct the mistake: 'She climbed the Mount Kilimanjaro.'",
      "Write a sentence about a country you want to visit (choose one that requires 'the').",
      "Speaking prompt: Explain the difference in meaning between 'He is in prison' and 'He is in the prison'."
    ],
    "classroomUse": "<strong>The Geography Map:</strong> Project a world map. Point to different features (a river, a country, an ocean, a mountain). Students must shout the name WITH or WITHOUT 'the' correctly.",
    "summary": [
      "Single countries, mountains, lakes, and continents take NO article.",
      "Plural countries, oceans, rivers, deserts, and mountain ranges take THE.",
      "Countries with words like States, Kingdom, or Republic take THE.",
      "Go to school/hospital/prison (Zero Article) = Going as a student/patient/inmate.",
      "Go to THE school/hospital/prison = Going as a visitor or worker."
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
console.log('Updated 4 specific article lessons using ESM');
