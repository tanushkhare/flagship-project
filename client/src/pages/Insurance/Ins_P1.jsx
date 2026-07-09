import React, { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';

const Ins_P1 = () => {
  const context = useOutletContext();
  const data = context?.ins?.data;
  return (
    <div className="summary-box">
      <h3>Automated Claims Verification</h3>
      {/* Fallback to result if score is missing */}
      <div className="metric-card">
        <h4>{data?.score ? `${data.score}% Confirmed` : "Analysis Result:"}</h4>
      </div>
      <p style={{ whiteSpace: 'pre-wrap' }}>{data?.result || "Perform a query to see results."}</p>
    </div>
  );
};
export default Ins_P1;