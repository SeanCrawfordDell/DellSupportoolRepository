// Inline data for production build
const toolsData = [
  {
    "id": "tool-001",
    "name": "Dell ProSupport ToolBox",
    "description": "Central launcher interface for Dell ProSupport utilities and troubleshooting tools.",
    "whatItDoes": "Provides one interface for launching all available Dell ProSupport utilities including log collectors, diagnostic tools, and maintenance scripts for Dell PowerEdge, Windows Server, Hyper-V, and Azure Local environments.",
    "valueProposition": "Simplifies tool access and discovery, reduces time to find the right tool for specific troubleshooting scenarios, and provides a unified entry point for all Dell ProSupport utilities.",
    "status": "released",
    "progress": 100,
    "owner": "Dell ProSupport GSE",
    "team": "Platform",
    "repository": "https://github.com/DellProSupportGse/Tools",
    "documentation": "https://github.com/DellProSupportGse/Tools",
    "createdAt": "2020-01-01",
    "updatedAt": "2024-09-15",
    "roadmap": [
      {
        "feature": "ToolBox launcher",
        "status": "completed",
        "targetDate": "2020-01-01",
        "priority": "high"
      },
      {
        "feature": "Proxy support improvements",
        "status": "completed",
        "targetDate": "2023-06-01",
        "priority": "medium"
      }
    ],
    "tags": ["launcher", "utilities", "powershell", "dell"]
  },
  {
    "id": "tool-002",
    "name": "AzHCIUrlChecker",
    "description": "Connectivity checker for Azure Local endpoints and firewall requirements.",
    "whatItDoes": "Checks connectivity to endpoints required by Azure Local as noted in Microsoft Azure Local documentation firewall requirements. Validates outbound connectivity for Azure Local deployments.",
    "valueProposition": "Quickly identifies firewall, proxy, and outbound connectivity issues that can block Azure Local functionality, reducing troubleshooting time for network-related deployment failures.",
    "status": "released",
    "progress": 100,
    "owner": "Dell ProSupport GSE",
    "team": "Platform",
    "repository": "https://github.com/DellProSupportGse/Tools",
    "documentation": "https://github.com/DellProSupportGse/Tools",
    "createdAt": "2023-01-01",
    "updatedAt": "2024-09-15",
    "roadmap": [
      {
        "feature": "Azure Local endpoint checking",
        "status": "completed",
        "targetDate": "2023-01-01",
        "priority": "high"
      }
    ],
    "tags": ["connectivity", "azure-local", "firewall", "networking"]
  },
  {
    "id": "tool-003",
    "name": "BOILER",
    "description": "CBS and DISM log analyzer for Windows servicing failures and corruption.",
    "whatItDoes": "Analyzes CBS and DISM logs for errors, failures, warnings, failed KBs, language-pack issues, and corruption. Provides suggested remediation when recognized scenarios are detected.",
    "valueProposition": "Dramatically reduces Windows Update and component-store troubleshooting time by automatically identifying root causes and providing specific remediation guidance for common servicing issues.",
    "status": "released",
    "progress": 100,
    "owner": "Dell ProSupport GSE",
    "team": "Platform",
    "repository": "https://github.com/DellProSupportGse/Tools",
    "documentation": "https://github.com/DellProSupportGse/Tools",
    "createdAt": "2022-01-01",
    "updatedAt": "2024-09-15",
    "roadmap": [
      {
        "feature": "CBS/DISM log analysis",
        "status": "completed",
        "targetDate": "2022-01-01",
        "priority": "high"
      },
      {
        "feature": "Failing KB identification",
        "status": "completed",
        "targetDate": "2022-06-01",
        "priority": "high"
      },
      {
        "feature": "Language pack repair guidance",
        "status": "completed",
        "targetDate": "2022-09-01",
        "priority": "medium"
      }
    ],
    "tags": ["windows-update", "servicing", "dism", "troubleshooting"]
  },
  {
    "id": "tool-004",
    "name": "DART",
    "description": "Dell Automated Server Updater for Windows Failover Cluster and HCI/S2D environments.",
    "whatItDoes": "Windows Failover Cluster and HCI/S2D-aware utility that can install Windows Updates and Dell driver/firmware updates. Includes cluster node maintenance workflows and automated reboot management.",
    "valueProposition": "Automates complex update processes for clustered environments, reduces manual intervention and human error, and ensures consistent update application across Dell server infrastructure.",
    "status": "released",
    "progress": 100,
    "owner": "Dell ProSupport GSE",
    "team": "Platform",
    "repository": "https://github.com/DellProSupportGse/Tools",
    "documentation": "https://github.com/DellProSupportGse/Tools",
    "createdAt": "2021-01-01",
    "updatedAt": "2024-09-15",
    "roadmap": [
      {
        "feature": "Cluster-aware updates",
        "status": "completed",
        "targetDate": "2021-01-01",
        "priority": "high"
      },
      {
        "feature": "DSU integration",
        "status": "completed",
        "targetDate": "2021-06-01",
        "priority": "high"
      },
      {
        "feature": "Storage maintenance mode",
        "status": "completed",
        "targetDate": "2022-01-01",
        "priority": "high"
      }
    ],
    "tags": ["updates", "firmware", "drivers", "cluster", "automation"]
  },
  {
    "id": "tool-005",
    "name": "FLEP",
    "description": "Windows event log filter for common server, failover-clustering, and storage events.",
    "whatItDoes": "Filters Windows event logs for common server, failover-clustering, storage, and Storport events. Quickly narrows large event logs to commonly relevant events for troubleshooting.",
    "valueProposition": "Reduces time spent analyzing large event logs by filtering to relevant events, helps identify patterns and issues faster, and focuses troubleshooting efforts on actionable event data.",
    "status": "released",
    "progress": 100,
    "owner": "Dell ProSupport GSE",
    "team": "Platform",
    "repository": "https://github.com/DellProSupportGse/Tools",
    "documentation": "https://github.com/DellProSupportGse/Tools",
    "createdAt": "2022-01-01",
    "updatedAt": "2024-09-15",
    "roadmap": [
      {
        "feature": "Event log filtering",
        "status": "completed",
        "targetDate": "2022-01-01",
        "priority": "high"
      },
      {
        "feature": "Storage event filtering",
        "status": "completed",
        "targetDate": "2022-06-01",
        "priority": "medium"
      }
    ],
    "tags": ["event-logs", "filtering", "troubleshooting", "storage"]
  },
  {
    "id": "tool-006",
    "name": "GetHyperVBottlenecks",
    "description": "Hyper-V performance bottleneck detection tool.",
    "whatItDoes": "Detects potential performance bottlenecks in Hyper-V environments by analyzing system metrics and configuration. Provides interactive prompts to guide performance analysis.",
    "valueProposition": "Identifies Hyper-V performance issues before they impact production, provides actionable insights for optimization, and reduces time spent on performance troubleshooting.",
    "status": "released",
    "progress": 100,
    "owner": "Dell ProSupport GSE",
    "team": "Platform",
    "repository": "https://github.com/DellProSupportGse/Tools",
    "documentation": "https://github.com/DellProSupportGse/Tools",
    "createdAt": "2022-01-01",
    "updatedAt": "2024-09-15",
    "roadmap": [
      {
        "feature": "Hyper-V performance analysis",
        "status": "completed",
        "targetDate": "2022-01-01",
        "priority": "high"
      }
    ],
    "tags": ["hyper-v", "performance", "bottlenecks", "virtualization"]
  },
  {
    "id": "tool-007",
    "name": "iDRAC Connection Manager",
    "description": "PowerShell Windows Forms interface for managing Dell server iDRAC access.",
    "whatItDoes": "GUI utility for organizing Dell servers and simplifying iDRAC GUI and console access. Provides centralized management of multiple iDRAC connections.",
    "valueProposition": "Simplifies management of multiple Dell servers, reduces time spent accessing individual iDRAC interfaces, and provides organized server inventory and quick access.",
    "status": "released",
    "progress": 100,
    "owner": "Dell ProSupport GSE",
    "team": "Platform",
    "repository": "https://github.com/DellProSupportGse/Tools",
    "documentation": "https://github.com/DellProSupportGse/Tools",
    "createdAt": "2021-01-01",
    "updatedAt": "2024-09-15",
    "roadmap": [
      {
        "feature": "iDRAC management GUI",
        "status": "completed",
        "targetDate": "2021-01-01",
        "priority": "high"
      }
    ],
    "tags": ["idrac", "management", "gui", "dell-servers"]
  },
  {
    "id": "tool-008",
    "name": "KeyRelay",
    "description": "GUI utility for sending text to applications that block clipboard paste operations.",
    "whatItDoes": "Sends text to applications that do not allow normal clipboard paste operations. Useful for RDP sessions, secure terminals, and applications with paste restrictions.",
    "valueProposition": "Overcomes paste restrictions in secure environments, reduces manual typing errors, and improves productivity when working with applications that block clipboard access.",
    "status": "released",
    "progress": 100,
    "owner": "Dell ProSupport GSE",
    "team": "Platform",
    "repository": "https://github.com/DellProSupportGse/Tools",
    "documentation": "https://github.com/DellProSupportGse/Tools",
    "createdAt": "2022-01-01",
    "updatedAt": "2024-09-15",
    "roadmap": [
      {
        "feature": "Text relay utility",
        "status": "completed",
        "targetDate": "2022-01-01",
        "priority": "medium"
      }
    ],
    "tags": ["clipboard", "paste", "productivity", "gui"]
  },
  {
    "id": "tool-009",
    "name": "LogCollector",
    "description": "Comprehensive log collection tool for Windows, Dell servers, and supported switches.",
    "whatItDoes": "Collects troubleshooting logs from Windows, Dell servers, and supported switches. Prepares diagnostic data for investigation or support cases.",
    "valueProposition": "Automates log collection process, ensures comprehensive diagnostic data gathering, and reduces time spent preparing data for support cases.",
    "status": "released",
    "progress": 100,
    "owner": "Dell ProSupport GSE",
    "team": "Platform",
    "repository": "https://github.com/DellProSupportGse/Tools",
    "documentation": "https://github.com/DellProSupportGse/Tools",
    "createdAt": "2020-01-01",
    "updatedAt": "2024-09-15",
    "roadmap": [
      {
        "feature": "Windows log collection",
        "status": "completed",
        "targetDate": "2020-01-01",
        "priority": "high"
      },
      {
        "feature": "Dell server log collection",
        "status": "completed",
        "targetDate": "2020-06-01",
        "priority": "high"
      },
      {
        "feature": "Switch log collection",
        "status": "completed",
        "targetDate": "2021-01-01",
        "priority": "medium"
      }
    ],
    "tags": ["logs", "collection", "diagnostics", "troubleshooting"]
  },
  {
    "id": "tool-010",
    "name": "GetShowTech",
    "description": "Dell switch show-tech diagnostic output collection tool.",
    "whatItDoes": "Collects Dell switch show-tech diagnostic output for troubleshooting and support case preparation.",
    "valueProposition": "Simplifies switch diagnostic data collection, ensures comprehensive switch information gathering, and reduces time spent preparing switch data for support.",
    "status": "released",
    "progress": 100,
    "owner": "Dell ProSupport GSE",
    "team": "Platform",
    "repository": "https://github.com/DellProSupportGse/Tools",
    "documentation": "https://github.com/DellProSupportGse/Tools",
    "createdAt": "2021-01-01",
    "updatedAt": "2024-09-15",
    "roadmap": [
      {
        "feature": "Switch show-tech collection",
        "status": "completed",
        "targetDate": "2021-01-01",
        "priority": "medium"
      }
    ],
    "tags": ["switches", "diagnostics", "networking", "dell"]
  },
  {
    "id": "tool-011",
    "name": "SDDC Dell Enhanced",
    "description": "SDDC diagnostic data collection workflow for Azure Stack HCI environments.",
    "whatItDoes": "Runs the SDDC diagnostic data-collection workflow for Azure Stack HCI environments. Collects comprehensive diagnostic information for troubleshooting.",
    "valueProposition": "Automates SDDC diagnostic data collection, ensures comprehensive information gathering for Azure Stack HCI issues, and reduces troubleshooting time.",
    "status": "released",
    "progress": 100,
    "owner": "Dell ProSupport GSE",
    "team": "Platform",
    "repository": "https://github.com/DellProSupportGse/Tools",
    "documentation": "https://github.com/DellProSupportGse/Tools",
    "createdAt": "2022-01-01",
    "updatedAt": "2024-09-15",
    "roadmap": [
      {
        "feature": "SDDC data collection",
        "status": "completed",
        "targetDate": "2022-01-01",
        "priority": "high"
      }
    ],
    "tags": ["sddc", "azure-stack-hci", "diagnostics", "collection"]
  },
  {
    "id": "tool-012",
    "name": "SDDC Offline Dell Enhanced",
    "description": "Offline SDDC diagnostic data collection for environments without internet access.",
    "whatItDoes": "Collects SDDC diagnostic information when the target environment does not have direct internet access. Uses offline workflow for air-gapped environments.",
    "valueProposition": "Enables SDDC diagnostics in air-gapped environments, provides same comprehensive data collection as online version, and supports restricted network scenarios.",
    "status": "released",
    "progress": 100,
    "owner": "Dell ProSupport GSE",
    "team": "Platform",
    "repository": "https://github.com/DellProSupportGse/Tools",
    "documentation": "https://github.com/DellProSupportGse/Tools",
    "createdAt": "2023-01-01",
    "updatedAt": "2024-09-15",
    "roadmap": [
      {
        "feature": "Offline SDDC collection",
        "status": "completed",
        "targetDate": "2023-01-01",
        "priority": "high"
      }
    ],
    "tags": ["sddc", "offline", "air-gapped", "diagnostics"]
  },
  {
    "id": "tool-013",
    "name": "TSR Collector",
    "description": "Dell Technical Support Report collector for cluster nodes via iDRAC.",
    "whatItDoes": "Collects a Dell Technical Support Report (TSRs) from all nodes in a cluster via the iDRAC. Automates TSR collection across multiple cluster nodes.",
    "valueProposition": "Automates TSR collection across cluster nodes, reduces manual intervention, and ensures comprehensive diagnostic data gathering for support cases.",
    "status": "released",
    "progress": 100,
    "owner": "Dell ProSupport GSE",
    "team": "Platform",
    "repository": "https://github.com/DellProSupportGse/Tools",
    "documentation": "https://github.com/DellProSupportGse/Tools",
    "createdAt": "2022-01-01",
    "updatedAt": "2024-09-15",
    "roadmap": [
      {
        "feature": "Cluster TSR collection",
        "status": "completed",
        "targetDate": "2022-01-01",
        "priority": "high"
      }
    ],
    "tags": ["tsr", "cluster", "idrac", "diagnostics"]
  },
  {
    "id": "tool-014",
    "name": "TALI",
    "description": "Test-DellAzureLocalIssues - Azure Local cluster health and configuration checker.",
    "whatItDoes": "Checks Dell Azure Local clusters for a broad set of common configuration, health, storage, networking, service, control-plane, and AKS Arc issues. Comprehensive health validation.",
    "valueProposition": "Proactively identifies Azure Local configuration and health issues before they cause failures, provides comprehensive cluster health assessment, and reduces deployment and operational issues.",
    "status": "released",
    "progress": 100,
    "owner": "Dell ProSupport GSE",
    "team": "Platform",
    "repository": "https://github.com/DellProSupportGse/Tools",
    "documentation": "https://github.com/DellProSupportGse/Tools",
    "createdAt": "2023-01-01",
    "updatedAt": "2024-09-15",
    "roadmap": [
      {
        "feature": "Azure Local health checks",
        "status": "completed",
        "targetDate": "2023-01-01",
        "priority": "high"
      },
      {
        "feature": "Storage health validation",
        "status": "completed",
        "targetDate": "2023-06-01",
        "priority": "high"
      },
      {
        "feature": "Network configuration checks",
        "status": "completed",
        "targetDate": "2023-09-01",
        "priority": "high"
      }
    ],
    "tags": ["azure-local", "health-checks", "validation", "cluster"]
  },
  {
    "id": "tool-015",
    "name": "FLCkr",
    "description": "File-system filter driver altitude checker for Windows troubleshooting.",
    "whatItDoes": "Checks file-system filter driver altitudes to identify potential conflicts or issues with filter driver stack configuration.",
    "valueProposition": "Identifies filter driver conflicts that can cause system instability, helps troubleshoot storage and file system issues, and provides visibility into driver stack configuration.",
    "status": "released",
    "progress": 100,
    "owner": "Dell ProSupport GSE",
    "team": "Platform",
    "repository": "https://github.com/DellProSupportGse/Tools",
    "documentation": "https://github.com/DellProSupportGse/Tools",
    "createdAt": "2022-01-01",
    "updatedAt": "2024-09-15",
    "roadmap": [
      {
        "feature": "Filter driver altitude checking",
        "status": "completed",
        "targetDate": "2022-01-01",
        "priority": "medium"
      }
    ],
    "tags": ["filter-drivers", "file-system", "troubleshooting", "windows"]
  },
  {
    "id": "tool-016",
    "name": "Convert-Etl2Pcap",
    "description": "Windows ETL network trace to PCAP format converter.",
    "whatItDoes": "Converts Windows ETL network traces to PCAP format for analysis with standard network analysis tools like Wireshark.",
    "valueProposition": "Enables analysis of Windows network traces with standard tools, improves network troubleshooting capabilities, and bridges Windows ETL format with industry-standard PCAP.",
    "status": "released",
    "progress": 100,
    "owner": "Dell ProSupport GSE",
    "team": "Platform",
    "repository": "https://github.com/DellProSupportGse/Tools",
    "documentation": "https://github.com/DellProSupportGse/Tools",
    "createdAt": "2023-01-01",
    "updatedAt": "2024-09-15",
    "roadmap": [
      {
        "feature": "ETL to PCAP conversion",
        "status": "completed",
        "targetDate": "2023-01-01",
        "priority": "medium"
      }
    ],
    "tags": ["networking", "etl", "pcap", "wireshark", "troubleshooting"]
  },
  {
    "id": "tool-017",
    "name": "CluChk",
    "description": "Automated validator for Storage Spaces Direct and Azure Local clusters that checks configurations against industry best practices.",
    "whatItDoes": "Scans S2D and Azure Local cluster configurations against Microsoft and Dell best practices, extracts actionable errors and warnings from cluster logs, evaluates storage, networking, and hardware health, and provides guided troubleshooting context for support engineers.",
    "valueProposition": "Significantly reduces mean time to resolution for Dell and Microsoft support teams by automating manual log analysis and configuration checks. It identifies misconfigurations, storage-health risks, and system bottlenecks before they escalate, helping prevent downtime and diagnostic errors.",
    "status": "released",
    "progress": 100,
    "owner": "Microsoft DE",
    "team": "Cloud",
    "repository": "https://github.com/DellProSupportGse/Tools",
    "documentation": "https://github.com/DellProSupportGse/Tools",
    "createdAt": "2026-09-18",
    "updatedAt": "2026-09-18",
    "roadmap": [],
    "tags": ["powershell", "diagnostics", "troubleshooting", "parser", "validation", "s2d", "azure-local"]
  }
];

