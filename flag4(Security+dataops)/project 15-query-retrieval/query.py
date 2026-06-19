from chromadb import PersistentClient

# 1. Access the database
client = PersistentClient(path="./chroma_db")
collection = client.get_collection(name="insurance_policies")

# 2. Define a retrieval test
def test_retrieval(question):
    print(f"\n🔍 Query: '{question}'")
    results = collection.query(query_texts=[question], n_results=1)
    
    if results['documents'][0]:
        print(f"✅ Retrieved Content: {results['documents'][0][0]}")
    else:
        print("❌ No matching content found.")

if __name__ == "__main__":
    # Test with a question related to the content you ingested
    test_retrieval("What is the deductible?")