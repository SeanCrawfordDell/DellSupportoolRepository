import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("every catalog tool has complete, actionable guidance", async () => {
  const { TOOL_GUIDANCE } = await import("../assets/tool-guidance.js");
  const expectedToolIds = [
    "tool-001", "tool-002", "tool-003", "tool-004", "tool-005", "tool-006",
    "tool-007", "tool-008", "tool-009", "tool-010", "tool-011", "tool-012",
    "tool-013", "tool-014", "tool-015", "tool-016", "tool-017",
  ];

  assert.deepEqual(Object.keys(TOOL_GUIDANCE).sort(), expectedToolIds);

  for (const [toolId, guidance] of Object.entries(TOOL_GUIDANCE)) {
    assert.ok(guidance.whenToUse.length >= 2, `${toolId} needs at least two use cases`);
    assert.ok(guidance.examples.length >= 2, `${toolId} needs at least two examples`);
    assert.equal("demo" in guidance, false, `${toolId} should not include a demo walkthrough`);
  }
});

test("the page requests the current guidance assets without an old cache entry", async () => {
  const page = await readFile(new URL("../index.html", import.meta.url), "utf8");

  assert.match(page, /tool-guidance\.css\?v=f2e0782/);
  assert.match(page, /tool-guidance\.js\?v=f2e0782/);
});
