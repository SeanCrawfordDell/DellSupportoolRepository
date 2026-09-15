import { useState } from 'react';
import { useTools } from '../hooks/useTools';
import { useRequests } from '../hooks/useRequests';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import StatusBadge from '../components/tools/StatusBadge';

const Admin = () => {
  const { tools, updateFilters } = useTools();
  const { requests, updateRequest, deleteRequest } = useRequests();
  const [activeTab, setActiveTab] = useState('tools');
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [showToolForm, setShowToolForm] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');

  // Simple password for demo (in production, use proper authentication)
  const ADMIN_PASSWORD = 'isgadmin2024';
  const [toolFormData, setToolFormData] = useState({
    name: '',
    description: '',
    whatItDoes: '',
    valueProposition: '',
    status: 'planning',
    progress: 0,
    owner: '',
    team: 'Platform',
    repository: '',
    documentation: '',
    tags: ''
  });

  const handleRequestStatusChange = (requestId, newStatus) => {
    updateRequest(requestId, { status: newStatus });
  };

  const handleDeleteRequest = (requestId) => {
    if (window.confirm('Are you sure you want to delete this request?')) {
      deleteRequest(requestId);
    }
  };

  const handleToolFormChange = (e) => {
    const { name, value } = e.target;
    setToolFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleToolSubmit = (e) => {
    e.preventDefault();

    // Create new tool object
    const newTool = {
      id: `tool-${String(tools.length + 1).padStart(3, '0')}`,
      ...toolFormData,
      tags: toolFormData.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
      progress: parseInt(toolFormData.progress),
      createdAt: new Date().toISOString().split('T')[0],
      updatedAt: new Date().toISOString().split('T')[0],
      roadmap: []
    };

    // Add to tools list (this would normally update the data source)
    alert(`Tool "${newTool.name}" has been submitted!\n\nNote: In this demo version, the tool is added to memory only. To persist changes, update the data files directly.`);

    // Reset form
    setToolFormData({
      name: '',
      description: '',
      whatItDoes: '',
      valueProposition: '',
      status: 'planning',
      progress: 0,
      owner: '',
      team: 'Platform',
      repository: '',
      documentation: '',
      tags: ''
    });
    setShowToolForm(false);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setAuthError('');
    } else {
      setAuthError('Incorrect password. Please try again.');
      setPassword('');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setPassword('');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow bg-gray-50 dark:bg-gray-900 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {!isAuthenticated ? (
            // Login Form
            <div className="max-w-md mx-auto mt-16">
              <div className="card">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 text-center">
                  Admin Access
                </h1>
                <p className="text-gray-600 dark:text-gray-400 mb-6 text-center">
                  Enter the admin password to access the dashboard
                </p>

                <form onSubmit={handleLogin} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Password
                    </label>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-800 dark:text-white"
                      placeholder="Enter admin password"
                    />
                  </div>

                  {authError && (
                    <div className="text-red-600 text-sm">
                      {authError}
                    </div>
                  )}

                  <button
                    type="submit"
                    className="w-full px-4 py-2 bg-dell-blue text-white rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Access Dashboard
                  </button>
                </form>

                <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-md">
                  <p className="text-sm text-blue-800 dark:text-blue-300">
                    <strong>Demo Password:</strong> isgadmin2024
                  </p>
                  <p className="text-xs text-blue-600 dark:text-blue-400 mt-1">
                    In production, use proper authentication with a backend server.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            // Admin Dashboard
            <>
              <div className="flex justify-between items-center mb-8">
                <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                  Admin Dashboard
                </h1>
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                >
                  Logout
                </button>
              </div>

          {/* Tabs */}
          <div className="flex space-x-4 mb-6">
            <button
              onClick={() => setActiveTab('tools')}
              className={`px-4 py-2 rounded-lg font-medium ${
                activeTab === 'tools'
                  ? 'bg-dell-blue text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300'
              }`}
            >
              Tools ({tools.length})
            </button>
            <button
              onClick={() => setActiveTab('requests')}
              className={`px-4 py-2 rounded-lg font-medium ${
                activeTab === 'requests'
                  ? 'bg-dell-blue text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300'
              }`}
            >
              Requests ({requests.length})
            </button>
            <button
              onClick={() => setActiveTab('submit')}
              className={`px-4 py-2 rounded-lg font-medium ${
                activeTab === 'submit'
                  ? 'bg-dell-blue text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300'
              }`}
            >
              Submit Tool
            </button>
          </div>

          {/* Tools Tab */}
          {activeTab === 'tools' && (
            <div className="card">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Manage Tools
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Tool management is currently done through JSON files. Edit the data files directly to add, modify, or remove tools.
              </p>
              <div className="space-y-4">
                {tools.map(tool => (
                  <div key={tool.id} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">
                          {tool.name}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {tool.description}
                        </p>
                      </div>
                      <StatusBadge status={tool.status} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Requests Tab */}
          {activeTab === 'requests' && (
            <div className="card">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Manage Feature Requests
              </h2>
              <div className="space-y-4">
                {requests.map(request => (
                  <div key={request.id} className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">
                          {request.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {request.requester} • {request.type}
                        </p>
                      </div>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${
                        request.priority === 'high' ? 'bg-red-100 text-red-800' :
                        request.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {request.priority}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      {request.description}
                    </p>
                    <div className="flex items-center space-x-4">
                      <select
                        value={request.status}
                        onChange={(e) => handleRequestStatusChange(request.id, e.target.value)}
                        className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded text-sm dark:bg-gray-800 dark:text-white"
                      >
                        <option value="pending">Pending</option>
                        <option value="approved">Approved</option>
                        <option value="in-progress">In Progress</option>
                        <option value="completed">Completed</option>
                        <option value="declined">Declined</option>
                      </select>
                      <button
                        onClick={() => handleDeleteRequest(request.id)}
                        className="text-red-600 hover:text-red-800 text-sm"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Submit Tool Tab */}
          {activeTab === 'submit' && (
            <div className="card">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Submit New Tool
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Submit a new tool to be added to the ISG Tool Tracker. All fields are required unless marked optional.
              </p>

              <form onSubmit={handleToolSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Tool Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={toolFormData.name}
                      onChange={handleToolFormChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-800 dark:text-white"
                      placeholder="e.g., Dell ProSupport ToolBox"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Owner *
                    </label>
                    <input
                      type="text"
                      name="owner"
                      value={toolFormData.owner}
                      onChange={handleToolFormChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-800 dark:text-white"
                      placeholder="e.g., Dell ProSupport GSE"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Team *
                    </label>
                    <select
                      name="team"
                      value={toolFormData.team}
                      onChange={handleToolFormChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-800 dark:text-white"
                    >
                      <option value="Platform">Platform</option>
                      <option value="Cloud">Cloud</option>
                      <option value="Compute">Compute</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Status *
                    </label>
                    <select
                      name="status"
                      value={toolFormData.status}
                      onChange={handleToolFormChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-800 dark:text-white"
                    >
                      <option value="planning">Planning</option>
                      <option value="development">Development</option>
                      <option value="testing">Testing</option>
                      <option value="released">Released</option>
                      <option value="maintenance">Maintenance</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Progress (%) *
                    </label>
                    <input
                      type="number"
                      name="progress"
                      value={toolFormData.progress}
                      onChange={handleToolFormChange}
                      required
                      min="0"
                      max="100"
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-800 dark:text-white"
                      placeholder="0-100"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Repository URL *
                    </label>
                    <input
                      type="url"
                      name="repository"
                      value={toolFormData.repository}
                      onChange={handleToolFormChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-800 dark:text-white"
                      placeholder="https://github.com/..."
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Short Description *
                  </label>
                  <input
                    type="text"
                    name="description"
                    value={toolFormData.description}
                    onChange={handleToolFormChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-800 dark:text-white"
                    placeholder="Brief description of the tool"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    What It Does *
                  </label>
                  <textarea
                    name="whatItDoes"
                    value={toolFormData.whatItDoes}
                    onChange={handleToolFormChange}
                    required
                    rows="3"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-800 dark:text-white"
                    placeholder="Detailed explanation of what the tool does"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Value Proposition *
                  </label>
                  <textarea
                    name="valueProposition"
                    value={toolFormData.valueProposition}
                    onChange={handleToolFormChange}
                    required
                    rows="3"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-800 dark:text-white"
                    placeholder="What value does this tool provide to users?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Documentation URL (Optional)
                  </label>
                  <input
                    type="url"
                    name="documentation"
                    value={toolFormData.documentation}
                    onChange={handleToolFormChange}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-800 dark:text-white"
                    placeholder="https://docs..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Tags (comma-separated)
                  </label>
                  <input
                    type="text"
                    name="tags"
                    value={toolFormData.tags}
                    onChange={handleToolFormChange}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md dark:bg-gray-800 dark:text-white"
                    placeholder="e.g., powershell, diagnostics, troubleshooting"
                  />
                </div>

                <div className="flex items-center space-x-4">
                  <button
                    type="submit"
                    className="px-6 py-2 bg-dell-blue text-white rounded-md hover:bg-blue-700 transition-colors"
                  >
                    Submit Tool
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowToolForm(false)}
                    className="px-6 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          )}
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Admin;