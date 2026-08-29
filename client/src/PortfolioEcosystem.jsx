import React, { useState } from 'react';

const projects = [
  { id: "01", name: "AI Resume Analyzer", category: "AI & NLP", repo: "ai-resume-analyzer", liveUrl: "https://ai-resume-analyzer-xbkoztexkx2dmvqv7mbpze.streamlit.app", desc: "spaCy NER PDF resume parser with cosine similarity matching." },
  { id: "02", name: "Autonomous Research Assistant", category: "Agentic AI", repo: "autonomous-research-assistant", liveUrl: "https://autonomous-research-assistant-cvfikaelvk7cwutlxyhrkn.streamlit.app", desc: "Agentic multi-hop research pipeline with source validation." },
  { id: "03a", name: "Realtime Chatbot", category: "WebSockets", repo: "realtime-chatbot", liveUrl: "https://realtime-chatbot.streamlit.app", desc: "Asynchronous WebSocket streaming session assistant." },
  { id: "03b", name: "Vector RAG Q&A System", category: "Vector Search", repo: "vector-rag-qa-system", liveUrl: "https://vector-rag-app-system.streamlit.app", desc: "Dense vector retrieval engine with text chunking and similarity search." },
  { id: "04a", name: "AI Meeting Summarizer", category: "AI & NLP", repo: "ai-meeting-summarizer", liveUrl: "https://ai-meeting-summarizer9.streamlit.app", desc: "Audio transcript summarization and action item extractor." },
  { id: "04b", name: "Real-Time ETL Dashboard", category: "DataOps", repo: "etl-dashboard", liveUrl: "https://etl-dashboard09.streamlit.app", desc: "Stream data ingestion pipeline with transformation metrics." },
  { id: "05", name: "Fake News Classifier", category: "AI & NLP", repo: "fake-news-classifier", liveUrl: "https://fake-news-classifier99.streamlit.app", desc: "Linguistic cue credibility scoring engine." },
  { id: "06", name: "Collaborative Whiteboard", category: "WebSockets", repo: "collaborative-realtime-whiteboard", liveUrl: "https://collaborative-realtime-whiteboard.streamlit.app", desc: "Multi-client real-time canvas synchronization via WebSockets." },
  { id: "07", name: "Placement Management Portal", category: "Fullstack", repo: "placement-management-portal", liveUrl: "https://placement-management-app.streamlit.app", desc: "Academic eligibility screening and career application tracker." },
  { id: "08", name: "Voice to SQL Query Engine", category: "DataOps", repo: "voice-to-sql-query-engine", liveUrl: "https://voice-to-sql-query-engine.streamlit.app", desc: "AST SQL sandboxing and safe relational query synthesis." },
  { id: "09", name: "E-Commerce Microservices", category: "Distributed Systems", repo: "ecommerce-microservices", liveUrl: "https://ecommerce-microservices.streamlit.app", desc: "Atomic mutex-locked multi-tier checkout microservices." },
  { id: "10", name: "Financial Sentiment Streaming", category: "Fintech & Data", repo: "financial-sentiment-streaming", liveUrl: "https://financial-sentiment-streaming.streamlit.app", desc: "Market sentiment polarity stream analyzer." },
  { id: "11", name: "PySpark Log Analyzer", category: "Big Data & PySpark", repo: "pyspark-log-analyzer", liveUrl: "https://pyspark-log-analyzer.streamlit.app", desc: "Distributed log partitioning and error surge detection." },
  { id: "12", name: "Fintech Fraud Detection", category: "Fintech & Data", repo: "fintech-fraud-detection", liveUrl: "https://fintech-fraud-detection09.streamlit.app", desc: "Behavioral anomaly risk evaluation engine." },
  { id: "13", name: "MLOps Retraining Pipeline", category: "MLOps", repo: "mlops-retraining-pipeline", liveUrl: "https://mlops-retraining-pipeline.streamlit.app", desc: "PSI and Kolmogorov-Smirnov drift detection control plane." },
  { id: "14", name: "Packet Sniffer Anomaly Detector", category: "Cybersecurity", repo: "packet-sniffer-anomaly-detector", liveUrl: "https://packet-sniffer-anomaly-detector.streamlit.app", desc: "Socket frame capture and volumetric surge classification." },
  { id: "15", name: "Phishing URL Threat Detector", category: "Cybersecurity", repo: "phishing-detector", liveUrl: "https://phishing-detector0.streamlit.app", desc: "Lexical Shannon entropy scoring and domain threat scanner." },
  { id: "16", name: "DevOps Telemetry Dashboard", category: "DevOps & Zero-Trust", repo: "devops-telemetry-dashboard", liveUrl: "https://devops-telemetry-dashboard.streamlit.app", desc: "Zero-Trust IAM origin verification and cluster harvester." },
  { id: "17", name: "Serverless File Pipeline", category: "Cloud & Serverless", repo: "serverless-file-pipeline", liveUrl: "https://serverless-file-pipeline.streamlit.app", desc: "S3 event-driven automated execution pipeline." },
  { id: "18a", name: "Smart Face Attendance", category: "Computer Vision", repo: "smart-face-attendance", liveUrl: "https://smart-face-attendanc.streamlit.app", desc: "Biometric face verification and attendance database." },
  { id: "18b", name: "Smart Factory IoT Telemetry", category: "IoT & Smart Grid", repo: "Smart-Factory-IOT", liveUrl: "https://smart-factory-iot.streamlit.app", desc: "ISO 10816 vibration analytics and RUL degradation curves." },
  { id: "19", name: "Spatial Asset Geofencing", category: "GIS & Spatial AI", repo: "spatial-asset-geofencing", liveUrl: "https://spatial-asset-geofencing.streamlit.app", desc: "Shapely Point-in-Polygon containment calculation." },
  { id: "20", name: "IoT Energy Monitoring", category: "IoT & Smart Grid", repo: "iot-energy-monitoring", liveUrl: "https://iot-energy-monitoring.streamlit.app", desc: "Smart grid harmonic power telemetry and load balancer." }
];

