# Stacked Diffs Workflow

## Overview

Large work is sliced into small branches. No giant all-in-one feature branches.

## Naming Scheme

Use this pattern:

- `feat/base-setup` - Core setup and configuration
- `feat/layout-shell` - Layout components
- `feat/sfw-home` - SFW home page
- `feat/adult-gate` - Adult content gate
- `feat/gallery-grid` - Gallery implementation
- `feat/schedule-sync` - Schedule page
- `chore/ci-pipeline` - CI/CD setup
- `fix/layout-bug-hero-padding` - Bug fixes

## Initial Launch Stack

### 1. feat/base-setup

- Node, Next, TypeScript, tailwind, shadcn, lint, test
- Basic folder structure
- Config files (tsconfig, tailwind, postcss)
- Environment variables setup

### 2. feat/layout-shell

- SFW and adult layouts
- Main navigation component
- Footer component

### 3. feat/sfw-home

- Home hero section
- Primary call to Twitch and Instagram
- Desktop and mobile responsive

### 4. feat/adult-gate

- Age gate interaction
- 18+ funnel
- Environment-based links

### 5. feat/gallery-grid

- SFW cosplay gallery
- Image cards with tags
- Filter functionality

### 6. feat/schedule-page

- Static Twitch schedule
- Content pulled from `lib/content/schedule.ts`

### 7. feat/link-hub

- Simple links backup page
- All platform links in one place

### 8. chore/ci-pipeline

- GitHub Actions for lint, check, test, build
- Quality gates enforcement

## Git Commands for Stacking

### Creating Base Branch

```bash
# base
git checkout -b feat/base-setup
# work then commit
git add .
git commit -m "feat: base Next stack for Nikia HQ"
git push -u origin feat/base-setup
```

### Stacking Next Branch

```bash
# stack 2
git checkout -b feat/layout-shell
# work then commit
git add .
git commit -m "feat: shared layout shell and nav"
git push -u origin feat/layout-shell
```

### Rebasing After Changes

```bash
# rebase parent branch
git checkout feat/base-setup
git pull --rebase origin main
git push -f origin feat/base-setup

# rebase stacked branch
git checkout feat/layout-shell
git rebase feat/base-setup
git push -f origin feat/layout-shell
```

## Important Rules

- Agents must rebase feature branches on their parent branch, not merge them
- Keep diffs small and focused (under 500 lines ideally)
- Each branch should be independently reviewable
- Test quality gates on each branch before pushing
- Document dependencies between branches clearly
