const fs = require('fs');
const path = require('path');

const dir = '.';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

const fallbackStyle = `    body {
      margin: 0;
      min-height: 100vh;
      background: #020617;
      color: #e5e7eb;
      font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    }
    img, svg {
      max-width: 100%;
    }
    .brand-logo svg, .logo-mark svg, .module-icon svg, .card-icon svg {
      width: 28px;
      height: 28px;
      display: block;
      flex-shrink: 0;
    }`;

for (const file of files) {
  let content = fs.readFileSync(path.join(dir, file), 'utf8');

  // Fix absolute CSS paths
  content = content.replace(/href="\/src\/index\.css"/g, 'href="./src/index.css"');
  // Fix other absolute paths like /index.html and /grammar.html
  content = content.replace(/href="\/index\.html"/g, 'href="./index.html"');
  content = content.replace(/href="\/grammar\.html"/g, 'href="./grammar.html"');
  content = content.replace(/href="\/prepositions\.html"/g, 'href="./prepositions.html"');

  // Add Tailwind CDN if not present
  if (!content.includes('cdn.tailwindcss.com')) {
    content = content.replace('</head>', '  <script src="https://cdn.tailwindcss.com"></script>\n</head>');
  }

  // Add fallback CSS if not present
  if (!content.includes('background: #020617;')) {
    content = content.replace('</style>', fallbackStyle + '\n  </style>');
  }

  // Add explicit width/height to svg icons
  // Specifically the book icon: <svg class="w-6 h-6 text-rose-500" ...>
  // Add width="24" height="24" to it if it doesn't have it
  content = content.replace(/<svg\s+class="([^"]*w-6 h-6[^"]*)"\s+fill/g, '<svg class="$1" width="24" height="24" fill');
  content = content.replace(/<svg\s+class="([^"]*w-8 h-8[^"]*)"\s+fill/g, '<svg class="$1" width="32" height="32" fill');
  content = content.replace(/<svg\s+class="([^"]*w-5 h-5[^"]*)"\s+fill/g, '<svg class="$1" width="20" height="20" fill');
  content = content.replace(/<svg\s+class="([^"]*w-4 h-4[^"]*)"\s+fill/g, '<svg class="$1" width="16" height="16" fill');
  content = content.replace(/<svg\s+class="([^"]*w-12 h-12[^"]*)"\s+fill/g, '<svg class="$1" width="48" height="48" fill');
  content = content.replace(/<svg\s+class="([^"]*w-3 h-3[^"]*)"\s+fill/g, '<svg class="$1" width="12" height="12" fill');
  content = content.replace(/<svg\s+class="([^"]*w-3\.5 h-3\.5[^"]*)"\s+fill/g, '<svg class="$1" width="14" height="14" fill');

  // Also catch icons where the exact string 'w-6 h-6' might not be the exact match, but it's safe enough if we match what's there.
  // We can just rely on the fallback CSS for `.brand-logo svg` etc.

  fs.writeFileSync(path.join(dir, file), content, 'utf8');
}
console.log('Fixed HTML files');
