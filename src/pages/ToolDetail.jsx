import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { loadTools } from '../utils/dataHelpers';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import StatusBadge from '../components/tools/StatusBadge';
import ProgressBar from '../components/ui/ProgressBar';
import { formatDate } from '../utils/dataHelpers';
import { getToolTelemetry } from '../services/telemetryApi';
import { getToolInstructions } from '../services/githubDocumentation';
import { Chart } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  LineController,
  BarElement,
  BarController,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js/auto';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  LineController,
  BarElement,
  BarController,
  Title,
  Tooltip,
  Legend,
  Filler
);

const currentMonth = () => new Date().toISOString().slice(0, 7);

const monthSpan = (monthly) => {
  if (!monthly.length) return [];

  const start = new Date(`${monthly[0].Month}-01T00:00:00Z`);
  const end = new Date(`${monthly[monthly.length - 1].Month}-01T00:00:00Z`);
  const values = new Map(monthly.map(row => [row.Month, row.Count]));
  const rows = [];

  for (const date = new Date(start); date <= end; date.setUTCMonth(date.getUTCMonth() + 1)) {
    const month = date.toISOString().slice(0, 7);
    rows.push({
      Month: month,
      Count: values.has(month) ? values.get(month) : null,
      complete: month < currentMonth()
    });
  }

  return rows;
};

const linearTrend = (rows) => {
  const points = rows
    .map((row, index) => ({ x: index, y: row.Count }))
    .filter(point => point.y !== null);

  if (points.length < 2) return rows.map(() => null);

  const meanX = points.reduce((sum, point) => sum + point.x, 0) / points.length;
  const meanY = points.reduce((sum, point) => sum + point.y, 0) / points.length;
  const denominator = points.reduce((sum, point) => sum + (point.x - meanX) ** 2, 0);
  if (!denominator) return rows.map(() => null);

  const slope = points.reduce(
    (sum, point) => sum + (point.x - meanX) * (point.y - meanY),
    0
  ) / denominator;
  const firstComplete = points[0].x;
  const lastComplete = points.at(-1).x;

  return rows.map((row, index) => (
    index < firstComplete || index > lastComplete
      ? null
      : Math.max(0, meanY + slope * (index - meanX))
  ));
};

const formatMonth = (month) => new Intl.DateTimeFormat('en-US', {
  month: 'short',
  year: 'numeric'
}).format(new Date(`${month}-01T00:00:00Z`));

const toolDocumentationAnchors = {
  'Dell ProSupport ToolBox': '-dell-prosupport-toolbox',
  AzHCIUrlChecker: '-azhciurlchecker',
  BOILER: '-boiler',
  DART: '-dart',
  FLEP: '-flep',
  GetHyperVBottlenecks: '-gethypervbottlenecks',
  'iDRAC Connection Manager': '-idrac-connection-manager',
  KeyRelay: '-keyrelay',
  LogCollector: '-logcollector',
  GetShowTech: '-getshowtech',
  'SDDC Dell Enhanced': '-sddc-dell-enhanced',
  'SDDC Offline Dell Enhanced': '-sddc-offline-dell-enhanced',
  'TSR Collector': '-tsr-collector',
  TALI: '-tali',
  FLCkr: '-flckr',
  'Convert-Etl2Pcap': '-convert-etl2pcap'
};

const getDocumentationUrl = (tool) => {
  const anchor = toolDocumentationAnchors[tool.name];
  return anchor ? `https://github.com/DellProSupportGse/Tools#${anchor}` : tool.documentation;
};

