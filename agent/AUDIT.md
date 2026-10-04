# Verification evidence

## Independent source review - 2026-10-04

- Passed authenticated live MCP retrieval for UI, UIUX and Cxsun before inspection.
- Passed UI `npm run release:check`: maintenance checks and dry-run package inspection.
- Passed sixteen Cxsun identity module tests, app typechecks and focused ESLint after corrections.
- Corrected LoginPage progress mojibake and removed inactive variant-v2 provider actions.
- Corrected missing error associations on Cxsun locale, checkbox and permission-group controls.
- Locale options match Platform's explicit enum. No locale mismatch defect was found.
- Confirmed resource-view owns presentation only. Identity schemas and API orchestration stay in Cxsun.
- Reconciled active records with the removal of legacy domain exports and installed Tools commands.
- Partial: Cxsun tests cover contracts, transport, date presentation and permission-group markup.
- Untested: keyboard focus after validation, contrast, screen readers and responsive authenticated CRUD.
- Untested: all public UI exports and an independent registry consumer of the revised source.
- Blocked release gate: the removed public exports require a breaking pre-1.0 minor version and migration notes.
- A direct source SSR check could not resolve UI's React peer dependency from its source folder.
  No dependency was installed to mask that source-development constraint. UIUX compilation provides consumer evidence.
- No version change, publication, commit or push occurred.

Historical sections below describe their original checkpoints. This section records current review results.

## Passed

- Live MCP retrieval verified the foundation guide, audit/todo records, and application metadata
  where applicable.
- Release metadata checks passed.

## Untested

- New application generation was not run.

## Not applicable

- Shared package records do not imply an application login desk.

## Cloud-only governance — 2026-10-03

- Passed: authenticated live instructions and required connection policy for this repository.
- Passed: local MCP endpoint rejected with exit code 1. No local guide fallback.
- Governance: seven protocol/client tests and cloud Worker checks passed.
- Cxsun: two development connection tests passed, including no process start on connection failure.
- Business features were not changed or tested. Source changes remain uncommitted.

## Live connection audit — 2026-10-03

- Passed: this repository retrieves all five cloud guidance documents with its configured app identity.
- Passed: environment secret files are ignored by Git.
- Fixed: imported clients now reject every endpoint except https://mcp.codexsun.com/mcp.
- Fixed: clients validate returned app identity and reject missing instruction content.
- Fixed: request timeout is 15 seconds. Cxsun no longer uses a two-second cloud timeout.
- Passed: official SDK initialization, five live resource reads, and all three live tools.
- Passed: missing/wrong secret, denied origin, and invalid identity HTTP checks.
- Passed: eight governance tests, two Cxsun failure tests, cloud checks, and successful live Cxsun startup.
- No current connection blocker was found. Cloud/network availability and valid secrets remain required.
- Cloud metadata is a deployment snapshot. Source changes require redeployment.
- App IDs identify caller context. The shared developer secret is not per-app authentication.
- Long-term uptime and external editor configuration were not tested. Source changes remain uncommitted.

## Live connection audit — 2026-10-03

- Passed: all six repositories retrieve five cloud guides with their configured app identities.
- Passed: environment secret files are ignored by Git.
- Fixed: imported clients reject every endpoint except https://mcp.codexsun.com/mcp.
- Fixed: clients validate returned app identity and reject missing instruction content.
- Fixed: request timeout is 15 seconds, including Cxsun development startup.
- Passed: official SDK initialization, five live resource reads, and all three live tools.
- Passed: missing/wrong secret, denied origin, and invalid identity HTTP checks.
- Passed: eight governance tests, two Cxsun failure tests, cloud checks, and successful live Cxsun startup.
- No current connection blocker was found. Network availability and valid secrets remain required.
- Cloud metadata is a deployment snapshot. Source changes require redeployment.
- App IDs identify caller context. The shared developer secret is not per-app authentication.
- Long-term uptime and external editor configuration were not tested. Source changes remain uncommitted.

## Release 0.1.6 — 2026-10-03

- Passed npm run check: dependency order, aligned release metadata, and LF checks.
- Passed authenticated live MCP connection, release metadata, LF, and configured-secret scans.
- Prepared commit subject: #6 - Require audited cloud MCP guidance.

## npm migration — 2026-10-03

- Passed public package preparation for Framework and UI version 0.1.7.
- Passed packed package consumption, Cxsun full verification, UIUX verification, and eight governance tests.
- npm CLI login and device authentication succeeded as devxcrew.
- Publication returned E409. Registry metadata records Framework unpublished at 2026-10-03 03:30:32 UTC and UI at 03:32:35 UTC.
- npm blocks the same package names for 24 hours. Both names should be eligible after October 4 at 09:03 IST.
- Blocked: registry publication, registry installation, and final project lockfile generation.
- Cxsun currently runs with explicitly installed local packed snapshots. Its manifest names the intended npm versions.
- Do not treat the current project lockfile as a completed registry migration.

