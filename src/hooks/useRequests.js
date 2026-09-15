import { useState, useEffect } from 'react';
import { loadFeatureRequests, filterRequests } from '../utils/dataHelpers';

export const useRequests = () => {
  const [requests, setRequests] = useState([]);
  const [filteredRequests, setFilteredRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({
    search: '',
    status: '',
    type: '',
    priority: '',
    toolId: ''
  });

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        setLoading(true);
        const data = await loadFeatureRequests();
        setRequests(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRequests();
  }, []);

  useEffect(() => {
    const result = filterRequests(requests, filters);
    setFilteredRequests(result);
  }, [requests, filters]);

  const updateFilters = (newFilters) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  };

  const clearFilters = () => {
    setFilters({
      search: '',
      status: '',
      type: '',
      priority: '',
      toolId: ''
    });
  };

  const addRequest = (newRequest) => {
    const requestWithId = {
      ...newRequest,
      id: `req-${Date.now()}`,
      createdAt: new Date().toISOString().split('T')[0],
      updatedAt: new Date().toISOString().split('T')[0]
    };
    setRequests(prev => [...prev, requestWithId]);
  };

  const updateRequest = (id, updates) => {
    setRequests(prev => 
      prev.map(req => 
        req.id === id 
          ? { ...req, ...updates, updatedAt: new Date().toISOString().split('T')[0] }
          : req
      )
    );
  };

  const deleteRequest = (id) => {
    setRequests(prev => prev.filter(req => req.id !== id));
  };

  return {
    requests,
    filteredRequests,
    loading,
    error,
    filters,
    updateFilters,
    clearFilters,
    addRequest,
    updateRequest,
    deleteRequest
  };
};