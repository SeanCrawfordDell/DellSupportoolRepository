// Inline data for production build
const toolsData = [
  {
    "id": "tool-001",
    "name": "Cloud Resource Optimizer",
    "description": "Automated tool for optimizing cloud resource allocation and cost management across multiple cloud providers.",
    "whatItDoes": "Analyzes cloud infrastructure usage patterns, identifies over-provisioned resources, and provides automated recommendations for cost optimization. Supports AWS, Azure, and GCP with real-time monitoring and alerting.",
    "valueProposition": "Reduces cloud spending by up to 30% through intelligent resource optimization, provides visibility into cloud costs across teams, and automates remediation of inefficient resource allocation.",
    "status": "released",
    "progress": 100,
    "owner": "Sarah Chen",
    "team": "Cloud",
    "repository": "https://github.com/dell/cloud-resource-optimizer",
    "documentation": "https://docs.dell.com/cloud-optimizer",
    "createdAt": "2024-01-15",
    "updatedAt": "2024-08-20",
    "roadmap": [
      {
        "feature": "Multi-cloud cost forecasting",
        "status": "completed",
        "targetDate": "2024-06-01",
        "priority": "high"
      },
      {
        "feature": "Automated resource scaling",
        "status": "in-progress",
        "targetDate": "2024-12-01",
        "priority": "high"
      },
      {
        "feature": "Integration with ServiceNow",
        "status": "planned",
        "targetDate": "2025-03-01",
        "priority": "medium"
      }
    ],
    "tags": ["automation", "cost-optimization", "monitoring", "multi-cloud"]
  },
  {
    "id": "tool-002",
    "name": "Compute Capacity Planner",
    "description": "Tool for planning and forecasting compute capacity needs based on historical usage and growth patterns.",
    "whatItDoes": "Collects historical compute usage data, applies machine learning models to forecast future capacity needs, and provides recommendations for hardware procurement and cloud resource allocation.",
    "valueProposition": "Helps prevent capacity shortages, reduces over-provisioning costs, and provides data-driven insights for capacity planning decisions.",
    "status": "development",
    "progress": 65,
    "owner": "Michael Rodriguez",
    "team": "Compute",
    "repository": "https://github.com/dell/compute-capacity-planner",
    "documentation": "https://docs.dell.com/compute-planner",
    "createdAt": "2024-03-10",
    "updatedAt": "2024-09-10",
    "roadmap": [
      {
        "feature": "ML model training pipeline",
        "status": "completed",
        "targetDate": "2024-07-01",
        "priority": "high"
      },
      {
        "feature": "Dashboard visualization",
        "status": "in-progress",
        "targetDate": "2024-10-15",
        "priority": "high"
      },
      {
        "feature": "API integration",
        "status": "planned",
        "targetDate": "2024-11-30",
        "priority": "medium"
      }
    ],
    "tags": ["forecasting", "capacity-planning", "machine-learning", "analytics"]
  },
  {
    "id": "tool-003",
    "name": "Platform Health Monitor",
    "description": "Comprehensive monitoring solution for platform health metrics and alerting.",
    "whatItDoes": "Monitors platform health across multiple dimensions including performance, availability, security, and compliance. Provides real-time dashboards, automated alerting, and incident response integration.",
    "valueProposition": "Improves platform reliability through proactive monitoring, reduces mean time to resolution (MTTR) with automated alerting, and ensures compliance with security and operational standards.",
    "status": "testing",
    "progress": 85,
    "owner": "Emily Watson",
    "team": "Platform",
    "repository": "https://github.com/dell/platform-health-monitor",
    "documentation": "https://docs.dell.com/platform-monitor",
    "createdAt": "2024-02-20",
    "updatedAt": "2024-09-12",
    "roadmap": [
      {
        "feature": "Core monitoring infrastructure",
        "status": "completed",
        "targetDate": "2024-05-15",
        "priority": "high"
      },
      {
        "feature": "Alerting system",
        "status": "completed",
        "targetDate": "2024-07-01",
        "priority": "high"
      },
      {
        "feature": "Custom dashboard builder",
        "status": "in-progress",
        "targetDate": "2024-10-01",
        "priority": "medium"
      },
      {
        "feature": "Mobile app",
        "status": "planned",
        "targetDate": "2025-01-15",
        "priority": "low"
      }
    ],
    "tags": ["monitoring", "alerting", "health-checks", "dashboard"]
  },
  {
    "id": "tool-004",
    "name": "Deployment Automation Suite",
    "description": "End-to-end automation tool for application deployment across cloud and on-premises environments.",
    "whatItDoes": "Automates the deployment pipeline from code commit to production, including build, test, and deployment phases. Supports multiple deployment strategies including blue-green, canary, and rolling updates.",
    "valueProposition": "Reduces deployment time by 70%, minimizes deployment errors through automation, and provides audit trails for compliance requirements.",
    "status": "released",
    "progress": 100,
    "owner": "David Kim",
    "team": "Platform",
    "repository": "https://github.com/dell/deployment-automation",
    "documentation": "https://docs.dell.com/deployment-automation",
    "createdAt": "2023-11-01",
    "updatedAt": "2024-08-15",
    "roadmap": [
      {
        "feature": "Kubernetes support",
        "status": "completed",
        "targetDate": "2024-03-01",
        "priority": "high"
      },
      {
        "feature": "Terraform integration",
        "status": "completed",
        "targetDate": "2024-06-01",
        "priority": "high"
      },
      {
        "feature": "GitOps workflow",
        "status": "in-progress",
        "targetDate": "2024-11-01",
        "priority": "high"
      }
    ],
    "tags": ["automation", "deployment", "devops", "cicd"]
  },
  {
    "id": "tool-005",
    "name": "Security Compliance Scanner",
    "description": "Automated security and compliance scanning tool for cloud infrastructure and applications.",
    "whatItDoes": "Scans cloud infrastructure and applications for security vulnerabilities and compliance issues against industry standards (CIS, NIST, SOC2). Provides automated remediation suggestions and compliance reporting.",
    "valueProposition": "Reduces security risk through continuous scanning, ensures compliance with regulatory requirements, and provides actionable remediation guidance.",
    "status": "planning",
    "progress": 25,
    "owner": "Jennifer Lee",
    "team": "Cloud",
    "repository": "https://github.com/dell/security-scanner",
    "documentation": null,
    "createdAt": "2024-08-01",
    "updatedAt": "2024-09-05",
    "roadmap": [
      {
        "feature": "Core scanning engine",
        "status": "in-progress",
        "targetDate": "2024-10-15",
        "priority": "high"
      },
      {
        "feature": "Compliance rule library",
        "status": "planned",
        "targetDate": "2024-12-01",
        "priority": "high"
      },
      {
        "feature": "Reporting dashboard",
        "status": "planned",
        "targetDate": "2025-02-01",
        "priority": "medium"
      }
    ],
    "tags": ["security", "compliance", "scanning", "automation"]
  }
];

