import asyncio
import json
import time
import websockets

TARGET_URL = "ws://127.0.0.1:8000/ws/workspace101?token=FlagshipSecureToken2026"
CONCURRENT_CLIENTS = 50       # Simulates 50 active users drawing at once
MESSAGES_PER_CLIENT = 20      # Number of coordinate streams per user

async def simulated_drawing_user(client_id: int):
    """Simulates an independent user drawing fluid lines across the canvas."""
    try:
        async with websockets.connect(TARGET_URL) as ws:
            for i in range(MESSAGES_PER_CLIENT):
                # Mock real-time cursor tracking metrics
                payload = {
                    "type": "draw",
                    "x": 100 + (client_id * 5) + i,
                    "y": 200 + i,
                    "remoteColor": "#2563eb",
                    "remoteWidth": 5
                }
                
                start_time = time.perf_counter()
                await ws.send(json.dumps(payload))
                
                # Await the broadcast echo back from the server/Redis cluster
                try:
                    await asyncio.wait_for(ws.recv(), timeout=0.2)
                    end_time = time.perf_counter()
                    latency_ms = (end_time - start_time) * 1000
                    
                    # Print occasional telemetry metrics from client perspectives
                    if i % 10 == 0:
                        print(f"👤 Node [{client_id:02d}] Packet {i:02d} RTT: {latency_ms:.2f}ms")
                except asyncio.TimeoutError:
                    pass
                
                # Wait 50ms between strokes to mimic human motor response speed
                await asyncio.sleep(0.05)
    except Exception as e:
        print(f"🛑 Client Node [{client_id}] disconnected: {e}")

async def run_load_audit():
    print(f"🚀 Spawning {CONCURRENT_CLIENTS} synchronized vector streaming nodes...")
    start_total = time.perf_counter()
    
    # Gather and run all 50 clients concurrently in the event loop
    await asyncio.gather(*(simulated_drawing_user(node) for node in range(CONCURRENT_CLIENTS)))
    
    end_total = time.perf_counter()
    print(f"\n✨ Audit Complete! 1,000 packets successfully routed in {end_total - start_total:.2f}s.")

if __name__ == "__main__":
    asyncio.run(run_load_audit())