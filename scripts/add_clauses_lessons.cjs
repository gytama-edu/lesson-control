const fs = require('fs');

const clausesLessons = [
  {
    id: "grammar-clause-overview",
    backHref: "clauses.html",
    backLabel: "Back to Clauses",
    title: "What Is a Clause?",
    skill: "Grammar",
    category: "Clauses",
    level: "Beginner",
    description: "Understand the basic building block of sentences containing a subject and a verb.",
    learningGoals: [
      "Understand that a clause is a group of words with a subject and a verb.",
      "Recognize clauses as the building blocks of sentences.",
      "Identify the difference between a phrase and a clause."
    ],
    meaning: "A <strong>clause</strong> is a group of words that contains both a <strong>subject</strong> (who or what is doing the action) and a <strong>verb</strong> (the action or state of being). Clauses are the core building blocks of English sentences. A sentence can be made of just one clause, or it can combine multiple clauses to express complex ideas.",
    keyIdeas: [
      "Every clause must have at least one subject and one verb.",
      "Some clauses can stand alone as complete sentences.",
      "Other clauses cannot stand alone and need to be attached to a complete sentence."
    ],
    patterns: [
      {
        name: "Simple Sentence (One Clause)",
        formula: "Subject + Verb",
        explanation: "Example: I study English."
      },
      {
        name: "Clause inside a Sentence",
        formula: "Connector + Subject + Verb",
        explanation: "Example: because I was tired"
      }
    ],
    examples: [
      {
        type: "Full Sentence",
        sentence: "I study English.",
        note: "This is a single clause that makes a complete sentence."
      },
      {
        type: "Part of a Sentence",
        sentence: "because I was tired",
        note: "This is a clause (it has a subject 'I' and a verb 'was'), but it is not a complete sentence on its own."
      },
      {
        type: "Multiple Clauses",
        sentence: "I study English because I want to travel.",
        note: "Two clauses combined: 'I study English' and 'because I want to travel'."
      }
    ],
    commonMistakes: [
      {
        wrong: "Thinking every group of words is a clause.",
        correct: "",
        explanation: "Mistake: Believing 'after class' is a clause. | Solution: It doesn't have a subject or a verb. It is just a phrase.",
        fix: "Make sure you can find the subject and verb: 'after the class ended'."
      },
      {
        wrong: "Thinking every clause is a complete sentence.",
        correct: "",
        explanation: "Mistake: Writing 'Because I was tired.' with a period. | Solution: Not all clauses can stand alone. 'Because I was tired' needs a main idea to connect to.",
        fix: "Connect it to a main clause: 'I went to bed because I was tired.'"
      }
    ],
    practicePrompts: [
      "Does this group of words have a subject and a verb? 'When the class started'",
      "Identify the clauses in this sentence: 'She smiled when she saw the puppy.'"
    ],
    classroomUse: "<strong>Teacher Tip:</strong> Write different groups of words on the board. Have students shout 'Clause!' if it has a subject and verb, or 'Phrase!' if it doesn't. Example: 'In the morning' (Phrase) vs 'When morning came' (Clause).",
    quickComparison: "<strong>Phrase vs Clause:</strong> 'after class' (Phrase: no subject or verb). 'after the class ended' (Clause: has subject 'class' and verb 'ended').",
    summary: [
      "A clause is a group of words with a subject and a verb.",
      "It is the main building block of a sentence.",
      "Some clauses are complete sentences, while others are just pieces of a sentence."
    ],
    introduction: "Imagine building a house out of Lego bricks. The individual words are like the tiny pieces, but a <strong>clause</strong> is a solid block that actually holds a shape. To build any real thought in English, you need a subject (the person or thing) and a verb (what they are doing). Together, they form a clause.",
    stepByStep: "How to identify a clause:<br><br>1. Read the group of words: 'when the teacher arrived'.<br>2. Look for an action or state of being (the verb): 'arrived'.<br>3. Ask 'who or what arrived?' (the subject): 'the teacher'.<br>4. Since you have both, it is a clause!<br>5. Check another group: 'in the morning'. There is no verb. It is not a clause."
  },
  {
    id: "grammar-independent-dependent-clauses",
    backHref: "clauses.html",
    backLabel: "Back to Clauses",
    title: "Independent & Dependent Clauses",
    skill: "Grammar",
    category: "Clauses",
    level: "Beginner",
    description: "Learn which clauses can stand alone and which cannot.",
    learningGoals: [
      "Distinguish between independent and dependent clauses.",
      "Understand that independent clauses can act as complete sentences.",
      "Recognize common connector words that introduce dependent clauses."
    ],
    meaning: "An <strong>independent clause</strong> is a complete thought that can stand alone as a perfect sentence. A <strong>dependent clause</strong> also has a subject and a verb, but it starts with a joining word (like 'because' or 'if') that makes it feel unfinished. It must hold hands with an independent clause to make sense.",
    keyIdeas: [
      "Independent clauses express a complete idea.",
      "Dependent clauses leave you hanging, waiting for more information.",
      "Dependent clauses often start with words like because, when, although, if, while, that, who, which."
    ],
    patterns: [
      {
        name: "Independent Clause",
        formula: "Subject + Verb + (Object/Complement)",
        explanation: "Example: I went home."
      },
      {
        name: "Dependent Clause",
        formula: "Connector + Subject + Verb",
        explanation: "Example: because I was tired"
      }
    ],
    examples: [
      {
        type: "Independent",
        sentence: "I went home.",
        note: "This makes perfect sense on its own."
      },
      {
        type: "Dependent",
        sentence: "because I was tired",
        note: "If someone walks up to you and says 'Because I was tired...', you will wait for them to finish. It is dependent."
      },
      {
        type: "Combined",
        sentence: "I went home because I was tired.",
        note: "Now the dependent clause is attached to an independent one. The thought is complete."
      }
    ],
    commonMistakes: [
      {
        wrong: "Because I was tired.",
        correct: "I went home because I was tired.",
        explanation: "Mistake: Writing a dependent clause as a full sentence with a capital letter and a period. This is called a sentence fragment. | Solution: Attach it to an independent clause.",
        fix: "Provide the main action that happened."
      }
    ],
    practicePrompts: [
      "Is this independent or dependent? 'If it rains tomorrow.'",
      "Combine these two clauses: 'I was late' and 'because there was a lot of traffic'."
    ],
    classroomUse: "<strong>Teacher Tip:</strong> Play the 'Hanging Sentence' game. Say a dependent clause out loud ('When I woke up this morning...'). Stop and stare at the students until someone finishes the sentence for you. This perfectly demonstrates why they are 'dependent'.",
    quickComparison: "<strong>Stand Alone vs Needs Help:</strong> 'She smiled.' (Independent). 'When she smiled.' (Dependent).",
    summary: [
      "Independent clauses can stand alone as complete sentences.",
      "Dependent clauses cannot stand alone.",
      "Dependent clauses start with connector words and must attach to an independent clause."
    ],
    introduction: "Not all clauses are created equal. Some clauses are strong enough to stand by themselves and be a full sentence. These are <strong>independent clauses</strong>. Other clauses are weak; they have a subject and a verb, but they start with a word that makes them need support. These are <strong>dependent clauses</strong>.",
    stepByStep: "How to tell them apart:<br><br>1. Read the clause out loud: 'If I have enough money'.<br>2. Imagine walking up to a stranger and saying only that phrase.<br>3. Would they understand your full idea, or would they say, '...then what?'<br>4. If they say 'then what?', it's a dependent clause.<br>5. Fix it by adding an independent clause: 'If I have enough money, I will buy a car.'"
  },
  {
    id: "grammar-phrases-vs-clauses",
    backHref: "clauses.html",
    backLabel: "Back to Clauses",
    title: "Phrases vs Clauses",
    skill: "Grammar",
    category: "Clauses",
    level: "Beginner",
    description: "Differentiate between groups of words with and without a subject-verb pairing.",
    learningGoals: [
      "Understand the difference between a phrase and a clause.",
      "Identify phrases as groups of words missing a subject, a verb, or both.",
      "Use the correct conjunctions for clauses and prepositions for phrases."
    ],
    meaning: "A <strong>phrase</strong> is a group of words that works together but is missing a working subject-verb pair. A <strong>clause</strong> is a group of words that contains a working subject and verb. Knowing the difference helps you choose the right connecting words (like 'because of' vs. 'because').",
    keyIdeas: [
      "Phrases just point to things or describe them (e.g., a noun phrase or prepositional phrase).",
      "Clauses state an action or a fact (e.g., someone did something).",
      "Different grammar rules apply depending on whether you follow a connector with a phrase or a clause."
    ],
    patterns: [
      {
        name: "Phrase",
        formula: "No Subject + Verb pairing",
        explanation: "Example: after class, because of the rain, the student in the library"
      },
      {
        name: "Clause",
        formula: "Subject + Verb",
        explanation: "Example: after the class ended, because it was raining, the student was reading"
      }
    ],
    examples: [
      {
        type: "Time Phrase vs Clause",
        sentence: "Phrase: after class | Clause: after the class ended",
        note: "Notice how the clause adds the verb 'ended'."
      },
      {
        type: "Description Phrase vs Clause",
        sentence: "Phrase: the student in the library | Clause: the student was reading in the library",
        note: "The phrase just names the student; the clause tells you what they were doing."
      }
    ],
    commonMistakes: [
      {
        wrong: "During I studied, my phone rang.",
        correct: "While I studied, my phone rang. OR During my study session, my phone rang.",
        explanation: "Mistake: Using a preposition ('during') which requires a noun phrase, but following it with a full clause ('I studied'). | Solution: 'While' is for clauses. 'During' is for phrases.",
        fix: "Match the connector to the structure."
      },
      {
        wrong: "Because of I was tired, I went home.",
        correct: "Because I was tired, I went home.",
        explanation: "Mistake: Using 'because of' (needs a phrase) with a clause ('I was tired').",
        fix: "Use 'because' for clauses, and 'because of' for noun phrases (like 'because of my tiredness')."
      }
    ],
    practicePrompts: [
      "Is this a phrase or a clause? 'In the middle of the night'",
      "Choose the right word: '(Because / Because of) the bad weather, we stayed inside.'"
    ],
    classroomUse: "<strong>Teacher Tip:</strong> Do a sorting activity. Give students cards with either phrases ('despite the rain') or clauses ('although it was raining'). Have them physically sort them into two piles and explain how they know.",
    quickComparison: "<strong>Phrase:</strong> because of the rain (Noun phrase). <strong>Clause:</strong> because it was raining (Subject + Verb).",
    summary: [
      "A phrase lacks a subject-verb pair.",
      "A clause has a subject-verb pair.",
      "You must use different connecting words for phrases and clauses."
    ],
    introduction: "In English, you can express the exact same idea using either a <strong>phrase</strong> or a <strong>clause</strong>. The choice you make determines the grammar of the rest of the sentence. If you understand the difference, you will stop making common mistakes like saying 'because of I am sick'.",
    stepByStep: "How to check if you have a phrase or a clause:<br><br>1. Look at the group of words: 'because of the heavy rain'.<br>2. Can you find an action verb? No.<br>3. This is a phrase. Therefore, you correctly used the preposition 'because of'.<br>4. Look at another group: 'because it rained heavily'.<br>5. Can you find a subject ('it') and a verb ('rained')? Yes.<br>6. This is a clause. Therefore, you correctly used the conjunction 'because'."
  },
  {
    id: "grammar-main-subordinate-clauses",
    backHref: "clauses.html",
    backLabel: "Back to Clauses",
    title: "Main & Subordinate Clauses",
    skill: "Grammar",
    category: "Clauses",
    level: "Beginner",
    description: "Understand how main and subordinate clauses interact in a sentence.",
    learningGoals: [
      "Identify the main clause as the core message of a sentence.",
      "Identify the subordinate clause as the extra information.",
      "Learn the comma rules for joining these clauses."
    ],
    meaning: "When you join clauses together, they have different jobs. The <strong>main clause</strong> (independent) carries the core message of the sentence. The <strong>subordinate clause</strong> (dependent) adds extra background information like the time, reason, or condition.",
    keyIdeas: [
      "Every sentence must have at least one main clause.",
      "Subordinate clauses give context to the main clause.",
      "You can put the subordinate clause before or after the main clause."
    ],
    patterns: [
      {
        name: "Main Clause First",
        formula: "Main Clause + Subordinate Clause",
        explanation: "Example: I stayed home because it was raining."
      },
      {
        name: "Subordinate Clause First",
        formula: "Subordinate Clause + , + Main Clause",
        explanation: "Example: Because it was raining, I stayed home."
      }
    ],
    examples: [
      {
        type: "Main First (No Comma)",
        sentence: "I stayed home because it was raining.",
        note: "The main idea is 'I stayed home'. No comma is usually needed when the main clause is first."
      },
      {
        type: "Subordinate First (Comma Needed)",
        sentence: "When the teacher entered the room, the students became quiet.",
        note: "The background info is first. You use a comma to signal when the main idea starts."
      },
      {
        type: "Contrast",
        sentence: "Although the test was hard, I finished it.",
        note: "'I finished it' is the main achievement. 'Although the test was hard' is the context."
      }
    ],
    commonMistakes: [
      {
        wrong: "Because I was tired I went home.",
        correct: "Because I was tired, I went home.",
        explanation: "Mistake: Forgetting the comma when starting the sentence with a subordinate clause. | Solution: The reader needs a pause before the main idea begins.",
        fix: "Add a comma after the subordinate clause."
      },
      {
        wrong: "I went home, because I was tired.",
        correct: "I went home because I was tired.",
        explanation: "Mistake: Using a comma when the main clause comes first. | Solution: When the connector ('because') is in the middle, it acts as the bridge. No comma is needed.",
        fix: "Remove the comma."
      }
    ],
    practicePrompts: [
      "Identify the main clause: 'If you need help, please call me.'",
      "Punctuate this sentence: 'Although it was late we kept working'"
    ],
    classroomUse: "<strong>Teacher Tip:</strong> Have students practice flipping sentences. Give them 'I passed the test because I studied hard.' Ask them to put the 'because' part at the front and physically draw an exaggerated comma in the air to remember the punctuation rule.",
    quickComparison: "<strong>Main vs Subordinate:</strong> Main = The headline of the news. Subordinate = The background details.",
    summary: [
      "The main clause has the core message.",
      "The subordinate clause adds extra information.",
      "Use a comma if the subordinate clause comes first."
    ],
    introduction: "Sentences are often like movies. There is a main action (the <strong>main clause</strong>), and there is the background setting (the <strong>subordinate clause</strong>). Understanding how to arrange these two parts allows you to emphasize different ideas and flow smoothly between them.",
    stepByStep: "How to arrange your clauses:<br><br>1. Identify your two ideas: 'I felt sick' (main event) and 'because I ate too much' (background reason).<br>2. Option 1: State the main event first. 'I felt sick because I ate too much.' (Smooth flow, no comma).<br>3. Option 2: Set the background first for dramatic effect. 'Because I ate too much, I felt sick.'<br>4. Always remember the comma if you choose Option 2!"
  },
  {
    id: "grammar-noun-clauses-overview",
    backHref: "clauses.html",
    backLabel: "Back to Clauses",
    title: "What Are Noun Clauses?",
    skill: "Grammar",
    category: "Clauses",
    level: "Intermediate",
    description: "Learn how a clause can function as a noun inside a sentence.",
    learningGoals: [
      "Understand that a noun clause acts exactly like a single noun.",
      "Identify noun clauses acting as subjects, objects, or complements."
    ],
    meaning: "A <strong>noun clause</strong> is a dependent clause that does the exact same job as a noun. Instead of just saying a single word like 'the truth' or 'the answer', you can use a whole clause (with its own subject and verb) to fill the noun slot in a sentence.",
    keyIdeas: [
      "A noun clause can be the subject of a sentence.",
      "A noun clause can be the object of a verb.",
      "A noun clause can follow a preposition."
    ],
    patterns: [
      {
        name: "Noun as Object",
        formula: "Subject + Verb + [Noun]",
        explanation: "Example: I know [the answer]."
      },
      {
        name: "Noun Clause as Object",
        formula: "Subject + Verb + [Noun Clause]",
        explanation: "Example: I know [that he is honest]."
      }
    ],
    examples: [
      {
        type: "Object of a Verb",
        sentence: "She knows what you mean.",
        note: "'what you mean' takes the place of a noun like 'the answer'. It receives the action of 'knows'."
      },
      {
        type: "Subject of a Sentence",
        sentence: "What you said was helpful.",
        note: "'What you said' takes the place of a noun like 'Your advice'. It is the subject of 'was'."
      }
    ],
    commonMistakes: [
      {
        wrong: "I don't know what is his name.",
        correct: "I don't know what his name is.",
        explanation: "Mistake: Using question word order inside a noun clause. | Solution: A noun clause is a statement, not a question.",
        fix: "Keep the subject before the verb in the clause."
      }
    ],
    practicePrompts: [
      "Find the noun clause: 'I believe that practice makes perfect.'",
      "Replace the noun with a noun clause: 'I know the time.' -> 'I know when...'"
    ],
    classroomUse: "<strong>Teacher Tip:</strong> Show students a sentence like 'I like pizza.' Ask them what 'pizza' is (a noun, an object). Then erase 'pizza' and write 'what my mom cooks'. Explain that the whole group of words just became a giant piece of pizza.",
    quickComparison: "<strong>Noun vs Noun Clause:</strong> 'I know <em>the story</em>.' vs 'I know <em>what happened</em>.'",
    summary: [
      "Noun clauses work like giant nouns.",
      "They can be subjects or objects.",
      "They are statements, not questions."
    ],
    introduction: "Sometimes, one word isn't enough to name an idea. If someone asks you a complex question, you can't just answer with 'a car' or 'a book'. You need to answer with an entire thought. A <strong>noun clause</strong> lets you take a complete thought with a subject and a verb and drop it directly into the noun slot of a larger sentence.",
    stepByStep: "How to see a noun clause:<br><br>1. Look at a simple sentence: 'I believe the story.'<br>2. 'the story' is the object (a noun phrase).<br>3. Replace it with a full idea that has a subject and verb: 'that practice is important'.<br>4. Result: 'I believe that practice is important.'<br>5. The entire clause 'that practice is important' acts as the object of 'believe'."
  },
  {
    id: "grammar-noun-clauses-that",
    backHref: "clauses.html",
    backLabel: "Back to Clauses",
    title: "Noun Clauses with That",
    skill: "Grammar",
    category: "Clauses",
    level: "Intermediate",
    description: "Use 'that' to introduce statement clauses as objects or subjects.",
    learningGoals: [
      "Use 'that' to introduce a noun clause.",
      "Recognize that 'that' can often be omitted in spoken English.",
      "Maintain statement word order inside the clause."
    ],
    meaning: "The most common way to create a noun clause is to place the word <strong>that</strong> in front of a regular statement. This turns a standalone fact into an object that can be believed, said, known, or thought by someone.",
    keyIdeas: [
      "'That' acts as the glue to stick a statement into another sentence.",
      "The clause after 'that' uses normal statement word order (Subject + Verb).",
      "In informal speaking and writing, 'that' is frequently dropped when it is an object clause."
    ],
    patterns: [
      {
        name: "With 'That'",
        formula: "Main Verb + that + Subject + Verb",
        explanation: "Example: I think that English is important."
      },
      {
        name: "Without 'That' (Informal)",
        formula: "Main Verb + Subject + Verb",
        explanation: "Example: I think English is important."
      }
    ],
    examples: [
      {
        type: "Stating an Opinion",
        sentence: "I think that English is important.",
        note: "The noun clause is the object of 'think'."
      },
      {
        type: "Reporting Speech",
        sentence: "She said that she was tired.",
        note: "The noun clause tells us exactly what she said."
      },
      {
        type: "Omitted 'That'",
        sentence: "She said she was tired.",
        note: "Very common in everyday conversation."
      }
    ],
    commonMistakes: [
      {
        wrong: "I think that is he honest.",
        correct: "I think that he is honest.",
        explanation: "Mistake: Inverting the subject and verb inside the clause. | Solution: Noun clauses use statement word order.",
        fix: "Keep the subject ('he') before the verb ('is')."
      },
      {
        wrong: "She said that was she tired.",
        correct: "She said that she was tired.",
        explanation: "Mistake: Turning the reported speech into a question.",
        fix: "Use Subject + Verb."
      }
    ],
    practicePrompts: [
      "Combine using 'that': I believe. He is a good teacher.",
      "Remove 'that' from this sentence: 'We know that you are busy.'"
    ],
    classroomUse: "<strong>Teacher Tip:</strong> Do a 'He said / She said' activity. Whisper a secret to a student ('I like chocolate'). They must report it to the class: 'He said <em>that he likes chocolate</em>.'",
    quickComparison: "<strong>Statement vs Noun Clause:</strong> 'He is honest.' (Statement). 'I believe <em>that he is honest.</em>' (Noun Clause).",
    summary: [
      "'That' turns a statement into a noun clause.",
      "The word order inside the clause remains normal (Subject + Verb).",
      "You can often drop 'that' in casual speech."
    ],
    introduction: "How do you share an opinion, a belief, or report what someone else said? You take a regular sentence and put the word <strong>that</strong> in front of it. This simple trick turns an independent statement into a neat package that you can use as the object of verbs like think, know, believe, say, and hope.",
    stepByStep: "How to build a 'that' clause:<br><br>1. Start with a fact: 'She is tired.'<br>2. Choose a reporting verb: 'She said'.<br>3. Add 'that' to the front of the fact: 'that she was tired'. (Note: verb tenses may shift when reporting past speech).<br>4. Combine them: 'She said that she was tired.'<br>5. In a casual conversation, you can just say: 'She said she was tired.'"
  },
  {
    id: "grammar-noun-clauses-wh-words",
    backHref: "clauses.html",
    backLabel: "Back to Clauses",
    title: "Noun Clauses with WH-Words",
    skill: "Grammar",
    category: "Clauses",
    level: "Intermediate",
    description: "Form noun clauses using question words while keeping statement word order.",
    learningGoals: [
      "Use WH-words (what, where, when, why, how, who) to introduce noun clauses.",
      "Avoid the common mistake of using question word order inside a noun clause.",
      "Embed questions politely (indirect questions)."
    ],
    meaning: "You can turn a question into a noun clause by using a <strong>WH-word</strong>. This is often used for indirect or polite questions, or to state that you know (or don't know) the answer to a question. The most critical rule is that <strong>a noun clause is not a question</strong>; it is a statement about a question.",
    keyIdeas: [
      "Noun clauses use WH-words: what, where, when, why, how, who, which.",
      "The word order inside the noun clause must be Subject + Verb.",
      "Do NOT use auxiliary verbs like do, does, or did inside the noun clause."
    ],
    patterns: [
      {
        name: "Direct Question",
        formula: "WH-Word + Verb + Subject?",
        explanation: "Example: Where does he live?"
      },
      {
        name: "Embedded Noun Clause",
        formula: "Main Phrase + WH-Word + Subject + Verb.",
        explanation: "Example: I know where he lives."
      }
    ],
    examples: [
      {
        type: "Where",
        sentence: "I know where he lives.",
        note: "Not 'where does he live'."
      },
      {
        type: "Why",
        sentence: "She explained why she was late.",
        note: "Not 'why was she late'."
      },
      {
        type: "What",
        sentence: "Do you understand what I mean?",
        note: "The main sentence is a question ('Do you understand?'), but the clause ('what I mean') is a statement."
      },
      {
        type: "When",
        sentence: "I do not remember when the class starts.",
        note: "Not 'when does the class start'."
      }
    ],
    commonMistakes: [
      {
        wrong: "I know where does he live.",
        correct: "I know where he lives.",
        explanation: "Mistake: Keeping the question structure ('does he live') inside a statement. | Solution: Remove the helper verb 'does' and make the main verb agree with the subject.",
        fix: "Change 'does he live' to 'he lives'."
      },
      {
        wrong: "Tell me what did she say.",
        correct: "Tell me what she said.",
        explanation: "Mistake: Keeping 'did she say'. | Solution: Remove 'did' and change the main verb to past tense.",
        fix: "Change 'did she say' to 'she said'."
      },
      {
        wrong: "I don’t know why is he angry.",
        correct: "I don’t know why he is angry.",
        explanation: "Mistake: Inverting the subject and 'be' verb ('is he').",
        fix: "Flip it back to normal statement order: 'he is'."
      }
    ],
    practicePrompts: [
      "Change this question to a noun clause: 'Where is the station?' -> 'Can you tell me...'",
      "Correct the mistake: 'I wonder what time is it.'"
    ],
    classroomUse: "<strong>Teacher Tip:</strong> Play the 'Polite Stranger' game. Have students ask direct questions ('Where is the bathroom?'). Then have them ask a 'polite stranger' using an embedded noun clause: 'Excuse me, do you know where the bathroom is?'",
    quickComparison: "<strong>Question vs Clause:</strong> 'What is he doing?' (Question). 'I see <em>what he is doing.</em>' (Clause).",
    summary: [
      "WH-words can introduce noun clauses.",
      "The clause must use normal statement word order (Subject + Verb).",
      "Never use do/does/did inside a WH-noun clause."
    ],
    introduction: "Sometimes it sounds too aggressive to ask a direct question like 'Why are you late?' Instead, we embed the question into a larger sentence: 'Can you tell me <strong>why you are late?</strong>' This embedded question is a noun clause. Mastering this structure is the secret to sounding polite and advanced in English.",
    stepByStep: "How to fix embedded questions:<br><br>1. Start with a direct question: 'Where did she go?'<br>2. Look at the verb structure: 'did go'.<br>3. Remove the helper 'did' and turn the main verb into the past tense: 'she went'.<br>4. Attach it to your main phrase: 'I wonder where she went.'<br>5. Notice that the noun clause 'where she went' is now a perfect statement."
  },
  {
    id: "grammar-noun-clauses-subjects-objects",
    backHref: "clauses.html",
    backLabel: "Back to Clauses",
    title: "Subjects & Objects",
    skill: "Grammar",
    category: "Clauses",
    level: "Advanced",
    description: "See how noun clauses act specifically as subjects or objects.",
    learningGoals: [
      "Identify noun clauses acting as the object of a verb.",
      "Identify noun clauses acting as the subject of an entire sentence.",
      "Understand why subject noun clauses take singular verbs."
    ],
    meaning: "Because a noun clause works just like a noun, it can sit in the two most important noun positions in a sentence: the <strong>object</strong> position (after the verb) and the <strong>subject</strong> position (before the verb).",
    keyIdeas: [
      "Object noun clauses are very common and feel natural.",
      "Subject noun clauses are more advanced and are often used in formal writing.",
      "When a whole clause acts as a subject, it is treated as a singular 'it', so it takes a singular verb (like 'is' or 'was')."
    ],
    patterns: [
      {
        name: "As Object",
        formula: "Subject + Verb + [Noun Clause]",
        explanation: "Example: I believe [that he is right]."
      },
      {
        name: "As Subject",
        formula: "[Noun Clause] + Verb + Complement",
        explanation: "Example: [What you said] was important."
      }
    ],
    examples: [
      {
        type: "Object Clause",
        sentence: "She knows what I need.",
        note: "'what I need' receives the action of 'knows'."
      },
      {
        type: "Subject Clause (What)",
        sentence: "What you said was important.",
        note: "The entire idea of 'What you said' is the subject of 'was'."
      },
      {
        type: "Subject Clause (That)",
        sentence: "That she passed the test surprised everyone.",
        note: "The fact 'That she passed the test' is the subject doing the surprising."
      }
    ],
    commonMistakes: [
      {
        wrong: "What did you say was important.",
        correct: "What you said was important.",
        explanation: "Mistake: Using question word order inside a subject clause. | Solution: Even at the beginning of a sentence, a noun clause must have statement word order.",
        fix: "Remove 'did' and use the past tense: 'What you said'."
      },
      {
        wrong: "That she passed the test were surprising.",
        correct: "That she passed the test was surprising.",
        explanation: "Mistake: Using a plural verb because you saw the plural word 'test' (or just guessing). | Solution: A subject clause counts as ONE fact/idea, so it takes a singular verb.",
        fix: "Change 'were' to 'was'."
      }
    ],
    practicePrompts: [
      "Is the clause a subject or object? 'I heard what happened.'",
      "Correct the mistake: 'What they are doing are dangerous.'"
    ],
    classroomUse: "<strong>Teacher Tip:</strong> Write '_______ is interesting.' on the board. Ask students to fill in the blank with one word (e.g., 'Grammar'). Then ask them to fill it in with a whole clause (e.g., 'What we learned today'). This proves the clause is the subject.",
    quickComparison: "<strong>Object vs Subject:</strong> I understand <em>what you need</em>. (Object). <em>What you need</em> is expensive. (Subject).",
    summary: [
      "Noun clauses can sit anywhere a noun can sit.",
      "Object clauses come after the verb.",
      "Subject clauses come before the main verb and always take a singular verb."
    ],
    introduction: "Using a noun clause as an <strong>object</strong> is something you probably do every day ('I think that it will rain'). But using a noun clause as a <strong>subject</strong> ('That it will rain is obvious') is a powerful tool for academic writing. It allows you to take complex situations and discuss them as a single topic.",
    stepByStep: "How to handle subject noun clauses:<br><br>1. Identify the whole idea: 'What she said'.<br>2. Treat that entire group of words as one big block.<br>3. Mentally replace that block with 'It'.<br>4. Choose your verb: 'It <strong>was</strong> surprising'.<br>5. Swap the block back in: 'What she said was surprising.'<br>6. This helps you avoid plural verbs and structure mistakes!"
  },
  {
    id: "grammar-relative-clauses-overview",
    backHref: "clauses.html",
    backLabel: "Back to Clauses",
    title: "What Are Relative Clauses?",
    skill: "Grammar",
    category: "Clauses",
    level: "Intermediate",
    description: "Understand how clauses can modify nouns like adjectives.",
    learningGoals: [
      "Understand that a relative clause acts like an adjective to describe a noun.",
      "Learn to use relative clauses to combine two related sentences into one.",
      "Identify the head noun that the relative clause describes."
    ],
    meaning: "A <strong>relative clause</strong> (also called an adjective clause) is a dependent clause that describes a noun. It is placed immediately after the noun it describes. It allows you to add specific details about a person, place, or thing without having to chop your writing into short, robotic sentences.",
    keyIdeas: [
      "Relative clauses do the exact same job as adjectives, but they are longer.",
      "They always follow the noun they are describing.",
      "They begin with relative pronouns like who, which, that, whose, where, or when."
    ],
    patterns: [
      {
        name: "Noun + Relative Clause",
        formula: "Noun + [Relative Pronoun + Clause]",
        explanation: "Example: The student [who won the contest] is my classmate."
      }
    ],
    examples: [
      {
        type: "Describing a Subject",
        sentence: "The student who won the contest is my classmate.",
        note: "The clause 'who won the contest' describes 'The student'."
      },
      {
        type: "Describing an Object",
        sentence: "The book that I bought yesterday is interesting.",
        note: "The clause 'that I bought yesterday' describes 'The book'."
      },
      {
        type: "Describing a Thing",
        sentence: "The lesson which helped me most was about tenses.",
        note: "The clause 'which helped me most' describes 'The lesson'."
      }
    ],
    commonMistakes: [
      {
        wrong: "The student he won the contest is my friend.",
        correct: "The student who won the contest is my friend.",
        explanation: "Mistake: Using a personal pronoun ('he') instead of a relative pronoun ('who') to link the clause. | Solution: You need a linking word to connect the two ideas.",
        fix: "Replace 'he' with 'who'."
      },
      {
        wrong: "I read the book is on the table.",
        correct: "I read the book that is on the table.",
        explanation: "Mistake: Forgetting the relative pronoun entirely.",
        fix: "Add 'that' or 'which'."
      }
    ],
    practicePrompts: [
      "Find the relative clause: 'The car that is parked outside is mine.'",
      "Combine these: 'I have a friend. He lives in Tokyo.'"
    ],
    classroomUse: "<strong>Teacher Tip:</strong> Show students two boring sentences: 'I saw a man. The man was running.' Show them how clunky it sounds. Then show them the magic of combining them: 'I saw a man who was running.' Emphasize that it creates a smoother, more advanced flow.",
    quickComparison: "<strong>Adjective vs Clause:</strong> 'The <em>smart</em> student.' (Adjective). 'The student <em>who is smart</em>.' (Relative Clause).",
    summary: [
      "Relative clauses describe nouns.",
      "They are placed directly after the noun.",
      "They prevent you from writing short, choppy sentences."
    ],
    introduction: "In the Noun Phrase pathway, you learned how to add adjectives before a noun. But what if you want to describe a noun using an entire action or event? You use a <strong>relative clause</strong>. It is a powerful tool to expand a noun ('the student') into a very specific image ('the student who won the contest').",
    stepByStep: "How to combine ideas with a relative clause:<br><br>1. You have two ideas: 'The phone is ringing.' and 'The phone belongs to me.'<br>2. Identify the shared noun: 'The phone'.<br>3. Turn one idea into a describing clause: 'that is ringing'.<br>4. Place it directly after the noun in the main sentence.<br>5. Result: 'The phone that is ringing belongs to me.'"
  },
  {
    id: "grammar-relative-who-which-that",
    backHref: "clauses.html",
    backLabel: "Back to Clauses",
    title: "Who, Which, and That",
    skill: "Grammar",
    category: "Clauses",
    level: "Intermediate",
    description: "Learn to use relative pronouns correctly for people and things.",
    learningGoals: [
      "Use 'who' for people.",
      "Use 'which' for things and animals.",
      "Understand when 'that' can be used for either people or things."
    ],
    meaning: "To start a relative clause, you must choose the correct <strong>relative pronoun</strong>. This word acts as the bridge connecting the description back to the noun. The choice depends entirely on whether the noun is a human or an object/animal.",
    keyIdeas: [
      "'Who' is strictly for humans.",
      "'Which' is strictly for things and animals.",
      "'That' is a versatile word that can replace 'who' or 'which' in essential (defining) clauses."
    ],
    patterns: [
      {
        name: "For People",
        formula: "Person Noun + who/that + Clause",
        explanation: "Example: the teacher who helped me"
      },
      {
        name: "For Things",
        formula: "Thing Noun + which/that + Clause",
        explanation: "Example: the phone which I bought"
      }
    ],
    examples: [
      {
        type: "Who (People)",
        sentence: "The teacher who helped me is kind.",
        note: "Describing 'teacher'."
      },
      {
        type: "Which (Things)",
        sentence: "The phone which I bought is expensive.",
        note: "Describing 'phone'."
      },
      {
        type: "That (Both)",
        sentence: "The lesson that we studied was useful.",
        note: "'That' works perfectly here instead of 'which'."
      }
    ],
    commonMistakes: [
      {
        wrong: "The book who I read is good.",
        correct: "The book which/that I read is good.",
        explanation: "Mistake: Using 'who' for a thing. | Solution: 'Who' is only for people.",
        fix: "Use 'which' or 'that'."
      },
      {
        wrong: "The student which is sitting there is smart.",
        correct: "The student who/that is sitting there is smart.",
        explanation: "Mistake: Using 'which' for a person. | Solution: 'Which' is not used for humans in relative clauses.",
        fix: "Use 'who' or 'that'."
      },
      {
        wrong: "The book that I bought it yesterday is interesting.",
        correct: "The book that I bought yesterday is interesting.",
        explanation: "Mistake: Repeating the object ('it') inside the clause. | Solution: 'That' already replaces 'it'.",
        fix: "Drop the extra pronoun."
      }
    ],
    practicePrompts: [
      "Choose the right pronoun: 'The dog (who/which) barks loudly.'",
      "Correct the mistake: 'The man which called me is my boss.'"
    ],
    classroomUse: "<strong>Teacher Tip:</strong> Draw a person on one side of the board and write 'WHO'. Draw a box on the other side and write 'WHICH'. Write 'THAT' in the middle with arrows pointing to both. This visual map helps students remember the rules instantly.",
    quickComparison: "<strong>Who vs Which:</strong> The man <em>who</em> drives the car. The car <em>which</em> the man drives.",
    summary: [
      "Use 'who' for people.",
      "Use 'which' for things.",
      "Use 'that' for either (in essential clauses).",
      "Do not repeat the noun inside the clause as a pronoun (like 'it' or 'he')."
    ],
    introduction: "Building a relative clause requires a bridge. If you pick the wrong bridge, the sentence collapses. Picking between <strong>who</strong>, <strong>which</strong>, and <strong>that</strong> is usually the first stumbling block for learners, but the rules are very clear once you memorize them.",
    stepByStep: "How to choose the pronoun:<br><br>1. Look at the noun directly in front of the clause.<br>2. Is it a person? -> Use 'who' (or 'that').<br>3. Is it an object, idea, or animal? -> Use 'which' (or 'that').<br>4. Warning: Once you use the relative pronoun, do NOT put 'he/she/it/them' later in the clause to refer to the same thing. The bridge word already did that job."
  },
  {
    id: "grammar-relative-whose-where-when",
    backHref: "clauses.html",
    backLabel: "Back to Clauses",
    title: "Whose, Where, and When",
    skill: "Grammar",
    category: "Clauses",
    level: "Intermediate",
    description: "Use relative pronouns for possession, places, and times.",
    learningGoals: [
      "Use 'whose' to show possession in a relative clause.",
      "Use 'where' to describe a place.",
      "Use 'when' to describe a time."
    ],
    meaning: "Sometimes you need to describe a noun based on what belongs to it, the location it represents, or the time it represents. For these specific jobs, you use the advanced relative pronouns <strong>whose</strong>, <strong>where</strong>, and <strong>when</strong>.",
    keyIdeas: [
      "'Whose' replaces possessive words like his, her, its, or their.",
      "'Where' is used to describe physical locations.",
      "'When' is used to describe moments in time (days, years, moments)."
    ],
    patterns: [
      {
        name: "Possession (Whose)",
        formula: "Noun + whose + possession + Verb",
        explanation: "Example: The student whose bag is red"
      },
      {
        name: "Place (Where)",
        formula: "Place Noun + where + Clause",
        explanation: "Example: The school where I studied"
      },
      {
        name: "Time (When)",
        formula: "Time Noun + when + Clause",
        explanation: "Example: The day when we met"
      }
    ],
    examples: [
      {
        type: "Whose",
        sentence: "The student whose bag is red is my friend.",
        note: "It means 'The student [his bag is red] is my friend'."
      },
      {
        type: "Where",
        sentence: "This is the school where I studied.",
        note: "Describing a location."
      },
      {
        type: "When",
        sentence: "I remember the day when we first met.",
        note: "Describing a specific time."
      }
    ],
    commonMistakes: [
      {
        wrong: "The student who bag is red.",
        correct: "The student whose bag is red.",
        explanation: "Mistake: Using 'who' instead of the possessive 'whose'. | Solution: 'Who' is a subject, not an owner.",
        fix: "Use 'whose' when followed by a noun that belongs to the person."
      },
      {
        wrong: "The place which I live.",
        correct: "The place where I live.",
        explanation: "Mistake: Using 'which' for a location without a preposition. | Solution: 'Where' equals 'in/at which'.",
        fix: "Use 'where' when describing things happening at a location."
      },
      {
        wrong: "The day where we met.",
        correct: "The day when we met.",
        explanation: "Mistake: Using 'where' for a time. | Solution: 'Where' is strictly physical.",
        fix: "Use 'when' for time."
      }
    ],
    practicePrompts: [
      "Choose the right word: 'The house (which/where) I grew up.'",
      "Combine using 'whose': 'I met a man. His car was stolen.'"
    ],
    classroomUse: "<strong>Teacher Tip:</strong> Focus heavily on 'whose'. Write 'The man' on the board. Then write 'His dog ran away'. Show how 'whose' swallows the word 'His' to connect them: 'The man whose dog ran away'.",
    quickComparison: "<strong>Which vs Where:</strong> This is the house <em>which</em> I bought (Object). This is the house <em>where</em> I live (Location).",
    summary: [
      "Use 'whose' for ownership.",
      "Use 'where' for places.",
      "Use 'when' for times.",
      "Do not confuse 'where' (location) with 'when' (time)."
    ],
    introduction: "While who and which are great for general descriptions, sometimes you need special tools. If you want to connect a person to something they own, or connect an event to a location or time, <strong>whose, where, and when</strong> are the precise relative pronouns you need.",
    stepByStep: "How to use 'whose':<br><br>1. Look at two sentences: 'I know the girl.' and 'Her brother is a doctor.'<br>2. We want to combine them by focusing on 'the girl'.<br>3. Remove the possessive word 'Her'.<br>4. Replace it with 'whose': 'whose brother is a doctor'.<br>5. Attach it: 'I know the girl whose brother is a doctor.'<br>6. Remember: 'whose' is almost always followed immediately by a noun (brother, bag, car)."
  },
  {
    id: "grammar-defining-non-defining-relative-clauses",
    backHref: "clauses.html",
    backLabel: "Back to Clauses",
    title: "Defining & Non-Defining Clauses",
    skill: "Grammar",
    category: "Clauses",
    level: "Advanced",
    description: "Understand when information is essential and when to use commas.",
    learningGoals: [
      "Distinguish between defining (essential) and non-defining (extra) relative clauses.",
      "Use commas correctly around non-defining clauses.",
      "Understand why 'that' cannot be used in non-defining clauses."
    ],
    meaning: "Relative clauses come in two types. A <strong>defining clause</strong> provides essential information needed to identify the noun. A <strong>non-defining clause</strong> provides extra, bonus information about a noun that is already clearly identified. The difference between them is shown entirely by commas.",
    keyIdeas: [
      "Defining clauses = No commas. Essential for meaning.",
      "Non-defining clauses = Use commas. Extra information.",
      "You cannot use the word 'that' in non-defining clauses. You must use 'who' or 'which'."
    ],
    patterns: [
      {
        name: "Defining (Essential)",
        formula: "Noun + Clause (No Commas)",
        explanation: "Example: The student who sits near the window is my friend."
      },
      {
        name: "Non-Defining (Extra)",
        formula: "Specific Noun + , + Clause + ,",
        explanation: "Example: Rina, who sits near the window, is my friend."
      }
    ],
    examples: [
      {
        type: "Defining",
        sentence: "The student who sits near the window is my friend.",
        note: "Which student? I need this clause to know exactly who you mean. No commas."
      },
      {
        type: "Non-Defining",
        sentence: "Rina, who sits near the window, is my friend.",
        note: "We already know who Rina is by her name. The clause is just extra bonus information. Commas act like parentheses."
      }
    ],
    commonMistakes: [
      {
        wrong: "My father that works in Jakarta is kind.",
        correct: "My father, who works in Jakarta, is kind.",
        explanation: "Mistake: Using a defining clause (with 'that') for a specific noun (you only have one father, he is already identified). | Solution: Use commas and 'who' for extra information about a specific noun.",
        fix: "Add commas and change 'that' to 'who'."
      },
      {
        wrong: "Paris which is in France is beautiful.",
        correct: "Paris, which is in France, is beautiful.",
        explanation: "Mistake: Forgetting commas around a famous, unique noun.",
        fix: "Add commas."
      }
    ],
    practicePrompts: [
      "Does this need commas? 'The sun which is a star gives us light.'",
      "Correct the mistake: 'My brother, that lives in London, is visiting.'"
    ],
    classroomUse: "<strong>Teacher Tip:</strong> The 'Delete' Test. Tell students to read the sentence and delete the clause. If the sentence still makes perfect sense and you know exactly who is being talked about, it needs commas. If the sentence becomes confusing, no commas.",
    quickComparison: "<strong>Commas vs No Commas:</strong> My brother who lives in New York... (Implies I have multiple brothers and I'm specifying which one). My brother, who lives in New York... (Implies I only have one brother, and this is just a fact about him).",
    summary: [
      "Defining clauses identify the noun (no commas).",
      "Non-defining clauses just add extra facts (use commas).",
      "Never use 'that' after a comma in a relative clause."
    ],
    introduction: "Punctuation isn't just about breathing; it changes the meaning of a sentence. A comma around a relative clause acts like a pair of brackets. It tells the reader, 'By the way, here is an extra fact.' Mastering the difference between essential facts and extra facts is the mark of an advanced writer.",
    stepByStep: "How to decide if you need commas:<br><br>1. Look at the head noun: 'Mr. Smith'.<br>2. Do we already know exactly who this is? Yes, he has a specific name.<br>3. Therefore, any clause after his name is extra information (Non-Defining).<br>4. Put commas around it: 'Mr. Smith, who is our teacher, is nice.'<br>5. Look at a different noun: 'The man'.<br>6. Do we know who this is? No, it could be anyone.<br>7. Therefore, the clause is essential (Defining) to identify him. No commas: 'The man who is our teacher is nice.'"
  },
  {
    id: "grammar-adverb-clauses-overview",
    backHref: "clauses.html",
    backLabel: "Back to Clauses",
    title: "What Are Adverb Clauses?",
    skill: "Grammar",
    category: "Clauses",
    level: "Intermediate",
    description: "Learn how clauses can give extra information like adverbs.",
    learningGoals: [
      "Understand that an adverb clause acts like a giant adverb.",
      "Identify the types of information they provide (time, reason, condition, contrast).",
      "Recognize that adverb clauses are dependent clauses."
    ],
    meaning: "An <strong>adverb clause</strong> is a dependent clause that describes the main verb of the sentence. Just like a single adverb tells you <em>when</em>, <em>why</em>, or <em>how</em> something happened, an entire clause can do the exact same job.",
    keyIdeas: [
      "They always start with a subordinating conjunction (because, if, when, although).",
      "They modify the main action of the sentence.",
      "They can usually be moved to the beginning or end of the sentence."
    ],
    patterns: [
      {
        name: "Answering 'Why?'",
        formula: "Main Clause + [because + Subject + Verb]",
        explanation: "Example: I stayed home [because I was sick]."
      },
      {
        name: "Answering 'When?'",
        formula: "[When + Subject + Verb] + , + Main Clause",
        explanation: "Example: [When the class started], everyone listened."
      }
    ],
    examples: [
      {
        type: "Reason",
        sentence: "I stayed home because I was sick.",
        note: "Tells us WHY I stayed home."
      },
      {
        type: "Time",
        sentence: "When the class started, everyone listened.",
        note: "Tells us WHEN everyone listened."
      },
      {
        type: "Contrast",
        sentence: "Although it was difficult, I finished the task.",
        note: "Tells us DESPITE WHAT I finished the task."
      }
    ],
    commonMistakes: [
      {
        wrong: "Because I was sick.",
        correct: "I stayed home because I was sick.",
        explanation: "Mistake: Treating an adverb clause as a full sentence. | Solution: An adverb clause is dependent. It only exists to explain a main action.",
        fix: "Connect it to a main clause."
      }
    ],
    practicePrompts: [
      "Find the adverb clause: 'I will call you after I arrive.'",
      "What question does this clause answer (When, Why, If)? 'Since it was raining, we stayed inside.'"
    ],
    classroomUse: "<strong>Teacher Tip:</strong> Show how flexible adverb clauses are. Take a sentence ('I fell asleep because I was tired') and have students physically write it backwards ('Because I was tired, I fell asleep') to show that adverb clauses can slide around the sentence.",
    quickComparison: "<strong>Adverb vs Adverb Clause:</strong> I left <em>early</em>. (Adverb). I left <em>before the sun came up</em>. (Adverb Clause).",
    summary: [
      "Adverb clauses act like adverbs.",
      "They tell us when, why, under what condition, or despite what.",
      "They are dependent clauses and cannot stand alone."
    ],
    introduction: "You already know how to use adverbs like 'yesterday' or 'happily'. But what if you want to say something happened 'when the sun finally set behind the mountains'? You need an <strong>adverb clause</strong>. These clauses act as the background setting for the main action of your sentence.",
    stepByStep: "How to spot an adverb clause:<br><br>1. Find the main action: 'I am studying'.<br>2. Look for groups of words that answer questions about that action.<br>3. Why? 'because I have a test'.<br>4. When? 'while my brother watches TV'.<br>5. Under what condition? 'if I have enough coffee'.<br>6. All of these are adverb clauses attached to the main action!"
  },
  {
    id: "grammar-adverb-clauses-time-reason",
    backHref: "clauses.html",
    backLabel: "Back to Clauses",
    title: "Time and Reason",
    skill: "Grammar",
    category: "Clauses",
    level: "Intermediate",
    description: "Express when and why things happen using adverb clauses.",
    learningGoals: [
      "Use time connectors (when, while, before, after) correctly.",
      "Use reason connectors (because, since, as) correctly.",
      "Apply the correct comma rules when placing the clause."
    ],
    meaning: "The two most common types of adverb clauses explain <strong>Time</strong> (when something happened) and <strong>Reason</strong> (why it happened). You use specific connector words at the beginning of the clause to signal the relationship to the main action.",
    keyIdeas: [
      "Time Connectors: when, while, before, after, until, as soon as.",
      "Reason Connectors: because, since, as.",
      "If the time/reason clause is at the beginning of the sentence, you MUST use a comma."
    ],
    patterns: [
      {
        name: "Time",
        formula: "Time Connector + Clause",
        explanation: "Example: After I finished class, I called her."
      },
      {
        name: "Reason",
        formula: "Reason Connector + Clause",
        explanation: "Example: We stayed inside because it was raining."
      }
    ],
    examples: [
      {
        type: "Time (Comma Needed)",
        sentence: "As soon as the lesson ended, the students packed their bags.",
        note: "The time clause comes first, so a comma is used."
      },
      {
        type: "Time (No Comma)",
        sentence: "I called her after I finished class.",
        note: "The time clause is at the end, so no comma is needed."
      },
      {
        type: "Reason",
        sentence: "We stayed inside because it was raining.",
        note: "'Since it was raining' or 'As it was raining' also work perfectly here."
      }
    ],
    commonMistakes: [
      {
        wrong: "During I was studying, my phone rang.",
        correct: "While I was studying, my phone rang.",
        explanation: "Mistake: Using 'during' (a preposition for phrases) before a clause (subject + verb). | Solution: Use 'while' or 'when' for clauses.",
        fix: "Replace 'during' with 'while'."
      },
      {
        wrong: "I went to bed, because I was tired.",
        correct: "I went to bed because I was tired.",
        explanation: "Mistake: Using a comma when the connector is in the middle of the sentence.",
        fix: "Remove the comma."
      }
    ],
    practicePrompts: [
      "Combine using 'while': 'I was cooking. The doorbell rang.'",
      "Punctuate this: 'Since we are late we should run'"
    ],
    classroomUse: "<strong>Teacher Tip:</strong> Teach 'Since' and 'As' as advanced synonyms for 'Because'. Students rely on 'because' too much. Having them rewrite sentences using 'Since' instantly makes their writing sound more mature.",
    quickComparison: "<strong>During vs While:</strong> <em>During</em> the movie (Noun Phrase). <em>While</em> we watched the movie (Clause).",
    summary: [
      "Use time connectors (when, after) for time clauses.",
      "Use reason connectors (because, since) for reason clauses.",
      "Use a comma if the clause starts the sentence."
    ],
    introduction: "To tell a good story, you need to establish a timeline and explain motives. Adverb clauses of <strong>Time</strong> tell the listener exactly when an event took place relative to another event. Adverb clauses of <strong>Reason</strong> explain why. These are the tools of storytelling.",
    stepByStep: "How to use 'Since' for Reason:<br><br>1. Most people only know 'since' for time ('I have lived here since 2010').<br>2. But 'since' is also a formal way to say 'because'.<br>3. Take a sentence: 'Because it is raining, we will stay home.'<br>4. Upgrade it: 'Since it is raining, we will stay home.'<br>5. This sounds highly natural in business and academic English."
  },
  {
    id: "grammar-adverb-clauses-contrast-condition",
    backHref: "clauses.html",
    backLabel: "Back to Clauses",
    title: "Contrast and Condition",
    skill: "Grammar",
    category: "Clauses",
    level: "Advanced",
    description: "Use clauses to show contrast (although) and conditions (if, unless).",
    learningGoals: [
      "Use contrast connectors (although, even though, while) to show unexpected results.",
      "Use condition connectors (if, unless) to show requirements.",
      "Avoid double connectors (although + but)."
    ],
    meaning: "Adverb clauses can also show <strong>Contrast</strong> (something happened despite a difficulty) or <strong>Condition</strong> (something will only happen if a requirement is met). These clauses add sophisticated logic to your arguments and explanations.",
    keyIdeas: [
      "Contrast Connectors: although, even though, while.",
      "Condition Connectors: if, unless ('unless' means 'if not').",
      "English sentences only need one connector to join two clauses. Never use 'although' and 'but' together."
    ],
    patterns: [
      {
        name: "Contrast",
        formula: "Although + Clause, + Main Clause",
        explanation: "Example: Although the lesson was difficult, I understood it."
      },
      {
        name: "Condition",
        formula: "If + Clause, + Main Clause",
        explanation: "Example: If you practice, you will improve."
      }
    ],
    examples: [
      {
        type: "Contrast",
        sentence: "Although the lesson was difficult, I understood it.",
        note: "The result (understood) is unexpected given the condition (difficult)."
      },
      {
        type: "Condition (If)",
        sentence: "If you practice, you will improve.",
        note: "The improvement depends entirely on the practice."
      },
      {
        type: "Condition (Unless)",
        sentence: "Unless you study, you will not pass.",
        note: "'Unless' means 'If you do not'."
      }
    ],
    commonMistakes: [
      {
        wrong: "Although I was tired, but I studied.",
        correct: "Although I was tired, I studied. (OR: I was tired, but I studied.)",
        explanation: "Mistake: Using two opposing connectors in one sentence. | Solution: 'Although' already sets up the contrast. You don't need 'but'.",
        fix: "Drop 'but'."
      },
      {
        wrong: "If you will study, you will improve.",
        correct: "If you study, you will improve.",
        explanation: "Mistake: Using the future tense inside an 'If' clause (First Conditional error).",
        fix: "Use the present tense inside the 'If' clause."
      }
    ],
    practicePrompts: [
      "Rewrite using 'unless': 'If you don't hurry, we will be late.'",
      "Correct the mistake: 'Even though it was raining, but we played football.'"
    ],
    classroomUse: "<strong>Teacher Tip:</strong> The 'Although/But' Trap. Write 'Although..., but...' on the board with a big red X through it. Have students practice writing contrast sentences and crossing out the 'but' to break the habit.",
    quickComparison: "<strong>Although vs But:</strong> <em>Although</em> I was tired, I studied. I was tired, <em>but</em> I studied. (Both mean the same, but the grammar structure is different).",
    summary: [
      "Contrast clauses use although, even though.",
      "Condition clauses use if, unless.",
      "Do not use 'although' and 'but' in the same connection."
    ],
    introduction: "Logic in English is often built using <strong>Contrast</strong> and <strong>Condition</strong> clauses. You want to show that two things are in conflict ('although') or that one thing depends on another ('if'). Mastering these clauses elevates your English from simple storytelling to logical argumentation.",
    stepByStep: "Understanding 'Unless':<br><br>1. 'Unless' is a negative condition. It means 'If not'.<br>2. Look at this sentence: 'If you do not pay, you cannot enter.'<br>3. Replace 'If... do not' with 'Unless'.<br>4. Result: 'Unless you pay, you cannot enter.'<br>5. Never use a negative verb after unless. 'Unless you do not pay' is incorrect!"
  },
  {
    id: "grammar-common-clause-mistakes",
    backHref: "clauses.html",
    backLabel: "Back to Clauses",
    title: "Common Clause Mistakes",
    skill: "Grammar",
    category: "Clauses",
    level: "Advanced",
    description: "Review and fix the most common errors with clauses.",
    learningGoals: [
      "Identify common structural errors in noun, relative, and adverb clauses.",
      "Fix sentence fragments caused by dependent clauses.",
      "Correct direct translation errors from Indonesian."
    ],
    meaning: "Because clauses are complex structures containing their own subjects and verbs, it is easy to make structural mistakes. This lesson acts as a repair checklist for the most frequent errors learners make across all types of clauses.",
    keyIdeas: [
      "Dependent clauses are not sentences.",
      "Noun clauses are not questions.",
      "Relative clauses don't need extra pronouns.",
      "English doesn't double-stack connectors (although + but)."
    ],
    patterns: [
      {
        name: "The Fragment Error",
        formula: "Because + Clause.",
        explanation: "Wrong: Because I was tired. | Right: I slept because I was tired."
      },
      {
        name: "The Question Error",
        formula: "I know + WH + Aux Verb + Subject.",
        explanation: "Wrong: I know where does he live. | Right: I know where he lives."
      }
    ],
    examples: [
      {
        type: "Relative Clause Pronoun Double",
        sentence: "Wrong: The book that I bought it is good. | Right: The book that I bought is good.",
        note: "'That' replaces 'it'."
      },
      {
        type: "Double Connector",
        sentence: "Wrong: Although I was tired, but I studied. | Right: Although I was tired, I studied.",
        note: "Pick one connector."
      },
      {
        type: "Phrase vs Clause",
        sentence: "Wrong: During I was studying. | Right: While I was studying.",
        note: "'During' is for noun phrases, 'While' is for clauses."
      }
    ],
    commonMistakes: [
      {
        wrong: "The place which I live is far.",
        correct: "The place where I live is far.",
        explanation: "Mistake: Using 'which' for a location without a preposition. | Solution: Use 'where' or 'in which'.",
        fix: "Swap 'which' for 'where'."
      },
      {
        wrong: "The student he won the contest.",
        correct: "The student who won the contest.",
        explanation: "Mistake: Missing the relative pronoun.",
        fix: "Use 'who'."
      }
    ],
    practicePrompts: [
      "Fix all mistakes: 'I don't know what did she say, but because I was tired.'",
      "Fix the mistake: 'Even though it was raining, but we walked.'"
    ],
    classroomUse: "<strong>Teacher Tip:</strong> Put these common mistakes on the board and have a 'Grammar Clinic'. Make the students play the 'Doctor' and diagnose what the underlying illness is (e.g., Fragmentitis, Double-Connector Syndrome) before fixing the sentence.",
    quickComparison: "<strong>Indonesian vs English:</strong> Indonesian allows 'karena saya lelah' as an answer. In written English, 'because I was tired' is a fragment error without a main clause.",
    summary: [
      "Dependent clauses need main clauses.",
      "Embedded questions use statement word order.",
      "Don't use 'although' and 'but' together.",
      "Don't repeat pronouns in relative clauses."
    ],
    introduction: "You have learned the rules for all three major types of clauses (Noun, Relative, Adverb). Now it is time to troubleshoot. When you write long sentences, your brain is juggling many grammar rules at once. Let's look at the most common places where those rules get dropped.",
    stepByStep: "The Clause Checklist before you submit your writing:<br><br>1. Did I put a period at the end of a dependent clause? (Fragment check)<br>2. Did I use question word order after a WH-word in the middle of a sentence? (Noun clause check)<br>3. Did I put 'it' or 'him' inside a relative clause that already has 'which' or 'who'? (Relative clause check)<br>4. Did I use 'although' and 'but' in the same sentence? (Double connector check)<br>5. Did I use 'during' with a full clause? (Phrase vs Clause check)<br>6. If you pass this checklist, your complex sentences are likely perfect!",
    indonesianLearnerWarning: "Be very careful translating embedded questions! Indonesian word order ('Saya tahu di mana dia tinggal') maps perfectly to the incorrect English word order ('I know where does he live' or 'I know where he lives'). Wait, actually, Indonesian naturally uses statement order here. The mistake usually happens because learners over-apply the English question rule (adding 'do/does') where it doesn't belong!"
  }
];

