const fs = require('fs');
const path = require('path');

const dir = '.';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

const fallbackStyle = `
    body {
      margin: 0;
      min-height: 100vh;
      background: #020617;
      color: #e5e7eb;
      font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    }
    a {
      color: inherit;
      text-decoration: none;
    }
    img, svg {
      max-width: 100%;
    }
    .brand-logo svg, .logo-mark svg, .module-icon svg, .card-icon svg {
      width: 28px;
      height: 28px;
      display: block;
      flex-shrink: 0;
    }
`;

for (const file of files) {
  let content = fs.readFileSync(path.join(dir, file), 'utf8');

  // Fix absolute CSS paths
  content = content.replace(/href="\/src\/index\.css"/g, 'href="./src/index.css"');
  
  // Replace fallback style
  // If we already inserted a fallback style, remove it and re-insert the better one
  content = content.replace(/body\s*\{\s*margin:\s*0;\s*min-height:\s*100vh;\s*background:\s*#020617;[\s\S]*?flex-shrink:\s*0;\s*\}/, '');
  content = content.replace('</style>', fallbackStyle + '\n  </style>');

  // Make sure Tailwind CDN is in head
  if (!content.includes('cdn.tailwindcss.com')) {
    content = content.replace('</head>', '  <script src="https://cdn.tailwindcss.com"></script>\n</head>');
  }

  // Find all svg elements and make sure they have a width and height if they have standard tailwind classes
  const svgMatch = /<svg\s+([^>]*)>/g;
  content = content.replace(svgMatch, (match, attrs) => {
    let w = null, h = null;
    if (attrs.includes('w-6') && attrs.includes('h-6')) { w = 24; h = 24; }
    else if (attrs.includes('w-8') && attrs.includes('h-8')) { w = 32; h = 32; }
    else if (attrs.includes('w-5') && attrs.includes('h-5')) { w = 20; h = 20; }
    else if (attrs.includes('w-4') && attrs.includes('h-4')) { w = 16; h = 16; }
    else if (attrs.includes('w-12') && attrs.includes('h-12')) { w = 48; h = 48; }
    else if (attrs.includes('w-3 ') || attrs.includes('w-3"')) { w = 12; h = 12; }
    else if (attrs.includes('w-3.5') && attrs.includes('h-3.5')) { w = 14; h = 14; }

    if (w && h) {
      if (!attrs.includes('width=')) attrs += ` width="${w}"`;
      if (!attrs.includes('height=')) attrs += ` height="${h}"`;
    }
    // Also if the exact 'fill' or 'viewBox' is present but no width/height, we can just ensure it doesn't scale unbounded if it's a book icon or similar
    
    return `<svg ${attrs}>`;
  });

  // Make sure to remove duplicate width/height if we ran this multiple times
  content = content.replace(/(width="\d+"\s+height="\d+")\s+width="\d+"\s+height="\d+"/g, '$1');

  fs.writeFileSync(path.join(dir, file), content, 'utf8');
}
console.log('Fixed HTML files');
