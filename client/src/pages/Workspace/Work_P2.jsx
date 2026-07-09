import React from 'react';
import { useOutletContext } from 'react-router-dom';

const Work_P2 = () => {
  const context = useOutletContext();
  const data = context?.work?.data;
  
  return (
    <div className="summary-box">
      <h3>Collaborative Workspace</h3>
      {/* This paragraph will automatically update when data changes */}
      <p>Active session score: {data ? `${data.score}%` : "0%"}</p>
    </div>
  );
};
export default Work_P2;