import fs from 'fs';
import { lessons } from '../data/lessons.js';

const updated = [
  {
    "id": "grammar-what-is-a-sentence",
    "backHref": "sentence-structure.html",
    "backLabel": "Back to Sentence Structure",
    "title": "What is a Sentence?",
    "skill": "Grammar",
    "category": "Basic Sentence Building",
    "level": "Beginner",
    "description": "Learn the absolute minimum requirements to build a complete English sentence.",
    "introduction": "Imagine trying to build a car. You need an engine and wheels. If you have a beautiful steering wheel but no engine, the car won't move. English sentences work the same way. A sentence is a machine that delivers a complete thought. To make that machine run, you must have two specific parts: someone doing an action, and the action itself. If you are missing one, your sentence is broken. Let's learn how to build the foundation.",
    "learningGoals": [
      "Understand that a sentence must contain a complete thought.",
      "Identify the two mandatory parts of a sentence: Subject and Verb.",
      "Recognize that capitalization and punctuation are mandatory."
    ],
    "meaning": "A sentence is a group of words that expresses a complete idea. It tells the listener exactly who did what.",
    "uses": [
      "Building the foundation of all spoken and written communication."
    ],
    "patterns": [
      {
        "name": "The Core Sentence",
        "formula": "Subject (Who/What) + Verb (Action/State)",
        "explanation": "Example: Birds fly. John sleeps. The car broke."
      }
    ],
    "stepByStep": "How to build the simplest sentence in the world:<br><br>1. <strong>Think of an actor (Subject):</strong> 'Dogs'.<br>2. <strong>Think of an action (Verb):</strong> 'bark'.<br>3. <strong>Put them together:</strong> 'Dogs bark.'<br>4. <strong>Check your punctuation:</strong> Start with a capital letter ('D') and end with a period ('.').<br>5. <strong>Result:</strong> 'Dogs bark.' (A tiny, perfect sentence!).",
    "examples": [
      { "type": "Basic Fact", "sentence": "Babies cry.", "note": "Subject + Verb. Complete thought." },
      { "type": "Action", "sentence": "The sun rises.", "note": "Subject + Verb." },
      { "type": "State of Being", "sentence": "She is.", "note": "Technically a sentence, though usually we add more info." }
    ],
    "commonMistakes": [
      {
        "wrong": "Walking to the store.",
        "correct": "I am walking to the store.",
        "explanation": "Who is walking? The actor is missing! Without a Subject, it is not a sentence; it is just a fragment.",
        "fix": "Always include a Subject."
      },
      {
        "wrong": "The big red dog.",
        "correct": "The big red dog barked.",
        "explanation": "What did the dog do? The action is missing! Without a Verb, it is just a noun phrase, not a sentence.",
        "fix": "Always include a Verb."
      }
    ],
    "quickComparison": "<strong>Phrase vs Sentence:</strong> 'In the morning' (Phrase: No subject, no verb. Incomplete). 'I woke up in the morning' (Sentence: Subject 'I', Verb 'woke').",
    "indonesianLearnerWarning": "In casual Indonesian texting or speaking, dropping the subject is very common ('Lagi makan' = [I am] eating). In English, you MUST include the subject ('I am eating') or the sentence is broken.",
    "practicePrompts": [
      "Is this a sentence? 'A fast car.'",
      "Is this a sentence? 'He ran.'",
      "Correct the mistake: 'Sleeping all day.'",
      "Write a two-word sentence using a noun and a verb."
    ],
    "classroomUse": "<strong>The Sentence Builder:</strong> Teacher writes a list of Subjects (Cats, Rain, Teachers) and Verbs (fall, sleep, speak). Students must match them to create the shortest possible complete sentences.",
    "summary": [
      "A sentence must express a complete thought.",
      "Every sentence MUST have a Subject (the actor).",
      "Every sentence MUST have a Verb (the action).",
      "Always start with a capital letter and end with punctuation."
    ]
  },
  {
    "id": "grammar-subject-and-predicate",
    "backHref": "sentence-structure.html",
    "backLabel": "Back to Sentence Structure",
    "title": "Subject and Predicate",
    "skill": "Grammar",
    "category": "Basic Sentence Building",
    "level": "Beginner",
    "description": "Learn how to divide any sentence into its two main halves.",
    "introduction": "Every English sentence, no matter how long or complicated, can be sliced cleanly in half like an apple. One half tells us WHO the sentence is about. The other half tells us WHAT they did. These two halves are called the Subject and the Predicate. If you learn how to spot the dividing line between them, you will never write a confusing sentence again.",
    "learningGoals": [
      "Identify the Subject (the 'Who/What' half of the sentence).",
      "Identify the Predicate (the 'Action and Everything Else' half of the sentence).",
      "Understand that the Predicate ALWAYS starts with the Verb."
    ],
    "meaning": "The Subject is the noun (and its adjectives) performing the action. The Predicate is the verb (and all its objects and adverbs) describing the action.",
    "uses": [
      "Analyzing sentences to ensure they are grammatically complete."
    ],
    "patterns": [
      {
        "name": "The Great Divide",
        "formula": "[SUBJECT] | [PREDICATE]",
        "explanation": "Example: [The small dog] | [barked loudly at the mailman]."
      }
    ],
    "stepByStep": "How to slice a sentence in half:<br><br>1. <strong>Read the sentence:</strong> 'The tall man with the hat bought a coffee.'<br>2. <strong>Find the action (Verb):</strong> 'bought'.<br>3. <strong>Draw a line right before the verb:</strong> The tall man with the hat | bought a coffee.<br>4. <strong>Left side = Complete Subject.</strong><br>5. <strong>Right side = Complete Predicate.</strong>",
    "examples": [
      { "type": "Short Sentence", "sentence": "[John] | [slept].", "note": "One word subject, one word predicate." },
      { "type": "Long Subject", "sentence": "[The old house on the corner] | [is haunted].", "note": "Everything before 'is' is the subject." },
      { "type": "Long Predicate", "sentence": "[She] | [ran quickly down the street to catch the bus].", "note": "Everything after 'She' is the predicate." }
    ],
    "commonMistakes": [
      {
        "wrong": "The boy who lives next door. Is my friend.",
        "correct": "The boy who lives next door is my friend.",
        "explanation": "Learners often put a period between a long Subject and its Predicate. You cannot separate them with a period!",
        "fix": "Never separate the subject and verb with a period."
      }
    ],
    "quickComparison": "<strong>Simple Subject vs Complete Subject:</strong> 'The big red dog' (Complete Subject). 'Dog' (Simple Subject - the core noun).",
    "indonesianLearnerWarning": "This concept (Subjek dan Predikat) exists in Indonesian too! The main difference is that in English, the Predicate MUST contain a verb (is/am/are/action). In Indonesian, 'Dia tinggi' has no verb in the predicate.",
    "practicePrompts": [
      "Find the dividing line: 'My best friend from school works at a bank.'",
      "Identify the Predicate: 'The cat chased the mouse.'",
      "Identify the Complete Subject: 'Three huge elephants walked past us.'"
    ],
    "classroomUse": "<strong>The Karate Chop:</strong> The teacher writes a long sentence on the board. A student comes up and 'karate chops' the board exactly between the Subject and the Predicate (right before the verb).",
    "summary": [
      "Every sentence has two halves: Subject and Predicate.",
      "The Subject is the actor and its descriptions.",
      "The Predicate is the action and everything that follows it.",
      "The Predicate always begins with the Verb."
    ]
  },
  {
    "id": "grammar-basic-word-order",
    "backHref": "sentence-structure.html",
    "backLabel": "Back to Sentence Structure",
    "title": "Basic Word Order",
    "skill": "Grammar",
    "category": "Basic Sentence Building",
    "level": "Beginner",
    "description": "Understand why S-V-O is the foundation of English clarity.",
    "introduction": "We've learned that you need a Subject and a Predicate. But what order do they go in? In English, the order of words is a matter of life and death for your sentence's meaning. If you mix up the order, 'The man ate the fish' becomes 'The fish ate the man'! The standard order of English is Subject -> Verb -> Object (S-V-O). Let's lock this pattern into your brain.",
    "learningGoals": [
      "Understand that English relies on word order, not word endings, for meaning.",
      "Memorize the S-V-O (Actor-Action-Receiver) pattern.",
      "Learn to never separate the Verb and the Object."
    ],
    "meaning": "Word order dictates exactly who is doing the action and who is receiving it.",
    "uses": [
      "Constructing 80% of all standard English sentences."
    ],
    "patterns": [
      {
        "name": "The SVO Sequence",
        "formula": "Subject (1) + Verb (2) + Object (3)",
        "explanation": "Example: Cats (1) eat (2) mice (3)."
      }
    ],
    "stepByStep": "How to sequence your ideas:<br><br>1. <strong>Who is doing it? (Subject):</strong> 'The company'.<br>2. <strong>What are they doing? (Verb):</strong> 'built'.<br>3. <strong>What is receiving the action? (Object):</strong> 'a new office'.<br>4. <strong>Result:</strong> 'The company built a new office.'<br>5. <strong>Golden Rule:</strong> Keep the Verb and Object glued together.",
    "examples": [
      { "type": "Clear Action", "sentence": "The dog bit the mailman.", "note": "Clear S-V-O." },
      { "type": "Reversed Reality", "sentence": "The mailman bit the dog.", "note": "Same words, totally different meaning." },
      { "type": "With Adverbs", "sentence": "I usually drink coffee in the morning.", "note": "Notice 'drink' and 'coffee' stay together." }
    ],
    "commonMistakes": [
      {
        "wrong": "I like very much this song.",
        "correct": "I like this song very much.",
        "explanation": "You cannot break the magnetic bond between the Verb (like) and the Object (this song).",
        "fix": "Always keep V and O together."
      },
      {
        "wrong": "Went he to the park.",
        "correct": "He went to the park.",
        "explanation": "Subject must come first.",
        "fix": "Start with the Subject."
      }
    ],
    "quickComparison": "<strong>English vs Flexible Languages:</strong> In languages with case endings (like Latin or Russian), word order can change because the word itself tells you if it's the subject. English lost those endings, so position is everything.",
    "indonesianLearnerWarning": "Indonesian uses SVO! This is a huge advantage for you. 'Saya minum kopi' perfectly matches 'I drink coffee'.",
    "practicePrompts": [
      "Put in order: (pizza / ate / John).",
      "Correct the mistake: 'She reads every night a book.'",
      "Change the meaning by swapping two words: 'The car hit the tree.'"
    ],
    "classroomUse": "<strong>The Human Sentence:</strong> Give three students cards: 'The bear', 'chased', 'the hunter'. Have them stand in order. Then swap the outer two students and ask the class how the story changed.",
    "summary": [
      "English uses Subject-Verb-Object (SVO) order.",
      "The Actor comes first, then the Action, then the Receiver.",
      "Changing the word order changes the entire meaning of the sentence.",
      "Never put adverbs between the Verb and the Object."
    ]
  },
  {
    "id": "grammar-subject-verb",
    "backHref": "sentence-structure.html",
    "backLabel": "Back to Sentence Structure",
    "title": "Subject + Verb (SV)",
    "skill": "Grammar",
    "category": "Basic Sentence Building",
    "level": "Beginner",
    "description": "Learn the simplest sentence structure using intransitive verbs.",
    "introduction": "Does every sentence need an Object? No! Some verbs are independent. They don't need to 'do' their action to anything else. Think about the verb 'sleep'. You don't 'sleep' a bed. You just sleep. Verbs that do not need an Object are called Intransitive Verbs. With these verbs, your sentence is complete with just a Subject and a Verb (S-V). Let's look at these self-sufficient actions.",
    "learningGoals": [
      "Understand what an Intransitive verb is (a verb needing no object).",
      "Build complete S-V sentences.",
      "Learn to add adverbs/prepositions after an S-V pattern."
    ],
    "meaning": "An S-V sentence describes an action that is self-contained. It doesn't transfer to a receiver.",
    "uses": [
      "Describing states, motion, and basic bodily functions."
    ],
    "patterns": [
      {
        "name": "The S-V Pattern",
        "formula": "Subject + Intransitive Verb",
        "explanation": "Example: The sun rises. The baby cried. We arrived."
      }
    ],
    "stepByStep": "How to use an S-V pattern:<br><br>1. <strong>Pick an intransitive verb:</strong> sleep, cry, arrive, sneeze, smile.<br>2. <strong>Add a subject:</strong> 'The baby'.<br>3. <strong>Stop right there:</strong> 'The baby smiled.' (It's complete!).<br>4. <strong>Optional: Add details (M-P-T):</strong> 'The baby smiled <em>sweetly at me today</em>.'",
    "examples": [
      { "type": "Basic SV", "sentence": "The glass broke.", "note": "Nobody broke it, it just happened." },
      { "type": "Bodily Function", "sentence": "He sneezed.", "note": "No object needed." },
      { "type": "With Details", "sentence": "They walked to the park quickly.", "note": "SV + Place + Manner." }
    ],
    "commonMistakes": [
      {
        "wrong": "He arrived me at the station.",
        "correct": "He arrived at the station.",
        "explanation": "You cannot add a direct object ('me') to an intransitive verb ('arrive').",
        "fix": "Do not force an object onto a self-contained verb."
      }
    ],
    "quickComparison": "<strong>Intransitive vs Transitive:</strong> Intransitive (SV): 'I sleep.' Transitive (SVO): 'I eat pizza.' Some verbs can be both: 'I eat' (SV) / 'I eat pizza' (SVO).",
    "indonesianLearnerWarning": "Indonesian handles this perfectly naturally ('Saya tidur' = I sleep). Just remember that in English, you often need prepositions if you want to add extra details ('I arrived AT the station', not 'I arrived the station').",
    "practicePrompts": [
      "Is 'smile' transitive or intransitive? Make a sentence.",
      "Correct the mistake: 'The bird flew the sky.' (Hint: needs a preposition).",
      "Expand this SV sentence: 'The sun rose.' -> 'The sun rose [where?] [when?].'"
    ],
    "classroomUse": "<strong>The Verb Sorter:</strong> Give students a list of verbs (kick, sleep, read, sneeze, buy, arrive). They must sort them into 'Needs an Object (SVO)' and 'No Object Needed (SV)'.",
    "summary": [
      "Some verbs do not need an Object. These are Intransitive verbs.",
      "The pattern is simply Subject + Verb (SV).",
      "Common SV verbs: sleep, cry, arrive, happen, smile, sneeze.",
      "You can add details (where, when, how) after the verb using prepositions."
    ]
  },
  {
    "id": "grammar-subject-verb-object",
    "backHref": "sentence-structure.html",
    "backLabel": "Back to Sentence Structure",
    "title": "Subject + Verb + Object (SVO)",
    "skill": "Grammar",
    "category": "Basic Sentence Building",
    "level": "Beginner",
    "description": "Master sentences where an action transfers to a receiver.",
    "introduction": "We just looked at verbs that live alone (SV). But most English verbs are 'Transitive'. This means the action 'transfers' from the actor across to a receiver. You can't just say 'I bought'. The listener will say, 'You bought WHAT?!' The action is incomplete without a target. That target is the Object. Let's master the classic Subject-Verb-Object (SVO) pattern.",
    "learningGoals": [
      "Understand what a Transitive verb is (requires an object).",
      "Identify the Direct Object in a sentence.",
      "Ensure complete thoughts when using transitive verbs."
    ],
    "meaning": "SVO shows a cause and effect. The Subject does an action, and the Object takes the impact of that action.",
    "uses": [
      "Describing interactions, purchases, creations, and destructions."
    ],
    "patterns": [
      {
        "name": "The S-V-O Pattern",
        "formula": "Subject + Transitive Verb + Direct Object",
        "explanation": "Example: She (S) threw (V) the ball (O)."
      }
    ],
    "stepByStep": "How to check if you need an object:<br><br>1. <strong>Say your Subject and Verb:</strong> 'He found.'<br>2. <strong>Ask 'What?' or 'Who?':</strong> 'He found WHAT?'<br>3. <strong>If the question naturally arises, you MUST provide an Object:</strong> 'his keys'.<br>4. <strong>Result:</strong> 'He found his keys.'",
    "examples": [
      { "type": "Physical Action", "sentence": "The boy kicked the ball.", "note": "Impact transfers to the ball." },
      { "type": "Mental Action", "sentence": "I understand the lesson.", "note": "The lesson is the target of understanding." },
      { "type": "Creation", "sentence": "They built a sandcastle.", "note": "The sandcastle is the result of the building." }
    ],
    "commonMistakes": [
      {
        "wrong": "I enjoyed.",
        "correct": "I enjoyed the movie. (Or: I enjoyed myself).",
        "explanation": "'Enjoy' is strictly transitive in English. You must state WHAT you enjoyed.",
        "fix": "Always provide an object for transitive verbs."
      }
    ],
    "quickComparison": "<strong>Direct Object vs Prepositional Phrase:</strong> 'I hit the wall' ('the wall' is a direct object). 'I walked to the wall' ('to the wall' is a place detail, not a direct object).",
    "indonesianLearnerWarning": "In Indonesian, you can sometimes drop the object if it is understood from context ('Saya sudah beli' = I already bought [it]). In English, you must explicitly include the pronoun 'it' ('I already bought IT').",
    "practicePrompts": [
      "Add an object: 'She wants ___.'",
      "Add an object: 'He fixed ___.'",
      "Correct the mistake: 'Did you bring? Yes, I brought.' (Hint: needs 'it')."
    ],
    "classroomUse": "<strong>The 'What/Who' Chain:</strong> Student A says 'I bought'. Student B must ask 'You bought what?!' Student A replies 'I bought a car.' Student B then says 'I met'. Student C asks 'You met who?!'.",
    "summary": [
      "Transitive verbs require a Direct Object to complete their meaning.",
      "The formula is Subject + Verb + Object (SVO).",
      "If you ask 'Who?' or 'What?' after the verb, you need an Object.",
      "Do not drop the Object in English, even if it is obvious (use 'it')."
    ]
  },
  {
    "id": "grammar-subject-verb-complement",
    "backHref": "sentence-structure.html",
    "backLabel": "Back to Sentence Structure",
    "title": "Subject + Verb + Complement (SVC)",
    "skill": "Grammar",
    "category": "Basic Sentence Building",
    "level": "Beginner",
    "description": "Learn to use linking verbs to describe subjects.",
    "introduction": "What if you don't want to talk about an action at all? What if you just want to describe what someone is, or how they feel? 'She is a doctor.' 'He looks tired.' In these sentences, there is no action transferring to an object. Instead, the verb acts like a mirror, reflecting a description back onto the Subject. This pattern is Subject-Verb-Complement (SVC), and it uses special 'linking verbs'.",
    "learningGoals": [
      "Recognize linking verbs (is, am, are, look, feel, seem, become, taste).",
      "Understand that a Complement describes the Subject.",
      "Use adjectives and nouns as Complements."
    ],
    "meaning": "The SVC pattern establishes an identity or a characteristic. It means Subject = Complement.",
    "uses": [
      "Describing identity, emotion, appearance, and physical states."
    ],
    "patterns": [
      {
        "name": "The S-V-C Pattern",
        "formula": "Subject + Linking Verb + Complement (Noun or Adjective)",
        "explanation": "Example: The sky (S) is (V) blue (C). My dad (S) became (V) a teacher (C)."
      }
    ],
    "stepByStep": "How to build an SVC sentence:<br><br>1. <strong>Pick your subject:</strong> 'The soup'.<br>2. <strong>Pick a linking verb (the equals sign):</strong> 'tastes'.<br>3. <strong>Add the description (Complement):</strong> 'salty'.<br>4. <strong>Result:</strong> 'The soup <em>tastes salty</em>.' (Soup = salty).",
    "examples": [
      { "type": "Noun Complement", "sentence": "He is my brother.", "note": "He = brother." },
      { "type": "Adjective Complement", "sentence": "The music sounds loud.", "note": "Music = loud." },
      { "type": "Change of State", "sentence": "The leaves turned red.", "note": "Leaves = red." }
    ],
    "commonMistakes": [
      {
        "wrong": "The food smells deliciously.",
        "correct": "The food smells delicious.",
        "explanation": "Linking verbs reflect back to the noun subject. Nouns are described by adjectives, not adverbs (-ly).",
        "fix": "Always use adjectives after linking verbs."
      }
    ],
    "quickComparison": "<strong>Action vs Linking:</strong> 'She looked at the dog' (Action: SVO). 'She looked tired' (Linking: SVC). Some verbs can be both!",
    "indonesianLearnerWarning": "Indonesian often drops the linking verb entirely ('Dia tinggi' = He tall). You MUST remember to add the 'Be' verb in English ('He IS tall').",
    "practicePrompts": [
      "Complete with a noun complement: 'Barack Obama was ___.'",
      "Complete with an adjective complement: 'This bed feels ___.'",
      "Correct the mistake: 'The flowers smell sweetly.'"
    ],
    "classroomUse": "<strong>The Equals Sign:</strong> Write sentences with missing verbs on the board ('The boy ___ sad'). Give students cards with '=' signs on them. They place the '=' sign in the blank, and then replace it with a linking verb (is, looks, seems).",
    "summary": [
      "Use SVC pattern to describe a Subject, not an action.",
      "Linking verbs (be, look, seem, taste) act like an equals sign (=).",
      "The Complement can be a Noun (He is a doctor) or an Adjective (He is tall).",
      "Never use an adverb (-ly) as a Complement."
    ]
  },
  {
    "id": "grammar-simple-sentences",
    "backHref": "sentence-structure.html",
    "backLabel": "Back to Sentence Structure",
    "title": "Simple Sentences",
    "skill": "Grammar",
    "category": "Sentence Types",
    "level": "Beginner",
    "description": "Understand what defines an independent clause.",
    "introduction": "You have learned how to build S-V, S-V-O, and S-V-C sentences. All of these patterns create what English teachers call a 'Simple Sentence'. But don't let the word 'simple' fool you. A simple sentence doesn't have to be short! It can be long and full of adjectives. What makes it 'simple' is its grammatical engine: it has exactly ONE independent clause. Let's learn how to spot a simple sentence.",
    "learningGoals": [
      "Define an 'Independent Clause' (Subject + Verb + Complete Thought).",
      "Understand that a Simple Sentence contains exactly ONE independent clause.",
      "Recognize that simple sentences can have compound subjects or verbs."
    ],
    "meaning": "A simple sentence contains one core idea. It can stand completely alone and make perfect sense.",
    "uses": [
      "Making clear, direct statements. The building block of all writing."
    ],
    "patterns": [
      {
        "name": "The Independent Clause",
        "formula": "One Subject Group + One Verb Group = One Simple Sentence",
        "explanation": "Example: The big dog barked loudly."
      }
    ],
    "stepByStep": "How to check if it's a simple sentence:<br><br>1. <strong>Find the verbs:</strong> 'The cat ate the food and drank the milk.'<br>2. <strong>Find the subjects:</strong> Who did the eating and drinking? 'The cat'.<br>3. <strong>Count the clauses:</strong> There is only one main actor (The cat) performing a grouped action (ate and drank). This is ONE clause.<br>4. <strong>Result:</strong> It is a Simple Sentence.",
    "examples": [
      { "type": "Short Simple", "sentence": "I ran.", "note": "One subject, one verb." },
      { "type": "Long Simple", "sentence": "The three tired boys slowly walked home in the dark.", "note": "Still only ONE subject group and ONE verb group." },
      { "type": "Compound Subject", "sentence": "John and Mary went to the store.", "note": "Two people, but they act as a single subject unit." },
      { "type": "Compound Verb", "sentence": "I washed and dried the dishes.", "note": "One person doing two actions together. Still one clause." }
    ],
    "commonMistakes": [
      {
        "wrong": "Because I was tired.",
        "correct": "I was tired.",
        "explanation": "If you add a connecting word like 'Because', the clause is no longer independent. It cannot stand alone. It is a fragment.",
        "fix": "Remove the connector to make it a simple sentence."
      }
    ],
    "quickComparison": "<strong>Simple Sentence vs Compound Sentence:</strong> 'John ran and jumped' (Simple: One subject doing two things). 'John ran, and Mary jumped' (Compound: Two subjects doing two separate things).",
    "indonesianLearnerWarning": "The concept of an independent clause (kalimat tunggal) is the same in Indonesian. A single complete thought.",
    "practicePrompts": [
      "Is this a simple sentence? 'The dog and the cat played in the garden.'",
      "Is this a simple sentence? 'I went home because it rained.' (Hint: count the actors and actions).",
      "Expand this simple sentence with adjectives and adverbs: 'The bird flew.'"
    ],
    "classroomUse": "<strong>The Stretching Game:</strong> The teacher writes 'The man ate' on the board. Students must add adjectives, adverbs, and prepositional phrases to make the sentence as long as possible, WITHOUT adding a second subject/verb pair. Prove that 'simple' doesn't mean 'short'.",
    "summary": [
      "A Simple Sentence consists of exactly ONE independent clause.",
      "An independent clause must have a Subject, a Verb, and express a complete thought.",
      "Simple sentences can be very long if they have many descriptive words.",
      "Two subjects joined by 'and' (John and Mary) still count as a single subject unit."
    ]
  },
  {
    "id": "grammar-compound-sentences",
    "backHref": "sentence-structure.html",
    "backLabel": "Back to Sentence Structure",
    "title": "Compound Sentences",
    "skill": "Grammar",
    "category": "Sentence Types",
    "level": "Intermediate",
    "description": "Learn to join two independent clauses using FANBOYS.",
    "introduction": "If you only ever write Simple Sentences, you will sound like a robot. 'I went home. I ate dinner. I went to bed.' To sound fluent, you need to connect your ideas. A Compound Sentence is like a marriage between two Simple Sentences. They are joined together by a special linking word. Let's learn how to combine ideas smoothly.",
    "learningGoals": [
      "Define a Compound Sentence (Two independent clauses joined together).",
      "Memorize the FANBOYS coordinating conjunctions.",
      "Learn the strict comma rule for compound sentences."
    ],
    "meaning": "A compound sentence links two related, equal ideas together to show how they connect (cause, addition, contrast, or choice).",
    "uses": [
      "Creating smooth, flowing paragraphs and showing relationships between ideas."
    ],
    "patterns": [
      {
        "name": "The FANBOYS Formula",
        "formula": "Independent Clause + [ , ] + FANBOYS + Independent Clause",
        "explanation": "FANBOYS = For, And, Nor, But, Or, Yet, So. Example: I was tired, SO I went to bed."
      }
    ],
    "stepByStep": "How to build a Compound Sentence:<br><br>1. <strong>Take sentence A:</strong> 'I like tea.'<br>2. <strong>Take sentence B:</strong> 'My wife likes coffee.'<br>3. <strong>Choose the relationship:</strong> Contrast (But).<br>4. <strong>Add a comma to sentence A:</strong> 'I like tea,'<br>5. <strong>Link them:</strong> 'I like tea, <em>but</em> my wife likes coffee.'",
    "examples": [
      { "type": "Addition (And)", "sentence": "We bought tickets, and we went inside.", "note": "Two equal actions." },
      { "type": "Contrast (But)", "sentence": "I studied hard, but I failed the test.", "note": "Unexpected result." },
      { "type": "Result (So)", "sentence": "It was raining, so we stayed home.", "note": "Cause and effect." },
      { "type": "Choice (Or)", "sentence": "You can stay here, or you can come with us.", "note": "Presenting options." }
    ],
    "commonMistakes": [
      {
        "wrong": "I like tea but my wife likes coffee.",
        "correct": "I like tea, but my wife likes coffee.",
        "explanation": "When joining two FULL independent clauses (with their own subjects and verbs), you MUST put a comma before the FANBOYS word in formal writing.",
        "fix": "Clause + Comma + FANBOYS + Clause."
      },
      {
        "wrong": "It was raining, we stayed home.",
        "correct": "It was raining, so we stayed home.",
        "explanation": "You cannot join two independent clauses with JUST a comma. This is a fatal error called a 'Comma Splice'.",
        "fix": "Always use a connecting word (or a semicolon) between clauses."
      }
    ],
    "quickComparison": "<strong>Compound Verb vs Compound Sentence:</strong> 'I went home and slept' (Compound Verb. No comma needed because 'slept' doesn't have its own subject). 'I went home, and I slept' (Compound Sentence. Needs a comma because 'I slept' is a full clause).",
    "indonesianLearnerWarning": "Indonesian uses similar connectors (dan, tetapi, jadi). The main difference is the strict English punctuation rule: do not forget the comma before the connector when writing!",
    "practicePrompts": [
      "Combine using 'so': 'I was hungry. I ate an apple.'",
      "Combine using 'but': 'He is very rich. He is not happy.'",
      "Correct the mistake: 'I wanted to go, I didn't have time.'",
      "Write a compound sentence using 'or'."
    ],
    "classroomUse": "<strong>The FANBOYS Matchmaker:</strong> Give half the class cards with 'Sentence A' (e.g., 'I ran fast'). Give the other half 'Sentence B' (e.g., 'I missed the bus'). Hand out FANBOYS cards. Students must physically walk around and find a matching pair and connector.",
    "summary": [
      "A Compound Sentence is two Simple Sentences glued together.",
      "Use the FANBOYS (For, And, Nor, But, Or, Yet, So) to connect them.",
      "Always put a comma BEFORE the FANBOYS word.",
      "Never join two full sentences with just a comma (Comma Splice)."
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
console.log('Updated 8 sentence structure basic lessons using ESM');
