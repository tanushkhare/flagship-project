import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';

const Work_P1 = () => {
  const context = useOutletContext();
  const data = context?.work?.data;

  return (
    <div className="workspace-container">
      {/* DELETE THE PROJECTNAVBAR TAG FROM HERE */}
      <div className="summary-box">
        <h3>Realtime Streaming Thread Monitor</h3>
        <h4>Channel Health: {data ? 'Synchronized' : 'Standby'}</h4>
      </div>
    </div>
  );
};
export default Work_P1;