import { useState, useEffect } from 'react';
import { loadTools, filterTools, sortTools, calculateStats } from '../utils/dataHelpers';

export const useTools = () => {
  const [tools, setTools] = useState([]);
  const [filteredTools, setFilteredTools] = useState([]);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    search: '',
    status: '',
    team: '',
    tags: []
  });
  const [sortBy, setSortBy] = useState('date');

  useEffect(() => {
    const fetchTools = async () => {
      try {
        setLoading(true);
        const data = await loadTools();
        setTools(data);
        setStats(calculateStats(data));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTools();
  }, []);

  useEffect(() => {
    let result = filterTools(tools, filters);
    result = sortTools(result, sortBy);
    setFilteredTools(result);
  }, [tools, filters, sortBy]);

  const updateFilters = (newFilters) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  const clearFilters = () => {
    setFilters({
      search: '',
      status: '',
      team: '',
      tags: []
    });
  };

  return {
    tools,
    filteredTools,
    stats,
    loading,
    error,
    filters,
    sortBy,
    setSortBy,
    updateFilters,
    clearFilters
  };
};