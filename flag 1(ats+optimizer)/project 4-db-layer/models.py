from datetime import datetime, timezone
from sqlalchemy import String, Text, DateTime, ForeignKey, Index
from sqlalchemy.orm import DeclarativeBase, Mapped, mapped_column
from sqlalchemy.dialects.postgresql import TSVECTOR

class Base(DeclarativeBase):
    pass

class Tenant(Base):
    __tablename__ = "tenants"
    
    id: Mapped[str] = mapped_column(String(50), primary_key=True)
    company_name: Mapped[str] = mapped_column(String(100), nullable=False)
    created_at: Mapped[datetime] = mapped_column(DateTime, default=lambda: datetime.now(timezone.utc))

class TenantResume(Base):
    __tablename__ = "tenant_resumes"
    
    id: Mapped[str] = mapped_column(String(50), primary_key=True)
    tenant_id: Mapped[str] = mapped_column(
        String(50), 
        ForeignKey("tenants.id", ondelete="CASCADE"), 
        nullable=False,
        index=True  # Relies on native B-Tree index for tenant filtering
    )
    file_name: Mapped[str] = mapped_column(String(255), nullable=False)
    character_count: Mapped[int] = mapped_column(nullable=False)
    extracted_content: Mapped[str] = mapped_column(Text, nullable=False)
    
    # Pre-tokenized dictionary word column
    search_vector: Mapped[str] = mapped_column(TSVECTOR, nullable=True)
    
    uploaded_at: Mapped[datetime] = mapped_column(DateTime, default=lambda: datetime.now(timezone.utc))

    # FIX: Isolate the GIN Performance Index to the search_vector column only
    __table_args__ = (
        Index("ix_resumes_search_vector", "search_vector", postgresql_using="gin"),
    )