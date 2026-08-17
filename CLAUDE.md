# The Morphism — Design Skill (Claude Code)

**The Morphism** is an agent-agnostic aesthetic design skill. Apply it to all UI design work in this project.

## Source of truth

Read `skills/the-morphism/SKILL.md`. It contains eight exact styles with CSS recipes and Tailwind v4 equivalents (Glassmorphism, Futurism, Neubrutalism, Brutalism, Minimalism, Maximalism, Swiss Design, Bauhaus), named anti-patterns, a motion system, and a typographic scale with two font tracks. Reference material lives in `skills/the-morphism/references/`.

To install this as a Claude Agent Skill instead of a project rule:

```bash
npx the-morphism init --agent claude
```

(installs to `.claude/skills/the-morphism/`)

## Non-negotiable

- One style per page. Never mix.
- Zero em-dashes anywhere visible to the user. Zero emoji as icons.
- The recipes are exact. The rules are opinionated. The bans are named.
