import fs from 'fs';
import { lessons } from '../data/lessons.js';

const updated = [
  {
    "id": "grammar-preposition-adverb-conjunction",
    "backHref": "prepositions.html",
    "backLabel": "Back to Prepositions",
    "title": "Preposition vs. Adverb vs. Conjunction",
    "skill": "Grammar",
    "category": "Preposition Foundations",
    "level": "Intermediate",
    "description": "Learn how the same word can act as three different parts of speech.",
    "introduction": "English is a flexible language. Many words don't have just one job—they can change roles depending on how you use them in a sentence. Think of it like an actor who plays a doctor in one movie and a detective in another. Words like 'before', 'after', 'inside', and 'around' can act as prepositions, adverbs, or conjunctions. It entirely depends on what follows them. Understanding these roles will help you analyze sentences like a pro and stop you from making structural mistakes.",
    "learningGoals": [
      "Understand how to determine a word's part of speech based on the words following it.",
      "Distinguish between prepositions (followed by nouns), conjunctions (followed by clauses), and adverbs (no object)."
    ],
    "meaning": "Some words in English (like 'before', 'inside', 'after', 'since') can change their grammatical role depending on what follows them. If followed by a noun phrase, it's a preposition. If it connects two full clauses (subject + verb), it's a conjunction. If it describes direction or place with NO object after it, it's an adverb.",
    "uses": [
      "As a Preposition: connecting a noun to the sentence (e.g., We went inside <em>the house</em>).",
      "As an Adverb: modifying a verb directly without a following noun (e.g., We went <em>inside</em>).",
      "As a Conjunction: connecting two full clauses with subjects and verbs (e.g., Wash your hands <em>before</em> you eat)."
    ],
    "patterns": [
      {
        "name": "Preposition Pattern",
        "formula": "Word + Noun / Noun Phrase",
        "explanation": "If the word is followed directly by a noun or pronoun object, it is acting as a preposition. Example: 'before class'."
      },
      {
        "name": "Conjunction Pattern",
        "formula": "Word + Subject + Verb",
        "explanation": "If the word is followed by a full clause (a subject doing an action), it is acting as a conjunction. Example: 'before the class starts'."
      },
      {
        "name": "Adverb Pattern",
        "formula": "Verb + Word (No object)",
        "explanation": "If the word stands alone to describe the verb's location or time, and nothing follows it, it is an adverb. Example: 'I have seen this before.'"
      }
    ],
    "stepByStep": "To figure out the role of a tricky word like 'after':<br><br>1. <strong>Find the word:</strong> 'after'.<br>2. <strong>Look immediately to the right.</strong> What follows it?<br>3. <strong>Is it just a noun?</strong> 'after the storm'. It's a preposition.<br>4. <strong>Is it a subject and verb?</strong> 'after the storm passed'. It's a conjunction.<br>5. <strong>Is there nothing?</strong> 'they lived happily ever after'. It's an adverb.",
    "examples": [
      { "type": "Preposition", "sentence": "Please arrive before 9 AM.", "note": "'9 AM' is a noun phrase." },
      { "type": "Conjunction", "sentence": "Please arrive before the meeting starts.", "note": "'the meeting starts' is a clause (Subject + Verb)." },
      { "type": "Adverb", "sentence": "I have never met him before.", "note": "No object follows 'before'." },
      
      { "type": "Preposition", "sentence": "She waited outside the building.", "note": "'the building' is the object." },
      { "type": "Adverb", "sentence": "It's cold, let's wait outside.", "note": "No object. Describes where to wait." },
      
      { "type": "Classroom", "sentence": "Read the text before the lesson.", "note": "Preposition." },
      { "type": "Classroom", "sentence": "Read the text before we begin the lesson.", "note": "Conjunction (we + begin)." },
      
      { "type": "Real-Life", "sentence": "I haven't eaten since breakfast.", "note": "Preposition." },
      { "type": "Real-Life", "sentence": "I haven't eaten since I woke up.", "note": "Conjunction (I + woke up)." },
      
      { "type": "Advanced", "sentence": "He looked around the empty room.", "note": "Preposition." },
      { "type": "Advanced", "sentence": "He looked around, but saw nobody.", "note": "Adverb." },
      { "type": "Advanced", "sentence": "Because of the rain, we stayed inside.", "note": "'inside' is an adverb. 'Because of' is a compound preposition." }
    ],
    "commonMistakes": [
      {
        "wrong": "Because the rain, we stayed home.",
        "correct": "Because of the rain, we stayed home.",
        "explanation": "'Because' is a conjunction; it needs a subject and verb (Because it rained). To use a noun phrase (the rain), you must use the preposition 'Because of'.",
        "fix": "Add 'of' to make it a preposition."
      },
      {
        "wrong": "Despite it was raining, we played.",
        "correct": "Despite the rain, we played.",
        "explanation": "'Despite' is a preposition; it can only take a noun phrase. It cannot take a full clause.",
        "fix": "Change the clause to a noun phrase, or use the conjunction 'Although'."
      },
      {
        "wrong": "I went inside of the house.",
        "correct": "I went inside the house.",
        "explanation": "While informal spoken English sometimes adds 'of', 'inside' is already a preposition. You don't need 'of'.",
        "fix": "Remove 'of'."
      },
      {
        "wrong": "He came after that I left.",
        "correct": "He came after I left.",
        "explanation": "'After' is already a conjunction. You don't need to add 'that'.",
        "fix": "Remove 'that'."
      }
    ],
    "quickComparison": "<strong>Because vs. Because of:</strong> 'Because' = Conjunction (Because it is raining). 'Because of' = Preposition (Because of the rain).",
    "indonesianLearnerWarning": "In Indonesian, 'karena' translates to both 'because' and 'because of'. You must check what follows it in English. If it's a noun phrase, use 'because of'. If it's a clause, use 'because'.",
    "practicePrompts": [
      "Label 'since' as a preposition or conjunction: 'I have known him since 2010.'",
      "Label 'since' as a preposition or conjunction: 'I have known him since we were children.'",
      "Correct the mistake: 'Although the bad weather, we went hiking.'",
      "Write a sentence using 'inside' as an adverb, and another using it as a preposition.",
      "Speaking prompt: Tell a story using the words 'before' and 'after' as conjunctions."
    ],
    "classroomUse": "<strong>Role Play Cards:</strong> Give students cards with words like 'before', 'since', 'inside'. Ask them to write three sentences on the board for their word: one as a Prep, one as a Conj, and one as an Adv. Have the class vote if they succeeded.",
    "summary": [
      "Many words can play multiple roles in a sentence.",
      "Look at what follows the word to know its job.",
      "Followed by a noun? It's a preposition.",
      "Followed by a subject and verb? It's a conjunction.",
      "Followed by nothing? It's an adverb.",
      "Because (Conj) takes clauses. Because of (Prep) takes nouns."
    ]
  },
  {
    "id": "grammar-prepositions-in-on-at-time",
    "backHref": "prepositions.html",
    "backLabel": "Back to Prepositions",
    "title": "In, On, At for Time",
    "skill": "Grammar",
    "category": "Time Prepositions",
    "level": "Beginner",
    "description": "Master the triangle rule for in, on, and at when talking about time.",
    "introduction": "When should you use 'in', 'on', or 'at' to talk about time? This is one of the most common questions English learners ask. Fortunately, there is a very simple visual trick you can use: imagine an upside-down triangle. The wide top represents large, general periods of time. The middle represents specific days. The sharp bottom point represents exact, specific times on a clock. Let's learn how to apply the 'Time Triangle' to fix your preposition mistakes forever.",
    "learningGoals": [
      "Use 'in' for long periods of time (months, years, centuries).",
      "Use 'on' for days and dates.",
      "Use 'at' for precise clock times and specific moments."
    ],
    "meaning": "In English, 'in', 'on', and 'at' organize time from the most general to the most specific. 'In' is used for wide periods (centuries, decades, years, months, seasons). 'On' is used for a 24-hour period (days, dates, specific holidays with the word 'day'). 'At' is used for the exact point in time (clock times, exact moments).",
    "uses": [
      "IN = Big/General (Centuries, Decades, Years, Months, Seasons, Parts of the day).",
      "ON = Specific Days (Days of the week, Dates, Specific days like 'my birthday').",
      "AT = Very Specific Time (Clock times, specific short moments like 'noon' or 'night')."
    ],
    "patterns": [
      {
        "name": "The 'In' Pattern (Wide)",
        "formula": "in + [month/year/season/century/part of day]",
        "explanation": "Example: in 2024, in August, in summer, in the morning."
      },
      {
        "name": "The 'On' Pattern (Medium)",
        "formula": "on + [day/date/special day]",
        "explanation": "Example: on Monday, on August 5th, on New Year's Day."
      },
      {
        "name": "The 'At' Pattern (Point)",
        "formula": "at + [time/exact moment]",
        "explanation": "Example: at 3 PM, at noon, at night, at the moment."
      }
    ],
    "stepByStep": "To choose the right time preposition:<br><br>1. <strong>Look at the time word:</strong> 'Tuesday'.<br>2. <strong>Ask yourself:</strong> How long is this? Is it a whole year? A month? A 24-hour day? A clock time?<br>3. <strong>Apply the triangle:</strong> 'Tuesday' is a 24-hour day. Days take 'on'.<br>4. <strong>Result:</strong> 'on Tuesday'.<br><br>Watch out for combinations! If you say 'Tuesday morning', the primary word is 'Tuesday' (a day). So it becomes 'ON Tuesday morning', even though we say 'IN the morning'.",
    "examples": [
      { "type": "IN (Years/Months)", "sentence": "I was born in 1990.", "note": "Year." },
      { "type": "IN (Parts of Day)", "sentence": "I drink coffee in the morning.", "note": "Part of the day." },
      { "type": "ON (Days)", "sentence": "We have a meeting on Monday.", "note": "Day of the week." },
      { "type": "ON (Dates)", "sentence": "The party is on October 31st.", "note": "Specific date." },
      { "type": "AT (Clock Time)", "sentence": "The class starts at 8:00 AM.", "note": "Exact clock time." },
      
      { "type": "Classroom", "sentence": "Our test is on Friday.", "note": "Day." },
      { "type": "Classroom", "sentence": "School ends at 3 PM.", "note": "Time." },
      { "type": "Classroom", "sentence": "We don't go to school in summer.", "note": "Season." },
      
      { "type": "Real-Life", "sentence": "Let's meet at noon.", "note": "'noon' is exactly 12:00 PM." },
      { "type": "Real-Life", "sentence": "I usually watch TV at night.", "note": "Exception! 'night' takes 'at', while morning/afternoon take 'in'." },
      { "type": "Real-Life", "sentence": "See you on my birthday.", "note": "A specific day." },
      
      { "type": "Advanced", "sentence": "The technology was invented in the 19th century.", "note": "A long, general period of time." },
      { "type": "Advanced", "sentence": "The package arrived on Monday afternoon.", "note": "Because 'Monday' is attached, it uses 'on' instead of 'in'." }
    ],
    "commonMistakes": [
      {
        "wrong": "I will see you in Monday.",
        "correct": "I will see you on Monday.",
        "explanation": "Days of the week always take 'on'.",
        "fix": "Change 'in' to 'on' for all days."
      },
      {
        "wrong": "My birthday is in October 5th.",
        "correct": "My birthday is on October 5th.",
        "explanation": "Even though 'October' takes 'in', adding the specific date '5th' turns it into a specific day. Days take 'on'.",
        "fix": "Use 'on' when a specific date is given."
      },
      {
        "wrong": "I work on the morning.",
        "correct": "I work in the morning.",
        "explanation": "Parts of the day (morning, afternoon, evening) take 'in the'.",
        "fix": "Use 'in the' for morning, afternoon, and evening."
      },
      {
        "wrong": "I sleep in night.",
        "correct": "I sleep at night.",
        "explanation": "'Night' is an exception to the parts of the day rule. It always takes 'at' and has no 'the'.",
        "fix": "Memorize 'at night'."
      },
      {
        "wrong": "Let's meet at tomorrow.",
        "correct": "Let's meet tomorrow.",
        "explanation": "Words like tomorrow, yesterday, today, next, and last do NOT take ANY prepositions.",
        "fix": "Remove the preposition completely before 'tomorrow', 'next', 'last'."
      }
    ],
    "quickComparison": "<strong>In time vs. On time:</strong> 'On time' means exactly at the scheduled time (The train arrived on time). 'In time' means early enough to do something (I arrived in time to buy a ticket).",
    "indonesianLearnerWarning": "In Indonesian, 'pada' is used for almost everything: pada hari Senin, pada jam 5, pada bulan Agustus. In English, you MUST split this into on Monday, at 5 o'clock, in August. Do not use 'in' for everything just because it feels general.",
    "practicePrompts": [
      "Fill in the blanks: 'I was born ___ 1995, ___ August 15th, ___ 6:00 AM.'",
      "Correct the mistake: 'We are going on holiday in next week.'",
      "Fill in the blank: 'I love reading books ___ night.'",
      "Write three sentences about your schedule using in, on, and at.",
      "Speaking prompt: Tell a partner about your favorite holiday. When is it? What time do you wake up? What do you do in the afternoon?"
    ],
    "classroomUse": "<strong>The Triangle Draw:</strong> Draw a large upside-down triangle on the board. Write IN at the top wide part, ON in the middle, and AT at the bottom point. Have students come up and stick post-it notes with times (1999, Monday, 3 AM, Summer) in the correct section of the triangle.",
    "summary": [
      "Think of the Time Triangle (In = Wide, On = Medium, At = Point).",
      "IN is for years, months, seasons, and centuries.",
      "ON is for days and dates.",
      "AT is for exact clock times and 'night'.",
      "Never use prepositions before next, last, this, today, or tomorrow."
    ]
  },
  {
    "id": "grammar-before-after-during-while",
    "backHref": "prepositions.html",
    "backLabel": "Back to Prepositions",
    "title": "Before, After, During, While",
    "skill": "Grammar",
    "category": "Time Prepositions",
    "level": "Intermediate",
    "description": "Learn how to sequence events and show actions happening at the same time.",
    "introduction": "Life is a sequence of events. To tell a good story, you need to explain what happened first, what happened next, and what happened at the exact same time. Words like 'before', 'after', 'during', and 'while' are essential for sequencing time. However, many learners confuse 'during' and 'while'. Even though they mean the same thing, they have entirely different grammatical rules. Let's learn how to order events correctly.",
    "learningGoals": [
      "Use 'before' and 'after' correctly with nouns, gerunds, or clauses.",
      "Understand the strict grammatical difference between 'during' (noun) and 'while' (clause).",
      "Sequence events accurately in speaking and writing."
    ],
    "meaning": "'Before' means earlier than a point in time. 'After' means later than a point in time. Both can be prepositions or conjunctions. 'During' means throughout a period of time, and is ALWAYS a preposition (takes a noun). 'While' means at the exact same time, and is ALWAYS a conjunction (takes a subject + verb).",
    "uses": [
      "To show an earlier event: Before.",
      "To show a later event: After.",
      "To show an event happening inside a specific period: During (the meeting).",
      "To show two actions happening simultaneously: While (I was sleeping)."
    ],
    "patterns": [
      {
        "name": "Before / After (Flexible)",
        "formula": "Before/After + Noun OR Subject+Verb OR -ing Verb",
        "explanation": "Example: after lunch, after we ate lunch, after eating lunch. All are correct."
      },
      {
        "name": "During (Strict Preposition)",
        "formula": "During + Noun / Noun Phrase",
        "explanation": "Example: during the movie, during the storm. Never followed by a subject+verb."
      },
      {
        "name": "While (Strict Conjunction)",
        "formula": "While + Subject + Verb",
        "explanation": "Example: while we were watching the movie. Never followed by just a noun."
      }
    ],
    "stepByStep": "How to choose between During and While:<br><br>1. <strong>Look at the word immediately following the blank.</strong><br>2. <strong>Is it a noun phrase?</strong> (e.g., 'the presentation'). Use <em>During</em>. -> 'During the presentation.'<br>3. <strong>Is it a subject doing an action?</strong> (e.g., 'he was presenting'). Use <em>While</em>. -> 'While he was presenting.'<br>4. <strong>Shortcut for While:</strong> 'While' can also be followed directly by an -ing verb if the subject is the same. -> 'While presenting.'",
    "examples": [
      { "type": "Before (Prep)", "sentence": "Wash your hands before dinner.", "note": "Noun follows." },
      { "type": "Before (Conj)", "sentence": "Wash your hands before you eat.", "note": "Clause follows." },
      { "type": "After (-ing)", "sentence": "After finishing his homework, he went to bed.", "note": "Common structure using -ing verb." },
      { "type": "During (Prep)", "sentence": "My phone rang during the meeting.", "note": "Followed by a noun." },
      { "type": "While (Conj)", "sentence": "My phone rang while we were meeting.", "note": "Followed by a subject and verb." },
      
      { "type": "Classroom", "sentence": "Don't talk during the test.", "note": "'the test' is a noun." },
      { "type": "Classroom", "sentence": "Take notes while the teacher is speaking.", "note": "'the teacher is speaking' is a clause." },
      { "type": "Classroom", "sentence": "Review your notes after class.", "note": "Simple preposition use." },
      
      { "type": "Real-Life", "sentence": "I fell asleep during the movie.", "note": "Noun phrase." },
      { "type": "Real-Life", "sentence": "I fell asleep while I was watching the movie.", "note": "Full clause." },
      
      { "type": "Advanced", "sentence": "While reviewing the reports, she found several errors.", "note": "'While' + -ing verb is a sophisticated way to shorten 'While she was reviewing'." },
      { "type": "Advanced", "sentence": "During the course of the investigation, new evidence emerged.", "note": "A complex prepositional phrase." }
    ],
    "commonMistakes": [
      {
        "wrong": "My phone rang during I was sleeping.",
        "correct": "My phone rang while I was sleeping.",
        "explanation": "'During' cannot be followed by a subject and verb. It must be a noun.",
        "fix": "Change 'during' to 'while' when a subject and verb follow."
      },
      {
        "wrong": "We ate popcorn while the movie.",
        "correct": "We ate popcorn during the movie.",
        "explanation": "'While' cannot be followed by just a noun. It needs a full clause.",
        "fix": "Change 'while' to 'during' when only a noun follows."
      },
      {
        "wrong": "After to eat, I went home.",
        "correct": "After eating, I went home.",
        "explanation": "Prepositions cannot be followed by an infinitive (to + verb). They must be followed by an -ing verb (gerund).",
        "fix": "Change 'to eat' to 'eating'."
      },
      {
        "wrong": "During the summer, I went to Bali.",
        "correct": "In the summer, I went to Bali.",
        "explanation": "While 'during the summer' is grammatically okay, 'in the summer' is much more natural for general statements about seasons.",
        "fix": "Use 'in' for seasons unless emphasizing the entire duration."
      }
    ],
    "quickComparison": "<strong>During vs. For:</strong> 'During' tells you WHEN something happened (During the winter). 'For' tells you HOW LONG it happened (For three months).",
    "indonesianLearnerWarning": "In Indonesian, 'selama' translates to both 'during' and 'for'. But in English, you cannot say 'I stayed there during three weeks.' You must say 'for three weeks' (how long) vs 'during the holiday' (when).",
    "practicePrompts": [
      "Fill in the blank with During or While: '___ the storm, the power went out.'",
      "Fill in the blank with During or While: '___ it was raining, the power went out.'",
      "Correct the mistake: 'Before to leave, please lock the door.'",
      "Rewrite this sentence using 'During': 'While the presentation was happening, I took notes.'",
      "Speaking prompt: Tell a partner about something funny that happened to you 'while' you were doing something else."
    ],
    "classroomUse": "<strong>The During/While Quick-Fire:</strong> Say a phrase out loud. Students must shout 'During!' if it's a noun, or 'While!' if it's a clause. E.g., Teacher: '...the football match!' Students: 'During!' Teacher: '...they were playing football!' Students: 'While!'",
    "summary": [
      "Before and After sequence events in time.",
      "Before/After can be followed by nouns, clauses, or -ing verbs.",
      "During is a preposition. It is ONLY followed by a noun.",
      "While is a conjunction. It is followed by a subject + verb (or an -ing verb).",
      "Never use 'during' with a time measurement (use 'for' instead)."
    ]
  },
  {
    "id": "grammar-since-for-from-until",
    "backHref": "prepositions.html",
    "backLabel": "Back to Prepositions",
    "title": "Since, For, From, Until",
    "skill": "Grammar",
    "category": "Time Prepositions",
    "level": "Intermediate",
    "description": "Learn how to describe durations and starting points of actions.",
    "introduction": "When you want to talk about how long an action has been happening, or when it started and stopped, you need the time-duration prepositions: 'since', 'for', 'from', and 'until'. Mixing these up is one of the most common mistakes among intermediate learners, especially confusing 'since' and 'for'. Getting these right will immediately make your English sound more advanced, particularly when you use the Perfect tenses.",
    "learningGoals": [
      "Understand that 'since' points to a specific start time, while 'for' measures a duration.",
      "Use 'from... to/until' to describe actions with clear start and end points.",
      "Pair these prepositions with the correct verb tenses."
    ],
    "meaning": "'Since' marks the exact starting point of an action that continues to the present (needs a specific time/date). 'For' measures the total amount of time an action has lasted (needs a number/quantity of time). 'From... to/until' shows the start and end boundaries of a completed or scheduled action.",
    "uses": [
      "SINCE: To show the start point (e.g., Since Monday, Since 2015).",
      "FOR: To show the duration (e.g., For three days, For ten years).",
      "FROM... UNTIL: To show a block of time (e.g., From 9 AM until 5 PM).",
      "UNTIL (or TILL): To show when an action stops (e.g., I will wait until 6 PM)."
    ],
    "patterns": [
      {
        "name": "The 'Since' Pattern",
        "formula": "Present Perfect Tense + Since + [Starting Point]",
        "explanation": "Example: I have lived here since 2020. ('2020' is the name of the year)."
      },
      {
        "name": "The 'For' Pattern",
        "formula": "Present Perfect / Past Tense + For + [Amount of Time]",
        "explanation": "Example: I have lived here for 4 years. ('4 years' is a measurement)."
      },
      {
        "name": "The 'From... Until' Pattern",
        "formula": "From + [Start Time] + Until/To + [End Time]",
        "explanation": "Example: The shop is open from 9 AM to 5 PM."
      }
    ],
    "stepByStep": "How to choose between Since and For:<br><br>1. <strong>Look at the time phrase:</strong> 'three months'.<br>2. <strong>Ask yourself:</strong> Is this a name of a date/time (a point on a calendar), or is it a measurement of time (a stopwatch)?<br>3. <strong>If it's a measurement (3 months, 5 days, 10 minutes):</strong> Use <em>For</em>.<br>4. <strong>If it's a point on a calendar (January, Monday, 1999, yesterday):</strong> Use <em>Since</em>.",
    "examples": [
      { "type": "Since (Start Point)", "sentence": "I have worked here since January.", "note": "January is the starting point." },
      { "type": "Since (Action as point)", "sentence": "She has been sad since she failed the test.", "note": "A past action can act as a starting point." },
      { "type": "For (Duration)", "sentence": "I have worked here for five months.", "note": "Five months is the total amount of time." },
      { "type": "For (Duration)", "sentence": "We waited for two hours.", "note": "Can be used with past simple if the action is finished." },
      
      { "type": "From... To", "sentence": "I study from Monday to Friday.", "note": "Shows the boundaries of a schedule." },
      { "type": "Until", "sentence": "I will wait until 5 PM.", "note": "The action of waiting stops at 5 PM." },
      
      { "type": "Classroom", "sentence": "You have from now until Friday to finish the project.", "note": "Start point (now) and End point (Friday)." },
      { "type": "Classroom", "sentence": "We have been studying English for three years.", "note": "Total duration of study." },
      
      { "type": "Real-Life", "sentence": "I've been awake since 5 AM.", "note": "Start point." },
      { "type": "Real-Life", "sentence": "The store is closed until tomorrow.", "note": "The state of being closed stops tomorrow." },
      
      { "type": "Advanced", "sentence": "He has been the CEO since the company's inception.", "note": "Inception (beginning) acts as the starting point." },
      { "type": "Advanced", "sentence": "She slept from the moment she arrived until the sun came up.", "note": "Using full clauses as the start and end boundaries." }
    ],
    "commonMistakes": [
      {
        "wrong": "I have lived here since 5 years.",
        "correct": "I have lived here for 5 years.",
        "explanation": "'5 years' is an amount of time (a measurement). You must use 'for' with amounts of time.",
        "fix": "Change 'since' to 'for' when you see a number + time word (days/weeks/years)."
      },
      {
        "wrong": "I work here since 2020.",
        "correct": "I have worked here since 2020.",
        "explanation": "If an action started in the past and continues to the present, you must use the Present Perfect tense, not Present Simple.",
        "fix": "Change the verb to 'have/has + V3'."
      },
      {
        "wrong": "I will stay here until three days.",
        "correct": "I will stay here for three days.",
        "explanation": "'Until' is for a stop point (until Friday). It cannot be used with an amount of time.",
        "fix": "Use 'for' to talk about duration in the future."
      },
      {
        "wrong": "From Monday until Friday I work.",
        "correct": "I work from Monday to Friday.",
        "explanation": "While 'from... until' is understood, 'from... to' is the standard, natural collocation for schedules.",
        "fix": "Use 'to' when paired with 'from'."
      }
    ],
    "quickComparison": "<strong>Until vs. By:</strong> 'Until' means the action continues up to that time and then stops (I will work until 5). 'By' means a deadline for a short action (I will finish the report by 5).",
    "indonesianLearnerWarning": "In Indonesian, 'sejak' (since) is sometimes used loosely, but in English, 'since' absolutely requires the Present Perfect tense (I have been...). Do not say 'I am here since Monday.' Say 'I have been here since Monday.'",
    "practicePrompts": [
      "Choose Since or For: '___ last week', '___ three hours', '___ I was a child', '___ a long time'.",
      "Correct the mistake: 'I am learning English since 2 years.'",
      "Fill in the blanks: 'The library is open ___ 8 AM ___ 8 PM.'",
      "Write a sentence using 'until' about a future plan.",
      "Speaking prompt: Tell a partner about a hobby you have. How long have you done it? Use 'since' and 'for'."
    ],
    "classroomUse": "<strong>The Calendar vs. Stopwatch game:</strong> Hold up a picture of a calendar and a stopwatch. Shout out a time phrase (e.g., '10 minutes!', '1995!', 'last month!', 'two weeks!'). Students must point to the calendar for 'Since' and the stopwatch for 'For'.",
    "summary": [
      "Since points to the start (Calendar).",
      "For measures the total duration (Stopwatch).",
      "Always use Present Perfect tense with 'since' if the action is still happening.",
      "From... to shows schedule boundaries.",
      "Until marks when a continuous action finally stops."
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
console.log('Updated 4 time/sequencing lessons using ESM');
