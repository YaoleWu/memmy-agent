# Preference scope and JSON model compatibility

An utterance such as “以后不要问我，我在开车” describes a temporary circumstance; “以后不要用这个邮箱” lacks an identifiable target. Neither should become a standalone user preference or a reusable L2 policy. Preserve the original L1 turn so an explicit history search can still recover it. A complete conditional preference, such as avoiding computer operations while driving, remains eligible.

`userMemoryContextIssue` supplies a conservative check for these observed cases. The classifier, model-driven capture decision and automatic user-memory injection share it. This is a bounded guard, not a general pronoun resolver or a replacement for relevance filtering. An ambiguous clause can suppress promotion of the complete turn; its historical evidence remains available.

Some OpenAI-compatible models fill `replacement` even for `create` or `confirm`. Ignore that unused field and preserve the original USER source. A real `correct` action still requires a known candidate target and nonempty replacement. Invalid actions and a target attached to `create` remain errors.

Injected Markdown uses the existing shared secret redactor. This does not migrate, rewrite or delete the stored historical source. Automatic injection omits incomplete or temporary user preferences; explicit search still returns their historical wording.

Validation for the local integration covered the installed Desktop 1.1.1 capture and retrieval functions, actual `mlamp/qwen3.8-flash-next` JSON calls, valid and invalid corrections, preserved conditional preferences, and live recall through the Memory API. The local integration adapts the same changes to the installed runtime without changing the signed application. The TypeScript changes were transpiled; a full application build and an upstream release were not performed.
