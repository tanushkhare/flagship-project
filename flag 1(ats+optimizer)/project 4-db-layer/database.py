from collections.abc import AsyncGenerator
from sqlalchemy.ext.asyncio import create_async_engine, async_sessionmaker, AsyncSession

# Relational connection pipeline targeting your running Docker container
DATABASE_URL = "postgresql+asyncpg://postgres_admin:FlagshipSecure2026!@localhost:5432/ats_optimizer_db"

async_engine = create_async_engine(
    DATABASE_URL,
    echo=True,                 # Streams raw SQL logs directly into your terminal
    pool_size=20,              # Keeps up to 20 active connection lines open concurrently
    max_overflow=10,           # Elastic surge capacity for heavy user traffic spikes
    pool_pre_ping=True         # Proactively drops stale connections before they time out
)

AsyncSessionLocal = async_sessionmaker(
    bind=async_engine,
    autoflush=False,
    autocommit=False,
    expire_on_commit=False
)

async def get_db_session() -> AsyncGenerator[AsyncSession, None]:
    """Yields isolated transaction states per request thread."""
    async with AsyncSessionLocal() as session:
        try:
            yield session
        finally:
            await session.close()