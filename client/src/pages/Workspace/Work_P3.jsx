import React from 'react';
import { useOutletContext } from 'react-router-dom';

const Work_P3 = () => {
  const context = useOutletContext();
  const data = context?.work?.data;
  
  return (
    <div className="summary-box">
      <h3>Operational Node Topography</h3>
      {/* This paragraph will automatically update when data changes */}
      <p>Cluster nodes mapped: {data ? data.nodes : "0"}</p>
    </div>
  );
};
export default Work_P3;