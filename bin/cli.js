#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { printBanner } = require('./banner');

const USAGE = `
the-morphism — Anti-slop morphism & aesthetic design skill for AI coding agents

Usage:
  npx the-morphism init                  Install SKILL.md + references + .txt template (full)
  npx the-morphism init --core           Install only SKILL.md (no refs, no templates)
  npx the-morphism init --templates-only Install only plain-text prompt template (.txt)
  npx the-morphism init --agent <name>   Also install agent entry files (auto|all|claude|codex|cursor|cline)

Agent entry files (--agent):
  auto (default)  Detect from the project: .cursor/ → cursor, .clinerules/ → cline,
                  .claude/ or CLAUDE.md → claude, else AGENTS.md (universal)
  all             Install every entry file below
  codex           AGENTS.md — universal entry (Codex, Cursor, Claude Code)
  claude          CLAUDE.md + .claude/skills/the-morphism/ (Claude Agent Skill)
  cursor          .cursor/rules/the-morphism.mdc
  cline           .clinerules/the-morphism.md

Files are copied to:
  skills/the-morphism/SKILL.md           The core skill (--core or default)
  skills/the-morphism/references/        Framework-specific examples (default only)
  templates/the-morphism.txt             Plain .txt prompt for any agent
  AGENTS.md                              Universal entry (default --agent)
  CLAUDE.md / .cursor/rules/ / .clinerules/  Agent entry files (--agent claude|cursor|cline|all)

Aesthetic styles covered (one per page — never mix):
  Morph Design: Glassmorphism, Futurism, Neubrutalism, Brutalism, Minimalism, Maximalism
  Non-Morph: Swiss Design, Bauhaus
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

function detectAgent(cwd) {
  if (fs.existsSync(path.join(cwd, '.cursor'))) return 'cursor';
  if (fs.existsSync(path.join(cwd, '.clinerules'))) return 'cline';
  if (fs.existsSync(path.join(cwd, '.claude')) || fs.existsSync(path.join(cwd, 'CLAUDE.md'))) return 'claude';
  return 'codex';
}

function installAgentFiles(agent, cwd, pkgRoot) {
  const copy = (src, dest) => {
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.copyFileSync(src, dest);
    console.log(`  ✓ ${path.relative(cwd, dest)}`);
  };

  if (agent === 'codex' || agent === 'all') {
    copy(path.join(pkgRoot, 'templates', 'AGENTS.md'), path.join(cwd, 'AGENTS.md'));
  }
  if (agent === 'claude' || agent === 'all') {
    copy(path.join(pkgRoot, 'CLAUDE.md'), path.join(cwd, 'CLAUDE.md'));
    copyDirRecursive(
      path.join(pkgRoot, 'skills', 'the-morphism'),
      path.join(cwd, '.claude', 'skills', 'the-morphism')
    );
    console.log('  ✓ .claude/skills/the-morphism/ (Claude Agent Skill)');
  }
  if (agent === 'cursor' || agent === 'all') {
    copy(
      path.join(pkgRoot, 'templates', 'cursor-the-morphism.mdc'),
      path.join(cwd, '.cursor', 'rules', 'the-morphism.mdc')
    );
  }
  if (agent === 'cline' || agent === 'all') {
    copy(
      path.join(pkgRoot, 'templates', 'clinerules-the-morphism.md'),
      path.join(cwd, '.clinerules', 'the-morphism.md')
    );
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

  if (!flags.templatesOnly && !flags.core) {
    const agent = flags.agent === 'auto' ? detectAgent(cwd) : flags.agent;
    console.log(`\nInstalling agent entry files (--agent ${agent}) →`);
    installAgentFiles(agent, cwd, pkgRoot);
  }

  console.log(`\nDone. ${copiedSkills} skill, ${copiedTemplates} template(s) installed.`);

  if (copiedSkills > 0) {
    console.log('\nThe Morphism is installed. Hermes auto-loads skills/the-morphism/; Claude Code, Codex, Cursor, and Cline read the entry files. Re-run with --agent all to add more.');
    console.log('Tip: trigger it by describing the aesthetic you want (e.g. "frosted glass landing page", "neubrutalist portfolio", "brutalist gallery", "maximalist fashion editorial").');
  }
  if (copiedTemplates > 0) {
    console.log('Any agent: paste the .txt contents into your system prompt or project rules.');
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
  const agentIdx = args.indexOf('--agent');
  const agent = agentIdx !== -1 ? (args[agentIdx + 1] || 'auto') : 'auto';
  const flags = {
    core: args.includes('--core'),
    templatesOnly: args.includes('--templates-only'),
    agent,
  };
  init(flags);
  process.exit(0);
}

console.error(`Unknown command: ${command}\n`);
printBanner();
console.log(USAGE);
process.exit(1);
