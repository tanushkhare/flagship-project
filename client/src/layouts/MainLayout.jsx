import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const MainLayout = () => {
  // Shared state that persists even when navigating between pages
  const [globalData, setGlobalData] = useState([]);

  return (
    <div style={{ display: 'flex', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      {/* Sidebar - Remains static */}
      <aside style={{ width: '260px', backgroundColor: '#1e293b', color: 'white', padding: '20px' }}>
        <h2 style={{ fontSize: '1.25rem', marginBottom: '20px' }}>Flagship Portal</h2>
        <nav>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {['ATS Optimizer', 'Insurance Claims', 'Realtime Workspace', 'Security DataOps', 'Cloud Infra'].map((name, index) => (
              <li key={name} style={{ marginBottom: '15px' }}>
                <Link to={`/flagship${index + 1}`} style={{ color: '#cbd5e1', textDecoration: 'none' }}>
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main style={{ flex: 1, padding: '40px', backgroundColor: '#f8fafc' }}>
        {/* Outlet renders the active route component. 
            We pass context so child pages can call setGlobalData */}
        <Outlet context={[globalData, setGlobalData]} />
      </main>
    </div>
  );
};

export default MainLayout;