# Per-adapter automatic recall

An adapter connection file may specify `recallLayers` with any subset of `Skill`, `L1`, `L2`, and `L3`. Omitting the field preserves the service's normal selection. An explicit empty array sends `layers: []` to `turns/start`, so that adapter can keep session and capture lifecycle calls while performing shared-history retrieval only on demand. The service still applies its existing turn-start layer restrictions.

This is a caller preference, not a global service switch. Explicit Memory searches and resume commands use their existing search routes. Other adapters whose files omit the setting keep their existing automatic recall. The Codex installer preserves this optional setting when refreshing its connection and owner fields.

For a Codex setup with native memory enabled, put the lookup order in its host instructions: consult the conversation and native memory first, then use shared history for a missing fact or an explicit request. The small Memmy bootstrap block indicates integration availability; it does not override host memory policy.

The installed JavaScript bridge was checked through loopback HTTP for legacy and v2 envelopes, omitted/default selection, an empty selection, and selective L1 recall. A live v2 session with an empty selection returned empty injected context and no source memory IDs; it was closed without submitting a turn completion. Explicit shared-history search still returned an existing source record. No inference service, shared-store setting or other adapter profile was changed.

These are scoped transport and live-route checks. Installer preservation was reviewed and transpiled, not exercised by reinstalling the user's live adapter. A full application build and upstream release were not performed.
