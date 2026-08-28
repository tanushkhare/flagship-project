import React, { useState } from 'react';

const projects = [
  { id: "01", name: "AI Resume Analyzer", category: "AI & NLP", repo: "ai-resume-analyzer", desc: "spaCy NER PDF resume parser with cosine similarity matching." },
  { id: "02", name: "Autonomous Research Assistant", category: "Agentic AI", repo: "autonomous-research-assistant", desc: "Agentic multi-hop research pipeline with source validation." },
  { id: "03a", name: "Realtime Chatbot", category: "WebSockets", repo: "realtime-chatbot", desc: "Asynchronous WebSocket streaming session assistant." },
  { id: "03b", name: "Vector RAG Q&A System", category: "Vector Search", repo: "vector-rag-qa-system", desc: "Dense vector retrieval engine with text chunking and similarity search." },
  { id: "04a", name: "AI Meeting Summarizer", category: "AI & NLP", repo: "ai-meeting-summarizer", desc: "Audio transcript summarization and action item extractor." },
  { id: "04b", name: "Real-Time ETL Dashboard", category: "DataOps", repo: "etl-dashboard", desc: "Stream data ingestion pipeline with transformation metrics." },
  { id: "05", name: "Fake News Classifier", category: "AI & NLP", repo: "fake-news-classifier", desc: "Linguistic cue credibility scoring engine." },
  { id: "06", name: "Collaborative Whiteboard", category: "WebSockets", repo: "collaborative-realtime-whiteboard", desc: "Multi-client real-time canvas synchronization via WebSockets." },
  { id: "07", name: "Placement Management Portal", category: "Fullstack", repo: "placement-management-portal", desc: "Academic eligibility screening and career application tracker." },
  { id: "08", name: "Voice to SQL Query Engine", category: "DataOps", repo: "voice-to-sql-query-engine", desc: "AST SQL sandboxing and safe relational query synthesis." },
  { id: "09", name: "E-Commerce Microservices", category: "Distributed Systems", repo: "ecommerce-microservices", desc: "Atomic mutex-locked multi-tier checkout microservices." },
  { id: "10", name: "Financial Sentiment Streaming", category: "Fintech & Data", repo: "financial-sentiment-streaming", desc: "Market sentiment polarity stream analyzer." },
  { id: "11", name: "PySpark Log Analyzer", category: "Big Data & PySpark", repo: "pyspark-log-analyzer", desc: "Distributed log partitioning and error surge detection." },
  { id: "12", name: "Fintech Fraud Detection", category: "Fintech & Data", repo: "fintech-fraud-detection", desc: "Behavioral anomaly risk evaluation engine." },
  { id: "13", name: "MLOps Retraining Pipeline", category: "MLOps", repo: "mlops-retraining-pipeline", desc: "PSI and Kolmogorov-Smirnov drift detection control plane." },
  { id: "14", name: "Packet Sniffer Anomaly Detector", category: "Cybersecurity", repo: "packet-sniffer-anomaly-detector", desc: "Socket frame capture and volumetric surge classification." },
  { id: "15", name: "Phishing URL Threat Detector", category: "Cybersecurity", repo: "phishing-detector", desc: "Lexical Shannon entropy scoring and domain threat scanner." },
  { id: "16", name: "DevOps Telemetry Dashboard", category: "DevOps & Zero-Trust", repo: "devops-telemetry-dashboard", desc: "Zero-Trust IAM origin verification and cluster harvester." },
  { id: "17", name: "Serverless File Pipeline", category: "Cloud & Serverless", repo: "serverless-file-pipeline", desc: "S3 event-driven automated execution pipeline." },
  { id: "18a", name: "Smart Face Attendance", category: "Computer Vision", repo: "smart-face-attendance", desc: "Biometric face verification and attendance database." },
  { id: "18b", name: "Smart Factory IoT Telemetry", category: "IoT & Smart Grid", repo: "Smart-Factory-IOT", desc: "ISO 10816 vibration analytics and RUL degradation curves." },
  { id: "19", name: "Spatial Asset Geofencing", category: "GIS & Spatial AI", repo: "spatial-asset-geofencing", desc: "Shapely Point-in-Polygon containment calculation." },
  { id: "20", name: "IoT Energy Monitoring", category: "IoT & Smart Grid", repo: "iot-energy-monitoring", desc: "Smart grid harmonic power telemetry and load balancer." }
];

export default function PortfolioEcosystem() {
  const [selectedRepo, setSelectedRepo] = useState(projects[0].repo);

  return (
    <div style={{ padding: '2.5rem', maxWidth: '1100px', color: '#0f172a', fontFamily: 'system-ui, sans-serif' }}>
      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.25rem' }}>
        🚀 23-Microservice Portfolio Showcase
      </h1>
      <p style={{ color: '#64748b', marginBottom: '1.5rem' }}>
        Unified control plane connecting all 23 production services, distributed systems, and AI models.
      </p>

      {/* Quick Jump Dropdown */}
      <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '10px', border: '1px solid #e2e8f0', marginBottom: '2rem' }}>
        <label style={{ display: 'block', fontWeight: '600', color: '#334155', marginBottom: '0.5rem' }}>
          Select a Repository to Launch:
        </label>
        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <select 
            value={selectedRepo} 
            onChange={(e) => setSelectedRepo(e.target.value)}
            style={{ flex: 1, minWidth: '320px', padding: '0.65rem 1rem', borderRadius: '6px', border: '1px solid #cbd5e1', fontSize: '1rem' }}
          >
            {projects.map((p) => (
              <option key={p.id} value={p.repo}>
                Project {p.id}: {p.name} ({p.category})
              </option>
            ))}
          </select>
          <a 
            href={`https://github.com/tanushkhare/${selectedRepo}`} 
            target="_blank" 
            rel="noreferrer"
            style={{ padding: '0.65rem 1.25rem', background: '#2563eb', color: '#fff', borderRadius: '6px', textDecoration: 'none', fontWeight: '600' }}
          >
            Open on GitHub ↗
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
            <a href={`https://github.com/tanushkhare/${p.repo}`} target="_blank" rel="noreferrer" style={{ fontSize: '0.85rem', color: '#2563eb', textDecoration: 'none', fontWeight: '600' }}>
              View Code & Tests →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
