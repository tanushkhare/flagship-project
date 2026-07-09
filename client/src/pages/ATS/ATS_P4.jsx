import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';

const ATS_P4 = () => {
  const context = useOutletContext();
  const data = context?.ats?.data;
  return (
    <div className="summary-box">
      <h3>Persistence & System Telemetry</h3>
      <div style={{ background: '#000', padding: '15px', color: '#4ade80', fontFamily: 'monospace' }}>
        <p>{'>'} System Initialized...</p>
        <p>{'>'} Sync Status: {data?.db_synced ? "COMMITTED" : "PENDING"}</p>
        <p>{'>'} Vector Index: {data?.vector_id || "NOT_INDEXED"}</p>
        <p>{'>'} Processing: {data?.processing_time ? `${data.processing_time}ms` : "0ms"}</p>
      </div>
    </div>
  );
};
export default ATS_P4;