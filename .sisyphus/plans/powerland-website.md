# PowerLand Website Plan

## TL;DR

> **Quick Summary**: Create a bilingual (English/Arabic) landing page for PowerLand (Solar & Electrical) using the Cruip "Simple Light" Next.js template. Features dark mode, RTL support, and sections for projects, services, and partners.
> 
> **Deliverables**:
> - Fully functional Next.js project with i18n and Dark Mode.
> - Home page with Hero, Services, Partners, and Contact sections.
> - English and Arabic content (AI-generated).
> - Placeholder/Downloaded images for industry topics.
> 
> **Estimated Effort**: Medium (due to i18n structural changes).
> **Parallel Execution**: YES - 3 waves.
> **Critical Path**: Init → Config/Structure → Components → Content.

---

## Context

### Original Request
Create a landing page for "PowerLand" covering specific electrical/solar topics and partnerships (Bedford, Entes). Use `cruip/tailwind-landing-page-template` with Arabic/English support and Dark/Light mode.

### Interview Summary
**Key Decisions**:
- **Stack**: Next.js (App Router) + Tailwind CSS v4.
- **I18n**: `next-intl` with middleware (standard deployment).
- **Theme**: Electrical (Blue/Yellow/Grey) + Dark Mode support.
- **Content**: AI-generated based on provided topics.
- **Images**: Best-effort download or placeholders.

### Metis Review
**Identified Gaps** (addressed):
- **Config Migration**: Must convert `next.config.js` to TS/ESM for `next-intl` plugin.
- **Provider Nesting**: Explicit order (Theme -> Intl) defined.
- **RTL Strategy**: Use `gap-*` instead of `space-x-*` for layout safety.
- **Hydration**: Added guards for theme toggles.

---

## Work Objectives

### Core Objective
Launch a professional, bilingual landing page for PowerLand that showcases their electrical and solar services.

### Concrete Deliverables
- `app/[locale]/page.tsx`: Main landing page.
- `components/`: Updated UI components (RTL-ready).
- `messages/en.json` & `messages/ar.json`: Translation files.
- `public/images/`: Industry-relevant images.

### Definition of Done
- [ ] Site builds successfully (`npm run build`).
- [ ] Language toggles between English (LTR) and Arabic (RTL) correctly.
- [ ] Dark mode works with persistent preference.
- [ ] All specified services and partners are visible.

### Must Have
- **RTL Support**: Correct text alignment and layout mirroring.
- **Dark Mode**: Fully styled dark theme for all components.
- **Mobile Responsiveness**: Works on all devices.

### Must NOT Have (Guardrails)
- **Backend**: No database or API routes (Contact form is UI-only).
- **Complex Animations**: Keep it simple and fast.
- **`space-x-*`**: Avoid in favor of `gap-*` for RTL.

---

## Verification Strategy

> **UNIVERSAL RULE: ZERO HUMAN INTERVENTION**
> ALL tasks in this plan MUST be verifiable WITHOUT any human action.

### Test Decision
- **Infrastructure exists**: NO (Template usually lacks extensive tests).
- **Automated tests**: NO (Focus on visual/functional QA via Playwright).
- **Agent-Executed QA**: ALWAYS.

### Agent-Executed QA Scenarios (MANDATORY)

**Frontend/UI (Playwright)**:
- Verify Language Switching: Click "Arabic" -> `html[dir="rtl"]` -> Text changes.
- Verify Dark Mode: Click "Dark" -> `html.dark` class present -> Background color changes.
- Verify Content: "Bedford" and "Entes" logos/text present.

---

## Execution Strategy

### Parallel Execution Waves

```
Wave 1 (Setup & Config):
├── Task 1: Project Init & Cleanup
└── Task 2: Config Migration & Installation

Wave 2 (Structure & Assets):
├── Task 3: I18n Structure & Middleware
├── Task 4: Dark Mode & Theme Setup
└── Task 5: Image Sourcing

Wave 3 (Components & Content):
├── Task 6: Header & Footer (w/ Toggles)
├── Task 7: Landing Page Sections
└── Task 8: Content & Translation
```

### Agent Dispatch Summary

| Wave | Tasks | Recommended Agents |
|------|-------|-------------------|
| 1 | 1, 2 | `quick` (Git/Config) |
| 2 | 3, 4, 5 | `visual-engineering` (Structure), `explore` (Images) |
| 3 | 6, 7, 8 | `visual-engineering` (UI/Content) |

