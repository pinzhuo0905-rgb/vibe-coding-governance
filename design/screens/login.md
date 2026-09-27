# Screen Specification: Enterprise Authentication

> **Screen ID:** `SCREEN-002` | **Route:** `/login` | **Target Density:** Medium

---

## 1. Screen Purpose
Authenticate engineering personnel and verify cryptographic signatures for autonomous agent access.

## 2. Primary User Task
Log in using Single Sign-On (GitHub / Okta / SAML) or personal access token in < 10 seconds.

## 3. Information Architecture
- Centered 400px panel with 1px border (`#334155`), background (`#0f172a`), border-radius 8px.
- Zero decorative background blobs. Clean dark canvas (`#090d16`).
- Brand mark, title ("Vibe Coding Governance Console"), subtitle ("Enter credentials to manage repository guardrails").
- SSO Primary Button ("Continue with GitHub").
- Divider ("or authenticate with token").
- Form: Token input field, Remember Device checkbox, "Sign In" submit button.
- Footer: Documentation and security compliance links.

## 4. The 10 Mandatory States Specification

| State | Visual Behavior & Feedback |
| :--- | :--- |
| **1. Default** | Clean input field with autofocus on token input; SSO button active. |
| **2. Loading** | Submit button displays inline spinner; form inputs disabled; opacity 0.7. |
| **3. Empty** | Initial unpopulated state; helper text shows expected token format (`vibe_pat_...`). |
| **4. Error** | In-place red alert banner above form: "Invalid personal access token. Please verify scope `repo:admin`." |
| **5. Success** | Transition screen with checkmark before instant redirect to `/dashboard`. |
| **6. Disabled** | Submit button disabled until valid length token string is detected. |
| **7. Unauthorized** | Banner warning: "Session expired or credentials revoked. Re-authentication required." |
| **8. Offline** | Offline banner: "Network disconnected. SSO authentication currently unavailable." |
| **9. Overflow** | Long enterprise tenant names wrap with ellipsis in header badge. |
| **10. Large Dataset** | N/A for single-form login. |
