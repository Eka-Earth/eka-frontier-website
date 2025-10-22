# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the Eka Frontier company website - a single-page application showcasing Eka Frontier's venture architecture and engineering services focused on building digital infrastructure for regenerative and resilient futures.

**Stack:** Svelte 5 + Vite + TypeScript + Tailwind CSS 4
**Type:** Static single-page application with client-side routing
**Package Manager:** pnpm
**Development Environment:** Nix flake available

## Development Setup

### Using Nix (Recommended)

```bash
# If you have direnv installed
direnv allow

# Or enter the flake manually
nix develop
```

The flake provides Node.js 22, pnpm, TypeScript, and git.

### Manual Setup

```bash
# Install dependencies
pnpm install
```

## Development Commands

```bash
# Start development server with hot module replacement
pnpm dev

# Run type checking
pnpm check

# Build for production (includes type checking)
pnpm build

# Preview production build locally
pnpm preview

# Run ESLint to check code quality
pnpm lint

# Auto-fix ESLint errors
pnpm lint:fix

# Check code formatting with Prettier
pnpm format

# Auto-format code with Prettier
pnpm format:fix
```

## Code Quality

The project uses ESLint and Prettier to maintain code quality and consistency:

**ESLint Configuration** (`eslint.config.ts`):

- TypeScript-ESLint for TypeScript linting
- `eslint-plugin-svelte` for Svelte-specific rules
- Configured following official `eslint-plugin-svelte` recommendations
- Uses flat config with `typescript-eslint` and `projectService` for enhanced TypeScript support

**Prettier Configuration** (`prettier.config.ts`):

- Single quotes, no semicolons, ES5 trailing commas
- 100 character print width, 2-space indentation
- `prettier-plugin-svelte` for Svelte formatting
- Integrated with ESLint via `eslint-config-prettier` to prevent conflicts

**Icon Components**:

- Uses `heroicons-svelte` for all icons (imported from `heroicons-svelte/24/outline`)
- Icons are type-safe Svelte components, not raw SVG strings
- Avoids `{@html}` usage for security and maintainability

**Best Practices**:

- All `{#each}` blocks must have unique keys for proper Svelte reactivity
- Use proper icon components instead of `{@html}` for SVG injection
- Run `pnpm lint` and `pnpm format` before committing changes

## Architecture

### Component Structure

The application uses a single-page architecture with all content sections loaded at once:

- **App.svelte** - Root component that manages view state (`home` vs `privacy`) and handles client-side routing via hash navigation
- **main.js** - Application entry point that mounts the Svelte app to `#app` element
- **Navigation.svelte** - Fixed navigation with hamburger menu, smooth scroll to sections, handles logo color changes on scroll

### Page Sections (in order)

Components are rendered in this specific sequence in App.svelte:

1. **Hero** - Landing section with main value proposition
2. **OurEdge** - Six capability cards showcasing expertise
3. **CoreServices** - Two main service areas (BUILD, GROW & SCALE)
4. **ThematicFocus** - Four thematic focus areas with expandable content
5. **Engagement** - Three engagement models/pathways
6. **Contact** - CTA section with email contact button
7. **Footer** - Configurable footer with navigation links, social media, and copyright

### Routing & Navigation

- **Client-side routing:** Uses hash-based routing (`#privacy-policy`) and custom events
- **Section navigation:** Smooth scroll to section IDs via `scrollToSection()` function
- **Custom events:**
  - `navigate-privacy` - Navigate to privacy policy view
  - `navigate-home` - Navigate back to home view
- **Section IDs:** `our-edge`, `services`, `themes`, `engagement`, `contact`

### Styling System

**Tailwind CSS 4** with custom theme configuration in `src/app.css`:

**Custom Colors (Eka brand palette):**

