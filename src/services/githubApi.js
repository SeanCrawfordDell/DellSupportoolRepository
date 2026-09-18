/**
 * GitHub API Service for Feature Request Persistence
 * Legacy GitHub API helper. New submissions use GitHub Issue Forms so this
 * browser application never needs a GitHub credential.
 */

const CONFIG = {
  owner: import.meta.env.VITE_GITHUB_REPO_OWNER || 'SeanCrawfordDell',
  repo: import.meta.env.VITE_GITHUB_REPO_NAME || 'DellSupportoolRepository',
  baseUrl: 'https://api.github.com'
};

// Label mappings for status and priority
const STATUS_LABELS = {
  pending: 'status:pending',
  approved: 'status:approved',
  'in-progress': 'status:in-progress',
  completed: 'status:completed',
  declined: 'status:declined'
};

const PRIORITY_LABELS = {
  low: 'priority:low',
  medium: 'priority:medium',
  high: 'priority:high'
};

const TYPE_LABELS = {
  'feature-request': 'type:feature-request',
  'new-tool': 'type:new-tool',
  'bug-report': 'type:bug-report'
};

/**
 * Check if GitHub API is configured
 */
export function isConfigured() {
  return false;
}

/**
 * Get all issues from the repository
 */
export async function getIssues() {
  if (!isConfigured()) {
    console.warn('GitHub API not configured');
    return [];
  }

  try {
    const response = await fetch(
      `${CONFIG.baseUrl}/repos/${CONFIG.owner}/${CONFIG.repo}/issues?state=all&per_page=100`,
      {
        headers: {
          'Authorization': `token ${CONFIG.token}`,
          'Accept': 'application/vnd.github.v3+json'
        }
      }
    );

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const issues = await response.json();
    return issues;
  } catch (error) {
    console.error('Error fetching issues:', error);
    throw error;
  }
}

/**
 * Create a new issue
 */
export async function createIssue(request) {
  if (!isConfigured()) {
    console.warn('GitHub API not configured');
    return null;
  }

  const labels = [
    TYPE_LABELS[request.type] || TYPE_LABELS['feature-request'],
    STATUS_LABELS[request.status] || STATUS_LABELS.pending,
    PRIORITY_LABELS[request.priority] || PRIORITY_LABELS.medium
  ];

  const body = buildIssueBody(request);

  try {
    const response = await fetch(
      `${CONFIG.baseUrl}/repos/${CONFIG.owner}/${CONFIG.repo}/issues`,
      {
        method: 'POST',
        headers: {
          'Authorization': `token ${CONFIG.token}`,
          'Accept': 'application/vnd.github.v3+json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title: request.title,
          body: body,
          labels: labels
        })
      }
    );

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const issue = await response.json();
    return issue;
  } catch (error) {
    console.error('Error creating issue:', error);
    throw error;
  }
}

/**
 * Update an existing issue
 */
export async function updateIssue(issueNumber, request) {
  if (!isConfigured()) {
    console.warn('GitHub API not configured');
    return null;
  }

  const labels = [
    TYPE_LABELS[request.type] || TYPE_LABELS['feature-request'],
    STATUS_LABELS[request.status] || STATUS_LABELS.pending,
    PRIORITY_LABELS[request.priority] || PRIORITY_LABELS.medium
  ];

  const body = buildIssueBody(request);

  try {
    const response = await fetch(
      `${CONFIG.baseUrl}/repos/${CONFIG.owner}/${CONFIG.repo}/issues/${issueNumber}`,
      {
        method: 'PATCH',
        headers: {
          'Authorization': `token ${CONFIG.token}`,
          'Accept': 'application/vnd.github.v3+json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          title: request.title,
          body: body,
          labels: labels,
          state: request.status === 'completed' ? 'closed' : 'open'
        })
      }
    );

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const issue = await response.json();
    return issue;
  } catch (error) {
    console.error('Error updating issue:', error);
    throw error;
  }
}

/**
 * Add a comment to an issue
 */
