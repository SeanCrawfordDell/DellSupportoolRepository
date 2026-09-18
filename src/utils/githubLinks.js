const repositoryUrl = 'https://github.com/SeanCrawfordDell/DellSupportoolRepository';

export const githubIssueFormUrl = (type, toolName = '') => {
  const template = type === 'bug' ? 'bug_report.yml' : 'feature_request.yml';
  const prefix = type === 'bug' ? 'Bug' : 'Feature request';
  const title = toolName ? `${prefix}: ${toolName}` : prefix;

  return `${repositoryUrl}/issues/new?template=${template}&title=${encodeURIComponent(title)}`;
};

export const githubStatusChangeUrl = `${repositoryUrl}/issues/new?template=tool_status_change.yml`;

export const githubNewToolUrl = (tool) => {
  const body = `## Tool details

- **Owner**: ${tool.owner}
- **Team**: ${tool.team}
- **Initial status**: ${tool.status}
- **Initial progress**: ${tool.progress}%
- **Repository**: ${tool.repository}
- **Documentation**: ${tool.documentation || 'Not provided'}
- **Tags**: ${tool.tags || 'Not provided'}

## Short description

${tool.description}

## What it does

${tool.whatItDoes}

## Value proposition

${tool.valueProposition}`;

  return `${repositoryUrl}/issues/new?template=new_tool.md&title=${encodeURIComponent(`New tool: ${tool.name}`)}&body=${encodeURIComponent(body)}`;
};
