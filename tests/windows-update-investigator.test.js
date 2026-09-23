import test from 'node:test';
import assert from 'node:assert/strict';
import { calculateStats, getStatusColor, loadTools } from '../src/utils/dataHelpers.js';
import { githubToolUpdateUrl } from '../src/utils/githubLinks.js';

test('catalog records Windows Update Failure Investigator as an APJ internal-testing prototype', async () => {
  const tools = await loadTools();
  const tool = tools.find(item => item.name === 'Windows Update Failure Investigator');

  assert.ok(tool, 'tool should be present in the catalog');
  assert.equal(tool.id, 'tool-020');
  assert.equal(tool.team, 'APJ Microsoft Team');
  assert.equal(tool.regionCreated, 'APJ');
  assert.equal(tool.status, 'internal-testing');
  assert.equal(tool.progress, 'Working Prototype');
  assert.equal(tool.repository, '');
  assert.equal(tool.documentation, '');
  assert.deepEqual(tool.tags, [
    'Windows Update', 'Dell TSS', 'Devin CLI', 'PowerShell', 'CBS', 'DISM',
    'Windows Server', 'Log Analysis', 'Troubleshooting'
  ]);
  assert.match(tool.description, /AI-assisted PowerShell tool/);
  assert.match(tool.whatItDoes, /complete Windows Update TSS ZIP file/);
  assert.match(tool.valueProposition, /evidence-backed remediation and verification guidance/);
});

test('Internal Testing appears as a distinct status and counts as testing work', async () => {
  const tool = (await loadTools()).find(item => item.name === 'Windows Update Failure Investigator');

  assert.equal(getStatusColor(tool.status), 'bg-purple-100 text-purple-800');
  assert.deepEqual(calculateStats([tool]), {
    total: 1,
    byStatus: { 'internal-testing': 1 },
    inDevelopment: 1,
    released: 0,
    testing: 1
  });
});

test('tool update requests show named progress stages without a percent sign', async () => {
  const tool = (await loadTools()).find(item => item.name === 'Windows Update Failure Investigator');
  const body = new URL(githubToolUpdateUrl(tool)).searchParams.get('body');

  assert.match(body, /\*\*Status\*\*: Internal Testing/);
  assert.match(body, /\*\*Progress\*\*: Working Prototype/);
  assert.doesNotMatch(body, /Working Prototype%/);
});
