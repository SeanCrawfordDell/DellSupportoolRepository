import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { loadTools } from '../utils/dataHelpers';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import StatusBadge from '../components/tools/StatusBadge';
import ProgressBar from '../components/ui/ProgressBar';
import { formatDate } from '../utils/dataHelpers';

const ToolDetail = () => {
  const { id } = useParams();
  const [tool, setTool] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTool = async () => {
      try {
        const tools = await loadTools();
        const foundTool = tools.find(t => t.id === id);
        setTool(foundTool);
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
                  {tool.documentation && (
                    <a
                      href={tool.documentation}
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
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ToolDetail;