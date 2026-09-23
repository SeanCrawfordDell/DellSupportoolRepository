import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { loadTools, filterTools } from '../src/utils/dataHelpers.js';

test('catalog edits reach the loader instead of a separate embedded copy', async () => {
  const source = JSON.parse(await readFile(new URL('../src/data/tools.json', import.meta.url)));
  assert.deepEqual(await loadTools(), source.tools);
});

test('existing detail links retain their identities during reconciliation', async () => {
  const tools = await loadTools();
  for (const [id, name] of [['tool-001', 'Dell ProSupport ToolBox'], ['tool-007', 'iDRAC Connection Manager'], ['tool-008', 'KeyRelay'], ['tool-017', 'CluChk'], ['tool-018', 'DriFT']]) {
    assert.equal(tools.find(tool => tool.id === id)?.name, name);
  }
  assert.equal(new Set(tools.map(tool => tool.id)).size, tools.length);
});

test('recent owner corrections and SLIC survive removal of the legacy catalog', async () => {
  const tools = await loadTools();
  for (const name of ['DART', 'TALI', 'iDRAC Connection Manager']) {
    assert.equal(tools.find(tool => tool.name === name)?.owner, 'Jim Gandy');
  }
  const slic = filterTools(tools, { search: 'SLIC' })[0];
  assert.equal(slic?.name, 'SLIC');
  assert.equal(slic.status, 'released');
  assert.equal(slic.progress, 100);
  assert.equal(new URL(slic.repository).pathname, '/DellProSupportGse/Tools');
  assert.notEqual(slic.id, 'tool-008');
});

test('catalog supplies valid report estimates without display-name lookup failures', async () => {
  const tools = await loadTools();
  const idrac = tools.find(tool => tool.name === 'iDRAC Connection Manager');
  assert.equal(idrac.minutesSavedPerRun, 10);
  for (const tool of tools) {
    assert.ok(Number.isFinite(tool.minutesSavedPerRun) && tool.minutesSavedPerRun >= 0);
    assert.ok(tool.category && tool.regionCreated && tool.telemetryName);
  }
});

test('SLIC and DriFT are released at full completion', async () => {
  const tools = await loadTools();
  for (const name of ['SLIC', 'DriFT']) {
    const tool = tools.find(item => item.name === name);
    assert.equal(tool?.status, 'released', `${name} should be released`);
    assert.equal(tool?.progress, 100, `${name} should show full completion`);
  }
});

test('DriFT description explains its Dell driver and firmware validation workflow', async () => {
  const drift = (await loadTools()).find(item => item.name === 'DriFT');
  assert.match(drift.description, /driver and firmware validation.*Windows and Azure Local servers/i);
  for (const detail of ['recommended code currency', 'direct links to the appropriate Dell packages', 'HTML report']) {
    assert.ok(drift.whatItDoes.toLowerCase().includes(detail.toLowerCase()), `DriFT workflow should mention ${detail}`);
  }
  for (const detail of ['10 to 20 minutes', 'less than 2 minutes', 'security vulnerabilities', 'third-party software']) {
    assert.ok(drift.valueProposition.toLowerCase().includes(detail.toLowerCase()), `DriFT value proposition should mention ${detail}`);
  }
  assert.equal(drift.status, 'released');
  assert.equal(drift.progress, 100);
});
