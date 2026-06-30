const fs = require('fs');
const path = require('path');

const lessonsPath = path.join(__dirname, '..', 'data', 'lessons.js');
let content = fs.readFileSync(lessonsPath, 'utf8');

const newLessons = [
  {
    "id": "grammar-advanced-reporting-verbs",
    "backHref": "reported-speech.html",
    "backLabel": "Back to Reported Speech",
    "title": "Advanced Reporting Verbs",
    "skill": "Grammar",
    "category": "Reported Speech",
    "level": "Advanced",
    "description": "Use specific verbs like admit, deny, promise, and warn.",
    "learningGoals": [
      "Understand how advanced verbs capture the tone and intention of the speaker.",
      "Master the specific grammar patterns required by different verbs."
    ],
    "meaning": "While 'say' and 'tell' are useful, they are a bit boring. Advanced reporting verbs (like admit, deny, promise, warn, refuse, apologize) pack both the action of speaking and the emotional intention into a single word.",
    "keyIdeas": [
      "Verbs followed by 'to': promise, refuse, offer, agree.",
      "Verbs followed by a person + 'to': warn, remind, encourage.",
      "Verbs followed by V-ing: admit, deny, apologize for."
    ],
    "patterns": [
      {
        "name": "Verb + To",
        "formula": "Subject + promised/refused/offered + to + Verb 1",
        "examples": [
          {
            "en": "Direct: \\\"I won't do it!\\\"",
            "id": "Langsung: \\\"Saya tidak akan melakukannya!\\\"",
            "explanation": "A refusal."
          },
          {
            "en": "Reported: He refused to do it.",
            "id": "Dilaporkan: Dia menolak untuk melakukannya.",
            "explanation": "Much stronger than 'He said he wouldn't do it'."
          }
        ]
      },
      {
        "name": "Verb + V-ing",
        "formula": "Subject + admitted/denied + V-ing",
        "examples": [
          {
            "en": "Direct: \\\"I didn't steal the money.\\\"",
            "id": "Langsung: \\\"Saya tidak mencuri uang itu.\\\"",
            "explanation": "A denial."
          },
          {
            "en": "Reported: He denied stealing the money.",
            "id": "Dilaporkan: Dia menyangkal mencuri uang itu.",
            "explanation": "Summarizes the entire idea into one action verb."
          }
        ]
      }
    ],
    "commonMistakes": [
      {
        "wrong": "He admitted to steal the money.",
        "correct": "He admitted stealing the money.",
        "explanation": "'Admit' is followed by a gerund (V-ing), not an infinitive."
      },
      {
        "wrong": "He apologized to be late.",
        "correct": "He apologized for being late.",
        "explanation": "'Apologize' must be followed by 'for' + V-ing."
      }
    ],
    "introduction": "Using 'said' and 'told' over and over again can make your English sound repetitive and basic. If a criminal shouts, 'I didn't do it!', you *could* say, 'He said that he hadn't done it.' But that loses all the drama!<br><br>Advanced speakers use 'verb upgrades'. Instead of using 'said' and a long sentence, they use words like 'denied' (He denied doing it). These verbs are like power-ups for your vocabulary. They compress the meaning, the tone, and the action into one neat package. The challenge is that each verb has its own specific grammar rule.",
    "stepByStep": "1. <strong>Identify the speaker's intention:</strong> Were they warning? Promising? Apologizing?<br>2. <strong>Choose the verb:</strong> e.g., 'apologize'.<br>3. <strong>Apply the correct pattern:</strong> Memorize which verbs take 'to', which take a person, and which take V-ing.<br>4. <strong>Result:</strong> 'He apologized for being late.'",
    "indonesianLearnerWarning": "Because Indonesian verbs don't change form, it's easy to accidentally translate literally: 'Dia menolak untuk melakukan' (He refused to do) works, but 'Dia menyangkal mencuri' must become 'He denied stealing' (V-ing), not 'He denied to steal'. Memorization of patterns is required here.",
    "practicePrompts": [
      "Report using 'refuse': \\\"I will not help you.\\\"",
      "Report using 'warn': \\\"Don't touch the stove.\\\""
    ],
    "classroomUse": "<strong>Teacher Tip:</strong> Give students cards with direct quotes (e.g., 'I am so sorry I broke the vase'). They must report the quote using an advanced verb (e.g., 'He apologized for breaking the vase') without using the word 'said'.",
    "quickComparison": "<strong>Basic:</strong> He said he would help. <strong>Advanced:</strong> He promised to help.",
    "summary": [
      "Advanced verbs compress the quote and the emotion.",
      "Some take 'to + verb' (promise, refuse).",
      "Some take 'V-ing' (admit, deny).",
      "Some require a preposition (apologize for V-ing)."
    ]
  },
  {
    "id": "grammar-reporting-thoughts-beliefs-opinions",
    "backHref": "reported-speech.html",
    "backLabel": "Back to Reported Speech",
    "title": "Reporting Thoughts, Beliefs, and Opinions",
    "skill": "Grammar",
    "category": "Reported Speech",
    "level": "Advanced",
    "description": "Report mental information or personal understanding.",
    "learningGoals": [
      "Use verbs like 'think', 'believe', 'know', and 'feel' to report mental states.",
      "Apply the same backshifting rules used for spoken statements."
    ],
    "meaning": "Reported speech isn't just for words spoken out loud. We use the exact same grammar structure to report what someone was thinking, what they believed, or what they knew.",
    "keyIdeas": [
      "Mental verbs (thought, knew, felt, believed) act exactly like reporting verbs (said, told).",
      "You must still backshift the tense in the reported clause."
    ],
    "patterns": [
      {
        "name": "Reporting Thoughts",
        "formula": "Subject + thought/knew/believed + (that) + Subject + Backshifted Verb",
        "examples": [
          {
            "en": "Direct Thought: (I am right.)",
            "id": "Pikiran Langsung: (Saya benar.)",
            "explanation": "Inside the person's head."
          },
          {
            "en": "Reported: He thought that he was right.",
            "id": "Dilaporkan: Dia berpikir bahwa dia benar.",
            "explanation": "Reported using backshifting."
          },
          {
            "en": "Direct Belief: (The plan will work.)",
            "id": "Keyakinan Langsung: (Rencana ini akan berhasil.)",
            "explanation": "A belief about the future."
          },
          {
            "en": "Reported: They believed the plan would work.",
            "id": "Dilaporkan: Mereka percaya rencana itu akan berhasil.",
            "explanation": "'Will' backshifts to 'would'."
          }
        ]
      }
    ],
    "commonMistakes": [
      {
        "wrong": "I thought you are angry.",
        "correct": "I thought you were angry.",
        "explanation": "Because 'thought' is in the past, the following verb must backshift to 'were'."
      }
    ],
    "introduction": "Have you ever had a misunderstanding and said, 'Oh, I thought you were angry at me!'? If so, you are already using reported speech! We often think of reported speech as only applying to words that come out of someone's mouth. But in English, the brain is treated like a speaker.<br><br>When you report a thought, a feeling, or a belief from the past, you apply the exact same backshifting rules as if someone had spoken it aloud. Mastering this allows you to explain misunderstandings, share opinions, and tell stories about what was going on inside someone's head.",
    "stepByStep": "1. <strong>Identify the mental state:</strong> thought, believed, knew, felt, assumed.<br>2. <strong>Add 'that' (optional):</strong> 'I thought that...'<br>3. <strong>State the idea and backshift the verb:</strong> Change 'you are' to 'you were'.<br>4. <strong>Result:</strong> 'I thought that you were angry.'",
    "indonesianLearnerWarning": "In Indonesian, saying 'Saya pikir kamu marah' (I thought you are angry) uses no tense change. In English, failing to backshift ('I thought you are angry') sounds like a grammatical crash. Always match the past tense 'thought' with a past tense state ('were').",
    "practicePrompts": [
      "Report the thought: (The test will be easy.) -> I thought...",
      "Report the belief: (She is a doctor.) -> We assumed..."
    ],
    "classroomUse": "<strong>Teacher Tip:</strong> Discuss a common misconception (e.g., 'People used to think the world was flat'). Have students write sentences starting with 'Hundreds of years ago, people believed that...'",
    "quickComparison": "<strong>Spoken:</strong> He said he was ready. <strong>Mental:</strong> He thought he was ready.",
    "summary": [
      "Treat thoughts and beliefs exactly like spoken words.",
      "Use verbs like thought, knew, believed, assumed.",
      "Always apply tense backshifting if the mental verb is in the past."
    ]
  },
  {
    "id": "grammar-reported-speech-conversations-stories",
    "backHref": "reported-speech.html",
    "backLabel": "Back to Reported Speech",
    "title": "Reported Speech in Conversations and Stories",
    "skill": "Grammar",
    "category": "Reported Speech",
    "level": "Advanced",
    "description": "Learn to mix direct speech and reported speech naturally.",
    "learningGoals": [
      "Understand how to use reported speech to summarize long conversations.",
      "Know when to switch back to direct speech for dramatic effect."
    ],
    "meaning": "In real life, we don't report every single sentence word-for-word. We summarize the boring parts using reported speech, and we use direct quotes for the most exciting or important statements.",
    "keyIdeas": [
      "Use reported speech for background information and summaries.",
      "Use direct speech for the punchline, the shock, or the most important quote.",
      "Mixing both styles makes you a much better storyteller."
    ],
    "patterns": [
      {
        "name": "The Storytelling Mix",
        "formula": "Reported Summary + Direct Punchline",
        "examples": [
          {
            "en": "I asked my boss for a raise, and he told me the company was losing money. Then he looked at me and said, \\\"In fact, you're fired!\\\"",
            "id": "Saya meminta kenaikan gaji kepada bos saya, dan dia memberitahu saya bahwa perusahaan sedang rugi. Kemudian dia menatap saya dan berkata, \\\"Faktanya, kamu dipecat!\\\"",
            "explanation": "The buildup is reported. The shock is direct."
          }
        ]
      }
    ],
    "commonMistakes": [
      {
        "wrong": "He said that he was going to the store and he said that he would buy milk and he said that he would be back soon.",
        "correct": "He said he was going to the store to buy milk and would be back soon.",
        "explanation": "Don't repeat 'he said that' over and over. Combine the ideas."
      }
    ],
    "introduction": "When learners first study reported speech, they often try to translate an entire five-minute conversation sentence by sentence. This sounds robotic and exhausting! Think about how you tell stories in your native language.<br><br>Good storytellers are editors. They use reported speech to summarize the boring parts of a conversation quickly ('She told me about her day...'). Then, when they reach the most exciting part, they switch to direct speech to create drama ('...and then she screamed, \"Look out!\"'). Learning to mix these two styles is the final step to mastering conversational English.",
    "stepByStep": "1. <strong>Summarize the setup:</strong> Use reported speech to compress the boring details ('He told me he was tired').<br>2. <strong>Combine clauses:</strong> Don't repeat 'he said'. Use 'and' ('He said he was tired and wanted to go home').<br>3. <strong>Deliver the punchline:</strong> Switch to direct quotes for the most important line ('Then he said, \"I quit!\"').",
    "indonesianLearnerWarning": "Avoid the habit of starting every sentence in a story with 'Terus dia bilang...' (Then he said...). Use conjunctions to connect reported ideas smoothly.",
    "practicePrompts": [
      "Summarize a recent conversation you had using only reported speech.",
      "Now, add one direct quote to the end of that summary to make it interesting."
    ],
    "classroomUse": "<strong>Teacher Tip:</strong> Have students tell a story about a funny misunderstanding. They must use reported speech for the buildup, and one direct quote for the climax.",
    "quickComparison": "<strong>Boring:</strong> He said A. He said B. He said C. <strong>Natural:</strong> He explained A and B, but then shouted, \\\"C!\\\"",
    "summary": [
      "Reported speech is for summarizing.",
      "Direct speech is for drama and exact quotes.",
      "Mix them to sound like a natural storyteller.",
      "Avoid repeating 'he said' by joining ideas with 'and'."
    ]
  },
  {
    "id": "grammar-common-reported-speech-mistakes",
    "backHref": "reported-speech.html",
    "backLabel": "Back to Reported Speech",
    "title": "Common Reported Speech Mistakes",
    "skill": "Grammar",
    "category": "Reported Speech",
    "level": "Advanced",
    "description": "Repair common errors and use a final checklist to get it right.",
    "learningGoals": [
      "Identify the top 5 mistakes learners make with reported speech.",
      "Apply a mental checklist to self-correct before speaking."
    ],
    "meaning": "Reported speech requires you to juggle several grammar rules at once: verbs, tenses, pronouns, and time words. Because of this high 'cognitive load', mistakes are very common. This lesson acts as your final repair manual.",
    "keyIdeas": [
      "Say vs Tell is the most frequent error.",
      "Forgetting to backshift tenses is the second most common.",
      "Keeping question word order in reported questions is a classic trap."
    ],
    "patterns": [
      {
        "name": "The Mental Checklist",
        "formula": "Verb Choice -> Pronouns -> Tense Shift -> Time Words",
        "examples": [
          {
            "en": "Direct: \\\"Are you leaving tomorrow?\\\"",
            "id": "Langsung: \\\"Apakah kamu berangkat besok?\\\"",
            "explanation": "A question with a future time word."
          },
          {
            "en": "Checklist applied: He asked (Verb) if I (Pronoun) was leaving (Tense) the next day (Time).",
            "id": "Penerapan: Dia bertanya apakah saya akan berangkat keesokan harinya.",
            "explanation": "All four parts of the checklist were applied correctly."
          }
        ]
      }
    ],
    "commonMistakes": [
      {
        "wrong": "He said me that he was tired.",
        "correct": "He told me that he was tired.",
        "explanation": "Mistake 1: Say vs Tell. Use 'tell' with a person object."
      },
      {
        "wrong": "She asked where is the bank.",
        "correct": "She asked where the bank was.",
        "explanation": "Mistake 2: Question word order. Flatten it to Subject + Verb."
      },
      {
        "wrong": "He suggested me to go.",
        "correct": "He suggested going.",
        "explanation": "Mistake 3: Suggest grammar. Never use 'suggest someone to'."
      },
      {
        "wrong": "He said he will call me.",
        "correct": "He said he would call me.",
        "explanation": "Mistake 4: Modal backshift. 'Will' must become 'would'."
      }
    ],
    "introduction": "You have learned all the pieces of reported speech: the reporting verbs, the tense backshifting, the pronoun updates, and the special rules for questions and commands. But when you are speaking in real time, your brain has to process all these rules in a split second!<br><br>It is completely normal to make mistakes. Even advanced speakers sometimes trip over their words. The difference is that advanced speakers know how to catch their mistakes. By reviewing the top errors, you can create a mental checklist to diagnose and repair your own sentences.",
    "stepByStep": "Your Final Checklist:<br>1. <strong>The Verb:</strong> Did I use 'say', 'tell', or 'ask' correctly?<br>2. <strong>The Bridge:</strong> Do I need 'that', 'if', a WH-word, or 'to'?<br>3. <strong>The Subject:</strong> Did I change 'I/You' to match the real person?<br>4. <strong>The Tense:</strong> Did I take one step backward in time?<br>5. <strong>The Time Word:</strong> Did I change 'tomorrow' or 'here' if needed?",
    "indonesianLearnerWarning": "Because Indonesian grammar is much lighter in this area, your brain will constantly try to skip steps 4 and 5 (Tenses and Time Words). You must force yourself to pause and calculate the time shift before you finish the sentence.",
    "practicePrompts": [
      "Fix this: He told that he is busy.",
      "Fix this: She asked what do I want."
    ],
    "classroomUse": "<strong>Teacher Tip:</strong> Play 'Grammar Doctor'. Write 5 broken sentences on the board. Students must diagnose the specific 'disease' (e.g., 'Say/Tell confusion', 'Failed Backshift') and prescribe the cure.",
    "quickComparison": "<strong>Broken:</strong> He said me he will go. <strong>Repaired:</strong> He told me he would go.",
    "summary": [
      "Always check your Say vs Tell choice.",
      "Always flatten questions into statements.",
      "Always backshift your tenses (unless it's a general truth).",
      "Use the 5-step mental checklist to self-correct."
    ]
  }
];

const endBracket = '];';
const endBracketIndex = content.lastIndexOf(endBracket);

if (endBracketIndex !== -1) {
  let insertion = '';
  for (const lesson of newLessons) {
    insertion += JSON.stringify(lesson, null, 2) + ',\n';
  }
  content = content.substring(0, endBracketIndex) + insertion + content.substring(endBracketIndex);
  fs.writeFileSync(lessonsPath, content, 'utf8');
  console.log('Script RS 4 complete.');
} else {
  console.log('Could not find end bracket.');
}
