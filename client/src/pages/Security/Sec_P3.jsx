import React from 'react';
import { useOutletContext } from 'react-router-dom';

const Sec_P3 = () => {
  const context = useOutletContext();
  const data = context?.sec?.data;

  return (
    <div className="summary-box">
      <h3>Identity Access Management (IAM)</h3>
      <ul style={{ marginTop: '1rem' }}>
        {data?.skills_found?.map((skill, index) => (
          <li key={index} style={{ padding: '5px 0' }}>✓ Verified Claim: {skill}</li>
        )) || <li>No authorization tokens detected.</li>}
      </ul>
    </div>
  );
};
export default Sec_P3;