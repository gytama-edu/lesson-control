import fs from 'fs';
import { lessons } from '../data/lessons.js';

const updated = [
  {
    "id": "grammar-should-ought-to",
    "backHref": "modals.html",
    "backLabel": "Back to Modals",
    "title": "Should and Ought To",
    "skill": "Grammar",
    "category": "Modals",
    "level": "Beginner",
    "description": "Learn how to give advice and recommendations.",
    "introduction": "Your friend has a terrible headache. You want to give them good advice. How do you do it? You use 'should'. When we use 'should', we are not giving a strict order, and we are not stating a physical ability. We are simply saying, 'I think this is a very good idea for you.' Let's learn how to use 'should' and its old-fashioned cousin, 'ought to', to give advice.",
    "learningGoals": [
      "Use 'should' to give advice, opinions, and recommendations.",
      "Understand that 'ought to' means the exact same thing, but requires the word 'to'.",
      "Use 'should not' (shouldn't) to advise against something."
    ],
    "meaning": "'Should' expresses the speaker's opinion about what is right, best, or advisable. It is softer than 'must' (which is a rule or order).",
    "uses": [
      "Giving Advice: You should see a doctor.",
      "Asking for Advice: What should I do?",
      "Giving an Opinion: I think we should leave early."
    ],
    "patterns": [
      {
        "name": "The Advice Pattern",
        "formula": "Subject + Should + Base Verb",
        "explanation": "Example: You should rest. (NOT: You should to rest)."
      },
      {
        "name": "The 'Ought To' Exception",
        "formula": "Subject + Ought to + Base Verb",
        "explanation": "Example: You ought to rest. ('Ought' is the ONLY modal that requires 'to')."
      }
    ],
    "stepByStep": "How to give advice:<br><br>1. <strong>Identify the problem:</strong> My friend is tired.<br>2. <strong>Think of a solution:</strong> Go to sleep.<br>3. <strong>Form the advice:</strong> Add 'You should' in front of the solution.<br>4. <strong>Result:</strong> 'You <em>should</em> go to sleep.'<br>5. <strong>Alternative:</strong> 'You <em>ought to</em> go to sleep.'",
    "examples": [
      { "type": "Advice", "sentence": "You should drink more water.", "note": "A good idea for your health." },
      { "type": "Negative Advice", "sentence": "You shouldn't work so hard.", "note": "It is a bad idea to work too much." },
      { "type": "Opinion", "sentence": "They should fix this road.", "note": "Stating what you think is right." },
      { "type": "Ought to", "sentence": "We ought to leave now.", "note": "Exactly the same meaning as 'should leave'." },
      { "type": "Classroom", "sentence": "You should review your notes before the test.", "note": "Teacher giving a strong recommendation." }
    ],
    "commonMistakes": [
      {
        "wrong": "You should to go home.",
        "correct": "You should go home.",
        "explanation": "Never use 'to' after 'should'.",
        "fix": "Drop the 'to'."
      },
      {
        "wrong": "You ought go home.",
        "correct": "You ought to go home.",
        "explanation": "'Ought' is the one major exception in the modal family. It ALWAYS requires 'to'.",
        "fix": "Always use 'ought to'."
      },
      {
        "wrong": "Do I should call him?",
        "correct": "Should I call him?",
        "explanation": "To make a question, swap the subject and the modal. Do not use 'do'.",
        "fix": "Flip the word order: Should + Subject."
      }
    ],
    "quickComparison": "<strong>Should vs Must:</strong> 'You should study' (It's a good idea, you will get a better grade). 'You must study' (If you don't, you will fail the class and be expelled. It is a strict requirement).",
    "indonesianLearnerWarning": "In Indonesian, 'sebaiknya' perfectly captures the meaning of 'should'. Just remember the grammar rules: no 'to' after should, and no 'do/does' for questions.",
    "practicePrompts": [
      "Give advice to someone who is always late: 'You should ___.'",
      "Give negative advice to someone drinking too much coffee: 'You shouldn't ___.'",
      "Correct the mistake: 'I think you ought see a doctor.'",
      "Write a question asking for advice: 'What ___ I do?'"
    ],
    "classroomUse": "<strong>The Agony Aunt:</strong> Students write a fake problem on a piece of paper (e.g., 'My neighbor plays loud music at 2 AM'). They pass it to a partner, who must write back with three pieces of advice using 'should', 'shouldn't', and 'ought to'.",
    "summary": [
      "Use 'should' to give advice and opinions (It is a good idea).",
      "Never use 'to' after 'should'.",
      "Use 'ought to' as an alternative to 'should'. It always requires 'to'.",
      "Use 'should I...?' to ask for advice.",
      "'Should' is softer and less strict than 'must'."
    ]
  },
  {
    "id": "grammar-must-have-to-need-to",
    "backHref": "modals.html",
    "backLabel": "Back to Modals",
    "title": "Must, Have To, and Need To",
    "skill": "Grammar",
    "category": "Modals",
    "level": "Intermediate",
    "description": "Understand how to express strong obligation, rules, or necessity.",
    "introduction": "When something is not just a good idea, but an absolute requirement, we bring out the heavy grammar tools: 'Must', 'Have to', and 'Need to'. These words deal with rules, laws, and survival. While they are often translated the exact same way in other languages, English speakers feel a slight psychological difference between a rule that comes from the inside ('I must') versus a rule that comes from the outside ('I have to'). Let's explore the grammar of obligation.",
    "learningGoals": [
      "Use 'must' for strong personal obligation and written rules.",
      "Use 'have to' for external facts and obligations imposed by others.",
      "Understand the grammatical differences (Must = Modal, Have to = Normal verb)."
    ],
    "meaning": "'Must' often feels like a personal conviction or a formal written rule (The speaker insists). 'Have to' feels like an external reality or a fact of life (The world insists). 'Need to' expresses a necessity for survival or success.",
    "uses": [
      "MUST: Written rules (Employees must wash hands) / Strong personal feeling (I must call my mom).",
      "HAVE TO: External rules (I have to pay taxes) / Everyday obligations (I have to wake up at 6).",
      "NEED TO: Necessity (Plants need to have water)."
    ],
    "patterns": [
      {
        "name": "The Modal Rule (Must)",
        "formula": "Subject + Must + Base Verb",
        "explanation": "Example: I must go. (No 'to', no 's')."
      },
      {
        "name": "The Normal Verb Rule (Have to / Need to)",
        "formula": "Subject + Have/Has to + Base Verb",
        "explanation": "Example: He has to go. (Follows normal verb rules. Takes 's', takes 'to', needs 'do/does' for questions)."
      }
    ],
    "stepByStep": "How to choose between them:<br><br>1. <strong>Are you writing a formal sign or legal document?</strong> Use <em>Must</em>. -> 'Passengers must wear seatbelts.'<br>2. <strong>Are you talking about your daily schedule or chores?</strong> Use <em>Have to</em>. -> 'I have to go to work.'<br>3. <strong>Are you reminding yourself of a strong personal feeling?</strong> Use <em>Must</em>. -> 'I really must lose weight.'<br>4. <strong>Are you talking about the past?</strong> You CANNOT use 'must'. You must use <em>Had to</em>. -> 'I had to work yesterday.'",
    "examples": [
      { "type": "Internal/Personal", "sentence": "I must remember to buy milk.", "note": "I am telling myself to do it." },
      { "type": "Formal Rule", "sentence": "All students must pass this exam to graduate.", "note": "Written regulation." },
      { "type": "External Fact", "sentence": "I have to wear a uniform to work.", "note": "It's not my choice, it's the company rule." },
      { "type": "Necessity", "sentence": "You need to fill out this form.", "note": "It is necessary to proceed." },
      { "type": "Past Obligation", "sentence": "We had to leave early.", "note": "'Must' has no past tense. We use 'had to'." }
    ],
    "commonMistakes": [
      {
        "wrong": "He musts to go.",
        "correct": "He must go.",
        "explanation": "'Must' is a pure modal. It takes no 's' and no 'to'.",
        "fix": "Drop the 's' and 'to'."
      },
      {
        "wrong": "I musted work yesterday.",
        "correct": "I had to work yesterday.",
        "explanation": "'Must' has no past tense form. When talking about obligations in the past, we always use 'had to'.",
        "fix": "Use 'had to' for past rules/obligations."
      },
      {
        "wrong": "Must you to wear a tie?",
        "correct": "Do you have to wear a tie?",
        "explanation": "While 'Must you wear a tie?' is grammatically correct, it sounds very old-fashioned and formal. In modern spoken English, we use 'Do you have to...?' for almost all questions about obligation.",
        "fix": "Use 'Do you have to' for questions."
      }
    ],
    "quickComparison": "<strong>Must vs Have to:</strong> In spoken English, 'Have to' is much more common for daily activities (I have to go to the store). 'Must' is reserved for strong emphasis (I MUST see that movie!) or formal writing.",
    "indonesianLearnerWarning": "In Indonesian, 'harus' covers both Must and Have to. In English, you must remember that 'Have to' requires 'do/does' for questions (Do you have to go?), while 'Must' just flips (Must you go?).",
    "practicePrompts": [
      "Change this to the past tense: 'I must pay this bill.' -> 'I ___ pay this bill yesterday.'",
      "Correct the mistake: 'She have to wake up early.'",
      "Write a sentence about a rule at your school or job using 'have to'.",
      "Write a sentence about a formal rule using 'must'."
    ],
    "classroomUse": "<strong>The Rules of the Game:</strong> Bring in a strange object (like a rubber chicken). Tell the students they have invented a new sport. They must write 3 rules using 'Players must...' and 3 rules using 'Players have to...'.",
    "summary": [
      "Use 'must' for formal written rules and strong personal feelings.",
      "Use 'have to' for everyday obligations and external facts.",
      "'Must' is a modal (no 'to', no 's').",
      "'Have to' is a normal verb (takes 's', requires 'do/does' for questions).",
      "'Must' has no past tense. Always use 'had to' for past obligations."
    ]
  },
  {
    "id": "grammar-must-not-vs-do-not-have-to",
    "backHref": "modals.html",
    "backLabel": "Back to Modals",
    "title": "Must Not vs Do Not Have To",
    "skill": "Grammar",
    "category": "Modals",
    "level": "Intermediate",
    "description": "Learn the crucial difference between prohibition and lack of necessity.",
    "introduction": "In the positive form, 'Must' and 'Have to' mean almost exactly the same thing. But when you make them negative, they become complete opposites! 'You must not go' means it is illegal to go. 'You do not have to go' means you have a choice. Getting these two mixed up can cause massive misunderstandings in English. Let's learn the critical difference between Prohibition and Choice.",
    "learningGoals": [
      "Understand that 'must not' means DO NOT DO IT (Prohibition).",
      "Understand that 'don't have to' means YOU HAVE A CHOICE (Lack of obligation).",
      "Use 'don't need to' as a synonym for 'don't have to'."
    ],
    "meaning": "'Must not' (mustn't) is a strict rule against an action. It means 'It is forbidden'. 'Don't have to' means the action is optional. You can do it if you want, but nobody is forcing you.",
    "uses": [
      "MUST NOT: Danger, laws, strict rules (You must not smoke here).",
      "DON'T HAVE TO: Free time, optional activities, lack of rules (You don't have to work on Sunday)."
    ],
    "patterns": [
      {
        "name": "The Prohibition Pattern",
        "formula": "Subject + Must not (mustn't) + Base Verb",
        "explanation": "Example: You must not touch the fire. (If you do, something bad will happen)."
      },
      {
        "name": "The Choice Pattern",
        "formula": "Subject + Don't / Doesn't have to + Base Verb",
        "explanation": "Example: You don't have to eat the broccoli. (You can if you want, but it's not required)."
      }
    ],
    "stepByStep": "How to choose the correct negative:<br><br>1. <strong>Ask yourself: What happens if the person does the action?</strong><br>2. <strong>Will they get fired, arrested, or hurt?</strong> Use <em>Must not</em>. -> 'You <em>must not</em> cross the road when the light is red.'<br>3. <strong>Will nothing bad happen? Is it just a free choice?</strong> Use <em>Don't have to</em>. -> 'You <em>don't have to</em> come to the party if you are tired.'",
    "examples": [
      { "type": "Prohibition", "sentence": "You must not tell anyone this secret.", "note": "It is forbidden to tell." },
      { "type": "Prohibition", "sentence": "Visitors must not feed the animals.", "note": "A strict zoo rule." },
      { "type": "Optional", "sentence": "Tomorrow is a holiday, so we don't have to wake up early.", "note": "We can sleep in!" },
      { "type": "Optional", "sentence": "You don't need to bring a gift.", "note": "It's optional. (Don't need to = Don't have to)." },
      { "type": "Classroom", "sentence": "You must not cheat on the exam.", "note": "Strict rule." },
      { "type": "Classroom", "sentence": "You don't have to do the extra credit.", "note": "Optional work." }
    ],
    "commonMistakes": [
      {
        "wrong": "You don't have to touch that wire, it will kill you!",
        "correct": "You must not touch that wire, it will kill you!",
        "explanation": "'Don't have to' means it's optional. If it will kill you, it is a strict prohibition. You need 'must not'.",
        "fix": "Use 'must not' for danger and laws."
      },
      {
        "wrong": "You mustn't pay for the ticket, it's free.",
        "correct": "You don't have to pay for the ticket, it's free.",
        "explanation": "If it's free, it means the obligation to pay is removed. 'Mustn't' would mean it's illegal to give them money.",
        "fix": "Use 'don't have to' when an obligation is removed."
      }
    ],
    "quickComparison": "<strong>Must not vs Can't:</strong> In everyday speech, we often use 'can't' instead of 'must not' to express rules. 'You can't park here' is much more common than 'You must not park here'. Both mean it is forbidden.",
    "indonesianLearnerWarning": "This is a massive trap! In Indonesian, 'tidak harus' (don't have to) and 'tidak boleh' (must not / not allowed) are completely different words. But because 'must' translates to 'harus', learners often think 'must not' translates to 'tidak harus'. IT DOES NOT. Must not = Tidak boleh. Don't have to = Tidak harus / Tidak usah.",
    "practicePrompts": [
      "Choose the correct phrase: 'In a hospital, you (must not / don't have to) smoke.'",
      "Choose the correct phrase: 'It's Sunday! I (must not / don't have to) go to school.'",
      "Correct the mistake: 'You mustn't bring a towel, the hotel provides them.'",
      "Write a sentence about something you 'must not' do at work."
    ],
    "classroomUse": "<strong>The Danger vs Weekend Game:</strong> Show pictures of dangerous/illegal things (a speed limit sign, a toxic chemical). Students yell 'You must not!'. Show pictures of relaxing things (sleeping in, a free concert). Students yell 'You don't have to!'.",
    "summary": [
      "'Must' and 'Have to' are similar, but their negatives are opposites.",
      "MUST NOT = Prohibition (It is forbidden, dangerous, or illegal).",
      "DON'T HAVE TO = Choice (It is optional, you have no obligation).",
      "'Don't need to' means the exact same thing as 'don't have to'.",
      "In spoken English, we often use 'can't' to mean 'must not' (You can't park here)."
    ]
  },
  {
    "id": "grammar-had-better-be-supposed-to",
    "backHref": "modals.html",
    "backLabel": "Back to Modals",
    "title": "Had Better and Be Supposed To",
    "skill": "Grammar",
    "category": "Modals",
    "level": "Advanced",
    "description": "Learn advanced ways to express strong warnings and societal expectations.",
    "introduction": "We know that 'should' is for gentle advice, and 'must' is for strict rules. But what if you want to give a warning? 'If you don't do this, something bad will happen!' We use the strange phrase 'Had better'. And what if you want to talk about a rule that exists, but people often break it? We use 'Be supposed to'. These two phrases are incredibly common in spoken English, and mastering them will make you sound much more native.",
    "learningGoals": [
      "Use 'had better' for strong advice with a negative consequence (a warning).",
      "Use 'be supposed to' for societal expectations or rules that are often ignored.",
      "Understand the grammar structures of these multi-word modals."
    ],
    "meaning": "'Had better' implies a threat or a warning. It means 'Do this, OR ELSE something bad will happen'. 'Be supposed to' implies an expectation. It means 'This is the plan or the rule, but reality might be different.'",
    "uses": [
      "HAD BETTER: Urgent warnings (You'd better run, the train is leaving).",
      "BE SUPPOSED TO: Expectations, rumors, duties (I'm supposed to work today, but I feel sick)."
    ],
    "patterns": [
      {
        "name": "The Warning Pattern",
        "formula": "Subject + Had better + Base Verb",
        "explanation": "Example: You had better leave. (Often contracted: You'd better leave). Notice there is NO 'to'."
      },
      {
        "name": "The Expectation Pattern",
        "formula": "Subject + Be verb + supposed to + Base Verb",
        "explanation": "Example: I am supposed to call her. He was supposed to be here."
      }
    ],
    "stepByStep": "How to make a warning with Had Better:<br><br>1. <strong>Identify the danger:</strong> It's raining hard.<br>2. <strong>Identify the necessary action:</strong> Take an umbrella.<br>3. <strong>Apply the formula:</strong> 'You had better take an umbrella.'<br>4. <strong>Make it negative (careful!):</strong> Add 'not' AFTER 'better'. -> 'You had better <em>not</em> forget your umbrella.'",
    "examples": [
      { "type": "Warning", "sentence": "We had better leave now, or we will be late.", "note": "Consequence: Being late." },
      { "type": "Negative Warning", "sentence": "You'd better not touch that dog, it bites.", "note": "Notice 'not' comes after 'better'." },
      { "type": "Expectation", "sentence": "I am supposed to start work at 9 AM.", "note": "That is my contracted duty." },
      { "type": "Broken Expectation (Past)", "sentence": "He was supposed to call me yesterday, but he didn't.", "note": "The plan failed." },
      { "type": "Rumor", "sentence": "That movie is supposed to be really good.", "note": "People expect it to be good based on rumors." }
    ],
    "commonMistakes": [
      {
        "wrong": "You have better go now.",
        "correct": "You had better go now.",
        "explanation": "The phrase is ALWAYS 'had', never 'have', even when talking about the present or future.",
        "fix": "Always use 'had better' or the contraction 'd better'."
      },
      {
        "wrong": "You had better to leave.",
        "correct": "You had better leave.",
        "explanation": "'Had better' acts like a modal. It takes the base verb directly, with no 'to'.",
        "fix": "Drop the 'to' after 'had better'."
      },
      {
        "wrong": "I supposed to be there.",
        "correct": "I am supposed to be there.",
        "explanation": "The phrase requires the 'Be' verb (am, is, are, was, were) in front of it.",
        "fix": "Always include the Be verb."
      }
    ],
    "quickComparison": "<strong>Should vs Had Better:</strong> 'You should watch that movie' (It's a good movie). 'You had better watch that movie' (If you don't, I will be very angry with you!). Use 'had better' carefully, as it can sound threatening.",
    "indonesianLearnerWarning": "In Indonesian, 'sebaiknya' translates to both 'should' and 'had better'. Remember that 'had better' carries a much stronger, almost aggressive tone in English. Use it when there is a real consequence for failing to do the action.",
    "practicePrompts": [
      "Give a warning to someone driving too fast: 'You ___ slow down.'",
      "Express a broken plan for yesterday: 'We ___ to meet at 5, but he never showed up.'",
      "Correct the mistake: 'You had better not to wake the baby.'",
      "Write a sentence about something you are 'supposed to' do this weekend."
    ],
    "classroomUse": "<strong>The Broken Rules:</strong> Give students scenarios of bad behavior (e.g., A student is texting in class). Have them formulate a warning ('You'd better stop texting') and state the broken rule ('You aren't supposed to use phones in class').",
    "summary": [
      "Use 'had better' for strong warnings and threats (Do it, or else...).",
      "Always use 'had' (never 'have'), even for the present/future.",
      "Never use 'to' after 'had better'.",
      "Use 'be supposed to' for expectations, plans, rules, and rumors.",
      "Always include the Be verb (am/is/are/was/were) before 'supposed to'."
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
console.log('Updated 4 modal obligation lessons using ESM');
