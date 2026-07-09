import React, { useState } from 'react';
import { useOutletContext, Outlet, useLocation } from 'react-router-dom';
import ProjectNavbar from '../../components/ProjectNavbar';
import '../../components/RealtimeWorkspace.css'; 

const ATSModule = () => {
  const context = useOutletContext();
  const location = useLocation();
  const isSubPage = location.pathname.includes('/p');

  const [loading, setLoading] = useState(false);
  // localAnalysis uses the global state if available, or starts null
  const [localAnalysis, setLocalAnalysis] = useState(context?.ats?.data || null);
  
  const moduleContext = { 
    ...context, 
    ats: { data: localAnalysis, setter: setLocalAnalysis } 
  };

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setLoading(true);
    const formData = new FormData();
    formData.append("file", file);
    
    try {
      const response = await fetch('http://localhost:8000/api/ats/optimize', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      
      // 1. Update local UI
      setLocalAnalysis(data);
      
      // 2. Update MainLayout Global State (The Bridge)
      if (context?.ats?.setter) {
        context.ats.setter(data);
      }
    } catch (error) {
      console.error("Upload failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="workspace-container">
      <ProjectNavbar basePath="ats" links={["Async", "Skill", "Similarity", "DB"]} />
      
      {isSubPage ? (
        <Outlet context={moduleContext} />
      ) : (
        <div className="dashboard-content">
          <header className="workspace-header">
            <h2>ATS Optimization Engine</h2>
          </header>
          <div className="input-section">
            <label className="workspace-button">
              {loading ? 'Analyzing...' : 'Upload Resume'}
              <input type="file" onChange={handleUpload} style={{ display: 'none' }} />
            </label>
          </div>
          {localAnalysis && <pre>{JSON.stringify(localAnalysis, null, 2)}</pre>}
        </div>
      )}
    </div>
  );
};

export default ATSModule;