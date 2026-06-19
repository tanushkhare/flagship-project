import io
import uuid
from fastapi import FastAPI, UploadFile, File, HTTPException, Depends, status
from sqlalchemy.ext.asyncio import create_async_engine, async_sessionmaker, AsyncSession
from sqlalchemy import text

app = FastAPI(title="Flagship ATS Relational Orchestration Engine - Phase 1 Finalized")

# Relational connection pipeline targeting your active Docker container across port 5432
DATABASE_URL = "postgresql+asyncpg://postgres_admin:FlagshipSecure2026!@localhost:5432/ats_optimizer_db"

# Instantiate the asynchronous backend engine database pool
async_engine = create_async_engine(DATABASE_URL, pool_pre_ping=True)

# Bind structural session states to our active driver connections
AsyncSessionLocal = async_sessionmaker(
    bind=async_engine,
    autoflush=False,
    autocommit=False,
    expire_on_commit=False
)

async def get_db_session() -> AsyncSession:
    """Asynchronous dependency injection utility providing isolated database transactions."""
    async with AsyncSessionLocal() as session:
        try:
            yield session
        except Exception:
            await session.rollback()
            raise
        finally:
            await session.close()

@app.post("/tenant/{tenant_id}/ingest", status_code=status.HTTP_201_CREATED)
async def ingest_and_route_resume(
    tenant_id: str, 
    file: UploadFile = File(...), 
    db: AsyncSession = Depends(get_db_session)
):
    """
    Days 13-14 Milestone Integration Endpoint: Manages multi-tenant routing parameters
    and commits parsed file contents straight to your live container data layer.
    """
    # 1. Extract raw byte data directly out of RAM memory streams
    file_contents = await file.read()
    extracted_text_dump = file_contents.decode("utf-8", errors="ignore")
    
    # 2. Assign a unique trace key identifier to prevent asset collisions
    assigned_resume_key = str(uuid.uuid4())
    
    # 3. Construct an index-friendly raw relational statement targeting our active tables
    optimized_insert_query = text("""
        INSERT INTO tenant_resumes (id, tenant_id, file_name, character_count, extracted_content, uploaded_at)
        VALUES (:id, :tenant_id, :file_name, :char_count, :extracted_content, NOW());
    """)
    
    try:
        # 4. Dispatch transaction payload directly through the async engine pool
        await db.execute(optimized_insert_query, {
            "id": assigned_resume_key,
            "tenant_id": tenant_id,
            "file_name": file.filename,
            "char_count": len(extracted_text_dump),
            "extracted_content": extracted_text_dump
        })
        # Commit changes safely to the running container instance
        await db.commit()
        
        return {
            "status": "synchronized_execution_state_validated",
            "assigned_resume_key": assigned_resume_key,
            "tenant_routing_scope": tenant_id,
            "character_count_processed": len(extracted_text_dump)
        }
        
    except Exception as error_trace:
        await db.rollback()
        print(f"Data storage anomaly detected: {str(error_trace)}")
        raise HTTPException(
            status_code=500, 
            detail=f"Relational storage system synchronization failure: {str(error_trace)}"
        )