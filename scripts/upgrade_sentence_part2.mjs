import fs from 'fs';
import { lessons } from '../data/lessons.js';

const updated = [
  {
    "id": "grammar-complex-sentences",
    "backHref": "sentence-structure.html",
    "backLabel": "Back to Sentence Structure",
    "title": "Complex Sentences",
    "skill": "Grammar",
    "category": "Sentence Types",
    "level": "Intermediate",
    "description": "Learn to attach dependent clauses to main ideas.",
    "introduction": "We learned that Compound sentences join two EQUAL ideas. But what if one idea is more important than the other? 'Because it was raining, I stayed home.' Staying home is the main idea. The rain is just the background reason. A Complex Sentence joins a strong, independent clause with a weak, dependent clause. Let's learn how to add context to your sentences.",
    "learningGoals": [
      "Understand what a 'Dependent Clause' is.",
      "Recognize Subordinating Conjunctions (Because, Although, If, When, While).",
      "Master the punctuation rules for Complex Sentences."
    ],
    "meaning": "A complex sentence provides a main action, and then uses a dependent clause to explain the time, reason, condition, or contrast of that main action.",
    "uses": [
      "Explaining why, when, or under what conditions something happened."
    ],
    "patterns": [
      {
        "name": "Dependent First (Comma Required)",
        "formula": "Dependent Clause + [ , ] + Independent Clause",
        "explanation": "Example: Because I was tired, I went to bed."
      },
      {
        "name": "Independent First (No Comma)",
        "formula": "Independent Clause + Dependent Clause",
        "explanation": "Example: I went to bed because I was tired."
      }
    ],
    "stepByStep": "How to build a Complex Sentence:<br><br>1. <strong>Start with a main idea (Independent):</strong> 'I will buy a car.'<br>2. <strong>Create a condition (Dependent):</strong> 'If I save enough money.'<br>3. <strong>Option A (Condition first):</strong> '<em>If I save enough money,</em> I will buy a car.' (Needs a comma!).<br>4. <strong>Option B (Main idea first):</strong> 'I will buy a car <em>if I save enough money</em>.' (No comma!).",
    "examples": [
      { "type": "Reason", "sentence": "Since you are here, we can start the meeting.", "note": "Dependent clause first." },
      { "type": "Time", "sentence": "I will call you when I arrive.", "note": "Independent clause first." },
      { "type": "Contrast", "sentence": "Although he is rich, he is not happy.", "note": "Dependent clause first." },
      { "type": "Condition", "sentence": "You will fail if you don't study.", "note": "Independent clause first." }
    ],
    "commonMistakes": [
      {
        "wrong": "Because it was raining. I stayed home.",
        "correct": "Because it was raining, I stayed home.",
        "explanation": "A dependent clause starting with 'Because', 'If', or 'Although' CANNOT stand alone as a sentence. It is a fragment.",
        "fix": "Always attach a dependent clause to an independent clause."
      },
      {
        "wrong": "I went home, because I was tired.",
        "correct": "I went home because I was tired.",
        "explanation": "If the dependent clause comes SECOND, you generally do not use a comma.",
        "fix": "Only use a comma if the dependent clause is at the front."
      }
    ],
    "quickComparison": "<strong>Compound vs Complex:</strong> 'It rained, SO I stayed home' (Compound: Two equal clauses joined by FANBOYS). 'BECAUSE it rained, I stayed home' (Complex: One weak clause attached to one strong clause).",
    "indonesianLearnerWarning": "Indonesians often start sentences with 'Karena' (Because) and leave them hanging as incomplete thoughts in speech. In English writing, a 'Because' clause must always be glued to a main action.",
    "practicePrompts": [
      "Combine using 'Although': 'He was tired. He finished the work.'",
      "Combine using 'When': 'I was sleeping. The phone rang.'",
      "Punctuate this sentence: 'If it rains tomorrow we will stay inside.'",
      "Correct the mistake: 'I didn't go to work. Because I was sick.'"
    ],
    "classroomUse": "<strong>The Sentence Gluer:</strong> Hand out strips of paper. Half have independent clauses ('I screamed'), half have dependent clauses ('When I saw the spider'). Students must glue them together on a poster board, adding a comma sticker ONLY if the dependent clause goes first.",
    "summary": [
      "A Complex Sentence joins an Independent clause with a Dependent clause.",
      "Dependent clauses start with words like Because, If, When, Although.",
      "If the dependent clause comes FIRST, you must use a comma.",
      "If the dependent clause comes SECOND, do not use a comma."
    ]
  },
  {
    "id": "grammar-compound-complex-sentences",
    "backHref": "sentence-structure.html",
    "backLabel": "Back to Sentence Structure",
    "title": "Compound-Complex Sentences",
    "skill": "Grammar",
    "category": "Sentence Types",
    "level": "Advanced",
    "description": "Combine all sentence structures to create highly detailed, flowing paragraphs.",
    "introduction": "This is the final evolution of English sentence structure. You know Compound sentences (joining two equal ideas). You know Complex sentences (adding a dependent condition or reason). What happens if you do both at the same time? You get a Compound-Complex sentence. This allows you to express highly nuanced ideas in a single, fluid breath. Let's learn how to write like a professional author.",
    "learningGoals": [
      "Define a Compound-Complex sentence.",
      "Identify the required components: At least TWO independent clauses, and at least ONE dependent clause.",
      "Master the punctuation required to hold it all together."
    ],
    "meaning": "This structure provides deep context (the dependent clause) for two related main actions (the compound clauses).",
    "uses": [
      "Academic writing, storytelling, and explaining complex situations."
    ],
    "patterns": [
      {
        "name": "The Compound-Complex Formula",
        "formula": "[Dependent Clause] + [Independent Clause 1] + FANBOYS + [Independent Clause 2]",
        "explanation": "Example: Even though I was tired (Dep), I cooked dinner (Ind 1), and I washed the dishes (Ind 2)."
      }
    ],
    "stepByStep": "How to build the ultimate sentence:<br><br>1. <strong>Start with a Complex sentence:</strong> 'Because the weather was bad, we canceled the picnic.'<br>2. <strong>Add a related equal idea (Compound):</strong> '...and we went to a museum instead.'<br>3. <strong>Combine them:</strong> 'Because the weather was bad, we canceled the picnic, <em>and</em> we went to a museum instead.'<br>4. <strong>Result:</strong> One Dependent Clause + Two Independent Clauses.",
    "examples": [
      { "type": "Condition First", "sentence": "If you want to pass, you must study hard, but you must also get enough sleep.", "note": "If... (Dep) , you must... (Ind 1) , but you must... (Ind 2)." },
      { "type": "Condition Middle", "sentence": "I wanted to buy a car, but because I lost my job, I bought a bicycle.", "note": "Ind 1 + but + Dep + Ind 2." },
      { "type": "Relative Clause", "sentence": "The man who sold me the car was very nice, so I gave him a good review.", "note": "'who sold me the car' is the dependent clause." }
    ],
    "commonMistakes": [
      {
        "wrong": "Because I was late I missed the train and I had to walk.",
        "correct": "Because I was late, I missed the train, and I had to walk.",
        "explanation": "With so many clauses, punctuation is vital. You need the comma after the introductory dependent clause, AND the comma before the FANBOYS word.",
        "fix": "Do not forget your commas."
      }
    ],
    "quickComparison": "<strong>Complex vs Compound-Complex:</strong> 'When the bell rang, the students left.' (Complex). 'When the bell rang, the students left, and the teacher locked the door.' (Compound-Complex).",
    "indonesianLearnerWarning": "Translating these directly from Indonesian can lead to massive run-on sentences if you forget the connectors (and, but, so). Ensure every independent clause is properly glued.",
    "practicePrompts": [
      "Identify the parts: 'Although he is young, he is very smart, and he works very hard.'",
      "Combine these three sentences: 'It was raining.' 'We stayed inside.' 'We watched a movie.' (Hint: Because..., ..., and...)",
      "Add a dependent clause to this compound sentence: 'I went to the store, but it was closed.'"
    ],
    "classroomUse": "<strong>The Sentence Escalator:</strong> Write a simple sentence on the board ('The dog barked'). Student A makes it compound ('The dog barked, and the cat ran'). Student B makes it complex ('When the mailman arrived, the dog barked, and the cat ran').",
    "summary": [
      "A Compound-Complex sentence requires at least two Independent clauses and one Dependent clause.",
      "It is used to express highly detailed, multi-step ideas.",
      "It combines the punctuation rules of both Compound (commas before FANBOYS) and Complex (commas after introductory clauses) sentences."
    ]
  },
  {
    "id": "grammar-sentence-functions",
    "backHref": "sentence-structure.html",
    "backLabel": "Back to Sentence Structure",
    "title": "Sentence Functions",
    "skill": "Grammar",
    "category": "Sentence Types",
    "level": "Beginner",
    "description": "Understand the four purposes a sentence can serve.",
    "introduction": "We have looked at how sentences are built (their skeleton). Now let's look at what sentences actually DO (their job). Every sentence you speak has a purpose. Are you giving information? Asking for information? Giving an order? Or yelling in surprise? There are four main sentence functions in English, and each one changes the word order and punctuation. Let's look at the four jobs a sentence can have.",
    "learningGoals": [
      "Identify Declarative (Statement), Interrogative (Question), Imperative (Command), and Exclamatory (Emotion) sentences.",
      "Understand the punctuation required for each.",
      "Understand how the word order shifts for questions and commands."
    ],
    "meaning": "The function dictates the tone, the grammar structure (SVO vs Aux-SVO), and the end punctuation of the sentence.",
    "uses": [
      "Varying your communication style to match your intent."
    ],
    "patterns": [
      {
        "name": "Declarative (Statement)",
        "formula": "Subject + Verb .",
        "explanation": "Example: The door is open."
      },
      {
        "name": "Interrogative (Question)",
        "formula": "Aux + Subject + Verb ?",
        "explanation": "Example: Is the door open?"
      },
      {
        "name": "Imperative (Command)",
        "formula": "(Hidden 'You') + Verb . or !",
        "explanation": "Example: Open the door."
      },
      {
        "name": "Exclamatory (Emotion)",
        "formula": "What/How + Subject + Verb !",
        "explanation": "Example: How open the door is! (Or just expressing strong emotion: The door is open!)"
      }
    ],
    "stepByStep": "How to change a sentence's function:<br><br>1. <strong>Start with a fact (Declarative):</strong> 'You are quiet.'<br>2. <strong>Want information? Flip it (Interrogative):</strong> '<em>Are you</em> quiet?'<br>3. <strong>Giving an order? Drop the subject (Imperative):</strong> '<em>Be</em> quiet.'<br>4. <strong>Showing shock? Yell it (Exclamatory):</strong> 'You are so quiet!'",
    "examples": [
      { "type": "Declarative", "sentence": "We are going to the park.", "note": "Ends in a period. Standard SVO." },
      { "type": "Interrogative", "sentence": "Are we going to the park?", "note": "Ends in a question mark. Flipped order." },
      { "type": "Imperative", "sentence": "Go to the park.", "note": "No visible subject. Starts with a verb." },
      { "type": "Exclamatory", "sentence": "What a beautiful park this is!", "note": "Ends in an exclamation mark. Shows strong feeling." }
    ],
    "commonMistakes": [
      {
        "wrong": "You go to the store.",
        "correct": "Go to the store.",
        "explanation": "When giving a command (Imperative), do not use the pronoun 'You'. The 'You' is invisible and understood.",
        "fix": "Start commands directly with the verb."
      },
      {
        "wrong": "She is here?",
        "correct": "Is she here?",
        "explanation": "Relying purely on voice tone to ask a question is incorrect in written English. You must flip the grammar.",
        "fix": "Always use Interrogative word order for questions."
      }
    ],
    "quickComparison": "<strong>Declarative vs Imperative:</strong> 'You need to eat your vegetables' (Declarative statement of fact). 'Eat your vegetables' (Imperative command).",
    "indonesianLearnerWarning": "Indonesian commands often use 'Tolong' (Please) or suffixes like '-lah' ('Makanlah'). In English, simply dropping the subject makes it a command. Add 'Please' at the beginning or end to be polite.",
    "practicePrompts": [
      "Change to a question: 'The movie is good.'",
      "Change to a command: 'You should sit down.'",
      "Identify the function: 'Watch out!'",
      "Identify the function: 'Where is the library?'"
    ],
    "classroomUse": "<strong>The Transformers:</strong> The teacher gives a declarative sentence ('The window is open'). The student must instantly transform it into a Question ('Is it open?'), a Command ('Open it!'), and an Exclamation ('How open it is!').",
    "summary": [
      "Declarative sentences tell facts and end with a period.",
      "Interrogative sentences ask questions and end with a question mark.",
      "Imperative sentences give commands by dropping the subject (Sit down).",
      "Exclamatory sentences show strong emotion and end with an exclamation mark."
    ]
  },
  {
    "id": "grammar-choosing-sentence-type",
    "backHref": "sentence-structure.html",
    "backLabel": "Back to Sentence Structure",
    "title": "Choosing Sentence Types",
    "skill": "Grammar",
    "category": "Sentence Types",
    "level": "Intermediate",
    "description": "Learn how to mix Simple, Compound, and Complex sentences for better writing flow.",
    "introduction": "Good writing is like music. If you play the exact same note over and over, people stop listening. If you write only short Simple sentences, your writing sounds like a robot. If you write only massive Compound-Complex sentences, your reader will get exhausted and confused. The secret to beautiful, fluent English is 'Sentence Variety'. Let's learn how to choose the right sentence for the right moment.",
    "learningGoals": [
      "Understand the rhetorical impact of Simple, Compound, and Complex sentences.",
      "Learn to use short sentences for impact and tension.",
      "Learn to use long sentences for flowing explanation."
    ],
    "meaning": "Varying sentence length and structure creates a rhythm that keeps the reader engaged and highlights the most important ideas.",
    "uses": [
      "Writing essays, emails, stories, and giving speeches."
    ],
    "patterns": [
      {
        "name": "The Impact Pattern",
        "formula": "Long sentence + Long sentence + Short Simple Sentence.",
        "explanation": "Example: Although we tried our best, the weather was terrible, and our equipment broke. The mission failed."
      }
    ],
    "stepByStep": "How to edit your writing rhythm:<br><br>1. <strong>Read your paragraph aloud.</strong><br>2. <strong>Count the structures:</strong> 'I went home. I ate food. I slept.' (Too many simple sentences!).<br>3. <strong>Combine for flow:</strong> 'I went home and ate food. Then, I slept.' (Better).<br>4. <strong>Look for a climax:</strong> If you want to shock the reader, use a very short simple sentence right after a long one. 'Stop.'",
    "examples": [
      { "type": "Too Choppy", "sentence": "The dog ran. It was fast. It caught the ball.", "note": "Sounds like a children's book." },
      { "type": "Better Flow", "sentence": "The dog ran quickly and caught the ball.", "note": "Combined into a smooth simple sentence with a compound verb." },
      { "type": "Too Tangled", "sentence": "Because it was raining, we went inside, and we ate food, but then the power went out, so we couldn't watch TV.", "note": "Too many clauses. Exhausting." },
      { "type": "Better Pacing", "sentence": "Because it was raining, we went inside to eat. However, the power went out, so we couldn't watch TV.", "note": "Broken into a Complex and a Compound sentence." }
    ],
    "commonMistakes": [
      {
        "wrong": "Using complex sentences for sudden actions.",
        "correct": "Using simple sentences for sudden actions.",
        "explanation": "If a bomb explodes in a story, don't write: 'Because the timer reached zero, the explosive device detonated violently.' Write: 'The bomb exploded.'",
        "fix": "Match the sentence length to the speed of the action."
      }
    ],
    "quickComparison": "<strong>Simple vs Complex in Context:</strong> 'He died' (Simple. Brutal. Factual). 'Although the doctors tried everything, the patient unfortunately passed away' (Complex. Soft. Explanatory).",
    "indonesianLearnerWarning": "Academic writing in Indonesian sometimes favors extremely long, multi-clause sentences to sound intellectual. In English, clarity and conciseness are preferred. Don't be afraid to use a period.",
    "practicePrompts": [
      "Combine these choppy sentences: 'I was late. The traffic was bad. I missed the meeting.'",
      "Break this massive sentence into two: 'I went to the store because I needed milk but they were closed so I went home.'",
      "Rewrite a paragraph you recently wrote, ensuring you have one Simple, one Compound, and one Complex sentence."
    ],
    "classroomUse": "<strong>The Rhythm Reader:</strong> The teacher reads a paragraph with zero sentence variety in a flat, robotic voice. Then, the teacher reads a rewritten version with varied lengths with dramatic expression. Students discuss why the second one 'felt' better.",
    "summary": [
      "Do not use only one type of sentence structure.",
      "Use Simple sentences for fast actions, impact, and clear statements.",
      "Use Compound sentences to link equal, flowing ideas.",
      "Use Complex sentences to explain reasons and backgrounds.",
      "Mix them together to create musical rhythm in your writing."
    ]
  },
  {
    "id": "grammar-expanding-simple-sentences",
    "backHref": "sentence-structure.html",
    "backLabel": "Back to Sentence Structure",
    "title": "Expanding Simple Sentences",
    "skill": "Grammar",
    "category": "Sentence Expansion",
    "level": "Intermediate",
    "description": "Learn to add descriptive layers without adding new clauses.",
    "introduction": "A Simple Sentence (Subject + Verb) is a great foundation, but 'The boy ate' is a bit boring. How do we make it interesting? We expand it! The trick to sentence expansion is adding rich details WITHOUT accidentally adding a second verb and turning it into a compound sentence. We do this by stacking adjectives, adverbs, and prepositional phrases onto the core framework. Let's learn how to decorate a sentence.",
    "learningGoals": [
      "Learn to use Adjectives to describe the Subject and Object.",
      "Learn to use Adverbs to describe the Verb.",
      "Learn to use Prepositional Phrases to add time, place, and method."
    ],
    "meaning": "Expansion adds imagery, context, and precision to a basic fact.",
    "uses": [
      "Descriptive writing, storytelling, and providing specific details."
    ],
    "patterns": [
      {
        "name": "The Expansion Stack",
        "formula": "[Time] + [Adj + Subject] + [Adverb + Verb] + [Adj + Object] + [Place]",
        "explanation": "Example: Yesterday, the hungry boy quickly ate the hot pizza in the kitchen."
      }
    ],
    "stepByStep": "How to expand a sentence:<br><br>1. <strong>The Core:</strong> 'The dog barked.'<br>2. <strong>Add Adjectives (What kind?):</strong> 'The <em>large, angry</em> dog barked.'<br>3. <strong>Add Adverbs (How?):</strong> 'The large, angry dog barked <em>viciously</em>.'<br>4. <strong>Add Prepositions (Where/When?):</strong> 'The large, angry dog barked viciously <em>at the mailman</em> <em>in the morning</em>.'<br>5. <strong>Result:</strong> A highly detailed Simple Sentence.",
    "examples": [
      { "type": "Core", "sentence": "The woman drove the car.", "note": "Basic S-V-O." },
      { "type": "Expanded Subject", "sentence": "The wealthy, elegant woman drove the car.", "note": "Added adjectives." },
      { "type": "Expanded Verb", "sentence": "The wealthy, elegant woman drove the car recklessly.", "note": "Added an adverb." },
      { "type": "Expanded Context", "sentence": "Late at night, the wealthy, elegant woman recklessly drove the red sports car down the empty highway.", "note": "Added time, object adjectives, and place." }
    ],
    "commonMistakes": [
      {
        "wrong": "The big dog barked, and it was loud.",
        "correct": "The big dog barked loudly.",
        "explanation": "Adding 'and it was loud' creates a new clause (Compound Sentence). To keep it Simple and punchy, just use an adverb ('loudly').",
        "fix": "Use adverbs instead of 'and it was' to save space."
      }
    ],
    "quickComparison": "<strong>Clause vs Phrase:</strong> A clause has a Subject and Verb ('because it was raining'). A phrase is just a group of descriptive words ('in the rain'). Expansion relies on phrases.",
    "indonesianLearnerWarning": "Remember the Word Order rules! In Indonesian, adjectives come after the noun ('Anjing besar'). In English, you must stack the adjectives BEFORE the noun ('The big dog').",
    "practicePrompts": [
      "Expand this sentence: 'The cat slept.' (Add adjectives and a place).",
      "Expand this sentence: 'The man ran.' (Add how, where, and when).",
      "Reduce this expanded sentence back to its core SV: 'The old, rusty train loudly chugged into the station.' -> 'The ___ ___.'"
    ],
    "classroomUse": "<strong>The Sentence Snowball:</strong> Write 'A bird flew' on the board. Pass a ball. The first student must add one word ('A <em>blue</em> bird flew'). The next student adds another ('A <em>tiny</em> blue bird flew'). See how big the sentence can get before breaking grammar rules.",
    "summary": [
      "You can make Simple Sentences very long and detailed without adding new clauses.",
      "Use Adjectives to describe the nouns (Who/What).",
      "Use Adverbs to describe the verbs (How).",
      "Use Prepositional Phrases to set the scene (Where/When)."
    ]
  },
  {
    "id": "grammar-adjectives-and-adverbs",
    "backHref": "sentence-structure.html",
    "backLabel": "Back to Sentence Structure",
    "title": "Adjectives and Adverbs in Sentences",
    "skill": "Grammar",
    "category": "Sentence Expansion",
    "level": "Intermediate",
    "description": "Understand exactly where descriptive words belong in a sentence.",
    "introduction": "If nouns are the bones of a sentence, and verbs are the muscles, then adjectives and adverbs are the skin and clothing. They provide all the color! But you cannot just throw them anywhere. Adjectives and adverbs have strict 'magnetic' rules. Adjectives are magnetically attracted to Nouns. Adverbs are magnetically attracted to Verbs. Let's learn how to place them correctly to build beautiful sentences.",
    "learningGoals": [
      "Understand that Adjectives modify Nouns and Pronouns.",
      "Understand that Adverbs modify Verbs, Adjectives, and other Adverbs.",
      "Master the placement rules for both."
    ],
    "meaning": "Adjectives answer: What kind? Which one? How many? Adverbs answer: How? When? Where? To what extent?",
    "uses": [
      "Adding precision and vivid imagery to writing and speech."
    ],
    "patterns": [
      {
        "name": "The Adjective Magnet",
        "formula": "Adjective + Noun (OR) Linking Verb + Adjective",
        "explanation": "Example: The [red] car. The car is [red]."
      },
      {
        "name": "The Adverb Magnet",
        "formula": "Verb + Adverb (OR) Adverb + Adjective",
        "explanation": "Example: He runs [quickly]. He is [very] fast."
      }
    ],
    "stepByStep": "How to choose between -ly and no -ly:<br><br>1. <strong>Look at what you are describing:</strong> 'He is a (careful/carefully) driver.'<br>2. <strong>Identify the target word:</strong> 'driver'.<br>3. <strong>Is the target a Noun or a Verb?</strong> A driver is a Noun (a person).<br>4. <strong>Apply the rule:</strong> Nouns take Adjectives. -> 'He is a <em>careful</em> driver.'<br>5. <strong>Different target:</strong> 'He drives (careful/carefully).' The target is 'drives' (Action Verb). Action Verbs take Adverbs. -> 'He drives <em>carefully</em>.'",
    "examples": [
      { "type": "Adjective (Before Noun)", "sentence": "She wore a beautiful dress.", "note": "Describes 'dress'." },
      { "type": "Adjective (After Linking Verb)", "sentence": "The dress looked beautiful.", "note": "Describes 'dress' via a linking verb." },
      { "type": "Adverb (Action Verb)", "sentence": "She sang beautifully.", "note": "Describes HOW she sang." },
      { "type": "Adverb (Modifying Adjective)", "sentence": "She wore an extremely beautiful dress.", "note": "'Extremely' describes 'beautiful'." }
    ],
    "commonMistakes": [
      {
        "wrong": "He plays basketball good.",
        "correct": "He plays basketball well.",
        "explanation": "'Good' is an adjective. You cannot use it to describe an action verb ('plays'). You must use its irregular adverb form: 'well'.",
        "fix": "Use 'well' for actions, 'good' for nouns."
      },
      {
        "wrong": "I feel badly.",
        "correct": "I feel bad.",
        "explanation": "'Feel' is a linking verb reflecting back to 'I'. You use adjectives after linking verbs, not adverbs. (Saying 'I feel badly' means your fingers don't work!).",
        "fix": "Use adjectives after look, feel, smell, taste, sound."
      }
    ],
    "quickComparison": "<strong>Adjective vs Adverb:</strong> 'Quick' (Adj) vs 'Quickly' (Adv). 'Happy' (Adj) vs 'Happily' (Adv). 'Fast' (Adj) vs 'Fast' (Adv - irregular!).",
    "indonesianLearnerWarning": "Indonesian uses 'dengan' + adjective to make an adverb ('dengan cepat' = with fast). In English, you usually just add '-ly' to the adjective ('quickly').",
    "practicePrompts": [
      "Choose the right word: 'She speaks (quiet/quietly).'",
      "Choose the right word: 'The soup tastes (terrible/terribly).'",
      "Turn this adjective into an adverb and make a sentence: 'Slow' -> '___'."
    ],
    "classroomUse": "<strong>The Adverb Relay:</strong> The teacher gives a verb ('walk'). Students must take turns acting out the verb based on an adverb drawn from a hat (walk angrily, walk silently, walk awkwardly).",
    "summary": [
      "Adjectives describe Nouns (The quick boy).",
      "Adverbs describe Action Verbs (He ran quickly).",
      "Most adverbs are made by adding '-ly' to an adjective.",
      "Linking verbs (feel, look, taste) take Adjectives, not Adverbs."
    ]
  },
  {
    "id": "grammar-prepositional-phrases",
    "backHref": "sentence-structure.html",
    "backLabel": "Back to Sentence Structure",
    "title": "Prepositional Phrases",
    "skill": "Grammar",
    "category": "Sentence Expansion",
    "level": "Intermediate",
    "description": "Expand sentences by adding locations, times, and relationships.",
    "introduction": "Adjectives and adverbs are great for single words. But what if you need to describe a whole location or a time period? You can't just use one word. You need a phrase. A Prepositional Phrase acts like a giant, multi-word adjective or adverb. It tells us where, when, or under what conditions an action happened. Let's learn how to glue locations and times onto our sentences.",
    "learningGoals": [
      "Define a Prepositional Phrase (Preposition + Noun Object).",
      "Use phrases to function as Adverbs (Time/Place).",
      "Use phrases to function as Adjectives (Describing nouns)."
    ],
    "meaning": "A prepositional phrase creates a relationship in space (under the table) or time (after the movie) between different parts of the sentence.",
    "uses": [
      "Setting scenes, specifying locations, and establishing timelines."
    ],
    "patterns": [
      {
        "name": "The Prepositional Phrase",
        "formula": "Preposition + [Optional Adjectives] + Noun",
        "explanation": "Example: In + the dark + room."
      }
    ],
    "stepByStep": "How to attach a phrase:<br><br>1. <strong>Start with a core sentence:</strong> 'The cat slept.'<br>2. <strong>Decide what info is missing:</strong> Where?<br>3. <strong>Build a phrase:</strong> 'on' (prep) + 'the soft sofa' (noun object).<br>4. <strong>Attach it to the verb (Adverbial):</strong> 'The cat slept <em>on the soft sofa</em>.'<br>5. <strong>Attach it to a noun (Adjectival):</strong> 'The cat <em>with the striped tail</em> slept.'",
    "examples": [
      { "type": "Adverbial (Place)", "sentence": "We ate lunch in the park.", "note": "Tells us WHERE they ate." },
      { "type": "Adverbial (Time)", "sentence": "I will call you after the meeting.", "note": "Tells us WHEN he will call." },
      { "type": "Adjectival (Description)", "sentence": "The man with the red hat is my uncle.", "note": "Tells us WHICH man." }
    ],
    "commonMistakes": [
      {
        "wrong": "The book is in.",
        "correct": "The book is in the box.",
        "explanation": "A prepositional phrase MUST have an object (a noun). You cannot leave a preposition hanging by itself at the end of a location phrase.",
        "fix": "Always provide a noun after a preposition."
      },
      {
        "wrong": "I went to there.",
        "correct": "I went there.",
        "explanation": "'There', 'here', 'home', and 'abroad' are already adverbs of place. They do not need 'to'.",
        "fix": "Drop the preposition before here/there/home."
      }
    ],
    "quickComparison": "<strong>Adjective vs Prepositional Phrase:</strong> 'The French boy' (Adjective placed BEFORE the noun). 'The boy from France' (Prepositional Phrase placed AFTER the noun).",
    "indonesianLearnerWarning": "Indonesian often uses 'di' for in, on, and at. English requires you to be highly specific. A phrase must use the EXACT spatial relationship (in the box, on the table, at the door).",
    "practicePrompts": [
      "Add a place phrase: 'They hid the treasure ___.'",
      "Add a time phrase: 'The concert starts ___.'",
      "Describe the noun with a phrase: 'The girl ___ is my sister.' (Hint: with / in / from)."
    ],
    "classroomUse": "<strong>The Scene Setter:</strong> Show a picture of a messy room. Ask students to describe the location of items using prepositional phrases: 'The shoes are under the bed. The lamp is on the desk. The poster is on the wall.'",
    "summary": [
      "A Prepositional Phrase is a Preposition + a Noun.",
      "It acts like a giant Adverb (telling where/when the action happened).",
      "It can act like a giant Adjective (telling which noun you mean).",
      "A preposition must always be followed by its object noun."
    ]
  },
  {
    "id": "grammar-adding-details-with-clauses",
    "backHref": "sentence-structure.html",
    "backLabel": "Back to Sentence Structure",
    "title": "Adding Details with Clauses",
    "skill": "Grammar",
    "category": "Sentence Expansion",
    "level": "Advanced",
    "description": "Learn to embed whole mini-sentences inside your main sentences using Relative Clauses.",
    "introduction": "We know how to describe a noun with one word ('The tall man'). We know how to describe it with a phrase ('The man in the red hat'). But what if we need to describe a noun using an entire action? 'The man who stole my car.' This requires a Relative Clause. A relative clause is a dependent clause that acts like a massive adjective. Let's learn how to embed mini-stories inside your sentences.",
    "learningGoals": [
      "Understand Relative Clauses (Adjective Clauses).",
      "Use Relative Pronouns (Who, Which, That, Whose).",
      "Learn to embed these clauses directly next to the nouns they describe."
    ],
    "meaning": "Relative clauses specify EXACTLY which person or thing you are talking about by describing an action they did or an experience they had.",
    "uses": [
      "Defining specific people or objects without starting a new sentence."
    ],
    "patterns": [
      {
        "name": "The Relative Clause Pattern",
        "formula": "Noun + [Relative Pronoun + Subject/Verb] + Rest of Main Sentence",
        "explanation": "Example: The car [that I bought yesterday] broke down."
      }
    ],
    "stepByStep": "How to embed a clause:<br><br>1. <strong>Start with two sentences:</strong> 'The woman is a doctor.' 'She lives next door.'<br>2. <strong>Identify the shared noun:</strong> 'The woman' = 'She'.<br>3. <strong>Replace 'She' with a relative pronoun (Who):</strong> 'who lives next door'.<br>4. <strong>Embed it RIGHT AFTER the noun it describes:</strong> 'The woman <em>who lives next door</em> is a doctor.'",
    "examples": [
      { "type": "Who (People)", "sentence": "The boy who broke the window ran away.", "note": "Describes which boy." },
      { "type": "Which/That (Things)", "sentence": "I read the book that you recommended.", "note": "Describes which book." },
      { "type": "Whose (Possession)", "sentence": "I met a man whose brother is famous.", "note": "Describes the man via his brother." }
    ],
    "commonMistakes": [
      {
        "wrong": "The car that it broke down is mine.",
        "correct": "The car that broke down is mine.",
        "explanation": "The word 'that' REPLACES the pronoun 'it'. You cannot have both. This is called a double subject.",
        "fix": "Drop the normal pronoun (he/she/it) when using a relative pronoun (who/which/that)."
      },
      {
        "wrong": "The book who I read was good.",
        "correct": "The book that I read was good.",
        "explanation": "Do not use 'who' for objects.",
        "fix": "Who = People. Which/That = Things."
      }
    ],
    "quickComparison": "<strong>That vs Which:</strong> Use 'that' for essential information (The car that hit me was red). Use 'which' with commas for extra, non-essential trivia (My car, which is red, needs a wash).",
    "indonesianLearnerWarning": "Indonesian uses 'yang' for all relative clauses! 'Orang yang...', 'Mobil yang...'. In English, you must divide 'yang' into 'Who' (people) and 'That/Which' (things).",
    "practicePrompts": [
      "Combine using 'who': 'The girl is my sister. She is singing.'",
      "Combine using 'that': 'This is the phone. I dropped it.'",
      "Correct the mistake: 'The man which stole my bag ran away.'"
    ],
    "classroomUse": "<strong>The 'Yang' Game:</strong> The teacher points to objects or students and requires the class to define them using a relative clause. 'Who is Sarah?' 'Sarah is the student WHO is wearing a blue shirt.' 'What is this marker?' 'It is the marker THAT ran out of ink.'",
    "summary": [
      "Relative clauses act like giant adjectives to describe nouns.",
      "Use 'Who' for people and 'Which' or 'That' for things.",
      "Place the relative clause EXACTLY after the noun it describes.",
      "Do not use double pronouns (The man who [he] called me)."
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
console.log('Updated 8 sentence structure advanced/expansion lessons using ESM');
