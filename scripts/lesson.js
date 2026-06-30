import { lessons } from "../data/lessons.js";

document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const lessonId = urlParams.get("id");

  const lesson = lessons.find((l) => l.id === lessonId);

  if (!lesson) {
    document.getElementById("lesson-content").innerHTML = `
      <div class="p-12 text-center">
        <h2 class="text-2xl font-bold text-white mb-2">Lesson not found</h2>
        <p class="text-slate-400 mb-6">The lesson you are looking for does not exist or has been moved.</p>
        <a href="./index.html" class="bg-rose-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-rose-500 transition-colors inline-block border border-rose-500 shadow-[0_0_15px_rgba(225,29,72,0.3)]">Return Home</a>
      </div>
    `;
    return;
  }

  const backButton = document.getElementById("back-button");
  if (backButton) {
    backButton.href = lesson.backHref || "./index.html";
    backButton.title = lesson.backLabel || "Back";
    const backLabelEl = document.getElementById("back-label");
    if (backLabelEl) {
      backLabelEl.textContent = lesson.backLabel || "Back";
    }
  }

  document.title = `${lesson.title} | Lesson Control`;

  // Update Header Meta
  document.getElementById("lesson-meta-header").innerHTML = `
    ${lesson.skill ? `<span class="bg-blue-500/20 text-blue-400 border border-blue-500/30 text-[10px] font-mono px-2 py-0.5 rounded uppercase tracking-wider">${lesson.skill}</span>` : ""}
    ${lesson.level ? `<span class="bg-slate-800 text-slate-400 border border-slate-700 text-[10px] font-mono px-2 py-0.5 rounded uppercase tracking-wider">${lesson.level}</span>` : ""}
  `;

  // Build Lesson Content
  let html = `
    <div class="p-8 sm:p-12 border-b border-slate-800 bg-transparent">
      <h1 class="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">${lesson.title}</h1>
      <p class="text-lg sm:text-xl text-slate-400 leading-relaxed">${lesson.description}</p>
    </div>

    <div class="p-8 sm:p-12 space-y-14 bg-transparent">
      <!-- Introduction -->
      ${
        lesson.introduction
          ? `
      <section>
        <h3 class="text-xs font-mono text-slate-500 uppercase tracking-widest mb-5 flex items-center gap-2">
          <svg class="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.514M9 11l-4 4"></path></svg>
          Warm Introduction
        </h3>
        <p class="text-lg text-slate-300 leading-relaxed">
          ${lesson.introduction}
        </p>
      </section>
      `
          : ""
      }

      <!-- Meaning -->
      ${
        lesson.meaning
          ? `
      <section>
        <h3 class="text-xs font-mono text-slate-500 uppercase tracking-widest mb-5 flex items-center gap-2">
          <svg class="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          Core Meaning
        </h3>
        <p class="text-lg text-slate-300 leading-relaxed">
          ${lesson.meaning}
        </p>
      </section>
      `
          : ""
      }

      <!-- Learning Goals -->
      ${
        lesson.learningGoals && lesson.learningGoals.length > 0
          ? `
      <section>
        <h3 class="text-xs font-mono text-slate-500 uppercase tracking-widest mb-5 flex items-center gap-2">
          <svg class="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
          Learning Goals
        </h3>
        <ul class="space-y-4">
          ${lesson.learningGoals
            .map(
              (goal) => `
            <li class="flex items-start gap-3 text-slate-300 bg-slate-800/50 p-4 rounded-xl border border-slate-700/50 shadow-sm">
              <div class="bg-emerald-500/20 text-emerald-400 rounded-full p-1 mt-0.5 flex-shrink-0 border border-emerald-500/30">
                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <span class="font-medium">${goal}</span>
            </li>
          `,
            )
            .join("")}
        </ul>
      </section>
      `
          : ""
      }

      <!-- Uses -->
      ${
        lesson.uses && lesson.uses.length > 0
          ? `
      <section>
        <h3 class="text-xs font-mono text-slate-500 uppercase tracking-widest mb-5 flex items-center gap-2">
          <svg class="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
          When to Use
        </h3>
        <ul class="list-disc pl-5 space-y-3 text-slate-300 text-base marker:text-slate-500">
          ${lesson.uses.map((use) => `<li>${use}</li>`).join("")}
        </ul>
      </section>
      `
          : ""
      }

      <!-- Patterns -->
      ${
        lesson.patterns && lesson.patterns.length > 0
          ? `
      <section>
        <h3 class="text-xs font-mono text-slate-500 uppercase tracking-widest mb-5 flex items-center gap-2">
          <svg class="w-4 h-4 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
          Structure & Patterns
        </h3>
        <div class="space-y-3">
          ${lesson.patterns
            .map((pattern) => {
              if (typeof pattern === "string") {
                return `
                <div class="bg-slate-800/80 border border-slate-700/80 rounded-lg p-4 shadow-sm font-mono text-sm text-indigo-300">
                  ${pattern}
                </div>
              `;
              }
              return `
              <div class="bg-slate-800/80 border border-slate-700/80 rounded-lg p-4 shadow-sm">
                ${pattern.name ? `<div class="font-bold text-indigo-400 mb-1">${pattern.name}</div>` : ""}
                ${pattern.formula ? `<div class="font-mono text-sm text-indigo-300 mb-2">${pattern.formula}</div>` : ""}
                ${pattern.explanation ? `<div class="text-slate-400 text-sm">${pattern.explanation}</div>` : ""}
              </div>
            `;
            })
            .join("")}
        </div>
      </section>
      `
          : ""
      }

      <!-- Time Signals -->
      ${
        lesson.timeSignals && lesson.timeSignals.length > 0
          ? `
      <section>
        <h3 class="text-xs font-mono text-slate-500 uppercase tracking-widest mb-5 flex items-center gap-2">
          <svg class="w-4 h-4 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          Time Signals
        </h3>
        <div class="flex flex-wrap gap-2">
          ${lesson.timeSignals
            .map(
              (signal) => `
            <span class="bg-slate-800/80 border border-slate-700 text-slate-300 px-3 py-1.5 rounded-lg text-sm shadow-sm">${signal}</span>
          `,
            )
            .join("")}
        </div>
      </section>
      `
          : ""
      }

      <!-- Explanation / Step by Step -->
      ${
        lesson.stepByStep || lesson.explanation
          ? `
      <section>
        <h3 class="text-xs font-mono text-slate-500 uppercase tracking-widest mb-5 flex items-center gap-2">
          <svg class="w-4 h-4 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path></svg>
          Step-by-Step Explanation
        </h3>
        <div class="prose prose-invert prose-slate prose-lg max-w-none text-slate-300 leading-relaxed">
          ${lesson.stepByStep || lesson.explanation}
        </div>
      </section>
      `
          : ""
      }

      <!-- Examples -->
      ${
        lesson.examples && lesson.examples.length > 0
          ? `
      <section>
        <h3 class="text-xs font-mono text-slate-500 uppercase tracking-widest mb-5 flex items-center gap-2">
          <svg class="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
          Examples
        </h3>
        <div class="space-y-4">
          ${lesson.examples
            .map((ex) => {
              if (typeof ex === "string") {
                return `
                <div class="bg-slate-800/80 border border-slate-700/80 rounded-xl p-6 shadow-sm hover:border-purple-500/50 transition-colors">
                  <div class="text-xl font-medium text-white mb-3 tracking-tight">"${ex}"</div>
                </div>
              `;
              }
              return `
            <div class="bg-slate-800/80 border border-slate-700/80 rounded-xl p-6 shadow-sm hover:border-purple-500/50 transition-colors">
              ${ex.type ? `<div class="text-[10px] font-mono font-bold text-purple-300 mb-3 uppercase tracking-wider bg-purple-500/20 border border-purple-500/30 inline-block px-2 py-0.5 rounded">${ex.type}</div>` : ""}
              ${ex.sentence ? `<div class="text-xl font-medium text-white mb-3 tracking-tight">"${ex.sentence}"</div>` : ""}
              ${
                ex.note
                  ? `
              <div class="text-sm text-slate-400 flex items-start gap-2">
                <svg class="w-4 h-4 mt-0.5 text-slate-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                ${ex.note}
              </div>`
                  : ""
              }
            </div>
            `;
            })
            .join("")}
        </div>
      </section>
      `
          : ""
      }

      <!-- Common Mistakes -->
      ${
        lesson.commonMistakes && lesson.commonMistakes.length > 0
          ? `
      <section>
        <h3 class="text-xs font-mono text-slate-500 uppercase tracking-widest mb-5 flex items-center gap-2">
          <svg class="w-4 h-4 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
          Common Mistakes
        </h3>
        <ul class="space-y-4">
          ${lesson.commonMistakes
            .map((mistake) => {
              if (typeof mistake === "string") {
                return `
              <li class="flex items-start gap-4 bg-rose-500/10 text-rose-200 p-5 rounded-xl border border-rose-500/20 text-base shadow-sm">
                <div class="bg-rose-500/20 text-rose-400 rounded-full p-1 mt-0.5 flex-shrink-0 border border-rose-500/30">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                </div>
                <span class="leading-relaxed">${mistake}</span>
              </li>
              `;
              }
              return `
            <li class="bg-slate-800/80 rounded-xl border border-slate-700/80 p-6 shadow-sm">
              <div class="mb-3">
                <span class="inline-block bg-rose-500/20 text-rose-400 font-mono text-xs uppercase px-2 py-1 rounded border border-rose-500/30 mb-2">Wrong</span>
                <p class="text-rose-200 line-through text-lg">"${mistake.wrong}"</p>
              </div>
              <div class="mb-4">
                <span class="inline-block bg-emerald-500/20 text-emerald-400 font-mono text-xs uppercase px-2 py-1 rounded border border-emerald-500/30 mb-2">Correct</span>
                <p class="text-emerald-200 text-lg">"${mistake.correct}"</p>
              </div>
              <div class="text-slate-300 text-sm leading-relaxed mb-2">
                <strong class="text-slate-400">Why it's wrong:</strong> ${mistake.explanation}
              </div>
              ${
                mistake.fix
                  ? `
              <div class="text-slate-300 text-sm leading-relaxed">
                <strong class="text-slate-400">How to fix it:</strong> ${mistake.fix}
              </div>
              `
                  : ""
              }
            </li>
            `;
            })
            .join("")}
        </ul>
      </section>
      `
          : ""
      }

      <!-- Indonesian Learner Warning -->
      ${
        lesson.indonesianLearnerWarning
          ? `
      <section>
        <div class="bg-orange-500/10 border-l-4 border-orange-500 p-5 rounded-r-xl shadow-sm">
          <h3 class="text-xs font-bold text-orange-400 uppercase tracking-widest mb-2 flex items-center gap-2">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
            Indonesian Learner Warning
          </h3>
          <p class="text-orange-200/90 text-sm leading-relaxed">${lesson.indonesianLearnerWarning}</p>
        </div>
      </section>
      `
          : ""
      }
      
      <!-- Quick Comparison -->
      ${
        lesson.quickComparison
          ? `
      <section>
        <h3 class="text-xs font-mono text-slate-500 uppercase tracking-widest mb-5 flex items-center gap-2">
          <svg class="w-4 h-4 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path></svg>
          Quick Comparison
        </h3>
        <div class="bg-slate-800/80 border-l-4 border-pink-500 p-5 rounded-r-xl shadow-sm">
          <p class="text-slate-300 leading-relaxed">${lesson.quickComparison}</p>
        </div>
      </section>
      `
          : ""
      }

      <!-- Practice Prompts -->
      ${
        lesson.practicePrompts && lesson.practicePrompts.length > 0
          ? `
      <section>
        <h3 class="text-xs font-mono text-slate-500 uppercase tracking-widest mb-5 flex items-center gap-2">
          <svg class="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
          Practice Ideas
        </h3>
        <div class="bg-amber-500/10 border border-amber-500/20 rounded-xl p-6 shadow-sm">
          <ul class="list-disc pl-5 space-y-3 text-amber-200 text-base marker:text-amber-500/50">
            ${lesson.practicePrompts.map((prompt) => `<li>${prompt}</li>`).join("")}
          </ul>
        </div>
      </section>
      `
          : ""
      }
      
      <!-- Classroom Use -->
      ${
        lesson.classroomUse
          ? `
      <section>
        <h3 class="text-xs font-mono text-slate-500 uppercase tracking-widest mb-5 flex items-center gap-2">
          <svg class="w-4 h-4 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
          Classroom Activity Idea
        </h3>
        <div class="bg-teal-500/10 border border-teal-500/20 rounded-xl p-5 shadow-sm text-teal-200 leading-relaxed">
          ${lesson.classroomUse}
        </div>
      </section>
      `
          : ""
      }

      <!-- Summary -->
      ${
        lesson.summary && lesson.summary.length > 0
          ? `
      <section>
        <div class="bg-rose-500/10 border border-rose-500/20 rounded-2xl p-6 sm:p-8 shadow-sm">
          <h3 class="text-sm font-bold text-rose-400 uppercase tracking-widest mb-4 flex items-center gap-2">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            Remember
          </h3>
          <ul class="space-y-3">
            ${lesson.summary
              .map(
                (point) => `
              <li class="flex items-start gap-3 text-slate-300">
                <span class="text-rose-500 font-bold mt-0.5">•</span>
                <span class="leading-relaxed">${point}</span>
              </li>
            `,
              )
              .join("")}
          </ul>
        </div>
      </section>
      `
          : ""
      }
      
      <!-- Related Links -->
      ${
        lesson.relatedLinks && lesson.relatedLinks.length > 0
          ? `
      <section class="pt-8 border-t border-slate-800/80">
        <h3 class="text-xs font-mono text-slate-500 uppercase tracking-widest mb-5 flex items-center gap-2">
          <svg class="w-4 h-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>
          Related Resources
        </h3>
        <div class="flex flex-wrap gap-3">
          ${lesson.relatedLinks
            .map(
              (link) => `
            <a href="${link.url}" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 text-sm font-medium text-slate-300 bg-slate-800/80 border border-slate-700/80 hover:border-rose-500/50 hover:text-white px-5 py-2.5 rounded-lg transition-all shadow-sm">
              ${link.text}
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
            </a>
          `,
            )
            .join("")}
        </div>
      </section>
      `
          : ""
      }
    </div>
  `;

  document.getElementById("lesson-content").innerHTML = html;
});
