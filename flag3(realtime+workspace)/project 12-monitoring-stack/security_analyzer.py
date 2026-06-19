import redis
import json
import chromadb
from datetime import datetime

# 1. Setup Redis
r = redis.Redis(host='localhost', port=6379, db=0, decode_responses=True)
pubsub = r.pubsub()
pubsub.subscribe("telemetry")

# 2. Setup ChromaDB (Memory Bank)
client = chromadb.PersistentClient(path="./my_ai_memory")
collection = client.get_or_create_collection(name="server_alerts")

print("🛡️ Security Analyzer Active with AI Memory...")

for message in pubsub.listen():
    print(f"DEBUG: Data Received: {message}")
    if message['type'] == 'message':
        data = json.loads(message['data'])
        packets = data.get('total_packets_broadcast', 0)
        
        # Check for spike

        if packets > 100:
            alert_msg = f"SECURITY ALERT: Spike detected! Packets: {packets}"
            print(f"🚨 {alert_msg}")
            
            # Store in Memory only when an alert happens
            collection.add(
                documents=[alert_msg],
                metadatas=[{"packets": packets, "timestamp": str(datetime.now())}],
                ids=[str(datetime.now())]
            )
            print("💾 Alert successfully saved to ChromaDB!")
        else:
            print(f"✅ Traffic Normal: {packets}")