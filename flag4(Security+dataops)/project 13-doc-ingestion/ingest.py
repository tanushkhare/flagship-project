from langchain_community.document_loaders import PyPDFLoader
from langchain_text_splitters import RecursiveCharacterTextSplitter
from chromadb import PersistentClient

# 1. Setup ChromaDB client
client = PersistentClient(path="./chroma_db")
collection = client.get_or_create_collection(name="insurance_policies")

def process_and_ingest(pdf_path):
    print(f"Loading {pdf_path}...")
    loader = PyPDFLoader(pdf_path)
    documents = loader.load()
    
    # 2. Chunking
    text_splitter = RecursiveCharacterTextSplitter(chunk_size=1000, chunk_overlap=200)
    chunks = text_splitter.split_documents(documents)
    
    # 3. Add to Database
    print(f"Ingesting {len(chunks)} chunks into ChromaDB...")
    for i, chunk in enumerate(chunks):
        collection.add(
            documents=[chunk.page_content],
            metadatas=[{"source": pdf_path}],
            ids=[f"chunk_{i}"]
        )
    print("Ingestion complete.")

import os

if __name__ == "__main__":
    # Get the directory where the script is located
    script_dir = os.path.dirname(os.path.abspath(__file__))
    # Combine it with your filename
    pdf_file = os.path.join(script_dir, "policy.pdf")

    # Check if it exists before trying to load
    if os.path.exists(pdf_file):
        process_and_ingest(pdf_file)
    else:
        print(f"Error: Could not find file at {pdf_file}")