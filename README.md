# Codexsun UI

Reusable React components, blocks, layouts, templates, design-system metadata, and theme styles. Applications consume the public @codexsun/ui exports. UI owns its component dependencies; applications provide React and React DOM.

Public source: https://github.com/devxcrew/ui. This source repository does not publish an npm package.

Clone to shared/ui alongside shared/framework and projects/cxsun. Run npm install here. The gallery is in devkits/uiux and runs independently on port 6102.

Maintenance commands: npm run check:versions, npm run fix:line-endings, npm run version:update, and npm run github:now. The verified shared tools package is stored in vendor.

## Common maintenance commands

All repositories use the installed @devxcrew/tools package through these root scripts:

```powershell
npm run tools:check
npm run version:show
npm run version:update -- --dry-run
npm run check:versions
npm run changelog:show
npm run changelog:append -- --title "Change title" --note "Change details"
npm run lines:check
npm run fix:line-endings
npm run github:now -- --dry-run
```

Version updates and changelog appends change local files. github:now without --dry-run can commit and push after its review prompts. Reusable UI and framework packages keep their package-specific build contracts; the gallery keeps its standalone Vite workspace.