export default function PortfolioEcosystem() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const activeProj = projects[selectedIdx];

  return (
    <div style={{ padding: '2rem', maxWidth: '1200px', color: '#0f172a', fontFamily: 'system-ui, sans-serif' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '0.25rem' }}>
        🚀 Systems & AI Production Portfolio Hub
      </h1>
      <p style={{ color: '#64748b', marginBottom: '1.5rem' }}>
        Unified control plane connecting all 23 verified live production engines, distributed microservices, and AI models.
      </p>

      {/* Quick Launch Dropdown Card */}
      <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '10px', border: '1px solid #e2e8f0', marginBottom: '2rem' }}>
        <label style={{ display: 'block', fontWeight: '600', color: '#334155', marginBottom: '0.5rem' }}>
          ⚡ Quick Jump to Live App:
        </label>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <select 
            value={selectedIdx} 
            onChange={(e) => setSelectedIdx(Number(e.target.value))}
            style={{ flex: 1, minWidth: '320px', padding: '0.65rem 1rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '1rem' }}
          >
            {projects.map((p, idx) => (
              <option key={p.id} value={idx}>
                Project {p.id}: {p.name} ({p.category})
              </option>
            ))}
          </select>
          <a 
            href={activeProj.liveUrl} 
            target="_blank" 
            rel="noreferrer"
            style={{ padding: '0.65rem 1.25rem', background: '#2563eb', color: '#fff', borderRadius: '6px', textDecoration: 'none', fontWeight: '600' }}
          >
            Launch Live App ↗
          </a>
          <a 
            href={`https://github.com/tanushkhare/${activeProj.repo}`} 
            target="_blank" 
            rel="noreferrer"
            style={{ padding: '0.65rem 1.25rem', background: '#0f172a', color: '#fff', borderRadius: '6px', textDecoration: 'none', fontWeight: '600' }}
          >
            GitHub Repo ↗
          </a>
        </div>
      </div>

      {/* 23 Cards Directory */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1rem' }}>
        {projects.map((p) => (
          <div key={p.id} style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '8px', padding: '1.25rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }}>
            <div>
              <div style={{ fontSize: '0.75rem', fontWeight: '700', color: '#2563eb' }}>PROJECT {p.id} • {p.category}</div>
              <div style={{ fontWeight: '600', color: '#0f172a', margin: '0.35rem 0' }}>{p.name}</div>
              <div style={{ fontSize: '0.85rem', color: '#64748b', marginBottom: '0.75rem' }}>{p.desc}</div>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.5rem' }}>
              <a href={p.liveUrl} target="_blank" rel="noreferrer" style={{ flex: 1, textAlign: 'center', padding: '0.45rem', background: '#2563eb', color: '#fff', borderRadius: '4px', textDecoration: 'none', fontSize: '0.8rem', fontWeight: '600' }}>
                Live Demo ↗
              </a>
              <a href={`https://github.com/tanushkhare/${p.repo}`} target="_blank" rel="noreferrer" style={{ flex: 1, textAlign: 'center', padding: '0.45rem', background: '#f1f5f9', color: '#0f172a', border: '1px solid #cbd5e1', borderRadius: '4px', textDecoration: 'none', fontSize: '0.8rem', fontWeight: '600' }}>
                Code →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

