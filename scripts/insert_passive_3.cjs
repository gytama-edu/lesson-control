const fs = require('fs');
const path = require('path');

const lessonsPath = path.join(__dirname, '..', 'data', 'lessons.js');
let content = fs.readFileSync(lessonsPath, 'utf8');

const updatedLessons = {
  lesson_grammar_passive_for_processes: `{
  "id": "grammar-passive-for-processes",
  "backHref": "passive-voice.html",
  "backLabel": "Back to Passive Voice",
  "title": "Passive for Processes",
  "skill": "Grammar",
  "category": "Passive Voice",
  "level": "Upper-Intermediate",
  "description": "Explain steps in a process where the action matters more than the doer.",
  "learningGoals": [
    "Understand why passive voice is ideal for describing processes.",
    "Learn to sequence passive steps logically (First, Next, Then).",
    "Apply present simple passive to describe manufacturing or natural processes."
  ],
  "meaning": "When we explain how something is made or how a system works (a process), the people doing the work are usually less important than the steps themselves. Passive voice allows us to focus entirely on the materials, the product, and the sequence of actions.",
  "keyIdeas": [
    "Used in science, manufacturing, recipes, and technical writing.",
    "Present Simple Passive is the most common tense used for general processes.",
    "Sequence words (First, Next, Then, Finally) help connect the passive sentences clearly."
  ],
  "patterns": [
    {
      "name": "Describing a Process",
      "formula": "Sequence word + Subject + am/is/are + Verb 3",
      "examples": [
        {
          "en": "First, the tea leaves are picked by hand.",
          "id": "Pertama, daun teh dipetik dengan tangan.",
          "explanation": "Focuses on the leaves, not the farmers."
        },
        {
          "en": "Next, they are dried in the sun.",
          "id": "Selanjutnya, daun-daun tersebut dijemur di bawah sinar matahari.",
          "explanation": "Continues the process focusing on the product."
        },
        {
          "en": "Then, the dried leaves are packed into boxes.",
          "id": "Kemudian, daun kering tersebut dikemas ke dalam kotak.",
          "explanation": "Clear step-by-step description."
        },
        {
          "en": "Finally, the boxes are shipped to supermarkets.",
          "id": "Akhirnya, kotak-kotak tersebut dikirim ke supermarket.",
          "explanation": "The end of the process."
        }
      ]
    }
  ],
  "commonMistakes": [
    {
      "wrong": "First, the farmers pick the tea. Next, they dry it. Then, they pack it.",
      "correct": "First, the tea is picked. Next, it is dried. Then, it is packed.",
      "explanation": "While active voice is grammatical, it focuses too much on 'the farmers'. For technical descriptions or IELTS Task 1, passive voice is the standard expected style."
    },
    {
      "wrong": "Next, the leaves is dried.",
      "correct": "Next, the leaves are dried.",
      "explanation": "Pay attention to subject-verb agreement. 'Leaves' is plural."
    }
  ],
  "introduction": "If you watch a documentary about how chocolate is made, the narrator won't say, 'A man harvests the cocoa pods. Then another man opens them. Then a machine crushes them.' That focuses too much on the workers and machines, and not enough on the chocolate!<br><br>Instead, the narrator will say, 'The cocoa pods are harvested. Then they are opened, and the beans are crushed.' This is the power of the passive voice in describing processes. It keeps the spotlight exactly where it belongs: on the product going through the steps.<br><br>This skill is essential for technical writing, science reports, and is a key requirement if you are preparing for exams like the IELTS Academic Writing Task 1.",
  "stepByStep": "1. <strong>Identify the material:</strong> Make it the subject (e.g., 'The beans').<br>2. <strong>Add a sequence word:</strong> (e.g., 'First', 'Next').<br>3. <strong>Apply passive structure:</strong> (e.g., 'First, the beans are crushed.').<br>4. <strong>Continue:</strong> Keep the focus on the material in the next steps.",
  "indonesianLearnerWarning": "In Indonesian, describing a process with 'di-' (dipetik, dikeringkan, dikemas) is very natural. In English, you must consciously remember the 'be' verb for every single step. Don't let your English revert to active voice halfway through the description."
}`,

  lesson_grammar_passive_for_news_reports: `{
  "id": "grammar-passive-for-news-reports",
  "backHref": "passive-voice.html",
  "backLabel": "Back to Passive Voice",
  "title": "Passive for News and Reports",
  "skill": "Grammar",
  "category": "Passive Voice",
  "level": "Upper-Intermediate",
  "description": "Understand why passive voice is common in news reporting.",
  "learningGoals": [
    "Understand why journalists use passive voice to sound objective.",
    "Recognize common passive structures in news headlines and articles.",
    "Apply passive voice to report events without naming a specific doer."
  ],
  "meaning": "In news reporting, journalists often use passive voice to maintain an objective tone, to focus on the victims or the event itself, or because the person responsible is unknown or legally protected.",
  "keyIdeas": [
    "Passive voice sounds more formal and objective than active voice.",
    "It allows reporters to state facts without assigning blame (e.g., 'Mistakes were made').",
    "It is used when the event is more important than who caused it."
  ],
  "patterns": [
    {
      "name": "Objective Reporting",
      "formula": "Subject (Victim/Event) + be + Verb 3",
      "examples": [
        {
          "en": "Three people were injured in the accident.",
          "id": "Tiga orang terluka dalam kecelakaan tersebut.",
          "explanation": "Focuses on the victims, not the driver who caused it."
        },
        {
          "en": "The building was destroyed by the fire.",
          "id": "Bangunan tersebut hancur oleh api.",
          "explanation": "Focuses on the tragedy."
        },
        {
          "en": "A new law has been passed.",
          "id": "Sebuah undang-undang baru telah disahkan.",
          "explanation": "Focuses on the law, rather than the specific politicians."
        },
        {
          "en": "The suspect is being questioned by the police.",
          "id": "Tersangka sedang diperiksa oleh polisi.",
          "explanation": "Present continuous passive. Focus on the suspect."
        },
        {
          "en": "Mistakes were made during the investigation.",
          "id": "Kesalahan-kesalahan dibuat selama penyelidikan.",
          "explanation": "A classic PR phrase to avoid saying 'We made mistakes'."
        }
      ]
    }
  ],
  "commonMistakes": [
    {
      "wrong": "The fire destroyed the building.",
      "correct": "The building was destroyed by the fire.",
      "explanation": "Active voice is okay, but passive is often preferred in news to emphasize the impact on the subject (the building)."
    },
    {
      "wrong": "Three people was injured.",
      "correct": "Three people were injured.",
      "explanation": "Remember to match plural subjects ('people') with plural 'be' verbs ('were')."
    }
  ],
  "introduction": "When you read a newspaper or watch a news broadcast, you will notice a specific style of language. A journalist rarely says, 'A bad driver injured three people today.' Instead, they say, 'Three people were injured today.'<br><br>Why? Because the focus of the news is the tragedy and the victims, not the driver. Passive voice allows journalists to structure their sentences around what is most important or dramatic.<br><br>Furthermore, passive voice helps maintain an objective, professional tone. It is also used carefully by public relations teams and politicians to avoid direct blame, using famous phrases like 'Mistakes were made' rather than 'I made a mistake'.",
  "stepByStep": "1. <strong>Identify the 'headline' focus:</strong> What is the most important part of the story? (e.g., 'A new law').<br>2. <strong>Make it the subject:</strong> Start the sentence with it.<br>3. <strong>Apply the appropriate tense:</strong> Use Present Perfect ('has been passed') for recent news, or Past Simple ('was passed') for finished events.",
  "indonesianLearnerWarning": "Indonesian news also heavily relies on passive structures (e.g., 'Telah ditemukan...'). When translating these concepts, ensure you don't drop the 'be' verb in English (e.g., 'Has been found', not 'Has found')."
}`,

  lesson_grammar_passive_for_formal_instructions: `{
  "id": "grammar-passive-for-formal-instructions",
  "backHref": "passive-voice.html",
  "backLabel": "Back to Passive Voice",
  "title": "Passive for Formal Instructions",
  "skill": "Grammar",
  "category": "Passive Voice",
  "level": "Upper-Intermediate",
  "description": "Use passive voice to make instructions sound formal and official.",
  "learningGoals": [
    "Understand the tone difference between active and passive instructions.",
    "Use passive voice for rules, signs, and manuals.",
    "Apply modal verbs with passive voice for instructions."
  ],
  "meaning": "While everyday instructions use the imperative (e.g., 'Turn off your phone'), formal instructions, rules, and signs often use passive voice (e.g., 'Phones must be turned off'). This makes the rule sound more objective, official, and less like a personal command.",
  "keyIdeas": [
    "Passive instructions feel less personal and more like a general rule.",
    "They are common in manuals, exams, legal documents, and public signs.",
    "They often use modals like 'must be', 'should be', or 'are to be'."
  ],
  "patterns": [
    {
      "name": "Formal Rules and Signs",
      "formula": "Subject + must/should be + Verb 3",
      "examples": [
        {
          "en": "All phones must be turned off during the exam.",
          "id": "Semua ponsel harus dimatikan selama ujian.",
          "explanation": "Sounds more official than 'Turn off your phone'."
        },
        {
          "en": "Payments should be made by the 5th of every month.",
          "id": "Pembayaran sebaiknya dilakukan sebelum tanggal 5 setiap bulannya.",
          "explanation": "A polite but firm rule in a contract."
        },
        {
          "en": "Hard hats must be worn in this area.",
          "id": "Helm proyek harus dipakai di area ini.",
          "explanation": "A standard safety sign."
        },
        {
          "en": "Applications must be submitted online.",
          "id": "Aplikasi harus diserahkan secara online.",
          "explanation": "A formal administrative instruction."
        }
      ]
    }
  ],
  "commonMistakes": [
    {
      "wrong": "You must to turn off your phone.",
      "correct": "All phones must be turned off.",
      "explanation": "Using 'you' can sound too direct or conversational for an official sign. Passive voice removes 'you' and focuses on the object (phones)."
    },
    {
      "wrong": "Hard hats must wear.",
      "correct": "Hard hats must be worn.",
      "explanation": "The hard hats don't wear themselves. You need 'be + Verb 3'."
    }
  ],
  "introduction": "Imagine you are writing the rules for a university examination hall. If you write, 'You must turn off your phone,' it sounds a bit like a teacher talking directly to a naughty student. It's personal.<br><br>To make the rule sound like an unchangeable, official policy that applies to everyone, you use passive voice: 'All phones must be turned off.'<br><br>By removing the word 'you' and focusing on the object ('phones'), the instruction feels more professional, objective, and authoritative. This is why you see passive voice on signs, in legal contracts, in manuals, and in official communications.",
  "stepByStep": "1. <strong>Identify the object of the rule:</strong> What needs to be managed? (e.g., 'Payments').<br>2. <strong>Choose a modal:</strong> Use 'must' for strong rules, 'should' for strong advice.<br>3. <strong>Add 'be' + Verb 3:</strong> ('Payments must be made').",
  "indonesianLearnerWarning": "In Indonesian, signs are often active imperatives ('Harap matikan HP'). In English, while 'Please turn off your phone' is fine, formal settings strongly prefer the passive 'Phones must be turned off'."
}`,

  lesson_grammar_passive_unknown_unimportant_doer: `{
  "id": "grammar-passive-unknown-unimportant-doer",
  "backHref": "passive-voice.html",
  "backLabel": "Back to Passive Voice",
  "title": "Unknown or Unimportant Doers",
  "skill": "Grammar",
  "category": "Passive Voice",
  "level": "Intermediate",
  "description": "Learn how to express ideas when you don't know who did the action.",
  "learningGoals": [
    "Identify situations where the doer is unknown.",
    "Identify situations where the doer is obvious or unimportant.",
    "Use passive voice to solve the problem of missing information."
  ],
  "meaning": "Sometimes we simply don't know who did something, or the answer is so obvious that saying it is a waste of time. In these cases, active voice is awkward, but passive voice provides an elegant solution.",
  "keyIdeas": [
    "If you don't know who did it, use passive to avoid saying 'Someone' or 'They'.",
    "If everyone knows who did it (e.g., police arrest, doctors operate), use passive.",
    "Omit the 'by-agent' entirely."
  ],
  "patterns": [
    {
      "name": "The Unknown Doer",
      "formula": "Subject + be + Verb 3",
      "examples": [
        {
          "en": "My bicycle was stolen last night.",
          "id": "Sepeda saya dicuri tadi malam.",
          "explanation": "We don't know who stole it. 'Someone stole my bicycle' is less natural."
        },
        {
          "en": "This ancient temple was built 2,000 years ago.",
          "id": "Kuil kuno ini dibangun 2.000 tahun yang lalu.",
          "explanation": "We don't know the specific names of the builders."
        }
      ]
    },
    {
      "name": "The Obvious Doer",
      "formula": "Subject + be + Verb 3",
      "examples": [
        {
          "en": "The thief was arrested.",
          "id": "Pencuri itu ditangkap.",
          "explanation": "It is obvious that the police arrested him."
        },
        {
          "en": "The patient was operated on yesterday.",
          "id": "Pasien tersebut dioperasi kemarin.",
          "explanation": "It is obvious that a surgeon did it."
        },
        {
          "en": "The streets are cleaned every night.",
          "id": "Jalan-jalan dibersihkan setiap malam.",
          "explanation": "The specific street cleaners are unimportant to the message."
        }
      ]
    }
  ],
  "commonMistakes": [
    {
      "wrong": "They arrested the thief.",
      "correct": "The thief was arrested.",
      "explanation": "Using 'They' for obvious doers (like police) is grammatically okay but sounds informal and vague. Passive is much better."
    },
    {
      "wrong": "Someone stole my bicycle.",
      "correct": "My bicycle was stolen.",
      "explanation": "'Someone' adds no information. The passive version is more focused on what matters."
    }
  ],
  "introduction": "Imagine you walk outside and your bicycle is missing. You don't know who took it. You could run inside and say, 'Someone stole my bicycle!' This is grammatically correct, but the word 'someone' is basically useless information.<br><br>English gives us a better tool for this situation: the passive voice. By saying 'My bicycle was stolen,' you remove the need for a 'doer' entirely. You solve the problem of missing information by simply focusing on the object.<br><br>We do the same thing when the doer is too obvious. If you say, 'The police arrested the thief,' you are wasting words. Who else arrests thieves? Say, 'The thief was arrested.' It is cleaner, faster, and sounds much more natural.",
  "stepByStep": "1. <strong>Is the doer unknown or obvious?</strong> (e.g., 'someone' or 'the police').<br>2. <strong>If yes:</strong> Drop the doer.<br>3. <strong>Focus on the receiver:</strong> Make the receiver the subject ('My bicycle').<br>4. <strong>Apply passive structure:</strong> ('My bicycle was stolen').",
  "indonesianLearnerWarning": "Indonesian also drops obvious agents (e.g., 'Pencuri itu ditangkap'). However, translating 'someone stole it' to 'seseorang mencurinya' is common in Indonesian. In English, train yourself to prefer the passive ('It was stolen')."
}`
};

for (const [key, jsonContent] of Object.entries(updatedLessons)) {
  const startMarker = 'const ' + key + ' = {';
  const endMarker = '};';
  
  const startIndex = content.indexOf(startMarker);
  if (startIndex === -1) {
    const exportIndex = content.lastIndexOf('export {');
    const newDecl = 'const ' + key + ' = ' + jsonContent + ';\n\n';
    content = content.substring(0, exportIndex) + newDecl + content.substring(exportIndex);
    
    // removed
    // removed
    // removed
    // removed
  } else {
    let endIndex = content.indexOf(endMarker, startIndex);
    if (endIndex === -1) {
      console.error('Could not find end of ' + key);
      continue;
    }
    endIndex += endMarker.length;
    const replacement = 'const ' + key + ' = ' + jsonContent + ';';
    content = content.substring(0, startIndex) + replacement + content.substring(endIndex);
  }
}

fs.writeFileSync(lessonsPath, content, 'utf8');
console.log('Script 3 complete.');
