// Data loading utilities
export const loadData = async (filename) => {
  try {
    const response = await fetch(`/data/${filename}`);
    if (!response.ok) {
      throw new Error(`Failed to load ${filename}`);
    }
    return await response.json();
  } catch (error) {
    console.error(`Error loading ${filename}:`, error);
    return null;
  }
};

export const loadTools = async () => {
  const data = await loadData('tools.json');
  return data?.tools || [];
};

export const loadFeatureRequests = async () => {
  const data = await loadData('feature-requests.json');
  return data?.requests || [];
};

export const loadConfig = async () => {
  return await loadData('config.json');
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