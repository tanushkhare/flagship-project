import React from 'react';
import { useOutletContext } from 'react-router-dom';

// src/pages/ATS/ATS_P3.jsx
const ATS_P3 = () => {
  const context = useOutletContext();
  const { data: resumeData } = context?.ats || {};

  return (
    <div className="summary-box">
      <h3>Semantic Similarity Matrix</h3>
      <div className="p-4 bg-gray-50 rounded">
        <p><strong>Match Confidence:</strong></p>
        <div className="w-full bg-gray-200 h-4 rounded">
          {/* Change .match_score to .score */}
          <div className="bg-blue-600 h-4 rounded" style={{ width: `${resumeData?.score || 0}%` }}></div>
        </div>
        {/* Change .match_score to .score */}
        <p className="mt-2">{resumeData?.score || 0}% Similarity to Target JD</p>
      </div>
    </div>
  );
};
export default ATS_P3;