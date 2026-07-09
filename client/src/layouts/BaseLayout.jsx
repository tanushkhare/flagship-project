import React from 'react';
import { Outlet, Link } from 'react-router-dom'; // 1. IMPORT Link here
import Sidebar from '../components/Sidebar';

const BaseLayout = () => {
  return (
    <div style={{ display: 'flex', minHeight: '100vh' }}>
      {/* 2. Sidebar now contains the navigation */}
      <Sidebar />
      
      <main style={{ flex: 1, padding: '30px', background: '#f8fafc' }}>
        {/* Your 20 pages will load right here! */}
        <Outlet /> 
      </main>
    </div>
  );
};

export default BaseLayout;