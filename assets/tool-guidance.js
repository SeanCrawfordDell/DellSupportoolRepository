export const TOOL_GUIDANCE = {
  "tool-001": {
    name: "Dell ProSupport ToolBox",
    whenToUse: ["You need a quick starting point but are not yet sure which diagnostic utility fits the case.", "You are guiding a new engineer to the supported tools for a PowerEdge, Windows Server, Hyper-V, or Azure Local issue."],
    examples: ["A server case arrives with only a broad 'performance issue' description.", "An engineer needs to locate the standard collector before beginning triage."],
  },
  "tool-002": {
    name: "AzHCIUrlChecker",
    whenToUse: ["Azure Local registration, update, or deployment cannot reach a required Microsoft endpoint.", "You need to validate DNS, proxy, firewall, or HTTPS access before escalating a connectivity issue."],
    examples: ["Cluster deployment stops while contacting Azure services.", "A proxy change may be blocking one of the required URLs."],
  },
  "tool-003": {
    name: "BOILER",
    whenToUse: ["Windows servicing, CBS, or DISM errors prevent updates or repairs from completing.", "You need to turn large servicing logs into a short list of likely corruption or package issues."],
    examples: ["A cumulative update repeatedly rolls back after reboot.", "DISM reports component-store corruption but the relevant log entries are unclear."],
  },
  "tool-004": {
    name: "DART",
    whenToUse: ["A Windows Failover Cluster or Azure Local environment needs coordinated Dell server firmware or driver updates.", "You want to assess update readiness before changing clustered nodes."],
    examples: ["A maintenance window is scheduled for an S2D cluster.", "Nodes are on inconsistent Dell firmware baselines."],
  },
  "tool-005": {
    name: "FLEP",
    whenToUse: ["Windows event logs are too noisy to quickly isolate server, clustering, or storage errors.", "You need a focused event-log export around a failure time."],
    examples: ["A cluster briefly lost quorum and you need the related events.", "Storage latency is reported but Event Viewer contains thousands of entries."],
  },
  "tool-006": {
    name: "GetHyperVBottlenecks",
    whenToUse: ["Virtual machines on a Hyper-V host are slow and you need to identify CPU, memory, disk, or network pressure.", "You need performance evidence before changing VM placement or host resources."],
    examples: ["Several VMs show slow response times during a daily workload peak.", "A host appears healthy at a glance but users report intermittent latency."],
  },
  "tool-007": {
    name: "iDRAC Connection Manager",
    whenToUse: ["You need a repeatable way to open, organize, or test iDRAC access for several Dell servers.", "Manual browser sessions make remote-management work slow or error-prone."],
    examples: ["A support engineer needs to reach iDRAC on every node in a cluster.", "A team is validating that newly deployed servers have reachable management interfaces."],
  },
  "tool-008": {
    name: "KeyRelay",
    whenToUse: ["A secure console or legacy application blocks clipboard paste but accepts keyboard input.", "You need to enter a long command or diagnostic token reliably without retyping it."],
    examples: ["A remote console rejects pasted command text.", "A technician must enter a multi-line recovery command into a restricted window."],
  },
  "tool-009": {
    name: "LogCollector",
    whenToUse: ["A support case needs a broad, standardized diagnostic bundle from Windows, Dell servers, or supported switches.", "You want to collect evidence before making changes that could remove the symptom."],
    examples: ["A cluster issue spans Windows event logs and Dell hardware details.", "Support requests a complete package for an intermittent server problem."],
  },
  "tool-010": {
    name: "GetShowTech",
    whenToUse: ["A Dell switch requires a show-tech capture for a network or support investigation.", "You need consistent switch diagnostics before a configuration change or escalation."],
    examples: ["Intermittent packet loss is reported through a server network path.", "Support asks for the switch's current diagnostic output."],
  },
  "tool-011": {
    name: "SDDC Dell Enhanced",
    whenToUse: ["An Azure Stack HCI environment needs a structured SDDC diagnostic collection while internet access is available.", "You need platform-specific evidence for a cluster health, deployment, or update case."],
    examples: ["An Azure Local update stalls and the normal logs are incomplete.", "A support escalation needs system, cluster, and SDDC diagnostic data together."],
  },
  "tool-012": {
    name: "SDDC Offline Dell Enhanced",
    whenToUse: ["An Azure Stack HCI environment is isolated, air-gapped, or cannot use the online collection workflow.", "You need the same diagnostic direction while preserving offline operational constraints."],
    examples: ["A secure cluster has no direct internet path.", "An outage also removed the connectivity required by the standard SDDC collector."],
  },
  "tool-013": {
    name: "TSR Collector",
    whenToUse: ["Dell Technical Support Reports are required from several cluster nodes through iDRAC.", "You need hardware-level evidence without manually signing in to every management controller."],
    examples: ["A multi-node cluster has suspected hardware or firmware faults.", "Support requests TSRs from every affected PowerEdge node."],
  },
  "tool-014": {
    name: "TALI",
    whenToUse: ["You need an early health and configuration assessment for an Azure Local cluster.", "You want to identify common configuration issues before a deeper support escalation."],
    examples: ["A newly deployed cluster must be validated before production use.", "A cluster reports an issue but the first likely health checks have not been run."],
  },
  "tool-015": {
    name: "FLCkr",
    whenToUse: ["A Windows issue may involve file-system filter drivers or conflicting driver altitudes.", "You need a fast way to inspect the filter stack before changing drivers or security software."],
    examples: ["Backup, antivirus, or encryption software may be interfering with file operations.", "A system shows file-access failures after a driver installation."],
  },
  "tool-016": {
    name: "Convert-Etl2Pcap",
    whenToUse: ["A Windows network trace was captured as ETL but must be reviewed in a PCAP-capable analyzer.", "You need to share a network capture with a team using Wireshark or a similar tool."],
    examples: ["A Hyper-V networking issue was captured with Windows tracing.", "A support engineer needs packet-level inspection of an existing ETL trace."],
  },
  "tool-017": {
    name: "CluChk",
    whenToUse: ["A Storage Spaces Direct or Azure Local cluster needs a best-practice configuration review.", "You want to validate a cluster before deployment, an update, or a support escalation."],
    examples: ["A new cluster is about to enter production.", "A recurring cluster issue may be tied to an unsupported or risky configuration."],
  },
};

