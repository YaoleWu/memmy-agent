import type { SkillManifest } from "../types.js";

const MEMMY_MARKER = "<!-- memmy:start v=1 -->";

export function renderMemmyPluginSkillManifest(targetId: string): SkillManifest {
  return {
    targetId,
    content: renderMemmyPluginContent(targetId),
    marker: MEMMY_MARKER
  };
}

function renderMemmyPluginContent(source: string): string {
  return [
    "# Memmy Memory",
    "",
    "A Memmy Memory Hook or plugin is installed for this agent.",
    "",
    "## Automatic Memory",
    "",
    "- The installed integration supports automatic recall and completed-turn capture according to its adapter configuration.",
    source === "codex"
      ? "- In Codex, leave normal capture and memory lifecycle to the integration. For an explicit memory correction request, use the host's supported update mechanism rather than editing generated indexes or lifecycle state."
      : "- Do not manually operate the memory lifecycle or write memories during normal conversations.",
    "- Treat injected memory as background context and use it only when relevant to the current request.",
    "- Treat `<memmy_memory_context>` as historical memory only and `<current_user_request>` as the authoritative current task.",
    "- Do not store secrets, tokens, private keys, raw credentials, or bulky logs.",
    "- If the memory service is unavailable, continue the task without inventing memory.",
    "",
    "## On-Demand Lookup",
    "",
    source === "codex"
      ? "In Codex, follow the native-memory policy in `~/.codex/AGENTS.md`. Reuse current conversation and native memory already available; read a pointed native source only for a missing fact. Use Memmy for a specific remaining shared-history gap or an explicit request, without mechanically searching both stores:"
      : "Use the CLI only when the current request needs memory beyond the context already injected by the integration:",
    "",
    "```bash",
    `memmy-memory search "query text" --source ${source}`,
    `memmy-memory get "$MEMORY_ID" --source ${source}`,
    "```",
    "",
    "Search only when prior preferences, project decisions, recurring issues, or reusable procedures are likely relevant. Read a specific memory only when search results or injected context provide its id and more detail is needed.",
    ...(source === "codex" ? [
      "",
      "Check the project/environment, observation date, and superseding corrections before reusing operational state. A later retrieval or summary does not make old evidence current. Keep unknown state explicit.",
      "",
      "In Codex, skill records from other assistants describe historical setups, not installed Codex capabilities. Select tools and skills from the current enabled catalog. Keep stable guidance in AGENTS.md, procedures in skills, and changing project state in dated source records."
    ] : [])
  ].join("\n");
}
