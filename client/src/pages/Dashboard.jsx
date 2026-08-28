import React from 'react';
import { Link } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div style={{ padding: '3rem', maxWidth: '1000px', color: '#0f172a', fontFamily: 'system-ui, sans-serif' }}>
      <h1 style={{ fontSize: '2.2rem', fontWeight: '800', marginBottom: '0.5rem', color: '#0f172a' }}>
        Welcome to Flagship Portal
      </h1>
      <p style={{ color: '#64748b', fontSize: '1.1rem', marginBottom: '2.5rem' }}>
        Unified cloud application platform connecting all core flagship services and the 23-microservice portfolio architecture.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
        <Link to="/ats" style={{ textDecoration: 'none' }}>
          <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '10px', border: '1px solid #e2e8f0', transition: '0.2s' }}>
            <h3 style={{ fontSize: '1.15rem', color: '#2563eb', margin: '0 0 0.5rem 0' }}>📄 ATS Optimizer</h3>
            <p style={{ color: '#64748b', fontSize: '0.9rem', margin: 0 }}>spaCy NER entity parsing and candidate scoring.</p>
          </div>
        </Link>

        <Link to="/ins" style={{ textDecoration: 'none' }}>
          <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '10px', border: '1px solid #e2e8f0', transition: '0.2s' }}>
            <h3 style={{ fontSize: '1.15rem', color: '#2563eb', margin: '0 0 0.5rem 0' }}>🏥 Insurance Claims</h3>
            <p style={{ color: '#64748b', fontSize: '0.9rem', margin: 0 }}>Automated insurance adjudication and ICD verification.</p>
          </div>
        </Link>

        <Link to="/work" style={{ textDecoration: 'none' }}>
          <div style={{ background: '#f8fafc', padding: '1.5rem', borderRadius: '10px', border: '1px solid #e2e8f0', transition: '0.2s' }}>
            <h3 style={{ fontSize: '1.15rem', color: '#2563eb', margin: '0 0 0.5rem 0' }}>💬 Realtime Workspace</h3>
            <p style={{ color: '#64748b', fontSize: '0.9rem', margin: 0 }}>Collaborative WebSockets canvas and chat sync.</p>
          </div>
        </Link>

        <Link to="/portfolio" style={{ textDecoration: 'none' }}>
          <div style={{ background: '#eff6ff', padding: '1.5rem', borderRadius: '10px', border: '1px solid #bfdbfe', transition: '0.2s' }}>
            <h3 style={{ fontSize: '1.15rem', color: '#1d4ed8', margin: '0 0 0.5rem 0' }}>🚀 23-Microservice Hub</h3>
            <p style={{ color: '#1e40af', fontSize: '0.9rem', margin: 0 }}>Explore full directory of all 23 backend services.</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
