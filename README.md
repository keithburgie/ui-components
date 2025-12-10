# Scalable UI: Tailwind v4 & Design Tokens

## ⚡️ Quick Start

This project uses **Turborepo** to orchestrate the monorepo.

### 1. Installation

```
git clone git@github.com:keithburgie/ui-components.git
cd ui-components
npm install
```

### 2. Run the Environment

Run the full stack (App + Storybook + Watchers) with a single command:

```
npx turbo run dev
```

This concurrently launches:

- **Consumer App:** [http://localhost:3000](http://localhost:3000) (Next.js Dashboard)
- **Design System Workbench:** [http://localhost:6006](http://localhost:6006) (Storybook)
- **Library Watch:** Automatically rebuilds the design system on file changes.

### 3. Other Commands

```
# Run unit tests (Vitest)
npx turbo run test

# Build all packages for production
npx turbo run build
```

## 🏗️ Architecture & Features

- **Orchestration:** Monorepo via Turborepo & npm workspaces.
- **Design System (`@ui/design-system`):** A standalone package containing:
  - **Tokens:** Tailwind v4 CSS variables (Primitives vs. Semantic aliases).
  - **Components:** Headless logic (Radix UI inspired) + Tailwind Variants (tv) for styling.
- **Consumer App:** A Next.js App Router application that consumes the design system via the workspace protocol.

## 📂 Project Structure

```
root/
├── apps/
│   └── consumer-app/         # 🧠 The Next.js Dashboard (Consumer)
│
├── libraries/
│   └── design-system/        # 📦 The Component Library (Producer)
│       ├── src/tokens/       # Raw OKLCH values & Semantic Aliases
│       └── src/components/   # React Components
│
├── tooling/                  # 🔧 Shared ESLint & TS Configs
└── turbo.json                # Pipeline configuration
```
