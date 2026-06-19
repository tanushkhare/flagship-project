import React, { useEffect, useRef, useState } from 'react';
import Dashboard from './Dashboard';

function App() {
  const ws = useRef(null);
  const [metrics, setMetrics] = useState({
    active_connections: 0,
    total_packets_broadcast: 0,
    avg_server_processing_latency_ms: 0
  });
  const [packetHistory, setPacketHistory] = useState([]);

  useEffect(() => {
    const socket = new WebSocket("ws://127.0.0.1:8000/ws/workspace101?token=FlagshipSecureToken2026");
    ws.current = socket;

    socket.onmessage = (event) => {
      if (event.data === "ACK") return;
      try {
        const data = JSON.parse(event.data);
        setMetrics(data);
        setPacketHistory(prev => [...prev, data.total_packets_broadcast].slice(-20));
      } catch (e) {
        console.error("❌ Data Parse Error", e);
      }
    };

    return () => socket.close();
  }, []);

  return (
    <div style={{ background: '#222', color: '#fff', padding: '20px', height: '100vh' }}>
      <h1>System Monitoring</h1>
      <Dashboard packetData={packetHistory} />
      <div>
        <p>Active Nodes: {metrics.active_connections}</p>
        <p>Total Packets: {metrics.total_packets_broadcast}</p>
      </div>
    </div>
  );
}

export default App;