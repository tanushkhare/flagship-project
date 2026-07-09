import React from 'react';
import { NavLink } from 'react-router-dom';

const ProjectNavbar = ({ basePath, links = [] }) => {
  return (
    <nav 
      style={{ 
        backgroundColor: '#1e293b', 
        padding: '1rem', 
        display: 'flex', 
        gap: '2rem', 
        color: 'white',
        alignItems: 'center',
        borderRadius: '8px',
        marginBottom: '1.5rem'
      }}
    >
      {/* 1. Syncing this path to target "/ats" by dynamically passing using the custom basePath prop */}
      <NavLink 
        to={`/${basePath}`} 
        style={({ isActive }) => ({
          color: isActive ? '#38bdf8' : '#94a3b8',
          textDecoration: 'none',
          fontWeight: '600',
          borderBottom: isActive ? '2px solid #38bdf8' : 'none',
          paddingBottom: '4px'
        })}
      >
        Dashboard Home
      </NavLink>

      {/* Vertical separator line between dashboard home and inner tabs */}
      <span style={{ color: '#475569' }}>|</span>

      {/* 2. Dynamically mapped inner tab child nav links */}
      {links.map((link, index) => (
        <NavLink 
          key={index} 
          to={`/${basePath}/p${index + 1}`} 
          style={({ isActive }) => ({
            color: isActive ? '#38bdf8' : '#ffffff',
            textDecoration: 'none',
            fontWeight: '500',
            borderBottom: isActive ? '2px solid #38bdf8' : 'none',
            paddingBottom: '4px',
            transition: 'color 0.2s ease'
          })}
        >
          {link}
        </NavLink>
      ))}
    </nav>
  );
};

export default ProjectNavbar;