// Read existing lessons.js
const lessonsPath = './data/lessons.js';
let lessonsContent = fs.readFileSync(lessonsPath, 'utf-8');

// Find the insertion point before the final export statement
const insertionPoint = lessonsContent.lastIndexOf('export const lessons = [');

if (insertionPoint === -1) {
  console.error('Could not find export const lessons = [ in lessons.js');
  process.exit(1);
}

// Generate the new content
let newContent = '\n// --- Clauses Pathway Lessons ---\n';
clausesLessons.forEach(lesson => {
  newContent += `const lesson_${lesson.id.replace(/-/g, '_')} = ${JSON.stringify(lesson, null, 2)};\n\n`;
});

// Add the new lesson variables to the allLessons array
const exportMatch = lessonsContent.match(/export const lessons = \[([\s\S]*?)\];/);
if (!exportMatch) {
  console.error('Could not parse lessons array');
  process.exit(1);
}

let arrayContent = exportMatch[1];
clausesLessons.forEach(lesson => {
  arrayContent += `  lesson_${lesson.id.replace(/-/g, '_')},\n`;
});

// Reconstruct the file
const beginning = lessonsContent.substring(0, insertionPoint);
const finalContent = beginning + newContent + `export const lessons = [${arrayContent}];\n`;

fs.writeFileSync(lessonsPath, finalContent);
console.log('Successfully added ' + clausesLessons.length + ' Clauses lessons.');
