# Current task

## Completion wave - 2026-10-04

Source 0.2.0 passed 122 public export compilations and 61 tests in the source release audit. Those local coverage steps are complete. Browser accessibility and installed registry release acceptance remain open. Three-OS CI is added in this wave.

- [x] Reconcile current status with the GitHub source release and latest owner audit.
- [x] Retrieve fresh authenticated cloud governance before this wave.
- [x] Apply the user-selected MIT license to first-party source, package metadata and lock metadata.
- [x] Record this wave's affected checks and accept only gates with direct evidence.

npm run release:check passed types, 122 public export compilations, the component suite and a 326-file MIT package.
- [x] Prepare isolated CI coverage for the target Windows/Linux/macOS runtime.
- [ ] Verify this wave's exact GitHub CI results.


Use projects/cxsun/agent/REMAINING-WORK.md for ordered cross-owner dependencies.
Production deployment and real SMTP acceptance remain deferred. No pending external gate is marked complete.

## Prior records

<!-- foundation-checklist:start -->

## Numbered phase checklist

Master: [all foundation tasks](D:/codexsun/projects/cxsun/agent/CHECKLIST.md).

Updated: 2026-10-04. Checked steps have recorded local evidence.
Parents retain incomplete acceptance gates. Mail tests and production deployment are deferred by user.

### Phase 01 - Baseline and ownership

- [x] **01.03 Audit UI exports and domain ownership** - accepted. Owner: ui.
  - [x] 01.03.1 Public inventory and ownership findings recorded.

### Phase 02 - Public contracts and release scope

- [ ] **02.03 Define shared resource presentation contracts** - in-review. Owner: ui.
  - [x] 02.03.1 Generic resource views and module-owned domain boundaries implemented.
  - [ ] 02.03.2 Accept all-export consumer compilation and interaction contracts.

### Phase 04 - UI and frontend workflows

- [ ] **04.01 Refine generic list, detail and form presentation** - in-review. Owner: ui.
  - [x] 04.01.1 Resource headers, tables and feedback consumed by Cxsun.
  - [ ] 04.01.2 Verify reusable filters, confirmations and component behavior coverage.
- [ ] **04.02 Refine workspace navigation and portal presentation** - in-review. Owner: ui.
  - [x] 04.02.1 Module navigation metadata and three portal shells integrated.
  - [ ] 04.02.2 Verify keyboard, focus and responsive navigation.
- [ ] **04.03 Refine accessibility and interaction failure states** - in-review. Owner: ui.
  - [x] 04.03.1 Linked field errors and unsupported provider action removal completed.
  - [ ] 04.03.2 Verify keyboard, screen reader, dialogs, contrast and supported viewports.

### Phase 06 - Verification and operations

- [ ] **06.03 Verify UI consumers and accessibility** - in-review. Owner: ui.
  - [x] 06.03.1 UI release checks and Cxsun accessibility markup regression pass.
  - [ ] 06.03.2 Add all-export/component coverage and complete browser accessibility matrix.

<!-- foundation-checklist:end -->

## Earlier task records

Current tasks: 02.03 in-review, 04.01 active, 04.02-04.03 active.
ResourceHeader, ResourceTable and ResourceFeedback provide public presentation contracts.
Cxsun owns resource fields, schemas, API calls and workflows.
The unused legacy identity desk and SessionBoundary source exports were removed.
The published 0.1.7 package remains unchanged. A breaking pre-1.0 minor release is required.
Consumer artifact refresh and browser acceptance remain required.
See agent/AUDIT.md for exact verification limits.

## Independent review - 2026-10-04

Passed authenticated live MCP retrieval and the source package release check.
Corrected unreadable sign-in progress text. Removed provider buttons without supported actions.
Cxsun now associates permission, locale and checkbox errors with their controls.
Sixteen Cxsun identity contract, transport, presentation and permission tests pass.
These tests do not establish browser, keyboard or screen-reader acceptance.
Tasks 04.01-04.03 remain active. Task 06.03 remains planned.
Remaining gates include all-export compilation, supported dependency versions, browser evidence and registry consumer verification.

## Previous task evidence

# Foundation owner tasks — 2026-10-04

Current task: 01.03. State: in-review.
Source: projects/cxsun/agent/PLAN.md. Owner scope and dependencies are in agent/PLAN.md.

Owner plans are loaded. Baseline source inspection is complete.
The coordinator must review evidence before accepting the baseline task.
Implementation tasks remain planned. Existing checks do not establish full foundation completion.
No version bump, publication, commit or database change belongs to this task.

## Historical task record

# Current task

Set strict module-owned architecture instructions for all repositories.

## Status

Agent notes and central MCP guidance define modular monoliths, practical DDD, and matching frontend/backend ownership.
Events and queues are optional capabilities. The source-file guideline is 700–900 lines.
No application runtime refactor or new infrastructure was added.

## Release 0.1.6 — 2026-10-03

- Passed npm run check: dependency order, aligned release metadata, and LF checks.
- Passed authenticated live MCP connection, release metadata, LF, and configured-secret scans.
- Prepared commit subject: #6 - Require audited cloud MCP guidance.

## npm package migration — 2026-10-03

- Prepare public `@devxcrew/core-framework` and `@devxcrew/react-ui` version 0.1.7.
- Project apps use npm dependencies. Explicit local snapshots support side-by-side development.
- Passed package release checks, local package consumption, Cxsun verification, and UIUX verification.
- The original names were blocked by npm's unpublished-name hold. The user selected new package names.

## Publication with new names

- User selected @devxcrew/core-framework and @devxcrew/react-ui to avoid the old-name hold.
- Both @devxcrew/core-framework and @devxcrew/react-ui 0.1.7 are published and visible in the npm registry.
- Registry installation passed. Cxsun lock entries contain npm tarball URLs and integrity hashes. Cxsun clean installation and final app verification are recorded in the application audit.

## Current automated gates - 2026-10-04

- [x] 02.03.2a Compile all 122 public JavaScript export paths.
- [x] 04.01.2a Wire reusable rendering and behavior regression tests.
- [x] 06.03.2a Run 61 package tests and strict source compilation.
- [ ] 06.03.2b Complete keyboard, screen-reader and supported viewport browser evidence.
- [ ] 06.03.2c Verify independently installed coordinated release artifacts.

Earlier statements that no standalone typecheck or component suite exists are historical.
The required release check now includes compilation, public exports and the package suite.
## Workspace GitHub release - 2026-10-04

Release title: Separate reusable UI from identity.
Remove identity-domain implementations from shared UI and add generic resource presentation, accessibility feedback and public export verification.
Update version records, review release checks, then commit and push the current owner branch.
Preserve existing task history and incomplete acceptance gates.
