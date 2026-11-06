# Per-adapter automatic recall

An adapter connection file may specify `recallLayers` with any subset of `Skill`, `L1`, `L2`, and `L3`. Omitting the field preserves the service's normal selection. An explicit empty array sends `layers: []` to `turns/start`, so that adapter can keep session and capture lifecycle calls while performing shared-history retrieval only on demand. The service still applies its existing turn-start layer restrictions.

This is a caller preference, not a global service switch. Explicit Memory searches and resume commands use their existing search routes. Other adapters whose files omit the setting keep their existing automatic recall. The Codex installer preserves this optional setting when refreshing its connection and owner fields.

For a Codex setup with native memory enabled, put the lookup order in its host instructions: consult the conversation and native memory first, then use shared history for a missing fact or an explicit request. The small Memmy bootstrap block indicates integration availability; it does not override host memory policy.

The installed JavaScript bridge was checked through loopback HTTP for legacy and v2 envelopes, omitted/default selection, an empty selection, and selective L1 recall. A live v2 session with an empty selection returned empty injected context and no source memory IDs; it was closed without submitting a turn completion. Explicit shared-history search still returned an existing source record. No inference service, shared-store setting or other adapter profile was changed.

These are scoped transport and live-route checks. Installer preservation was reviewed and transpiled, not exercised by reinstalling the user's live adapter. A full application build and upstream release were not performed.

## Codex skill and continuation policy

The Codex resume skill uses `agents/openai.yaml` with `policy.allow_implicit_invocation: false`, following the [Codex skill metadata contract](https://learn.chatgpt.com/docs/build-skills). Its explicit-only intent is retained using Codex's supported field instead of the other hosts' `disable-model-invocation` frontmatter. Other hosts keep their existing generated files and guidance.

Codex-generated memory guidance follows the host's native-memory policy, uses shared history for a specific remaining gap or explicit request, and sends requested memory corrections through the host's supported update path. Routine capture remains integration-owned. Keep required guidance in AGENTS.md and treat native memory files as generated state, as described in the [local memory documentation](https://learn.chatgpt.com/docs/customization/memories).

On Codex resume selection, both the fallback skill and actual hook continuation context label the episode as dated history. They retain current user corrections, project identity, live evidence, existing authorization, and reconciliation of pending request receipts. This adds context instructions; it does not assert that an independent model has obeyed them on every task.

The actual directory installer was exercised in an isolated Codex home. Generated skills pass the installed validator, and the local native catalog discovers the new metadata without duplicate names or parse errors. Its listing exposes interface metadata, not invocation-policy enforcement; the policy was read back from YAML. The installed hook's context formatter matches the source-generated formatter on an isolated episode without contacting or writing the live memory store. These checks do not replace a full application build, live adapter reinstall, or an independent routing evaluation.
