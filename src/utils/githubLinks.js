export const repositoryUrl = 'https://github.com/SeanCrawfordDell/DellSupportoolRepository';

export const githubIssueFormUrl = (type, toolName = '') => {
  const template = type === 'bug' ? 'bug_report.yml' : 'feature_request.yml';
  const prefix = type === 'bug' ? 'Bug' : 'Feature request';
  const title = toolName ? `${prefix}: ${toolName}` : prefix;

  return `${repositoryUrl}/issues/new?template=${template}&title=${encodeURIComponent(title)}`;
};

export const githubIssuesUrl = `${repositoryUrl}/issues`;

export const githubStatusChangeUrl = `${repositoryUrl}/issues/new?template=tool_status_change.yml`;

export const githubNewToolRequestUrl = `${repositoryUrl}/issues/new?template=new_tool.md&title=${encodeURIComponent('New tool request')}`;

export const githubToolUpdateUrl = (tool) => {
  const body = `## Tool update

- **Tool ID**: ${tool.id}
- **Team**: ${tool.team}
- **Region Created**: ${tool.regionCreated || 'North America'}
- **Category**: ${tool.category || 'Other'}
- **Status**: ${tool.status}
- **Progress**: ${tool.progress}%
- **Repository**: ${tool.repository || 'Not provided'}
- **Documentation**: ${tool.documentation || 'Not provided'}
- **Tags**: ${(Array.isArray(tool.tags) ? tool.tags.join(', ') : tool.tags) || 'Not provided'}

## Description

${tool.description}

## What it does

${tool.whatItDoes}

## Value proposition

${tool.valueProposition}`;

  return `${repositoryUrl}/issues/new?template=tool_update.md&title=${encodeURIComponent(`Catalog update: ${tool.name}`)}&body=${encodeURIComponent(body)}`;
};
