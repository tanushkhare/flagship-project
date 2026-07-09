import React from 'react';
import { useOutletContext } from 'react-router-dom';

const Sec_P4 = () => {
  const context = useOutletContext();
  const data = context?.sec?.data;

  return (
    <div className="summary-box">
      <h3>Cryptographic Audit Ledger</h3>
      <pre style={{ background: '#1e293b', color: '#f8fafc', padding: '1rem', overflowX: 'auto' }}>
        {data 
          ? `LOG: ${new Date().toISOString()}\nSTATUS: SUCCESS\nLATENCY: ${data.latency || 0}ms\nHASH: ${btoa(JSON.stringify(data)).substring(0, 32)}...` 
          : "Ledger empty."}
      </pre>
    </div>
  );
};
export default Sec_P4;