const ToolDetail = () => {
  const { id } = useParams();
  const [tool, setTool] = useState(null);
  const [loading, setLoading] = useState(true);
  const [telemetry, setTelemetry] = useState(null);
  const [telemetryLoading, setTelemetryLoading] = useState(false);
  const [instructions, setInstructions] = useState(null);
  const [instructionsLoading, setInstructionsLoading] = useState(false);
  const [instructionsError, setInstructionsError] = useState(null);

  useEffect(() => {
    const fetchTool = async () => {
      try {
        const tools = await loadTools();
        const foundTool = tools.find(t => t.id === id);
        setTool(foundTool);
        
        if (foundTool) {
          setTelemetryLoading(true);
          getToolTelemetry(foundTool.name)
            .then(setTelemetry)
            .finally(() => setTelemetryLoading(false));

          const documentationAnchor = toolDocumentationAnchors[foundTool.name];
          if (documentationAnchor) {
            setInstructionsLoading(true);
            getToolInstructions(documentationAnchor)
              .then(setInstructions)
              .catch(error => setInstructionsError(error.message))
              .finally(() => setInstructionsLoading(false));
          }
        }
      } catch (error) {
        console.error('Error loading tool:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchTool();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-dell-blue"></div>
      </div>
    );
  }

  if (!tool) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Tool Not Found
          </h1>
          <Link to="/tools" className="btn-primary">
            Back to Tools
          </Link>
        </div>
      </div>
    );
  }

  const getRoadmapStatusColor = (status) => {
    const colors = {
      planned: 'border-l-4 border-gray-400',
      'in-progress': 'border-l-4 border-blue-500',
      completed: 'border-l-4 border-green-500',
      cancelled: 'border-l-4 border-red-500'
    };
    return colors[status] || 'border-l-4 border-gray-400';
  };

  const getPriorityColor = (priority) => {
    const colors = {
      low: 'text-gray-500',
      medium: 'text-yellow-600',
      high: 'text-red-600'
    };
    return colors[priority] || 'text-gray-500';
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-gray-50 dark:bg-gray-900 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/tools" className="text-dell-blue hover:underline mb-4 inline-block">
            ← Back to Tools
          </Link>
          
          <div className="card mt-6">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {tool.name}
                </h1>
                <div className="flex items-center space-x-4">
                  <StatusBadge status={tool.status} />
                  <span className="text-gray-600 dark:text-gray-400">
                    {tool.team} Team
                  </span>
                  <span className="text-gray-600 dark:text-gray-400">
                    Owner: {tool.owner}
                  </span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                  Overall Progress
                </div>
                <div className="text-2xl font-bold text-dell-blue">{tool.progress}%</div>
                <ProgressBar progress={tool.progress} size="md" className="mt-2 w-48" />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Description
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {tool.description}
                </p>

                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  What It Does
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {tool.whatItDoes}
                </p>

                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Value Proposition
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {tool.valueProposition}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {tool.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-dell-blue text-white text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  {tool.repository && (
                    <a
                      href={tool.repository}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      View Repository
                    </a>
                  )}
                  {getDocumentationUrl(tool) && (
                    <a
                      href={getDocumentationUrl(tool)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary"
                    >
                      Documentation
                    </a>
                  )}
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Roadmap
                </h2>
                <div className="space-y-4">
                  {tool.roadmap.map((item, index) => (
                    <div
                      key={index}
                      className={`p-4 bg-gray-50 dark:bg-gray-700 rounded ${getRoadmapStatusColor(item.status)}`}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-gray-900 dark:text-white">
                          {item.feature}
                        </h3>
                        <span className={`text-sm font-medium ${getPriorityColor(item.priority)}`}>
                          {item.priority}
                        </span>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                        <span className={`px-2 py-1 rounded text-xs ${
                          item.status === 'completed' ? 'bg-green-100 text-green-800' :
                          item.status === 'in-progress' ? 'bg-blue-100 text-blue-800' :
                          item.status === 'cancelled' ? 'bg-red-100 text-red-800' :
                          'bg-gray-100 text-gray-800'
                        }`}>
                          {item.status}
                        </span>
                        {item.targetDate && (
                          <span>Target: {formatDate(item.targetDate)}</span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-4 bg-gray-50 dark:bg-gray-700 rounded">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Timeline
                  </h3>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    <p>Created: {formatDate(tool.createdAt)}</p>
                    <p>Last Updated: {formatDate(tool.updatedAt)}</p>
                  </div>
                </div>

                {/* Monthly Usage Chart */}
                <div className="mt-8 p-4 bg-gray-50 dark:bg-gray-700 rounded">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-4">
                    Monthly Usage
                  </h3>
                  {telemetryLoading ? (
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Loading telemetry data...
                    </div>
                  ) : telemetry && telemetry.monthly && telemetry.monthly.length > 0 ? (
                    (() => {
                      const rows = monthSpan(telemetry.monthly);
                      const trend = linearTrend(rows);
                      const totalRuns = rows.reduce(
                        (sum, row) => sum + (row.Count ?? 0),
                        0
                      );

                      return (
                        <>
                          <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
                            All years · {totalRuns.toLocaleString()} reported runs. Gaps indicate missing months, not zero runs. Dashed trend uses complete reported periods only; it is not a forecast.
                          </p>
                          <div className="h-72">
                            <Chart
                              type="line"
                              data={{
                                labels: rows.map(row => formatMonth(row.Month)),
                                datasets: [
                                  {
                                    label: 'Reported runs',
                                    data: rows.map(row => row.Count),
                                    borderColor: '#0076ce',
                                    backgroundColor: '#0076ce',
                                    borderWidth: 2,
                                    pointRadius: rows.length > 35 ? 1 : 3,
                                    pointBackgroundColor: rows.map(row => (
                                      row.complete ? '#0076ce' : '#91c9ef'
                                    )),
                                    tension: 0,
                                    spanGaps: false
                                  },
                                  {
                                    label: 'Linear trend · complete periods',
                                    data: trend,
                                    borderColor: '#d07816',
                                    borderWidth: 2,
                                    borderDash: [7, 5],
                                    pointRadius: 0,
                                    tension: 0,
                                    spanGaps: true
                                  }
                                ]
                              }}
                              options={{
                                responsive: true,
                                maintainAspectRatio: false,
                                animation: false,
                                interaction: {
                                  mode: 'index',
                                  intersect: false
                                },
                                plugins: {
                                  legend: {
                                    display: true,
                                    position: 'bottom',
                                    labels: {
                                      usePointStyle: false,
                                      boxWidth: 28,
                                      padding: 14
                                    }
                                  },
                                  tooltip: {
                                    callbacks: {
                                      label: context => (
                                        `${context.dataset.label}: ${context.parsed.y === null ? 'missing' : context.parsed.y.toLocaleString()} runs`
                                      )
                                    }
                                  }
                                },
                                scales: {
                                  x: {
                                    title: {
                                      display: true,
                                      text: 'Month'
                                    },
                                    ticks: {
                                      autoSkip: true,
                                      maxTicksLimit: 8,
                                      maxRotation: 0
                                    }
                                  },
                                  y: {
                                    beginAtZero: true,
                                    title: {
                                      display: true,
                                      text: 'Runs'
                                    }
                                  }
                                }
                              }}
                            />
                          </div>
                        </>
                      );
                    })()
                  ) : (
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      No telemetry data available for this tool.
                    </div>
                  )}
                </div>
              </div>
            </div>

            <section className="mt-8 border-t border-gray-200 dark:border-gray-700 pt-8">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Instructions
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    Loaded live from the tool's GitHub README.
                  </p>
                </div>
                {getDocumentationUrl(tool) && (
                  <a
                    href={getDocumentationUrl(tool)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-dell-blue hover:underline"
                  >
                    View source on GitHub ↗
                  </a>
                )}
              </div>
              {instructionsLoading ? (
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Loading the latest instructions...
                </p>
              ) : instructionsError ? (
                <p className="text-sm text-red-600 dark:text-red-400">
                  Instructions could not be loaded from GitHub right now. Use the source link above to view them.
                </p>
              ) : instructions ? (
                <pre className="max-h-[600px] overflow-auto whitespace-pre-wrap rounded-lg bg-gray-50 dark:bg-gray-700 p-5 text-sm leading-6 text-gray-700 dark:text-gray-300 font-sans">
                  {instructions}
                </pre>
              ) : (
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  No instructions section is available for this tool.
                </p>
              )}
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ToolDetail;