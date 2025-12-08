# Build Scripts

## Auto-Generated Exports

### `generate-exports.mjs`

Automatically generates `src/components/index.tsx` by scanning the components directory.

**How it works:**
1. Recursively scans `src/components/` at all nesting levels
2. For each folder, checks if `{folder-name}/{folder-name}.tsx` exists
3. Generates barrel export preserving directory structure
4. Writes to `src/components/index.tsx` with auto-generated header

**Supports both flat and nested structures:**

```
src/components/
├── button/button.tsx          → export * from "./button/button"
├── layout/
│   ├── box/box.tsx            → export * from "./layout/box/box"
│   └── flex/flex.tsx          → export * from "./layout/flex/flex"
└── themed/
    └── badge/badge.tsx        → export * from "./themed/badge/badge"
```

**When it runs:**
- **Automatic**: Before every build via `prebuild` npm script
- **Manual**: Run `npm run generate:exports`

**Benefits:**
- ✅ No manual maintenance of barrel exports
- ✅ No risk of forgetting to export new components
- ✅ Consistent export patterns
- ✅ Auto-sorted alphabetically
- ✅ Prevents circular dependencies (generates direct paths)

**Adding a new component:**
1. Create component folder: `src/components/my-component/`
2. Create component file: `src/components/my-component/my-component.tsx`
3. Run `npm run build` (or `npm run generate:exports`)
4. ✅ Your component is now exported from `@ui/design-system/components`

**Git:**
The generated `src/components/index.tsx` is gitignored and regenerated in CI/CD.

**File naming convention:**
The script uses `.mjs` extension to explicitly mark it as an ES module without requiring `"type": "module"` in package.json (which would break TypeScript's module resolution).

