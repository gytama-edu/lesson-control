import fs from 'fs';
import path from 'path';

// Note: Using a workaround to modify the JS file as a string since it's ESM/CJS mixed in our environment.
const lessonsPath = path.join(process.cwd(), 'data', 'lessons.js');
let lessonsContent = fs.readFileSync(lessonsPath, 'utf8');

// We'll write the new lesson contents, then we'll string-replace the matched objects.
const updates = [
  {
    id: "grammar-combining-sentences",
    title: "Combining Sentences",
    category: "Sentence Expansion",
    level: "Intermediate",
    content: "### How to Combine Sentences\n\nCombining short, choppy sentences helps your writing flow better. You can combine sentences using coordinating conjunctions (FANBOYS), subordinating conjunctions, or semicolons.\n\n#### Coordinating Conjunctions\nJoin two related independent clauses using a comma and *for, and, nor, but, or, yet, so*.\n- **Example:** I wanted to go to the park, **but** it started to rain.\n\n#### Subordinating Conjunctions\nTurn one sentence into a dependent clause to show the relationship between the two ideas.\n- **Example:** **Because** it started to rain, I couldn't go to the park.\n\n#### Semicolons\nUse a semicolon to join two closely related independent clauses without a conjunction.\n- **Example:** The sun is shining; the birds are singing.",
    interactiveQuestions: [
      {
        question: "Which word is a coordinating conjunction (FANBOYS)?",
        options: ["Because", "Although", "But", "Therefore"],
        correctAnswer: "But",
        explanation: "'But' is one of the FANBOYS (for, and, nor, but, or, yet, so)."
      },
      {
        question: "Identify the best way to combine: 'She loves cats. She adopted two.'",
        options: [
          "She loves cats, she adopted two.",
          "She loves cats, so she adopted two.",
          "Because she adopted two cats she loves them."
        ],
        correctAnswer: "She loves cats, so she adopted two.",
        explanation: "'so' shows the cause and effect clearly and grammatically."
      }
    ]
  },
  {
    id: "grammar-avoiding-overloaded-sentences",
    title: "Avoiding Overloaded Sentences",
    category: "Sentence Expansion",
    level: "Intermediate",
    content: "### What is an Overloaded Sentence?\n\nAn overloaded sentence contains too much information, making it confusing or difficult to read. While expanding sentences is good, adding too many clauses or phrases can create a tangled mess.\n\n#### Signs of an Overloaded Sentence:\n1. Too many conjunctions (and, so, but, because) in a row.\n2. You lose track of the main subject and verb.\n3. It takes too long to read aloud without taking a breath.\n\n#### How to Fix Them:\n- **Break it down:** Split the long sentence into two or three shorter, clearer sentences.\n- **Remove repetition:** Take out unnecessary words or repetitive phrases.\n\n**Overloaded:** The dog ran into the street, and a car almost hit him, but he jumped out of the way, because he is very fast, so he was safe.\n**Fixed:** The dog ran into the street and was almost hit by a car. Luckily, he jumped out of the way because he is very fast.",
    interactiveQuestions: [
      {
        question: "What is the best way to fix an overloaded sentence?",
        options: ["Add more commas", "Split it into shorter sentences", "Change it to passive voice", "Add more conjunctions"],
        correctAnswer: "Split it into shorter sentences",
        explanation: "Breaking it into shorter sentences makes it easier to read and understand."
      }
    ]
  },
  {
    id: "grammar-sentence-fragments",
    title: "Sentence Fragments",
    category: "Common Sentence Problems",
    level: "Beginner",
    content: "### What is a Sentence Fragment?\n\nA sentence fragment is an incomplete sentence. It is missing a subject, a verb, or it doesn't express a complete thought (like a dependent clause left by itself).\n\n#### Examples of Fragments:\n- **Missing Subject:** Went to the store. (Who went?)\n- **Missing Verb:** The large, angry dog. (What did the dog do?)\n- **Incomplete Thought:** Because I was tired. (What happened because you were tired?)\n\n#### How to Fix Fragments:\n1. Add the missing subject or verb.\n2. Attach the dependent clause to an independent clause.\n\n**Fragment:** Because it was raining.\n**Fixed:** Because it was raining, we stayed indoors.",
    interactiveQuestions: [
      {
        question: "Which of the following is a sentence fragment?",
        options: ["She walked.", "The cat slept on the mat.", "Running quickly to the store.", "I am happy."],
        correctAnswer: "Running quickly to the store.",
        explanation: "It is missing a subject and a main verb; 'running' here functions as a participle, not a main verb."
      },
      {
        question: "How can you fix this fragment: 'When the timer rings.'?",
        options: [
          "Add a period at the end.",
          "Attach it to an independent clause, e.g., 'When the timer rings, the cake is done.'",
          "Remove 'When'."
        ],
        correctAnswer: "Attach it to an independent clause, e.g., 'When the timer rings, the cake is done.'",
        explanation: "Dependent clauses must be attached to an independent clause to form a complete thought."
      }
    ]
  },
  {
    id: "grammar-run-on-sentences",
    title: "Run-On Sentences",
    category: "Common Sentence Problems",
    level: "Beginner",
    content: "### What is a Run-On Sentence?\n\nA run-on sentence occurs when two or more independent clauses are joined improperly, without correct punctuation or conjunctions. \n\n**Note:** A run-on sentence isn't necessarily a *long* sentence; it's a grammatically incorrect one.\n\n#### Types of Run-Ons:\n1. **Fused Sentence:** Two independent clauses joined with no punctuation at all.\n   *Example:* It is raining I will take an umbrella.\n2. **Comma Splice:** Two independent clauses joined only by a comma. (Covered more in the next lesson).\n\n#### How to Fix Run-Ons:\n1. **Use a period:** Make two separate sentences.\n2. **Use a semicolon:** If the ideas are closely related.\n3. **Use a comma + FANBOYS:** e.g., ', and', ', so'.\n4. **Make one clause dependent:** Add a word like *because* or *although*.",
    interactiveQuestions: [
      {
        question: "Which of the following is a run-on sentence?",
        options: [
          "I love pizza; it is my favorite food.",
          "I love pizza it is my favorite food.",
          "Because I love pizza, I eat it often.",
          "I love pizza, and it is my favorite food."
        ],
        correctAnswer: "I love pizza it is my favorite food.",
        explanation: "Two independent clauses are jammed together with no punctuation."
      }
    ]
  },
  {
    id: "grammar-comma-splices",
    title: "Comma Splices",
    category: "Common Sentence Problems",
    level: "Intermediate",
    content: "### What is a Comma Splice?\n\nA comma splice is a specific type of run-on sentence. It happens when you join two independent clauses with *only* a comma. Commas alone are not strong enough to hold two complete sentences together.\n\n**Incorrect (Comma Splice):** I went to the store, I bought some milk.\n\n#### 4 Ways to Fix a Comma Splice:\n1. **Period:** I went to the store. I bought some milk.\n2. **Comma + Conjunction (FANBOYS):** I went to the store, **and** I bought some milk.\n3. **Semicolon:** I went to the store; I bought some milk.\n4. **Subordinating Conjunction:** **When** I went to the store, I bought some milk.",
    interactiveQuestions: [
      {
        question: "Identify the comma splice.",
        options: [
          "She was late to work, the traffic was terrible.",
          "Because the traffic was terrible, she was late to work.",
          "She was late to work; the traffic was terrible.",
          "She was late to work because the traffic was terrible."
        ],
        correctAnswer: "She was late to work, the traffic was terrible.",
        explanation: "Two complete sentences are joined by only a comma."
      },
      {
        question: "Which is a correct way to fix a comma splice?",
        options: [
          "Add a coordinating conjunction (like 'and' or 'but') after the comma.",
          "Remove the comma completely.",
          "Change the comma to an apostrophe."
        ],
        correctAnswer: "Add a coordinating conjunction (like 'and' or 'but') after the comma.",
        explanation: "A comma + FANBOYS (coordinating conjunction) properly joins two independent clauses."
      }
    ]
  },
  {
    id: "grammar-missing-subjects-or-verbs",
    title: "Missing Subjects or Verbs",
    category: "Common Sentence Problems",
    level: "Beginner",
    content: "### Missing Subjects or Verbs\n\nEvery sentence must have at least one subject and one verb to be complete. If one is missing, you have a sentence fragment.\n\n#### Missing Subject:\n- **Incorrect:** Went to the store yesterday.\n- **Fix:** Add who or what did the action. -> **I** went to the store yesterday.\n\n#### Missing Verb:\n- **Incorrect:** The tall man with the green hat.\n- **Fix:** Add what the subject did or is. -> The tall man with the green hat **is** my uncle.\n\n#### Exceptions:\nIn imperative sentences (commands), the subject is understood to be 'You'.\n- **Example:** 'Close the door.' (The subject 'You' is missing, but this is grammatically correct).",
    interactiveQuestions: [
      {
        question: "What is missing in this sentence: 'Swam in the pool all day.'",
        options: ["Subject", "Verb", "Object", "Adjective"],
        correctAnswer: "Subject",
        explanation: "We don't know *who* swam. It needs a subject, like 'He' or 'The kids'."
      }
    ]
  },
  {
    id: "grammar-unclear-sentence-meaning",
    title: "Unclear Sentence Meaning",
    category: "Common Sentence Problems",
    level: "Advanced",
    content: "### Unclear Sentence Meaning\n\nSometimes a sentence has a subject, a verb, and proper punctuation, but its meaning is still confusing. This often happens due to misplaced modifiers or ambiguous pronouns.\n\n#### Misplaced Modifiers:\nA modifier should be placed right next to the word it modifies. If it's too far away, it can change the meaning of the sentence in funny or confusing ways.\n- **Unclear:** I saw a man walking a dog *in my pajamas*.\n- **Clear:** *In my pajamas*, I saw a man walking a dog.\n\n#### Ambiguous Pronouns:\nWhen a pronoun (he, she, it, they) could refer to more than one noun, the reader won't know which one you mean.\n- **Unclear:** The boy put the apple in the box and then closed *it*. (Did he close the apple or the box?)\n- **Clear:** The boy put the apple in the box and then closed *the box*.",
    interactiveQuestions: [
      {
        question: "Why is this sentence unclear? 'Sarah told Mary that she won the prize.'",
        options: [
          "It's a run-on sentence.",
          "It's missing a verb.",
          "The pronoun 'she' is ambiguous; we don't know if Sarah or Mary won.",
          "It is a comma splice."
        ],
        correctAnswer: "The pronoun 'she' is ambiguous; we don't know if Sarah or Mary won.",
        explanation: "The pronoun 'she' could refer to either Sarah or Mary."
      }
    ]
  },
  {
    id: "grammar-how-to-repair-a-sentence",
    title: "How to Repair a Sentence",
    category: "Common Sentence Problems",
    level: "Intermediate",
    content: "### How to Repair a Broken Sentence\n\nWhen editing your writing, follow this checklist to repair broken sentences:\n\n1. **Check for the core:** Does the sentence have a clear subject and verb?\n2. **Check the boundaries:** Does it start with a capital letter and end with proper punctuation? Are independent clauses separated correctly (no run-ons or comma splices)?\n3. **Check the logic:** Do the parts of the sentence make sense together? Are modifiers in the right place? Are pronouns clear?\n4. **Check the length:** Is it an overloaded sentence that needs to be broken up? Or is it too choppy and needs to be combined with another sentence?\n\nBy methodically checking these four areas, you can turn a confusing sentence into a clear and effective one.",
    interactiveQuestions: [
      {
        question: "What is a good first step when repairing a broken sentence?",
        options: [
          "Add more adjectives.",
          "Ensure it has a clear subject and verb.",
          "Make the sentence longer.",
          "Change the font."
        ],
        correctAnswer: "Ensure it has a clear subject and verb.",
        explanation: "The subject and verb form the core of any sentence. If they are missing or unclear, the sentence won't work."
      }
    ]
  }
];

