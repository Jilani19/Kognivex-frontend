const fs = require('fs');
const path = require('path');

const extensions = [
  '.js',
  '.jsx',
  '.ts',
  '.tsx',
  '.json',
  '.css',
  '.scss',
  '.html',
  '.md',
  '.yml',
  '.yaml'
];

function resolveConflicts(content) {
  const regex =
    /<<<<<<< HEAD\r?\n([\s\S]*?)=======\r?\n([\s\S]*?)>>>>>>> .*?\r?\n/g;

  return content.replace(regex, (_, headContent) => {
    return headContent.trim() + '\n';
  });
}

function resolveConflictsInDir(dir) {
  const files = fs.readdirSync(dir);

  for (const file of files) {
    const fullPath = path.join(dir, file);

    // Skip node_modules and .git
    if (
      fullPath.includes('node_modules') ||
      fullPath.includes('.git')
    ) {
      continue;
    }

    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      resolveConflictsInDir(fullPath);
    } else if (
      stat.isFile() &&
      extensions.includes(path.extname(fullPath))
    ) {
      let content = fs.readFileSync(fullPath, 'utf8');

      if (
        content.includes('<<<<<<< HEAD') &&
        content.includes('=======') &&
        content.includes('>>>>>>>')
      ) {
        const newContent = resolveConflicts(content);

        if (content !== newContent) {
          fs.writeFileSync(fullPath, newContent, 'utf8');
          console.log(`Resolved conflicts in: ${fullPath}`);
        }
      }
    }
  }
}

resolveConflictsInDir(__dirname);

console.log('Done resolving conflicts.');
