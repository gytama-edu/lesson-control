const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, '../data/lessons.js');
let fileContent = fs.readFileSync(targetFile, 'utf8');

function addLesson(id, lessonData) {
    if (fileContent.includes(`"${id}"`) || fileContent.includes(`'${id}'`)) {
        console.log(`Lesson ${id} already exists, skipping.`);
        return;
    }
    const marker = "export const lessons = [";
    if (!fileContent.includes(marker)) {
        console.error("Could not find the 'export const lessons = [' marker.");
        return;
    }
    const insertPosition = fileContent.indexOf(marker) + marker.length;
    const stringifiedData = JSON.stringify(lessonData, null, 4);
    
    // Indent the inserted JSON properly
    const indentedData = stringifiedData.split('\n').map((line, index) => index === 0 ? line : '    ' + line).join('\n');
    const lessonString = `\n    ${indentedData},`;
    
    fileContent = fileContent.substring(0, insertPosition) + lessonString + fileContent.substring(insertPosition);
    console.log(`Added ${id}`);
}

const lessons = [
  // GROUP 1
  {
    id: "grammar-connectors-cohesion-overview",
    data: {
      id: "grammar-connectors-cohesion-overview",
      title: "What Are Connectors and Cohesion?",
      skill: "Grammar",
      pathway: "Connectors & Cohesion",
      group: "Connector Foundations",
      level: "Beginner to Intermediate",
      backHref: "connectors-cohesion.html",
      backLabel: "Back to Connectors & Cohesion",
      description: "Learn how connectors and cohesion help ideas flow naturally.",
      learningGoals: [
        "Understand the difference between connectors and cohesion.",
        "Recognize how connectors show logical relationships.",
        "Learn why natural flow is better than overusing connectors."
      ],
      warmIntroduction: `<p>Imagine a student writes three correct sentences: "I was tired. I finished my homework. I went to sleep." Each sentence is grammatically correct, but the ideas feel separate. The reader can understand the sentences, but the connection between them is not very smooth yet.</p><p>Now compare it with: "Although I was tired, I finished my homework before I went to sleep." The ideas are similar, but the second version shows the relationship between them more clearly. It tells us that the student was tired, but still completed the homework.</p><p>This is why connectors and cohesion matter. Connectors help us show how ideas are related, while cohesion helps a sentence or paragraph flow naturally. Without them, English can sound like separate pieces. With them, English becomes clearer, smoother, and more organized.</p>`,
      meaning: `<p><strong>Connectors</strong> are words or phrases that link ideas together. <strong>Cohesion</strong> means that the ideas in a sentence or paragraph flow together clearly.</p><p>Connectors show relationships such as addition, contrast, reason, result, condition, time, sequence, example, and conclusion. Good cohesion is not only about using many connectors; it is about helping the reader or listener follow your logic easily.</p>`,
      whenToUse: `<p>Use connectors when you want to show how two ideas relate to each other. Use them to make your writing or speaking sound more connected and professional, avoiding too many short, disconnected sentences.</p>`,
      examples: [
        { type: "Contrast", sentence: "I was tired, but I finished my work.", note: "The connector 'but' shows contrast within a sentence." },
        { type: "Reason", sentence: "She stayed home because she was sick.", note: "The connector 'because' gives a reason." },
        { type: "Transition", sentence: "The lesson was difficult. However, the students understood it.", note: "The transition word 'However' connects two separate sentences." },
        { type: "Sequence", sentence: "First, read the question. Then, underline the key words.", note: "Sequence connectors 'First' and 'Then' organize steps." }
      ],
      commonMistakes: [
        { wrong: "I was tired. However I finished my work.", correct: "I was tired. However, I finished my work.", explanation: "Using a transition word without proper punctuation.", fix: "Transitions usually need a comma after them." },
        { wrong: "Although it was raining but we went out.", correct: "Although it was raining, we went out.", explanation: "Using the wrong connector, or too many connectors, for the meaning.", fix: "Do not use two connectors to show the same relationship." }
      ],
      summary: [
        "Connectors link ideas, and cohesion makes sentences flow.",
        "Choose them based on meaning, not just memorization.",
        "Use them to help others follow your thoughts."
      ]
    }
  },
  {
    id: "grammar-connector-functions-meaning",
    data: {
      id: "grammar-connector-functions-meaning",
      title: "Connector Functions and Meaning",
      skill: "Grammar",
      pathway: "Connectors & Cohesion",
      group: "Connector Foundations",
      level: "Beginner to Intermediate",
      backHref: "connectors-cohesion.html",
      backLabel: "Back to Connectors & Cohesion",
      description: "Choose connectors based on meaning, not just memorization.",
      learningGoals: [
        "Identify the major functions of connectors.",
        "Choose connectors based on meaning, not just memorization."
      ],
      warmIntroduction: `<p>Sometimes students try to memorize long lists of connectors without thinking about what they actually mean. They might write, "I was sick, however I went to the doctor," mixing up contrast with result.</p><p>Every connector has a specific job. Its job is to tell the reader what kind of information is coming next. Does the next part add something? Does it show a surprise? Does it give a reason?</p><p>When you understand the functions of connectors, choosing the right word becomes easy. Instead of guessing, you will pick words based on their exact meaning.</p>`,
      stepByStep: `<p>A connector has a job. You should choose connectors based on meaning, not just memorization. The major functions are addition, contrast, reason, result, condition, purpose, time, sequence, example, and summary.</p>`,
      examples: [
        { type: "Addition", sentence: "She is smart and hardworking.", note: "Adds similar information." },
        { type: "Contrast", sentence: "She is smart, but she is careless.", note: "Shows a difference or problem." },
        { type: "Reason", sentence: "She stayed home because she was sick.", note: "Explains why." },
        { type: "Result", sentence: "She was sick, so she stayed home.", note: "Shows the consequence." },
        { type: "Condition", sentence: "If you practice, you will improve.", note: "Sets a requirement." },
        { type: "Purpose", sentence: "I study every day so that I can improve.", note: "Shows the goal." },
        { type: "Example", sentence: "Many foods are healthy, such as fruit and vegetables.", note: "Gives specific details." }
      ],
      commonMistakes: [
        { wrong: "Because it was raining, so we stayed home.", correct: "Because it was raining, we stayed home.", explanation: "Using a reason and result connector for the same relationship is incorrect in English.", fix: "Choose either 'because' or 'so', not both." },
        { wrong: "She was sick, however she went to the doctor.", correct: "She was sick, so she went to the doctor.", explanation: "Using 'however' (contrast) when the meaning is a result.", fix: "Use a result connector like 'so'." },
        { wrong: "The food is cheap. Therefore, I don't like it.", correct: "The food is cheap. However, I don't like it.", explanation: "Using a result connector when you mean contrast.", fix: "Use a contrast connector." }
      ],
      summary: [
        "Always ask yourself: 'What relationship do I want to show?'",
        "Pick the connector with that exact job.",
        "Don't mix up reason and result, or addition and contrast."
      ]
    }
  },
  {
    id: "grammar-clause-vs-sentence-connectors",
    data: {
      id: "grammar-clause-vs-sentence-connectors",
      title: "Clause Connectors vs Sentence Connectors",
      skill: "Grammar",
      pathway: "Connectors & Cohesion",
      group: "Connector Foundations",
      level: "Intermediate",
      backHref: "connectors-cohesion.html",
      backLabel: "Back to Connectors & Cohesion",
      description: "Learn the difference between joining clauses and transitioning between sentences.",
      learningGoals: [
        "Differentiate between clause connectors and sentence connectors.",
        "Use correct punctuation for each type."
      ],
      warmIntroduction: `<p>You might have heard a teacher say, "Don't start a sentence with 'because'!" But you see native speakers do it all the time. What's the real rule?</p><p>The confusion comes from mixing up <strong>clause connectors</strong> (like 'because' and 'although') and <strong>sentence connectors</strong> (like 'however' and 'therefore'). Clause connectors live inside a single sentence to glue two parts together. Transition words act like a bridge between two separate sentences.</p><p>Understanding the difference helps you avoid "sentence fragments" (incomplete sentences) and fix weird punctuation mistakes.</p>`,
      meaning: `<p><strong>Clause connectors</strong> (subordinating conjunctions) join clauses inside one sentence. Examples: <em>because, although, if, when, while, before, after</em>. They make a dependent clause that needs an independent clause to be complete.</p><p><strong>Sentence connectors</strong> (transitions) connect the idea of one sentence to another sentence. Examples: <em>however, therefore, moreover, meanwhile, as a result, for example</em>.</p>`,
      quickComparison: `<strong>Clause Connector:</strong> Although it was raining, we went out. (One complete sentence)<br/><strong>Sentence Connector:</strong> It was raining. However, we went out. (Two separate sentences)`,
      examples: [
        { type: "Clause Connector", sentence: "She was sick, so she stayed home.", note: "Connects two clauses within a single sentence." },
        { type: "Sentence Connector", sentence: "She was sick. Therefore, she stayed home.", note: "Connects the ideas of two separate sentences." }
      ],
      commonMistakes: [
        { wrong: "Although it was raining. We went out.", correct: "Although it was raining, we went out.", explanation: "'Although' creates a dependent clause. It cannot be a full sentence with a period.", fix: "Change the period to a comma." },
        { wrong: "It was raining, however we went out.", correct: "It was raining. However, we went out.", explanation: "'However' connects two separate sentences. Use a period (or semicolon).", fix: "Use a period or semicolon before transitions connecting clauses." },
        { wrong: "Because I was tired.", correct: "Because I was tired, I went home.", explanation: "A 'because' clause is a fragment if it stands alone.", fix: "Add a main clause to complete the sentence." }
      ],
      summary: [
        "Clause connectors hold two parts of one sentence together.",
        "Sentence connectors are formal bridges between two fully separated sentences.",
        "Knowing which is which fixes most punctuation errors."
      ]
    }
  },
  {
    id: "grammar-connector-punctuation-placement",
    data: {
      id: "grammar-connector-punctuation-placement",
      title: "Connector Punctuation and Placement",
      skill: "Grammar",
      pathway: "Connectors & Cohesion",
      group: "Connector Foundations",
      level: "Intermediate",
      backHref: "connectors-cohesion.html",
      backLabel: "Back to Connectors & Cohesion",
      description: "Master the punctuation rules for different types of connectors.",
      learningGoals: [
        "Learn specific comma rules for FANBOYS.",
        "Punctuate dependent clauses correctly.",
        "Use periods and semicolons effectively with transition words."
      ],
      warmIntroduction: `<p>Many students guess where commas go. If they pause when speaking, they drop a comma into their sentence. But in English, commas around connectors follow strict patterns.</p><p>If you learn just three or four patterns, you will almost never make a punctuation mistake with connectors again. It is not about feeling the pause; it is about identifying the structure.</p><p>Let's look at the actual patterns for coordinating conjunctions, dependent clauses, and transitions.</p>`,
      patterns: [
        { name: "Pattern 1: FANBOYS", formula: "Independent clause, FANBOYS independent clause.", explanation: "Use a comma before FANBOYS when joining two complete clauses." },
        { name: "Pattern 2: Subordinate Clause First", formula: "Subordinate clause, main clause.", explanation: "Use a comma after an introductory dependent clause." },
        { name: "Pattern 3: Main Clause First", formula: "Main clause subordinate clause.", explanation: "No comma when the dependent clause is at the end." },
        { name: "Pattern 4: Transition with Period", formula: "Sentence. Transition, sentence.", explanation: "Use a period before transition words like however and therefore." },
        { name: "Pattern 5: Transition with Semicolon", formula: "Sentence; transition, sentence.", explanation: "Use a semicolon before transition words to connect closely related sentences." }
      ],
      examples: [
        { type: "Pattern 1", sentence: "I was tired, but I finished the task.", note: "FANBOYS joining complete clauses." },
        { type: "Pattern 2", sentence: "Because I was tired, I went home.", note: "Introductory dependent clause." },
        { type: "Pattern 3", sentence: "I went home because I was tired.", note: "Dependent clause at the end." },
        { type: "Pattern 4", sentence: "I was tired. However, I finished the task.", note: "Transition word starting a new sentence." },
        { type: "Pattern 5", sentence: "I was tired; however, I finished the task.", note: "Transition word after a semicolon." }
      ],
      commonMistakes: [
        { wrong: "I was tired but, I finished the task.", correct: "I was tired, but I finished the task.", explanation: "The comma goes before FANBOYS, not after." },
        { wrong: "Because I was tired. I went home.", correct: "Because I was tired, I went home.", explanation: "A dependent clause needs a comma, not a period." },
        { wrong: "I was tired, however, I finished the task.", correct: "I was tired. However, I finished the task.", explanation: "Avoid the comma splice. Use a period or semicolon before transitions connecting clauses." }
      ],
      indonesianLearnerWarning: `<p>Indonesian sentence order can be flexible, and commas are often placed freely where a speaker pauses. English connector punctuation is much stricter and follows the grammar patterns shown above.</p>`,
      summary: [
        "Learn the punctuation patterns, not pauses.",
        "Use a comma before FANBOYS joining clauses.",
        "Use a comma after an introductory dependent clause.",
        "Use periods/semicolons before transition words."
      ]
    }
  },
  
  // GROUP 2
  {
    id: "grammar-fanboys-overview",
    data: {
      id: "grammar-fanboys-overview",
      title: "FANBOYS Overview",
      skill: "Grammar",
      pathway: "Connectors & Cohesion",
      group: "FANBOYS and Coordinating Conjunctions",
      level: "Beginner",
      backHref: "connectors-cohesion.html",
      backLabel: "Back to Connectors & Cohesion",
      description: "Introduction to the seven coordinating conjunctions.",
      learningGoals: [
        "Identify the seven FANBOYS conjunctions.",
        "Understand the specific meaning of each FANBOYS conjunction."
      ],
      warmIntroduction: `<p>When you first started learning English, you probably used short, simple sentences. "I like apples. I like bananas." As you get better, you naturally want to put those ideas together.</p><p>The simplest and most common tools for doing this are the FANBOYS: For, And, Nor, But, Or, Yet, So. These are coordinating conjunctions.</p><p>They are the daily glue of the English language. Let's look at what each one does.</p>`,
      meaning: `<p><strong>FANBOYS</strong> are coordinating conjunctions: <strong>For, And, Nor, But, Or, Yet, So</strong>. They connect words, phrases, and independent clauses that have equal grammatical weight.</p><p>Each FANBOYS connector has a different meaning:<br/>
      • <strong>for</strong> = reason (formal)<br/>
      • <strong>and</strong> = addition<br/>
      • <strong>nor</strong> = negative addition<br/>
      • <strong>but</strong> = contrast<br/>
      • <strong>or</strong> = choice<br/>
      • <strong>yet</strong> = contrast (surprising)<br/>
      • <strong>so</strong> = result
      </p>`,
      examples: [
        { type: "Reason", sentence: "I wanted to rest, for I was exhausted.", note: "'for' is similar to 'because' but more formal." },
        { type: "Addition", sentence: "She likes grammar and vocabulary.", note: "" },
        { type: "Negative Addition", sentence: "He does not smoke, nor does he drink.", note: "Inverts the subject and verb." },
        { type: "Contrast", sentence: "I was tired, but I continued.", note: "" },
        { type: "Choice", sentence: "You can stay here, or you can go home.", note: "" },
        { type: "Surprising Contrast", sentence: "The task was difficult, yet she finished it.", note: "" },
        { type: "Result", sentence: "It was raining, so we stayed inside.", note: "" }
      ],
      commonMistakes: [
        { wrong: "I was thirsty, for I drank water.", correct: "I was thirsty, so I drank water.", explanation: "Treating all FANBOYS as the same. 'For' means reason, not result.", fix: "Choose the FANBOYS based on the exact relationship." },
        { wrong: "I like him, for he is nice.", correct: "I like him because he is nice.", explanation: "Using 'for' too often in modern casual English.", fix: "Use 'because' in casual contexts. 'For' as a reason connector sounds very literary or formal." }
      ],
      summary: [
        "FANBOYS (For, And, Nor, But, Or, Yet, So) are the most basic and useful connectors.",
        "They link equal ideas, phrases, or full clauses.",
        "Each word has a specific meaning (reason, addition, choice, contrast, result)."
      ]
    }
  },
  {
    id: "grammar-and-or-nor",
    data: {
      id: "grammar-and-or-nor",
      title: "And, Or, and Nor",
      skill: "Grammar",
      pathway: "Connectors & Cohesion",
      group: "FANBOYS and Coordinating Conjunctions",
      level: "Beginner",
      backHref: "connectors-cohesion.html",
      backLabel: "Back to Connectors & Cohesion",
      description: "Learn to add ideas, offer choices, and connect negative thoughts.",
      learningGoals: [
        "Use 'and' for addition and 'or' for choices.",
        "Use 'nor' correctly for negative addition, including word order inversion."
      ],
      warmIntroduction: `<p>If you want to build longer, more natural sentences, you need ways to combine similar things. If you have two hobbies, you don't say, "I like reading. I like swimming." You combine them: "I like reading and swimming."</p><p>But what if you have choices? What if you have negative facts to share? That is where "and", "or", and "nor" come in. They handle addition, choice, and negative addition.</p><p>"Nor" is especially tricky because it changes word order, but it sounds incredibly professional when used correctly.</p>`,
      meaning: `<p><strong>And</strong> adds similar or connected information. <strong>Or</strong> gives options or alternatives. <strong>Nor</strong> adds a second negative idea and is more formal.</p><p>These connectors can join individual words, short phrases, or complete clauses.</p>`,
      stepByStep: `<p><strong>Using Nor:</strong> 'Nor' usually follows a negative idea. When 'nor' connects a full clause, the word order after it flips (like a question).</p>
      <ul>
      <li>Normal: He is not ready. He is not interested.</li>
      <li>Combined: He is not ready, <strong>nor is he</strong> interested.</li>
      <li>Normal: She did not call. She did not send a message.</li>
      <li>Combined: She did not call, <strong>nor did she</strong> send a message.</li>
      </ul>`,
      examples: [
        { type: "Addition", sentence: "I bought a notebook and a pen.", note: "Joining words (addition)." },
        { type: "Addition", sentence: "She studies in the morning and works at night.", note: "Joining phrases." },
        { type: "Choice", sentence: "Do you want tea or coffee?", note: "Joining words (choice)." },
        { type: "Choice", sentence: "You can answer now or later.", note: "Joining alternatives." },
        { type: "Negative Addition", sentence: "He does not like coffee, nor does he like tea.", note: "'Nor' adds a second negative idea. Notice the inverted word order: 'does he like'." }
      ],
      commonMistakes: [
        { wrong: "I don't like coffee nor tea.", correct: "I don't like coffee or tea.", explanation: "In simple lists, use 'or' with negative verbs." },
        { wrong: "He does not study, nor he works.", correct: "He does not study, nor does he work.", explanation: "You must invert the subject and auxiliary verb after 'nor'." },
        { wrong: "You can choose and tea or coffee.", correct: "You can choose tea or coffee.", explanation: "Do not mix 'and' with 'or'." }
      ],
      summary: [
        "'And' adds, 'or' gives choices, and 'nor' adds negatives.",
        "Remember to flip the word order after 'nor' when connecting full clauses."
      ]
    }
  },
  {
    id: "grammar-but-yet-for-so",
    data: {
      id: "grammar-but-yet-for-so",
      title: "But, Yet, For, and So",
      skill: "Grammar",
      pathway: "Connectors & Cohesion",
      group: "FANBOYS and Coordinating Conjunctions",
      level: "Beginner",
      backHref: "connectors-cohesion.html",
      backLabel: "Back to Connectors & Cohesion",
      description: "Express contrast, reason, and result with coordinating conjunctions.",
      learningGoals: [
        "Differentiate between 'but' and 'yet'.",
        "Use 'so' for results and 'for' for formal reasons."
      ],
      warmIntroduction: `<p>Sometimes things don't go as planned. You study hard, but you fail. It rains, so you stay inside. These are relationships of contrast and result.</p><p>We use "but", "yet", "for", and "so" to show the listener how one idea affects another. Without them, your listener wouldn't know if a situation caused a problem or created a solution.</p><p>These four tiny words are essential for telling stories and explaining logic clearly.</p>`,
      meaning: `<p><strong>But</strong> shows contrast. <strong>Yet</strong> also shows contrast, often with a surprising or strong result. <strong>For</strong> gives a reason (formal/literary). <strong>So</strong> shows result.</p>`,
      quickComparison: `<strong>Contrast:</strong> I was tired, <em>but</em> I finished my homework.<br/><strong>Surprising Contrast:</strong> I was tired, <em>yet</em> I finished my homework.<br/><strong>Reason:</strong> I went home early, <em>for</em> I was tired.<br/><strong>Result:</strong> I was tired, <em>so</em> I went home early.`,
      examples: [
        { type: "Contrast", sentence: "She is smart, but she is lazy.", note: "Simple contrast." },
        { type: "Surprising Contrast", sentence: "It was raining heavily, yet he went out without an umbrella.", note: "'Yet' adds a sense of surprise." },
        { type: "Reason", sentence: "They stayed indoors, for the storm was approaching.", note: "Formal reason." },
        { type: "Result", sentence: "He was hungry, so he made a sandwich.", note: "Action leading to a consequence." }
      ],
      commonMistakes: [
        { wrong: "Because I was tired, so I went home.", correct: "I was tired, so I went home.", explanation: "Do not use 'because' and 'so' together in the same simple sentence." },
        { wrong: "I was tired, for went home.", correct: "I was tired, so I went home.", explanation: "'For' means reason, not result." },
        { wrong: "She was poor, yet but generous.", correct: "She was poor, yet generous.", explanation: "Do not combine two contrast connectors." }
      ],
      indonesianLearnerWarning: `<p>Indonesian learners often directly translate "karena... maka..." into "because... so...". Standard English usually uses only one connector pattern per relationship. Choose either "Because I was tired, I went home" or "I was tired, so I went home."</p>`,
      summary: [
        "'But' and 'yet' show contrast, 'for' shows formal reason, and 'so' shows result.",
        "Never use 'because' and 'so' in the same sentence."
      ]
    }
  },
  {
    id: "grammar-fanboys-punctuation-mistakes",
    data: {
      id: "grammar-fanboys-punctuation-mistakes",
      title: "FANBOYS Punctuation and Common Mistakes",
      skill: "Grammar",
      pathway: "Connectors & Cohesion",
      group: "FANBOYS and Coordinating Conjunctions",
      level: "Intermediate",
      backHref: "connectors-cohesion.html",
      backLabel: "Back to Connectors & Cohesion",
      description: "Avoid comma splices and punctuation errors when using FANBOYS.",
      learningGoals: [
        "Understand when to use a comma with FANBOYS.",
        "Avoid comma splices by using coordinating conjunctions correctly."
      ],
      warmIntroduction: `<p>One of the most common mistakes writers make is called a "comma splice"—joining two full sentences with just a comma. "I was tired, I went to sleep."</p><p>To fix this, you need a FANBOYS connector. But then you must know whether you still need that comma. The rule is surprisingly simple, but many people guess instead of learning it.</p><p>Let's clear up FANBOYS punctuation once and for all so your writing looks perfect.</p>`,
      patterns: [
        { name: "Joining Two Independent Clauses", formula: "Independent clause + , + FANBOYS + independent clause", explanation: "If a FANBOYS joins two complete sentences (clauses that have a subject and a verb), use a comma before it." },
        { name: "Joining Words or Phrases", formula: "Word/Phrase + FANBOYS + Word/Phrase", explanation: "If a FANBOYS joins only words or phrases (not a full subject-verb clause), a comma is usually NOT needed." }
      ],
      examples: [
        { type: "Correct Comma", sentence: "I wanted to sleep, but I had homework.", note: "Two complete clauses. Comma is needed." },
        { type: "Correct Comma", sentence: "She studied hard, so she passed the test.", note: "Two complete clauses. Comma is needed." },
        { type: "No Comma Needed", sentence: "I bought apples and oranges.", note: "Joining words. No comma." },
        { type: "No Comma Needed", sentence: "You can sit near the window or near the door.", note: "Joining phrases. No comma." }
      ],
      commonMistakes: [
        { wrong: "I was tired, I finished the task.", correct: "I was tired, but I finished the task.", explanation: "Comma splice: A comma alone cannot join two complete sentences. Add a FANBOYS." },
        { wrong: "I was tired but I finished the task.", correct: "I was tired, but I finished the task.", explanation: "Missing comma in a compound sentence." },
        { wrong: "I bought apples, and oranges.", correct: "I bought apples and oranges.", explanation: "Unnecessary comma when just joining two words." }
      ],
      summary: [
        "Always check: is there a full subject and verb on BOTH sides of the FANBOYS?",
        "If yes, use a comma before it.",
        "If no, no comma."
      ]
    }
  },

  // GROUP 3
  {
    id: "grammar-because-since-as",
    data: {
      id: "grammar-because-since-as",
      title: "Because, Since, and As",
      skill: "Grammar",
      pathway: "Connectors & Cohesion",
      group: "Subordinating Connectors",
      level: "Intermediate",
      backHref: "connectors-cohesion.html",
      backLabel: "Back to Connectors & Cohesion",
      description: "Use these connectors correctly to express reason.",
      learningGoals: [
        "Use 'because', 'since', and 'as' to show reason.",
        "Differentiate between reason and time contexts for 'since' and 'as'."
      ],
      warmIntroduction: `<p>When you want to explain "why" something happened, "because" is everyone's favorite word. But did you know "since" and "as" can also explain why?</p><p>You will see "since" and "as" often in books, articles, and formal conversations. They are excellent alternatives to "because." However, they can be tricky because both words also have other meanings related to time.</p><p>Let's look at how to use these subordinating connectors properly to give reasons.</p>`,
      meaning: `<p>These connectors show <strong>reason</strong>.<br/>
      • <strong>Because</strong> is the clearest and most common reason connector.<br/>
      • <strong>Since</strong> can mean 'because' or 'from a time point in the past', so context matters.<br/>
      • <strong>As</strong> can mean 'because', but it can also mean 'while' or 'in the role of', so it must be used carefully.</p>`,
      quickComparison: `<strong>Time meaning:</strong> I have lived here <em>since</em> 2020.<br/><strong>Reason meaning:</strong> <em>Since</em> you are here, please help me.`,
      examples: [
        { type: "Because", sentence: "I stayed home because I was sick.", note: "Clear reason." },
        { type: "Since", sentence: "Since the road was closed, we took another route.", note: "'Since' used to mean 'because'." },
        { type: "As", sentence: "As the weather was bad, the event was cancelled.", note: "'As' used to mean 'because'." }
      ],
      commonMistakes: [
        { wrong: "Because I was sick.", correct: "I stayed home because I was sick.", explanation: "A 'because' clause alone is an incomplete fragment.", fix: "Connect it to a main clause." },
        { wrong: "Because of I was sick.", correct: "Because of my illness, I stayed home.", explanation: "'Because of' must be followed by a noun, not a subject and verb clause.", fix: "Change the clause to a noun phrase, or use 'because'." },
        { wrong: "Since 2020, I live here.", correct: "I have lived here since 2020.", explanation: "When 'since' means time, use perfect tenses." }
      ],
      indonesianLearnerWarning: `<p>Students may confuse "because" and "because of". "Because" + full sentence. "Because of" + noun phrase. Do not write "Because of it rained". Write "Because it rained" or "Because of the rain".</p>`,
      summary: [
        "'Because' is the best for reasons.",
        "'Since' and 'as' can also mean reason, but ensure the context is clear so they are not confused with time."
      ]
    }
  },
  {
    id: "grammar-although-even-though-while-whereas",
    data: {
      id: "grammar-although-even-though-while-whereas",
      title: "Although, Even Though, While, and Whereas",
      skill: "Grammar",
      pathway: "Connectors & Cohesion",
      group: "Subordinating Connectors",
      level: "Intermediate",
      backHref: "connectors-cohesion.html",
      backLabel: "Back to Connectors & Cohesion",
      description: "Express contrast and comparison clearly in complex sentences.",
      learningGoals: [
        "Use 'although' and 'even though' to express unexpected contrast.",
        "Use 'while' and 'whereas' to compare differences."
      ],
      warmIntroduction: `<p>Imagine two friends. One loves spicy food, and the other hates it. How do you describe this difference smoothly in one sentence?</p><p>You could use "but", but sometimes you want a more sophisticated way to show contrast or compare two facts. That is when we use subordinating connectors like although, even though, while, and whereas.</p><p>These words create complex sentences that sound very natural in professional speaking and writing.</p>`,
      meaning: `<p>These connectors show <strong>contrast</strong>.<br/>
      • <strong>Although</strong> and <strong>even though</strong> introduce a surprising contrast or unexpected result. <em>Even though</em> is stronger.<br/>
      • <strong>While</strong> and <strong>whereas</strong> compare two different facts, situations, or preferences without necessarily showing surprise.</p>`,
      examples: [
        { type: "Although", sentence: "Although it was raining, we went out.", note: "Surprising contrast (rain usually stops people going out)." },
        { type: "Even Though", sentence: "Even though the task was difficult, she finished it.", note: "Stronger surprising contrast." },
        { type: "While", sentence: "While some students prefer studying alone, others prefer group work.", note: "Comparing two different facts." },
        { type: "Whereas", sentence: "The first method is simple, whereas the second method is more accurate.", note: "Comparing two facts, often used in academic or formal writing." }
      ],
      commonMistakes: [
        { wrong: "Although I was tired, but I studied.", correct: "Although I was tired, I studied.", explanation: "Never use 'although' and 'but' together. Choose one.", fix: "Remove 'but'." },
        { wrong: "Even though the food was expensive, but it was delicious.", correct: "Even though the food was expensive, it was delicious.", explanation: "Same error. Drop the 'but'.", fix: "Remove 'but'." },
        { wrong: "While some students like grammar, but others dislike it.", correct: "While some students like grammar, others dislike it.", explanation: "Drop the 'but'.", fix: "Remove 'but'." }
      ],
      indonesianLearnerWarning: `<p>Indonesian learners frequently use "although" and "but" together ("Meskipun... tetapi...") because that feels natural in Indonesian. In English, this is grammatically wrong. You only need one contrast word.</p>`,
      summary: [
        "'Although/even though' show unexpected contrast.",
        "'While/whereas' compare two facts.",
        "Never pair them with 'but'."
      ]
    }
  },
  {
    id: "grammar-time-connectors",
    data: {
      id: "grammar-time-connectors",
      title: "When, While, Before, After, Until, and As Soon As",
      skill: "Grammar",
      pathway: "Connectors & Cohesion",
      group: "Subordinating Connectors",
      level: "Beginner",
      backHref: "connectors-cohesion.html",
      backLabel: "Back to Connectors & Cohesion",
      description: "Connect actions and establish clear time relationships.",
      learningGoals: [
        "Sequence events accurately using time connectors.",
        "Use present tense in future time clauses."
      ],
      warmIntroduction: `<p>If you are telling a story about your day, order matters. You didn't just eat breakfast, leave the house, and brush your teeth at random times. One thing happened first, then another, while something else was happening.</p><p>Time connectors allow you to place events perfectly in time. They tell the listener exactly when an action happened in relation to another action.</p><p>Without them, stories become confusing lists of facts.</p>`,
      meaning: `<p>These connectors show <strong>time relationships</strong>.<br/>
      • <strong>when</strong> = at the time that<br/>
      • <strong>while</strong> = during the same time (often with continuous actions)<br/>
      • <strong>before</strong> = earlier than another action<br/>
      • <strong>after</strong> = later than another action<br/>
      • <strong>until</strong> = up to a point in time<br/>
      • <strong>as soon as</strong> = immediately after</p>`,
      examples: [
        { type: "When", sentence: "When the class started, everyone listened.", note: "One action happened right at that moment." },
        { type: "While", sentence: "While I was studying, my phone rang.", note: "One longer action was interrupted by a shorter one." },
        { type: "Before/After", sentence: "Before you answer, read the question carefully.", note: "Action sequence." },
        { type: "After", sentence: "After we finished the lesson, we reviewed the answers.", note: "Action sequence." },
        { type: "Until", sentence: "Wait until the teacher gives instructions.", note: "Action continues up to that point." },
        { type: "As Soon As", sentence: "Call me as soon as you arrive.", note: "Immediately after." }
      ],
      commonMistakes: [
        { wrong: "During I studied, my phone rang.", correct: "While I was studying, my phone rang.", explanation: "'During' is followed by a noun phrase, 'while' is followed by a clause.", fix: "Use 'while' before a subject and verb." },
        { wrong: "Until the class started, everyone listened.", correct: "When the class started, everyone listened.", explanation: "Using 'until' changes the meaning entirely. It would mean they stopped listening once class started." },
        { wrong: "I will call you as soon as I will arrive.", correct: "I will call you as soon as I arrive.", explanation: "Do not use 'will' in time clauses referring to the future.", fix: "Use present tense." }
      ],
      summary: [
        "Time connectors map out events.",
        "Remember to use present tense (not future 'will') inside time clauses referring to the future."
      ]
    }
  },
  {
    id: "grammar-condition-connectors",
    data: {
      id: "grammar-condition-connectors",
      title: "If, Unless, As Long As, and Provided That",
      skill: "Grammar",
      pathway: "Connectors & Cohesion",
      group: "Subordinating Connectors",
      level: "Intermediate",
      backHref: "connectors-cohesion.html",
      backLabel: "Back to Connectors & Cohesion",
      description: "Set conditions and requirements to connect ideas.",
      learningGoals: [
        "Understand that 'unless' means 'if not'.",
        "Use varied condition connectors beyond 'if'."
      ],
      warmIntroduction: `<p>Life is full of conditions. You can go to the party, but only if you finish your homework. A plan will work out, but only provided that everyone helps.</p><p>Condition connectors set the rules. They explain what must happen first before a second thing can happen.</p><p>While "if" is the most common, words like "unless" and "as long as" add precision and variety to your sentences.</p>`,
      meaning: `<p>These connectors show <strong>condition</strong>.<br/>
      • <strong>If</strong> gives a possible condition.<br/>
      • <strong>Unless</strong> means 'if not' or 'except if'.<br/>
      • <strong>As long as</strong> means 'only if the condition continues or is met'.<br/>
      • <strong>Provided that</strong> is more formal and means 'only if'.</p>`,
      examples: [
        { type: "If", sentence: "If you practice, you will improve.", note: "Basic condition." },
        { type: "Unless", sentence: "Unless you practice, you will not improve.", note: "Means: If you do not practice." },
        { type: "As long as", sentence: "You can borrow my book as long as you return it tomorrow.", note: "Condition based on a promise or requirement." },
        { type: "Provided that", sentence: "The plan will work provided that everyone cooperates.", note: "Formal condition." }
      ],
      commonMistakes: [
        { wrong: "Unless you do not practice, you will not improve.", correct: "Unless you practice, you will not improve.", explanation: "'Unless' is already negative. Do not add 'do not' right after it." },
        { wrong: "If you will study, you will improve.", correct: "If you study, you will improve.", explanation: "Do not use 'will' directly in the 'if' clause for standard conditions." },
        { wrong: "Provided that everyone will cooperate, the plan will work.", correct: "Provided that everyone cooperates, the plan will work.", explanation: "Same rule, use present tense in the condition clause." }
      ],
      summary: [
        "Condition connectors set the rules.",
        "'Unless' means 'if not', so don't double the negative.",
        "Avoid using 'will' inside the condition clause."
      ]
    }
  },

  // GROUP 4
  {
    id: "grammar-transition-words-overview",
    data: {
      id: "grammar-transition-words-overview",
      title: "However, Therefore, Moreover, and Meanwhile",
      skill: "Grammar",
      pathway: "Connectors & Cohesion",
      group: "Transition Words and Formal Linking",
      level: "Intermediate",
      backHref: "connectors-cohesion.html",
      backLabel: "Back to Connectors & Cohesion",
      description: "Transition smoothly between separate sentence ideas.",
      learningGoals: [
        "Understand that transition words connect separate sentences.",
        "Use correct punctuation with transition words."
      ],
      warmIntroduction: `<p>When you write paragraphs, essays, or professional emails, you cannot always glue every thought into one massive sentence. You need separate sentences. But if those sentences don't hold hands, the paragraph feels robotic.</p><p>This is where formal transition words come in. They sit at the beginning of a new sentence (or after a semicolon) to guide the reader gracefully from the last thought into the new one.</p><p>They act like signposts saying: "Get ready for a contrast," or "Get ready for a conclusion."</p>`,
      meaning: `<p>These are <strong>transition words</strong> (conjunctive adverbs). They connect sentence ideas, not clauses in the same way FANBOYS do.<br/>
      • <strong>However</strong> = contrast<br/>
      • <strong>Therefore</strong> = result/conclusion<br/>
      • <strong>Moreover</strong> = additional strong point<br/>
      • <strong>Meanwhile</strong> = at the same time / in another situation</p>`,
      patterns: [
        { name: "With a period", formula: "Sentence 1. Transition, sentence 2.", explanation: "Start a new sentence with the transition word, followed by a comma." },
        { name: "With a semicolon", formula: "Sentence 1; transition, sentence 2.", explanation: "Use a semicolon to link closely related sentences, followed by the transition word and a comma." }
      ],
      examples: [
        { type: "However", sentence: "The task was difficult. However, the students completed it.", note: "Shows contrast between two separate sentences." },
        { type: "Therefore", sentence: "The road was flooded. Therefore, the school was closed.", note: "Shows result." },
        { type: "Moreover", sentence: "The plan is affordable. Moreover, it is easy to apply.", note: "Adds another strong supportive point." },
        { type: "Meanwhile", sentence: "Some students worked on the poster. Meanwhile, others prepared the presentation.", note: "Shows simultaneous actions or a different perspective." }
      ],
      commonMistakes: [
        { wrong: "The task was difficult, however the students completed it.", correct: "The task was difficult. However, the students completed it.", explanation: "Comma splice. 'However' cannot join two complete sentences with just a comma.", fix: "Use a period or semicolon." },
        { wrong: "The road was flooded, therefore the school was closed.", correct: "The road was flooded; therefore, the school was closed.", explanation: "Comma splice. Use a semicolon or period." },
        { wrong: "I bought milk. Moreover, I bought eggs.", correct: "I bought milk. I also bought eggs.", explanation: "'Moreover' is too formal and strong for simple everyday lists.", fix: "Use 'also' or 'and'." }
      ],
      summary: [
        "Transitions are formal bridges between separate sentences.",
        "Always use strong punctuation (period or semicolon) before them, and usually a comma after."
      ]
    }
  },
  {
    id: "grammar-addition-transition-words",
    data: {
      id: "grammar-addition-transition-words",
      title: "In Addition, Furthermore, Also, and Besides",
      skill: "Grammar",
      pathway: "Connectors & Cohesion",
      group: "Transition Words and Formal Linking",
      level: "Intermediate",
      backHref: "connectors-cohesion.html",
      backLabel: "Back to Connectors & Cohesion",
      description: "Add more information using natural and formal transition words.",
      learningGoals: [
        "Differentiate between casual ('also') and formal ('furthermore') addition.",
        "Place 'also' correctly in a sentence."
      ],
      warmIntroduction: `<p>When you are trying to convince someone of something, one reason is rarely enough. You give one point, and then you want to stack another point on top of it. "It's a great car. It's cheap. It's fast."</p><p>To stack information gracefully, we use addition connectors. But they are not all the same! Some sound like a casual chat with a friend, while others sound like a university essay.</p><p>Let's look at how to add information while choosing the perfect tone.</p>`,
      meaning: `<p>These connectors add information, but they have different tones:<br/>
      • <strong>Also</strong> is neutral, versatile, and common.<br/>
      • <strong>In addition</strong> and <strong>furthermore</strong> are formal and academic.<br/>
      • <strong>Besides</strong> adds an extra point, sometimes with a persuasive or conversational tone, meaning 'anyway' or 'an extra reason is'.</p>`,
      quickComparison: `<strong>Inside the verb:</strong> She <em>also</em> likes reading.<br/><strong>At the end:</strong> She likes reading, <em>too</em>.<br/><strong>At the start:</strong> <em>In addition</em>, she likes reading.`,
      examples: [
        { type: "Also", sentence: "She teaches grammar. She also teaches speaking.", note: "'Also' is neutral. Notice it often goes inside the sentence, before the main verb." },
        { type: "In Addition", sentence: "The app is simple. In addition, it is easy to use.", note: "Formal addition." },
        { type: "Furthermore", sentence: "The program is affordable. Furthermore, it provides useful materials.", note: "Very formal addition, stacking strong arguments." },
        { type: "Besides", sentence: "I do not want to go out. Besides, it is raining.", note: "Adds a final persuasive point." }
      ],
      commonMistakes: [
        { wrong: "I bought a shirt. Furthermore, I bought a hat.", correct: "I bought a shirt. I also bought a hat.", explanation: "Using 'furthermore' for simple everyday additions is unnatural." },
        { wrong: "Using 'besides' in academic essays instead of 'in addition'.", correct: "Using 'furthermore' or 'in addition'.", explanation: "'Besides' can sound too conversational or slightly argumentative for formal essays." },
        { wrong: "Also she likes reading.", correct: "She also likes reading.", explanation: "While 'Also,' at the start is understood, putting it before the main verb is often more natural." }
      ],
      summary: [
        "Stack your points carefully.",
        "Use 'also' for everyday addition, 'in addition/furthermore' for formal writing, and 'besides' for an extra persuasive reason."
      ]
    }
  },
  {
    id: "grammar-result-transition-words",
    data: {
      id: "grammar-result-transition-words",
      title: "As a Result, Consequently, Thus, and Therefore",
      skill: "Grammar",
      pathway: "Connectors & Cohesion",
      group: "Transition Words and Formal Linking",
      level: "Advanced",
      backHref: "connectors-cohesion.html",
      backLabel: "Back to Connectors & Cohesion",
      description: "Show strong results and logical consequences in writing.",
      learningGoals: [
        "Use formal result transitions correctly.",
        "Ensure the transition follows a logical cause."
      ],
      warmIntroduction: `<p>When actions have consequences, you need to show the logic clearly. The bridge broke. The trains stopped. How do you link these formal, serious facts?</p><p>"So" works in conversation ("The bridge broke, so the trains stopped"), but in professional or academic writing, "so" can feel too light.</p><p>That is when we pull out the heavy lifters: As a result, Consequently, Thus, and Therefore. They prove you are making a logical deduction.</p>`,
      meaning: `<p>These connectors show <strong>result or logical consequence</strong>. They are stronger and more formal than "so." They must always follow a clear cause or reason in the previous sentence.</p>`,
      quickComparison: `<strong>Informal/Clause connector:</strong> It was raining, <em>so</em> we stayed home.<br/><strong>Formal/Sentence transition:</strong> It was raining. <em>Therefore</em>, we stayed home.<br/><strong>Phrase transition:</strong> It was raining. <em>As a result</em>, we stayed home.`,
      examples: [
        { type: "As a Result", sentence: "The rain was heavy. As a result, the match was cancelled.", note: "Clear cause and effect across two sentences." },
        { type: "Consequently", sentence: "He did not prepare well. Consequently, his presentation was unclear.", note: "Shows the logical consequence of a prior action." },
        { type: "Therefore", sentence: "The cost is too high. Therefore, we need another option.", note: "Shows a conclusion drawn from the previous fact." },
        { type: "Thus", sentence: "The instructions were unclear. Thus, many students made the same mistake.", note: "'Thus' is very formal, meaning 'in this way' or 'for this reason'." }
      ],
      commonMistakes: [
        { wrong: "Using 'therefore' without a real cause before it.", correct: "Ensure the prior sentence is the reason.", explanation: "Transitions need something to transition from." },
        { wrong: "It was raining, so therefore we stayed home.", correct: "It was raining, so we stayed home.", explanation: "Do not use 'so' and 'therefore' together. Pick one." }
      ],
      summary: [
        "Use these strong transition words to show formal results and consequences.",
        "Always put a period or semicolon before them."
      ]
    }
  },
  {
    id: "grammar-example-transition-words",
    data: {
      id: "grammar-example-transition-words",
      title: "For Example, For Instance, Such As, and Namely",
      skill: "Grammar",
      pathway: "Connectors & Cohesion",
      group: "Transition Words and Formal Linking",
      level: "Intermediate",
      backHref: "connectors-cohesion.html",
      backLabel: "Back to Connectors & Cohesion",
      description: "Introduce clear examples and specific details accurately.",
      learningGoals: [
        "Differentiate between 'for example' and 'such as'.",
        "Use 'namely' to identify exact items."
      ],
      warmIntroduction: `<p>General statements are boring. "I like fruit." "Technology is useful." To make your writing interesting and convincing, you have to prove it with specifics.</p><p>But how do you introduce those specifics smoothly? Do you just list them? Do you say "Like..."?</p><p>Using "for example", "such as", and "namely" correctly makes your writing instantly richer and more precise.</p>`,
      meaning: `<p>These connectors introduce examples or specific details.<br/>
      • <strong>For example</strong> and <strong>for instance</strong> usually introduce a full example, often starting a new sentence.<br/>
      • <strong>Such as</strong> introduces examples inside a noun phrase. It does not start a new sentence.<br/>
      • <strong>Namely</strong> introduces specific names or exact items, identifying exactly what was just mentioned.</p>`,
      examples: [
        { type: "For Example", sentence: "Many students enjoy creative tasks. For example, they like making posters and short videos.", note: "Starts a new sentence with a full scenario." },
        { type: "For Instance", sentence: "There are many useful classroom tools, for instance online dictionaries and flashcards.", note: "Similar to 'for example'." },
        { type: "Such As", sentence: "Some hobbies, such as reading and drawing, can reduce stress.", note: "'Such as' sits right inside the sentence next to the noun 'hobbies'." },
        { type: "Namely", sentence: "The class focused on two skills, namely speaking and writing.", note: "'Namely' identifies the exact two skills mentioned." }
      ],
      commonMistakes: [
        { wrong: "I like many sports, for example football and basketball.", correct: "I like many sports, such as football and basketball.", explanation: "'For example' is often accepted here, but 'such as' is grammatically smoother inside a phrase." },
        { wrong: "I like sports, such as.", correct: "I like sports, such as tennis.", explanation: "Do not end a sentence with 'such as'. It must be followed by nouns." },
        { wrong: "Many cities such as, Jakarta and Bandung.", correct: "Many cities, such as Jakarta and Bandung, are very busy.", explanation: "The comma goes before 'such as', not after." }
      ],
      summary: [
        "Use 'for example' to start a new explanatory sentence.",
        "Use 'such as' for a list inside a sentence.",
        "Use 'namely' to name exact items."
      ]
    }
  },

  // GROUP 5
  {
    id: "grammar-addition-contrast-connectors",
    data: {
      id: "grammar-addition-contrast-connectors",
      title: "Connectors for Addition and Contrast",
      skill: "Grammar",
      pathway: "Connectors & Cohesion",
      group: "Function-Based Connectors",
      level: "Intermediate",
      backHref: "connectors-cohesion.html",
      backLabel: "Back to Connectors & Cohesion",
      description: "Compare ways to add similar ideas and show opposing ideas.",
      learningGoals: [
        "Group connectors mentally by function (Addition vs Contrast).",
        "Avoid doubling contrast connectors like 'although' and 'but'."
      ],
      warmIntroduction: `<p>One of the best ways to improve your English is to stop thinking about grammatical labels like "subordinating conjunctions" and start thinking about <strong>meaning</strong>.</p><p>When you are writing, ask yourself: "Am I adding to my idea, or am I contradicting it?"</p><p>If you group connectors by their function—addition and contrast—you can easily choose the right tool for the job depending on how formal you want to sound.</p>`,
      meaning: `<p>Function-based connector choice helps you choose by meaning.<br/>
      • <strong>Addition connectors</strong> add similar information.<br/>
      • <strong>Contrast connectors</strong> show difference, surprise, or opposition.</p>
      <p><strong>Addition:</strong> and, also, too, in addition, furthermore, moreover.<br/>
      <strong>Contrast:</strong> but, yet, although, even though, however, nevertheless, despite, in spite of, while, whereas.</p>`,
      quickComparison: `<strong>Addition (Clause):</strong> She is friendly <em>and</em> helpful.<br/><strong>Addition (Sentence):</strong> She is friendly. <em>In addition</em>, she is helpful.<br/><strong>Contrast (Clause):</strong> She is friendly, <em>but</em> she can be strict.<br/><strong>Contrast (Dependent):</strong> <em>Although</em> she is friendly, she can be strict.<br/><strong>Contrast (Sentence):</strong> She is friendly. <em>However</em>, she can be strict.`,
      examples: [
        { type: "Addition", sentence: "She is friendly. In addition, she is helpful.", note: "" },
        { type: "Contrast", sentence: "She is friendly. However, she can be strict.", note: "" }
      ],
      commonMistakes: [
        { wrong: "Although I was tired, but I studied.", correct: "Although I was tired, I studied.", explanation: "Do not use two contrast connectors for the same relationship.", fix: "Remove 'but'." },
        { wrong: "She was tired, however she worked.", correct: "She was tired. However, she worked.", explanation: "Use correct punctuation for sentence transitions.", fix: "Change comma to a period." },
        { wrong: "Despite she was tired.", correct: "Despite her tiredness.", explanation: "'Despite' and 'in spite of' must be followed by a noun phrase or gerund, not a full clause." }
      ],
      summary: [
        "Always know if you are adding info or contrasting it.",
        "Choose the connector that fits your sentence structure (clause, phrase, or sentence).",
        "Don't mix 'although' and 'but'."
      ]
    }
  },
  {
    id: "grammar-cause-result-connectors",
    data: {
      id: "grammar-cause-result-connectors",
      title: "Connectors for Cause and Result",
      skill: "Grammar",
      pathway: "Connectors & Cohesion",
      group: "Function-Based Connectors",
      level: "Intermediate",
      backHref: "connectors-cohesion.html",
      backLabel: "Back to Connectors & Cohesion",
      description: "Express reasons clearly and state their logical results.",
      learningGoals: [
        "Distinguish between cause connectors and result connectors.",
        "Use 'because of' and 'due to' correctly with noun phrases."
      ],
      warmIntroduction: `<p>Everything happens for a reason, and everything has a result. "The road is wet because it rained." "It rained, so the road is wet."</p><p>Students often mix up the cause and the result. They put the right word on the wrong side of the sentence! Or they use a clause connector where they need a phrase connector.</p><p>Let's map out exactly how to talk about causes and results clearly.</p>`,
      meaning: `<p><strong>Cause</strong> tells why something happens. <strong>Result</strong> tells what happens because of it. You must know which side of the relationship you are introducing.</p>
      <p><strong>Cause connectors:</strong> because, since, as, because of, due to, owing to.<br/>
      <strong>Result connectors:</strong> so, therefore, as a result, consequently, thus.</p>`,
      quickComparison: `<ul>
      <li><strong>because</strong> + clause (subject + verb)</li>
      <li><strong>because of / due to</strong> + noun phrase</li>
      <li><strong>so</strong> + result clause</li>
      <li><strong>therefore</strong> + result sentence</li>
      </ul>`,
      examples: [
        { type: "Cause (Clause)", sentence: "She stayed home because she was sick.", note: "" },
        { type: "Cause (Phrase)", sentence: "Because of the rain, the match was cancelled.", note: "" },
        { type: "Result (Clause)", sentence: "The rain was heavy, so the match was cancelled.", note: "" },
        { type: "Result (Sentence)", sentence: "The rain was heavy. As a result, the match was cancelled.", note: "" }
      ],
      commonMistakes: [
        { wrong: "Because of she was sick.", correct: "Because she was sick.", explanation: "'Because of' needs a noun, not a full clause." },
        { wrong: "Due to it rained.", correct: "Due to the rain.", explanation: "Same rule as 'because of'." },
        { wrong: "Because she was sick, so she stayed home.", correct: "Because she was sick, she stayed home.", explanation: "Do not double up cause and result connectors." }
      ],
      summary: [
        "Decide if you are giving the reason (cause) or the consequence (result).",
        "Match the connector type (clause, noun phrase, or sentence) to your structure."
      ]
    }
  },
  {
    id: "grammar-purpose-condition-choice-connectors",
    data: {
      id: "grammar-purpose-condition-choice-connectors",
      title: "Connectors for Purpose, Condition, and Choice",
      skill: "Grammar",
      pathway: "Connectors & Cohesion",
      group: "Function-Based Connectors",
      level: "Intermediate",
      backHref: "connectors-cohesion.html",
      backLabel: "Back to Connectors & Cohesion",
      description: "Explain goals, set requirements, and offer alternatives.",
      learningGoals: [
        "Use 'to' and 'so that' for purpose correctly.",
        "Recognize different forms of expressing condition and choice."
      ],
      warmIntroduction: `<p>Sometimes you need to explain your goals: "I study to learn." Sometimes you need to set boundaries: "I will go if you go." And sometimes you offer options: "Tea or coffee?"</p><p>Purpose, condition, and choice connectors give your sentences direction. They explain the 'why', the 'what if', and the 'which one'.</p><p>Mastering these will make your English sound highly intentional and clear.</p>`,
      meaning: `<p>• <strong>Purpose connectors</strong> explain the goal of an action (to, in order to, so that, for the purpose of).<br/>
      • <strong>Condition connectors</strong> explain what must happen first (if, unless, as long as, provided that).<br/>
      • <strong>Choice connectors</strong> show alternatives (or, either...or, whether...or).</p>`,
      examples: [
        { type: "Purpose (to)", sentence: "I study every day to improve my English.", note: "'To' + infinitive verb." },
        { type: "Purpose (so that)", sentence: "She spoke slowly so that everyone could understand.", note: "'So that' + subject + verb." },
        { type: "Condition", sentence: "If you need help, ask the teacher.", note: "Condition." },
        { type: "Choice", sentence: "You can write the answer in pen or pencil.", note: "Choice." },
        { type: "Choice", sentence: "Either we start now or we wait until tomorrow.", note: "Choice between two specific options." }
      ],
      commonMistakes: [
        { wrong: "I study every day for improve English.", correct: "I study every day to improve my English.", explanation: "Use 'to' + verb for purpose, not 'for'." },
        { wrong: "I spoke slowly for everyone could understand.", correct: "I spoke slowly so that everyone could understand.", explanation: "Use 'so that' followed by a clause for purpose." },
        { wrong: "Unless you do not submit it, you cannot join.", correct: "Unless you submit it, you cannot join.", explanation: "Unless already means 'if not'." }
      ],
      indonesianLearnerWarning: `<p>Students often directly translate "untuk" as "for" when showing purpose, resulting in mistakes like "I go for buy food." Always use "to" + verb (to buy) or "so that" + clause for purpose.</p>`,
      summary: [
        "Use 'to' or 'so that' for your goals.",
        "Use 'if' or 'unless' for requirements.",
        "Use 'or' for options."
      ]
    }
  },
  {
    id: "grammar-sequence-summary-conclusion-connectors",
    data: {
      id: "grammar-sequence-summary-conclusion-connectors",
      title: "Connectors for Sequence, Summary, and Conclusion",
      skill: "Grammar",
      pathway: "Connectors & Cohesion",
      group: "Function-Based Connectors",
      level: "Intermediate",
      backHref: "connectors-cohesion.html",
      backLabel: "Back to Connectors & Cohesion",
      description: "Organize steps and bring your ideas to a clear close.",
      learningGoals: [
        "Sequence steps chronologically.",
        "Summarize ideas effectively without sounding too rigid."
      ],
      warmIntroduction: `<p>Imagine explaining a recipe without any order. "Bake the cake. Mix the eggs. Eat the cake." Chaos!</p><p>When you are explaining a process, telling a story, or wrapping up an essay, structure is everything. You need words that act like road signs: "Start here," "Go here next," and "We are finished."</p><p>Sequence, summary, and conclusion connectors give your writing professional polish and make it easy to follow.</p>`,
      meaning: `<p>• <strong>Sequence connectors</strong> organize steps and events (first, next, then, after that, finally, meanwhile, eventually).<br/>
      • <strong>Summary connectors</strong> shorten or restate main ideas (in short, overall, in general).<br/>
      • <strong>Conclusion connectors</strong> close an explanation or essay (to sum up, in conclusion).</p>`,
      examples: [
        { type: "Sequence", sentence: "First, read the instructions. Next, answer the questions. Finally, check your work.", note: "Clear sequence of steps." },
        { type: "Summary", sentence: "The lesson was challenging. Overall, the students did well.", note: "Summarizes the general feeling or result." },
        { type: "Conclusion", sentence: "To sum up, connectors help ideas flow more clearly.", note: "Conclusion statement." }
      ],
      commonMistakes: [
        { wrong: "Using 'finally' when there are only two steps.", correct: "Use 'first' and 'then/second'.", explanation: "'Finally' usually implies the end of a longer list of steps." },
        { wrong: "Starting every sentence with a sequence connector.", correct: "Vary your sentence structure.", explanation: "First this. Then this. Next this. After that this... sounds robotic." },
        { wrong: "Using 'in conclusion' in short everyday answers.", correct: "Use 'so' or 'overall'.", explanation: "'In conclusion' sounds too formal and dramatic for an email or quick chat." }
      ],
      summary: [
        "Organize steps with sequence words.",
        "Summarize with 'overall'.",
        "Save 'in conclusion' for formal writing."
      ]
    }
  },

  // GROUP 6
  {
    id: "grammar-connecting-ideas-inside-sentence",
    data: {
      id: "grammar-connecting-ideas-inside-sentence",
      title: "Connecting Ideas Inside a Sentence",
      skill: "Grammar",
      pathway: "Connectors & Cohesion",
      group: "Cohesion in Sentences and Paragraphs",
      level: "Intermediate",
      backHref: "connectors-cohesion.html",
      backLabel: "Back to Connectors & Cohesion",
      description: "Build clear relationships between clauses in a single sentence.",
      learningGoals: [
        "Write cohesive sentences without overloading them.",
        "Ensure grammar is parallel and complete on both sides of a connector."
      ],
      warmIntroduction: `<p>Before we worry about connecting huge paragraphs, we have to look inside a single sentence. A sentence is like a small room. If you stuff too much furniture into it, you can't walk around.</p><p>When you connect ideas inside one sentence, the goal is clarity. You want the reader to see the relationship instantly without getting lost in a mess of words.</p><p>Let's look at how to build clean, connected sentences without breaking the grammar rules.</p>`,
      meaning: `<p>Connectors can join words, phrases, and clauses inside one sentence. The goal is to make one sentence express a clear logical relationship without becoming overcrowded.</p>`,
      stepByStep: `<p>• Do not force too many ideas into one sentence.<br/>
      • Make sure the connector matches the relationship you want to show.<br/>
      • Check whether both sides of the connector are grammatically complete (e.g., if you use 'because', do you have a full subject and verb?).</p>`,
      examples: [
        { type: "Words", sentence: "I bought a pen and a notebook.", note: "Joining words." },
        { type: "Adjectives", sentence: "She was tired but happy.", note: "Joining adjectives." },
        { type: "Clauses", sentence: "I stayed home because I was sick.", note: "Joining a main clause and a dependent clause." },
        { type: "Clauses", sentence: "Although the test was hard, I finished it.", note: "Joining a dependent clause and a main clause." },
        { type: "Condition", sentence: "If you need help, ask me.", note: "Condition joined to an instruction." }
      ],
      commonMistakes: [
        { wrong: "The lesson was difficult and I understand.", correct: "The lesson was difficult, but I understood it.", explanation: "Meaning mismatch. 'And' adds similar ideas; 'but' shows contrast." },
        { wrong: "Although the lesson was difficult but I understood it.", correct: "Although the lesson was difficult, I understood it.", explanation: "Double connector error." },
        { wrong: "Because tired, I went home.", correct: "Because I was tired, I went home.", explanation: "'Because' must be followed by a subject and a verb." }
      ],
      summary: [
        "Keep sentences clean.",
        "Use one connector per relationship.",
        "Ensure the grammar on both sides is correct, and don't overcrowd the sentence."
      ]
    }
  },
  {
    id: "grammar-connecting-sentences-paragraph",
    data: {
      id: "grammar-connecting-sentences-paragraph",
      title: "Connecting Sentences in a Paragraph",
      skill: "Grammar",
      pathway: "Connectors & Cohesion",
      group: "Cohesion in Sentences and Paragraphs",
      level: "Advanced",
      backHref: "connectors-cohesion.html",
      backLabel: "Back to Connectors & Cohesion",
      description: "Use connectors, pronouns, and flow to create strong paragraphs.",
      learningGoals: [
        "Understand that cohesion is more than just using connectors.",
        "Use pronouns and repeated words to build flow."
      ],
      warmIntroduction: `<p>Have you ever read a paragraph that felt choppy? Like reading a robot's diary: "Technology is useful. Technology is dangerous. People use technology every day."</p><p>Cohesion is what makes a paragraph feel human and smooth. It is not just about sprinkling "however" and "moreover" everywhere. It is about how ideas flow from one sentence to the next.</p><p>Good cohesion uses connectors, pronouns, repeated key words, and logical order to hold a paragraph together.</p>`,
      stepByStep: `<p>Cohesion tools include:<br/>
      • <strong>Connectors:</strong> Show the exact logical turn (contrast, result).<br/>
      • <strong>Pronouns:</strong> (it, they, this, that) Point back to nouns so you don't repeat them.<br/>
      • <strong>Repeated key words / Synonyms:</strong> Keep the topic clear without being boring.<br/>
      • <strong>Logical order:</strong> Ideas move naturally from general to specific, or in time order.</p>`,
      quickComparison: `<p><strong>Weak paragraph:</strong><br/>Technology is useful. Technology is dangerous. People use technology every day.</p>
      <p><strong>Improved cohesive paragraph:</strong><br/>Technology is useful because it helps people communicate quickly. However, it can also be dangerous when people use it carelessly. Therefore, users need to balance convenience with responsibility.</p>`,
      examples: [
        { type: "Connector", sentence: "...because it helps people communicate quickly.", note: "'Because' shows reason linking the usefulness to communication." },
        { type: "Connector", sentence: "However, it can also be dangerous...", note: "'However' shows contrast, preparing the reader for the danger." },
        { type: "Pronoun", sentence: "...it can also be dangerous...", note: "The pronoun 'it' replaces 'technology' to avoid annoying repetition." },
        { type: "Connector", sentence: "Therefore, users need to...", note: "'Therefore' shows the final conclusion or result." }
      ],
      summary: [
        "Good paragraphs flow smoothly.",
        "Use transition words to show logic.",
        "Replace repetitive nouns with pronouns to keep it natural."
      ]
    }
  },
  {
    id: "grammar-avoiding-connector-overuse",
    data: {
      id: "grammar-avoiding-connector-overuse",
      title: "Avoiding Connector Overuse",
      skill: "Grammar",
      pathway: "Connectors & Cohesion",
      group: "Cohesion in Sentences and Paragraphs",
      level: "Advanced",
      backHref: "connectors-cohesion.html",
      backLabel: "Back to Connectors & Cohesion",
      description: "Learn why using too many connectors sounds mechanical, and how to fix it.",
      learningGoals: [
        "Recognize when a sentence doesn't need a connector.",
        "Avoid sounding robotic by overusing formal transitions."
      ],
      warmIntroduction: `<p>When students first learn transition words, they often fall in love with them. They start every single sentence with "Moreover," "Furthermore," or "Nevertheless."</p><p>The result? The writing sounds heavy, mechanical, and unnatural. It feels like someone wearing a tuxedo to a beach party.</p><p>Good writing does not need an obvious connector in every sentence. Sometimes the logic is clear enough on its own.</p>`,
      meaning: `<p>Too many connectors make writing sound mechanical. Sometimes the relationship is clear without a connector. A pronoun, a repeated key word, or simply good sentence order is enough to create cohesion.</p>`,
      quickComparison: `<p><strong>Overused (Heavy & Unnatural):</strong><br/>
      Moreover, technology is useful. Furthermore, it helps students. In addition, it saves time. Therefore, people use it every day.</p>
      <p><strong>Improved (Natural Flow):</strong><br/>
      Technology is useful because it helps students save time. It also gives people quick access to information. For this reason, many people use it every day.</p>`,
      commonMistakes: [
        { wrong: "Starting every sentence with moreover/furthermore/however.", correct: "Use them sparingly, only when a clear logical turn is needed.", explanation: "Too many big transitions overwhelm the reader." },
        { wrong: "Choosing formal connectors in casual writing.", correct: "Match the tone. Use 'but' or 'so' in emails.", explanation: "Simple connectors are often better than forced formal ones." },
        { wrong: "Using connectors without a logical relationship.", correct: "Ensure the word matches the meaning.", explanation: "Don't use 'therefore' just to sound smart if there is no real result." }
      ],
      indonesianLearnerWarning: `<p>Students may overuse formal connectors because they believe longer, complicated words always yield a higher score or sound more "academic". In reality, native speakers and examiners prefer clear, simple flow.</p>`,
      summary: [
        "Less is often more.",
        "Use connectors to clarify meaning, not to decorate your sentences.",
        "Rely on pronouns and logic for natural cohesion."
      ]
    }
  },
  {
    id: "grammar-common-connector-cohesion-mistakes",
    data: {
      id: "grammar-common-connector-cohesion-mistakes",
      title: "Common Connector and Cohesion Mistakes",
      skill: "Grammar",
      pathway: "Connectors & Cohesion",
      group: "Cohesion in Sentences and Paragraphs",
      level: "Advanced",
      backHref: "connectors-cohesion.html",
      backLabel: "Back to Connectors & Cohesion",
      description: "Repair mixed connectors, wrong meanings, and translation errors.",
      learningGoals: [
        "Fix the most common errors involving connectors.",
        "Check sentences for proper grammar and flow."
      ],
      warmIntroduction: `<p>You have learned the rules, the punctuation, and the meanings. But old habits are hard to break, and sometimes direct translations sneak into our writing.</p><p>This lesson is your repair shop. We are going to look at the most common, stubborn mistakes English learners make with connectors, and fix them once and for all.</p><p>Review this checklist before you submit your next writing assignment!</p>`,
      stepByStep: `<p>Let's fix the top connector mistakes.</p>
      <ul>
      <li><strong>1. Although + but</strong><br/>
      Wrong: Although I was tired, but I studied.<br/>
      Correct: Although I was tired, I studied.</li>
      <li><strong>2. Because + so</strong><br/>
      Wrong: Because it was raining, so we stayed home.<br/>
      Correct: Because it was raining, we stayed home. (Or: It was raining, so we stayed home.)</li>
      <li><strong>3. However punctuation</strong><br/>
      Wrong: I was tired, however I continued.<br/>
      Correct: I was tired. However, I continued.</li>
      <li><strong>4. Because of + clause</strong><br/>
      Wrong: Because of I was sick, I stayed home.<br/>
      Correct: Because I was sick, I stayed home. (Or: Because of my illness, I stayed home.)</li>
      <li><strong>5. Despite + clause</strong><br/>
      Wrong: Despite she was tired, she worked.<br/>
      Correct: Although she was tired, she worked. (Or: Despite her tiredness, she worked.)</li>
      <li><strong>6. Wrong connector meaning</strong><br/>
      Wrong: I was hungry. However, I ate lunch.<br/>
      Correct: I was hungry, so I ate lunch.</li>
      <li><strong>7. Fragment with dependent connector</strong><br/>
      Wrong: Because I was tired.<br/>
      Correct: I went home because I was tired.</li>
      <li><strong>8. Direct translation from Indonesian</strong><br/>
      Wrong: I study English for can speak better.<br/>
      Correct: I study English so that I can speak better. (Or: I study English to speak better.)</li>
      </ul>`,
      classroomUse: `<strong>Final Connector Checklist for Writing:</strong>
      <ol>
      <li>What relationship do I want to show (addition, contrast, reason, etc.)?</li>
      <li>Does this connector join clauses inside a sentence, or transition between paragraphs?</li>
      <li>Do I need a comma, period, or semicolon?</li>
      <li>Am I using two connectors when one is enough (although/but)?</li>
      <li>Is the connector too formal or too casual for this sentence?</li>
      <li>Am I overusing connectors?</li>
      <li>Can I improve cohesion with pronouns or repeated key words instead?</li>
      </ol>`,
      summary: [
        "Drop the double connectors (although/but).",
        "Watch your 'however' punctuation.",
        "Never follow 'despite' or 'because of' with a full clause."
      ]
    }
  }
];

lessons.forEach(lesson => {
    addLesson(lesson.id, lesson.data);
});

fs.writeFileSync(targetFile, fileContent, 'utf8');
console.log('Done inserting lessons.');
