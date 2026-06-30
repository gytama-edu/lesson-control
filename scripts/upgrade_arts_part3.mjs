import fs from 'fs';
import { lessons } from '../data/lessons.js';

const updated = [
  {
    "id": "grammar-this-that-these-those",
    "backHref": "articles-determiners.html",
    "backLabel": "Back to Articles & Determiners",
    "title": "Demonstratives: This, That, These, Those",
    "skill": "Grammar",
    "category": "Demonstratives & Possessives",
    "level": "Beginner",
    "description": "Learn how to use determiners to show distance and number.",
    "introduction": "When you point your finger at something, you are acting as a human determiner. In English, we have four words that do exactly what your finger does: This, That, These, and Those. These are called Demonstrative Determiners. They 'demonstrate' exactly where something is in relation to the speaker. Are you holding the object in your hand, or is it on the other side of the room? Is there just one, or are there many? Let's master the art of verbal pointing.",
    "learningGoals": [
      "Use 'this' and 'these' for things near the speaker.",
      "Use 'that' and 'those' for things far from the speaker.",
      "Match the determiner correctly with singular or plural nouns."
    ],
    "meaning": "Demonstratives organize the world by distance (near vs. far) and number (singular vs. plural). 'Near' usually means you can touch it, or it is happening right now in time. 'Far' means you have to point across a distance, or it happened in the past.",
    "uses": [
      "THIS: Singular + Near (This apple in my hand).",
      "THAT: Singular + Far (That apple on the tree).",
      "THESE: Plural + Near (These apples in my hands).",
      "THOSE: Plural + Far (Those apples on the tree)."
    ],
    "patterns": [
      {
        "name": "The Near Pattern",
        "formula": "This + Singular Noun | These + Plural Noun",
        "explanation": "Example: This book is heavy. These books are heavy."
      },
      {
        "name": "The Far Pattern",
        "formula": "That + Singular Noun | Those + Plural Noun",
        "explanation": "Example: That car is fast. Those cars are fast."
      }
    ],
    "stepByStep": "How to choose the correct demonstrative:<br><br>1. <strong>Identify the noun:</strong> 'shoes'.<br>2. <strong>Is it singular or plural?</strong> It is plural.<br>3. <strong>Are they close to you or far away?</strong> I am wearing them on my feet. So, near.<br>4. <strong>Match the grid:</strong> Plural + Near = <em>These</em>.<br>5. <strong>Result:</strong> 'I love <em>these shoes</em>.'",
    "examples": [
      { "type": "This (Singular, Near)", "sentence": "This coffee is very hot.", "note": "Holding the cup." },
      { "type": "These (Plural, Near)", "sentence": "These documents need to be signed.", "note": "The documents are on the desk in front of me." },
      { "type": "That (Singular, Far)", "sentence": "Who is that man over there?", "note": "Pointing across the room." },
      { "type": "Those (Plural, Far)", "sentence": "Look at those birds in the sky.", "note": "Pointing up at the sky." },
      
      { "type": "Classroom", "sentence": "Please read this paragraph.", "note": "The paragraph we are looking at right now." },
      { "type": "Classroom", "sentence": "What is the answer to that question on the board?", "note": "Pointing to the board." },
      
      { "type": "Real-Life", "sentence": "Hello, this is John.", "note": "On the phone, you are 'this'." },
      { "type": "Real-Life", "sentence": "Is that you, Mary?", "note": "On the phone, the other person is 'that'." },
      
      { "type": "Time Use", "sentence": "I am very busy this week.", "note": "'This' is used for the present time." },
      { "type": "Time Use", "sentence": "Do you remember that day in 2015?", "note": "'That' is used for distant past time." }
    ],
    "commonMistakes": [
      {
        "wrong": "This shoes are too tight.",
        "correct": "These shoes are too tight.",
        "explanation": "You must match the plural noun 'shoes' with the plural determiner 'these'.",
        "fix": "Never use 'this' or 'that' with a plural noun."
      },
      {
        "wrong": "These is a good book.",
        "correct": "This is a good book.",
        "explanation": "You must match the singular noun 'book' (and verb 'is') with the singular determiner 'this'.",
        "fix": "Never use 'these' or 'those' with a singular noun."
      },
      {
        "wrong": "I like this apples over there.",
        "correct": "I like those apples over there.",
        "explanation": "'Over there' implies distance. You must use 'that' or 'those' for things far away.",
        "fix": "Use 'those' for plural far away."
      }
    ],
    "quickComparison": "<strong>This vs. That in Time:</strong> 'This' feels close in time (I will do it this morning). 'That' feels distant in time (I was sick that morning).",
    "indonesianLearnerWarning": "In Indonesian, 'ini' (this/these) and 'itu' (that/those) do not change for plurals (buku ini vs buku-buku ini). In English, you MUST switch words entirely when the noun becomes plural (this book -> these books). Also, beware of pronunciation: 'this' has a short 'i' sound, while 'these' has a long 'ee' sound.",
    "practicePrompts": [
      "Fill in the blank: 'Can you pass me ___ pen on the table over there?'",
      "Fill in the blank: '___ cookies I am eating are delicious!'",
      "Correct the mistake: 'I want to buy that shoes.'",
      "Write a sentence pointing to plural objects far away from you.",
      "Speaking prompt: Hold up three items and point to three items far away. Describe all of them using this, that, these, and those."
    ],
    "classroomUse": "<strong>The Pointing Drill:</strong> The teacher walks around the room. Touching a desk: 'This desk'. Pointing to a far window: 'That window'. Touching two books: 'These books'. The students must shout the correct demonstrative before the teacher does.",
    "summary": [
      "THIS is for one thing near you.",
      "THESE is for many things near you.",
      "THAT is for one thing far away.",
      "THOSE is for many things far away.",
      "They can also be used for time: 'this' = present/near future, 'that' = past."
    ]
  },
  {
    "id": "grammar-possessive-determiners",
    "backHref": "articles-determiners.html",
    "backLabel": "Back to Articles & Determiners",
    "title": "Possessive Determiners",
    "skill": "Grammar",
    "category": "Demonstratives & Possessives",
    "level": "Beginner",
    "description": "Learn how to show ownership using my, your, his, her, its, our, and their.",
    "introduction": "Whose bag is this? If you want to claim ownership of something in English, you use a Possessive Determiner. These words (my, your, his, her, its, our, their) replace articles like 'a' or 'the'. Instead of saying 'I lost the phone,' saying 'I lost my phone' instantly tells the listener exactly who the phone belongs to. But be careful—English organizes ownership by who owns the object, not by the object itself. Let's make sure you never mix up 'his' and 'her'.",
    "learningGoals": [
      "Memorize the 7 possessive determiners.",
      "Understand that possessives act as main determiners (you cannot use 'the' and 'my' together).",
      "Match the possessive to the OWNER, not the object."
    ],
    "meaning": "Possessive determiners show who owns or is associated with the noun that follows them. They are directly tied to subject pronouns (I -> my, You -> your, He -> his, She -> her, It -> its, We -> our, They -> their).",
    "uses": [
      "To show direct ownership (e.g., My car).",
      "To show relationships (e.g., Her brother).",
      "To show parts of the body (e.g., His hand)."
    ],
    "patterns": [
      {
        "name": "The Possessive Pattern",
        "formula": "Possessive Determiner + (Adjective) + Noun",
        "explanation": "Example: My house. Our new house. Their big new house."
      },
      {
        "name": "The Replacement Rule",
        "formula": "Article (a/the) OR Possessive. Never both.",
        "explanation": "Example: 'The my car' is WRONG. 'My car' is CORRECT."
      }
    ],
    "stepByStep": "How to choose his vs her:<br><br>1. <strong>Identify the OWNER, not the object.</strong><br>2. <strong>Who does the car belong to?</strong> John.<br>3. <strong>John is a 'he'.</strong> The possessive for 'he' is 'his'.<br>4. <strong>Result:</strong> 'This is <em>his</em> car.' (Even if the car is pink, we use 'his' because John is a man).",
    "examples": [
      { "type": "My (I)", "sentence": "I love my new job.", "note": "Belongs to the speaker." },
      { "type": "Your (You)", "sentence": "Is this your jacket?", "note": "Belongs to the listener." },
      { "type": "His (He)", "sentence": "David lost his wallet.", "note": "Belongs to a male." },
      { "type": "Her (She)", "sentence": "Sarah is visiting her parents.", "note": "Belongs to a female." },
      { "type": "Its (It)", "sentence": "The dog wagged its tail.", "note": "Belongs to an animal or thing. NO APOSTROPHE." },
      { "type": "Our (We)", "sentence": "We sold our house.", "note": "Belongs to us." },
      { "type": "Their (They)", "sentence": "The students opened their books.", "note": "Belongs to them." },
      
      { "type": "Classroom", "sentence": "Please submit your assignments on Friday.", "note": "Teacher talking to students." },
      { "type": "Classroom", "sentence": "The school updated its computer systems.", "note": "School is an 'it'." }
    ],
    "commonMistakes": [
      {
        "wrong": "She loves his husband.",
        "correct": "She loves her husband.",
        "explanation": "The determiner must match the OWNER (She), not the object (husband). Since the owner is 'she', the determiner must be 'her'.",
        "fix": "Always look back at the subject to choose his/her."
      },
      {
        "wrong": "I parked the my car.",
        "correct": "I parked my car.",
        "explanation": "Possessives and articles (the, a, an) cannot be used together.",
        "fix": "Drop the article."
      },
      {
        "wrong": "The cat drank it's milk.",
        "correct": "The cat drank its milk.",
        "explanation": "This is a mistake even native speakers make! 'It's' (with an apostrophe) means 'It is'. The possessive determiner is 'its' (no apostrophe).",
        "fix": "Never use an apostrophe for the possessive 'its'."
      },
      {
        "wrong": "I wash the hands before dinner.",
        "correct": "I wash my hands before dinner.",
        "explanation": "In English, we always use possessive determiners with parts of the body, not 'the'.",
        "fix": "Always use my/your/his/her with body parts."
      }
    ],
    "quickComparison": "<strong>Its vs. It's:</strong> Its = belonging to it (The dog lost its bone). It's = It is (It's raining today).",
    "indonesianLearnerWarning": "In Indonesian, '-nya' is used for both 'his' and 'her' (bukunya). In English, you MUST specify the gender of the owner. If it's a boy's book, it's 'his book'. If it's a girl's book, it's 'her book'.",
    "practicePrompts": [
      "Fill in the blank: 'Mary and John are walking ___ dog.'",
      "Fill in the blank: 'The company is famous for ___ customer service.'",
      "Correct the mistake: 'He put his hands in the his pockets.'",
      "Write a sentence describing what your parents do for a living using 'their'.",
      "Speaking prompt: Point to different people in the room (or imagine them) and describe what they are wearing using his and her (e.g., 'Her shirt is red, his shoes are black.')."
    ],
    "classroomUse": "<strong>The Body Part Rule:</strong> Have students act out verbs with body parts. Say 'Touch... head!' If they say 'Touch the head', they are out. They must say 'I am touching MY head' and 'She is touching HER head'.",
    "summary": [
      "Possessive determiners show ownership (my, your, his, her, its, our, their).",
      "They replace articles. Never say 'the my'.",
      "Match the determiner to the OWNER, not the thing being owned.",
      "Always use possessives with body parts in English (my hands, not the hands).",
      "'Its' never has an apostrophe when showing ownership."
    ]
  },
  {
    "id": "grammar-each-every-all-both",
    "backHref": "articles-determiners.html",
    "backLabel": "Back to Articles & Determiners",
    "title": "Group Determiners: Each, Every, All, Both",
    "skill": "Grammar",
    "category": "Quantifiers",
    "level": "Intermediate",
    "description": "Learn how to talk about members of a group individually or together.",
    "introduction": "When you want to talk about a whole group of things, you have a choice. You can talk about the group as one massive unit ('All students'), or you can shine a spotlight on every single individual member inside that group one by one ('Every student'). Determiners like Each, Every, All, and Both allow you to control how the listener visualizes the group. However, they each have strict mathematical rules about whether the following noun must be singular or plural. Let's sort them out.",
    "learningGoals": [
      "Use 'all' for the whole group together (takes plural nouns).",
      "Use 'each' and 'every' to talk about members individually (takes singular nouns).",
      "Use 'both' when there are exactly two things."
    ],
    "meaning": "'All' looks at 100% of a group simultaneously. 'Every' looks at 100% of a group, but visualizes them one by one. 'Each' looks at members of a group separately and individually (often used for smaller groups or 2 things). 'Both' looks at 100% of a group when the group is exactly two things.",
    "uses": [
      "ALL: The entire group (All cars have wheels).",
      "EVERY: All members, seen individually (Every car has a steering wheel).",
      "EACH: Separate individuals (Each side of the coin).",
      "BOTH: Exactly two (Both my parents)."
    ],
    "patterns": [
      {
        "name": "The Plural Pattern (All / Both)",
        "formula": "All / Both + Plural Noun + Plural Verb",
        "explanation": "Example: All students are here. Both eyes are blue."
      },
      {
        "name": "The Singular Pattern (Each / Every)",
        "formula": "Each / Every + Singular Countable Noun + Singular Verb",
        "explanation": "Example: Every student is here. Each eye is blue."
      }
    ],
    "stepByStep": "How to choose Every vs All:<br><br>1. <strong>Look at the noun you want to use.</strong> Is it 'student' or 'students'?<br>2. <strong>If you want to use the plural (students):</strong> You MUST use 'All'. -> 'All students pass the test.'<br>3. <strong>If you want to use the singular (student):</strong> You MUST use 'Every'. -> 'Every student passes the test.'<br>4. <strong>Result:</strong> The meaning is identical, but the grammar changes completely.",
    "examples": [
      { "type": "All (Plural)", "sentence": "All dogs love meat.", "note": "General group. Plural noun." },
      { "type": "Every (Singular)", "sentence": "Every dog loves meat.", "note": "Individual members. Singular noun." },
      { "type": "Each (Individual)", "sentence": "Each player received a medal.", "note": "Focusing on them one by one." },
      { "type": "Both (Two)", "sentence": "Both brothers are doctors.", "note": "Exactly two brothers." },
      
      { "type": "Classroom", "sentence": "All students must wait outside.", "note": "Teacher addressing the whole crowd." },
      { "type": "Classroom", "sentence": "I want to speak to each student privately.", "note": "Teacher focusing on one-on-one meetings." },
      
      { "type": "Real-Life", "sentence": "It rained every day this week.", "note": "You cannot say 'all day' here, because that means 24 hours of rain on one day." },
      { "type": "Real-Life", "sentence": "Hold the box with both hands.", "note": "You have exactly two hands." }
    ],
    "commonMistakes": [
      {
        "wrong": "Every students are here.",
        "correct": "Every student is here.",
        "explanation": "This is a very common error. 'Every' MUST be followed by a singular noun and a singular verb.",
        "fix": "Every + Singular Noun + Singular Verb."
      },
      {
        "wrong": "All the both sides are correct.",
        "correct": "Both sides are correct.",
        "explanation": "You cannot mix 'all' and 'both'. If there are two sides, just use 'both'.",
        "fix": "Use 'both' for 2, 'all' for 3 or more."
      },
      {
        "wrong": "I stayed at home every day.",
        "correct": "I stayed at home all day.",
        "explanation": "(If you mean you stayed home for 24 hours on one specific day). 'Every day' means Monday, Tuesday, Wednesday... 'All day' means from 8 AM to 8 PM on a single day.",
        "fix": "All day = 1 full day. Every day = 7 days a week."
      }
    ],
    "quickComparison": "<strong>Each vs. Every:</strong> They are very similar, but 'Each' can be used for 2 things (Each of my hands). 'Every' requires 3 or more things. You cannot say 'Every of my hands'.",
    "indonesianLearnerWarning": "In Indonesian, 'setiap' (every/each) and 'semua' (all) translate clearly. But remember the grammar rule! 'Setiap murid' = 'Every student' (singular). 'Semua murid' = 'All students' (plural). Don't mix them up!",
    "practicePrompts": [
      "Choose All or Every: '___ children like ice cream.'",
      "Choose All or Every: '___ child likes ice cream.'",
      "Correct the mistake: 'Both of my parents is retired.'",
      "Write a sentence about something you do 'every day' vs 'all day'.",
      "Speaking prompt: Describe a sports team. Talk about what 'all' the players do, and what 'each' player receives."
    ],
    "classroomUse": "<strong>The Singular/Plural Stand Up:</strong> Shout 'All!'. Students must reply with a plural noun ('Cars!'). Shout 'Every!'. Students must reply with a singular noun ('Car!'). Anyone who says a plural after 'every' is out.",
    "summary": [
      "ALL takes plural nouns and plural verbs (All cars are...).",
      "EVERY takes singular nouns and singular verbs (Every car is...).",
      "BOTH is strictly used when there are exactly two things.",
      "EACH focuses on individuals separately.",
      "'Every day' means daily. 'All day' means for 24 hours."
    ]
  },
  {
    "id": "grammar-another-other-the-other",
    "backHref": "articles-determiners.html",
    "backLabel": "Back to Articles & Determiners",
    "title": "Another, Other, The Other",
    "skill": "Grammar",
    "category": "Quantifiers",
    "level": "Intermediate",
    "description": "Learn how to refer to additional or remaining items in a group.",
    "introduction": "Imagine you are eating a cookie. It's delicious. You want one more. Do you ask for 'other cookie' or 'another cookie'? What if there is only one cookie left on the plate? Do you ask for 'another cookie' or 'the other cookie'? These three determiners—another, other, and the other—are famous for confusing English learners. They all deal with alternatives, but they follow strict rules about singular vs. plural and specific vs. general. Let's clear up the confusion once and for all.",
    "learningGoals": [
      "Understand that 'another' is 'an + other' and is only for singular countable nouns.",
      "Use 'other' for plural or uncountable nouns in a general sense.",
      "Use 'the other' for the specific remaining item(s) in a group."
    ],
    "meaning": "'Another' means one additional or different thing (general). 'Other' means more additional or different things (general plural). 'The other' means the specific remaining thing or things that finish a group.",
    "uses": [
      "ANOTHER: One more, or a different one (Singular).",
      "OTHER: More, or different ones (Plural / Uncountable).",
      "THE OTHER: The rest of the group, the last one remaining (Singular or Plural)."
    ],
    "patterns": [
      {
        "name": "The Singular Extra",
        "formula": "Another + Singular Countable Noun",
        "explanation": "Example: I need another pen. (One more pen)."
      },
      {
        "name": "The Plural Extra",
        "formula": "Other + Plural Noun / Uncountable Noun",
        "explanation": "Example: I need other pens. (More pens). Do you have other information?"
      },
      {
        "name": "The Specific Remaining",
        "formula": "The Other + Singular OR Plural",
        "explanation": "Example: Where is the other shoe? (I have one, I need the final remaining one)."
      }
    ],
    "stepByStep": "How to choose between them:<br><br>1. <strong>Are you asking for the very last remaining item to complete a set?</strong> If yes, use 'the other' (Where is <em>the other</em> glove?).<br>2. <strong>Are you just asking for an extra, general item?</strong> If yes, check the noun.<br>3. <strong>Is the noun singular?</strong> Use 'another' (I want <em>another</em> cookie).<br>4. <strong>Is the noun plural?</strong> Use 'other' (I want <em>other</em> cookies).",
    "examples": [
      { "type": "Another (One more)", "sentence": "Can I have another cup of coffee?", "note": "One additional cup." },
      { "type": "Another (Different)", "sentence": "I don't like this shirt. Show me another one.", "note": "A different singular shirt." },
      { "type": "Other (Plural)", "sentence": "There are other ways to solve this problem.", "note": "Different plural ways." },
      { "type": "The Other (Singular remaining)", "sentence": "I found one earring, but I can't find the other earring.", "note": "The final one in a set of two." },
      { "type": "The Other (Plural remaining)", "sentence": "Some students passed. The other students failed.", "note": "The rest of the specific group." },
      
      { "type": "Classroom", "sentence": "Please take another piece of paper.", "note": "One extra piece." },
      { "type": "Classroom", "sentence": "Discuss this with the other members of your group.", "note": "The specific remaining members." },
      
      { "type": "Real-Life", "sentence": "Let's meet another day.", "note": "A different, general day." },
      { "type": "Real-Life", "sentence": "The bank is on the other side of the street.", "note": "A street only has two sides, so you use 'the other' for the second side." }
    ],
    "commonMistakes": [
      {
        "wrong": "I want another shoes.",
        "correct": "I want other shoes. (Or: another pair of shoes).",
        "explanation": "'Another' literally means 'An + Other'. Since 'an' means one, you can never use 'another' with a plural noun.",
        "fix": "Never use 'another' with plural words."
      },
      {
        "wrong": "Where is another glove?",
        "correct": "Where is the other glove?",
        "explanation": "If you are holding one glove and looking for its pair, you need the specific remaining item. 'Another' would mean a random 3rd glove.",
        "fix": "Use 'the other' for pairs and remaining items."
      },
      {
        "wrong": "Do you have any others questions?",
        "correct": "Do you have any other questions?",
        "explanation": "When 'other' is used as an adjective before a noun, it does NOT take an 's'. (It only takes an 's' if it stands alone as a pronoun: 'Where are the others?').",
        "fix": "Adjectives don't have plurals. Keep 'other' without an 's' before nouns."
      }
    ],
    "quickComparison": "<strong>Another vs. Other:</strong> Remember the secret spelling! Another = An + Other. 'An' means one. Therefore, Another is ONLY for one thing.",
    "indonesianLearnerWarning": "In Indonesian, 'yang lain' covers another, other, and the other. You must be careful to look at the noun (is it singular or plural?) and the context (is it a general extra, or the specific remaining one?).",
    "practicePrompts": [
      "Choose Another, Other, or The other: 'I don't like this book. Do you have ___ book?'",
      "Choose Another, Other, or The other: 'I have a pen in my left hand, and a pencil in ___ hand.'",
      "Correct the mistake: 'Some people like tea, but others people prefer coffee.'",
      "Write a sentence asking for one more piece of cake.",
      "Speaking prompt: Imagine you are buying shoes. Tell the clerk you don't like these ones, and ask to see plural different ones."
    ],
    "classroomUse": "<strong>The Cookie Plate:</strong> Draw a plate with 3 cookies on the board. Say 'I eat one cookie.' Then say 'I eat ____ cookie.' (Answer: another). Then say 'I eat ____ cookie.' (Answer: the other / the last one).",
    "summary": [
      "ANOTHER = An + Other. Use only for singular countable nouns (one more / a different one).",
      "OTHER = Plural or uncountable nouns (more / different ones).",
      "THE OTHER = The specific remaining item(s) to finish a set or group.",
      "Never use 'another' with plural nouns (another shoes = WRONG).",
      "Never put an 's' on 'other' when it comes before a noun (others cars = WRONG)."
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
console.log('Updated 4 demonstrative/quantifier lessons using ESM');
