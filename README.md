# PaDi Design System v3.0

A modern, light-weight design system repository bootstrapped with Next.js, Base UI headless primitives, and Storybook. All design tokens and text styles are registered directly from the Figma source.

## Core Features

- **165 Design Tokens**: Grouped into 10 collections (Base colors, Pastels, Font properties, Spacing, functional backgrounds, etc.) defined as native CSS variables.
- **Multi-Mode Selector Overrides**: The system natively supports functional modes (`primary`, `tertiery` (tertiary), `destructive` theme modes) using class selectors and data attributes (e.g., `[data-mode-button="primary"]`).
- **37 Semantic Typography Classes**: Complete set of headings, body variants, underlines, captions, and button texts using the **Ubuntu** font family.
- **Headless Accessible Components**: UI components built on top of **Base UI** (`@base-ui/react`) to ensure perfect ARIA compliance and keyboard interaction, completely styled using our custom CSS variables.
- **Storybook Workspace**: An interactive showroom documenting the tokens, text layouts, and component variants.
- **Vitest Interaction Testing**: Automated visual and interaction smoke tests for Storybook stories.

---

## Directory Structure

```txt
padi-ds-v3/
├── .storybook/            # Storybook config (preview.tsx, main.ts)
├── src/
│   ├── app/               # Next.js App router (globals.css, layout.tsx, page.tsx)
│   ├── components/        # UI components (Button.tsx, button.css)
│   ├── styles/            # Design tokens (variables.css, text-styles.css)
│   └── stories/           # Storybook documentation and stories
│       ├── Configure.mdx  # Design system welcome and onboarding doc
│       ├── Tokens.stories.tsx
│       ├── Typography.stories.tsx
│       └── Button.stories.tsx
├── package.json
└── tsconfig.json
```

---

## Scripts & Operations

Run the following commands inside the repository:

### Development & Previews
* **Start Storybook Playground**:
  ```bash
  npm run storybook
  ```
  Open [http://localhost:6006](http://localhost:6006) to interact with tokens, text styles, and component variant states.

* **Start Next.js Development Server**:
  ```bash
  npm run dev
  ```
  Open [http://localhost:3000](http://localhost:3000) to view the Next.js app.

### Testing & Verification
* **Run Vitest Storybook Tests**:
  ```bash
  npx vitest --project storybook run
  ```
  Runs interaction tests, checks node visibility, and validates computed CSS variables.

* **Run TypeScript compiler check**:
  ```bash
  npx tsc --noEmit
  ```

### Production Compilation
* **Compile Storybook static site**:
  ```bash
  npm run build-storybook
  ```
  Generates static distribution files in `storybook-static/`.

* **Build Next.js app**:
  ```bash
  npm run build
  ```

---

## Developer Integration Guide

### 1. Register base styles
To consume these tokens in your application, import the stylesheets at your app's main entrypoint (e.g. `src/app/globals.css`):
```css
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');

@import '@padi/design-system/styles/variables.css';
@import '@padi/design-system/styles/text-styles.css';
```

### 2. Consuming variable tokens in custom CSS
Refer to the native CSS custom properties anywhere in your Vanilla CSS or CSS Modules:
```css
.card {
  background-color: var(--background-color-secondary);
  border: 1px solid var(--border-color-dark);
  color: var(--font-color-primary);
}
```

### 3. Using utility classes
Apply pre-registered typography rules directly via class names:
```tsx
<h2 className="heading-heading-2">Section Header</h2>
<p className="body-large-semibold">Semibold body text</p>
```

### 4. Using Components
Render the Button component by supplying its variant, size, and mode:
```tsx
import { Button } from '@/components/Button';

export default function MyComponent() {
  return (
    <Button variant="solid" size="medium" mode="primary">
      Save Changes
    </Button>
  );
}
```
