import React, { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';

const Ins_P2 = () => {
  const context = useOutletContext();
  const data = context?.ins?.data;
  return (
    <div className="summary-box">
      <h3>Actuarial Risk Assessment Model</h3>
      <p>Compliance index: {data?.score ? `${data.score}%` : "N/A"} integrity.</p>
      <p style={{ fontSize: '0.8rem' }}>{data?.result}</p>
    </div>
  );
};
export default Ins_P2;