// Reconstruct lessons.js using regex/eval strategy or JSON parsing.
// Actually, since lessons.js exports an object, we can parse it by running a script.
// Wait, we are in a Node script right now. Let's just require it, modify the objects, and rewrite the file.
async function run() {
  const data = await import('../data/lessons.js');
  const lessons = data.lessons;

  updates.forEach(update => {
    const idx = lessons.findIndex(l => l.id === update.id);
    if (idx !== -1) {
      lessons[idx] = { ...lessons[idx], ...update };
    }
  });

  // Also, add pathway properties to ALL 24 Sentence Structure lessons.
  const sentenceStructureIds = [
    'grammar-what-is-a-sentence',
    'grammar-subject-and-predicate',
    'grammar-basic-word-order',
    'grammar-subject-verb',
    'grammar-subject-verb-object',
    'grammar-subject-verb-complement',
    'grammar-simple-sentences',
    'grammar-compound-sentences',
    'grammar-complex-sentences',
    'grammar-compound-complex-sentences',
    'grammar-sentence-functions',
    'grammar-choosing-sentence-type',
    'grammar-expanding-simple-sentences',
    'grammar-adjectives-and-adverbs',
    'grammar-prepositional-phrases',
    'grammar-adding-details-with-clauses',
    'grammar-combining-sentences',
    'grammar-avoiding-overloaded-sentences',
    'grammar-sentence-fragments',
    'grammar-run-on-sentences',
    'grammar-comma-splices',
    'grammar-missing-subjects-or-verbs',
    'grammar-unclear-sentence-meaning',
    'grammar-how-to-repair-a-sentence'
  ];

  lessons.forEach(l => {
    if (sentenceStructureIds.includes(l.id)) {
      l.pathway = "Sentence Structure";
      l.backHref = "/learning-paths/sentence-structure";
      l.backLabel = "Back to Sentence Structure";
    }
  });

  const newContent = `export const lessons = ${JSON.stringify(lessons, null, 2)};\n`;
  fs.writeFileSync(lessonsPath, newContent, 'utf8');
  console.log("Updated 8 final sentence structure lessons and added pathway data to all 24.");
}

run();
