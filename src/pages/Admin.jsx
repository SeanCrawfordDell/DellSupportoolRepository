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

  const handleRequestStatusChange = (requestId, newStatus) => {
    updateRequest(requestId, { status: newStatus });
  };

  const handleDeleteRequest = (requestId) => {
    if (window.confirm('Are you sure you want to delete this request?')) {
      deleteRequest(requestId);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-gray-50 dark:bg-gray-900 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Admin Dashboard
          </h1>

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
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Admin;