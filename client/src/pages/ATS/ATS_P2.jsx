import React from 'react';
import { useOutletContext } from 'react-router-dom';

// src/pages/ATS/ATS_P2.jsx
const ATS_P2 = () => {
  const context = useOutletContext();
  const { data: resumeData } = context?.ats || {};

  return (
    <div className="summary-box">
      <h3>Skill Gap Analysis</h3>
      <div className="metrics-grid">
        <div className="metric-card">
          <p>TOTAL SKILLS FOUND</p>
          {/* Change .skills to .missing_keywords */}
          <h4>{resumeData?.missing_keywords?.length || 0}</h4>
        </div>
      </div>
      <div className="mt-4">
        <h4>Extracted Inventory:</h4>
        <ul className="list-disc pl-5">
          {/* Change .skills to .missing_keywords */}
          {resumeData?.missing_keywords?.map((s, i) => <li key={i}>{s}</li>) || <li>No data</li>}
        </ul>
      </div>
    </div>
  );
};
export default ATS_P2;