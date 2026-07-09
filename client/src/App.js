import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Dashboard from './pages/Dashboard';

// Import Modules
import ATSModule from './pages/ATS/ATSModule';
import InsuranceModule from './pages/Insurance/InsuranceModule';
import WorkspacePage from './pages/Workspace/WorkspacePage';
import SecurityPage from './pages/Security/SecurityPage';
import CloudPage from './pages/CloudInfra/CloudPage'; 
import Cloud_SubPage from './pages/CloudInfra/Cloud_SubPage';

// Import Sub-pages (ATS, Ins, Work, Sec, Cloud)
import ATS_P1 from './pages/ATS/ATS_P1';
import ATS_P2 from './pages/ATS/ATS_P2';
import ATS_P3 from './pages/ATS/ATS_P3';
import ATS_P4 from './pages/ATS/ATS_P4';

import Ins_P1 from './pages/Insurance/Ins_P1';
import Ins_P2 from './pages/Insurance/Ins_P2';
import Ins_P3 from './pages/Insurance/Ins_P3';
import Ins_P4 from './pages/Insurance/Ins_P4';

import Work_P1 from './pages/Workspace/Work_P1';
import Work_P2 from './pages/Workspace/Work_P2';
import Work_P3 from './pages/Workspace/Work_P3';
import Work_P4 from './pages/Workspace/Work_P4';

import Sec_P1 from './pages/Security/Sec_P1';
import Sec_P2 from './pages/Security/Sec_P2';
import Sec_P3 from './pages/Security/Sec_P3';
import Sec_P4 from './pages/Security/Sec_P4';


function App() {
  return (
    <Router>
      <Routes>
        {/* MainLayout is the ONLY parent route */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />

          {/* Legacy Redirects */}
          <Route path="flagship1" element={<Navigate to="/ats" replace />} />
          <Route path="flagship2" element={<Navigate to="/ins" replace />} />
          <Route path="flagship3" element={<Navigate to="/work" replace />} />
          <Route path="flagship4" element={<Navigate to="/sec" replace />} />
          <Route path="flagship5" element={<Navigate to="/cloud" replace />} />
          
          {/* Module Routes */}
          <Route path="ats" element={<ATSModule />}>
            <Route path="p1" element={<ATS_P1 />} /><Route path="p2" element={<ATS_P2 />} />
            <Route path="p3" element={<ATS_P3 />} /><Route path="p4" element={<ATS_P4 />} />
          </Route>

          <Route path="ins" element={<InsuranceModule />}>
            <Route path="p1" element={<Ins_P1 />} /><Route path="p2" element={<Ins_P2 />} />
            <Route path="p3" element={<Ins_P3 />} /><Route path="p4" element={<Ins_P4 />} />
          </Route>

          <Route path="work" element={<WorkspacePage />}>
            <Route path="p1" element={<Work_P1 />} /><Route path="p2" element={<Work_P2 />} />
            <Route path="p3" element={<Work_P3 />} /><Route path="p4" element={<Work_P4 />} />
          </Route>

          {/* Corrected Security Route */}
          <Route path="sec" element={<SecurityPage />}>
            <Route path="p1" element={<Sec_P1 />} /><Route path="p2" element={<Sec_P2 />} />
            <Route path="p3" element={<Sec_P3 />} /><Route path="p4" element={<Sec_P4 />} />
          </Route>

          <Route path="cloud" element={<CloudPage />}>
          {/* We pass the index prop directly in the route */}
          <Route path="p1" element={<Cloud_SubPage index={0} title="Elastic Compute Cluster" />} />
          <Route path="p2" element={<Cloud_SubPage index={1} title="VPC Network Topography" />} />
          <Route path="p3" element={<Cloud_SubPage index={2} title="Load Balancing Profiles" />} />
          <Route path="p4" element={<Cloud_SubPage index={3} title="Edge Telemetry" />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;