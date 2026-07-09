import React from 'react';
import { useOutletContext, useNavigate } from 'react-router-dom';
import ProjectNavbar from '../../components/ProjectNavbar';
import './ATSModule.css';

const ATS_P1 = () => {
  const context = useOutletContext();
  
  // Clean, single extraction from the dedicated ATS workspace channel object
  const { data: resumeData } = context?.ats || {};
  
  console.log("ATS_P1 Data Stream Check:", resumeData);
  const navigate = useNavigate();

  if (!resumeData) {
    return (
      <div className="workspace-container">
        <ProjectNavbar basePath="ats" links={["Async", "Skill", "Similarity", "DB"]} />
        <div className="summary-box" style={{ textAlign: 'center', padding: '2rem' }}>
          <h4 style={{ color: '#ef4444' }}>⚠️ No Data Stream Detected in Async Parser</h4>
          <p style={{ color: '#64748b', marginBottom: '1.5rem' }}>
            Please ensure you uploaded a file on the Dashboard Home screen before clicking this tab.
          </p>
          <button 
            onClick={() => navigate('/ats')} 
            className="workspace-button"
            style={{ backgroundColor: '#2563eb', color: 'white', border: 'none', padding: '0.5rem 1rem', borderRadius: '4px', cursor: 'pointer' }}
          >
            Return to Dashboard Home & Upload
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="workspace-container">
      <ProjectNavbar basePath="ats" links={["Async", "Skill", "Similarity", "DB"]} />
      
      <div className="summary-box">
        <div>
          <h3>Async Parser: System Analysis</h3>
          <div className="metrics-grid">
            <div className="metric-card">
              <p>SCORE</p>
              <h4>{resumeData.score}/100</h4>
            </div>
            <div className="metric-card">
              <p>LATENCY</p>
              <h4>{resumeData.latency ? `${resumeData.latency}ms` : "N/A"}</h4>
            </div>
          </div>
          
          <div className="mt-6" style={{ marginTop: '1.5rem' }}>
            <strong>Parsed Analysis Payload:</strong>
            <pre style={{ backgroundColor: '#f8fafc', padding: '1rem', borderRadius: '6px', marginTop: '0.5rem', overflowX: 'auto' }}>
              {JSON.stringify(resumeData, null, 2)}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ATS_P1;