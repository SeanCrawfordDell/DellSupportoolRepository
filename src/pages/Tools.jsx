import { Link } from 'react-router-dom';
import { useTools } from '../hooks/useTools';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import StatusBadge from '../components/tools/StatusBadge';
import ProgressBar from '../components/ui/ProgressBar';

const Tools = () => {
  const { filteredTools, loading, filters, sortBy, setSortBy, updateFilters, clearFilters } = useTools();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-dell-blue"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow bg-gray-50 dark:bg-gray-900 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Tools Catalog
            </h1>
            
            {/* Search and Filters */}
            <div className="card mb-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Search
                  </label>
                  <input
                    type="text"
                    placeholder="Search tools..."
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
                    <option value="idea">Idea</option>
                    <option value="planning">Planning</option>
                    <option value="development">Development</option>
                    <option value="testing">Testing</option>
                    <option value="released">Released</option>
                    <option value="maintenance">Maintenance</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Team
                  </label>
                  <select
                    value={filters.team}
                    onChange={(e) => updateFilters({ team: e.target.value })}
                    className="input-field"
                  >
                    <option value="">All Teams</option>
                    <option value="Cloud">Cloud</option>
                    <option value="Compute">Compute</option>
                    <option value="Platform">Platform</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Sort By
                  </label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="input-field"
                  >
                    <option value="date">Last Updated</option>
                    <option value="name">Name</option>
                    <option value="progress">Progress</option>
                  </select>
                </div>
              </div>
              
              {(filters.search || filters.status || filters.team) && (
                <button
                  onClick={clearFilters}
                  className="mt-4 text-sm text-dell-blue hover:underline"
                >
                  Clear Filters
                </button>
              )}
            </div>
          </div>

          {/* Tools Grid */}
          {filteredTools.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                No tools found matching your criteria.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTools.map(tool => (
                <Link key={tool.id} to={`/tools/${tool.id}`} className="block">
                  <div className="card hover:shadow-lg transition-shadow h-full">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {tool.name}
                      </h3>
                      <StatusBadge status={tool.status} />
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                      {tool.description}
                    </p>
                    <div className="mb-4">
                      <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-1">
                        <span>Progress</span>
                        <span>{tool.progress}%</span>
                      </div>
                      <ProgressBar progress={tool.progress} size="sm" />
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {tool.tags.slice(0, 3).map(tag => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                      <span>{tool.team}</span>
                      <span>{tool.owner}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Tools;