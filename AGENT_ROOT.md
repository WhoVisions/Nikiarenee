# Root rules

## Core Principles

All agent roles must follow these fundamental rules:

### 1. Types first

All new source files are TypeScript. No loose `any` unless justified with a comment explaining why.

### 2. Single responsibility

Each component or module has one clear job. If it grows too big, split it.

### 3. No silent design changes

UI and UX changes must be described in the pull request and previewed with screenshots.

### 4. Keep pages thin

Most logic belongs in `lib` or custom hooks, not in route files.

### 5. Respect Nikia brand

Palette, tone of copy, and layout should feel like high end cosplay and gaming, not generic SaaS.

## Brand Colors

- Pink: `#ff4eb8`
- Pink Dark: `#d51f8b`
- Teal: `#35f0e4`
- Background: `#050513`

## Typography

- Display font: system-ui fallback
- Body font: system-ui fallback

## Component Guidelines

- Use Tailwind utility classes plus shared tokens
- Prefer shadcn primitives through wrappers
- Test at 375px (mobile) and 1280px (desktop) widths
- All new components should be mobile-first

## Environment Variables

Never hardcode links or sensitive data. Always use `lib/env.ts` to access environment variables.

## Testing Requirements

- Write tests for new features
- Ensure `pnpm lint`, `pnpm check`, and `pnpm test` pass before committing
- Build must complete without errors
