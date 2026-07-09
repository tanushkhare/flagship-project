import React from 'react';
import { useOutletContext } from 'react-router-dom';

const Sec_P2 = () => {
  const context = useOutletContext();
  const data = context?.sec?.data;

  return (
    <div className="summary-box">
      {/* 1. DELETE THE ENTIRE <ProjectNavbar /> TAG FROM HERE */}
      
      <h3>Threat Boundary Matrix Assessment</h3>
      <p>
        {data 
          ? `Analyzed threat risk profile: ${(100 - (data.score || 0))}% margin.` 
          : "Scanning vector pipeline empty. Please initiate a scan from the SOC dashboard."}
      </p>
    </div>
  );
};
export default Sec_P2;