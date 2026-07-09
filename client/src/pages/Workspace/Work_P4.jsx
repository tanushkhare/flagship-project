import React from 'react';
import { useOutletContext } from 'react-router-dom';
// 1. DELETE the ProjectNavbar import line here

const Work_P4 = () => {
  const context = useOutletContext();
  const data = context?.work?.data;

  return (
    <div className="workspace-container">
      {/* 2. DELETE the <ProjectNavbar /> component call here */}
      <div className="summary-box">
        <h3>Unified Telemetry Engine</h3>
        <pre>{data ? JSON.stringify(data, null, 2) : "> System idling..."}</pre>
      </div>
    </div>
  );
};
export default Work_P4;