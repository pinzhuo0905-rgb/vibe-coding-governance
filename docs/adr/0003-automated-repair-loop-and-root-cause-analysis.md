# ADR 0003: Automated Repair Loop and Root Cause Analysis

## Status
Accepted

## Context
When AI agents encounter quality failures, common failure modes include disabling linter rules, casting variables to `any`, adding blanket ignore comments, or deleting failing tests.

## Decision
We mandate an Autonomous Repair Loop:
1. When the quality gate rejects a change, it outputs structured diagnostic metadata.
2. The agent is strictly forbidden from bypassing checks or suppressing warnings.
3. The agent must diagnose the underlying root cause and make a targeted semantic fix.

## Consequences
- **Positive:** Root causes are permanently resolved rather than covered with brittle patches.
- **Negative:** Requires agents to have strong reasoning capabilities regarding compiler and architectural feedback.

