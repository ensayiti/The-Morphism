#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const USAGE = `
the-morphism — Anti-slop morphism & aesthetic design skills for Hermes Agent

Usage:
  npx the-morphism init                  Install the-morphism SKILL.md + references into your project
  npx the-morphism init --templates-only Install only plain-text prompt template (.txt)

Files are copied to:
  skills/the-morphism/         Hermes-compatible SKILL.md + references/
  templates/the-morphism.txt   Plain .txt prompt for non-Hermes users

Aesthetic styles covered (one per page — never mix):
  • Glassmorphism — frosted glass, blur, translucent overlays
  • Neumorphism — soft extruded 3D, light/shadow embossing
  • Claymorphism — chunky, pillowy, playful 3D
  • Minimalism — clean, restrained, high contrast
  • Maximalism — dense, loud, layered, expressive
  • Brutalism — raw, mechanical, unapologetic
  • Skeuomorphism — realistic textures, physical metaphors
  • Liquid Glass — Apple Vision Pro-style spatial material
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

    copyDirRecursive(skillsSrc, skillsDest);
    copiedSkills++;

    // Count what was copied
    const copied = fs.readdirSync(skillsDest, { recursive: true, withFileTypes: false });
    for (const f of copied) {
      console.log(`  ✓ the-morphism/${f}`);
    }
  }

  if (!flags.skillsOnly) {
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
    console.log('Tip: trigger it by describing the aesthetic you want (e.g. "frosted glass landing page", "soft 3D dashboard", "brutalist portfolio").');
  }
  if (copiedTemplates > 0) {
    console.log('Non-Hermes users: paste the .txt contents into your system prompt or project rules.');
  }

  console.log('');
}

const args = process.argv.slice(2);
const command = args[0];

if (!command || command === '--help' || command === '-h') {
  console.log(USAGE);
  process.exit(0);
}

if (command === 'init') {
  const flags = {
    skillsOnly: args.includes('--skills-only'),
    templatesOnly: args.includes('--templates-only'),
  };
  init(flags);
  process.exit(0);
}

console.error(`Unknown command: ${command}\n`);
console.log(USAGE);
process.exit(1);
