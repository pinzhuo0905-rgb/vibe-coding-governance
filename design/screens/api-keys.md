# Screen Specification: Agent API & Security Tokens

> **Screen ID:** `SCREEN-004` | **Route:** `/settings/api-keys` | **Target Density:** High

---

## 1. Screen Purpose
Manage scoped API tokens and cryptographic credentials used by autonomous AI agents (Codex, Claude, Cursor) to report quality runs and create pull requests.

## 2. Primary User Task
Create a new scoped agent token or revoke a compromised credential in < 15 seconds.

## 3. Information Architecture
- Header: Title, description, "Generate New Token" primary button.
- Active Keys Table: Name, Key Prefix (e.g. `vibe_live_9a...`), Scopes, Last Used Timestamp, Created Date, Revoke Action.
- Revocation Confirmation Modal: Destructive action confirmation with explicit warning.

## 4. The 10 Mandatory States Specification

| State | Visual Behavior & Feedback |
| :--- | :--- |
| **1. Default** | Populated table listing active agent keys and expiration dates. |
| **2. Loading** | Table displays 3 skeleton placeholder rows while fetching key metadata. |
| **3. Empty** | Clean EmptyState: "No Agent Tokens Generated. Create a token to allow CI/CD agent reporting." |
| **4. Error** | Top banner: "Failed to communicate with key vault. Please verify KMS connectivity. [Retry]" |
| **5. Success** | Modal displays newly generated token string with one-click copy button and confirmation toast. |
| **6. Disabled** | "Generate Token" button disabled during pending request. |
| **7. Unauthorized** | Warning banner: "Only organization admins may create tokens with `repo:write` scopes." |
| **8. Offline** | Read-only cache view with amber warning badge. |
| **9. Overflow** | Long token description strings truncate with ellipsis; full description accessible via tooltip. |
| **10. Large Dataset** | Table paginated at 20 keys per page with fast search filter. |
