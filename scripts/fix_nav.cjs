const fs = require('fs');
const path = require('path');

const dir = '.';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.html'));

for (const file of files) {
  let content = fs.readFileSync(path.join(dir, file), 'utf8');

  // Fix remaining absolute hrefs in nav
  content = content.replace(/href="\/([a-zA-Z0-9-]+\.html)"/g, 'href="./$1"');

  fs.writeFileSync(path.join(dir, file), content, 'utf8');
}
console.log('Fixed absolute nav links');
