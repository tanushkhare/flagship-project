import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const linkStyle = { 
    color: '#cbd5e1', 
    textDecoration: 'none', 
    display: 'block', 
    padding: '10px 0',
    transition: '0.3s'
  };

  // Added Portfolio Ecosystem to navigation links
  const links = [
    { path: "/ats", label: "ATS Optimizer" },
    { path: "/ins", label: "Insurance Claims" },
    { path: "/work", label: "Realtime Workspace" },
    { path: "/sec", label: "Security DataOps" },
    { path: "/cloud", label: "Cloud Infra" },
    { path: "/portfolio", label: "🚀 Portfolio Ecosystem" }
  ];

  return (
    <nav style={{ width: '250px', background: '#1e293b', color: 'white', height: '100vh', padding: '20px' }}>
      <h2 style={{ fontSize: '1.2rem', marginBottom: '2rem', color: '#f8fafc' }}>Flagship Portal</h2>
      
      {/* Dynamic list rendering */}
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {links.map((link) => (
          <li key={link.path}>
            <Link to={link.path} style={linkStyle}>{link.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Sidebar;