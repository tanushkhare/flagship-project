import os
import chromadb
from langchain_text_splitters import RecursiveCharacterTextSplitter

def execute_policy_pipeline():
    print("🧠 [RAG Engine] Accessing Local Persistent Storage Cluster...")
    
    # 1. Instantiate a permanent local disk-backed ChromaDB client layout
    chroma_client = chromadb.PersistentClient(path="./chroma_db")
    
    # 2. Allocate or establish an isolated vector repository collection bucket
    collection = chroma_client.get_or_create_collection(name="insurance_policies")
    
    # Idempotent Layer Check: Check if database has already been loaded with rows to avoid duplicates
    if collection.count() == 0:
        print("💾 Vector pool empty. Committing standard insurance policy vectors...")
        sample_policy_clause = (
            "POLICY_ID_9921: Comprehensive property damage claims resulting from standard atmospheric "
            "disturbances, including severe storm precipitation, hail metrics, and high-velocity wind vectors, "
            "are covered up to a maximum financial threshold of $50,000. EXCLUSION_CLAUSE_A: Damage caused by "
            "sub-surface flash flooding or rising river baselines is strictly excluded from coverage unless a "
            "specialized geographic flood endorsement rider is actively appended to the policy layout before the weather event."
        )
        
        # 3. Instantiate a recursive contextual splitter layout to partition sentences carefully
        text_splitter = RecursiveCharacterTextSplitter(
            chunk_size=160,
            chunk_overlap=30,
            length_function=len,
            is_separator_regex=False,
        )
        
        text_chunks = text_splitter.split_text(sample_policy_clause)
        
        documents = []
        ids = []
        metadatas = []
        
        for index, chunk in enumerate(text_chunks):
            documents.append(chunk)
            ids.append(f"policy_chunk_{index}")
            metadatas.append({"source": "master_property_policy.txt", "segment": index})
            
        collection.add(documents=documents, ids=ids, metadatas=metadatas)
        print("✅ Ingestion Phase Finished.")
    else:
        print(f"📊 Database status healthy. Active Document Slices Found: {collection.count()}")

    # 4. Day 18 Retrieval Ingestion Step: Evaluate a live unstructured user incident request
    user_claim_incident = "My residential property roof was completely ruined by high-velocity wind storm vectors."
    print(f"\n🔍 Querying Vector Database for Incident Context: '{user_claim_incident}'")
    
    # Perform a K-Nearest Neighbor (KNN) proximity search across the embedded vector field spaces
    search_results = collection.query(
        query_texts=[user_claim_incident],
        n_results=1  # Extract only the highest contextually matching chunk
    )
    
    print("\n─── Vector Database RAG Retrieval Report ───")
    print(f"📌 Matched Segment ID: {search_results['ids'][0][0]}")
    print(f"🎯 Contextual Proximity Distance Match (L2 Space): {search_results['distances'][0][0]:.4f}")
    print(f"📖 Extracted Semantic Evidence Segment:")
    print(f"   \"{search_results['documents'][0][0]}\"")
    print("────────────────────────────────────────────")

if __name__ == "__main__":
    execute_policy_pipeline()