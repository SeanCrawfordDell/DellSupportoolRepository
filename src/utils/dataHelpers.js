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
  },
  {
    "id": "tool-006",
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
    "id": "tool-007",
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
    "id": "tool-008",
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
    "id": "tool-009",
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
    "id": "tool-010",
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
    "id": "tool-011",
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
    "id": "tool-012",
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
    "id": "tool-013",
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
    "id": "tool-014",
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
    "id": "tool-015",
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
    "id": "tool-016",
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
    "id": "tool-017",
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
    "id": "tool-018",
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
    "id": "tool-019",
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
    "id": "tool-020",
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
    "id": "tool-021",
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