import os
from fastapi import APIRouter
from langchain_groq import ChatGroq
from langchain_community.tools.tavily_search import TavilySearchResults
from langchain_huggingface import HuggingFaceEmbeddings
from langchain_chroma import Chroma
from langchain_core.messages import HumanMessage
from dotenv import load_dotenv

load_dotenv()
router = APIRouter()

llm = ChatGroq(groq_api_key=os.getenv("GROQ_API_KEY"), model_name="llama-3.3-70b-versatile")
embeddings = HuggingFaceEmbeddings(model_name="all-MiniLM-L6-v2")
vectorstore = Chroma(persist_directory="./chroma_db", embedding_function=embeddings)
search = TavilySearchResults(tavily_api_key=os.getenv("TAVILY_API_KEY"))

@router.post("/query")
async def query_insurance(data: dict):
    user_query = data.get("text", "")
    retriever = vectorstore.as_retriever(search_kwargs={"k": 2})
    docs = retriever.invoke(user_query)
    context = "\n\n".join([d.page_content for d in docs])
    
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