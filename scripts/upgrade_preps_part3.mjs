import fs from 'fs';
import { lessons } from '../data/lessons.js';

const updated = [
  {
    "id": "grammar-by-within-in-deadlines",
    "backHref": "prepositions.html",
    "backLabel": "Back to Prepositions",
    "title": "By, Within, In for Deadlines",
    "skill": "Grammar",
    "category": "Time Prepositions",
    "level": "Intermediate",
    "description": "Learn how to talk about deadlines and time limits.",
    "introduction": "In the business world and at school, managing time is everything. If a teacher says 'Finish this in an hour,' is that different from 'Finish this within an hour'? If your boss says 'I need this by Friday,' can you give it to them on Saturday? Understanding the prepositions 'by', 'within', and 'in' is crucial for communicating deadlines clearly. A single preposition mistake here can cause missed flights, late assignments, and unhappy managers. Let's learn how to set strict time limits.",
    "learningGoals": [
      "Use 'by' to set a strict, exact deadline (not later than).",
      "Use 'within' to set a time boundary limit (before the duration ends).",
      "Understand the future meaning of 'in' (at the end of a specific duration)."
    ],
    "meaning": "'By' means 'not later than' a specific time. It is the ultimate deadline word. 'Within' means inside a specific duration of time (e.g., before 30 minutes is over). 'In' (when talking about the future) means at the end of a specific duration (e.g., I will return 30 minutes from now).",
    "uses": [
      "BY: For exact point-in-time deadlines (e.g., by 5 PM, by Friday, by tomorrow).",
      "WITHIN: For a duration limit; the action can happen anytime before the timer runs out (e.g., within 3 days).",
      "IN: For a future starting point; the action happens at the end of the duration (e.g., I'll be back in 10 minutes)."
    ],
    "patterns": [
      {
        "name": "The 'By' Deadline",
        "formula": "Action + By + [Exact Time/Date]",
        "explanation": "Example: Submit the report by Friday. (You can submit it Monday, Tuesday, Wednesday, or Thursday, but Friday is the absolute last moment)."
      },
      {
        "name": "The 'Within' Limit",
        "formula": "Action + Within + [Amount of Time]",
        "explanation": "Example: Submit the report within 3 days. (You have a 72-hour window. Anytime inside that window is okay)."
      },
      {
        "name": "The 'In' Future point",
        "formula": "Action + In + [Amount of Time]",
        "explanation": "Example: The train leaves in 10 minutes. (It leaves exactly 10 minutes from now)."
      }
    ],
    "stepByStep": "How to choose between By and Within:<br><br>1. <strong>Look at the time phrase:</strong> Are you giving a name/date (Friday, 5 PM) or an amount of time (3 days, 2 hours)?<br>2. <strong>If it's a date/time:</strong> Use <em>By</em>. 'I need it by Friday.'<br>3. <strong>If it's an amount of time:</strong> Use <em>Within</em>. 'I need it within 3 days.'<br>4. <strong>Warning for 'In':</strong> If you say 'I will finish it in 3 days', it usually means it will take you 3 full days to finish it. If you want to say 'anytime before 3 days is over', use 'within'.",
    "examples": [
      { "type": "By (Deadline)", "sentence": "You must check out of the hotel by 11 AM.", "note": "11 AM is the absolute latest time." },
      { "type": "By (Deadline)", "sentence": "I will finish this by tomorrow.", "note": "Tomorrow is the end point." },
      { "type": "Within (Limit)", "sentence": "We will deliver your food within 45 minutes.", "note": "Anytime between now and 45 minutes from now." },
      { "type": "Within (Limit)", "sentence": "Please reply within two business days.", "note": "A duration limit." },
      { "type": "In (Future point)", "sentence": "The movie starts in 5 minutes.", "note": "5 minutes from right now." },
      
      { "type": "Classroom", "sentence": "Hand in your homework by Friday.", "note": "Teacher sets a firm deadline." },
      { "type": "Classroom", "sentence": "Finish the quiz within 30 minutes.", "note": "A duration limit for a test." },
      { "type": "Classroom", "sentence": "The bell will ring in 2 minutes.", "note": "Counting down to an event." },
      
      { "type": "Real-Life", "sentence": "Pay the bill by the 15th of the month.", "note": "Standard billing deadline." },
      { "type": "Real-Life", "sentence": "I'll call you back in an hour.", "note": "Meaning 'after one hour has passed'." },
      { "type": "Real-Life", "sentence": "If you are not satisfied, return it within 30 days.", "note": "Standard refund policy." },
      
      { "type": "Advanced", "sentence": "The contractor must complete the renovations by the end of the fiscal year.", "note": "'by' used with a complex time phrase." },
      { "type": "Advanced", "sentence": "Any appeals must be filed within a strict 14-day window.", "note": "'within' used with an adjective modifier." }
    ],
    "commonMistakes": [
      {
        "wrong": "Please send the file until Friday.",
        "correct": "Please send the file by Friday.",
        "explanation": "'Until' is for an action that continues continuously (like sleeping or waiting). 'Sending' a file is a short action. For short actions with a deadline, use 'by'.",
        "fix": "Use 'by' for one-time actions. Use 'until' for continuous actions."
      },
      {
        "wrong": "I will finish it by 3 days.",
        "correct": "I will finish it within 3 days.",
        "explanation": "'By' cannot be used with an amount of time. It must be a specific point in time.",
        "fix": "Change 'by' to 'within' or 'in' when you have a number of days/hours."
      },
      {
        "wrong": "We will arrive within 5 PM.",
        "correct": "We will arrive by 5 PM.",
        "explanation": "'Within' cannot be used with a specific clock time. It must be an amount of time.",
        "fix": "Change 'within' to 'by' for clock times."
      },
      {
        "wrong": "I will see you in next week.",
        "correct": "I will see you next week.",
        "explanation": "Remember, words like next, last, this, and tomorrow do not take prepositions.",
        "fix": "Remove the preposition."
      }
    ],
    "quickComparison": "<strong>Until vs. By:</strong> I will <em>wait</em> (continuous) <strong>until</strong> 5 PM. I will <em>arrive</em> (short action) <strong>by</strong> 5 PM.",
    "indonesianLearnerWarning": "In Indonesian, 'sampai' is used for both 'until' and 'by' (e.g., kumpulkan sampai hari Jumat). In English, 'submit until Friday' is a huge mistake because 'submit' is a one-time action. You must use 'by Friday'.",
    "practicePrompts": [
      "Choose By or Until: 'I will be at the office ___ 6 PM.' vs 'I will leave the office ___ 6 PM.'",
      "Choose By or Within: 'Please reply ___ 24 hours.'",
      "Correct the mistake: 'The train will arrive by 10 minutes.'",
      "Write a sentence setting a deadline for a project using 'by'.",
      "Speaking prompt: Pretend you are a boss giving instructions to an employee. Use 'by' and 'within' to set deadlines."
    ],
    "classroomUse": "<strong>The Deadline Challenge:</strong> Give students 5 scenarios (e.g., 'You are returning a library book', 'You are taking a pill', 'You are waiting for a bus'). Have them write the correct deadline rule for each using By, Within, or Until.",
    "summary": [
      "BY is for exact deadlines (not later than 5 PM).",
      "WITHIN is for time limits (inside a 3-hour window).",
      "IN is for the future (at the end of 3 hours).",
      "By goes with dates/times. Within goes with amounts of time.",
      "Use BY for short actions. Use UNTIL for continuous actions."
    ]
  },
  {
    "id": "grammar-prepositions-in-on-at-place",
    "backHref": "prepositions.html",
    "backLabel": "Back to Prepositions",
    "title": "In, On, At for Place",
    "skill": "Grammar",
    "category": "Place Prepositions",
    "level": "Beginner",
    "description": "Master the 3D, 2D, and 1D rules for location prepositions.",
    "introduction": "Where are you right now? Are you 'in' a room, 'on' a chair, or 'at' a desk? Just like time, English uses 'in', 'on', and 'at' to organize physical space. But instead of the 'Time Triangle', we use a 'Dimensions Rule'. We look at whether a place is a 3D box, a 2D surface, or just a 1D dot on a map. Once you understand how English speakers visualize space, you will never guess your location prepositions again.",
    "learningGoals": [
      "Use 'in' for 3-dimensional enclosed spaces (boxes, rooms, cities).",
      "Use 'on' for 2-dimensional surfaces and lines (tables, walls, streets).",
      "Use 'at' for 1-dimensional specific points and events (at the door, at a party)."
    ],
    "meaning": "IN represents enclosure (3D space). You are surrounded by borders or walls. ON represents contact with a surface (2D space). You are touching a floor, wall, or ceiling, or positioned along a line (a river or street). AT represents a specific point (1D space). It doesn't matter if you are inside or outside; it just marks an 'X' on a map or an event you are attending.",
    "uses": [
      "IN (Enclosure): Rooms, buildings, cities, countries, containers, cars.",
      "ON (Surface/Line): Tables, floors, walls, ceilings, streets, islands, public transport (bus/train/plane).",
      "AT (Point/Event): Specific addresses, doors/corners, parties, concerts, school/work/home."
    ],
    "patterns": [
      {
        "name": "The 'In' Pattern (3D)",
        "formula": "in + [container/room/city/country]",
        "explanation": "Example: in the box, in the kitchen, in Tokyo, in France."
      },
      {
        "name": "The 'On' Pattern (2D)",
        "formula": "on + [surface/street/large vehicle]",
        "explanation": "Example: on the table, on the wall, on Main Street, on a bus."
      },
      {
        "name": "The 'At' Pattern (1D)",
        "formula": "at + [specific point/address/event]",
        "explanation": "Example: at the bus stop, at 123 Main St, at a party, at work."
      }
    ],
    "stepByStep": "To choose the right place preposition:<br><br>1. <strong>Visualize the noun.</strong> E.g., 'the wall'.<br>2. <strong>Ask: Is it a box, a surface, or a point?</strong> A wall is a flat surface.<br>3. <strong>Apply the rule:</strong> Surfaces take 'on'. -> 'The picture is <em>on the wall</em>.'<br>4. <strong>Exception Check:</strong> Vehicles. Cars and taxis are small boxes = 'in the car'. Buses, trains, and planes have a floor you can walk on = 'on the bus'." ,
    "examples": [
      { "type": "IN (Enclosure)", "sentence": "The keys are in my pocket.", "note": "Pocket = container." },
      { "type": "IN (City/Country)", "sentence": "She lives in Paris.", "note": "City = borders." },
      { "type": "ON (Surface)", "sentence": "There is a spider on the ceiling.", "note": "Ceiling = surface." },
      { "type": "ON (Transport)", "sentence": "I am on the train.", "note": "Large vehicle with a deck." },
      { "type": "AT (Point)", "sentence": "Someone is waiting at the door.", "note": "A point in space." },
      
      { "type": "Classroom", "sentence": "Write your name on the paper.", "note": "Surface." },
      { "type": "Classroom", "sentence": "The teacher is standing at the front of the room.", "note": "Specific point." },
      { "type": "Classroom", "sentence": "Put your phones in your bags.", "note": "Container." },
      
      { "type": "Real-Life", "sentence": "Let's meet at the coffee shop.", "note": "A meeting point." },
      { "type": "Real-Life", "sentence": "They live at 45 Oxford Street.", "note": "Exact address takes 'at'. (Just the street takes 'on')." },
      { "type": "Real-Life", "sentence": "We had fun at the concert.", "note": "An event takes 'at'." },
      
      { "type": "Advanced", "sentence": "The headquarters is located on the island of Manhattan.", "note": "Islands take 'on'." },
      { "type": "Advanced", "sentence": "She works at a bank in London.", "note": "'at' for the specific company point, 'in' for the city enclosure." }
    ],
    "commonMistakes": [
      {
        "wrong": "I am in the bus.",
        "correct": "I am on the bus.",
        "explanation": "For public transport where you can stand up and walk along the floor (bus, train, plane, ship), use 'on'. Use 'in' only for cars, taxis, and helicopters.",
        "fix": "Use 'on' for large transport."
      },
      {
        "wrong": "He lives in 24 Baker Street.",
        "correct": "He lives at 24 Baker Street.",
        "explanation": "While 'Baker Street' takes 'on', adding the exact house number '24' makes it a specific point on the map. Points take 'at'.",
        "fix": "Use 'at' for exact addresses."
      },
      {
        "wrong": "I saw it on the internet.",
        "correct": "I saw it on the internet.",
        "explanation": "Wait, this one is correct! But learners often say 'in the internet'. Digital spaces (internet, website, screen, TV, phone) are treated as flat surfaces in English.",
        "fix": "Always use 'on' for screens and digital spaces."
      },
      {
        "wrong": "I am at London.",
        "correct": "I am in London.",
        "explanation": "Cities and countries are large areas with borders (enclosures). They always take 'in'.",
        "fix": "Change 'at' to 'in' for cities/countries."
      }
    ],
    "quickComparison": "<strong>In the hospital vs. At the hospital:</strong> 'In the hospital' means you are a patient inside a bed. 'At the hospital' means you are visiting or working there (it's just a point on the map for you).",
    "indonesianLearnerWarning": "In Indonesian, 'di' is used for in, on, and at (di kamar, di meja, di sekolah). You must stop translating 'di' and start visualizing the space: Is it a box (in), a surface (on), or a map point (at)?",
    "practicePrompts": [
      "Fill in the blanks: 'I live ___ Jakarta, ___ Sudirman Street, ___ number 45.'",
      "Correct the mistake: 'I left my jacket in the table.'",
      "Choose in/on/at: '___ the airport', '___ the airplane', '___ my suitcase'.",
      "Write a sentence describing where you are right now using all three prepositions.",
      "Speaking prompt: Describe the route from your house to your school/work, mentioning the streets and vehicles you use."
    ],
    "classroomUse": "<strong>The Spatial Map:</strong> Draw a map on the board with a city, a street, a specific house, a car, and a bus. Point to each item randomly. Students must shout 'IN!', 'ON!', or 'AT!' as fast as they can.",
    "summary": [
      "IN is for 3D enclosures (rooms, cities, boxes, cars).",
      "ON is for 2D surfaces (tables, walls, streets, screens, buses).",
      "AT is for 1D points (addresses, doors, events like parties).",
      "Use AT for exact addresses, ON for just the street name.",
      "Digital spaces (TV, internet, phone, website) always take ON."
    ]
  },
  {
    "id": "grammar-above-over-under-below-between-among",
    "backHref": "prepositions.html",
    "backLabel": "Back to Prepositions",
    "title": "Above, Over, Under, Below, Between, Among",
    "skill": "Grammar",
    "category": "Place Prepositions",
    "level": "Intermediate",
    "description": "Learn to describe vertical positions and relationships between multiple objects.",
    "introduction": "Now that you know 'in', 'on', and 'at', it's time to explore the space around objects. What happens if something is higher than the table, but not touching it? What if something is in the middle of a crowd? English has very specific words to describe vertical space (higher and lower) and relational space (surrounded by things). The differences between 'over' and 'above', or 'between' and 'among', are subtle but crucial for painting an accurate picture in someone's mind.",
    "learningGoals": [
      "Distinguish between 'above' (higher level) and 'over' (covering/moving across).",
      "Distinguish between 'below' (lower level) and 'under' (covered by).",
      "Distinguish between 'between' (two distinct things) and 'among' (a group/crowd)."
    ],
    "meaning": "These prepositions map out relative space. OVER/UNDER usually imply a direct vertical line or one thing covering another. ABOVE/BELOW refer to a general level on a scale (higher or lower), not necessarily directly on top. BETWEEN means in the middle of two clear, separate items. AMONG means surrounded by a group where individual items aren't distinct.",
    "uses": [
      "OVER: Directly higher than, covering, or moving across (e.g., jump over the fence).",
      "ABOVE: At a higher level/measurement (e.g., above sea level).",
      "UNDER: Directly lower than, or covered by (e.g., under the bed).",
      "BELOW: At a lower level/measurement (e.g., below freezing).",
      "BETWEEN: In the middle of 2 (or more distinct) things (e.g., between A and B).",
      "AMONG: Part of a crowd or group (e.g., among the trees)."
    ],
    "patterns": [
      {
        "name": "The Vertical Scale",
        "formula": "Noun + is + Above/Below + Noun/Measurement",
        "explanation": "Use these when there is no physical covering, just a difference in height/level."
      },
      {
        "name": "The Covering Pattern",
        "formula": "Noun + is + Over/Under + Noun",
        "explanation": "Use these when one object physically shields or hides the other."
      },
      {
        "name": "The Relational Pattern",
        "formula": "Between A and B   |   Among [Plural Noun/Group]",
        "explanation": "Always pair 'between' with 'and' if naming two things. 'Among' must be followed by a plural."
      }
    ],
    "stepByStep": "How to choose Between vs. Among:<br><br>1. <strong>Look at the noun(s) following the preposition.</strong><br>2. <strong>Are you naming individual, distinct parties?</strong> (e.g., 'France, Spain, and Italy' OR 'Tom and Jerry').<br>3. <strong>If yes, use <em>Between</em>.</strong> 'A treaty between France, Spain, and Italy.'<br>4. <strong>Are you referring to a blended group or crowd?</strong> (e.g., 'the students', 'the trees').<br>5. <strong>If yes, use <em>Among</em>.</strong> 'He hid among the trees.'",
    "examples": [
      { "type": "Over (Covering/Movement)", "sentence": "She put a blanket over the sleeping child.", "note": "Covering the child." },
      { "type": "Above (Level)", "sentence": "The picture is hanging above the sofa.", "note": "Higher than the sofa, but not covering it." },
      { "type": "Under (Covered)", "sentence": "The cat is hiding under the bed.", "note": "The bed covers the cat." },
      { "type": "Below (Level)", "sentence": "The temperature dropped below zero.", "note": "A measurement on a scale." },
      { "type": "Between (Distinct)", "sentence": "I sat between Sarah and John.", "note": "Two specific individuals." },
      { "type": "Among (Group)", "sentence": "We found a tiny house among the tall trees.", "note": "Surrounded by a collective group." },
      
      { "type": "Classroom", "sentence": "Write your name above the line.", "note": "A higher position on the paper." },
      { "type": "Classroom", "sentence": "Discuss the question among yourselves.", "note": "With the whole group." },
      
      { "type": "Real-Life", "sentence": "The plane flew over the city.", "note": "Movement directly across the top." },
      { "type": "Real-Life", "sentence": "I couldn't decide between the chicken and the fish.", "note": "Two distinct choices." },
      
      { "type": "Advanced", "sentence": "The submarine traveled under the ice, remaining below the radar.", "note": "'Under' for physical covering (ice), 'below' for a measurement scale (radar)." },
      { "type": "Advanced", "sentence": "There is a deep level of trust among the team members.", "note": "Abstract use of 'among' for a collective group." }
    ],
    "commonMistakes": [
      {
        "wrong": "I sat between the crowd.",
        "correct": "I sat among the crowd.",
        "explanation": "'Between' requires distinct points (usually two). A crowd is a collective group, so you must use 'among'.",
        "fix": "Change 'between' to 'among' for groups."
      },
      {
        "wrong": "The temperature is under 20 degrees.",
        "correct": "The temperature is below 20 degrees.",
        "explanation": "For measurements on a scale (temperature, sea level, average), we use 'below' and 'above', not 'under' and 'over'.",
        "fix": "Use 'below/above' for numbers on a scale."
      },
      {
        "wrong": "He put his hands above his ears.",
        "correct": "He put his hands over his ears.",
        "explanation": "If you are covering something completely, use 'over'.",
        "fix": "Change 'above' to 'over' for covering actions."
      },
      {
        "wrong": "The secret is between you, me, and John.",
        "correct": "The secret is between you, me, and John.",
        "explanation": "Wait, this is correct! A common myth is that 'between' is ONLY for two things. Actually, you can use 'between' for three or more things IF they are distinct, named individuals.",
        "fix": "Keep using 'between' if the parties are distinct."
      }
    ],
    "quickComparison": "<strong>Over vs. More than:</strong> In modern English, both are acceptable for numbers! You can say 'Over 50 people' or 'More than 50 people'. (However, for temperatures, stick to 'above zero').",
    "indonesianLearnerWarning": "In Indonesian, 'di antara' is used for both 'between' and 'among'. You must look at the English context: are you talking about two specific things (between A and B), or a general group (among the students)?",
    "practicePrompts": [
      "Choose Between or Among: 'The prize money was divided ___ the five distinct winners.'",
      "Choose Over or Above: 'The bird flew ___ the house.'",
      "Correct the mistake: 'Please don't write under this line.'",
      "Write a sentence describing something hidden 'under' something else.",
      "Speaking prompt: Describe a photograph. What is above, below, and between the main subjects?"
    ],
    "classroomUse": "<strong>The Classroom Map:</strong> Ask a student to stand up. Give them instructions: 'Hold your pen over your head. Put your book under your chair. Stand between two desks. Now walk among the students.'",
    "summary": [
      "OVER/UNDER are used for direct physical covering or movement.",
      "ABOVE/BELOW are used for levels, heights, and measurement scales.",
      "BETWEEN is used for distinct, named things (usually two, but can be more).",
      "AMONG is used when surrounded by a plural group or crowd.",
      "Always use 'above/below' for temperatures and sea levels."
    ]
  },
  {
    "id": "grammar-to-into-onto-from-out-of",
    "backHref": "prepositions.html",
    "backLabel": "Back to Prepositions",
    "title": "Movement: To, Into, Onto, From, Out Of",
    "skill": "Grammar",
    "category": "Direction Prepositions",
    "level": "Intermediate",
    "description": "Learn how to describe motion, direction, and changing locations.",
    "introduction": "So far, we've looked at prepositions of place—where things are resting. But what happens when things start moving? English has a specific set of prepositions of direction. These words are highly dynamic; they paint a picture of an object moving from a starting point, traveling along a path, and arriving at a destination. By adding tiny suffixes like '-to', we change a static resting word (like 'in') into a word of motion (like 'into'). Let's add some action to your grammar.",
    "learningGoals": [
      "Use 'to' and 'from' to show general destination and starting points.",
      "Understand how 'into' and 'out of' show movement crossing a 3D boundary.",
      "Understand how 'onto' and 'off' show movement concerning a 2D surface."
    ],
    "meaning": "'From' marks the starting point of motion. 'To' marks the general destination. When we combine 'in' + 'to' = 'into', it means moving from the outside of a 3D box to the inside. 'Out of' is the opposite of 'into'. When we combine 'on' + 'to' = 'onto', it means moving from a lower place up to rest on a 2D surface. 'Off' is the opposite of 'onto'.",
    "uses": [
      "FROM: The origin or starting point (e.g., from London).",
      "TO: The final destination (e.g., to Paris).",
      "INTO: Movement entering an enclosed space (e.g., walk into the room).",
      "OUT OF: Movement exiting an enclosed space (e.g., step out of the car).",
      "ONTO: Movement landing on a surface (e.g., jump onto the table).",
      "OFF: Movement leaving a surface (e.g., fall off the bike)."
    ],
    "patterns": [
      {
        "name": "The Journey Pattern",
        "formula": "Verb of Motion + From [Origin] + To [Destination]",
        "explanation": "Example: We drove from New York to Boston."
      },
      {
        "name": "The Enclosure Action",
        "formula": "Verb of Motion + Into / Out of + [3D Container/Room]",
        "explanation": "Example: The cat jumped into the box. The dog ran out of the house."
      },
      {
        "name": "The Surface Action",
        "formula": "Verb of Motion + Onto / Off + [2D Surface]",
        "explanation": "Example: She stepped onto the stage. He fell off the ladder."
      }
    ],
    "stepByStep": "How to choose between 'In' and 'Into':<br><br>1. <strong>Look at the verb.</strong> Is it a static verb (be, stay, sleep) or a motion verb (run, jump, walk, drive)?<br>2. <strong>If static:</strong> Use 'In'. 'He is <em>in</em> the room.' (He is resting there).<br>3. <strong>If motion (crossing a boundary):</strong> Use 'Into'. 'He walked <em>into</em> the room.' (He was outside, and now he is inside).<br>4. <strong>Note:</strong> In spoken English, native speakers sometimes use 'in' for motion (He jumped in the pool), but 'into' is strictly correct for crossing boundaries.",
    "examples": [
      { "type": "To / From", "sentence": "I fly from Tokyo to London today.", "note": "Origin and Destination." },
      { "type": "Into (Entry)", "sentence": "She poured water into the glass.", "note": "Moving from outside to inside the glass." },
      { "type": "Out of (Exit)", "sentence": "Get out of the building!", "note": "Moving from inside to outside." },
      { "type": "Onto (Landing)", "sentence": "The cat jumped onto the kitchen counter.", "note": "Moving to rest on a surface." },
      { "type": "Off (Leaving)", "sentence": "Take your shoes off the sofa.", "note": "Removing from a surface." },
      
      { "type": "Classroom", "sentence": "Copy these words from the board into your notebook.", "note": "Origin (board) to Enclosure (notebook pages)." },
      { "type": "Classroom", "sentence": "Please take a pencil out of your bag.", "note": "Exiting a container." },
      
      { "type": "Real-Life", "sentence": "We drove into the tunnel.", "note": "Entering a 3D enclosed space." },
      { "type": "Real-Life", "sentence": "He stepped onto the train.", "note": "Remember, public transport takes 'on', so moving to it takes 'onto'." },
      { "type": "Real-Life", "sentence": "I dropped my phone, and it bounced off the floor.", "note": "Moving away from a surface." },
      
      { "type": "Advanced", "sentence": "The company expanded from a small startup into a global empire.", "note": "'Into' used abstractly for a change of state or transformation." },
      { "type": "Advanced", "sentence": "She was talked out of quitting her job.", "note": "'Out of' used abstractly to mean escaping a decision." }
    ],
    "commonMistakes": [
      {
        "wrong": "We arrived to the hotel.",
        "correct": "We arrived at the hotel.",
        "explanation": "Wait! While 'to' is the destination preposition (go to, drive to, fly to), the verb 'arrive' is an exception. You arrive AT a point or IN a city. You never arrive TO.",
        "fix": "Never use 'to' after 'arrive'."
      },
      {
        "wrong": "She went in the room.",
        "correct": "She went into the room.",
        "explanation": "While 'in' is understood, 'into' is much better to show the action of entering.",
        "fix": "Add 'to' to make it 'into' when crossing a door/boundary."
      },
      {
        "wrong": "I got out from the car.",
        "correct": "I got out of the car.",
        "explanation": "To exit a 3D space, the phrase is 'out of', not 'out from'.",
        "fix": "Change 'from' to 'of'."
      },
      {
        "wrong": "He went to home.",
        "correct": "He went home.",
        "explanation": "'Home' acts as a directional adverb in English. It never takes the preposition 'to'.",
        "fix": "Remove 'to' before 'home'."
      }
    ],
    "quickComparison": "<strong>Get in/out of vs. Get on/off:</strong> For small vehicles (cars/taxis), you get <em>into</em> and get <em>out of</em> them. For large vehicles you can walk on (buses/trains/planes), you get <em>onto</em> and get <em>off</em> them.",
    "indonesianLearnerWarning": "In Indonesian, 'ke' means 'to', 'into', and 'onto'. You must split this up in English depending on the destination (a general place, a box, or a surface). Also, remember the 'home' rule: never say 'go to home' (pergi ke rumah); always say 'go home'.",
    "practicePrompts": [
      "Fill in the blanks: 'The dog jumped ___ the water and swam ___ the shore.'",
      "Correct the mistake: 'I am getting out from the taxi.'",
      "Choose Into or Onto: 'The actor stepped ___ the stage.'",
      "Write a sentence describing someone dropping a phone 'into' something vs 'onto' something.",
      "Speaking prompt: Explain how to get from your bedroom to the street outside. Use into, out of, onto, and off."
    ],
    "classroomUse": "<strong>The Paper Airplane Game:</strong> Have students make a paper airplane. Take turns throwing it. The student must describe the flight path: 'It flew from my hand, over the desk, bounced off the wall, and fell into the bin.'",
    "summary": [
      "TO is for general destination; FROM is the origin.",
      "INTO is for crossing a boundary to get inside something.",
      "OUT OF is for exiting an enclosed space.",
      "ONTO is for landing on a flat surface.",
      "OFF is for leaving a surface.",
      "Never use 'to' with 'arrive' or 'home'."
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
console.log('Updated 4 place/movement lessons using ESM');
