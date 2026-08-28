import React, { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const projects = [
  { id: "01", name: "AI Resume Analyzer", repo: "ai-resume-analyzer" },
  { id: "02", name: "Autonomous Research Assistant", repo: "autonomous-research-assistant" },
  { id: "03a", name: "Realtime Chatbot", repo: "realtime-chatbot" },
  { id: "03b", name: "Vector RAG Q&A System", repo: "vector-rag-qa-system" },
  { id: "04a", name: "AI Meeting Summarizer", repo: "ai-meeting-summarizer" },
  { id: "04b", name: "Real-Time ETL Dashboard", repo: "etl-dashboard" },
  { id: "05", name: "Fake News Classifier", repo: "fake-news-classifier" },
  { id: "06", name: "Collaborative Whiteboard", repo: "collaborative-realtime-whiteboard" },
  { id: "07", name: "Placement Management Portal", repo: "placement-management-portal" },
  { id: "08", name: "Voice to SQL Query Engine", repo: "voice-to-sql-query-engine" },
  { id: "09", name: "E-Commerce Microservices", repo: "ecommerce-microservices" },
  { id: "10", name: "Financial Sentiment Streaming", repo: "financial-sentiment-streaming" },
  { id: "11", name: "PySpark Log Analyzer", repo: "pyspark-log-analyzer" },
  { id: "12", name: "Fintech Fraud Detection", repo: "fintech-fraud-detection" },
  { id: "13", name: "MLOps Retraining Pipeline", repo: "mlops-retraining-pipeline" },
  { id: "14", name: "Packet Sniffer Anomaly Detector", repo: "packet-sniffer-anomaly-detector" },
  { id: "15", name: "Phishing URL Threat Detector", repo: "phishing-detector" },
  { id: "16", name: "DevOps Telemetry Dashboard", repo: "devops-telemetry-dashboard" },
  { id: "17", name: "Serverless File Pipeline", repo: "serverless-file-pipeline" },
  { id: "18a", name: "Smart Face Attendance", repo: "smart-face-attendance" },
  { id: "18b", name: "Smart Factory IoT Telemetry", repo: "Smart-Factory-IOT" },
  { id: "19", name: "Spatial Asset Geofencing", repo: "spatial-asset-geofencing" },
  { id: "20", name: "IoT Energy Monitoring", repo: "iot-energy-monitoring" }
];

export default function MainLayout() {
  const [showProjects, setShowProjects] = useState(true);
  const location = useLocation();

  const mainLinks = [
    { path: "/ats", label: "ATS Optimizer" },
    { path: "/ins", label: "Insurance Claims" },
    { path: "/work", label: "Realtime Workspace" },
    { path: "/sec", label: "Security DataOps" },
    { path: "/cloud", label: "Cloud Infra" },
    { path: "/portfolio", label: "🚀 Portfolio Hub" }
  ];

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#ffffff', fontFamily: 'system-ui, sans-serif' }}>
      {/* Left Sidebar Box */}
      <aside style={{
        width: '260px',
        background: '#131e2e',
        color: '#cbd5e1',
        height: '100vh',
        position: 'sticky',
        top: 0,
        padding: '24px 16px',
        overflowY: 'auto',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        flexShrink: 0
      }}>
        {/* Flagship Title -> Full Page Reload to Root Home */}
        <a 
          href="/" 
          style={{ 
            textDecoration: 'none', 
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '1.8rem',
            cursor: 'pointer'
          }}
          title="Click to reload home page"
        >
          <span style={{ fontSize: '1.4rem' }}>⚡</span>
          <h2 style={{ fontSize: '1.25rem', fontWeight: '800', margin: 0, color: '#ffffff' }}>
            Flagship Portal
          </h2>
        </a>

        {/* Core Modules List */}
        <div style={{ fontSize: '0.72rem', fontWeight: '700', color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
          Core Modules
        </div>
        <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 1.5rem 0' }}>
          {mainLinks.map((link) => {
            const isActive = location.pathname.startsWith(link.path);
            return (
              <li key={link.path} style={{ marginBottom: '4px' }}>
                <Link
                  to={link.path}
                  style={{
                    display: 'block',
                    padding: '8px 12px',
                    borderRadius: '6px',
                    textDecoration: 'none',
                    fontSize: '0.92rem',
                    fontWeight: isActive ? '600' : '400',
                    color: isActive ? '#ffffff' : '#94a3b8',
                    background: isActive ? '#1e293b' : 'transparent',
                    borderLeft: isActive ? '3px solid #3b82f6' : '3px solid transparent'
                  }}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Microprojects Section */}
        <div style={{ borderTop: '1px solid #1e293b', paddingTop: '1rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
          <div 
            onClick={() => setShowProjects(!showProjects)}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              cursor: 'pointer',
              fontSize: '0.72rem',
              fontWeight: '700',
              color: '#64748b',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '0.6rem'
            }}
          >
            <span>Microprojects ({projects.length})</span>
            <span>{showProjects ? '▾' : '▸'}</span>
          </div>

          {showProjects && (
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, flex: 1, overflowY: 'auto' }}>
              {projects.map((p) => (
                <li key={p.id} style={{ marginBottom: '2px' }}>
                  <a
                    href={`https://github.com/tanushkhare/${p.repo}`}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      padding: '6px 8px',
                      borderRadius: '4px',
                      fontSize: '0.8rem',
                      color: '#94a3b8',
                      textDecoration: 'none',
                      transition: '0.2s'
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = '#ffffff'; e.currentTarget.style.background = '#1e293b'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = '#94a3b8'; e.currentTarget.style.background = 'transparent'; }}
                  >
                    <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {p.name}
                    </span>
                    <span style={{ color: '#3b82f6', marginLeft: '6px', fontSize: '0.75rem' }}>↗</span>
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </aside>

      {/* Main Page Outlet */}
      <main style={{ flex: 1, overflowY: 'auto', background: '#ffffff' }}>
        <Outlet />
      </main>
    </div>
  );
}
