import asyncio
import json
from fastapi import FastAPI, WebSocket, WebSocketDisconnect, status, Query
from fastapi.middleware.cors import CORSMiddleware
from typing import Dict, List
from redis_client import r  # Import your client
import json

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class RedisConnectionManager:
    def __init__(self):
        self.active_connections: Dict[str, List[WebSocket]] = {}
        self.total_packets = int(r.get("total_packets") or 0)

    async def connect(self, websocket: WebSocket, room_id: str):
        await websocket.accept()
        if room_id not in self.active_connections:
            self.active_connections[room_id] = []
        self.active_connections[room_id].append(websocket)

    async def disconnect(self, websocket: WebSocket, room_id: str):
        if room_id in self.active_connections:
            self.active_connections[room_id].remove(websocket)

    async def broadcast_event(self, data: str, room_id: str):
        self.total_packets += 1
        r.set("total_packets", self.total_packets)

        if room_id in self.active_connections:
            for conn in self.active_connections[room_id]:
                await conn.send_text(data)

manager = RedisConnectionManager()

@app.get("/api/metrics")
async def get_metrics():
    manager.total_packets += 1
    r.publish("telemetry", json.dumps({"total_packets_broadcast": manager.total_packets}))
    nodes = len(manager.active_connections.get("workspace101", []))
    return {
        "active_connections": len(manager.active_connections.get("workspace101", [])),
        "total_packets_broadcast": manager.total_packets,
        "avg_server_processing_latency_ms": 0.5
    }

@app.websocket("/ws/{room_id}")
async def websocket_endpoint(websocket: WebSocket, room_id: str, token: str = Query(None)):
    if token != "FlagshipSecureToken2026":
        await websocket.close(code=status.WS_1008_POLICY_VIOLATION)
        return
    
    await manager.connect(websocket, room_id)
    try:
        while True:
            # When the client stops sending, this is where it waits.
            data = await websocket.receive_text()
            await manager.broadcast_event(data, room_id)
            await websocket.send_text(json.dumps({
                "status": "ACK", 
                "total_packets_broadcast": manager.total_packets
            }))
    except WebSocketDisconnect:
        print(f"DEBUG: Client {room_id} disconnected cleanly.")
    except asyncio.CancelledError:
        # This handles the "reloader" shutdown gracefully
        print(f"DEBUG: Room {room_id} task cancelled by server shutdown.")
    finally:
        await manager.disconnect(websocket, room_id)