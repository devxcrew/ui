# Shared UI foundation plan

## Current release - 2026-10-05

Public MIT package: @devxcrew/ui 0.2.0. Publication and registry integrity verification passed.
61 tests, strict types, 122 public exports and the 326-file archive passed.
Two generated registry apps and the isolated UIUX registry gallery passed.
All six existing apps passed owner verification and package checks. Source delivery follows final review.
Historical checkpoints below retain their original package names and results.


Source: projects/cxsun/agent/PLAN.md, sections 3, 6, 7, 8.3 and 9.
Owner: shared/ui. Public package: @devxcrew/ui.
Keep the master phase and task IDs. Do not restart numbering.

## Purpose and boundary

Provide reusable presentation and interaction contracts.
Applications own resource schemas, domain rules, API calls, authorization, and persisted data.
The shell renders public module navigation metadata.
Keep identity resource implementations in their domain or app owner.
Review existing domain-specific blocks before changing their public exports.

## Initial baseline — 2026-10-04

- Public source exports include components, blocks, layouts, themes, tokens and design-system metadata.
- MasterList, MasterListDesk, MasterForm and MainWorkspace exist.
- MasterForm checks required values locally. It does not use TanStack Form or accept server field errors.
- The initial IdentityManagementDesk ownership finding was corrected through source removal. Registry consumers still require migration.
- Package check verifies dependency order, release metadata and line endings.
- No standalone typecheck, component test or accessibility check script exists.
- Several dependencies use latest. Maintenance scripts now use installed Tools 0.1.7.
- Existing checks do not prove every exported component works or satisfies foundation contracts.

## Tasks and handoffs

| ID | State | Deliverable | Dependencies | Acceptance |
| --- | --- | --- | --- | --- |
| 01.03 | in-review | Public component inventory, supported browser matrix and ownership gaps | 01.07 | Source evidence and current checks reviewed. Accessibility gaps remain explicit. |
| 02.03 | in-review | List/detail/upsert, navigation, heading and error contracts | 02.01, 02.02, 02.04 | Module-owned fields/actions remain outside UI. Define URL state and server field-error mapping. |
| 04.01 | active | Resource views, form adapters, table states, filters, pagination and confirmations | 02.03 | Cxsun operates real API flows. Forms support TanStack Form and module-owned Zod schemas. |
| 04.02 | planned | Workspace headers, submenus and portal presentation | 02.03, 02.04 | Public metadata drives the shell. No private business imports or dead navigation. |
| 04.03 | planned | Responsive layout, focus, dirty forms, stale requests and concise copy | 04.01, 04.02 | Keyboard flows, duplicate submission and failed saves preserve usable state. |
| 06.03 | planned | Automated and manual UI acceptance report | 04.01-04.04, 04.05, 04.06 | Supported viewports, keyboards and accessibility verified in consumers. |

## Verification and release contribution

### Revised review gates - 2026-10-04

1. Keep 02.03 in review until the form and navigation contracts have consumer evidence.
2. Complete 04.01-04.03 with failure, keyboard, focus and small-screen checks in Cxsun.
3. Add package-owned compilation and behavior checks for every supported public export.
4. Define supported dependency versions and remove unbounded latest ranges before release.
5. Prepare a breaking pre-1.0 minor release for removed public identity exports.
6. Verify the released artifact in an independent consumer before accepting 06.03.

The package release check verifies metadata, line endings and tarball contents.
It does not typecheck all exports or establish accessibility acceptance.

Record keyboard, focus, contrast, loading, empty, denied, missing and failure states.
Use Cxsun file-backed SQLite flows for final resource acceptance.
Gallery fixtures only prove presentation behavior.
Contribute package compatibility and artifact evidence to 06.08 and 06.11.
Contribute installed consumer evidence to 06.09 and 07.03.
Do not publish or change versions during this planning task.

## Review loop

Submit changed contracts and consumer examples to the coordinator.
Review actual diffs and rerun affected checks after corrections.
Accept tasks only after consumer evidence passes.
Link current central rules through authenticated MCP. Do not duplicate shared governance.

## Previous repository plan

1. Keep shared guidance in mcp-governance.
2. Maintain local task, plan, skill notes, and release history.
3. Verify MCP instructions, maintenance commands, and repository behavior.
4. Maintain this repository within its documented ownership and add features only when requested.

## Task checkbox tracking

Use [owner phase checklist](TASK.md) for current checkboxes and numbered substeps.
Use [master checklist](D:/codexsun/projects/cxsun/agent/CHECKLIST.md) for all owners and shared release gates.
Keep task IDs unchanged. Check a parent only after all its acceptance criteria pass.

## Current verification update

Source compilation, 122 public JavaScript export paths and 61 package tests pass.
The required release check includes these checks and tarball validation.
The pending gates are browser accessibility, responsive interaction and coordinated registry consumers.
The proposed breaking release is 0.2.0. See README.md for migration notes.


## Current execution - 2026-10-04

Local checks and the three-OS source CI passed. The MIT package 0.2.0 is published; Cxsun registry consumer verification is in progress. See TASK.md for current checkboxes and AUDIT.md for evidence. Earlier evidence remains historical.