## npm migration completion — 2026-10-03

- Passed: @devxcrew/core-framework@0.1.7 and @devxcrew/react-ui@0.1.7 are public in the npm registry.
- Passed: Cxsun installed both registry packages and records registry URLs and integrity hashes in its lockfile.
- Passed: UIUX typecheck and production build with the new UI package name. UIUX intentionally keeps its local source gallery dependency.
- Passed: Governance cloud checks, deployment, and authenticated connections from all six repositories.
- Passed: Tools source compatibility tests (21 tests). Tools npm publication was not part of this release.
- Untested: Real identity, RBAC, and tenancy; these remain outside this package migration.

## Live MCP access audit — 2026-10-03

- GREEN: authenticated live connection, matching repository metadata, five guidance resources, and all three MCP tools.
- Central evidence: shared/mcp-governance/docs/mcp-access-audit.md.

## Foundation owner audit — 2026-10-04

- Owner MCP cloud connection passed this session before source work, as recorded by the coordinator.
- Passed npm run check: dependency order, version 0.1.7 alignment, and line endings.
- Reviewed package exports, master-list/form contracts, workspace exports and IdentityManagementDesk.
- Gap: MasterForm uses local required-field checks, without TanStack Form or server field-error input.
- Gap: IdentityManagementDesk contains identity API paths and field rules inside shared presentation ownership.
- Gap: package checks do not include standalone typecheck, component behavior or accessibility checks.
- Gap: latest dependency ranges and sibling maintenance clients need compatibility and installation evidence.
- Loaded master task IDs 01.03, 02.03, 04.01, 04.02, 04.03 and 06.03.
- Baseline state: in-review. Complete browser support and accessibility inventory remains required before acceptance.
- Browser interaction, all-export compilation, registry clean-install and live database flows were not run here.
- No runtime implementation, release, commit or database change.

## Resource presentation contracts — 2026-10-04

- Added public blocks/resource-view: ResourceHeader, ResourceTable, and ResourceFeedback.
- The contract accepts renderers, records, keys, and actions. It owns no API paths or resource schemas.
- Cxsun identity resource screens consume the public heading and table contracts.
- Kept IdentityManagementDesk export for compatibility and marked its domain behavior deprecated.
- Passed package maintenance checks.
- Cxsun typecheck, focused lint, build, and four module tests passed before the new UI artifact refresh.
- Installed package and final consumer/browser checks remain coordinator integration work.
- 02.03 is in-review. 04.01 is active. Accessibility and complete consumer acceptance remain required.
# Coordinator ownership correction - 2026-10-04

Workspace source inspection found no active consumers of SessionBoundary or the unused identity desk implementations.
Removed those domain implementations from shared presentation code.
Cxsun's identity module owns the replacement server-cookie and resource workflows.
The UI resource-view contract stays public and business-neutral.
This requires a breaking pre-1.0 minor release and migration notes.
The published registry package has not changed.
Maintenance scripts now use installed Tools 0.1.7. Source release checks passed before this ownership removal.
Repeat UIUX and consumer checks before accepting this correction.

## Automated UI acceptance - 2026-10-04

- Passed authenticated live MCP connection.
- Passed strict source compilation and 122 public JavaScript export consumer paths.
- Passed 61 package-owned tests, including generic resource rendering and error/status semantics.
- Passed maintenance checks and npm tarball dry run through `npm run release:check`.
- Removed the obsolete SessionBoundary test. Authentication policy remains outside UI.
- Pinned formerly unbounded latest runtime dependencies and aligned React type declarations.
- Corrected standalone ImportMeta environment typing without requiring a bundler ambient declaration.

Remaining: keyboard, focus, screen-reader, contrast and responsive browser acceptance.
Registry consumer evidence depends on the proposed breaking release 0.2.0. No version bump or publication occurred.
# Workspace GitHub release - 2026-10-04

npm run release:check passed: strict TypeScript, 122 public export paths, component suite, aligned metadata, LF and package dry run.
Configured-secret scan found no matches in Git release candidates.

User authorization: update versions and changelogs, then commit and push all workspace repositories.
Remove identity-domain implementations from shared UI and add generic resource presentation, accessibility feedback and public export verification.
Authenticated MCP connection passed for this owner before release work.
This delivery covers GitHub source. Npm publication, production deployment and real email acceptance remain separate gates.

## Completion wave evidence - 2026-10-04

npm run release:check passed types, 122 public export compilations, the component suite and a 326-file MIT package.
Authenticated MCP passed before work. New or expanded three-OS CI requires actual remote run evidence. Npm publication and deployed acceptance remain open.
