const API_URL = "https://gsetools-bufhdqefb8e6ecc6.centralus-01.azurewebsites.net/api/GetTelemetrySummartFast?code=Gy4_sefRtyq7ZNaN_uAOMb6Ww6zLEIl6Lic2jCUIFXHNAzFu9-7dNQ==";

/**
 * Fetch telemetry data for a specific tool
 * @param {string} toolName - The name of the tool to fetch telemetry for
 * @returns {Promise<Object>} - Normalized telemetry data
 */
export async function getToolTelemetry(toolName) {
  try {
    const url = new URL(API_URL);
    url.searchParams.set('tool', toolName);
    
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 20000);
    
    const response = await fetch(url, { signal: controller.signal });
    clearTimeout(timer);
    
    if (!response.ok) {
      throw new Error('Telemetry request failed');
    }
    
    const raw = await response.json();
    return normalizeTelemetryResponse(raw);
  } catch (error) {
    console.error(`Failed to fetch telemetry for ${toolName}:`, error);
    return null;
  }
}

/**
 * Fetch telemetry data for multiple tools in parallel
 * @param {Array<string>} toolNames - Array of tool names to fetch telemetry for
 * @returns {Promise<Map<string, Object>>} - Map of tool names to telemetry data
 */
export async function getAllToolsTelemetry(toolNames) {
  const telemetryMap = new Map();
  
  const promises = toolNames.map(async (toolName) => {
    const data = await getToolTelemetry(toolName);
    if (data) {
      telemetryMap.set(toolName, data);
    }
  });
  
  await Promise.all(promises);
  return telemetryMap;
}

/**
 * Normalize the telemetry response data
 * @param {Object} raw - Raw response from API
 * @returns {Object} - Normalized telemetry data
 */
function normalizeTelemetryResponse(raw) {
  // Handle different response formats
  let data = raw;
  
  // If response has a value property (Azure Table style)
  if (raw.value && Array.isArray(raw.value)) {
    data = { value: raw.value };
  }
  
  // Extract relevant data
  const rowCount = extractRowCount(data);
  const monthly = extractMonthlyData(data);
  const latestMonth = monthly.length > 0 ? monthly[monthly.length - 1].Month : null;
  
  return {
    rowCount,
    latestMonth,
    monthly,
    refreshedAt: data.refreshedAt || null
  };
}

/**
 * Extract row count from response data
 * @param {Object} data - Response data
 * @returns {number|null} - Row count or null if unavailable
 */
function extractRowCount(data) {
  if (typeof data.rowCount === 'number') {
    return data.rowCount;
  }

  if (data.value && Array.isArray(data.value)) {
    const totalRow = data.value.find(row => row.RowKey === 'Total');
    return Number(totalRow?.TotalRuns ?? totalRow?.Count ?? 0);
  }

  return null;
}

/**
 * Extract monthly data from response
 * @param {Object} data - Response data
 * @returns {Array} - Array of monthly data objects
 */
function extractMonthlyData(data) {
  if (Array.isArray(data.monthly)) {
    return data.monthly
      .filter(row => /^\d{4}-(0[1-9]|1[0-2])$/.test(row.Month))
      .map(row => ({ Month: row.Month, Count: toCount(row.Count) }))
      .sort((a, b) => a.Month.localeCompare(b.Month));
  }

  const monthlyRow = data.value?.find(row => row.RowKey === 'Monthly');
  if (!monthlyRow) {
    return [];
  }

  return Object.keys(monthlyRow)
    .filter(key => /^M?\d{6}$/.test(key))
    .sort()
    .map(key => {
      const rawMonth = key.replace(/^M/, '');
      return {
        Month: `${rawMonth.slice(0, 4)}-${rawMonth.slice(4, 6)}`,
        Count: toCount(monthlyRow[key])
      };
    });
}

function toCount(value) {
  const count = Number(value);
  return Number.isFinite(count) ? Math.max(0, count) : null;
}