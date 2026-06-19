import httpx
import asyncio

# This script hits your API 50 times in a single burst
async def generate_spike():
    url = "http://127.0.0.1:8000/api/metrics"
    async with httpx.AsyncClient() as client:
        print("💥 Generating Traffic Spike...")
        for _ in range(60): # This will push your packet count well over 100
            await client.get(url)
        print("✅ Spike Generated!")

if __name__ == "__main__":
    asyncio.run(generate_spike())