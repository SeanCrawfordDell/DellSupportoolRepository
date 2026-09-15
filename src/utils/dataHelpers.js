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
    "status": "approved",
    "priority": "high",
    "createdAt": "2024-08-15",
    "updatedAt": "2024-09-01"
  },
  {
    "id": "req-002",
    "title": "Mobile app for capacity planning",
    "description": "Create a mobile application that allows executives to view capacity planning forecasts and receive alerts about potential capacity issues.",
    "type": "feature",
    "toolId": "tool-002",
    "requester": "Lisa Johnson",
    "email": "lisa.johnson@dell.com",
    "status": "pending",
    "priority": "medium",
    "createdAt": "2024-09-05",
    "updatedAt": "2024-09-05"
  },
  {
    "id": "req-003",
    "title": "Integration with Slack for alerts",
    "description": "Add Slack integration to the Platform Health Monitor to send alerts directly to engineering channels for faster incident response.",
    "type": "feature",
    "toolId": "tool-003",
    "requester": "Mike Brown",
    "email": "mike.brown@dell.com",
    "status": "in-progress",
    "priority": "high",
    "createdAt": "2024-08-20",
    "updatedAt": "2024-09-10"
  },
  {
    "id": "req-004",
    "title": "New tool: Backup Automation Manager",
    "description": "We need a centralized tool to manage backup policies across all our cloud and on-premises environments with automated scheduling and monitoring.",
    "type": "new-tool",
    "toolId": null,
    "requester": "Sarah Davis",
    "email": "sarah.davis@dell.com",
    "status": "pending",
    "priority": "high",
    "createdAt": "2024-09-10",
    "updatedAt": "2024-09-10"
  },
  {
    "id": "req-005",
    "title": "Performance benchmarking dashboard",
    "description": "Add a performance benchmarking feature to compare deployment times and resource utilization across different environments and regions.",
    "type": "feature",
    "toolId": "tool-004",
    "requester": "Tom Wilson",
    "email": "tom.wilson@dell.com",
    "status": "approved",
    "priority": "medium",
    "createdAt": "2024-08-25",
    "updatedAt": "2024-09-08"
  },
  {
    "id": "req-006",
    "title": "Fix: False positive security alerts",
    "description": "The Security Compliance Scanner is generating false positives for certain CIS benchmarks that are not applicable to our environment configuration.",
    "type": "bug",
    "toolId": "tool-005",
    "requester": "Alex Martinez",
    "email": "alex.martinez@dell.com",
    "status": "pending",
    "priority": "high",
    "createdAt": "2024-09-12",
    "updatedAt": "2024-09-12"
  }
];

const configData = {
  "site": {
    "title": "ISG Tool Tracker",
    "description": "Tracking tools designed, managed, and created by ISG Cloud, Compute, Platform support engineers",
    "version": "1.0.0"
  },
  "teams": [
    "Cloud",
    "Compute",
    "Platform"
  ],
  "statuses": [
    {
      "value": "idea",
      "label": "Idea",
      "color": "gray"
    },
    {
      "value": "planning",
      "label": "Planning",
      "color": "blue"
    },
    {
      "value": "development",
      "label": "Development",
      "color": "yellow"
    },
    {
      "value": "testing",
      "label": "Testing",
      "color": "purple"
    },
    {
      "value": "released",
      "label": "Released",
      "color": "green"
    },
    {
      "value": "maintenance",
      "label": "Maintenance",
      "color": "indigo"
    }
  ],
  "requestTypes": [
    {
      "value": "feature",
      "label": "Feature Request"
    },
    {
      "value": "new-tool",
      "label": "New Tool"
    },
    {
      "value": "enhancement",
      "label": "Enhancement"
    },
    {
      "value": "bug",
      "label": "Bug Report"
    }
  ],
  "priorities": [
    {
      "value": "low",
      "label": "Low"
    },
    {
      "value": "medium",
      "label": "Medium"
    },
    {
      "value": "high",
      "label": "High"
    }
  ]
};

// Data loading utilities (now using inline data)
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