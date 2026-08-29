import React from 'react';
import { NavLink } from 'react-router-dom';

const coreModules = [
  { path: "/ats", label: "ATS Optimizer", icon: "📄" },
  { path: "/ins", label: "Insurance Claims", icon: "🏥" },
  { path: "/work", label: "Realtime Workspace", icon: "💬" },
  { path: "/sec", label: "Security DataOps", icon: "🛡️" },
  { path: "/cloud", label: "Cloud Infra", icon: "☁️" },
  { path: "/portfolio", label: "🚀 Portfolio Hub", icon: "🚀" }
];

const microprojects = [
  { id: "01", name: "AI Resume Analyzer", liveUrl: "https://ai-resume-analyzer-xbkoztexkx2dmvq.streamlit.app" },
  { id: "02", name: "Autonomous Research Assistant", liveUrl: "https://autonomous-research-assistant-cvfika.streamlit.app" },
  { id: "03a", name: "Realtime Chatbot", liveUrl: "https://realtime-chatbot.streamlit.app" },
  { id: "03b", name: "Vector RAG Q&A System", liveUrl: "https://vector-rag-app-system.streamlit.app" },
  { id: "04a", name: "AI Meeting Summarizer", liveUrl: "https://ai-meeting-summarizer9.streamlit.app" },
  { id: "04b", name: "Real-Time ETL Dashboard", liveUrl: "https://etl-dashboard09.streamlit.app" },
  { id: "05", name: "Fake News Classifier", liveUrl: "https://fake-news-classifier99.streamlit.app" },
  { id: "06", name: "Collaborative Whiteboard", liveUrl: "https://collaborative-realtime-whiteboard.streamlit.app" },
  { id: "07", name: "Placement Management Portal", liveUrl: "https://placement-management-app.streamlit.app" },
  { id: "08", name: "Voice to SQL Query Engine", liveUrl: "https://voice-to-sql-query-engine.streamlit.app" },
  { id: "09", name: "E-Commerce Microservices", liveUrl: "https://ecommerce-microservices.streamlit.app" },
  { id: "10", name: "Financial Sentiment Streaming", liveUrl: "https://financial-sentiment-streaming.streamlit.app" },
  { id: "11", name: "PySpark Log Analyzer", liveUrl: "https://pyspark-log-analyzer.streamlit.app" },
  { id: "12", name: "Fintech Fraud Detection", liveUrl: "https://fintech-fraud-detection09.streamlit.app" },
  { id: "13", name: "MLOps Retraining Pipeline", liveUrl: "https://mlops-retraining-pipeline.streamlit.app" },
  { id: "14", name: "Packet Sniffer Anomaly Detector", liveUrl: "https://packet-sniffer-anomaly-detector.streamlit.app" },
  { id: "15", name: "Phishing URL Threat Detector", liveUrl: "https://phishing-detector0.streamlit.app" },
  { id: "16", name: "DevOps Telemetry Dashboard", liveUrl: "https://devops-telemetry-dashboard.streamlit.app" },
  { id: "17", name: "Serverless File Pipeline", liveUrl: "https://serverless-file-pipeline.streamlit.app" },
  { id: "18a", name: "Smart Face Attendance", liveUrl: "https://smart-face-attendanc.streamlit.app" },
  { id: "18b", name: "Smart Factory IoT Telemetry", liveUrl: "https://smart-factory-iot.streamlit.app" },
  { id: "19", name: "Spatial Asset Geofencing", liveUrl: "https://spatial-asset-geofencing.streamlit.app" },
  { id: "20", name: "IoT Energy Monitoring", liveUrl: "https://iot-energy-monitoring.streamlit.app" }
];

export default function Sidebar() {
  return (
    <aside style={{ width: '280px', background: '#0f172a', color: '#e2e8f0', height: '100vh', overflowY: 'auto', padding: '1.5rem 1rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
      <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', paddingLeft: '0.5rem' }}>
          <span style={{ fontSize: '1.5rem' }}>⚡</span>
          <h2 style={{ fontSize: '1.25rem', fontWeight: '800', color: '#fff', margin: 0 }}>Flagship Portal</h2>
        </div>
        
        <div style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', color: '#64748b', letterSpacing: '0.05em', marginBottom: '0.75rem', paddingLeft: '0.5rem' }}>
          Core Modules
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
          {coreModules.map((m) => (
            <NavLink
              key={m.path}
              to={m.path}
              style={({ isActive }) => ({
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '0.65rem 0.75rem',
                borderRadius: '6px',
                color: isActive ? '#fff' : '#94a3b8',
                background: isActive ? '#1e293b' : 'transparent',
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: '500',
                transition: 'all 0.2s'
              })}
            >
              <span>{m.icon}</span>
              <span>{m.label}</span>
            </NavLink>
          ))}
        </div>
      </div>

      <div>
        <div style={{ fontSize: '0.75rem', fontWeight: '700', textTransform: 'uppercase', color: '#64748b', letterSpacing: '0.05em', marginBottom: '0.75rem', paddingLeft: '0.5rem' }}>
          Microprojects (23)
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
          {microprojects.map((p) => (
            <a
              key={p.id}
              href={p.liveUrl}
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '0.5rem 0.75rem',
                borderRadius: '6px',
                color: '#94a3b8',
                textDecoration: 'none',
                fontSize: '0.85rem',
                fontWeight: '400',
                transition: 'background 0.2s'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#1e293b'; e.currentTarget.style.color = '#38bdf8'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#94a3b8'; }}
            >
              <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{p.name}</span>
              <span style={{ fontSize: '0.8rem', color: '#38bdf8', opacity: 0.8 }}>↗</span>
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
}
