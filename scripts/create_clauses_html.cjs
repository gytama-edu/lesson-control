const fs = require('fs');
let html = fs.readFileSync('noun-phrase.html', 'utf-8');

// Replace "Noun Phrase" with "Clauses"
html = html.replace(/<title>Noun Phrase Pathway/g, '<title>Clauses Pathway');
html = html.replace(/<a href="\.\/noun-phrase\.html" class="text-white bg-slate-800\/50 border border-slate-700\/50 px-3 py-1\.5 rounded-md text-sm font-medium transition-colors shadow-sm">Noun Phrase<\/a>/g, '<a href="./clauses.html" class="text-white bg-slate-800/50 border border-slate-700/50 px-3 py-1.5 rounded-md text-sm font-medium transition-colors shadow-sm">Clauses</a>');
html = html.replace(/<h1 class="text-3xl sm:text-4xl font-display font-bold text-white mb-4 tracking-tight">Noun Phrase <span class="text-rose-400">Pathway<\/span><\/h1>/g, '<h1 class="text-3xl sm:text-4xl font-display font-bold text-white mb-4 tracking-tight">Clauses <span class="text-rose-400">Pathway</span></h1>');
html = html.replace(/<p class="text-slate-400 text-lg max-w-2xl leading-relaxed">\s*Master how to build complex noun phrases using modifiers, clauses, and determiners\.\s*<\/p>/, '<p class="text-slate-400 text-lg max-w-2xl leading-relaxed">\n          Master independent and dependent clauses to build complex sentences.\n        </p>');

// Now replace the sections.
// Group 1: Clause Foundations
// Group 2: Noun Clauses
// Group 3: Adjective / Relative Clauses
// Group 4: Adverb Clauses

// Let's replace the whole <div class="space-y-16"> content with our new groups.