function createList(items) {
  const list = document.createElement("ul");
  list.className = "tool-guidance-list";
  for (const item of items) {
    const entry = document.createElement("li");
    entry.textContent = item;
    list.append(entry);
  }
  return list;
}

function createSection(title, items) {
  const section = document.createElement("section");
  const heading = document.createElement("h2");
  heading.className = "tool-guidance-heading";
  heading.textContent = title;
  section.append(heading, createList(items));
  return section;
}

function addGuidance() {
  const name = document.querySelector("main h1")?.textContent?.trim();
  const guidance = Object.values(TOOL_GUIDANCE).find((item) => item.name === name);
  const valueHeading = [...document.querySelectorAll("main h2")].find((heading) => heading.textContent?.trim() === "Value Proposition");
  if (!guidance || !valueHeading || document.querySelector("[data-tool-guidance]")) return;

  const panel = document.createElement("section");
  panel.className = "tool-guidance-panel";
  panel.dataset.toolGuidance = "true";
  panel.setAttribute("aria-label", `Using ${guidance.name}`);
  panel.append(createSection("When to use this tool", guidance.whenToUse));
  panel.append(createSection("Examples", guidance.examples));

  valueHeading.before(panel);
}

if (typeof document !== "undefined" && typeof MutationObserver !== "undefined") {
  const observer = new MutationObserver(addGuidance);
  observer.observe(document.documentElement, { childList: true, subtree: true });
  addGuidance();
}
