import asyncio
import websockets
import json

async def test_connection():
    uri = "ws://127.0.0.1:8000/ws/workspace101?token=FlagshipSecureToken2026"
    try:
        async with websockets.connect(uri) as ws:
            print("✅ Probe connected!")
            await ws.send(json.dumps({"test": "data"}))
            print("🚀 Sent test packet.")
            await asyncio.sleep(1)
    except Exception as e:
        print(f"🛑 Probe failed: {e}")

asyncio.run(test_connection())