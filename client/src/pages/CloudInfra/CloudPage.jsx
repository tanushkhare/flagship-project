import React, { useState, useEffect } from 'react';
import { useOutletContext, Outlet, useLocation } from 'react-router-dom'; // 1. Added useLocation
import ProjectNavbar from '../../components/ProjectNavbar';
import './Cloud.css';

const CloudPage = () => {
  const context = useOutletContext();
  const location = useLocation(); // 2. Detect current path
  const { data: cloudData, setter: setCloudData } = context?.cloud || {};

  // Check if we are on the main dashboard page
  const isDashboard = location.pathname === '/cloud';

  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (cloudData) setProjects(cloudData);
  }, [cloudData]);

  const fetchInfrastructureStatus = async () => {
    setLoading(true);
    try {
      const endpoints = ['p1', 'p2', 'p3', 'p4'];
      const responses = await Promise.all(
        endpoints.map(ep => fetch(`http://localhost:8000/api/cloud/${ep}`))
      );
      const data = await Promise.all(responses.map(r => r.json()));
      const newData = [...data];
      setProjects(data);
      if (setCloudData) setCloudData(data);
    } catch (error) {
      console.error("Infrastructure link error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="cloud-container">
      <ProjectNavbar basePath="cloud" links={["Fleet", "Docker", "Terraform", "CI/CD"]} />
      
      {/* Outlet renders the dynamic sub-page content */}
      <div className="dynamic-subpage-container">
        <Outlet /> 
      </div>
      
      {/* 3. Conditional Rendering: Only show dashboard grid if isDashboard is true */}
      {isDashboard && (
        <>
          <header className="cloud-header">
            <h2>Infrastructure Orchestration</h2>
            <button className="soc-scan-btn" onClick={fetchInfrastructureStatus} disabled={loading}>
              {loading ? 'Syncing...' : 'Sync All Modules'}
            </button>
          </header>

          <div className="infra-grid">
            {loading ? (
              [1, 2, 3, 4].map(n => <div key={n} className="infra-card skeleton">Syncing...</div>)
            ) : projects.length > 0 ? (
              projects.map((p, idx) => (
                <div key={idx} className="infra-card">
                  <h4>{p.project || `Module P${idx + 1}`}</h4>
                  <span className={`status-dot ${p.status === 'Operational' ? 'green' : 'red'}`}></span>
                  <p>{p.status || 'Active'}</p>
                </div>
              ))
            ) : (
              <div className="empty-state">
                <p>No active infrastructure detected. Trigger a sync.</p>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default CloudPage;