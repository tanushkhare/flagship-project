import chromadb

client = chromadb.PersistentClient(path="./my_ai_memory")
collection = client.get_or_create_collection(name="server_alerts")
print(collection.query(query_texts=["Why did the server spike?"], n_results=5))

# Ask the memory bank a question
query = "Why did the server spike?"
results = collection.query(query_texts=[query], n_results=5)

print("🧠 AI Memory Recall:")
print(results['documents'])