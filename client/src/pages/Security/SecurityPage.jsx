import React, { useState } from 'react';
import { useOutletContext, Outlet, useLocation } from 'react-router-dom';
import ProjectNavbar from '../../components/ProjectNavbar';
import './Security.css'; 

const SecurityPage = () => {
  const context = useOutletContext();
  const location = useLocation();
  const isDashboard = location.pathname === '/sec';
  const { data: secData, setter: setSecData } = context?.sec || {};

  const [scanType, setScanType] = useState('static');
  const [scanning, setScanning] = useState(false);
  const [message, setMessage] = useState(null);
  const [scanResults, setScanResults] = useState(null);

  const runSecurityScan = async () => {
    setScanning(true);
    setMessage(null);
    setScanResults(null);
    try {
      const response = await fetch('http://localhost:8000/api/security/scan', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: scanType }),
      });
      
      if (!response.ok) throw new Error("Scan failed. Server error.");
      
      const data = await response.json();
      setScanResults(data);
      setMessage("Scan complete: System secured.");
      if (setSecData) setSecData(data);
    } catch (error) { 
      console.error(error);
      setMessage("Error: Failed to connect to security pipeline.");
    } finally { 
      setScanning(false); 
    }
  };

  return (
    <div className="soc-container">
      <ProjectNavbar basePath="sec" links={["Threats", "Logs", "Integrity", "VPC"]} />
      
      <div className="p-8">
        {isDashboard && (
          <div className="soc-header">
            <header>
              <h2 className="text-xl font-bold mb-4">Security Operations Center (SOC)</h2>
              <div className="toggle-group">
  <button 
    className={`btn-base ${scanType === 'static' ? 'btn-active' : 'btn-inactive'}`} 
    onClick={() => setScanType('static')}
  >
    Static Scan
  </button>
  <button 
    className={`btn-base ${scanType === 'dynamic' ? 'btn-active' : 'btn-inactive'}`} 
    onClick={() => setScanType('dynamic')}
  >
    External Scan
  </button>
</div>
            </header>

            <button 
              className="workspace-button soc-scan-btn"
              onClick={runSecurityScan} 
              disabled={scanning}
            >
              {scanning ? 'Analyzing...' : 'Initiate Scan'}
            </button>
            
            {/* Error/Status Box */}
            {message && (
              <div className="mt-5 p-4 rounded-md border" style={{ 
                backgroundColor: message.includes("Error") ? '#fee2e2' : '#dcfce7',
                color: message.includes("Error") ? '#991b1b' : '#166534'
              }}>
                {message}
              </div>
            )}

            {/* Data Result Box */}
            {scanResults && (
              <pre className="mt-5 p-4 bg-slate-100 rounded-md overflow-x-auto">
                {JSON.stringify(scanResults, null, 2)}
              </pre>
            )}
          </div>
        )}
        <Outlet context={context} /> 
      </div>
    </div>
  );
};

export default SecurityPage;