const requestsData = [
  {
    "id": "req-001",
    "title": "Add GUI to ToolBox",
    "description": "ToolBox should have a graphical user interface instead of just command-line launcher to make it more user-friendly for less technical users.",
    "type": "feature",
    "toolId": "tool-001",
    "requester": "John Smith",
    "email": "john.smith@dell.com",
    "status": "planned",
    "priority": "medium",
    "createdAt": "2024-09-15",
    "updatedAt": "2024-09-15"
  },
  {
    "id": "req-002",
    "title": "Add Azure Stack Hub support to AzHCIUrlChecker",
    "description": "Extend AzHCIUrlChecker to also check connectivity for Azure Stack Hub endpoints, not just Azure Local.",
    "type": "feature",
    "toolId": "tool-002",
    "requester": "Lisa Johnson",
    "email": "lisa.johnson@dell.com",
    "status": "planned",
    "priority": "low",
    "createdAt": "2024-09-15",
    "updatedAt": "2024-09-15"
  },
  {
    "id": "req-003",
    "title": "Add automatic repair to BOILER",
    "description": "BOILER should not just identify issues but also attempt automatic repairs for common Windows Update and component-store issues.",
    "type": "feature",
    "toolId": "tool-003",
    "requester": "Mark Davis",
    "email": "mark.davis@dell.com",
    "status": "planned",
    "priority": "high",
    "createdAt": "2024-09-15",
    "updatedAt": "2024-09-15"
  }
];