const newSections = `
      <div class="space-y-16">

        <!-- Group 1: Clause Foundations -->
        <div class="relative">
          <div class="absolute -left-4 sm:-left-8 top-0 bottom-0 w-px bg-slate-800 hidden sm:block"></div>
          <div class="absolute -left-[37px] top-2 w-5 h-5 rounded-full border-4 border-slate-950 bg-emerald-500 hidden sm:block shadow-[0_0_10px_rgba(16,185,129,0.4)]"></div>
          
          <div class="mb-8">
            <h2 class="text-2xl font-display font-bold text-white mb-2">1. Clause Foundations</h2>
            <p class="text-slate-400">Learn the difference between phrases and clauses, and how to identify independent and dependent clauses.</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <a href="lesson.html?id=grammar-clause-overview" class="group bg-slate-900/80 backdrop-blur border border-slate-800 rounded-2xl p-6 hover:bg-slate-800 transition-all hover:border-emerald-500/50 flex flex-col h-full relative overflow-hidden shadow-lg shadow-black/20">
              <div class="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-md bg-slate-800/80 border border-slate-700 text-slate-300 text-[10px] font-mono tracking-widest mb-4 self-start">LESSON 1</div>
              <h3 class="text-lg font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">What Is a Clause?</h3>
              <p class="text-slate-400 text-sm flex-grow leading-relaxed">Understand the basic building block of sentences containing a subject and a verb.</p>
            </a>
            
            <a href="lesson.html?id=grammar-independent-dependent-clauses" class="group bg-slate-900/80 backdrop-blur border border-slate-800 rounded-2xl p-6 hover:bg-slate-800 transition-all hover:border-emerald-500/50 flex flex-col h-full relative overflow-hidden shadow-lg shadow-black/20">
              <div class="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-md bg-slate-800/80 border border-slate-700 text-slate-300 text-[10px] font-mono tracking-widest mb-4 self-start">LESSON 2</div>
              <h3 class="text-lg font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">Independent & Dependent Clauses</h3>
              <p class="text-slate-400 text-sm flex-grow leading-relaxed">Learn which clauses can stand alone and which cannot.</p>
            </a>

            <a href="lesson.html?id=grammar-phrases-vs-clauses" class="group bg-slate-900/80 backdrop-blur border border-slate-800 rounded-2xl p-6 hover:bg-slate-800 transition-all hover:border-emerald-500/50 flex flex-col h-full relative overflow-hidden shadow-lg shadow-black/20">
              <div class="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-md bg-slate-800/80 border border-slate-700 text-slate-300 text-[10px] font-mono tracking-widest mb-4 self-start">LESSON 3</div>
              <h3 class="text-lg font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">Phrases vs Clauses</h3>
              <p class="text-slate-400 text-sm flex-grow leading-relaxed">Differentiate between groups of words with and without a subject-verb pairing.</p>
            </a>
            
            <a href="lesson.html?id=grammar-main-subordinate-clauses" class="group bg-slate-900/80 backdrop-blur border border-slate-800 rounded-2xl p-6 hover:bg-slate-800 transition-all hover:border-emerald-500/50 flex flex-col h-full relative overflow-hidden shadow-lg shadow-black/20">
              <div class="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-md bg-slate-800/80 border border-slate-700 text-slate-300 text-[10px] font-mono tracking-widest mb-4 self-start">LESSON 4</div>
              <h3 class="text-lg font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">Main & Subordinate Clauses</h3>
              <p class="text-slate-400 text-sm flex-grow leading-relaxed">Understand how main and subordinate clauses interact in a sentence.</p>
            </a>
          </div>
        </div>

        <!-- Group 2: Noun Clauses -->
        <div class="relative">
          <div class="absolute -left-4 sm:-left-8 top-0 bottom-0 w-px bg-slate-800 hidden sm:block"></div>
          <div class="absolute -left-[37px] top-2 w-5 h-5 rounded-full border-4 border-slate-950 bg-emerald-500 hidden sm:block shadow-[0_0_10px_rgba(16,185,129,0.4)]"></div>
          
          <div class="mb-8">
            <h2 class="text-2xl font-display font-bold text-white mb-2">2. Noun Clauses</h2>
            <p class="text-slate-400">Discover how entire clauses can act as nouns, serving as subjects or objects.</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <a href="lesson.html?id=grammar-noun-clauses-overview" class="group bg-slate-900/80 backdrop-blur border border-slate-800 rounded-2xl p-6 hover:bg-slate-800 transition-all hover:border-emerald-500/50 flex flex-col h-full relative overflow-hidden shadow-lg shadow-black/20">
              <div class="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-md bg-slate-800/80 border border-slate-700 text-slate-300 text-[10px] font-mono tracking-widest mb-4 self-start">LESSON 1</div>
              <h3 class="text-lg font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">What Are Noun Clauses?</h3>
              <p class="text-slate-400 text-sm flex-grow leading-relaxed">Learn how a clause can function as a noun inside a sentence.</p>
            </a>
            
            <a href="lesson.html?id=grammar-noun-clauses-that" class="group bg-slate-900/80 backdrop-blur border border-slate-800 rounded-2xl p-6 hover:bg-slate-800 transition-all hover:border-emerald-500/50 flex flex-col h-full relative overflow-hidden shadow-lg shadow-black/20">
              <div class="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-md bg-slate-800/80 border border-slate-700 text-slate-300 text-[10px] font-mono tracking-widest mb-4 self-start">LESSON 2</div>
              <h3 class="text-lg font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">Noun Clauses with "That"</h3>
              <p class="text-slate-400 text-sm flex-grow leading-relaxed">Use 'that' to introduce statement clauses as objects or subjects.</p>
            </a>

            <a href="lesson.html?id=grammar-noun-clauses-wh-words" class="group bg-slate-900/80 backdrop-blur border border-slate-800 rounded-2xl p-6 hover:bg-slate-800 transition-all hover:border-emerald-500/50 flex flex-col h-full relative overflow-hidden shadow-lg shadow-black/20">
              <div class="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-md bg-slate-800/80 border border-slate-700 text-slate-300 text-[10px] font-mono tracking-widest mb-4 self-start">LESSON 3</div>
              <h3 class="text-lg font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">Noun Clauses with WH-Words</h3>
              <p class="text-slate-400 text-sm flex-grow leading-relaxed">Form noun clauses using question words while keeping statement word order.</p>
            </a>
            
            <a href="lesson.html?id=grammar-noun-clauses-subjects-objects" class="group bg-slate-900/80 backdrop-blur border border-slate-800 rounded-2xl p-6 hover:bg-slate-800 transition-all hover:border-emerald-500/50 flex flex-col h-full relative overflow-hidden shadow-lg shadow-black/20">
              <div class="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-md bg-slate-800/80 border border-slate-700 text-slate-300 text-[10px] font-mono tracking-widest mb-4 self-start">LESSON 4</div>
              <h3 class="text-lg font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">Subjects & Objects</h3>
              <p class="text-slate-400 text-sm flex-grow leading-relaxed">See how noun clauses act specifically as subjects or objects.</p>
            </a>
          </div>
        </div>
        
        <!-- Group 3: Adjective / Relative Clauses -->
        <div class="relative">
          <div class="absolute -left-4 sm:-left-8 top-0 bottom-0 w-px bg-slate-800 hidden sm:block"></div>
          <div class="absolute -left-[37px] top-2 w-5 h-5 rounded-full border-4 border-slate-950 bg-emerald-500 hidden sm:block shadow-[0_0_10px_rgba(16,185,129,0.4)]"></div>
          
          <div class="mb-8">
            <h2 class="text-2xl font-display font-bold text-white mb-2">3. Adjective / Relative Clauses</h2>
            <p class="text-slate-400">Use clauses to describe nouns, adding detail without starting a new sentence.</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <a href="lesson.html?id=grammar-relative-clauses-overview" class="group bg-slate-900/80 backdrop-blur border border-slate-800 rounded-2xl p-6 hover:bg-slate-800 transition-all hover:border-emerald-500/50 flex flex-col h-full relative overflow-hidden shadow-lg shadow-black/20">
              <div class="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-md bg-slate-800/80 border border-slate-700 text-slate-300 text-[10px] font-mono tracking-widest mb-4 self-start">LESSON 1</div>
              <h3 class="text-lg font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">What Are Relative Clauses?</h3>
              <p class="text-slate-400 text-sm flex-grow leading-relaxed">Understand how clauses can modify nouns like adjectives.</p>
            </a>
            
            <a href="lesson.html?id=grammar-relative-who-which-that" class="group bg-slate-900/80 backdrop-blur border border-slate-800 rounded-2xl p-6 hover:bg-slate-800 transition-all hover:border-emerald-500/50 flex flex-col h-full relative overflow-hidden shadow-lg shadow-black/20">
              <div class="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-md bg-slate-800/80 border border-slate-700 text-slate-300 text-[10px] font-mono tracking-widest mb-4 self-start">LESSON 2</div>
              <h3 class="text-lg font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">Who, Which, and That</h3>
              <p class="text-slate-400 text-sm flex-grow leading-relaxed">Learn to use relative pronouns correctly for people and things.</p>
            </a>

            <a href="lesson.html?id=grammar-relative-whose-where-when" class="group bg-slate-900/80 backdrop-blur border border-slate-800 rounded-2xl p-6 hover:bg-slate-800 transition-all hover:border-emerald-500/50 flex flex-col h-full relative overflow-hidden shadow-lg shadow-black/20">
              <div class="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-md bg-slate-800/80 border border-slate-700 text-slate-300 text-[10px] font-mono tracking-widest mb-4 self-start">LESSON 3</div>
              <h3 class="text-lg font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">Whose, Where, and When</h3>
              <p class="text-slate-400 text-sm flex-grow leading-relaxed">Use relative pronouns for possession, places, and times.</p>
            </a>
            
            <a href="lesson.html?id=grammar-defining-non-defining-relative-clauses" class="group bg-slate-900/80 backdrop-blur border border-slate-800 rounded-2xl p-6 hover:bg-slate-800 transition-all hover:border-emerald-500/50 flex flex-col h-full relative overflow-hidden shadow-lg shadow-black/20">
              <div class="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-md bg-slate-800/80 border border-slate-700 text-slate-300 text-[10px] font-mono tracking-widest mb-4 self-start">LESSON 4</div>
              <h3 class="text-lg font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">Defining vs Non-Defining</h3>
              <p class="text-slate-400 text-sm flex-grow leading-relaxed">Understand when information is essential and when to use commas.</p>
            </a>
          </div>
        </div>

        <!-- Group 4: Adverb Clauses -->
        <div class="relative">
          <div class="absolute -left-4 sm:-left-8 top-0 bottom-0 w-px bg-slate-800 hidden sm:block"></div>
          <div class="absolute -left-[37px] top-2 w-5 h-5 rounded-full border-4 border-slate-950 bg-emerald-500 hidden sm:block shadow-[0_0_10px_rgba(16,185,129,0.4)]"></div>
          
          <div class="mb-8">
            <h2 class="text-2xl font-display font-bold text-white mb-2">4. Adverb Clauses</h2>
            <p class="text-slate-400">Understand how to express time, reason, contrast, and condition with adverb clauses.</p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <a href="lesson.html?id=grammar-adverb-clauses-overview" class="group bg-slate-900/80 backdrop-blur border border-slate-800 rounded-2xl p-6 hover:bg-slate-800 transition-all hover:border-emerald-500/50 flex flex-col h-full relative overflow-hidden shadow-lg shadow-black/20">
              <div class="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-md bg-slate-800/80 border border-slate-700 text-slate-300 text-[10px] font-mono tracking-widest mb-4 self-start">LESSON 1</div>
              <h3 class="text-lg font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">What Are Adverb Clauses?</h3>
              <p class="text-slate-400 text-sm flex-grow leading-relaxed">Learn how clauses can give extra information like adverbs.</p>
            </a>
            
            <a href="lesson.html?id=grammar-adverb-clauses-time-reason" class="group bg-slate-900/80 backdrop-blur border border-slate-800 rounded-2xl p-6 hover:bg-slate-800 transition-all hover:border-emerald-500/50 flex flex-col h-full relative overflow-hidden shadow-lg shadow-black/20">
              <div class="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-md bg-slate-800/80 border border-slate-700 text-slate-300 text-[10px] font-mono tracking-widest mb-4 self-start">LESSON 2</div>
              <h3 class="text-lg font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">Time and Reason</h3>
              <p class="text-slate-400 text-sm flex-grow leading-relaxed">Express when and why things happen using adverb clauses.</p>
            </a>

            <a href="lesson.html?id=grammar-adverb-clauses-contrast-condition" class="group bg-slate-900/80 backdrop-blur border border-slate-800 rounded-2xl p-6 hover:bg-slate-800 transition-all hover:border-emerald-500/50 flex flex-col h-full relative overflow-hidden shadow-lg shadow-black/20">
              <div class="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-md bg-slate-800/80 border border-slate-700 text-slate-300 text-[10px] font-mono tracking-widest mb-4 self-start">LESSON 3</div>
              <h3 class="text-lg font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">Contrast and Condition</h3>
              <p class="text-slate-400 text-sm flex-grow leading-relaxed">Use clauses to show contrast (although) and conditions (if, unless).</p>
            </a>
            
            <a href="lesson.html?id=grammar-common-clause-mistakes" class="group bg-slate-900/80 backdrop-blur border border-slate-800 rounded-2xl p-6 hover:bg-slate-800 transition-all hover:border-emerald-500/50 flex flex-col h-full relative overflow-hidden shadow-lg shadow-black/20">
              <div class="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-md bg-slate-800/80 border border-slate-700 text-slate-300 text-[10px] font-mono tracking-widest mb-4 self-start">LESSON 4</div>
              <h3 class="text-lg font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">Common Clause Mistakes</h3>
              <p class="text-slate-400 text-sm flex-grow leading-relaxed">Review and fix the most common errors with clauses.</p>
            </a>
          </div>
        </div>

      </div>
`;

html = html.replace(/<div class="space-y-16">[\s\S]*?<\/div>\s*<\/div>\s*<\/section>/, newSections + '\n    </div>\n  </section>');

fs.writeFileSync('clauses.html', html);
console.log('Created clauses.html successfully.');
