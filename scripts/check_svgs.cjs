const fs = require('fs');

function checkSVGs(filename) {
  const content = fs.readFileSync(filename, 'utf8');
  const lines = content.split('\n');
  lines.forEach((line, i) => {
    if (line.includes('<svg') && !line.includes('width=')) {
      console.log(`Missing width in ${filename}:${i+1}: ${line.trim()}`);
    }
  });
}

checkSVGs('index.html');
checkSVGs('grammar.html');
