// src/pages/Workspace/WorkspacePage.jsx
import React from 'react';
import { useOutletContext, Outlet, useLocation } from 'react-router-dom';
import RealtimeWorkspace from '../../components/RealtimeWorkspace';
import ProjectNavbar from '../../components/ProjectNavbar';

const WorkspacePage = () => {
  const context = useOutletContext();
  const location = useLocation();
  const isDashboard = location.pathname === '/work';

  // Extract data and setter from the 'work' silo
  const { data: workData, setter: setWorkData } = context?.work || {};

  return (
    <div className="h-full">
      <ProjectNavbar basePath="work" links={["Streaming", "Collab", "Nodes", "Logs"]} />
      
      <div className="p-8">
         {/* Pass the data AND the setter to the dashboard */}
         {isDashboard && (
           <RealtimeWorkspace 
             workspaceData={workData} 
             setWorkspaceData={setWorkData} 
           />
         )}
         
         {/* Pass the same context hub down to sub-pages */}
         <Outlet context={context} /> 
      </div>
    </div>
  );
};
export default WorkspacePage;