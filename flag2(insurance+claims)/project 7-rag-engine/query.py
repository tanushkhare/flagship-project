from chromadb import PersistentClient

# Define the function as a standalone module
def query_rag_engine(question):
    # 1. Connect to the database
    # Note: Use an absolute path or ensure the relative path is 
    # correct from where the gateway calls it.
    db_path = "flag2(insurance+claims)/project 7-rag-engine/chroma_db"
    client = PersistentClient(path=db_path)
    collection = client.get_or_create_collection(name="insurance_policies")

    # 2. Perform the query
    results = collection.query(query_texts=[question], n_results=1)
    
    # 3. Extract and return the clean text
    if results['documents'] and results['documents'][0]:
        return results['documents'][0][0]
    return "No relevant information found in the policy."

# This block allows you to test query.py independently
if __name__ == "__main__":
    test_q = "What is the deductible for my policy?"
    print(f"Testing Query: {test_q}")
    print(f"Answer: {query_rag_engine(test_q)}")