- Primary: `eka-primary` (#1b4332), `eka-primary-dark` (#081c15), `eka-primary-light` (#2d6a4f)
- Sage: `eka-sage` (#b8c7c0), `eka-sage-muted` (#768e84)
- Accent: `eka-accent` (#2190cc)
- Deep: `eka-deep` (#002430), `eka-navy` (#001829)
- Neutrals: `eka-black`, `eka-gray`, `eka-light`, `eka-white`, `eka-mint`

**Typography:**

- Primary font: `Inter` (via Google Fonts)
- Condensed font: `Roboto Condensed` (via Google Fonts)
- Font families: `font-sans`, `font-condensed`

**Custom utility classes:**

- `.gradient-text` - Green gradient text effect
- `.section-padding` - Responsive horizontal padding (1.5rem → 3rem → 5rem)
- `.container-width` - Max-width container (80rem)

**Animations:**

- `animate-fade-in` - Fade in over 0.8s
- `animate-slide-up` - Slide up from below over 0.6s

### Content Management

**WEBSITE_COPY.md** contains all website copy and content structure. This is the single source of truth for:

- All section text content
- Navigation labels and structure
- Button CTAs
- Messaging themes and tone
- Recent content updates and implementation notes

When updating website content, always reference WEBSITE_COPY.md first to ensure consistency with the approved copy and messaging strategy.

### Configuration Management

**Environment Variables** (`.env` file):

The application uses Vite's environment variable system for configuration. All environment variables must be prefixed with `VITE_` to be exposed to the client:

- `VITE_CONTACT_EMAIL` - Contact email address (default: `contact@ekafrontier.io`)
- `VITE_LINKEDIN_URL` - LinkedIn company URL (default: `https://linkedin.com/company/ekafrontier`)
- `VITE_COMPANY_NAME` - Company name for copyright (default: `Eka Frontier`)

**Site Configuration** (`src/config/site.ts`):

Centralized configuration that reads from environment variables with fallback defaults. This is the single source of truth for site-wide configuration used throughout the application.

**Component Configuration:**

- **Contact Component**: Accepts `email`, `headline`, `description`, and `ctaText` as props, configured from `siteConfig` in `App.svelte`
- **Footer Component**: Highly configurable with:
  - `navigationLinks` - Array of navigation links with optional section IDs or custom onClick handlers
  - `socialLinks` - Array of social media links with icon components
  - `email` - Contact email for footer display
  - `copyright` - Copyright text (supports dynamic year)

## Key Implementation Patterns

### Navigation State Management

Navigation logo changes color based on scroll position and menu state:

- Transparent background → White/95 backdrop blur on scroll
- White logo when not scrolled → Color logo when scrolled or menu open

### Body Scroll Lock

Mobile menu prevents body scrolling when open:

```javascript
document.body.style.overflow = 'hidden' // Menu open
document.body.style.overflow = 'auto' // Menu closed
```

### Cross-View Navigation

When navigating to a section from the privacy policy page, the app:

1. Dispatches `navigate-home` event
2. Waits 100ms for view transition
3. Scrolls to target section

## Public Assets

- **Logos:** `/public/logos/color-logo.svg` and `/public/logos/white-logo.svg`
- Logos are used contextually based on navigation state

## TypeScript Configuration

The project is fully typed with TypeScript:

- **Config files:** `vite.config.ts`, `svelte.config.ts`, `src/main.ts`
- **All Svelte components** use `<script lang="ts">` with proper type annotations
- **Type checking:** Automated via `svelte-check` before build
- **tsconfig.json:** Extends `@tsconfig/svelte` with strict checking enabled

### Type Checking

Type checking runs automatically during build. To run manually:

```bash
pnpm check
```

## Tailwind CSS 4 Configuration

Tailwind CSS 4 uses the **@tailwindcss/vite plugin** (not PostCSS):

- **Configuration:** All styling configuration is in `src/app.css` using `@theme` blocks
- **No PostCSS config:** The `@tailwindcss/vite` plugin is used directly in `vite.config.ts`
- **Import:** Use `@import "tailwindcss";` in CSS files (not `@tailwind` directives)

## Development Guidelines

When making modifications to the repository, such as implementing new features or migrations, you should favour making **CHANGES** to existing files, such that there is a **CLEAR** history showing the migration of the repository from one state to the next. This does **NOT** preclude creating new files, but there **MUST** be a clear, clean, logical progression between states, and this is then to be committed to git using semantic git commits. You must **NOT** add references to Claude / Claude Code to git commits or add extraneous claude code co-authors to git commits.
