import React from 'react';
import { useOutletContext } from 'react-router-dom';

const Sec_P1 = () => {
  const context = useOutletContext();
  const data = context?.sec?.data;

  return (
    <div className="summary-box">
      <h3>Encrypted Pipeline Ingestion</h3>
      <div className="telemetry-log" style={{ background: '#0f172a', padding: '15px', color: '#10b981' }}>
        <p>{data ? `[READY] Channel: ${data.type || 'STATIC'} secured.` : "[IDLE] Awaiting telemetry stream..."}</p>
        <p>Encryption: {data ? 'AES_256_GCM_ACTIVE' : 'N/A'}</p>
      </div>
    </div>
  );
};
export default Sec_P1;