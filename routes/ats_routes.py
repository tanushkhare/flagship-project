from fastapi import APIRouter, UploadFile, File

# This 'router' must be the one exported and imported
router = APIRouter()

@router.post("/optimize")
async def optimize_resume(file: UploadFile = File(...)):
    return {"score": 85, "missing_keywords": ["Python", "AWS"]}

@router.get("/p1")
async def p1():
    # Return a structured list instead of a string
    return {
        "status": "Operational",
        "items": [
            {"id": 1, "name": "Resume_A.pdf", "score": 85},
            {"id": 2, "name": "Resume_B.pdf", "score": 92}
        ]
    }
@router.get("/p2")
async def p2(): return {"project": "Skill Extractor", "status": "Operational"}
@router.get("/p3")
async def p3(): return {"project": "Similarity Engine", "status": "Operational"}
@router.get("/p4")
async def p4(): return {"project": "DB Layer", "status": "Operational"}