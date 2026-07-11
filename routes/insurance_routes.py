import os
from fastapi import APIRouter
from langchain_groq import ChatGroq
from langchain_community.tools.tavily_search import TavilySearchResults
from langchain_openai import OpenAIEmbeddings
from langchain_core.messages import HumanMessage
from dotenv import load_dotenv

load_dotenv()
router = APIRouter()

# Initialize LLM via API
llm = ChatGroq(groq_api_key=os.getenv("GROQ_API_KEY"), model_name="llama-3.3-70b-versatile")

# Use OpenAI API embeddings (Lightweight)
embeddings = OpenAIEmbeddings(openai_api_key=os.getenv("OPENAI_API_KEY"))

# Tavily search is API-based and safe for Free Tier
search = TavilySearchResults(tavily_api_key=os.getenv("TAVILY_API_KEY"))

@router.post("/query")
async def query_insurance(data: dict):
    user_query = data.get("text", "")
    
    # NOTE: Chroma (local vector DB) was removed to fix "Out of Memory" errors.
    # To restore RAG functionality, replace this with a managed vector DB like Pinecone 
    # or an API-based service that does not require local storage.
    
    # Simple search fallback using Tavily
    context = search.invoke(user_query)
    
    final_prompt = f"Use this context: {context} to answer: {user_query}"
    response = llm.invoke([HumanMessage(content=final_prompt)])
    return {"result": response.content}

@router.get("/p1")
async def p1(): return {"project": "Claims Processor", "status": "Operational"}
@router.get("/p2")
async def p2(): return {"project": "Policy Validator", "status": "Operational"}
@router.get("/p3")
async def p3(): return {"project": "Risk Assessment", "status": "Operational"}
@router.get("/p4")
async def p4(): return {"project": "Fraud Detection", "status": "Operational"}