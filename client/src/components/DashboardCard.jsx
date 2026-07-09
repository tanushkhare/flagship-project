import React from 'react';

// src/components/DashboardCard.jsx
const DashboardCard = ({ title, children, className = "" }) => (
  <div className={`bg-white p-6 rounded-xl shadow-sm border border-slate-200 transition-all hover:shadow-md ${className}`}>
    <h3 className="text-sm uppercase tracking-wider font-bold text-slate-500 mb-4">
      {title}
    </h3>
    <div className="text-slate-800 text-base">
      {children}
    </div>
  </div>
);

export default DashboardCard;