---

## TODOs

- [ ] 1. Project Initialization & Cleanup

  **What to do**:
  - Clone `cruip/tailwind-landing-page-template` to current directory.
  - Remove default demo content (features, testimonials) to prepare for PowerLand content.
  - Ensure `package.json` is clean and install standard deps.

  **Recommended Agent Profile**:
  - **Category**: `quick`
  - **Skills**: [`git-master`, `bash`]

  **Parallelization**:
  - **Can Run In Parallel**: NO (Must be first)
  - **Blocks**: All subsequent tasks

  **Acceptance Criteria**:
  - [ ] Git repo initialized.
  - [ ] `npm install` succeeds.
  - [ ] Project runs (`npm run dev` starts).
  - [ ] Directory structure matches Next.js App Router.

  **Agent-Executed QA Scenarios**:
  ```
  Scenario: Project installs and runs
    Tool: interactive_bash (tmux)
    Preconditions: None
    Steps:
      1. tmux new-session: npm run dev
      2. Wait for: "Ready" or "started server" (timeout: 30s)
      3. Assert: Output contains "http://localhost:3000"
      4. Send keys: "Ctrl+C"
    Expected Result: Server starts without crashing.
    Evidence: Terminal output.
  ```

- [ ] 2. Configuration & Dependencies

  **What to do**:
  - Install `next-intl`, `next-themes`, `lucide-react`, `clsx`, `tailwind-merge`.
  - **Rename** `next.config.js` to `next.config.mjs` (or `.ts`) and wrap with `createNextIntlPlugin`.
  - Ensure `tailwind.config.js` (or v4 CSS) is set up for `darkMode: 'class'` (if v3) or `@custom-variant` (if v4).

  **Recommended Agent Profile**:
  - **Category**: `quick`
  - **Skills**: [`bash`]

  **Parallelization**:
  - **Can Run In Parallel**: YES (with Task 1 if sequenced properly, but safer after)
  - **Blocks**: Task 3, 4

  **References**:
  - `next-intl` docs: Plugin setup.
  - `next-themes` docs: Provider setup.

  **Acceptance Criteria**:
  - [ ] `next.config.mjs` exists and exports config wrapped in `withNextIntl`.
  - [ ] Dependencies listed in `package.json`.

  **Agent-Executed QA Scenarios**:
  ```
  Scenario: Build config is valid
    Tool: Bash
    Steps:
      1. npm run build
    Expected Result: Build starts (might fail on missing files, but config should load).
    Evidence: Build log.
  ```

- [ ] 3. I18n Structure & Middleware

  **What to do**:
  - Create `src/i18n.ts` (request config).
  - Create `src/middleware.ts` (locale matching).
  - Move `app/page.tsx`, `app/layout.tsx` to `app/[locale]/`.
  - Create `messages/en.json` and `messages/ar.json` with initial keys.
  - Update `layout.tsx` to use `NextIntlClientProvider`.

  **Recommended Agent Profile**:
  - **Category**: `visual-engineering`
  - **Skills**: [`frontend-ui-ux`]

  **Parallelization**:
  - **Can Run In Parallel**: YES (Wave 2)
  - **Blocks**: Task 6, 7

  **Acceptance Criteria**:
  - [ ] `app/[locale]` structure exists.
  - [ ] Middleware redirects root `/` to `/en` or `/ar`.
  - [ ] `html` tag has correct `lang` and `dir` attributes.

  **Agent-Executed QA Scenarios**:
  ```
  Scenario: Middleware redirects to locale
    Tool: Bash (curl)
    Steps:
      1. curl -I http://localhost:3000/
      2. Assert: Location header contains "/en"
    Expected Result: 307 Redirect.
  ```

- [ ] 4. Dark Mode & Theme Setup

  **What to do**:
  - Update `app/css/style.css`: Add `@custom-variant dark ...` (if v4) or check `tailwind.config`.
  - Wrap `children` in `app/[locale]/layout.tsx` with `<ThemeProvider attribute="class" defaultTheme="system" enableSystem>`.
  - Define semantic colors in CSS (e.g., `--background`, `--foreground`) for light/dark.

  **Recommended Agent Profile**:
  - **Category**: `visual-engineering`
  - **Skills**: [`frontend-ui-ux`]

  **Parallelization**:
  - **Can Run In Parallel**: YES (Wave 2)
  - **Blocks**: Task 6, 7

  **Acceptance Criteria**:
  - [ ] ThemeProvider is the outermost provider in body.
  - [ ] CSS variables for colors are defined.

