import React, { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';

const Ins_P3 = () => {
  const context = useOutletContext();
  const [data, setData] = useState(context?.ins?.data);
  useEffect(() => { if (context?.ins?.data) setData(context.ins.data); }, [context?.ins?.data]);

  return (
    <div className="summary-box">
      <h3>Policy Coverage Mapping Matrix</h3>
      <p style={{ whiteSpace: 'pre-wrap' }}>{data?.result || "Standby for stream..."}</p>
    </div>
  );
};
export default Ins_P3;