// src/pages/CloudInfra/Cloud_SubPage.jsx
import React, { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';

const Cloud_SubPage = ({ index, title }) => {
  const context = useOutletContext();
  
  // Directly access the data array
  const cloudData = context?.cloud?.data;
  
  // Use state to make the sub-page reactive
  const [data, setData] = useState(cloudData ? cloudData[index] : null);

  useEffect(() => {
    // This listener triggers whenever cloudData changes in the MainLayout Hub
    if (cloudData && cloudData[index]) {
      setData(cloudData[index]);
    } else {
      setData(null);
    }
  }, [cloudData, index]); // IMPORTANT: Reacts to context updates

  return (
    <div className="summary-box">
      <h3>{title}</h3>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Telemetry stream inactive. Please sync from the Infrastructure Dashboard.</p>
      )}
    </div>
  );
};
export default Cloud_SubPage;