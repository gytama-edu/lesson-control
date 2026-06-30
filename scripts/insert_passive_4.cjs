const fs = require('fs');
const path = require('path');

const lessonsPath = path.join(__dirname, '..', 'data', 'lessons.js');
let content = fs.readFileSync(lessonsPath, 'utf8');

const updatedLessons = {
  lesson_grammar_modal_passive: `{
  "id": "grammar-modal-passive",
  "backHref": "passive-voice.html",
  "backLabel": "Back to Passive Voice",
  "title": "Modal Passive",
  "skill": "Grammar",
  "category": "Passive Voice",
  "level": "Advanced",
  "description": "Combine modal verbs with passive voice for richer meanings.",
  "learningGoals": [
    "Learn how to structure sentences using modals + passive voice.",
    "Express possibility, ability, advice, and obligation in the passive.",
    "Understand past modal passives (should have been)."
  ],
  "meaning": "Modal verbs (can, could, should, must, might) add meaning like ability, advice, or obligation. By combining them with passive voice, we can say things like 'It can be done' or 'It must be finished'.",
  "keyIdeas": [
    "Present/Future Modal Passive: Modal + be + Verb 3.",
    "Past Modal Passive: Modal + have been + Verb 3.",
    "The word 'be' or 'have been' never changes form after a modal."
  ],
  "patterns": [
    {
      "name": "Present/Future Modal Passive",
      "formula": "Subject + modal + be + Verb 3",
      "examples": [
        {
          "en": "The problem can be solved.",
          "id": "Masalah tersebut dapat diselesaikan.",
          "explanation": "Ability/Possibility."
        },
        {
          "en": "The forms must be signed.",
          "id": "Formulir-formulir tersebut harus ditandatangani.",
          "explanation": "Strong obligation."
        },
        {
          "en": "The package might be delayed.",
          "id": "Paket tersebut mungkin tertunda.",
          "explanation": "Possibility."
        }
      ]
    },
    {
      "name": "Past Modal Passive",
      "formula": "Subject + modal + have been + Verb 3",
      "examples": [
        {
          "en": "The door should have been locked.",
          "id": "Pintu tersebut seharusnya dikunci.",
          "explanation": "Regret/Criticism about a past mistake."
        },
        {
          "en": "The flight might have been cancelled.",
          "id": "Penerbangan tersebut mungkin telah dibatalkan.",
          "explanation": "Past possibility."
        }
      ]
    }
  ],
  "commonMistakes": [
    {
      "wrong": "The problem can solved.",
      "correct": "The problem can be solved.",
      "explanation": "You must include 'be' after the modal."
    },
    {
      "wrong": "The door should be locked yesterday.",
      "correct": "The door should have been locked yesterday.",
      "explanation": "For past regrets, you must use 'have been', not just 'be'."
    }
  ],
  "introduction": "When managing a project, you might look at a difficult task and say, 'We can solve this.' But what if you are the boss, looking at the big picture? You would say, 'This problem can be solved.'<br><br>By combining modal verbs (can, must, should) with the passive voice, you can express ability, obligation, and advice while keeping the focus entirely on the work. 'The report must be finished.' 'The email should be sent.'<br><br>These structures are the backbone of professional communication, problem-solving, and rule-making. They allow you to be firm and clear without pointing fingers.",
  "stepByStep": "1. <strong>Identify the receiver:</strong> ('The problem').<br>2. <strong>Add the modal:</strong> ('The problem can').<br>3. <strong>Add 'be' (or 'have been' for past):</strong> ('The problem can be').<br>4. <strong>Use Verb 3:</strong> ('The problem can be solved').",
  "indonesianLearnerWarning": "Indonesian translates 'dapat diselesaikan' as 'can + Verb 3' directly (dapat = can, diselesaikan = Verb 3). Don't forget that English requires the bridge word 'be' between the modal and the past participle."
}`,

  lesson_grammar_passive_with_two_objects: `{
  "id": "grammar-passive-with-two-objects",
  "backHref": "passive-voice.html",
  "backLabel": "Back to Passive Voice",
  "title": "Passive with Two Objects",
  "skill": "Grammar",
  "category": "Passive Voice",
  "level": "Advanced",
  "description": "Learn how to make sentences passive when the verb has two objects.",
  "learningGoals": [
    "Identify sentences with two objects (direct and indirect).",
    "Learn the two different ways to make these sentences passive.",
    "Understand which passive form is more common in natural English."
  ],
  "meaning": "Some verbs, like 'give', 'send', 'offer', and 'teach', often have two objects: a person (who receives it) and a thing (what is given). Because there are two objects, we can make two different passive sentences.",
  "keyIdeas": [
    "Active: 'They gave (1) him (2) a prize.'",
    "Passive Option A (focus on person): 'He was given a prize.'",
    "Passive Option B (focus on thing): 'A prize was given to him.'",
    "Option A (making the person the subject) is usually much more common and natural."
  ],
  "patterns": [
    {
      "name": "Person as Subject (Most Common)",
      "formula": "Person + be + Verb 3 + Thing",
      "examples": [
        {
          "en": "He was given a prize.",
          "id": "Dia diberi hadiah.",
          "explanation": "Focuses on the person who received it. This is very natural in English."
        },
        {
          "en": "I was offered a job.",
          "id": "Saya ditawari pekerjaan.",
          "explanation": "Focuses on 'I'."
        },
        {
          "en": "We were taught English by Mr. Smith.",
          "id": "Kami diajari bahasa Inggris oleh Pak Smith.",
          "explanation": "Focuses on the students ('we')."
        }
      ]
    },
    {
      "name": "Thing as Subject (More Formal/Specific)",
      "formula": "Thing + be + Verb 3 + to/for + Person",
      "examples": [
        {
          "en": "A prize was given to him.",
          "id": "Sebuah hadiah diberikan kepadanya.",
          "explanation": "Focuses heavily on the prize itself."
        },
        {
          "en": "A job was offered to me.",
          "id": "Sebuah pekerjaan ditawarkan kepada saya.",
          "explanation": "Focuses on the job."
        }
      ]
    }
  ],
  "commonMistakes": [
    {
      "wrong": "A prize was given him.",
      "correct": "A prize was given to him.",
      "explanation": "If you make the thing the subject, you usually must use 'to' or 'for' before the person."
    },
    {
      "wrong": "He was given to a prize.",
      "correct": "He was given a prize.",
      "explanation": "Do not use 'to' if the person is the subject."
    }
  ],
  "introduction": "When a company offers you a job, they give you an offer. The active sentence is: 'The company offered me a job.' Here, 'me' is the person receiving it, and 'a job' is the thing being given. There are two objects.<br><br>So, how do we make this passive? We have two choices. We can focus on the job: 'A job was offered to me.' Or we can focus on you: 'I was offered a job.'<br><br>While both are grammatically correct, native English speakers heavily prefer making the person the subject. 'I was offered a job' sounds much more natural and conversational than 'A job was offered to me.' Mastering this preference will make your English sound much more fluent.",
  "stepByStep": "1. <strong>Identify the person and the thing:</strong> ('me' and 'a job').<br>2. <strong>Prefer the person:</strong> Make the person the subject ('I').<br>3. <strong>Apply passive structure:</strong> ('I was offered').<br>4. <strong>Add the thing:</strong> ('I was offered a job').",
  "indonesianLearnerWarning": "Indonesian has a very similar structure ('Saya diberi hadiah' vs 'Hadiah diberikan kepada saya'). Rely on this instinct, and remember that just like in Indonesian, 'Saya diberi' is usually the more natural choice."
}`,

  lesson_grammar_get_passive: `{
  "id": "grammar-get-passive",
  "backHref": "passive-voice.html",
  "backLabel": "Back to Passive Voice",
  "title": "Get Passive",
  "skill": "Grammar",
  "category": "Passive Voice",
  "level": "Advanced",
  "description": "Explore a more informal and conversational way to form the passive voice.",
  "learningGoals": [
    "Understand the difference between 'be' passive and 'get' passive.",
    "Learn when it is appropriate to use 'get' instead of 'be'.",
    "Identify common expressions that use the 'get' passive."
  ],
  "meaning": "In informal, spoken English, we often use the verb 'get' instead of 'be' to form the passive voice. It usually describes an action that happens unexpectedly, accidentally, or involves some effort or change of state.",
  "keyIdeas": [
    "Structure: Subject + get/got + Verb 3.",
    "It is more dynamic and action-focused than the 'be' passive.",
    "It is strictly for informal or conversational use. Do not use it in formal writing."
  ],
  "patterns": [
    {
      "name": "The Get Passive",
      "formula": "Subject + get(s)/got/will get + Verb 3",
      "examples": [
        {
          "en": "My car got stolen last night.",
          "id": "Mobil saya kecurian tadi malam.",
          "explanation": "Unexpected, negative event. More conversational than 'was stolen'."
        },
        {
          "en": "They got married in Spain.",
          "id": "Mereka menikah di Spanyol.",
          "explanation": "A change of state. Very common fixed expression."
        },
        {
          "en": "He got fired from his job.",
          "id": "Dia dipecat dari pekerjaannya.",
          "explanation": "An unexpected action affecting him."
        },
        {
          "en": "The window got broken during the storm.",
          "id": "Jendela itu pecah selama badai.",
          "explanation": "An accident."
        }
      ]
    }
  ],
  "commonMistakes": [
    {
      "wrong": "The new law got passed by the government.",
      "correct": "The new law was passed by the government.",
      "explanation": "Do not use 'get' passive for formal events, news reports, or academic writing. Use 'be' passive instead."
    },
    {
      "wrong": "He got steal his phone.",
      "correct": "His phone got stolen.",
      "explanation": "The 'get' passive still follows passive rules: the receiver must be the subject, followed by Verb 3."
    }
  ],
  "introduction": "If you listen to native English speakers talking in a coffee shop, you might hear them say, 'My car got stolen,' or 'He got fired.' They rarely say, 'My car was stolen,' in a casual chat. Why?<br><br>This is the 'get' passive. It is a conversational shortcut that makes the sentence feel more dynamic, unexpected, or emotional. We use 'get' instead of 'be' (am, is, are, was, were).<br><br>While the 'get' passive is fantastic for sounding fluent and natural in conversation, it has a strict rule: never use it in formal writing. In an essay or a business report, always stick to the standard 'be' passive.",
  "stepByStep": "1. <strong>Is the situation informal?</strong> If yes, proceed.<br>2. <strong>Is it an action, accident, or change?</strong> (e.g., getting fired, getting married).<br>3. <strong>Replace 'be' with 'get/got':</strong> Use 'got' for past tense ('He got fired').<br>4. <strong>Use Verb 3:</strong> Just like normal passive.",
  "indonesianLearnerWarning": "In Indonesian, verbs like 'kecurian', 'kehujanan', or 'terpukul' often carry this exact feeling of an unexpected or accidental action. The 'get' passive is the closest English equivalent to these forms."
}`,

  lesson_grammar_common_passive_voice_mistakes: `{
  "id": "grammar-common-passive-voice-mistakes",
  "backHref": "passive-voice.html",
  "backLabel": "Back to Passive Voice",
  "title": "Common Passive Voice Mistakes",
  "skill": "Grammar",
  "category": "Passive Voice",
  "level": "Advanced",
  "description": "Repair common errors and solidify your understanding of passive voice.",
  "learningGoals": [
    "Identify missing 'be' verbs in passive sentences.",
    "Correct errors with intransitive verbs that cannot be passive.",
    "Recognize when active voice is a better choice."
  ],
  "meaning": "Even advanced learners make mistakes with the passive voice. This lesson reviews the most common traps, from structural errors to stylistic problems.",
  "keyIdeas": [
    "Never forget the 'be' verb.",
    "You cannot make a passive sentence if the verb has no object (intransitive verbs like 'happen', 'arrive', 'sleep').",
    "Don't overuse passive voice. If the doer is important, use active voice."
  ],
  "patterns": [
    {
      "name": "Missing the 'Be' Verb",
      "formula": "Error: Subject + Verb 3. Correct: Subject + be + Verb 3.",
      "examples": [
        {
          "en": "Wrong: The house built in 1990.",
          "id": "Salah",
          "explanation": "The house cannot build itself."
        },
        {
          "en": "Right: The house was built in 1990.",
          "id": "Benar",
          "explanation": "The 'be' verb is required."
        }
      ]
    },
    {
      "name": "Passive with Intransitive Verbs",
      "formula": "Verbs without objects (happen, occur, arrive, sleep, die) cannot be passive.",
      "examples": [
        {
          "en": "Wrong: The accident was happened yesterday.",
          "id": "Salah",
          "explanation": "'Happen' has no object. It cannot be passive."
        },
        {
          "en": "Right: The accident happened yesterday.",
          "id": "Benar",
          "explanation": "Use active voice."
        },
        {
          "en": "Wrong: He was died last year.",
          "id": "Salah",
          "explanation": "'Die' has no object."
        },
        {
          "en": "Right: He died last year.",
          "id": "Benar",
          "explanation": "Active voice."
        }
      ]
    }
  ],
  "commonMistakes": [
    {
      "wrong": "The car was repaired by the mechanic.",
      "correct": "The mechanic repaired the car. (If you want to focus on the mechanic's good work)",
      "explanation": "Overusing passive voice makes writing heavy and weak. Only use it when the receiver is more important than the doer."
    }
  ],
  "introduction": "You have learned all the rules of the passive voice. You know the structures, the tenses, and the reasons to use it. But in the heat of a conversation or an exam, mistakes still happen.<br><br>The most common mistake is simply forgetting the 'be' verb, especially in tenses like the present perfect or future. Another major trap is trying to force an intransitive verb (like 'happen' or 'arrive') into a passive structure. Since these verbs don't have objects, they can never be passive.<br><br>Finally, the biggest stylistic mistake is using passive voice too much. It is a tool, not a rule. If you know who did the action, and that person is important, be bold: use the active voice.",
  "stepByStep": "1. <strong>Check the verb:</strong> Does it need an object? If no (like 'happen'), it MUST be active.<br>2. <strong>Check the structure:</strong> Do you have a 'be' verb AND Verb 3?<br>3. <strong>Check the style:</strong> Is the doer important? If yes, change it back to active voice.",
  "indonesianLearnerWarning": "Because 'terjadi' feels like a passive word in Indonesian (ter- prefix), many learners say 'was happened' or 'was occurred'. Memorize this rule: 'Happen', 'occur', and 'die' are always active in English."
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
console.log('Script 4 complete.');
