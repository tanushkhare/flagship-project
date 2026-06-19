import os
from langchain_community.document_loaders import TextLoader
from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_huggingface import HuggingFaceEmbeddings
from langchain_community.vectorstores import Chroma

def run_test():
    print("--- Starting RAG Engine Test ---")

    # 1. Initialize Local Embeddings (No API key needed)
    print("Loading local HuggingFace embeddings...")
    embeddings = HuggingFaceEmbeddings(model_name="sentence-transformers/all-MiniLM-L6-v2")

    # 2. Create a dummy file for testing
    with open("test_doc.txt", "w") as f:
        f.write("The RAG engine is running successfully on AWS EC2.")

    # 3. Load the document
    loader = TextLoader("test_doc.txt")
    documents = loader.load()
    print(f"Loaded {len(documents)} document(s).")

    # 4. Split the text
    text_splitter = RecursiveCharacterTextSplitter(chunk_size=100, chunk_overlap=10)
    chunks = text_splitter.split_documents(documents)
    print(f"Split document into {len(chunks)} chunk(s).")

    # 5. Embed and store in Chroma
    print("Embedding document locally...")
    vector_store = Chroma.from_documents(chunks, embeddings, persist_directory="./chroma_db")
    print("Vector store created successfully.")

    # 6. Perform a test query
    query = "Where is the RAG engine running?"
    results = vector_store.similarity_search(query, k=1)
    
    print(f"\nQuery: {query}")
    print(f"Retrieved Result: {results[0].page_content}")
    print("--- Test Complete ---")

if __name__ == "__main__":
    run_test()