import asyncio
import httpx
import json
import websockets

WS_URI = "ws://127.0.0.1:8000/ws/workspace101?token=FlagshipSecureToken2026"
METRICS_URL = "http://127.0.0.1:8000/api/metrics"

async def push_data():
    while True: 
        try:
            print("🚀 Harvester starting...")
            async with websockets.connect(WS_URI, ping_interval=20, ping_timeout=300) as ws:
                async with httpx.AsyncClient() as client:
                    while True:
                        resp = await client.get(METRICS_URL, timeout=5.0)
                        if resp.status_code == 200:
                            data = resp.json()
                            await ws.send(json.dumps(data))
                            print(f"📡 Pushed: {data.get('total_packets_broadcast')}")
                        await asyncio.sleep(5)
        except (asyncio.CancelledError, KeyboardInterrupt):
            print("🛑 Harvester stopped manually.")
            break # Exit loop cleanly
        except Exception as e:
            print(f"⚠️ Connection reset: {e}. Reconnecting in 5s...")
            await asyncio.sleep(5)

if __name__ == "__main__":
    try:
        asyncio.run(push_data())
    except KeyboardInterrupt:
        pass # Clean exit without ugly traceback