const fs = require('fs');

const newGroups = `        <!-- Group 1: Passive Voice Foundations -->
        <div class="mb-16">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4 border-b border-slate-800/80 pb-4">
            <div>
              <div class="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-mono tracking-widest mb-2 uppercase">Active Group</div>
              <h2 class="text-2xl font-bold text-white tracking-tight">Passive Voice Foundations</h2>
              <p class="text-slate-400 text-sm mt-1">Understand the core structure, transformation, and when to use the by-agent.</p>
            </div>
          </div>
          
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <a href="lesson.html?id=grammar-passive-voice-overview" class="group bg-slate-900/80 backdrop-blur border border-slate-800 rounded-2xl p-6 hover:bg-slate-800 transition-all hover:border-emerald-500/50 flex flex-col h-full relative overflow-hidden shadow-lg shadow-black/20">
              <h3 class="text-lg font-bold text-white mb-2 relative z-10 group-hover:text-emerald-400 transition-colors">What Is Passive Voice?</h3>
              <p class="text-slate-400 text-sm flex-grow relative z-10 leading-relaxed mb-6">Understand how passive voice changes the focus of a sentence.</p>
              <div class="text-emerald-400 font-mono text-[10px] flex items-center uppercase tracking-widest mt-auto">
                View Lesson <svg class="w-3 h-3 ml-1.5 group-hover:translate-x-1 transition-transform" width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7-7m7-7H3"></path></svg>
              </div>
            </a>
            <a href="lesson.html?id=grammar-active-vs-passive-voice" class="group bg-slate-900/80 backdrop-blur border border-slate-800 rounded-2xl p-6 hover:bg-slate-800 transition-all hover:border-emerald-500/50 flex flex-col h-full relative overflow-hidden shadow-lg shadow-black/20">
              <h3 class="text-lg font-bold text-white mb-2 relative z-10 group-hover:text-emerald-400 transition-colors">Active Voice vs Passive Voice</h3>
              <p class="text-slate-400 text-sm flex-grow relative z-10 leading-relaxed mb-6">Compare active and passive sentences and know when to use each.</p>
              <div class="text-emerald-400 font-mono text-[10px] flex items-center uppercase tracking-widest mt-auto">
                View Lesson <svg class="w-3 h-3 ml-1.5 group-hover:translate-x-1 transition-transform" width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7-7m7-7H3"></path></svg>
              </div>
            </a>
            <a href="lesson.html?id=grammar-object-to-subject-passive" class="group bg-slate-900/80 backdrop-blur border border-slate-800 rounded-2xl p-6 hover:bg-slate-800 transition-all hover:border-emerald-500/50 flex flex-col h-full relative overflow-hidden shadow-lg shadow-black/20">
              <h3 class="text-lg font-bold text-white mb-2 relative z-10 group-hover:text-emerald-400 transition-colors">Object to Subject Transformation</h3>
              <p class="text-slate-400 text-sm flex-grow relative z-10 leading-relaxed mb-6">Learn the steps to transform an active sentence into a passive one.</p>
              <div class="text-emerald-400 font-mono text-[10px] flex items-center uppercase tracking-widest mt-auto">
                View Lesson <svg class="w-3 h-3 ml-1.5 group-hover:translate-x-1 transition-transform" width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7-7m7-7H3"></path></svg>
              </div>
            </a>
            <a href="lesson.html?id=grammar-by-agent-passive" class="group bg-slate-900/80 backdrop-blur border border-slate-800 rounded-2xl p-6 hover:bg-slate-800 transition-all hover:border-emerald-500/50 flex flex-col h-full relative overflow-hidden shadow-lg shadow-black/20">
              <h3 class="text-lg font-bold text-white mb-2 relative z-10 group-hover:text-emerald-400 transition-colors">By-Agent and When to Omit It</h3>
              <p class="text-slate-400 text-sm flex-grow relative z-10 leading-relaxed mb-6">Understand when to include the doer and when to omit it.</p>
              <div class="text-emerald-400 font-mono text-[10px] flex items-center uppercase tracking-widest mt-auto">
                View Lesson <svg class="w-3 h-3 ml-1.5 group-hover:translate-x-1 transition-transform" width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7-7m7-7H3"></path></svg>
              </div>
            </a>
          </div>
        </div>

        <!-- Group 2: Passive Voice Across Tenses -->
        <div class="mb-16">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4 border-b border-slate-800/80 pb-4">
            <div>
              <div class="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-mono tracking-widest mb-2 uppercase">Active Group</div>
              <h2 class="text-2xl font-bold text-white tracking-tight">Passive Voice Across Tenses</h2>
              <p class="text-slate-400 text-sm mt-1">Master passive voice in present, past, perfect, and future tenses.</p>
            </div>
          </div>
          
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <a href="lesson.html?id=grammar-present-simple-passive" class="group bg-slate-900/80 backdrop-blur border border-slate-800 rounded-2xl p-6 hover:bg-slate-800 transition-all hover:border-emerald-500/50 flex flex-col h-full relative overflow-hidden shadow-lg shadow-black/20">
              <h3 class="text-lg font-bold text-white mb-2 relative z-10 group-hover:text-emerald-400 transition-colors">Present Simple Passive</h3>
              <p class="text-slate-400 text-sm flex-grow relative z-10 leading-relaxed mb-6">Use passive voice for general facts, routines, systems, and rules.</p>
              <div class="text-emerald-400 font-mono text-[10px] flex items-center uppercase tracking-widest mt-auto">
                View Lesson <svg class="w-3 h-3 ml-1.5 group-hover:translate-x-1 transition-transform" width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7-7m7-7H3"></path></svg>
              </div>
            </a>
            <a href="lesson.html?id=grammar-past-simple-passive" class="group bg-slate-900/80 backdrop-blur border border-slate-800 rounded-2xl p-6 hover:bg-slate-800 transition-all hover:border-emerald-500/50 flex flex-col h-full relative overflow-hidden shadow-lg shadow-black/20">
              <h3 class="text-lg font-bold text-white mb-2 relative z-10 group-hover:text-emerald-400 transition-colors">Past Simple Passive</h3>
              <p class="text-slate-400 text-sm flex-grow relative z-10 leading-relaxed mb-6">Use passive voice for completed past actions focusing on the result.</p>
              <div class="text-emerald-400 font-mono text-[10px] flex items-center uppercase tracking-widest mt-auto">
                View Lesson <svg class="w-3 h-3 ml-1.5 group-hover:translate-x-1 transition-transform" width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7-7m7-7H3"></path></svg>
              </div>
            </a>
            <a href="lesson.html?id=grammar-present-perfect-passive" class="group bg-slate-900/80 backdrop-blur border border-slate-800 rounded-2xl p-6 hover:bg-slate-800 transition-all hover:border-emerald-500/50 flex flex-col h-full relative overflow-hidden shadow-lg shadow-black/20">
              <h3 class="text-lg font-bold text-white mb-2 relative z-10 group-hover:text-emerald-400 transition-colors">Present Perfect Passive</h3>
              <p class="text-slate-400 text-sm flex-grow relative z-10 leading-relaxed mb-6">Connect a completed action to the present result using passive voice.</p>
              <div class="text-emerald-400 font-mono text-[10px] flex items-center uppercase tracking-widest mt-auto">
                View Lesson <svg class="w-3 h-3 ml-1.5 group-hover:translate-x-1 transition-transform" width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7-7m7-7H3"></path></svg>
              </div>
            </a>
            <a href="lesson.html?id=grammar-future-passive" class="group bg-slate-900/80 backdrop-blur border border-slate-800 rounded-2xl p-6 hover:bg-slate-800 transition-all hover:border-emerald-500/50 flex flex-col h-full relative overflow-hidden shadow-lg shadow-black/20">
              <h3 class="text-lg font-bold text-white mb-2 relative z-10 group-hover:text-emerald-400 transition-colors">Future Passive</h3>
              <p class="text-slate-400 text-sm flex-grow relative z-10 leading-relaxed mb-6">Talk about actions that will happen to the subject in the future.</p>
              <div class="text-emerald-400 font-mono text-[10px] flex items-center uppercase tracking-widest mt-auto">
                View Lesson <svg class="w-3 h-3 ml-1.5 group-hover:translate-x-1 transition-transform" width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7-7m7-7H3"></path></svg>
              </div>
            </a>
          </div>
        </div>

        <!-- Group 3: Passive Meaning and Common Uses -->
        <div class="mb-16">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4 border-b border-slate-800/80 pb-4">
            <div>
              <div class="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-mono tracking-widest mb-2 uppercase">Active Group</div>
              <h2 class="text-2xl font-bold text-white tracking-tight">Passive Meaning and Common Uses</h2>
              <p class="text-slate-400 text-sm mt-1">Discover common real-world scenarios for using passive voice effectively.</p>
            </div>
          </div>
          
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <a href="lesson.html?id=grammar-passive-for-processes" class="group bg-slate-900/80 backdrop-blur border border-slate-800 rounded-2xl p-6 hover:bg-slate-800 transition-all hover:border-emerald-500/50 flex flex-col h-full relative overflow-hidden shadow-lg shadow-black/20">
              <h3 class="text-lg font-bold text-white mb-2 relative z-10 group-hover:text-emerald-400 transition-colors">Passive for Processes</h3>
              <p class="text-slate-400 text-sm flex-grow relative z-10 leading-relaxed mb-6">Explain steps in a process where the action matters more than the doer.</p>
              <div class="text-emerald-400 font-mono text-[10px] flex items-center uppercase tracking-widest mt-auto">
                View Lesson <svg class="w-3 h-3 ml-1.5 group-hover:translate-x-1 transition-transform" width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7-7m7-7H3"></path></svg>
              </div>
            </a>
            <a href="lesson.html?id=grammar-passive-for-news-reports" class="group bg-slate-900/80 backdrop-blur border border-slate-800 rounded-2xl p-6 hover:bg-slate-800 transition-all hover:border-emerald-500/50 flex flex-col h-full relative overflow-hidden shadow-lg shadow-black/20">
              <h3 class="text-lg font-bold text-white mb-2 relative z-10 group-hover:text-emerald-400 transition-colors">Passive for News and Reports</h3>
              <p class="text-slate-400 text-sm flex-grow relative z-10 leading-relaxed mb-6">Understand why passive voice is common in news reporting.</p>
              <div class="text-emerald-400 font-mono text-[10px] flex items-center uppercase tracking-widest mt-auto">
                View Lesson <svg class="w-3 h-3 ml-1.5 group-hover:translate-x-1 transition-transform" width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7-7m7-7H3"></path></svg>
              </div>
            </a>
            <a href="lesson.html?id=grammar-passive-for-formal-instructions" class="group bg-slate-900/80 backdrop-blur border border-slate-800 rounded-2xl p-6 hover:bg-slate-800 transition-all hover:border-emerald-500/50 flex flex-col h-full relative overflow-hidden shadow-lg shadow-black/20">
              <h3 class="text-lg font-bold text-white mb-2 relative z-10 group-hover:text-emerald-400 transition-colors">Passive for Formal Instructions</h3>
              <p class="text-slate-400 text-sm flex-grow relative z-10 leading-relaxed mb-6">Use passive voice to make instructions sound formal and official.</p>
              <div class="text-emerald-400 font-mono text-[10px] flex items-center uppercase tracking-widest mt-auto">
                View Lesson <svg class="w-3 h-3 ml-1.5 group-hover:translate-x-1 transition-transform" width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7-7m7-7H3"></path></svg>
              </div>
            </a>
            <a href="lesson.html?id=grammar-passive-unknown-unimportant-doer" class="group bg-slate-900/80 backdrop-blur border border-slate-800 rounded-2xl p-6 hover:bg-slate-800 transition-all hover:border-emerald-500/50 flex flex-col h-full relative overflow-hidden shadow-lg shadow-black/20">
              <h3 class="text-lg font-bold text-white mb-2 relative z-10 group-hover:text-emerald-400 transition-colors">Unknown or Unimportant Doers</h3>
              <p class="text-slate-400 text-sm flex-grow relative z-10 leading-relaxed mb-6">Learn how to express ideas when you don't know who did the action.</p>
              <div class="text-emerald-400 font-mono text-[10px] flex items-center uppercase tracking-widest mt-auto">
                View Lesson <svg class="w-3 h-3 ml-1.5 group-hover:translate-x-1 transition-transform" width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7-7m7-7H3"></path></svg>
              </div>
            </a>
          </div>
        </div>

        <!-- Group 4: Advanced Passive Structures and Mistakes -->
        <div class="mb-16">
          <div class="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4 border-b border-slate-800/80 pb-4">
            <div>
              <div class="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-mono tracking-widest mb-2 uppercase">Active Group</div>
              <h2 class="text-2xl font-bold text-white tracking-tight">Advanced Passive Structures and Mistakes</h2>
              <p class="text-slate-400 text-sm mt-1">Master modal passive, get passive, and learn to avoid common errors.</p>
            </div>
          </div>
          
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <a href="lesson.html?id=grammar-modal-passive" class="group bg-slate-900/80 backdrop-blur border border-slate-800 rounded-2xl p-6 hover:bg-slate-800 transition-all hover:border-emerald-500/50 flex flex-col h-full relative overflow-hidden shadow-lg shadow-black/20">
              <h3 class="text-lg font-bold text-white mb-2 relative z-10 group-hover:text-emerald-400 transition-colors">Modal Passive</h3>
              <p class="text-slate-400 text-sm flex-grow relative z-10 leading-relaxed mb-6">Combine modal verbs with passive voice for richer meanings.</p>
              <div class="text-emerald-400 font-mono text-[10px] flex items-center uppercase tracking-widest mt-auto">
                View Lesson <svg class="w-3 h-3 ml-1.5 group-hover:translate-x-1 transition-transform" width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7-7m7-7H3"></path></svg>
              </div>
            </a>
            <a href="lesson.html?id=grammar-passive-with-two-objects" class="group bg-slate-900/80 backdrop-blur border border-slate-800 rounded-2xl p-6 hover:bg-slate-800 transition-all hover:border-emerald-500/50 flex flex-col h-full relative overflow-hidden shadow-lg shadow-black/20">
              <h3 class="text-lg font-bold text-white mb-2 relative z-10 group-hover:text-emerald-400 transition-colors">Passive with Two Objects</h3>
              <p class="text-slate-400 text-sm flex-grow relative z-10 leading-relaxed mb-6">Learn how to make sentences passive when the verb has two objects.</p>
              <div class="text-emerald-400 font-mono text-[10px] flex items-center uppercase tracking-widest mt-auto">
                View Lesson <svg class="w-3 h-3 ml-1.5 group-hover:translate-x-1 transition-transform" width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7-7m7-7H3"></path></svg>
              </div>
            </a>
            <a href="lesson.html?id=grammar-get-passive" class="group bg-slate-900/80 backdrop-blur border border-slate-800 rounded-2xl p-6 hover:bg-slate-800 transition-all hover:border-emerald-500/50 flex flex-col h-full relative overflow-hidden shadow-lg shadow-black/20">
              <h3 class="text-lg font-bold text-white mb-2 relative z-10 group-hover:text-emerald-400 transition-colors">Get Passive</h3>
              <p class="text-slate-400 text-sm flex-grow relative z-10 leading-relaxed mb-6">Explore a more informal and conversational way to form the passive voice.</p>
              <div class="text-emerald-400 font-mono text-[10px] flex items-center uppercase tracking-widest mt-auto">
                View Lesson <svg class="w-3 h-3 ml-1.5 group-hover:translate-x-1 transition-transform" width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7-7m7-7H3"></path></svg>
              </div>
            </a>
            <a href="lesson.html?id=grammar-common-passive-voice-mistakes" class="group bg-slate-900/80 backdrop-blur border border-slate-800 rounded-2xl p-6 hover:bg-slate-800 transition-all hover:border-emerald-500/50 flex flex-col h-full relative overflow-hidden shadow-lg shadow-black/20">
              <h3 class="text-lg font-bold text-white mb-2 relative z-10 group-hover:text-emerald-400 transition-colors">Common Passive Voice Mistakes</h3>
              <p class="text-slate-400 text-sm flex-grow relative z-10 leading-relaxed mb-6">Repair common errors and solidify your understanding of passive voice.</p>
              <div class="text-emerald-400 font-mono text-[10px] flex items-center uppercase tracking-widest mt-auto">
                View Lesson <svg class="w-3 h-3 ml-1.5 group-hover:translate-x-1 transition-transform" width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7-7m7-7H3"></path></svg>
              </div>
            </a>
          </div>
        </div>`;

let html = fs.readFileSync('passive-voice.html', 'utf8');

// Replace the groups content
const startString = '        <!-- Group 1: Conditional Foundations -->';
const endString = '      </div>\n    </section>';
const startIndex = html.indexOf(startString);
const endIndex = html.indexOf(endString, startIndex);

if (startIndex !== -1 && endIndex !== -1) {
  html = html.substring(0, startIndex) + newGroups + '\\n' + html.substring(endIndex);
  fs.writeFileSync('passive-voice.html', html, 'utf8');
  console.log('Successfully updated groups in passive-voice.html');
} else {
  console.error('Could not find boundaries for groups.');
}