const configData = {
  "appName": "ISG Tool Tracker",
  "version": "1.0.0",
  "description": "Tracking tools for Microsoft, PowerEdge, VMware, Linux, and Frontline support engineers",
  "teams": ["Microsoft DE", "PowerEdge DE", "VMware DE", "Linux DE", "Frontline"],
  "statuses": ["planning", "development", "testing", "released", "maintenance"],
  "requestTypes": ["feature", "improvement", "bug"],
  "priorities": ["low", "medium", "high"]
};

// Each tool has one primary purpose so the catalog can provide a focused category filter.
const toolCategories = {
  'tool-001': 'Tool Access',
  'tool-002': 'Connectivity',
  'tool-003': 'Log Analysis',
  'tool-004': 'Updates & Maintenance',
  'tool-005': 'Log Analysis',
  'tool-006': 'Performance Analysis',
  'tool-007': 'Server Management',
  'tool-008': 'Productivity',
  'tool-009': 'Diagnostic Collection',
  'tool-010': 'Diagnostic Collection',
  'tool-011': 'Diagnostic Collection',
  'tool-012': 'Diagnostic Collection',
  'tool-013': 'Diagnostic Collection',
  'tool-014': 'Health & Validation',
  'tool-015': 'Driver Diagnostics',
  'tool-016': 'Network Analysis',
  'tool-017': 'Cluster Diagnostics'
};

