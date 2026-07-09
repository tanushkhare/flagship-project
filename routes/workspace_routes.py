from fastapi import APIRouter
from langchain_groq import ChatGroq
from langchain_core.messages import HumanMessage
import os

router = APIRouter()
llm = ChatGroq(groq_api_key=os.getenv("GROQ_API_KEY"), model_name="llama-3.3-70b-versatile")

@router.post("/summarize")
async def summarize_workspace(data: dict):
    raw_notes = data.get("text", "")
    prompt = f"Analyze these notes: {raw_notes}"
    response = llm.invoke([HumanMessage(content=prompt)])
    return {"result": response.content}

@router.get("/p1")
async def p1(): return {"project": "Websocket Server", "status": "Operational"}
@router.get("/p2")
async def p2(): return {"project": "React Canvas", "status": "Operational"}
@router.get("/p3")
async def p3(): return {"project": "Redis Sync", "status": "Operational"}
@router.get("/p4")
async def p4(): return {"project": "Monitoring Stack", "status": "Operational"}