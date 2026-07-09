import React, { useState, useEffect } from 'react';
import { useOutletContext, Outlet, useLocation } from 'react-router-dom';
import ProjectNavbar from '../../components/ProjectNavbar';
import '../../components/RealtimeWorkspace.css'; 

const InsuranceModule = () => {
  const context = useOutletContext();
  const location = useLocation();
  const isSubPage = location.pathname.includes('/p');

  // STRICT CLEANING: Prevents Array(2) propagation
  const cleanContext = (Array.isArray(context) || !context) ? {} : context;

  const [question, setQuestion] = useState('');
  const [loading, setLoading] = useState(false);
  const [answer, setAnswer] = useState(cleanContext?.ins?.data || null);

  // The hub passed to sub-pages (P1, P2, P3, P4)
  const moduleContext = { 
    ...cleanContext, 
    ins: { data: answer, setter: setAnswer } 
  };

  // Lifecycle & Sync Logs
  useEffect(() => {
    console.log("--- INSURANCE MODULE MOUNTED ---");
    return () => console.log("--- INSURANCE MODULE UNMOUNTED ---");
  }, []);

  useEffect(() => {
    if (cleanContext?.ins?.data) {
      setAnswer(cleanContext.ins.data);
    }
  }, [cleanContext?.ins?.data]);

  const handleQuery = async () => {
    setLoading(true);
    try {
      const response = await fetch('http://localhost:8000/api/insurance/query', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: question }),
      });
      const data = await response.json();
      
      console.log("API RESPONSE RECEIVED:", data);
      
      setAnswer(data);
      
      if (cleanContext?.ins?.setter) {
        cleanContext.ins.setter(data);
      }
    } catch (error) {
      console.error("Query failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="workspace-container">
      <ProjectNavbar basePath="ins" links={["Claims", "Risk", "Policies", "Ledger"]} />
      
      {isSubPage ? (
        <Outlet context={moduleContext} />
      ) : (
        <div className="dashboard-content">
          {/* UPDATED: Metrics grid now displaying dynamic AI result */}
          <div className="metrics-grid">
            <div className="metric-card">
              <p>AI ANALYSIS RESULT</p>
              <h4 style={{ fontSize: '0.9rem' }}>{answer?.result || "No data yet"}</h4>
            </div>
          </div>

          <div className="input-section">
            <textarea 
              className="workspace-textarea" 
              placeholder="Ask about policy coverage..." 
              value={question} 
              onChange={(e) => setQuestion(e.target.value)} 
            />
            <button 
              className="workspace-button" 
              onClick={handleQuery} 
              disabled={loading}
            >
              {loading ? 'Processing...' : 'Query AI Engine'}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default InsuranceModule;