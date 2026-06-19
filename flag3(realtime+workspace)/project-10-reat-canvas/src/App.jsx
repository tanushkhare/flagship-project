import { useEffect, useRef } from 'react';

function App() {
  const ws = useRef(null);

  useEffect(() => {
    // Connect to the FastAPI WebSocket endpoint
    ws.current = new WebSocket("ws://localhost:8000/ws");
    
    ws.current.onopen = () => console.log("✅ WebSocket Connected!");
    ws.current.onclose = () => console.log("❌ WebSocket Disconnected!");
    
    return () => ws.current.close();
  }, []);

  const handleMouseMove = (e) => {
    if (ws.current?.readyState === WebSocket.OPEN) {
      const packet = {
        x: e.clientX,
        y: e.clientY,
        timestamp: Date.now()
      };
      ws.current.send(JSON.stringify(packet));
    }
  };

  return (
    <div 
      onMouseMove={handleMouseMove}
      style={{ width: '100vw', height: '100vh', background: '#222' }}
    >
      <h1 style={{ color: '#fff', textAlign: 'center', paddingTop: '20%' }}>
        Telemetry Active: Move Mouse to Stream Data
      </h1>
    </div>
  );
}

export default App;
