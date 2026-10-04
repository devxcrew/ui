# ui

Own reusable React components, blocks, layouts, themes, and public exports.

Applications consume the public package exports. Optional sibling sources support workspace development.

## Run

Use Node 26.10 or newer and the package manifest requirements.
Maintenance commands use the installed public Tools package.
Retrieve shared rules from the authenticated cloud MCP endpoint.

```powershell
npm install
npm run check
```

## Repository records

- `AGENTS.md`: repository instructions and ownership rules.
- `agent/SKILLS.md`: repository capabilities.
- `agent/TASK.md`: current task and status.
- `agent/PLAN.md`: next steps.
- `agent/CHANGELOG.md`: versioned changes and validation results.

## Shared guidance

Retrieve shared documentation and rules only from `https://mcp.codexsun.com/mcp` using `npm run mcp:connect`.
A successful authenticated connection is required before repository work. Stop and report connection failures.
Do not use local guides or cached instructions as fallback. Instruction retrieval does not authorize actions.

Retrieve shared documentation and rules only from `https://mcp.codexsun.com/mcp` using `npm run mcp:connect`.
A successful authenticated connection is required before repository work. Stop and report connection failures.
Do not use local guides or cached instructions as fallback. Instruction retrieval does not authorize actions.

Configure these values with `.env.example`:

- `MCP_SERVER_URL`
- `MCP_SERVER_SECRET`
- `APP_ID`
- `APP_USER`

Keep the secret in ignored `.env` files.

```powershell
npm run mcp:connect
npm run mcp:verify
```

Use `mcp:connect` to retrieve instructions. Use `mcp:verify` for a strict connection test.
Connection failures block repository work. Editor registration uses the central connection
template and depends on the editor.

## Maintenance

```powershell
npm run version-bump -- --dry-run
npm run version-bump -- --title "Release title" --note "Change details"
npm run check:versions
npm run fix:line-endings
npm run lines:check
npm run github:now -- --dry-run
```

Version bumps align `package.json`, `package-lock.json`, and `agent/CHANGELOG.md`. Record changes
and validation before committing.

Commit subjects use `#<patch> - <release title>`. For example:
`#5 - Central governance and repository agent layout`.

Review the changed files before an authorized `npm run github:now`. Do not bump again when the
release version is already prepared.

## Tools source and publication

Workspace maintenance uses the installed public Tools package, pinned at 0.1.7.
The source checkout does not require sibling maintenance wrappers.

GitHub source releases use `github:now`. Npm publication requires separate authorization.

## npm package

UI publishes TypeScript/TSX source and CSS for Vite or another TypeScript-aware React bundler. React and React DOM remain peer dependencies. Native Node cannot execute these frontend exports directly.

Run `npm run release:check`, then `npm publish --access public` from this repository.
Only public exports are supported. App manifests use npm versions.

## Identity ownership migration

The next compatible foundation release removes SessionBoundary and the unused identity desk implementations.
This is a breaking UI API change. Release preparation must select a new minor version while the package remains below 1.0.
The current published package remains unchanged.

Identity modules own authentication, sessions, resource schemas, API calls, navigation, and permission decisions.
Use the public resource-view components for headers, tables, and feedback.
Use the public login presentation components with the identity module's server-managed session flow.
Do not recreate browser token storage or business resource implementations inside shared UI.


## Local verification and upgrade

Run `npm run release:check`. This compiles all source and 122 public JavaScript export paths.
The package test suite checks rendering, status semantics, catalogs and reusable behavior.
These checks do not establish keyboard or screen-reader acceptance.

The proposed next release is 0.2.0. It removes legacy identity desk and SessionBoundary exports.
Move authentication, permissions and resource workflows into the application or Platform owner.
Use generic resource-view exports for presentation. Keep domain schemas and API calls in their module.
Login password policies belong to the consuming module. Shared UI does not impose a password length.
Version 0.1.7 in the registry remains unchanged until coordinated release approval.
