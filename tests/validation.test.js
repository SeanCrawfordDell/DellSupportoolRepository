import test from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { mkdtempSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { loadTools } from '../src/utils/dataHelpers.js';

test('build validation rejects duplicate IDs before broken detail links ship', async () => {
  const tools = structuredClone(await loadTools());
  tools[1].id = tools[0].id;
  const directory = mkdtempSync(join(tmpdir(), 'catalog-test-'));
  try {
    const file = join(directory, 'tools.json');
    writeFileSync(file, JSON.stringify({ tools }));
    const result = spawnSync(process.execPath, ['scripts/validate-catalog.js', file], { encoding: 'utf8' });
    assert.equal(result.status, 1);
    assert.match(result.stderr, /Duplicate tool id: tool-001/);
  } finally {
    rmSync(directory, { recursive: true });
  }
});