const requestsData = [
  {
    "id": "req-001",
    "title": "Add support for Oracle Cloud",
    "description": "We need to add Oracle Cloud Infrastructure (OCI) support to the Cloud Resource Optimizer to provide comprehensive multi-cloud coverage for our enterprise clients.",
    "type": "feature",
    "toolId": "tool-001",
    "requester": "John Smith",
    "email": "john.smith@dell.com",
    "status": "in-review",
    "priority": "high",
    "createdAt": "2024-09-01",
    "updatedAt": "2024-09-10"
  },
  {
    "id": "req-002",
    "title": "Improve ML forecasting accuracy",
    "description": "The current ML model for capacity forecasting has an accuracy of 85%. We need to improve this to at least 95% by incorporating additional data sources and refining the algorithm.",
    "type": "improvement",
    "toolId": "tool-002",
    "requester": "Lisa Johnson",
    "email": "lisa.johnson@dell.com",
    "status": "approved",
    "priority": "high",
    "createdAt": "2024-08-15",
    "updatedAt": "2024-09-05"
  },
  {
    "id": "req-003",
    "title": "Add mobile push notifications",
    "description": "Users need to receive push notifications on their mobile devices when critical platform health issues are detected. This will improve response times for incidents.",
    "type": "feature",
    "toolId": "tool-003",
    "requester": "Mark Davis",
    "email": "mark.davis@dell.com",
    "status": "planned",
    "priority": "medium",
    "createdAt": "2024-09-08",
    "updatedAt": "2024-09-08"
  },
  {
    "id": "req-004",
    "title": "Add support for AWS Lambda",
    "description": "The Deployment Automation Suite should support deploying serverless functions to AWS Lambda, in addition to the current container and VM support.",
    "type": "feature",
    "toolId": "tool-004",
    "requester": "Sarah Wilson",
    "email": "sarah.wilson@dell.com",
    "status": "in-progress",
    "priority": "medium",
    "createdAt": "2024-08-20",
    "updatedAt": "2024-09-12"
  },
  {
    "id": "req-005",
    "title": "Add HIPAA compliance rules",
    "description": "We need to add HIPAA compliance scanning rules to the Security Compliance Scanner for healthcare clients who need to ensure regulatory compliance.",
    "type": "feature",
    "toolId": "tool-005",
    "requester": "Robert Brown",
    "email": "robert.brown@dell.com",
    "status": "planned",
    "priority": "high",
    "createdAt": "2024-09-10",
    "updatedAt": "2024-09-10"
  }
];

