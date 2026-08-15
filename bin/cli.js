#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { printBanner } = require('./banner');

const USAGE = `
the-morphism — Anti-slop morphism & aesthetic design skill for Hermes Agent

Usage:
  npx the-morphism init                  Install SKILL.md + references + .txt template (full)
  npx the-morphism init --core           Install only SKILL.md (no refs, no templates)
  npx the-morphism init --templates-only Install only plain-text prompt template (.txt)

Files are copied to:
  skills/the-morphism/SKILL.md           The core skill (--core or default)
  skills/the-morphism/references/        Framework-specific examples (default only)
  templates/the-morphism.txt             Plain .txt prompt for non-Hermes users

Aesthetic styles covered (one per page — never mix):
  • Glassmorphism — frosted glass, blur, translucent overlays
  • Neubrutalism — hard shadows, thick borders, flat color
  • Swiss Design — flat, neutral, typographic, grid
  • Bauhaus — flat, geometric, primary colors, bold type
  • Futurism — mono, phosphor glow, terminal, near-black
  • Minimalism — serif display, ink-only, underlined controls
`;

function copyDirRecursive(src, dest) {
  if (!fs.existsSync(dest)) fs.mkdirSync(dest, { recursive: true });

  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDirRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function init(flags) {
  printBanner();
  const cwd = process.cwd();
  const pkgRoot = path.resolve(__dirname, '..');
  const skillsSrc = path.join(pkgRoot, 'skills', 'the-morphism');
  const templatesSrc = path.join(pkgRoot, 'templates');

  let copiedSkills = 0;
  let copiedTemplates = 0;

  if (!flags.templatesOnly) {
    const skillsDest = path.join(cwd, 'skills', 'the-morphism');
    console.log(`\nCopying skills → ${path.relative(cwd, skillsDest)}/`);

    if (!fs.existsSync(skillsSrc)) {
      console.error(`  ✗ Source directory not found: ${skillsSrc}`);
      process.exit(1);
    }

    if (flags.core) {
      // --core: only copy SKILL.md, skip references/
      const srcFile = path.join(skillsSrc, 'SKILL.md');
      const destFile = path.join(skillsDest, 'SKILL.md');
      if (!fs.existsSync(destFile.substring(0, destFile.lastIndexOf(path.sep)))) {
        fs.mkdirSync(destFile.substring(0, destFile.lastIndexOf(path.sep)), { recursive: true });
      }
      fs.copyFileSync(srcFile, destFile);
      copiedSkills++;
      console.log(`  ✓ SKILL.md (core only — no reference files)`);
    } else {
      // default: copy everything (SKILL.md + references/)
      copyDirRecursive(skillsSrc, skillsDest);
      copiedSkills++;

      const copied = fs.readdirSync(skillsDest, { recursive: true, withFileTypes: false });
      for (const f of copied) {
        console.log(`  ✓ the-morphism/${f}`);
      }
    }
  }

  if (!flags.core) {
    const templatesDest = path.join(cwd, 'templates');
    console.log(`\nCopying templates → ${path.relative(cwd, templatesDest)}/`);

    if (!fs.existsSync(templatesSrc)) {
      console.log('  (no templates directory — --templates-only will be empty)');
    } else {
      let found = false;
      for (const entry of fs.readdirSync(templatesSrc)) {
        if (!entry.endsWith('.txt')) continue;
        const src = path.join(templatesSrc, entry);
        const dest = path.join(templatesDest, entry);

        if (!fs.existsSync(templatesDest)) {
          fs.mkdirSync(templatesDest, { recursive: true });
        }

        fs.copyFileSync(src, dest);
        copiedTemplates++;
        found = true;
        console.log(`  ✓ ${entry}`);
      }
      if (!found) console.log('  (no .txt templates found)');
    }
  }

  console.log(`\nDone. ${copiedSkills} skill, ${copiedTemplates} template(s) installed.`);

  if (copiedSkills > 0) {
    console.log('\nHermes users: the-morphism skill is ready. Run `hermes` and it will auto-load from skills/the-morphism/.');
    console.log('Tip: trigger it by describing the aesthetic you want (e.g. "frosted glass landing page", "translucent nav bar", "neubrutalist portfolio", "blocky hard-shadow startup page").');
  }
  if (copiedTemplates > 0) {
    console.log('Non-Hermes users: paste the .txt contents into your system prompt or project rules.');
  }

  console.log('');
}

const args = process.argv.slice(2);
const command = args[0];

if (!command || command === '--help' || command === '-h') {
  printBanner();
  console.log(USAGE);
  process.exit(0);
}

if (command === 'init') {
  const flags = {
    core: args.includes('--core'),
    templatesOnly: args.includes('--templates-only'),
  };
  init(flags);
  process.exit(0);
}

console.error(`Unknown command: ${command}\n`);
printBanner();
console.log(USAGE);
process.exit(1);
