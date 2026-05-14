const fs = require('fs');
const path = require('path');

function cleanConflicts(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');

  if (!content.includes('<<<<<<<')) return;

  const lines = content.split('\n');
  const cleaned = [];

  let skip = false;

  for (let line of lines) {
    if (line.startsWith('<<<<<<<')) {
      skip = true;
      continue;
    }

    if (line.startsWith('=======')) {
      continue;
    }

    if (line.startsWith('>>>>>>>')) {
      skip = false;
      continue;
    }

    if (!skip) {
      cleaned.push(line);
    }
  }

  fs.writeFileSync(filePath, cleaned.join('\n'), 'utf8');
  console.log('Fixed:', filePath);
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);

    if (fullPath.includes('node_modules') || fullPath.includes('.git')) {
      continue;
    }

    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      walkDir(fullPath);
    } else {
      const ext = path.extname(fullPath);
      const allowed = [
        '.js', '.jsx', '.ts', '.tsx',
        '.css', '.scss', '.json',
        '.html', '.md', '.yml', '.yaml'
      ];

      if (allowed.includes(ext)) {
        cleanConflicts(fullPath);
      }
    }
  }
}

// Run from project root
walkDir(process.cwd());

console.log('✅ All merge conflicts removed');