const toolTeams = {
  'tool-001': 'Frontline', 'tool-002': 'Microsoft DE', 'tool-003': 'Microsoft DE',
  'tool-004': 'Microsoft DE', 'tool-005': 'Microsoft DE', 'tool-006': 'Microsoft DE',
  'tool-007': 'PowerEdge DE', 'tool-008': 'Frontline', 'tool-009': 'PowerEdge DE',
  'tool-010': 'Frontline', 'tool-011': 'Microsoft DE', 'tool-012': 'Microsoft DE',
  'tool-013': 'PowerEdge DE', 'tool-014': 'Microsoft DE', 'tool-015': 'Microsoft DE',
  'tool-016': 'Frontline', 'tool-017': 'Microsoft DE'
};

const toolRegions = {
  'tool-001': 'North America', 'tool-002': 'North America', 'tool-003': 'North America',
  'tool-004': 'North America', 'tool-005': 'North America', 'tool-006': 'North America',
  'tool-007': 'North America', 'tool-008': 'North America', 'tool-009': 'North America',
  'tool-010': 'North America', 'tool-011': 'North America', 'tool-012': 'North America',
  'tool-013': 'North America', 'tool-014': 'North America', 'tool-015': 'North America',
  'tool-016': 'North America', 'tool-017': 'North America'
};

// Data loading utilities (inline version for production)
export const loadTools = async () => {
  return toolsData.map(tool => ({
    ...tool,
    category: toolCategories[tool.id] || 'Other',
    team: toolTeams[tool.id] || tool.team,
    regionCreated: toolRegions[tool.id] || 'North America'
  }));
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
    if (filters.regionCreated && tool.regionCreated !== filters.regionCreated) {
      return false;
    }
    if (filters.category && tool.category !== filters.category) {
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
