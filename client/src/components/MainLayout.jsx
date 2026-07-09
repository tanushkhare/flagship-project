// src/layouts/MainLayout.jsx
import React, { useState, useMemo } from 'react';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  const [atsData, setAtsData] = useState(null);
  const [insData, setInsData] = useState(null);
  const [workData, setWorkData] = useState(null);
  const [secData, setSecData] = useState(null);
  const [cloudData, setCloudData] = useState(null);

  const globalContextHub = useMemo(() => {
    console.log("Context Hub Hub Refreshed. Cloud Data current state:", cloudData);
    return {
      ats: { data: atsData, setter: setAtsData },
      ins: { data: insData, setter: setInsData },
      work: { data: workData, setter: setWorkData },
      sec: { data: secData, setter: setSecData },
      cloud: { data: cloudData, setter: setCloudData }
    };
  }, [
    atsData, setAtsData, 
    insData, setInsData, 
    workData, setWorkData, 
    secData, setSecData, 
    cloudData, setCloudData
  ]); 

  return (
    <div className="app-container">
      <Outlet context={globalContextHub} />
    </div>
  );
};
export default MainLayout;