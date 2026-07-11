import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
from routes import ats_routes, insurance_routes, workspace_routes, security_routes, cloud_routes

app = FastAPI(title="Flagship Unified Portal Gateway")
ALLOWED_ORIGINS = os.getenv("FRONTEND_URL", "http://localhost:3000")
# Explicitly allow the preflight requests
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000", 
        "https://your-actual-vercel-app-name.vercel.app" # <--- ADD YOUR VERCEL URL HERE
        ALLOWED_ORIGINS
    ],
    allow_credentials=True,
    allow_methods=["GET", "POST", "OPTIONS"], 
    allow_headers=["Content-Type", "Authorization"],
)

app.include_router(ats_routes.router, prefix="/api/ats", tags=["ats"])
app.include_router(insurance_routes.router, prefix="/api/insurance", tags=["insurance"])
app.include_router(workspace_routes.router, prefix="/api/workspace", tags=["workspace"])
app.include_router(security_routes.router, prefix="/api/security", tags=["security"])
app.include_router(cloud_routes.router, prefix="/api/cloud", tags=["cloud"])

@app.get("/health")
def health_check():
    return {"status": "ONLINE"}

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)