import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useRequests } from '../hooks/useRequests';
import { useTools } from '../hooks/useTools';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { getPriorityColor } from '../utils/dataHelpers';
import { formatDate } from '../utils/dataHelpers';
import { githubIssueFormUrl, githubStatusChangeUrl } from '../utils/githubLinks';

const Requests = () => {
  const { filteredRequests, loading, filters, updateFilters, clearFilters, addRequest, githubEnabled } = useRequests();
  const { tools } = useTools();
  const [searchParams] = useSearchParams();
  const requestType = searchParams.get('type');
  const relatedToolId = searchParams.get('toolId');
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    type: 'feature',
    toolId: '',
    requester: '',
    email: '',
    priority: 'medium'
  });

  useEffect(() => {
    if ((requestType === 'bug' || requestType === 'feature') && relatedToolId) {
      setFormData(current => ({
        ...current,
        type: requestType,
        toolId: relatedToolId
      }));
      setShowForm(true);
    }
  }, [requestType, relatedToolId]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-dell-blue"></div>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    addRequest(formData);
    setFormData({
      title: '',
      description: '',
      type: 'feature',
      toolId: '',
      requester: '',
      email: '',
      priority: 'medium'
    });
    setShowForm(false);
  };

  const getRequestTypeLabel = (type) => {
    const labels = {
      feature: 'Feature Request',
      'new-tool': 'New Tool',
      bug: 'Bug Report'
    };
    return labels[type] || type;
  };

  const getStatusLabel = (status) => {
    const labels = {
      pending: 'Pending',
      approved: 'Approved',
      'in-progress': 'In Progress',
      completed: 'Completed',
      declined: 'Declined'
    };
    return labels[status] || status;
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-gray-50 dark:bg-gray-900 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-3 mb-8 sm:flex-row sm:items-center sm:justify-between">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              Feature Requests
            </h1>
            <div className="flex flex-wrap gap-2">
              <a href={githubIssueFormUrl('feature')} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Submit Feature Request
              </a>
              <a href={githubIssueFormUrl('bug')} target="_blank" rel="noopener noreferrer" className="rounded-lg bg-red-600 px-4 py-2 font-medium text-white hover:bg-red-700">
                Submit a Bug
              </a>
            </div>
          </div>

          <div className="mb-6 rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-900/20">
            <h2 className="text-sm font-semibold text-blue-900 dark:text-blue-100">Git-backed tracking</h2>
            <p className="mt-1 text-sm text-blue-800 dark:text-blue-200">
              Submissions are durable GitHub Issues. Catalog and status changes are reviewed and committed to this repository, then appear after the site deploys.
            </p>
            <a href={githubStatusChangeUrl} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-sm font-medium text-dell-blue hover:underline">
              Request a catalog or status change ↗
            </a>
          </div>

          {/* Persistence Notice */}
          {githubEnabled ? (
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-4 mb-6">
              <div className="flex items-start">
                <svg className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h3 className="text-sm font-medium text-green-800 dark:text-green-200">
                    GitHub Integration Active
                  </h3>
                  <p className="text-sm text-green-700 dark:text-green-300 mt-1">
                    Feature requests are synced with GitHub Issues. Submitted requests will be persisted and visible in the GitHub repository.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4 mb-6">
              <div className="flex items-start">
                <svg className="w-5 h-5 text-yellow-600 dark:text-yellow-400 mt-0.5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              <div>
                <h3 className="text-sm font-medium text-yellow-800 dark:text-yellow-200">
                  GitHub Issue Forms
                </h3>
                <p className="text-sm text-yellow-700 dark:text-yellow-300 mt-1">
                  Use the GitHub submission buttons above to create durable bug reports and feature requests without exposing a browser token. This page’s legacy in-browser list remains available for viewing sample data.
                </p>
                </div>
              </div>
            </div>
          )}

          {/* Request Form */}
          {showForm && (
            <div className="card mb-8">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Submit New Request
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Request Type
                  </label>
                  <select
                    value={formData.type}
                    onChange={(e) => setFormData({...formData, type: e.target.value})}
                    className="input-field"
                  >
                    <option value="feature">Feature Request</option>
                    <option value="new-tool">New Tool</option>
                    <option value="bug">Bug Report</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Title
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.title}
                    onChange={(e) => setFormData({...formData, title: e.target.value})}
                    className="input-field"
                    placeholder="Brief description of your request"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Description
                  </label>
                  <textarea
                    required
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    className="input-field"
                    rows="4"
                    placeholder="Detailed description of your request"
                  />
                </div>

                {formData.type !== 'new-tool' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Related Tool (Optional)
                    </label>
                    <select
                      value={formData.toolId}
                      onChange={(e) => setFormData({...formData, toolId: e.target.value})}
                      className="input-field"
                    >
                      <option value="">Select a tool...</option>
                      {tools.map(tool => (
                        <option key={tool.id} value={tool.id}>{tool.name}</option>
                      ))}
                    </select>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.requester}
                      onChange={(e) => setFormData({...formData, requester: e.target.value})}
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="input-field"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Priority
                  </label>
                  <select
                    value={formData.priority}
                    onChange={(e) => setFormData({...formData, priority: e.target.value})}
                    className="input-field"
                  >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                  </select>
                </div>

                <div className="flex space-x-4">
                  <button type="submit" className="btn-primary">
                    Submit Request
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowForm(false)}
                    className="btn-secondary"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Filters */}
          <div className="card mb-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Search
                </label>
                <input
                  type="text"
                  placeholder="Search requests..."
                  value={filters.search}
                  onChange={(e) => updateFilters({ search: e.target.value })}
                  className="input-field"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Status
                </label>
                <select
                  value={filters.status}
                  onChange={(e) => updateFilters({ status: e.target.value })}
                  className="input-field"
                >
                  <option value="">All Statuses</option>
                  <option value="pending">Pending</option>
                  <option value="approved">Approved</option>
                  <option value="in-progress">In Progress</option>
                  <option value="completed">Completed</option>
                  <option value="declined">Declined</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Type
                </label>
                <select
                  value={filters.type}
                  onChange={(e) => updateFilters({ type: e.target.value })}
                  className="input-field"
                >
                  <option value="">All Types</option>
                  <option value="feature">Feature Request</option>
                  <option value="new-tool">New Tool</option>
                  <option value="bug">Bug Report</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Priority
                </label>
                <select
                  value={filters.priority}
                  onChange={(e) => updateFilters({ priority: e.target.value })}
                  className="input-field"
                >
                  <option value="">All Priorities</option>
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>
            </div>
            
            {(filters.search || filters.status || filters.type || filters.priority) && (
              <button
                onClick={clearFilters}
                className="mt-4 text-sm text-dell-blue hover:underline"
              >
                Clear Filters
              </button>
            )}
          </div>

          {/* Requests List */}
          {filteredRequests.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                No requests found matching your criteria.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredRequests.map(request => (
                <div key={request.id} className="card">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        {request.title}
                      </h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                        <span>{getRequestTypeLabel(request.type)}</span>
                        <span>•</span>
                        <span>{request.requester}</span>
                        <span>•</span>
                        <span>{formatDate(request.createdAt)}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getPriorityColor(request.priority)}`}>
                        {request.priority}
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                        {getStatusLabel(request.status)}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {request.description}
                  </p>
                  {request.toolId && (
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Related Tool: {tools.find(t => t.id === request.toolId)?.name || 'Unknown'}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Requests;
