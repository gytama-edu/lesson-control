import fs from 'fs';
import path from 'path';

const lessonsPath = path.join(process.cwd(), 'data', 'lessons.js');

const updates = [
  {
    id: "grammar-verbs",
    content: `### Welcome to Verbs

If a noun is the engine of a car, the verb is the fuel. A sentence simply cannot move without a verb. Every single complete sentence in English MUST have a verb.

### The Core Meaning

A verb is a word that shows **Action** (what someone is doing) or **State of Being** (how someone is, or that they exist). 

Verbs are the only words in English that change their shape to tell us *when* something happened (past, present, or future). This is why they are the most powerful words you can learn.

### Step-by-Step Logic

How do you find the verb? Look at the subject (the noun) and ask:
- **"What is the subject doing?"** (Action Verb)
  - *The dog **barks**.* (barks = action).
- **"What state is the subject in?"** (State of Being / Linking Verb)
  - *The dog **is** happy.* (is = state of being).

### Sentence Patterns

The most basic English sentence is just a Subject and a Verb:
- Birds **fly**.
- Babies **cry**.
- I **am**.

When you want to add more detail, the verb usually goes right in the middle:
- The teacher (Subject) **wrote** (Verb) on the board (Prepositional Phrase).

### Common Mistakes

**Mistake:** Forgetting the verb completely!
- ❌ "He very happy today."
- ✅ "He **is** very happy today."
- **Why?** "Happy" is an adjective. You need the verb "is" to connect "He" to "happy".

**Mistake:** Using two main verbs in the same clause without a connector.
- ❌ "I go buy some food."
- ✅ "I will **go** and **buy** some food." OR "I will **go to buy** some food."

### Comparison: Action vs State
Notice how the verb changes the entire meaning of the sentence:
- **Action:** He **tastes** the soup. (He is actively putting it in his mouth).
- **State:** The soup **tastes** good. (The soup isn't eating anything; this just describes its state).

### 🇮🇩 Indonesian Learner Warning
In Indonesian, you often don't need a verb to make a complete sentence (e.g., "Saya sakit" = I sick). In English, you **MUST** have a verb. You cannot say "I sick." You must say "I **am** sick." The "be" verbs (am, is, are) are the most forgotten verbs for Indonesian learners!

### Guided Practice
*Identify the verb in each sentence:*
1. The sun shines brightly.
2. My coffee is too hot.
3. We played football yesterday.
*(Answers: 1. shines (action), 2. is (state), 3. played (action))*

### Classroom Use
**For Teachers:** Play "Simon Says" but only using Action Verbs. (Simon says: jump! Simon says: clap!). Then, point out that commands (imperatives) are sentences that start directly with a Verb, because the subject "You" is invisible.

### 📌 Remember
- EVERY sentence must have a verb.
- Verbs show action (run, jump) or state of being (am, is, are).
- Verbs change their form to show time (tense).
- Never forget your "be" verbs when describing something!`
  },
  {
    id: "grammar-action-linking-verbs",
    content: `### Action and Linking Verbs

Not all verbs are sweaty, energetic action words like *run, jump,* and *throw*. Some verbs are just quiet equal signs (=). 

To master English, you need to understand the difference between a verb that DOES something, and a verb that just CONNECTS things.

### The Core Meaning

- **Action Verbs:** Show physical or mental activity. (e.g., eat, think, sleep, build).
- **Linking Verbs:** Do not show action. They act like an equal sign (=). They link the subject to a noun or adjective that describes it. (e.g., is, am, are, seems, feels, becomes).

### Step-by-Step Logic

**The Equal Sign Test:**
If you aren't sure if a verb is an action or linking verb, try replacing it with an equal sign (=) or the word "is". Does the sentence still make logical sense?
- *Sentence:* The soup **smells** delicious.
- *Test:* The soup = delicious. (Yes! Makes sense. "Smells" is a linking verb).

- *Sentence:* The chef **smells** the soup.
- *Test:* The chef = the soup. (No! That's weird. "Smells" is an action verb here).

### Common Linking Verbs
Memorize these! They are almost always linking verbs:
- **The "Be" Family:** am, is, are, was, were, be, being, been.
- **The Senses:** look, sound, smell, feel, taste.
- **The States:** seem, appear, become, grow, remain.

### Common Mistakes

**Mistake:** Using an adverb after a linking verb.
- ❌ "I feel badly."
- ✅ "I feel **bad**."
- **Why?** Linking verbs connect the subject to an ADJECTIVE. "I" am not doing an action poorly; I am in a "bad" state.

**Mistake:** Confusing the meaning of sensory verbs.
- ❌ "She looks angrily."
- ✅ "She looks **angry**." (Linking: her appearance is angry).
- ✅ "She looks **angrily** at him." (Action: she is physically looking with angry eyes).

### Comparison: Linking Verb vs Helping Verb
Don't confuse a linking verb with a helping verb.
- **Linking:** He **is** happy. ("Is" is the ONLY verb. It links).
- **Helping:** He **is** running. ("Is" is helping the main verb "running").

### 🇮🇩 Indonesian Learner Warning
In Indonesian, "tampak" (looks) and "terdengar" (sounds) are used similarly to English. But remember that in English, you must follow these verbs with an **Adjective**, never an Adverb. (e.g., The music sounds *beautiful*, NOT beautifully).

### Guided Practice
*Is the bold verb Action or Linking?*
1. He **grew** tired.
2. He **grew** tomatoes.
3. The milk **went** bad.
*(Answers: 1. Linking (He = tired), 2. Action (He actively grew them), 3. Linking (Milk = bad))*

### Classroom Use
**For Teachers:** Write sentences on the board and have a student physically hold a big cardboard "=" sign. Have them stand over the verb. If the sentence makes sense with the equal sign, it's a linking verb. If the class laughs because it's silly ("The dog = the bone"), it's an action verb.

### 📌 Remember
- Action verbs show physical or mental activity.
- Linking verbs act like an equal sign (=) between the subject and its description.
- Use adjectives, not adverbs, after linking verbs.`
  },
  {
    id: "grammar-main-auxiliary-verbs",
    content: `### Main and Auxiliary Verbs

Sometimes a verb isn't strong enough to do its job alone. It needs a little help to show the time (tense), ask a question, or make a negative sentence. 

In English, verbs often travel in pairs or groups. We have the "Boss" verb, and the "Helper" verb.

### The Core Meaning

- **Main Verb (The Boss):** The verb that carries the actual meaning or action of the sentence. (e.g., eat, play, go).
- **Auxiliary Verb (The Helper):** A verb that comes *before* the main verb to help it show tense, mood, or voice. (e.g., is, have, do, will, can).

Together, they form a **Verb Phrase**.

### Step-by-Step Logic

Look at how a simple sentence grows when we add helpers:
1. I **play** tennis. (1 Main Verb).
2. I **am** **playing** tennis. (1 Helper 'am' + 1 Main Verb 'playing').
3. I **have been** **playing** tennis. (2 Helpers 'have been' + 1 Main Verb 'playing').

No matter how many helpers there are, the **LAST verb in the group is always the Main Verb**. All the ones before it are helpers.

### Sentence Patterns

**Questions:** The helper jumps to the front!
- You **are** coming. -> **Are** you coming?
- He **will** go. -> **Will** he go?

**Negatives:** The word "not" goes right after the helper!
- She **can** swim. -> She **can not** (cannot) swim.
- We **have** eaten. -> We **have not** (haven't) eaten.

### Common Mistakes

**Mistake:** Putting "not" on the main verb when there is no helper.
- ❌ "I not play tennis."
- ✅ "I **do not** play tennis."
- **Why?** To make a negative sentence in Present Simple or Past Simple, you MUST bring in the "Do" helper!

### Comparison: Main Verb vs. Auxiliary Verb
Some verbs (like Be, Have, and Do) can be BOTH!
- **As Main Verb:** I **have** a car. (Have = own).
- **As Helper:** I **have** finished. (Have = helper for Present Perfect).

### 🇮🇩 Indonesian Learner Warning
In Indonesian, asking a question is easy: just add "Apakah" or raise your voice. In English, you MUST use an auxiliary verb to ask a yes/no question! (e.g., You cannot say "You like coffee?" in writing. You must use the helper: "**Do** you like coffee?").

### Guided Practice
*Identify the Auxiliary (Helper) and the Main Verb:*
1. She is reading a book.
2. They will arrive soon.
3. I do not understand.
*(Answers: 1. Aux = is, Main = reading. 2. Aux = will, Main = arrive. 3. Aux = do, Main = understand).*

### Classroom Use
**For Teachers:** Give students "Helper" and "Main" cards. Show how the "Helper" carries the heavy lifting (like the word 'not', or jumping to the front for a question) while the "Main" verb gets to stay the same. "He [does] not [like] broccoli."

### 📌 Remember
- The Main verb carries the meaning (the action).
- The Auxiliary verb helps show time, ask questions, or make negatives.
- In a group of verbs, the LAST one is the Main Verb.
- To make a negative or a question, you almost always need an Auxiliary.`
  },
  {
    id: "grammar-be-have-do",
    content: `### Be, Have, and Do

Meet the three most important, busiest, and most confusing verbs in the English language: **Be**, **Have**, and **Do**. 

Why are they so special? Because they have double lives! Sometimes they act as normal Main Verbs, and sometimes they act as Auxiliary (Helping) Verbs. If you master these three, English grammar will become much easier.

### The Core Meaning: Double Lives

#### 1. The "Be" Family (am, is, are, was, were, be, being, been)
- **As a Main Verb (Linking):** Shows identity, location, or feeling.
  - *I **am** a teacher.* (I = teacher)
- **As a Helping Verb:** Used to make Continuous tenses (action happening right now) and Passive Voice.
  - *I **am** teaching right now.* (Helping the verb 'teaching').

#### 2. The "Have" Family (have, has, had, having)
- **As a Main Verb:** Shows ownership or eating.
  - *I **have** a new car.* (I own it).
  - *I **have** lunch at noon.* (I eat it).
- **As a Helping Verb:** Used to make Perfect tenses (actions connected to another time).
  - *I **have** finished my homework.* (Helping the verb 'finished').

#### 3. The "Do" Family (do, does, did, doing)
- **As a Main Verb:** Means to perform an action or task.
  - *I **do** my homework every night.* (I perform it).
- **As a Helping Verb:** Used to make negatives and questions in simple tenses!
  - *I **do** not like broccoli.* (Helping the verb 'like').

### Common Mistakes

**Mistake:** Mixing up Main "Have" with Helping "Have" in questions.
- ❌ "Have you a car?" (Old fashioned / unnatural).
- ✅ "**Do** you **have** a car?" (Use helper 'Do' to ask a question about main verb 'have').

**Mistake:** Using "Be" and "Do" together illegally.
- ❌ "I am not know."
- ✅ "I **do** not know."

### Comparison: Be vs Do in Questions
When do I start a question with "Are" and when do I use "Do"?
- Use **Be** (Are) if the next word is an Adjective, Noun, or -ing verb.
  - *Are you happy? Are you a student? Are you listening?*
- Use **Do** if the next word is a regular Action Verb.
  - *Do you like pizza? Do you play tennis?*

### 🇮🇩 Indonesian Learner Warning
Indonesian learners often use "am/is/are" as a generic connection word, leading to mistakes like "I am agree" or "He is go to school." Remember: if you have a normal action verb (agree, go, want), **DO NOT USE BE**. Just say "I agree." Save "am" for adjectives ("I am happy") or -ing verbs ("I am going").

### Guided Practice
*Are these bold verbs Main or Helping?*
1. She **has** three cats.
2. She **has** seen that movie.
3. They **did** the dishes.
4. They **did** not want to go.
*(Answers: 1. Main, 2. Helping, 3. Main, 4. Helping)*

### Classroom Use
**For Teachers:** Write "I am", "I have", and "I do" on the board. Challenge students to finish the sentence TWICE for each. Once where the word is the ONLY verb (Main), and once where it is HELPING another verb. (e.g., I am tall / I am running).

### 📌 Remember
- Be, Have, and Do can be Main Verbs OR Helping Verbs.
- Be helps make Continuous tenses (-ing).
- Have helps make Perfect tenses (Verb 3).
- Do helps make Questions and Negatives.`
  },
  {
    id: "grammar-modal-verbs-overview",
    content: `### Modal Verbs Overview

Imagine you want to ask your boss for a day off. You wouldn't say, "I take tomorrow off." That's an order! You would soften it and show possibility or permission: "May I take tomorrow off?" or "Could I take tomorrow off?"

These softening words are called **Modal Verbs**. They are a special type of helping verb that changes the *mood* or *attitude* of the sentence.

### The Core Meaning

Modals never act as the main verb. They sit right before the main verb to show:
- Ability (can, could)
- Permission (may, can)
- Advice (should)
- Obligation (must, have to)
- Possibility/Future (will, might, would)

### Step-by-Step Logic & Rules

Modals have very strict, unique rules. They do NOT act like normal verbs!

**Rule 1: No "S" for he/she/it.**
- ❌ He cans swim.
- ✅ He **can** swim.

**Rule 2: The Main Verb must be bare (Base Form).** No 'to', no '-ing', no '-ed'.
- ❌ She must to go.
- ❌ They should going.
- ✅ She **must** go.
- ✅ They **should** go.

**Rule 3: No "Do" for questions or negatives.** Modals do the heavy lifting themselves!
- ❌ Do you can swim?
- ✅ **Can** you swim?
- ❌ I don't must go.
- ✅ I **must not** go.

### Sentence Patterns

- **Advice:** Subject + **should** + base verb (You should study).
- **Obligation:** Subject + **must** + base verb (I must leave).
- **Future:** Subject + **will** + base verb (It will rain).

### Common Mistakes

**Mistake:** Adding "to" after a modal (except for "ought to" and "have to", which are special semi-modals).
- ❌ "I will to see you tomorrow."
- ✅ "I **will** see you tomorrow."

### Comparison: Must vs Should
- **Must** is 100% obligation. It's a rule. (You must stop at a red light).
- **Should** is just a good idea. It's advice. (You should eat more vegetables).

### 🇮🇩 Indonesian Learner Warning
In Indonesian, words like *harus* (must) and *boleh* (may) don't change the verb after them. Luckily, English modals are similar! The verb after a modal is always the base form. Just remember NOT to add 'to'. A very common Indonesian mistake is saying "I can to do it" because they translate "bisa untuk" literally.

### Guided Practice
*Find and fix the error in these sentences:*
1. He musts finish his homework.
2. We should to leave now.
3. Do you will help me?
*(Answers: 1. He must finish... 2. We should leave now. 3. Will you help me?)*

### Classroom Use
**For Teachers:** Play "Dear Abby." Read a fake problem letter to the class (e.g., "My neighbor's dog barks all night"). Ask students to give advice using Modals of varying strength: "You *could* talk to him," "You *should* buy earplugs," "You *must* call the police."

### 📌 Remember
- Modals change the mood (ability, advice, obligation, possibility).
- Modals NEVER take an -s for he/she/it.
- Modals are ALWAYS followed by a base verb (no 'to', no '-ing').
- Modals don't use "Do" for questions or negatives.`
  },
  {
    id: "grammar-verb-forms-overview",
    content: `### Verb Forms Overview

If you want to play a video game, you press different buttons to make your character do different things: walk, run, jump, or attack. 

In English, verbs are like that character. We change the "form" of the verb to tell the listener exactly *when* the action happened or *how* it happened. This is called **Verb Conjugation**.

### The Core Meaning

English verbs have 5 main forms. If you know these 5 forms for any verb, you can build any of the 12 English tenses!

Let's look at the verb "EAT".

1. **Base Form (Verb 1 / Bare Infinitive):** The dictionary word.
   - *eat*
2. **Third-Person Singular (-s form):** Used for he, she, it in the present.
   - *eats*
3. **Past Form (Verb 2):** Used for finished actions in the past.
   - *ate*
4. **Past Participle (Verb 3):** Used for Perfect tenses and Passives.
   - *eaten*
5. **Present Participle (Verb-ing):** Used for Continuous actions happening right now.
   - *eating*

### Step-by-Step Logic

How do you know which form to use?
- If the action happens regularly: Use Base or -s form. (*I eat, he eats*).
- If it happened yesterday and is finished: Use Past (V2). (*I ate*).
- If you use the helper 'have/has/had': Use Past Participle (V3). (*I have eaten*).
- If you use the helper 'am/is/are': Use -ing. (*I am eating*).

### Regular vs Irregular Verbs

This is where English gets tricky.
- **Regular Verbs:** Make their V2 and V3 forms simply by adding **-ed**. 
  - *play -> played -> played*
- **Irregular Verbs:** Completely change their spelling for V2 and V3! You must memorize these.
  - *go -> went -> gone*
  - *see -> saw -> seen*

### Common Mistakes

**Mistake:** Using V2 with a helping verb.
- ❌ "I have went to the store."
- ✅ "I have **gone** to the store." (Have + V3).

**Mistake:** Using V3 without a helping verb.
- ❌ "I seen that movie."
- ✅ "I **saw** that movie." (V2 stands alone) OR "I **have seen** that movie." (Have + V3).

### Comparison: V2 vs V3
- **Verb 2 (Past)** is strong and independent. It is the ONLY verb in the sentence. (*I ate.*)
- **Verb 3 (Past Participle)** is weak. It CANNOT be the main verb without a helper like *have* or *is*. (*I have eaten. It was eaten.*)

### 🇮🇩 Indonesian Learner Warning
In Indonesian, verbs never change their form! You just add time words like *sudah* (already) or *kemarin* (yesterday). "Saya makan kemarin" and "Saya sedang makan" use the exact same word "makan". In English, you MUST change the verb form! (I *ate* yesterday. I am *eating*). Memorizing Irregular Verbs (V1, V2, V3) is mandatory for Indonesian learners.

### Guided Practice
*Which verb form is used in these sentences?*
1. She is **working** hard. (Base, V2, V3, or -ing?)
2. They **went** home.
3. He has **finished** the job.
*(Answers: 1. Present Participle/-ing, 2. Past/V2, 3. Past Participle/V3)*

### Classroom Use
**For Teachers:** Create a 5-column chart on the board (Base, -s, V2, V3, -ing). Give students a base verb (e.g., write) and have them race to fill in the other four columns (writes, wrote, written, writing). 

### 📌 Remember
- Verbs change their form to show time.
- The 5 forms are: Base, -s, Past (V2), Past Participle (V3), and -ing.
- Regular verbs end in -ed. Irregular verbs must be memorized.
- V2 stands alone. V3 needs a helper.`
  },
  {
    id: "grammar-adjectives",
    content: `### Welcome to Adjectives

If nouns are the nouns are the black-and-white sketch of a picture, **Adjectives** are the colors. 

"A car" is boring. "A **fast, red, Italian** car" is exciting! Adjectives give life, detail, and personality to our sentences.

### The Core Meaning

An **Adjective** is a word that describes, modifies, or gives more information about a **Noun** or a **Pronoun**. 

Adjectives answer questions like:
- *What kind?* (a **blue** car, a **spicy** meal)
- *Which one?* (**that** car, the **last** meal)
- *How many?* (**three** cars, **several** meals)

### Step-by-Step Logic

Where do we put adjectives in an English sentence? There are two main places:

1. **Before the Noun (Attributive):**
   - The **lazy** dog slept.
   - She has a **beautiful** voice.

2. **After a Linking Verb (Predicative):**
   - The dog is **lazy**.
   - Her voice sounds **beautiful**.

### Sentence Patterns

You can use more than one adjective to describe a noun!
- *Pattern:* [Adj] + [Adj] + Noun
- *Example:* The **big, black** dog.

*(Note: There is a specific order for multiple adjectives in English, usually Opinion -> Size -> Age -> Shape -> Color -> Origin -> Material. E.g., A beautiful, big, old, brown, wooden table).*

### Common Mistakes

**Mistake:** Adding an 's' to make an adjective plural.
- ❌ "They bought two reds cars."
- ✅ "They bought two **red** cars."
- **Why?** In English, adjectives NEVER become plural. Only nouns get the 's'.

**Mistake:** Using a noun when you need an adjective.
- ❌ "He is very danger."
- ✅ "He is very **dangerous**."

### Comparison: Adjective vs Noun Modifiers
Sometimes, a noun can act like an adjective to describe another noun!
- A **coffee** cup. (Coffee is a noun, but here it describes the cup).
- A **school** bus.
Even though they are nouns, they are doing the *job* of an adjective here.

### 🇮🇩 Indonesian Learner Warning
In Indonesian, the adjective always comes AFTER the noun (e.g., *mobil merah* = car red). In English, the adjective almost always comes BEFORE the noun! You must flip it: **red car**. This is one of the most common mistakes for beginners.

### Guided Practice
*Identify the adjectives in this sentence:*
"The tall man wore a heavy winter coat."
*(Answers: tall, heavy, winter)*

### Classroom Use
**For Teachers:** Play "Describe the Monster." Draw a simple shape on the board. Have students shout out adjectives to add to the drawing (e.g., "Add three hairy legs! Add sharp green teeth!"). This highlights how adjectives add detail.

### 📌 Remember
- Adjectives describe Nouns and Pronouns.
- They usually go BEFORE the noun (a **big** house) or AFTER a linking verb (the house is **big**).
- Adjectives never become plural in English.`
  },
  {
    id: "grammar-adverbs",
    content: `### Welcome to Adverbs

If adjectives describe the things (nouns) in our world, **Adverbs** describe the actions and the details. 

Without adverbs, you might know that a man ran, but you wouldn't know if he ran *quickly*, *slowly*, *yesterday*, or *outside*.

### The Core Meaning

An **Adverb** is a word that describes, modifies, or gives more information about a **Verb**, an **Adjective**, or **another Adverb**.

Adverbs answer questions like:
- *How?* (ran **quickly**, spoke **softly**)
- *When?* (leave **tomorrow**, arriving **soon**)
- *Where?* (look **everywhere**, stepped **outside**)
- *To what extent?* (**very** tall, **completely** finished)

### Step-by-Step Logic

How do you build an adverb? 
The most common way to make an adverb (specifically, adverbs of 'How') is to add **-ly** to an adjective.
- quick (adj) -> quick**ly** (adv)
- careful (adj) -> careful**ly** (adv)
- happy (adj) -> happi**ly** (adv)

But watch out! Not all adverbs end in -ly (e.g., *fast, well, hard, late, today, here*).

### Sentence Patterns

Adverbs are very flexible. They can move around in the sentence more than any other word!
- **Quickly**, he opened the door.
- He **quickly** opened the door.
- He opened the door **quickly**.
All three are correct! (However, do not put an adverb between a verb and its direct object: ❌ *He opened quickly the door*).

### Common Mistakes

**Mistake:** Using an adjective to describe a verb.
- ❌ "He plays soccer good."
- ✅ "He plays soccer **well**."
- **Why?** "Good" is an adjective. The adverb form is the irregular word "well."

**Mistake:** Using an adjective to describe an adjective.
- ❌ "It is real hot today."
- ✅ "It is **really** hot today."

### Comparison: Hard vs Hardly
Some adverbs are extremely tricky because their meaning changes!
- He works **hard**. (He puts in a lot of effort).
- He **hardly** works. (He does almost NO work!).

### 🇮🇩 Indonesian Learner Warning
In Indonesian, "dengan" (with) is often used to make adverbs of manner (e.g., *dengan cepat* = with quick). In English, we just use the **-ly** adverb (e.g., *quickly*). Don't translate "dengan" literally! (e.g., Don't say "He runs with quick." Say "He runs quickly").

### Guided Practice
*Identify the adverb in these sentences and what it describes:*
1. She sang beautifully.
2. The coffee is extremely hot.
3. They arrived late.
*(Answers: 1. beautifully (describes verb 'sang'). 2. extremely (describes adj 'hot'). 3. late (describes verb 'arrived'))*

### Classroom Use
**For Teachers:** Do an "Action/Adverb Charades." Write action verbs on one set of cards (walk, eat, type) and adverbs on another set (angrily, sleepily, quickly, secretly). Have a student draw one of each and act out "Eating Secretly" while the class guesses the adverb.

### 📌 Remember
- Adverbs describe Verbs, Adjectives, or other Adverbs.
- They answer How, When, Where, or To what extent.
- Many end in -ly, but some irregular ones (like *well, fast, hard*) do not.
- Do not put an adverb between a verb and its direct object.`
  },
  {
    id: "grammar-prepositions",
    content: `### Welcome to Prepositions

Imagine a box and a mouse. The mouse can be **in** the box, **on** the box, **under** the box, or **behind** the box. 

Those tiny words are **Prepositions**. They are the GPS system of the English language, telling us where things are in space and time.

### The Core Meaning

A **Preposition** is a word that shows the relationship between a noun (or pronoun) and another word in the sentence. They mostly show relationships of **Time**, **Place**, or **Direction**.

Because they show a relationship, they NEVER stand alone. They always come at the beginning of a group of words called a **Prepositional Phrase**.

### Step-by-Step Logic

A prepositional phrase always follows this pattern:
**[Preposition] + [Optional Adjectives] + [Noun/Pronoun Object]**

- **on** the table
- **at** 5:00 PM
- **under** the big blue bridge
- **with** him

### Categorizing Prepositions

1. **Prepositions of Place (Where?):** 
   - in, on, at, under, behind, next to, above.
   - *Example:* The keys are **on** the counter.
2. **Prepositions of Time (When?):** 
   - in, on, at, before, after, during, until.
   - *Example:* The movie starts **at** 8:00 PM.
3. **Prepositions of Direction (Where to?):** 
   - to, into, toward, through, across.
   - *Example:* She walked **into** the room.

### Common Mistakes

**Mistake:** Putting a verb right after a preposition.
- ❌ "I am interested in learn English."
- ✅ "I am interested in **learning** English."
- **Why?** A preposition MUST be followed by a noun. If you want to use an action, you must turn the verb into a noun by adding **-ing** (a gerund).

### Comparison: In vs On vs At (Time)
These three cause the most headaches! Here is the rule:
- **IN** (General / Big): Centuries, Years, Months. (*In 2024, In August*).
- **ON** (Specific / Medium): Days, Dates. (*On Monday, On August 15th*).
- **AT** (Very Specific / Small): Clock times. (*At 3:00 PM, At noon*).

### 🇮🇩 Indonesian Learner Warning
In Indonesian, the word "di" covers *in*, *on*, and *at* for locations. "Di rumah, di meja, di Jakarta." In English, you must be specific! (At home, on the table, in Jakarta). Also, the Indonesian word "dari" translates to "from," but for materials we often say "made **of**" wood, not "made from" wood.

### Guided Practice
*Choose the correct preposition:*
1. My birthday is (in / on) October.
2. My birthday is (in / on) October 5th.
3. The cat is hiding (under / through) the bed.
*(Answers: 1. in (month), 2. on (date), 3. under (location))*

### Classroom Use
**For Teachers:** Give each student a pen. Call out instructions rapidly to practice Place prepositions: "Put the pen ON your desk! Hold it OVER your head! Put it IN your pocket! Hide it BEHIND your back!" It creates physical memory for the words.

### 📌 Remember
- Prepositions show Time, Place, or Direction.
- They NEVER stand alone; they must be followed by a Noun or Pronoun.
- If a verb follows a preposition, it must be in the -ing form.
- Remember the pyramid for time: IN (big/months) -> ON (medium/days) -> AT (small/clock time).`
  },
  {
    id: "grammar-conjunctions",
    content: `### Welcome to Conjunctions

If prepositions are the GPS, **Conjunctions** are the glue. 

How do we build long, interesting sentences instead of talking like a robot? ("I like cats. I like dogs. I do not like birds.") We use conjunctions to stick those ideas together! ("I like cats **and** dogs, **but** I do not like birds.")

### The Core Meaning

A **Conjunction** is a word that connects words, phrases, or whole clauses (sentences) together. They show the logical relationship between the things they are connecting.

### Step-by-Step Logic

There are three main types of conjunctions. Let's look at the two most common:

#### 1. Coordinating Conjunctions (FANBOYS)
These connect two equal things. (e.g., two nouns, two adjectives, or two complete sentences).
Memorize the acronym **FANBOYS**:
- **F**or (reason)
- **A**nd (addition)
- **N**or (negative addition)
- **B**ut (contrast)
- **O**r (choice)
- **Y**et (contrast, like 'but')
- **S**o (result)

*Example:* I was tired, **so** I went to sleep.

#### 2. Subordinating Conjunctions (The Bossy Glue)
These connect a dependent clause (a weaker sentence) to an independent clause (a strong sentence). They show cause/effect or time.
- Examples: **Because, although, since, unless, while, if, when.**

*Example:* **Because** it was raining, we stayed inside.

### Sentence Patterns & Punctuation

Punctuation is very important with conjunctions!
- **FANBOYS joining two sentences:** Use a comma BEFORE the conjunction.
  - *I wanted to go**, but** I had no money.*
- **Subordinating conjunction at the front:** Use a comma in the middle.
  - ***When* I arrive**,** I will call you.*
- **Subordinating conjunction in the middle:** No comma!
  - *I will call you **when** I arrive.*

### Common Mistakes

**Mistake:** Using two contrast conjunctions in one sentence.
- ❌ "Although it was raining, but we played football."
- ✅ "**Although** it was raining, we played football." OR "It was raining, **but** we played football."
- **Why?** You only need ONE glue word to connect two ideas!

### Comparison: Because vs So
They both deal with cause and effect, but they attach to different parts of the sentence!
- **Because** attaches to the *Cause*: We stayed home **because** it rained.
- **So** attaches to the *Effect*: It rained, **so** we stayed home.

### 🇮🇩 Indonesian Learner Warning
In Indonesian, it is common to start sentences with "Terus" or "Dan" when speaking. While you *can* start a sentence with "And" or "But" in English, it is considered informal. In formal writing, try to use transition words like "Furthermore" or "However" instead of starting sentences with FANBOYS.

### Guided Practice
*Choose the correct conjunction:*
1. I would buy that car, (but / so) it is too expensive.
2. (Although / Because) he studied hard, he failed the test.
3. You can have tea (or / nor) coffee.
*(Answers: 1. but (contrast), 2. Although (unexpected result), 3. or (choice))*

### Classroom Use
**For Teachers:** Do a "Sentence Chain" activity. Write a clause on the board: "I woke up late." Have students take turns adding onto the story using a conjunction (e.g., "...SO I missed the bus." "...BECAUSE I forgot to set my alarm." "...AND I didn't eat breakfast."). 

### 📌 Remember
- Conjunctions are the glue that connects words and sentences.
- FANBOYS connect equal ideas (use a comma if connecting two full sentences).
- Subordinating conjunctions (because, although, if) connect a weak idea to a strong idea.
- Never use two glue words (like *Although* and *but*) for only two ideas.`
  },
  {
    id: "grammar-interjections",
    content: `### Welcome to Interjections

Sometimes, grammar rules fly out the window because we are surprised, hurt, angry, or excited. 

If you drop a heavy dictionary on your foot, you don't form a perfect Subject-Verb-Object sentence. You shout, "Ouch!" That word is an **Interjection**.

### The Core Meaning

An **Interjection** is a word or short phrase that expresses strong emotion or feeling. 

They are the rebels of the grammar world. They don't connect to the rest of the sentence grammatically. You can remove an interjection, and the sentence will still be perfectly correct. They just add flavor and emotion!

### Step-by-Step Logic

Interjections are usually placed at the very beginning of a sentence. Because they are not grammatically attached to the sentence, they must be separated by punctuation.

**Rule 1: Strong Emotion = Exclamation Mark (!)**
- **Wow!** That is a beautiful car.
- **Ouch!** I cut my finger.
- **Oh no!** I forgot my keys.

**Rule 2: Mild Emotion = Comma (,)**
- **Well,** I guess we should go.
- **Oh,** I didn't know that.
- **Yes,** I will help you.

### Examples in Action

Interjections cover a wide range of human emotions:
- **Surprise:** Wow, Oh, Gosh, Whoa.
- **Pain:** Ouch, Ow.
- **Joy/Triumph:** Yay, Hurray, Bingo.
- **Hesitation:** Uh, Um, Hmm, Well.
- **Greetings/Agreements:** Hello, Hi, Yes, No, Okay.

### Common Mistakes

**Mistake:** Not separating the interjection with punctuation.
- ❌ "Wow you look great."
- ✅ "**Wow!** You look great." OR "**Wow,** you look great."
- **Why?** Because the interjection has no grammatical connection to "you look great," it must be walled off with punctuation.

### Comparison: Interjection vs Adverb
Sometimes the same word can be an adverb or an interjection, depending on how it's used.
- **Adverb:** The boy ran **well**. (Describes how he ran).
- **Interjection:** **Well,** I think we are lost. (Expresses hesitation).

### 🇮🇩 Indonesian Learner Warning
Every language has its own unique interjections for pain or surprise (e.g., Indonesian uses "Aduh!" for pain or "Lho!" for surprise). These do not translate! If you want to sound natural in English, practice using "Ouch!" instead of "Aduh!" and "Wow!" instead of "Wah!"

### Guided Practice
*Add the correct punctuation to these interjections:*
1. Ouch ___ That pan is hot.
2. Hmm ___ I am not sure what to order.
3. Yay ___ We won the game.
*(Answers: 1. Ouch! 2. Hmm, 3. Yay!)*

### Classroom Use
**For Teachers:** Give students a very boring sentence, like "The bus is here." Hand out cards with different emotions (angry, happy, hurt, surprised). Have students read the sentence, but they must add an Interjection at the beginning that matches their emotion card. (e.g., "Ugh! The bus is here." vs "Yay! The bus is here.").

### 📌 Remember
- Interjections show emotion (joy, pain, surprise, hesitation).
- They are not grammatically connected to the sentence.
- Always separate them with an Exclamation Mark (!) for strong emotion, or a Comma (,) for mild emotion.
- Learn English interjections to sound more natural when speaking!`
  },
  {
    id: "grammar-adjective-vs-adverb",
    content: `### Adjective vs. Adverb

One of the most classic grammar battles is **Adjective vs. Adverb**. 

They both have the same job: they are "Describers." But they have very strict rules about *who* they are allowed to describe. If you mix them up, native speakers will instantly notice.

### The Core Meaning

- **Adjectives** describe **NOUNS** (things, people, places). They answer: *What kind?*
- **Adverbs** describe **VERBS** (actions). They answer: *How?*

### Step-by-Step Logic

When you want to describe something, follow this two-step process:
1. Ask yourself: "What word am I trying to describe?"
2. If it's a Noun/Pronoun -> Use an Adjective.
3. If it's a Verb/Action -> Use an Adverb (usually add -ly).

#### Example 1: The word "Careful"
- *Describe the noun (driver):* He is a **careful** driver. (Adjective)
- *Describe the action (driving):* He drives **carefully**. (Adverb)

#### Example 2: The word "Quick"
- *Describe the noun (runner):* She is a **quick** runner. (Adjective)
- *Describe the action (running):* She runs **quickly**. (Adverb)

### The Special Exceptions: Good vs Well
This is the most common mistake made by both learners AND native speakers!
- **Good** is always an Adjective. It describes nouns.
- **Well** is always an Adverb. It describes actions.

- ❌ He did a *well* job. (Job is a noun. Must use Adjective -> He did a **good** job).
- ❌ He speaks English *good*. (Speaks is an action. Must use Adverb -> He speaks English **well**).

*(Note: "Well" can be an adjective ONLY when talking about health. e.g., "I don't feel well").*

### Common Mistakes

**Mistake:** Using an adjective after an action verb.
- ❌ "Please walk quiet."
- ✅ "Please walk **quietly**."

**Mistake:** Using an adverb after a Linking Verb (like *look, feel, smell, taste*).
- ❌ "The food smells deliciously."
- ✅ "The food smells **delicious**." 
- **Why?** Linking verbs connect back to the NOUN. The food (noun) is delicious (adjective). 

### 🇮🇩 Indonesian Learner Warning
In Indonesian, the word "baik" means both *good* and *well*. "Dia anak yang baik" (good) and "Dia bekerja dengan baik" (well). Because Indonesian doesn't change the word, Indonesian learners frequently say "I play guitar good." Remember to switch to **well** for actions!

### Guided Practice
*Choose the Adjective or the Adverb:*
1. She is a (beautiful / beautifully) singer.
2. She sings (beautiful / beautifully).
3. I did very (good / well) on my test.
4. The pizza tastes (perfect / perfectly).
*(Answers: 1. beautiful (adj for singer). 2. beautifully (adv for sings). 3. well (adv for did). 4. perfect (adj for pizza, after linking verb tastes))*

### Classroom Use
**For Teachers:** Play the "Good/Well" game. Throw a ball to a student and say a Noun or a Verb. If you say a noun ("a student"), they must catch the ball and say "a GOOD student." If you say a verb ("swim"), they must catch the ball and say "swim WELL."

### 📌 Remember
- Adjectives describe Nouns (things).
- Adverbs describe Verbs (actions) and often end in -ly.
- Use GOOD for nouns. Use WELL for actions.
- Use Adjectives after linking verbs (like *smell, taste, feel*).`
  },
  {
    id: "grammar-preposition-vs-conjunction",
    content: `### Preposition vs. Conjunction

Sometimes, a single word can act as both a **Preposition** and a **Conjunction**. (Words like *before, after, until, and since* are famous for this). 

How do you know which one it is? It entirely depends on what comes *after* the word. Understanding this difference is crucial for avoiding sentence fragments and run-on sentences.

### The Core Meaning

Both Prepositions and Conjunctions are connecting words, but they connect different things:
- A **Preposition** connects a **Noun/Pronoun** to the sentence. (It sits in front of a thing).
- A **Conjunction** connects a **Whole Clause** (Subject + Verb) to the sentence. (It sits in front of an entire mini-sentence).

### Step-by-Step Logic

Look at what follows the word to determine its job!

#### Example 1: BEFORE
- **Preposition:** I will see you **before** *dinner*. 
  *(Dinner is just a noun. Therefore, 'before' is a preposition).*
- **Conjunction:** I will see you **before** *we eat dinner*. 
  *(We eat dinner has a subject 'we' and a verb 'eat'. Therefore, 'before' is a conjunction).*

#### Example 2: AFTER
- **Preposition:** We went home **after** *the movie*. 
  *(The movie is just a noun).*
- **Conjunction:** We went home **after** *the movie ended*. 
  *(The movie ended has a subject 'movie' and verb 'ended').*

### The Tricky Words: Because vs Because Of
This is heavily tested on grammar exams! They mean the exact same thing, but have different grammar rules.
- **Because of** is a Preposition. It must be followed by a Noun.
  - ✅ We stayed home **because of** *the rain*.
- **Because** is a Conjunction. It must be followed by a Subject + Verb.
  - ✅ We stayed home **because** *it was raining*.
  - ❌ We stayed home *because the rain*. (Wrong! Missing a verb).

### Common Mistakes

**Mistake:** Following a preposition with a full sentence.
- ❌ "Despite it was raining, we went out."
- ✅ "**Although** it was raining, we went out." (Conjunction + S/V)
- ✅ "**Despite** the rain, we went out." (Preposition + Noun)

### Comparison: During vs While
- **During** is a Preposition. + Noun.
  - *He fell asleep **during** the movie.*
- **While** is a Conjunction. + Subject + Verb.
  - *He fell asleep **while** he was watching the movie.*

### 🇮🇩 Indonesian Learner Warning
In Indonesian, "karena" covers both *because* and *because of*, and "selama" covers both *during* and *while*. You must look at the English structure to translate correctly! If there is a subject and a verb next, use the Conjunction (*because, while*). If it's just a noun, use the Preposition (*because of, during*).

### Guided Practice
*Choose the correct connecting word:*
1. We cancelled the picnic (because / because of) the bad weather.
2. (During / While) the flight, I read a book.
3. (During / While) I was flying, I read a book.
*(Answers: 1. because of (noun), 2. During (noun), 3. While (Subject+Verb))*

### Classroom Use
**For Teachers:** Write "Because" and "Because of" on the board. Give students sentence endings on strips of paper (e.g., "...my headache", "...I had a headache", "...the traffic", "...there was traffic"). Have them tape the strips under the correct heading based on whether it is a Noun Phrase or a Full Clause.

### 📌 Remember
- Prepositions are followed by NOUNS (or pronouns).
- Conjunctions are followed by CLAUSES (Subject + Verb).
- Because, Although, and While = Conjunctions.
- Because of, Despite, and During = Prepositions.`
  }
];

async function run() {
  let lessonsContent = fs.readFileSync(lessonsPath, 'utf8');
  const data = await import('../data/lessons.js');
  const lessons = data.lessons;

  updates.forEach(update => {
    const idx = lessons.findIndex(l => l.id === update.id);
    if (idx !== -1) {
      lessons[idx].content = update.content;
    }
  });

  const newContent = `export const lessons = ${JSON.stringify(lessons, null, 2)};\n`;
  fs.writeFileSync(lessonsPath, newContent, 'utf8');
  console.log("Updated 13 Parts of Speech lessons.");
}

run();
