import fs from 'fs';
import { lessons } from '../data/lessons.js';

const updated = [
  {
    "id": "grammar-across-through-along-around-past",
    "backHref": "prepositions.html",
    "backLabel": "Back to Prepositions",
    "title": "Pathways: Across, Through, Along, Around, Past",
    "skill": "Grammar",
    "category": "Direction Prepositions",
    "level": "Intermediate",
    "description": "Learn how to describe the exact path someone or something travels.",
    "introduction": "When giving directions or telling a story, simply saying 'we went to the park' isn't always enough. You often need to describe the journey itself. Did you walk on the edge of a river? Did you cut through a dark forest? Did you walk in circles trying to find the entrance? Prepositions of path—across, through, along, around, and past—allow you to paint a vivid, cinematic picture of movement in English. Let's explore how to trace a path through space.",
    "learningGoals": [
      "Use 'across' for moving from one side of a surface to the other.",
      "Use 'through' for moving inside a 3D space or tunnel.",
      "Use 'along', 'around', and 'past' to describe following lines and bypassing objects."
    ],
    "meaning": "'Across' means moving from one side of a 2D surface to the other side. 'Through' means moving inside a 3D volume (entering at one point and exiting at another). 'Along' means following a line or edge. 'Around' means moving in a circle or avoiding an obstacle by curving. 'Past' means moving near something and continuing beyond it.",
    "uses": [
      "ACROSS (Surface): Walking over a street, bridge, or field.",
      "THROUGH (Volume): Walking inside a tunnel, forest, crowd, or door.",
      "ALONG (Line): Walking beside a river, road, or beach.",
      "AROUND (Curve): Walking in a circle, or bypassing a barrier.",
      "PAST (Bypass): Walking near a building but not stopping."
    ],
    "patterns": [
      {
        "name": "The Surface Path",
        "formula": "Motion Verb + Across + [Flat Surface]",
        "explanation": "Example: Swim across the lake. Walk across the street."
      },
      {
        "name": "The 3D Tunnel Path",
        "formula": "Motion Verb + Through + [3D Environment]",
        "explanation": "Example: Drive through the tunnel. Walk through the forest."
      },
      {
        "name": "The Border Path",
        "formula": "Motion Verb + Along + [Line/Edge]",
        "explanation": "Example: Run along the beach. Drive along the highway."
      }
    ],
    "stepByStep": "How to choose Across vs. Through:<br><br>1. <strong>Visualize the noun you are crossing.</strong><br>2. <strong>Is it a flat, open surface?</strong> (e.g., a field, a street, a frozen lake, an ocean).<br>3. <strong>If yes, use <em>Across</em>.</strong> 'I walked across the field.'<br>4. <strong>Is it an enclosed space with walls, trees, or a crowd around you?</strong> (e.g., a forest, a tunnel, tall grass, a doorway).<br>5. <strong>If yes, use <em>Through</em>.</strong> 'I walked through the dark forest.'",
    "examples": [
      { "type": "Across (Surface)", "sentence": "They swam across the English Channel.", "note": "Moving from one side of the water to the other." },
      { "type": "Through (Volume)", "sentence": "The train went through the mountain tunnel.", "note": "Surrounded by rock on all sides." },
      { "type": "Along (Line)", "sentence": "We walked along the riverbank.", "note": "Following the edge of the river." },
      { "type": "Around (Curve)", "sentence": "The earth goes around the sun.", "note": "Circular motion." },
      { "type": "Past (Bypass)", "sentence": "I walked past the bakery without buying anything.", "note": "Moving beyond a location." },
      
      { "type": "Classroom", "sentence": "Draw a line across the page.", "note": "From the left margin to the right margin." },
      { "type": "Classroom", "sentence": "Look through the window.", "note": "Vision moving through the glass." },
      
      { "type": "Real-Life", "sentence": "To get to the bank, go past the supermarket and turn left.", "note": "Classic giving directions phrase." },
      { "type": "Real-Life", "sentence": "I couldn't get through the crowd.", "note": "A crowd is treated as a 3D volume." },
      { "type": "Real-Life", "sentence": "We drove around the city looking for parking.", "note": "Moving in circles/random curves." },
      
      { "type": "Advanced", "sentence": "The new highway cuts straight through the dense jungle.", "note": "Cutting a path inside a 3D environment." },
      { "type": "Advanced", "sentence": "Information travels across the globe in milliseconds.", "note": "Abstract use of 'across' for the surface of the earth." }
    ],
    "commonMistakes": [
      {
        "wrong": "We walked through the street.",
        "correct": "We walked across the street.",
        "explanation": "A street is a flat surface. You walk 'across' it to get to the other side.",
        "fix": "Use 'across' for flat surfaces like streets and fields."
      },
      {
        "wrong": "I looked across the telescope.",
        "correct": "I looked through the telescope.",
        "explanation": "A telescope is a tube (a 3D volume). Light and vision travel 'through' it.",
        "fix": "Use 'through' for tubes, glass, and windows."
      },
      {
        "wrong": "Go passed the bank.",
        "correct": "Go past the bank.",
        "explanation": "'Passed' is a past-tense verb (He passed the ball). 'Past' is the preposition of direction.",
        "fix": "Never use the -ed spelling for the preposition."
      },
      {
        "wrong": "We walked straightly along the road.",
        "correct": "We walked straight along the road.",
        "explanation": "'Straight' is both an adjective and an adverb. 'Straightly' is not a word.",
        "fix": "Use 'straight' to modify motion prepositions."
      }
    ],
    "quickComparison": "<strong>Across vs. Over:</strong> To go 'across' a wall means climbing it. To go 'over' a wall implies you might jump and fly without touching it. But for a bridge, 'walk across the bridge' and 'walk over the bridge' mean exactly the same thing!",
    "indonesianLearnerWarning": "In Indonesian, 'lewat' or 'melalui' can mean both 'through' and 'past'. If you are driving on the road and bypass a hospital, use 'past'. If you actually go inside the hospital doors and come out the back, use 'through'.",
    "practicePrompts": [
      "Choose Across or Through: 'The bird flew ___ the open window.'",
      "Choose Across or Through: 'The ship sailed ___ the ocean.'",
      "Correct the mistake: 'I walked passed the post office.'",
      "Write directions from your house to the nearest store using 'along', 'past', and 'across'.",
      "Speaking prompt: Tell a story about a difficult journey (e.g., hiking). Use all 5 prepositions."
    ],
    "classroomUse": "<strong>The Obstacle Course:</strong> Set up chairs and desks in the classroom. Blindfold one student. Another student must guide them to the door using ONLY path prepositions: 'Walk around the chair, go along the wall, squeeze through the desks...'",
    "summary": [
      "ACROSS is for flat surfaces (streets, oceans).",
      "THROUGH is for 3D spaces and tunnels (forests, crowds, windows).",
      "ALONG is for following an edge or line (rivers, paths).",
      "AROUND is for circular movement or avoiding obstacles.",
      "PAST means continuing beyond a point. Do not spell it 'passed'."
    ]
  },
  {
    "id": "grammar-verb-preposition-patterns",
    "backHref": "prepositions.html",
    "backLabel": "Back to Prepositions",
    "title": "Verb + Preposition Patterns",
    "skill": "Grammar",
    "category": "Dependent Prepositions",
    "level": "Advanced",
    "description": "Deep dive into verbs that require specific prepositions.",
    "introduction": "As you move from intermediate to advanced English, the biggest challenge isn't learning new tenses—it's learning which little words go with which big words. Verbs are especially tricky because many of them refuse to connect directly to an object; they demand a specific preposition to act as a bridge. We call these 'Dependent Prepositions.' If you choose the wrong bridge, the sentence sounds completely unnatural to a native speaker. Let's master the most common and confusing verb-preposition partnerships.",
    "learningGoals": [
      "Memorize common Verb + Preposition combinations.",
      "Understand how to use gerunds (-ing verbs) after dependent prepositions.",
      "Avoid common translation errors with verbs like 'discuss', 'marry', and 'resemble'."
    ],
    "meaning": "Some verbs require a specific preposition before an object (e.g., complain ABOUT the weather). Other verbs take a direct object first, and THEN a preposition (e.g., blame someone FOR something). And importantly, some verbs require NO preposition at all, even though your native language might use one.",
    "uses": [
      "Verb + Prep + Object (e.g., Wait for me).",
      "Verb + Object + Prep + Object (e.g., Prevent him from leaving).",
      "Verb + Direct Object (No Prep) (e.g., Discuss the plan)."
    ],
    "patterns": [
      {
        "name": "Pattern 1: Intransitive Verb + Preposition",
        "formula": "Verb + Preposition + Noun / V-ing",
        "explanation": "Example: Rely on, Insist on, Apologize for, Succeed in, Believe in."
      },
      {
        "name": "Pattern 2: Transitive Verb + Object + Preposition",
        "formula": "Verb + Object + Preposition + Noun / V-ing",
        "explanation": "Example: Accuse [someone] of, Congratulate [someone] on, Protect [someone] from."
      },
      {
        "name": "The Gerund Rule",
        "formula": "Preposition + Verb-ING",
        "explanation": "If any verb follows a preposition, it MUST be in the -ing form (a gerund). Never use a base verb or an infinitive."
      }
    ],
    "stepByStep": "How to handle verbs after prepositions:<br><br>1. <strong>Identify the verb-prep pair:</strong> 'succeed in'.<br>2. <strong>Decide what comes next.</strong> Is it a noun (the test) or an action (pass)?<br>3. <strong>If it's an action, add -ING.</strong> 'pass' becomes 'passing'.<br>4. <strong>Result:</strong> 'He succeeded in <em>passing</em> the test.'<br>5. <strong>Never say:</strong> 'He succeeded in to pass the test.'",
    "examples": [
      { "type": "Verb + About", "sentence": "They are arguing about money.", "note": "Complain about, worry about, care about." },
      { "type": "Verb + From", "sentence": "He hasn't recovered from his illness.", "note": "Suffer from, protect from, prevent from." },
      { "type": "Verb + In", "sentence": "Do you believe in ghosts?", "note": "Succeed in, specialize in, participate in." },
      { "type": "Verb + Of", "sentence": "I approve of this message.", "note": "Accuse of, consist of, smell of." },
      { "type": "Verb + On", "sentence": "I rely on my alarm clock.", "note": "Depend on, concentrate on, insist on." },
      { "type": "Verb + To", "sentence": "Please apologize to your brother.", "note": "Listen to, object to, belong to." },
      { "type": "Verb + For", "sentence": "She applied for the job.", "note": "Wait for, search for, care for." },
      
      { "type": "Classroom", "sentence": "Please concentrate on your own test.", "note": "Concentrate requires 'on'." },
      { "type": "Classroom", "sentence": "He apologized for arriving late.", "note": "Notice 'for' + -ing verb (arriving)." },
      
      { "type": "Real-Life", "sentence": "I completely forgot to pay for the coffee.", "note": "'Pay' takes 'for' the item." },
      { "type": "Real-Life", "sentence": "Stop staring at me!", "note": "'Stare', 'look', 'glance' all take 'at'." },
      
      { "type": "Advanced", "sentence": "The lawyer accused the CEO of embezzling funds.", "note": "Accuse + Object + of + V-ing." }
    ],
    "commonMistakes": [
      {
        "wrong": "She insisted to pay for the meal.",
        "correct": "She insisted on paying for the meal.",
        "explanation": "The verb 'insist' takes the preposition 'on'. Because 'on' is a preposition, the next verb must be an -ing gerund (paying).",
        "fix": "Use 'insist on + V-ing'."
      },
      {
        "wrong": "We need to discuss about the budget.",
        "correct": "We need to discuss the budget.",
        "explanation": "'Discuss' is a transitive verb in English. It means 'talk about'. Adding 'about' is a repetitive mistake.",
        "fix": "Never use 'about' after 'discuss'."
      },
      {
        "wrong": "I look forward to meet you.",
        "correct": "I look forward to meeting you.",
        "explanation": "This is a classic trap! The 'to' in 'look forward to' is a PREPOSITION, not part of an infinitive. Therefore, the next verb must be -ing.",
        "fix": "Always use 'look forward to + V-ing'."
      },
      {
        "wrong": "He married with his high school sweetheart.",
        "correct": "He married his high school sweetheart.",
        "explanation": "The verb 'marry' takes a direct object (no preposition). Only the adjective form takes a preposition: 'He IS married TO her.'",
        "fix": "Verb: Marry [someone]. Adjective: Be married TO [someone]."
      }
    ],
    "quickComparison": "<strong>Hear about vs. Hear of vs. Hear from:</strong> 'Hear about' = get information about a story/event. 'Hear of' = know that something exists. 'Hear from' = receive an email/call from someone.",
    "indonesianLearnerWarning": "Indonesian often uses 'dengan' (with) where English uses something else. Beware of: 'marry with' (marry NO PREP), 'angry with' (angry at), and 'meet with' (meet NO PREP for standard encounters).",
    "practicePrompts": [
      "Fill in the blank: 'I am looking forward ___ ___ (see) you.'",
      "Correct the mistake: 'We need to emphasize on this point.'",
      "Write three sentences using: 'succeed in', 'rely on', and 'accuse [someone] of'.",
      "Combine these ideas: 'He apologized. He broke the vase.' (Use apologize for + V-ing).",
      "Speaking prompt: What is something you strongly 'believe in'? What is something you often 'worry about'?"
    ],
    "classroomUse": "<strong>The Preposition Ping-Pong:</strong> Divide the class into two teams. The teacher shouts a verb (e.g., 'Depend!'). The first team to shout back the correct preposition ('On!') gets a point.",
    "summary": [
      "Many verbs require specific dependent prepositions.",
      "If a verb follows a preposition, it MUST end in -ing.",
      "Watch out for the 'Look forward to + V-ing' trap.",
      "Some verbs take NO prepositions (discuss, marry, emphasize, approach).",
      "Memorize verbs and prepositions together as vocabulary chunks."
    ]
  },
  {
    "id": "grammar-adjective-preposition-patterns",
    "backHref": "prepositions.html",
    "backLabel": "Back to Prepositions",
    "title": "Adjective + Preposition Patterns",
    "skill": "Grammar",
    "category": "Dependent Prepositions",
    "level": "Advanced",
    "description": "Learn which prepositions follow adjectives of feeling, skill, and connection.",
    "introduction": "When you want to describe your feelings, skills, or how things relate to each other, you use adjectives. But in English, you often need to connect that adjective to the cause or object of the feeling. 'I am afraid.' Afraid of what? 'Afraid OF spiders.' Just like verbs, many adjectives are permanently glued to specific prepositions. If you use the wrong one, the sentence breaks down. Let's learn how to pair adjectives with their perfect preposition partners.",
    "learningGoals": [
      "Memorize common Adjective + Preposition combinations.",
      "Group adjectives logically (e.g., skills take 'at', emotions take 'about' or 'of').",
      "Apply the gerund rule (Adjective + Prep + V-ing)."
    ],
    "meaning": "Dependent prepositions follow adjectives to introduce the noun or action that causes the feeling or state. We use 'to be' + Adjective + Preposition + Object. The preposition connects the adjective to the noun phrase.",
    "uses": [
      "To describe skills (e.g., good at, bad at, terrible at).",
      "To describe emotions and worries (e.g., worried about, angry about, afraid of).",
      "To describe similarity or connection (e.g., similar to, different from, married to, full of)."
    ],
    "patterns": [
      {
        "name": "The Adjective Bridge",
        "formula": "Subject + Be Verb + Adjective + Preposition + Noun / V-ing",
        "explanation": "Example: I + am + interested + in + history."
      },
      {
        "name": "Emotions about Things vs People",
        "formula": "Angry/Annoyed ABOUT [something] | Angry/Annoyed WITH/AT [someone]",
        "explanation": "Some adjectives change their preposition depending on whether the object is a person or a situation."
      }
    ],
    "stepByStep": "How to learn Adjective + Prep pairs by grouping:<br><br>1. <strong>Skill Group (AT):</strong> good at, bad at, terrible at, excellent at.<br>2. <strong>Fear/Fascination Group (OF):</strong> afraid of, scared of, terrified of, fond of, proud of.<br>3. <strong>Anxiety Group (ABOUT):</strong> worried about, nervous about, excited about, stressed about.<br>4. <strong>Connection Group (TO):</strong> married to, related to, similar to, accustomed to, addicted to.<br>Grouping them helps your brain memorize the patterns faster!",
    "examples": [
      { "type": "Adjective + At", "sentence": "He is brilliant at playing the piano.", "note": "Skill. Notice the -ing verb." },
      { "type": "Adjective + Of", "sentence": "I am very proud of your achievements.", "note": "Emotion/Fascination." },
      { "type": "Adjective + Of", "sentence": "The room is full of smoke.", "note": "Content." },
      { "type": "Adjective + About", "sentence": "She is anxious about the exam.", "note": "Worry/Anticipation." },
      { "type": "Adjective + To", "sentence": "Your shoes are similar to mine.", "note": "Comparison/Connection." },
      { "type": "Adjective + With", "sentence": "I am so bored with this TV show.", "note": "Satisfaction/Frustration." },
      
      { "type": "Classroom", "sentence": "Who is absent from class today?", "note": "'Absent' takes 'from'." },
      { "type": "Classroom", "sentence": "Are you capable of finishing this by tomorrow?", "note": "'Capable' takes 'of'." },
      
      { "type": "Real-Life", "sentence": "This software is not compatible with my computer.", "note": "'Compatible' takes 'with'." },
      { "type": "Real-Life", "sentence": "Sugar is bad for your teeth.", "note": "'Bad for' means harmful. 'Bad at' means lacking skill." },
      
      { "type": "Advanced", "sentence": "The region is notorious for its harsh winters.", "note": "Famous/notorious take 'for'." },
      { "type": "Advanced", "sentence": "She is immune to the virus.", "note": "'Immune' takes 'to'." }
    ],
    "commonMistakes": [
      {
        "wrong": "I am interested for that job.",
        "correct": "I am interested in that job.",
        "explanation": "'Interested' always takes 'in', never 'for'.",
        "fix": "Memorize 'interested in'."
      },
      {
        "wrong": "He is good in sports.",
        "correct": "He is good at sports.",
        "explanation": "We use 'at' for skills and abilities, not 'in'.",
        "fix": "Change 'in' to 'at' for good, bad, excellent, terrible."
      },
      {
        "wrong": "My phone is different than yours.",
        "correct": "My phone is different from yours.",
        "explanation": "While 'different than' is common in spoken American English, 'different from' is the grammatically correct standard worldwide.",
        "fix": "Use 'different from' in academic and formal English."
      },
      {
        "wrong": "I am accustomed to sleep late.",
        "correct": "I am accustomed to sleeping late.",
        "explanation": "Just like 'look forward to', the 'to' in 'accustomed to' and 'addicted to' is a preposition. It must be followed by an -ing verb.",
        "fix": "Always use -ing after 'accustomed to'."
      }
    ],
    "quickComparison": "<strong>Good at vs. Good for:</strong> 'I am good AT swimming' (Skill). 'Vegetables are good FOR you' (Health benefit). The preposition changes the meaning!",
    "indonesianLearnerWarning": "Indonesian speakers often say 'takut dengan' (afraid with) or 'marah dengan' (angry with). In English, it is 'afraid OF' and 'angry AT/WITH'. Also, 'tertarik dengan' must become 'interested IN', not 'interested with'.",
    "practicePrompts": [
      "Fill in the blanks: 'I am terrified ___ spiders, but I am fascinated ___ insects.'",
      "Correct the mistake: 'She is married with a doctor.'",
      "Write a sentence using 'tired of' + an -ing verb.",
      "How do you say someone lacks skill in cooking? (Use 'terrible').",
      "Speaking prompt: Talk about a subject you are 'interested in', a skill you are 'good at', and something you are 'worried about'."
    ],
    "classroomUse": "<strong>The 'Me Too' Game:</strong> Have students stand in a circle. One student says a true sentence using an adjective+prep (e.g., 'I am afraid of snakes'). Anyone who agrees steps into the middle and says 'Me too!'.",
    "summary": [
      "Adjectives connect to their objects using specific prepositions.",
      "Skills use AT (good at, bad at).",
      "Fears and feelings often use OF (afraid of, proud of).",
      "Worries use ABOUT (anxious about, excited about).",
      "If you use a verb after these, it MUST end in -ing (e.g., good at reading)."
    ]
  },
  {
    "id": "grammar-noun-preposition-patterns",
    "backHref": "prepositions.html",
    "backLabel": "Back to Prepositions",
    "title": "Noun + Preposition Patterns",
    "skill": "Grammar",
    "category": "Dependent Prepositions",
    "level": "Advanced",
    "description": "Learn which prepositions follow specific abstract nouns.",
    "introduction": "We have looked at verbs and adjectives, but nouns have dependent prepositions too! When you talk about the 'reason', the 'cause', the 'solution', or the 'advantage', you need a preposition to introduce the rest of the idea. The tricky part? Similar words often use different prepositions. For example, why is it the 'reason FOR' but the 'cause OF'? Let's break down the most common noun-preposition pairs used in academic and professional English.",
    "learningGoals": [
      "Memorize common Noun + Preposition combinations.",
      "Understand the difference between 'reason for' and 'cause of'.",
      "Improve formal and academic writing by using accurate noun phrases."
    ],
    "meaning": "A noun + preposition pattern is used to connect an abstract noun (like an idea, problem, or relationship) to the specific topic it refers to. These pairings are fixed by convention in the English language.",
    "uses": [
      "To explain causes (reason for, cause of).",
      "To discuss solutions (answer to, solution to).",
      "To show changes or trends (increase in, decrease in).",
      "To show relationships (connection between, relationship with)."
    ],
    "patterns": [
      {
        "name": "The 'For' Nouns (Purpose/Justification)",
        "formula": "Noun + For + [Object]",
        "explanation": "Example: A demand for, a need for, a reason for, a cure for."
      },
      {
        "name": "The 'Of' Nouns (Belonging/Cause)",
        "formula": "Noun + Of + [Object]",
        "explanation": "Example: An advantage of, a disadvantage of, a cause of, a picture of."
      },
      {
        "name": "The 'To' Nouns (Keys/Responses)",
        "formula": "Noun + To + [Object]",
        "explanation": "Example: A solution to, an answer to, a key to, a reaction to, damage to."
      },
      {
        "name": "The 'In' Nouns (Changes)",
        "formula": "Noun + In + [Object]",
        "explanation": "Example: An increase in, a decrease in, a rise in, a fall in."
      }
    ],
    "stepByStep": "How to use these in academic or formal writing:<br><br>1. <strong>Identify the trend or idea:</strong> 'Prices are going up.'<br>2. <strong>Choose the noun form:</strong> 'An increase'.<br>3. <strong>Add the correct preposition:</strong> 'increase IN'.<br>4. <strong>Form the phrase:</strong> 'An increase in prices.'<br>5. <strong>Build the sentence:</strong> 'There has been a sudden <em>increase in prices</em> this year.'",
    "examples": [
      { "type": "Noun + For", "sentence": "Nobody knows the reason for the delay.", "note": "Reason takes 'for'." },
      { "type": "Noun + Of", "sentence": "They are investigating the cause of the fire.", "note": "Cause takes 'of'." },
      { "type": "Noun + To", "sentence": "Have you found a solution to the problem?", "note": "Solution takes 'to'." },
      { "type": "Noun + To", "sentence": "What was his reaction to the news?", "note": "Reaction takes 'to'." },
      { "type": "Noun + In", "sentence": "There was a sharp decrease in sales.", "note": "Words of change/graphs take 'in'." },
      { "type": "Noun + Between", "sentence": "Is there a connection between diet and health?", "note": "Linking two distinct things." },
      
      { "type": "Classroom", "sentence": "Who knows the answer to question 4?", "note": "Answer takes 'to'." },
      { "type": "Classroom", "sentence": "There is a need for more textbooks.", "note": "Need takes 'for'." },
      
      { "type": "Real-Life", "sentence": "I have a good relationship with my boss.", "note": "Relationship takes 'with' (when talking about people)." },
      { "type": "Real-Life", "sentence": "Can you send me a picture of your dog?", "note": "Images/maps/pictures take 'of'." },
      
      { "type": "Advanced", "sentence": "The new policy will cause significant damage to the environment.", "note": "Damage takes 'to'." },
      { "type": "Advanced", "sentence": "One major advantage of working from home is the lack of a commute.", "note": "Advantage takes 'of'. Notice the -ing verb following it." }
    ],
    "commonMistakes": [
      {
        "wrong": "What is the reason of this rule?",
        "correct": "What is the reason for this rule?",
        "explanation": "While 'cause' takes 'of', 'reason' always takes 'for'.",
        "fix": "Memorize: Cause OF / Reason FOR."
      },
      {
        "wrong": "I have the key of the door.",
        "correct": "I have the key to the door.",
        "explanation": "Keys, solutions, and answers do not 'belong' to the door using 'of'. They open/respond TO something.",
        "fix": "Use 'to' with key, answer, and solution."
      },
      {
        "wrong": "There is an increase of 20% of sales.",
        "correct": "There is an increase of 20% in sales.",
        "explanation": "Use 'of' for the number/percentage, but use 'in' for the thing that is changing.",
        "fix": "Increase OF [number] IN [item]."
      },
      {
        "wrong": "The damage of the car was expensive.",
        "correct": "The damage to the car was expensive.",
        "explanation": "The noun 'damage' takes 'to' to show the recipient of the harm.",
        "fix": "Use 'to' after damage."
      }
    ],
    "quickComparison": "<strong>Relationship with vs. Relationship between:</strong> I have a good relationship WITH my brother. There is a strong relationship BETWEEN stress and illness. (Use 'with' for one side, 'between' for two sides).",
    "indonesianLearnerWarning": "In Indonesian, 'solusi dari' or 'kunci dari' uses 'dari/of'. In English, you must switch your thinking: solutions, answers, and keys point TOWARDS a problem. Therefore, they use 'TO'. (Solution to, Answer to, Key to).",
    "practicePrompts": [
      "Fill in the blanks: 'The cause ___ the accident is unknown, but the reason ___ the traffic jam is clear.'",
      "Correct the mistake: 'I need a solution for this math problem.'",
      "Write a sentence describing a chart showing an 'increase' and a 'decrease'.",
      "What preposition follows 'advantage' and 'disadvantage'?",
      "Speaking prompt: Discuss the 'advantages of' and 'disadvantages of' using smartphones in school."
    ],
    "classroomUse": "<strong>The Graph Describer:</strong> Draw a line graph on the board showing rising and falling lines. Have students write formal sentences describing the graph using 'an increase in', 'a rise in', 'a fall in', and 'a decrease in'.",
    "summary": [
      "Nouns also require specific prepositions, especially in formal writing.",
      "Cause OF vs. Reason FOR.",
      "Solution, Answer, Key, Reaction, and Damage all take TO.",
      "Increase, Decrease, Rise, and Fall all take IN.",
      "Advantage and Disadvantage take OF."
    ]
  },
  {
    "id": "grammar-common-preposition-mistakes",
    "backHref": "prepositions.html",
    "backLabel": "Back to Prepositions",
    "title": "Top 10 Preposition Mistakes",
    "skill": "Grammar",
    "category": "Preposition Repair",
    "level": "Intermediate",
    "description": "Fix the most common preposition errors made by English learners.",
    "introduction": "Prepositions are the leading cause of headaches for English learners worldwide. Because they rarely translate directly between languages, almost everyone makes mistakes with them. In this final lesson of the Prepositions pathway, we are going to act like grammar doctors. We will diagnose the top 10 most common preposition mistakes, explain exactly why they happen, and provide the cure. Mastering this list will instantly elevate the accuracy of your spoken and written English.",
    "learningGoals": [
      "Identify the 10 most frequent preposition errors.",
      "Understand why direct translation causes these specific mistakes.",
      "Apply the correct preposition patterns automatically."
    ],
    "meaning": "A preposition mistake usually happens for three reasons: 1) Translating directly from your native language. 2) Adding a preposition where none is needed. 3) Using an infinitive (to + verb) instead of a gerund (-ing) after a preposition.",
    "uses": [
      "To audit your own speaking and writing.",
      "To unlearn bad habits formed by direct translation.",
      "To memorize the exceptions that break the normal rules."
    ],
    "patterns": [
      {
        "name": "The Phantom Preposition",
        "formula": "Verb + [Nothing] + Object",
        "explanation": "Some verbs reject prepositions entirely. Never put a preposition after: discuss, marry, contact, enter, approach, reach."
      },
      {
        "name": "The Gerund Mandate",
        "formula": "Preposition + Verb-ING",
        "explanation": "If a verb follows ANY preposition (in, on, at, for, about, of, from), it MUST take an -ing form. (Exception: the infinitive 'to', but watch out for 'look forward to')."
      }
    ],
    "stepByStep": "How to repair your preposition habits:<br><br>1. <strong>Identify your native language traps.</strong> Which English prepositions do you constantly confuse because of your mother tongue?<br>2. <strong>Create a 'Hit List'.</strong> Write down the 5 mistakes you make most often from the list below.<br>3. <strong>Practice the correct phrase out loud 10 times.</strong> Muscle memory in your mouth is stronger than grammar rules in your head.<br>4. <strong>Stop guessing.</strong> If you aren't sure which preposition a verb takes, look it up in a dictionary. It will always tell you.",
    "examples": [
      { "type": "Correct Usage", "sentence": "We discussed the plan.", "note": "No 'about'." },
      { "type": "Correct Usage", "sentence": "He is married to Sarah.", "note": "No 'with'." },
      { "type": "Correct Usage", "sentence": "I am good at math.", "note": "No 'in'." },
      { "type": "Correct Usage", "sentence": "I arrived at the station.", "note": "No 'to'." },
      { "type": "Correct Usage", "sentence": "I am looking forward to seeing you.", "note": "Must use -ing." },
      
      { "type": "Classroom", "sentence": "The teacher told us to contact him.", "note": "No 'to' after contact." },
      { "type": "Classroom", "sentence": "She apologized for being late.", "note": "Preposition + ing." },
      
      { "type": "Real-Life", "sentence": "I will meet you on Monday.", "note": "Days always take 'on'." },
      { "type": "Real-Life", "sentence": "Thank you for helping me.", "note": "'For' + -ing." },
      
      { "type": "Advanced", "sentence": "Despite the delay, we reached the summit.", "note": "No 'of' after despite. No 'to' after reached." }
    ],
    "commonMistakes": [
      {
        "wrong": "We discussed about the movie.",
        "correct": "We discussed the movie.",
        "explanation": "'Discuss' already means 'talk about'.",
        "fix": "Remove 'about' after 'discuss'."
      },
      {
        "wrong": "He married with my sister.",
        "correct": "He married my sister.",
        "explanation": "The verb 'marry' takes a direct object.",
        "fix": "Remove 'with'. (Only use 'to' if using the adjective 'is married to')."
      },
      {
        "wrong": "I arrived to London.",
        "correct": "I arrived in London.",
        "explanation": "Arrive takes 'at' for buildings/points, and 'in' for cities/countries. Never 'to'.",
        "fix": "Use 'in/at' after 'arrive'."
      },
      {
        "wrong": "I am good in English.",
        "correct": "I am good at English.",
        "explanation": "Skills take 'at'.",
        "fix": "Change 'in' to 'at' for good/bad."
      },
      {
        "wrong": "Thank you for help me.",
        "correct": "Thank you for helping me.",
        "explanation": "Prepositions must be followed by nouns or gerunds (-ing).",
        "fix": "Add -ing to the verb after the preposition."
      }
    ],
    "quickComparison": "<strong>Despite vs. In spite of:</strong> They mean the exact same thing, but 'Despite' takes NO preposition, while 'In spite' REQUIRES 'of'. (Despite the rain / In spite of the rain).",
    "indonesianLearnerWarning": "Indonesian speakers frequently make the 'Phantom Preposition' mistake because of translations. 'Membahas tentang' makes you want to say 'discuss about'. 'Menghubungi ke' makes you want to say 'contact to'. You must drop the preposition entirely in English.",
    "practicePrompts": [
      "Find the error: 'I am looking forward to meet my new boss.'",
      "Find the error: 'Please contact to the manager.'",
      "Find the error: 'She is angry with me.' (Trick question! Is this wrong?)",
      "Write three sentences thanking someone for doing an action (Thank you for + V-ing).",
      "Speaking prompt: Read the 'Common Mistakes' list out loud. Then cover the screen and try to recite the correct versions from memory."
    ],
    "classroomUse": "<strong>The Auction Game:</strong> Write 10 sentences on the board (some correct, some containing these common mistakes). Give groups of students 'money'. They must bid to 'buy' the sentences they think are 100% correct.",
    "summary": [
      "Do not use prepositions after: discuss, marry, contact, reach, enter.",
      "Always use 'at' for skills (good at, bad at).",
      "Always use 'to' (or nothing) for marriage (married to her / married her).",
      "Never use 'to' after 'arrive'.",
      "Always use an -ing verb if a verb follows a preposition."
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
console.log('Updated 5 remaining preposition lessons using ESM');
