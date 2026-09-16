import { useState, useEffect } from 'react';
import { loadFeatureRequests, filterRequests } from '../utils/dataHelpers';
import { getIssues, createIssue, updateIssue, isConfigured, parseIssueToRequest } from '../services/githubApi';

export const useRequests = () => {
  const [requests, setRequests] = useState([]);
  const [filteredRequests, setFilteredRequests] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [githubEnabled, setGithubEnabled] = useState(false);
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
        
        // Check if GitHub API is configured
        const githubConfigured = isConfigured();
        setGithubEnabled(githubConfigured);

        if (githubConfigured) {
          // Try to fetch from GitHub Issues
          try {
            const issues = await getIssues();
            const parsedRequests = issues
              .filter(issue => !issue.pull_request) // Filter out PRs
              .map(parseIssueToRequest);
            setRequests(parsedRequests);
          } catch (githubError) {
            console.error('GitHub API error, falling back to local data:', githubError);
            // Fallback to local JSON if GitHub fails
            const data = await loadFeatureRequests();
            setRequests(data);
          }
        } else {
          // Use local JSON if GitHub not configured
          const data = await loadFeatureRequests();
          setRequests(data);
        }
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

  const addRequest = async (newRequest) => {
    const requestWithId = {
      ...newRequest,
      id: `req-${Date.now()}`,
      status: 'pending',
      createdAt: new Date().toISOString().split('T')[0],
      updatedAt: new Date().toISOString().split('T')[0]
    };

    if (githubEnabled) {
      try {
        const issue = await createIssue(requestWithId);
        if (issue) {
          const parsedRequest = parseIssueToRequest(issue);
          setRequests(prev => [...prev, parsedRequest]);
          return;
        }
      } catch (error) {
        console.error('Failed to create GitHub issue:', error);
        // Fall back to local-only if GitHub fails
      }
    }

    setRequests(prev => [...prev, requestWithId]);
  };

  const updateRequest = async (id, updates) => {
    const updatedRequest = {
      ...updates,
      updatedAt: new Date().toISOString().split('T')[0]
    };

    if (githubEnabled) {
      const existingRequest = requests.find(req => req.id === id);
      if (existingRequest?.githubIssueNumber) {
        try {
          await updateIssue(existingRequest.githubIssueNumber, {
            ...existingRequest,
            ...updatedRequest
          });
        } catch (error) {
          console.error('Failed to update GitHub issue:', error);
          // Fall back to local-only if GitHub fails
        }
      }
    }

    setRequests(prev => 
      prev.map(req => 
        req.id === id 
          ? { ...req, ...updatedRequest }
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
    githubEnabled,
    filters,
    updateFilters,
    clearFilters,
    addRequest,
    updateRequest,
    deleteRequest
  };
};