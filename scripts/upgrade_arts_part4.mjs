import fs from 'fs';
import { lessons } from '../data/lessons.js';

const updated = [
  {
    "id": "grammar-some-and-any",
    "backHref": "articles-determiners.html",
    "backLabel": "Back to Articles & Determiners",
    "title": "Some vs. Any",
    "skill": "Grammar",
    "category": "Quantifiers",
    "level": "Beginner",
    "description": "Learn the golden rule for using some in positive sentences and any in negatives/questions.",
    "introduction": "When you want a quantity of something, but you don't care exactly how much, you use words like 'some' and 'any'. 'I want some water.' But what happens when you turn that sentence into a question? 'Do you want some water?' or 'Do you want any water?' What about negative sentences? These two little words follow one of the most reliable and strict rules in the English language. Let's learn the positive, negative, and question rules for Some and Any.",
    "learningGoals": [
      "Use 'some' in positive affirmative sentences.",
      "Use 'any' in negative sentences and most questions.",
      "Learn the polite offer/request exception for 'some'."
    ],
    "meaning": "'Some' and 'Any' both mean an unspecified amount. They can both be used with plural countable nouns (some cars) and uncountable nouns (some water). The difference is entirely based on sentence structure: positive vs negative/question.",
    "uses": [
      "SOME: Positive statements (+).",
      "ANY: Negative statements (-) and Questions (?).",
      "SOME (Exception): Polite offers (Would you like some...?) or polite requests (Can I have some...?)."
    ],
    "patterns": [
      {
        "name": "The Standard Rule (+ / - / ?)",
        "formula": "(+) I have SOME. | (-) I don't have ANY. | (?) Do you have ANY?",
        "explanation": "This is the core mechanic of Some and Any."
      },
      {
        "name": "The Polite Exception",
        "formula": "Would you like SOME...? / Can I have SOME...?",
        "explanation": "When offering or asking for something politely, we use 'some' in a question, because we expect the answer to be 'yes'."
      }
    ],
    "stepByStep": "How to choose between Some and Any:<br><br>1. <strong>Look at the sentence type.</strong><br>2. <strong>Is there a 'not' (don't, haven't, isn't)?</strong> If yes, use <em>Any</em>.<br>3. <strong>Is it a question mark?</strong> If yes, use <em>Any</em> (unless you are offering food/help).<br>4. <strong>Is it a normal positive sentence?</strong> If yes, use <em>Some</em>.",
    "examples": [
      { "type": "Positive (+)", "sentence": "I need some help.", "note": "Standard positive sentence." },
      { "type": "Negative (-)", "sentence": "I don't need any help.", "note": "Negative requires 'any'." },
      { "type": "Question (?)", "sentence": "Do you have any brothers or sisters?", "note": "Standard question." },
      { "type": "Polite Offer", "sentence": "Would you like some coffee?", "note": "Exception: Offering something to a guest." },
      { "type": "Polite Request", "sentence": "Could I borrow some money?", "note": "Exception: Asking for a favor." },
      
      { "type": "Classroom", "sentence": "Please do some exercises on page 10.", "note": "Positive." },
      { "type": "Classroom", "sentence": "Are there any questions?", "note": "Teacher asking a standard question." },
      
      { "type": "Real-Life", "sentence": "We didn't buy any milk.", "note": "Negative." },
      { "type": "Real-Life", "sentence": "There are some apples in the fridge.", "note": "Positive." }
    ],
    "commonMistakes": [
      {
        "wrong": "I don't have some money.",
        "correct": "I don't have any money.",
        "explanation": "You cannot use 'some' with a negative verb (don't/isn't/haven't).",
        "fix": "Always change 'some' to 'any' in negative sentences."
      },
      {
        "wrong": "Do you have some time to talk?",
        "correct": "Do you have any time to talk?",
        "explanation": "For general information questions where you don't know the answer, use 'any'. (You only use 'some' if you are handing them a cup of coffee: 'Would you like some?').",
        "fix": "Use 'any' for general questions."
      },
      {
        "wrong": "I bought any apples.",
        "correct": "I bought some apples.",
        "explanation": "You cannot use 'any' in a normal positive statement.",
        "fix": "Change 'any' to 'some' for positive facts."
      }
    ],
    "quickComparison": "<strong>Something vs Anything:</strong> The exact same rule applies to compound words! I want <em>something</em> to eat (+). I don't want <em>anything</em> to eat (-). Is there <em>anything</em> to eat? (?).",
    "indonesianLearnerWarning": "In Indonesian, 'beberapa' (some) and 'ada' (any) are sometimes used interchangeably in casual speech, or dropped entirely. In English, you must consciously switch the word when you make the sentence negative.",
    "practicePrompts": [
      "Fill in the blank: 'I didn't see ___ good movies this year.'",
      "Fill in the blank: 'Can I have ___ more cake, please?'",
      "Correct the mistake: 'We need to buy any vegetables.'",
      "Write three sentences about what is in your fridge: one positive, one negative, one question.",
      "Speaking prompt: Imagine you are a waiter. Offer a customer food and drink using the polite 'some' exception."
    ],
    "classroomUse": "<strong>The Transformation Drill:</strong> The teacher says a positive sentence ('I have some pens.'). The student must instantly say the negative ('I don't have any pens.') and the question ('Do you have any pens?').",
    "summary": [
      "SOME is for positive sentences (I have some time).",
      "ANY is for negative sentences and questions (I don't have any time / Do you have any time?).",
      "Use SOME for polite offers and requests (Would you like some tea?).",
      "This rule also applies to somebody/anybody, something/anything, and somewhere/anywhere."
    ]
  },
  {
    "id": "grammar-much-many-a-lot-of",
    "backHref": "articles-determiners.html",
    "backLabel": "Back to Articles & Determiners",
    "title": "Much, Many, and A lot of",
    "skill": "Grammar",
    "category": "Quantifiers",
    "level": "Beginner",
    "description": "Learn how to talk about large quantities using countable and uncountable rules.",
    "introduction": "When you want to say 'a large amount' of something, you have three main tools: Much, Many, and A lot of. However, just like 'some' and 'any', these words are highly sensitive to the structure of your sentence. If you say 'I have much friends', native speakers will cringe. Why? Because 'much' hates countable nouns, and it also hates positive sentences! Let's learn the safe and natural way to talk about large quantities.",
    "learningGoals": [
      "Use 'many' for plural countable nouns.",
      "Use 'much' for uncountable nouns.",
      "Understand that 'a lot of' is the safest choice for positive sentences."
    ],
    "meaning": "All three phrases mean a large quantity. 'Many' connects to plural countable nouns (things you can count). 'Much' connects to uncountable nouns (liquids, concepts). 'A lot of' (or 'lots of') is a universal connector that works with both.",
    "uses": [
      "MANY: Countable (cars, friends, days). Often used in questions and negatives.",
      "MUCH: Uncountable (water, time, money). Often used in questions and negatives.",
      "A LOT OF: Works for both! This is the most natural choice for positive statements."
    ],
    "patterns": [
      {
        "name": "The Safe Positive",
        "formula": "I have a lot of + [Plural OR Uncountable Noun]",
        "explanation": "Example: I have a lot of friends. I have a lot of time. (This is much more natural than saying 'I have many friends')."
      },
      {
        "name": "The Negative/Question Rule",
        "formula": "I don't have much/many... | Do you have much/many...?",
        "explanation": "Example: I don't have much time. Do you have many questions?"
      }
    ],
    "stepByStep": "How to talk about large quantities naturally:<br><br>1. <strong>Are you making a normal positive sentence?</strong> ('I have...'). Use <em>a lot of</em>. It's safe and natural.<br>2. <strong>Are you making a negative or a question?</strong> ('I don't have...', 'Do you have...?').<br>3. <strong>Check the noun.</strong> Is it countable (friends)? Use <em>many</em>.<br>4. <strong>Is it uncountable (time)?</strong> Use <em>much</em>.",
    "examples": [
      { "type": "Positive (Safe)", "sentence": "She has a lot of money.", "note": "Much more natural than 'She has much money'." },
      { "type": "Positive (Safe)", "sentence": "There are a lot of people here.", "note": "Works perfectly for countable plurals." },
      { "type": "Negative (Uncountable)", "sentence": "I don't have much time.", "note": "Standard negative with uncountable noun." },
      { "type": "Question (Countable)", "sentence": "Did you take many photos?", "note": "Standard question with plural noun." },
      
      { "type": "Classroom", "sentence": "We have a lot of homework tonight.", "note": "Homework is uncountable, so 'a lot of' is perfect." },
      { "type": "Classroom", "sentence": "There aren't many chairs in this room.", "note": "Negative + Countable." },
      
      { "type": "Real-Life", "sentence": "How much does it cost?", "note": "Asking about money (uncountable)." },
      { "type": "Real-Life", "sentence": "How many siblings do you have?", "note": "Asking about people (countable)." }
    ],
    "commonMistakes": [
      {
        "wrong": "I have much money.",
        "correct": "I have a lot of money.",
        "explanation": "While grammatically correct, using 'much' in a positive statement sounds very unnatural and old-fashioned in modern English.",
        "fix": "Always use 'a lot of' or 'lots of' for positive sentences."
      },
      {
        "wrong": "We don't have many time.",
        "correct": "We don't have much time.",
        "explanation": "'Time' is an uncountable concept. 'Many' can only be used with plurals you can count.",
        "fix": "Use 'much' for uncountable nouns."
      },
      {
        "wrong": "How much apples do you want?",
        "correct": "How many apples do you want?",
        "explanation": "'Apples' have an 's'. They are countable.",
        "fix": "Always use 'How many' for plurals with an 's'."
      }
    ],
    "quickComparison": "<strong>A lot of vs. Lots of:</strong> There is no difference! 'Lots of' is just slightly more casual. (I have a lot of time = I have lots of time).",
    "indonesianLearnerWarning": "Indonesian uses 'banyak' for everything. To sound like a native speaker, train yourself to use 'a lot of' when making positive statements, and save 'much' and 'many' for when you are asking questions (How much/How many) or saying no.",
    "practicePrompts": [
      "Fill in the blank: 'I didn't buy ___ souvenirs on my trip.'",
      "Fill in the blank: 'I drank ___ coffee this morning.' (Positive statement)",
      "Correct the mistake: 'He has much problems right now.'",
      "Write a sentence about something you don't have 'much' of.",
      "Speaking prompt: Ask a partner two questions: one starting with 'How much' and one with 'How many'."
    ],
    "classroomUse": "<strong>The 'How much / How many' Interview:</strong> Students write 5 interview questions for a partner. They must look at the noun in their question to decide if it starts with 'How much' (e.g., free time, money, sleep) or 'How many' (e.g., hobbies, cousins, shoes).",
    "summary": [
      "MANY is for countable plurals (cars).",
      "MUCH is for uncountable nouns (water).",
      "A LOT OF works for both.",
      "In modern English, we prefer 'A lot of' for positive sentences (I have a lot of time).",
      "We prefer Much/Many for negatives and questions (I don't have much time)."
    ]
  },
  {
    "id": "grammar-few-little-quantifiers",
    "backHref": "articles-determiners.html",
    "backLabel": "Back to Articles & Determiners",
    "title": "Few, A few, Little, A little",
    "skill": "Grammar",
    "category": "Quantifiers",
    "level": "Advanced",
    "description": "Learn the subtle, but critical, difference between 'a few' (positive) and 'few' (negative).",
    "introduction": "When you have a small amount of something, you can use the words few or little. But did you know that adding the tiny article 'a' completely reverses the emotional meaning of the sentence? If a doctor says 'You have a little time left', that is hopeful. If a doctor says 'You have little time left', that is very bad news! The difference between 'a few' and 'few' is one of the most powerful and subtle tricks in the English language. Let's learn how to use it.",
    "learningGoals": [
      "Use (a) few for countable nouns and (a) little for uncountable nouns.",
      "Understand that adding 'a' makes the meaning POSITIVE (I have enough).",
      "Understand that dropping 'a' makes the meaning NEGATIVE (I don't have enough)."
    ],
    "meaning": "Few/A few act like 'many' (used for countables). Little/A little act like 'much' (used for uncountables). BUT, if you say 'A few' or 'A little', you are focusing on the positive presence of the item. If you drop the 'A' and just say 'few' or 'little', you are complaining about the negative lack of the item.",
    "uses": [
      "A FEW (Positive Countable): Some, enough (e.g., I have a few friends = I'm happy).",
      "FEW (Negative Countable): Not many, almost none (e.g., I have few friends = I'm lonely).",
      "A LITTLE (Positive Uncountable): Some, enough (e.g., I have a little money = Let's buy coffee).",
      "LITTLE (Negative Uncountable): Not much, almost none (e.g., I have little money = I am broke)."
    ],
    "patterns": [
      {
        "name": "The Positive 'A'",
        "formula": "A few / A little = Positive Attitude",
        "explanation": "You are saying 'It's a small amount, but it exists and it's enough.'"
      },
      {
        "name": "The Negative Naked Word",
        "formula": "Few / Little = Negative Attitude",
        "explanation": "You are saying 'It's almost zero. It is not enough.'"
      }
    ],
    "stepByStep": "How to choose:<br><br>1. <strong>Check Countability:</strong> Are you talking about 'friends' (countable) or 'money' (uncountable)? Friends = few. Money = little.<br>2. <strong>Check Emotion:</strong> Are you complaining or are you satisfied?<br>3. <strong>If complaining (negative):</strong> Drop the 'A'. -> 'I have <em>little</em> money. I can't buy lunch.'<br>4. <strong>If satisfied (positive):</strong> Keep the 'A'. -> 'I have <em>a little</em> money. Let's get ice cream!'",
    "examples": [
      { "type": "A few (+)", "sentence": "I have a few ideas for the project.", "note": "Positive. I can help." },
      { "type": "Few (-)", "sentence": "Few people understand this theory.", "note": "Negative. Almost nobody understands it." },
      { "type": "A little (+)", "sentence": "There is a little milk left for your tea.", "note": "Positive. You can have some." },
      { "type": "Little (-)", "sentence": "We have little hope of winning.", "note": "Negative. We will probably lose." },
      
      { "type": "Classroom", "sentence": "A few students got perfect scores.", "note": "Good news! Some students succeeded." },
      { "type": "Classroom", "sentence": "Few students failed the test.", "note": "Good news, because the lack of failure is a good thing!" },
      
      { "type": "Real-Life", "sentence": "I speak a little Spanish.", "note": "I can communicate basic things." },
      { "type": "Real-Life", "sentence": "I speak little Spanish.", "note": "I cannot communicate well at all." }
    ],
    "commonMistakes": [
      {
        "wrong": "I have a few money.",
        "correct": "I have a little money.",
        "explanation": "'Money' is uncountable. You must use 'little/a little' for uncountable nouns.",
        "fix": "Few = Countable (friends, cars). Little = Uncountable (money, time)."
      },
      {
        "wrong": "Hurry up! We only have a little time.",
        "correct": "Hurry up! We have little time.",
        "explanation": "If you are telling someone to hurry, you are focusing on the negative lack of time. You should drop the 'a' (or say 'not much time').",
        "fix": "Drop the 'a' to express panic, lack, or negativity."
      }
    ],
    "quickComparison": "<strong>Very little vs. A little:</strong> To make the negative meaning even stronger, native speakers often add 'very'. 'I have very little time' (Panic!). 'I have a little time' (Relaxed).",
    "indonesianLearnerWarning": "In Indonesian, 'sedikit' covers all these meanings. If you want to say 'sedikit' in a positive way (I have some), you MUST add the 'a' in English. If you translate 'Saya punya sedikit teman' as 'I have few friends', you are telling the listener that you are lonely and miserable!",
    "practicePrompts": [
      "Choose a little or little: 'I am sad because I have ___ free time.'",
      "Choose a few or few: 'I am happy because ___ friends are visiting me today.'",
      "Correct the mistake: 'I need a few help with my homework.'",
      "Write a sentence about a skill you know 'a little' about.",
      "Speaking prompt: What is the difference between 'The patient has a little hope' and 'The patient has little hope'?"
    ],
    "classroomUse": "<strong>The Optimist vs. Pessimist:</strong> Give a scenario: 'There are 3 slices of pizza left.' The Optimist student must say: 'Great! We have a few slices left.' The Pessimist student must say: 'Oh no. We have few slices left.'",
    "summary": [
      "FEW / A FEW are for countable nouns (friends, cars).",
      "LITTLE / A LITTLE are for uncountable nouns (water, time).",
      "Adding 'A' makes the meaning POSITIVE (Some exists, it is enough).",
      "Dropping 'A' makes the meaning NEGATIVE (Almost zero, not enough).",
      "To sound even more negative, use 'very little' or 'very few'."
    ]
  },
  {
    "id": "grammar-article-determiner-common-mistakes",
    "backHref": "articles-determiners.html",
    "backLabel": "Back to Articles & Determiners",
    "title": "Top 10 Determiner Mistakes",
    "skill": "Grammar",
    "category": "Article Repair",
    "level": "Intermediate",
    "description": "Fix the most common article and determiner errors made by English learners.",
    "introduction": "Determiners are small words, but leaving them out or choosing the wrong one can cause massive confusion. A missing article is the #1 mistake that immediately identifies someone as a non-native English speaker. In this final lesson of the pathway, we will review the top 10 mistakes learners make with articles and determiners. By diagnosing these errors, you can audit your own speaking and writing to sound much more fluent and natural.",
    "learningGoals": [
      "Identify the 10 most frequent determiner errors.",
      "Audit your own writing for 'naked' singular countable nouns.",
      "Fix errors with general statements and uncountable nouns."
    ],
    "meaning": "Most determiner mistakes happen because of three traps: 1) Leaving a singular countable noun naked. 2) Using 'the' for general statements. 3) Using countable determiners (a, many, few) with uncountable nouns (information, advice).",
    "uses": [
      "To audit your essays and emails before sending.",
      "To unlearn bad translation habits.",
      "To master the exceptions of the English article system."
    ],
    "patterns": [
      {
        "name": "The Naked Noun Trap",
        "formula": "I have [No Determiner] + Singular Countable Noun",
        "explanation": "This is the biggest mistake. 'I bought car' is always wrong. It must be 'I bought a car'."
      },
      {
        "name": "The General 'The' Trap",
        "formula": "The + Plural Noun (when making a general statement)",
        "explanation": "Saying 'The cats are cute' when you mean all cats in the world. It must be 'Cats are cute'."
      }
    ],
    "stepByStep": "How to proofread your writing for determiner mistakes:<br><br>1. <strong>Scan your text for every noun.</strong><br>2. <strong>Ask: Is this singular and countable?</strong> (e.g., house, idea, report).<br>3. <strong>If yes, check to the left.</strong> Is there a determiner (a, the, my, this)? If no, FIX IT.<br>4. <strong>Scan for 'The'.</strong> Ask: Does the reader know exactly which one I mean? If no, change it to 'A/An'.<br>5. <strong>Scan for uncountable nouns (information, equipment, advice).</strong> Ensure you did not use 'a/an', 'many', or an 's'.",
    "examples": [
      { "type": "Correct Usage", "sentence": "I bought a house.", "note": "Not 'I bought house'." },
      { "type": "Correct Usage", "sentence": "Money is important.", "note": "Not 'The money is important'." },
      { "type": "Correct Usage", "sentence": "She gave me some advice.", "note": "Not 'She gave me an advice'." },
      { "type": "Correct Usage", "sentence": "I don't have much time.", "note": "Not 'I don't have many time'." },
      { "type": "Correct Usage", "sentence": "He is an engineer.", "note": "Not 'He is engineer'." }
    ],
    "commonMistakes": [
      {
        "wrong": "I went to the bed.",
        "correct": "I went to bed.",
        "explanation": "Remember the Institution Rule! Bed, school, hospital, and prison take zero article when used for their primary purpose (sleeping).",
        "fix": "Say 'go to bed', 'go to school'."
      },
      {
        "wrong": "I need an information.",
        "correct": "I need some information.",
        "explanation": "'Information' is uncountable. It cannot take 'an'.",
        "fix": "Use 'some' with information, advice, news, and equipment."
      },
      {
        "wrong": "She is the my sister.",
        "correct": "She is my sister.",
        "explanation": "You cannot stack main determiners. 'The' and 'my' fight for the same spot.",
        "fix": "Choose only one determiner (a, the, my, this) to lead the noun phrase."
      },
      {
        "wrong": "I like the movies.",
        "correct": "I like movies.",
        "explanation": "General statements about plurals take the Zero Article.",
        "fix": "Drop 'the' for general statements."
      },
      {
        "wrong": "Every students passed.",
        "correct": "Every student passed.",
        "explanation": "'Every' must be followed by a singular noun.",
        "fix": "Every + Singular. All + Plural."
      }
    ],
    "quickComparison": "<strong>A few vs Few:</strong> Remember the emotion! A few = Happy (+). Few = Sad (-).",
    "indonesianLearnerWarning": "Indonesian does not have a strict equivalent for 'A/An', nor does it ban naked singular nouns. You must manually add a mental checklist to your speaking: 'Did I just use a singular noun? Did I put a determiner in front of it?'",
    "practicePrompts": [
      "Find the error: 'I want to buy a new equipments for my office.'",
      "Find the error: 'The love is the most important thing in life.'",
      "Find the error: 'My father works as pilot.'",
      "Write three sentences avoiding the 'naked noun' trap.",
      "Speaking prompt: Read the 'Common Mistakes' list out loud. Then cover the screen and try to recite the correct versions from memory."
    ],
    "classroomUse": "<strong>The Grammar Doctor:</strong> Give students a paragraph full of these 10 mistakes. Have them use a red pen to 'diagnose' and 'cure' the text, crossing out 'the' or adding 'a' where necessary.",
    "summary": [
      "Never leave a singular countable noun naked (must use a, the, my, etc).",
      "Never use 'the' for general statements (Money is important).",
      "Never use 'a/an' or 'many' with uncountable nouns like information, advice, or equipment.",
      "Always use 'a/an' before professions (He is a doctor).",
      "Do not stack determiners (the my car)."
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
console.log('Updated 4 final determiner lessons using ESM');
