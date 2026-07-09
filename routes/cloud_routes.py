from fastapi import APIRouter
router = APIRouter()

@router.get("/status")
async def get_status():
    return {"docker": True, "cicd_status": "Success"}

@router.get("/p1")
async def p1(): return {"project": "Docker Suite", "status": "Operational"}
@router.get("/p2")
async def p2(): return {"project": "Compose Orchestration", "status": "Operational"}
@router.get("/p3")
async def p3(): return {"project": "Terraform Blueprint", "status": "Operational"}
@router.get("/p4")
async def p4(): return {"project": "CI/CD Workflow", "status": "Operational"}