- [ ] 5. Image Sourcing

  **What to do**:
  - Create `public/images/`.
  - Use `curl` to download generic placeholders or open-license images for:
    - Solar Panels (Hero)
    - Industrial Automation (VFD/Services)
    - Weighing/Spare Parts (Generic)
  - Find/Download logos for "Bedford" and "Entes" (or create text-based SVG placeholders if not found).

  **Recommended Agent Profile**:
  - **Category**: `unspecified-low`
  - **Skills**: [`dev-browser`, `bash`]

  **Parallelization**:
  - **Can Run In Parallel**: YES (Wave 2)
  - **Blocks**: Task 7

  **Acceptance Criteria**:
  - [ ] Images exist in `public/images/`.
  - [ ] Files are valid images (checked via `file` command).

- [ ] 6. Header & Footer (Navigation)

  **What to do**:
  - Create `components/ui/ThemeToggle.tsx` (with hydration guard).
  - Create `components/ui/LanguageSwitcher.tsx` (Next.js Link with locale).
  - Update Header to include Logo (PowerLand), Nav Links (translated), and Toggles.
  - Update Footer with Contact Info & Socials.

  **Recommended Agent Profile**:
  - **Category**: `visual-engineering`
  - **Skills**: [`frontend-ui-ux`]

  **Parallelization**:
  - **Can Run In Parallel**: YES (Wave 3)
  - **Blocks**: Task 8 (final verification)

  **Acceptance Criteria**:
  - [ ] Header visible on all pages.
  - [ ] Toggles work (visual verification).
  - [ ] Links use `Link` from `next-intl` (or adapted).

  **Agent-Executed QA Scenarios**:
  ```
  Scenario: Toggles exist
    Tool: Playwright
    Steps:
      1. Navigate to /en
      2. Assert: button[aria-label="Toggle Dark Mode"] visible
      3. Assert: text="العربية" visible (or language switch icon)
    Expected Result: Components rendered.
  ```

- [ ] 7. Landing Page Sections (Services & Partners)

  **What to do**:
  - **Hero**: "PowerLand - Future of Energy" (Background image + CTA).
  - **Services Grid**: Cards for Projects, Spare Parts, Automation, VFD, Electrical, Energy Quality. Use `gap-*` for layout.
  - **Partners Strip**: "Official Partners" with Bedford and Entes logos.
  - **Contact**: Simple layout with Email/Phone/Address (no backend).

  **Recommended Agent Profile**:
  - **Category**: `visual-engineering`
  - **Skills**: [`frontend-ui-ux`]

  **Parallelization**:
  - **Can Run In Parallel**: YES (Wave 3)
  - **Blocks**: None

  **Acceptance Criteria**:
  - [ ] All 6 service categories displayed.
  - [ ] Partners section visible.
  - [ ] Responsive grid (1 col mobile, 3 col desktop).

- [ ] 8. Content & Translation

  **What to do**:
  - Populate `messages/en.json` with professional copy for all sections.
  - Populate `messages/ar.json` with Arabic translations (RTL friendly).
  - Ensure all hardcoded text in components is replaced with `t('key')`.

  **Recommended Agent Profile**:
  - **Category**: `writing`
  - **Skills**: [`frontend-ui-ux`]

  **Parallelization**:
  - **Can Run In Parallel**: YES (Wave 3)
  - **Blocks**: Final Delivery

  **Acceptance Criteria**:
  - [ ] No "Lorem Ipsum" remaining.
  - [ ] Arabic text displays correctly in RTL mode.

  **Agent-Executed QA Scenarios**:
  ```
  Scenario: Arabic Content Verification
    Tool: Playwright
    Steps:
      1. Navigate to /ar
      2. Assert: html[dir="rtl"]
      3. Assert: Text contains "باور لاند" (PowerLand in Arabic)
      4. Assert: Text contains "بيدفورد" (Bedford)
    Expected Result: Content is localized.
  ```

---

## Commit Strategy
- After Task 2: `chore: init project and config`
- After Task 4: `feat: setup i18n and theme`
- After Task 6: `feat: add layout components`
- After Task 8: `feat: complete landing page content`

## Success Criteria
- [ ] `npm run build` passes.
- [ ] English and Arabic versions accessible.
- [ ] Dark mode toggle functional.
- [ ] All PowerLand services listed.