const configData = {
  "appName": "ISG Tool Tracker",
  "version": "1.0.0",
  "description": "Tracking tool for ISG Cloud, Compute, and Platform support engineers",
  "teams": ["Cloud", "Compute", "Platform"],
  "statuses": ["planning", "development", "testing", "released", "maintenance"],
  "requestTypes": ["feature", "improvement", "bug"],
  "priorities": ["low", "medium", "high"]
};

// Data loading utilities (inline version for production)
export const loadTools = async () => {
  return toolsData;
};

export const loadFeatureRequests = async () => {
  return requestsData;
};

export const loadConfig = async () => {
  return configData;
};

// Tool filtering and sorting
export const filterTools = (tools, filters) => {
  return tools.filter(tool => {
    if (filters.search && !tool.name.toLowerCase().includes(filters.search.toLowerCase()) &&
        !tool.description.toLowerCase().includes(filters.search.toLowerCase())) {
      return false;
    }
    if (filters.status && tool.status !== filters.status) {
      return false;
    }
    if (filters.team && tool.team !== filters.team) {
      return false;
    }
    if (filters.tags && filters.tags.length > 0) {
      const hasTag = filters.tags.some(tag => tool.tags.includes(tag));
      if (!hasTag) return false;
    }
    return true;
  });
};

export const sortTools = (tools, sortBy) => {
  const sorted = [...tools];
  switch (sortBy) {
    case 'name':
      sorted.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'date':
      sorted.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
      break;
    case 'progress':
      sorted.sort((a, b) => b.progress - a.progress);
      break;
    default:
      break;
  }
  return sorted;
};

// Feature request filtering
export const filterRequests = (requests, filters) => {
  return requests.filter(request => {
    if (filters.search && !request.title.toLowerCase().includes(filters.search.toLowerCase())) {
      return false;
    }
    if (filters.status && request.status !== filters.status) {
      return false;
    }
    if (filters.type && request.type !== filters.type) {
      return false;
    }
    if (filters.priority && request.priority !== filters.priority) {
      return false;
    }
    if (filters.toolId && request.toolId !== filters.toolId) {
      return false;
    }
    return true;
  });
};

// Status color mapping
export const getStatusColor = (status) => {
  const colors = {
    idea: 'bg-gray-100 text-gray-800',
    planning: 'bg-blue-100 text-blue-800',
    development: 'bg-yellow-100 text-yellow-800',
    testing: 'bg-purple-100 text-purple-800',
    released: 'bg-green-100 text-green-800',
    maintenance: 'bg-indigo-100 text-indigo-800'
  };
  return colors[status] || 'bg-gray-100 text-gray-800';
};

export const getPriorityColor = (priority) => {
  const colors = {
    low: 'bg-gray-100 text-gray-800',
    medium: 'bg-yellow-100 text-yellow-800',
    high: 'bg-red-100 text-red-800'
  };
  return colors[priority] || 'bg-gray-100 text-gray-800';
};

// Date formatting
export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};

// Statistics calculations
export const calculateStats = (tools) => {
  const stats = {
    total: tools.length,
    byStatus: {},
    byTeam: {},
    inDevelopment: 0,
    released: 0
  };

  tools.forEach(tool => {
    // By status
    stats.byStatus[tool.status] = (stats.byStatus[tool.status] || 0) + 1;
    
    // By team
    stats.byTeam[tool.team] = (stats.byTeam[tool.team] || 0) + 1;
    
    // Development count
    if (tool.status === 'development' || tool.status === 'testing') {
      stats.inDevelopment++;
    }
    
    // Released count
    if (tool.status === 'released') {
      stats.released++;
    }
  });

  return stats;
};