export async function addComment(issueNumber, comment) {
  if (!isConfigured()) {
    console.warn('GitHub API not configured');
    return null;
  }

  try {
    const response = await fetch(
      `${CONFIG.baseUrl}/repos/${CONFIG.owner}/${CONFIG.repo}/issues/${issueNumber}/comments`,
      {
        method: 'POST',
        headers: {
          'Authorization': `token ${CONFIG.token}`,
          'Accept': 'application/vnd.github.v3+json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          body: comment
        })
      }
    );

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const commentData = await response.json();
    return commentData;
  } catch (error) {
    console.error('Error adding comment:', error);
    throw error;
  }
}

/**
 * Close an issue
 */
export async function closeIssue(issueNumber) {
  if (!isConfigured()) {
    console.warn('GitHub API not configured');
    return null;
  }

  try {
    const response = await fetch(
      `${CONFIG.baseUrl}/repos/${CONFIG.owner}/${CONFIG.repo}/issues/${issueNumber}`,
      {
        method: 'PATCH',
        headers: {
          'Authorization': `token ${CONFIG.token}`,
          'Accept': 'application/vnd.github.v3+json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          state: 'closed'
        })
      }
    );

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const issue = await response.json();
    return issue;
  } catch (error) {
    console.error('Error closing issue:', error);
    throw error;
  }
}

/**
 * Build issue body from request data
 */
function buildIssueBody(request) {
  return `## Description
${request.description}

## Request Details
- **Type**: ${request.type}
- **Priority**: ${request.priority}
- **Status**: ${request.status}
- **Requester**: ${request.requester}
- **Email**: ${request.email}
- **Tool ID**: ${request.toolId || 'N/A'}
- **Created**: ${request.createdAt}
- **Updated**: ${request.updatedAt}

${request.assignedTo ? `- **Assigned To**: ${request.assignedTo}` : ''}

${request.notes ? `## Notes
${request.notes}` : ''}

---
*This issue is synced with the ISG Tools Catalog*`;
}

/**
 * Parse issue to request format
 */
export function parseIssueToRequest(issue) {
  const labels = issue.labels.map(l => l.name);
  
  const getStatusFromLabels = () => {
    for (const [key, value] of Object.entries(STATUS_LABELS)) {
      if (labels.includes(value)) return key;
    }
    return 'pending';
  };

  const getPriorityFromLabels = () => {
    for (const [key, value] of Object.entries(PRIORITY_LABELS)) {
      if (labels.includes(value)) return key;
    }
    return 'medium';
  };

  const getTypeFromLabels = () => {
    for (const [key, value] of Object.entries(TYPE_LABELS)) {
      if (labels.includes(value)) return key;
    }
    return 'feature-request';
  };

  // Parse tool ID from body if present
  const toolIdMatch = issue.body?.match(/- \*\*Tool ID\*\*: ([^\n]+)/);
  const toolId = toolIdMatch ? toolIdMatch[1].trim() : null;

  // Parse assigned to from body if present
  const assignedToMatch = issue.body?.match(/- \*\*Assigned To\*\*: ([^\n]+)/);
  const assignedTo = assignedToMatch ? assignedToMatch[1].trim() : null;

  // Parse notes from body if present
  const notesMatch = issue.body?.match(/## Notes\n([\s\S]+?)(?:\n---|$)/);
  const notes = notesMatch ? notesMatch[1].trim() : null;

  return {
    id: `req-${issue.number}`,
    title: issue.title,
    description: issue.body?.match(/## Description\n([\s\S]+?)\n## Request Details/)?.[1]?.trim() || issue.body,
    type: getTypeFromLabels(),
    toolId: toolId,
    requester: issue.body?.match(/- \*\*Requester\*\*: ([^\n]+)/)?.[1]?.trim() || 'Unknown',
    email: issue.body?.match(/- \*\*Email\*\*: ([^\n]+)/)?.[1]?.trim() || '',
    status: getStatusFromLabels(),
    priority: getPriorityFromLabels(),
    createdAt: issue.created_at?.split('T')[0] || new Date().toISOString().split('T')[0],
    updatedAt: issue.updated_at?.split('T')[0] || new Date().toISOString().split('T')[0],
    assignedTo: assignedTo,
    notes: notes,
    githubIssueNumber: issue.number,
    githubUrl: issue.html_url
  };
}
