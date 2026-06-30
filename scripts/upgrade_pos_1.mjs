import fs from 'fs';
import path from 'path';

const lessonsPath = path.join(process.cwd(), 'data', 'lessons.js');

const updates = [
  {
    id: "grammar-what-are-parts-of-speech",
    content: `### Welcome to Parts of Speech

Have you ever wondered how words fit together to make a sentence? Think of a sentence like a sports team. You can't have a team with only goalkeepers, right? You need different players doing different jobs. 

In English, words have different jobs, too. We call these jobs **Parts of Speech**. Understanding parts of speech is one of the fastest ways to improve your writing and speaking because it helps you know *why* a word goes in a certain place.

### The Core Meaning

A "part of speech" is just a category. It tells us how a word functions in meaning as well as grammatically within the sentence. 

When you look up a word in the dictionary, the very first thing it tells you is its part of speech (like *noun*, *verb*, or *adjective*). This is because you cannot use a word correctly if you don't know its job.

### Step-by-Step Logic

Instead of memorizing thousands of rules, ask yourself: **What is this word doing right now?**
- Is it naming a thing? (Noun)
- Is it showing an action? (Verb)
- Is it describing a thing? (Adjective)

#### Examples in Action

Look at the word **"water"**.
- **Sentence 1:** "I drink a lot of **water**." (Here, *water* is a thing. It is a Noun.)
- **Sentence 2:** "Please **water** the plants." (Here, *water* is an action. It is a Verb.)

See? The job changes depending on the sentence.

### Common Mistakes

**Mistake:** Using a noun when you need a verb.
- ❌ "I will decision later." (*Decision* is a noun.)
- ✅ "I will **decide** later." (*Decide* is a verb.)
- **Why?** After "will", you need an action word (verb), not a thing (noun).

### Comparison: Parts of Speech vs Sentence Parts
Don't confuse Parts of Speech (what the word IS) with Sentence Parts (what the word DOES in the whole sentence).
- **Part of Speech:** Noun, Verb, Adjective.
- **Sentence Part:** Subject, Predicate, Object.
A noun (part of speech) often acts as the subject (sentence part).

### 🇮🇩 Indonesian Learner Warning
In Indonesian, a word often doesn't change its form even if its job changes (e.g., "makan" = to eat, "makanan" = food, but sometimes words stay identical). In English, words often change their spelling depending on their part of speech (e.g., *beautiful* vs *beauty* vs *beautifully*). Always check the dictionary!

### Guided Practice
*Think about these sentences. What is the job of the bold word?*
1. She gave me a **smile**. (Is it an action or a thing?)
2. Please **smile** for the camera. (Is it an action or a thing?)
*(Answers: 1. Noun / Thing. 2. Verb / Action.)*

### Classroom Use
**For Teachers:** Write the word "BOOK" on the board. Ask students to make two sentences: one where "book" is a thing (I read a book) and one where it is an action (I need to book a ticket). This instantly proves that words have multiple jobs.

### 📌 Remember
- A part of speech is a word's "job" in a sentence.
- You can't build a good sentence without knowing the jobs of your words.
- A word can change its job depending on how it is used.
- Always check if a word is an action, a thing, or a description.`
  },
  {
    id: "grammar-8-main-parts-of-speech",
    content: `### Meet the 8 Main Players

Just like a chessboard has different pieces—kings, queens, knights, and pawns—the English language has 8 main types of words. We call these the **8 Main Parts of Speech**. 

If you know these 8 categories, you can understand almost any grammar rule your teacher gives you. 

### The Core 8 Roles

Let's meet the team. Here is what each one does:

1. **Noun:** The Namer. Names a person, place, thing, or idea. (e.g., *student, Jakarta, happiness*)
2. **Pronoun:** The Replacer. Replaces a noun so we don't repeat ourselves. (e.g., *he, she, it, they*)
3. **Verb:** The Action. Shows action or state of being. (e.g., *run, is, think*)
4. **Adjective:** The Describer. Describes a noun or pronoun. (e.g., *happy, tall, blue*)
5. **Adverb:** The Enhancer. Describes a verb, adjective, or other adverb. (e.g., *quickly, very, well*)
6. **Preposition:** The Relator. Shows time, place, or direction. (e.g., *in, on, at, under*)
7. **Conjunction:** The Connector. Joins words or sentences together. (e.g., *and, but, because*)
8. **Interjection:** The Shouter. Shows strong emotion. (e.g., *Wow! Ouch! Oh!*)

### Sentence Pattern Example

Let's look at a sentence that uses many of these parts:
> "**Wow!** The **quick** **student** **ran** **fast** **to** the class, **and** **he** won."

Let's break it down:
- **Wow!** (Interjection - emotion)
- **quick** (Adjective - describes the student)
- **student** (Noun - a person)
- **ran** (Verb - the action)
- **fast** (Adverb - describes how he ran)
- **to** (Preposition - shows direction)
- **and** (Conjunction - connects ideas)
- **he** (Pronoun - replaces "the student")

### 🇮🇩 Indonesian Learner Warning
Indonesian doesn't use "be" verbs (am, is, are) in the same way. In English, "is" is a very important **Verb**. For example, "Dia tinggi" (He tall) must be "He **is** tall" in English. Never forget your "be" verbs!

### Guided Practice
*Identify the part of speech for the bold words:*
1. I live in a **big** house. (Noun, Verb, or Adjective?)
2. She speaks **loudly**. (Adjective or Adverb?)
3. **Ouch!** That hurt. (Conjunction or Interjection?)
*(Answers: 1. Adjective, 2. Adverb, 3. Interjection)*

### Classroom Use
**For Teachers:** Give students a short, boring sentence like "The dog barked." Ask them to add one adjective, one adverb, and one prepositional phrase. (e.g., "The **angry** dog barked **loudly** **at the mailman**.") It's a great way to show how the 8 parts build sentences.

### 📌 Remember
- There are 8 main word jobs in English.
- Nouns are things; Verbs are actions; Adjectives and Adverbs are describers.
- Prepositions, Conjunctions, and Pronouns are the "glue" that holds sentences together.
- Interjections add emotion.`
  },
  {
    id: "grammar-word-roles-in-sentences",
    content: `### How Words Work Inside Sentences

We know that words have jobs (Parts of Speech). But how do they actually interact with each other when we put them together in a sentence? 

Think of a sentence like a machine. A noun is just a piece of metal, and a verb is a motor. They do nothing until you connect them properly. This lesson will show you how words work *together*.

### The Core Meaning: Subject, Verb, and Object

Words group together to form larger roles. The three most important roles in an English sentence are:
1. **The Subject:** Who or what is doing the action. (Usually a Noun or Pronoun).
2. **The Verb:** The action itself.
3. **The Object:** Who or what receives the action. (Usually a Noun or Pronoun).

### Step-by-Step Logic

Let's build a sentence step by step to see how roles work.
- **Start with a Noun:** *Dogs.* (Right now, it's just a word).
- **Give it a Verb:** *Dogs chase.* (Now it's a sentence! The noun is acting as the Subject).
- **Give it an Object:** *Dogs chase cats.* (The noun 'cats' is receiving the action).
- **Add Modifiers:** *The **fast** dogs **quickly** chase the cats.* (Adjectives and Adverbs attach to the nouns and verbs to add detail).

### Sentence Patterns

**Pattern: Subject + Verb + Object**
- The teacher (Subject) + explained (Verb) + the grammar (Object).

Notice how the Noun "teacher" does one job (Subject), and the Noun "grammar" does a completely different job (Object). This is why sentence roles matter!

### Common Mistakes

**Mistake:** Mixing up Subject and Object pronouns.
- ❌ "Me love pizza." (*Me* is an object pronoun, but here it's in the subject position.)
- ✅ "**I** love pizza."
- **Why?** You must use a Subject Pronoun (I, he, she, they) before the verb.

### Comparison: Adjective vs. Adverb Roles
Both describe things, but their roles in the sentence are strictly separated.
- **Adjectives ONLY talk to Nouns:** "A **slow** car."
- **Adverbs ONLY talk to Verbs (or other describers):** "He drives **slowly**."

### 🇮🇩 Indonesian Learner Warning
In English, Word Order is very strict (Subject-Verb-Object). Because words don't have "markers" on them, their position tells us their role. "The boy hit the ball" is completely different from "The ball hit the boy." Don't mix up the order!

### Guided Practice
*Identify the Subject, Verb, and Object in this sentence:*
"My sister ate an apple."
*(Answer: Subject = My sister, Verb = ate, Object = an apple)*

### Classroom Use
**For Teachers:** Do a "living sentence" activity. Give three students cards: one with a Noun, one with a Verb, and one with an Object. Have them stand in order. Then, hand out Adjective cards to other students and ask them where they should stand in the line.

### 📌 Remember
- Words team up to form the Subject, Verb, and Object.
- The Subject does the action; the Object receives it.
- Nouns usually play the role of Subject or Object.
- Word order is the secret to clear English sentences.`
  },
  {
    id: "grammar-words-with-multiple-roles",
    content: `### Words with More Than One Role

One of the most confusing (but also coolest) things about English is that a word can change its job without changing its spelling! 

Imagine a person who is a teacher during the day, but a musician at night. They are the exact same person, just doing a different job. English words do this all the time.

### The Core Meaning

A word's part of speech is determined **only by how it is used in the sentence**. You cannot look at an isolated word and guarantee what it is. You have to look at its context.

### Step-by-Step Logic

When you see a word you know, but it feels confusing, ask yourself:
1. Is it coming after "a", "an", or "the"? (It's acting as a Noun).
2. Is someone *doing* it? (It's acting as a Verb).
3. Is it describing a thing? (It's acting as an Adjective).

#### Example 1: PLAY
- **Verb:** The children **play** outside. (Action)
- **Noun:** We went to see a **play** at the theater. (A thing/performance)

#### Example 2: LIGHT
- **Noun:** Turn on the **light**. (A thing)
- **Adjective:** The suitcase is very **light**. (Describes the weight)
- **Verb:** Please **light** the candle. (Action)

### Common Mistakes

**Mistake:** Adding unnecessary endings because you think a word needs to be a noun.
- ❌ "I have a lot of works to do." (Here, *work* is an uncountable noun, not a verb with an -s).
- ✅ "I have a lot of **work** to do."

### Comparison: Present Participles (Verb vs. Adjective)
Words ending in -ing are famous for switching roles.
- **Verb:** She is **boring** the students. (She is causing it to happen).
- **Adjective:** The movie was **boring**. (Describes the movie).
- **Noun (Gerund):** **Reading** is fun. (The activity itself).

### 🇮🇩 Indonesian Learner Warning
Be careful when translating words in a dictionary. A dictionary might list "Run = Berlari (Verb)" but forget to tell you it can be a Noun ("I went for a run"). Always look at the English sentence structure to understand the word's true meaning.

### Guided Practice
*Determine if the bold word is a Noun, Verb, or Adjective:*
1. I need a **drink** of water.
2. I **drink** water every day.
3. This is a very **cold** room.
4. I have a bad **cold**.
*(Answers: 1. Noun, 2. Verb, 3. Adjective, 4. Noun)*

### Classroom Use
**For Teachers:** Give students a "Word of the Day" that has multiple roles (like *book, water, light, train*). Have teams compete to write the word correctly in three different sentences using three different parts of speech.

### 📌 Remember
- Never assume a word's part of speech just by looking at it.
- Context is everything! Look at the words around it.
- Common words (water, book, run, light) frequently switch between Nouns and Verbs.`
  },
  {
    id: "grammar-nouns",
    content: `### Welcome to Nouns

Look around the room you are in right now. Everything you can see, touch, or hold has a name. A chair. A phone. A friend. The air. 

These naming words are called **Nouns**. They are the building blocks of language. Without nouns, we wouldn't know who or what anyone was talking about!

### The Core Meaning

A Noun is a word that names a **Person, Place, Thing, or Idea**. 

While persons, places, and things are easy to understand, "ideas" are invisible things. Nouns can name emotions (love, anger) or concepts (freedom, time, education).

### Step-by-Step Logic

How do you spot a Noun in a sentence? Look for these clues:
1. **The Article Test:** Can you put *a, an,* or *the* in front of it? (The **dog**, a **car**, the **happiness**).
2. **The Subject/Object Test:** Is it doing the action, or receiving the action? 
   - **John** (Noun) kicked the **ball** (Noun).

### Examples in Action

Let's look at the four types of nouns:
- **Person:** student, teacher, doctor, Maria, brother.
- **Place:** school, kitchen, London, park.
- **Thing:** computer, book, coffee, tree.
- **Idea/Concept:** love, history, mathematics, sadness.

### Common Mistakes

**Mistake:** Confusing an adjective with a noun.
- ❌ "He has a lot of happy." (*Happy* is an adjective; you can't *have* an adjective).
- ✅ "He has a lot of **happiness**." (*Happiness* is the noun form).
- **Fix:** Use noun suffixes like *-ness, -tion, -ity, -ment* when you need a noun.

### Comparison: Noun vs. Pronoun
A Noun is the actual name. A Pronoun is a shortcut word used to replace the noun.
- **Noun:** **Sarah** called **David**.
- **Pronoun:** **She** called **him**.
(We use pronouns so we don't have to repeat nouns constantly).

### 🇮🇩 Indonesian Learner Warning
In Indonesian, abstract nouns are often formed with *ke-...-an* or *pe-...-an* (e.g., *kebahagiaan* = happiness). In English, we use suffixes like *-ness, -tion, -ment* to turn verbs or adjectives into nouns. Be careful to use the noun form, not the verb form, when talking about concepts! (e.g., Use *education*, not *educate*, as a subject).

### Guided Practice
*Identify all the nouns in this sentence:*
"The teacher gave a test about history to the students."
*(Answers: teacher, test, history, students)*

### Classroom Use
**For Teachers:** Play "Noun Scattergories." Give the class a letter (e.g., 'C'). Give them 60 seconds to write down one Person, one Place, one Thing, and one Idea starting with 'C'. (e.g., Charlie, Canada, Car, Courage). 

### 📌 Remember
- A Noun names a person, place, thing, or idea.
- If you can put "the" in front of it, it's almost certainly a noun.
- Nouns act as the subjects and objects in your sentences.`
  },
  {
    id: "grammar-common-proper-nouns",
    content: `### Common and Proper Nouns

Imagine you are in a parking lot looking for your car. If someone says, "It's in a **car**," that doesn't help you much. But if they say, "It's in the **Toyota**," you know exactly what to look for.

In English, we have general names for things, and we have specific, official names. We call these **Common Nouns** and **Proper Nouns**.

### The Core Meaning

- **Common Noun:** A general, non-specific word for a person, place, thing, or idea. It is written with a small (lowercase) letter.
- **Proper Noun:** The specific, official name of a particular person, place, or thing. It ALWAYS starts with a big (Capital) letter.

### Sentence Patterns & Logic

Whenever you write in English, you must decide if a noun needs a capital letter.

**Common vs. Proper Pairs:**
- **city** (common) -> **Tokyo** (proper)
- **man** (common) -> **David** (proper)
- **company** (common) -> **Google** (proper)
- **month** (common) -> **August** (proper)

*Rule of thumb:* If it's the name on a birth certificate, a map, a brand logo, or a calendar, it is a Proper Noun and must be capitalized!

### Common Mistakes

**Mistake:** Forgetting to capitalize days, months, and languages.
- ❌ "I study english on monday."
- ✅ "I study **English** on **Monday**."
- **Why?** Languages (English, Indonesian) and days of the week are Proper Nouns in English.

**Mistake:** Capitalizing seasons.
- ❌ "I love Summer."
- ✅ "I love **summer**."
- **Why?** Seasons (summer, winter, spring, autumn) are considered Common Nouns.

### Comparison: School Subjects
- General subjects (math, history, science) are **Common Nouns** (lowercase).
- Languages (English, Spanish) or specific course titles (History 101) are **Proper Nouns** (capitalized).

### 🇮🇩 Indonesian Learner Warning
The rules for capital letters are very similar in Indonesian (EYD). However, Indonesian learners often forget to capitalize nationalities and languages when writing quickly in English. Always write *Indonesian*, *Japanese*, or *American* with a capital letter!

### Guided Practice
*Which words in this sentence should be capitalized?*
"my friend sarah moved to london last october."
*(Answers: My, Sarah, London, October)*

### Classroom Use
**For Teachers:** Draw a two-column chart on the board: "Common" and "Proper." Give students 10 common nouns (ocean, singer, country, movie, restaurant). Ask them to shout out proper nouns to match each one (Pacific Ocean, Taylor Swift, Japan, Titanic, McDonald's). 

### 📌 Remember
- Common nouns are general and use lowercase letters.
- Proper nouns are specific names and ALWAYS use Capital letters.
- Always capitalize names, cities, countries, days, months, languages, and brands.
- Do not capitalize seasons.`
  },
  {
    id: "grammar-singular-plural-nouns",
    content: `### Singular and Plural Nouns

When you order food, there's a big difference between ordering "one pizza" and "three pizzas." English needs a clear way to show whether we are talking about just one thing, or more than one thing. 

We do this using **Singular** and **Plural** nouns.

### The Core Meaning

- **Singular:** Means exactly ONE. (Think: *single*).
- **Plural:** Means TWO or MORE. (Think: *plus*).

In English, we usually show that a word is plural by adding an **-s** or **-es** to the end of the noun.

### Step-by-Step Logic & Spelling Rules

Most of the time, you just add **-s**. But sometimes the spelling changes depending on how the word ends.

1. **Regular Rule:** Just add -s.
   - book -> books
   - car -> cars
2. **Ends in -s, -x, -ch, -sh, -z:** Add -es.
   - bus -> buses
   - box -> boxes
   - watch -> watches
3. **Ends in a Consonant + y:** Change the 'y' to 'i' and add -es.
   - city -> cities
   - baby -> babies
4. **Irregular Nouns:** These break the rules! You have to memorize them.
   - man -> men
   - woman -> women
   - child -> children
   - tooth -> teeth
   - foot -> feet

### Common Mistakes

**Mistake:** Adding an -s to irregular plurals.
- ❌ "The childrens are playing."
- ✅ "The **children** are playing."
- **Why?** "Children" is already plural. Adding an -s makes it a double plural, which is wrong.

**Mistake:** Forgetting the -s entirely.
- ❌ "I have three brother."
- ✅ "I have three **brothers**."

### Comparison: Singular vs Plural Agreement
When a noun changes from singular to plural, the verb often has to change too!
- **Singular:** The student **is** reading.
- **Plural:** The students **are** reading.
(We will cover this more in Subject-Verb Agreement!)

### 🇮🇩 Indonesian Learner Warning
In Indonesian, to make something plural, you usually repeat the word (buku-buku) or use a quantity word (banyak buku). You do not change the ending of the word. In English, you MUST add the plural -s ending when talking about more than one thing, even if you use a number! (e.g., "Two book" is wrong; it must be "Two book**s**").

### Guided Practice
*What is the correct plural form of these words?*
1. box -> ?
2. party -> ?
3. person -> ?
*(Answers: 1. boxes, 2. parties, 3. people)*

### Classroom Use
**For Teachers:** Do an "Irregular Plural Relay." Split the class into teams. Call out singular words (foot, child, person, mouse, leaf, knife). One student from each team runs to the board to write the correct plural form.

### 📌 Remember
- Singular means one. Plural means two or more.
- Add -s or -es to most nouns to make them plural.
- Watch out for consonant + y (change to -ies).
- Memorize irregular plurals like children, men, women, and people.`
  },
  {
    id: "grammar-countable-uncountable-nouns",
    content: `### Countable and Uncountable Nouns

Imagine trying to count the grains of sand on a beach, or trying to count liquid water. It's impossible! 

In English, we separate nouns into two groups: things we can count easily, and things we treat as a solid mass. We call these **Countable** and **Uncountable** nouns. This rule is extremely important because it changes the grammar around the word.

### The Core Meaning

- **Countable Nouns (Count Nouns):** Things you can count with numbers. They have a singular and a plural form. (e.g., 1 apple, 2 apples, 3 apples).
- **Uncountable Nouns (Non-Count Nouns):** Things you cannot count with numbers. They are treated as a mass, a liquid, or a concept. They ONLY have a singular form. (e.g., water, air, information).

### Step-by-Step Logic

How do you use them correctly?

**Rule 1: Plurals**
- Countable: Can take an -s (books, cars).
- Uncountable: NEVER take an -s (waters ❌, informations ❌).

**Rule 2: A / An / Numbers**
- Countable: Can use "a/an" or numbers (A book, two cars).
- Uncountable: Cannot use "a/an" or numbers (A water ❌, two informations ❌). 
  - *Fix:* Use a container word instead! "A **glass of** water," "A **piece of** information."

**Rule 3: Much vs. Many**
- Countable: Use **Many** (How *many* books?)
- Uncountable: Use **Much** (How *much* water?)

### Common Uncountable Categories
To help you remember, uncountable nouns usually fall into these groups:
- **Liquids & Gases:** water, milk, coffee, air.
- **Powders & Grains:** rice, sugar, sand, flour.
- **Materials:** wood, metal, plastic, paper.
- **Concepts/Abstract:** information, advice, knowledge, time, money.

### Common Mistakes

**Mistake:** Adding an 's' to uncountable nouns.
- ❌ "I need some advices."
- ✅ "I need some **advice**." (or "a piece of advice").

**Mistake:** Using "many" with uncountable nouns.
- ❌ "I don't have many money."
- ✅ "I don't have **much** money." (Money is uncountable; coins/dollars are countable).

### Comparison: Countable vs Uncountable
Some words can be both, depending on the meaning!
- **Hair (Uncountable):** She has beautiful hair. (The whole mass on her head).
- **Hair (Countable):** I found a hair in my soup! (One single strand).

### 🇮🇩 Indonesian Learner Warning
In Indonesian, words like *informasi*, *nasihati*, and *perabotan* can easily be counted. In English, **Information, Advice, and Furniture** are strictly uncountable! Never say "furnitures" or "an advice." This is a very common test question.

### Guided Practice
*Choose the correct sentence:*
1. A) I have many homeworks. B) I have a lot of homework.
2. A) How much sugar do you want? B) How many sugar do you want?
*(Answers: 1. B, because homework is uncountable. 2. A, because sugar is uncountable).*

### Classroom Use
**For Teachers:** Bring in a bottle of water and a bag of pens. Ask students: "Can I count the pens? Yes. One pen, two pens. Can I count the water? One water, two waters? No! I have to count the *bottles* of water." This visual makes it clear instantly.

### 📌 Remember
- Countable nouns can be plural (-s) and take numbers (one, two, three).
- Uncountable nouns are NEVER plural and cannot take numbers.
- Use "many" for countable, and "much" for uncountable.
- Watch out for tricky uncountable words: homework, advice, information, furniture, money.`
  },
  {
    id: "grammar-subject-object-pronouns",
    content: `### Subject and Object Pronouns

Imagine telling a story like this: "David woke up. David ate David's breakfast. Then David drove David's car to work." 

That sounds terrible, right? We repeat the name "David" way too much. To fix this, English uses **Pronouns**—shortcut words that replace nouns. But you have to choose the right pronoun depending on what job it's doing!

### The Core Meaning

A pronoun takes the place of a noun. 
- A **Subject Pronoun** is the "doer" of the action. It goes *before* the verb.
- An **Object Pronoun** is the "receiver" of the action. It goes *after* the verb or after a preposition (like *to, for, with*).

### Step-by-Step Logic

Let's look at the teams:

**Subject Pronouns (The Doers):**
- I, You, He, She, It, We, They
- *Pattern:* [Subject Pronoun] + Verb
- *Example:* **She** called the teacher.

**Object Pronouns (The Receivers):**
- Me, You, Him, Her, It, Us, Them
- *Pattern:* Verb/Preposition + [Object Pronoun]
- *Example:* The teacher called **her**.

### Sentence Patterns

Notice how the pronoun changes completely when it moves from the front to the back of the sentence!
- **I** (subject) like **him** (object).
- **He** (subject) likes **me** (object).
- **They** (subject) gave the book to **us** (object after preposition).

### Common Mistakes

**Mistake:** Using a subject pronoun after a preposition.
- ❌ "This is a secret between you and I."
- ✅ "This is a secret between you and **me**."
- **Why?** "Between" is a preposition, so you must use the object pronoun "me."

**Mistake:** Mixing them up in compound subjects.
- ❌ "Me and John went to the store."
- ✅ "**John and I** went to the store."
- **Why?** They are doing the action, so you need the subject pronoun "I". (Also, it's polite to put yourself last).

### Comparison: You and It
Notice that "You" and "It" never change shape! They are the exact same word whether they are the subject or the object.
- **Subject:** **It** is a good book. / **You** are nice.
- **Object:** I read **it**. / I saw **you**.

### 🇮🇩 Indonesian Learner Warning
In Indonesian, pronouns don't change form based on their position. "Saya" is "Saya" at the beginning (*Saya melihat dia*) and at the end (*Dia melihat saya*). In English, you MUST change *I* to *me*, *he* to *him*, *she* to *her*, and *they* to *them* when they receive the action!

### Guided Practice
*Choose the correct pronoun:*
1. (We / Us) are going to the movies.
2. The teacher gave the homework to (they / them).
3. Sarah and (I / me) are best friends.
*(Answers: 1. We, 2. them, 3. I)*

### Classroom Use
**For Teachers:** Do a "Pass the Ball" drill. Student A says, "I throw the ball to him" (and throws it to a boy). That boy says, "He threw the ball to me. Now I throw the ball to her" (throws to a girl). This reinforces that subjects and objects constantly flip.

### 📌 Remember
- Use Subject Pronouns (I, he, she, we, they) BEFORE the verb.
- Use Object Pronouns (me, him, her, us, them) AFTER the verb or prepositions.
- Never say "Me and my friend..." as the subject. Always say "My friend and I..."`
  },
  {
    id: "grammar-possessive-adjectives-pronouns",
    content: `### Possessive Adjectives and Possessive Pronouns

If you leave your phone on a table, and someone tries to take it, you want to shout, "That is MY phone!" or "That is MINE!"

In English, we have two different ways to talk about ownership (possession). One way uses the word as an adjective (describing the noun), and the other uses it as a pronoun (replacing the noun completely).

### The Core Meaning

- **Possessive Adjectives:** Words that go *in front* of a noun to show who owns it. (e.g., my, your, his, her).
- **Possessive Pronouns:** Words that stand *alone* and replace the noun completely. (e.g., mine, yours, his, hers).

### Step-by-Step Logic

Let's look at the two teams and how to use them.

**Team A: Possessive Adjectives (Must have a noun after them!)**
- my, your, his, her, its, our, their
- *Pattern:* [Possessive Adjective] + [Noun]
- *Example:* This is **my book**. (You cannot just say "This is my").

**Team B: Possessive Pronouns (Stand alone. No noun after them!)**
- mine, yours, his, hers, ours, theirs
- *Pattern:* [Possessive Pronoun]
- *Example:* This book is **mine**. (You cannot say "This is mine book").

### Sentence Patterns

Look at how you can say the exact same idea in two ways:
1. That is **your car**. (Adjective + Noun)
2. That car is **yours**. (Pronoun)

1. These are **our seats**. (Adjective + Noun)
2. These seats are **ours**. (Pronoun)

### Common Mistakes

**Mistake:** Adding an apostrophe to possessive pronouns.
- ❌ "The dog chased it's tail."
- ✅ "The dog chased **its** tail."
- **Why?** "It's" means "It is." The possessive form is "its" with no apostrophe!

**Mistake:** Putting a noun after a possessive pronoun.
- ❌ "This is yours pen."
- ✅ "This is **your** pen." OR "This pen is **yours**."

### Comparison: His vs. His
Notice that "his" is the exact same word on both teams!
- **Adjective:** This is **his** jacket.
- **Pronoun:** This jacket is **his**.

### 🇮🇩 Indonesian Learner Warning
In Indonesian, ownership is usually shown by putting the pronoun *after* the noun (buku *saya*, mobil *mereka*). In English, possessive adjectives MUST go *before* the noun (*my* book, *their* car). Also, don't forget the 's' on possessive pronouns (yours, hers, theirs)!

### Guided Practice
*Choose the correct word:*
1. Can I borrow (your / yours) pencil?
2. No, you can't. This pencil is (my / mine).
3. The cat is sleeping in (its / it's) bed.
*(Answers: 1. your, 2. mine, 3. its)*

### Classroom Use
**For Teachers:** Do an "Ownership Claim" activity. Collect a few items from students (a pen, a notebook, a bag). Hold one up and ask, "Whose pen is this?" The student must reply, "That is **my** pen; it is **mine**." Then point to the student and say to the class, "It is **her** pen; it is **hers**."

### 📌 Remember
- Possessive Adjectives (my, your, our, their) MUST be followed by a noun.
- Possessive Pronouns (mine, yours, ours, theirs) stand completely ALONE.
- Never use an apostrophe for possessive pronouns (its, yours, theirs).`
  }
];

async function run() {
  let lessonsContent = fs.readFileSync(lessonsPath, 'utf8');
  // Simple regex replacement is risky for multi-line. We'll parse, modify, write.
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
  console.log("Updated 10 Parts of Speech lessons.");
}

run();
