from pydantic import BaseModel, Field, field_validator
from datetime import datetime
from typing import Optional

class ClaimSubmission(BaseModel):
    """
    Day 15 Core Ingestion Model: Enforces explicit data typing and structural 
    validations on inbound incoming insurance claim payload streams.
    """
    claim_id: str = Field(..., description="Unique alphanumeric production identity hash.")
    policy_number: str = Field(..., description="Target policy tracking code linked to coverage limits.")
    incident_date: str = Field(..., description="ISO 8601 string marking the exact occurrence timestamp.")
    claimed_amount: float = Field(..., description="Total direct financial compensation amount requested.")
    weather_station_id: Optional[str] = Field(None, description="Nearest targeted observational weather sensor node.")

    @field_validator("claimed_amount")
    @classmethod
    def validate_positive_financials(cls, value: float) -> float:
        """Enforces absolute real monetary metrics by stopping zero or negative assertions."""
        if value <= 0:
            raise ValueError("Claim evaluation parameters failed: claimed_amount must be strictly greater than 0.00")
        return value

    @field_validator("incident_date")
    @classmethod
    def validate_timestamp_format(cls, value: str) -> str:
        """Parses the payload timestamp to confirm compliance with standardized date parameters."""
        try:
            # Confirm string parses cleanly via standard date-string formatting logic
            datetime.fromisoformat(value)
            return value
        except ValueError:
            raise ValueError("Temporal formatting failure: incident_date must be formatted as a valid ISO string (YYYY-MM-DD)")

if __name__ == "__main__":
    print("⏳ Executing Day 15 Data Contract Structural Audit Tests...")
    
    # Test Payload A: Pass valid parameters down to the validation layer
    valid_payload = {
        "claim_id": "CLM-88392-X",
        "policy_number": "POL-9921-A",
        "incident_date": "2026-05-31",
        "claimed_amount": 14250.75,
        "weather_station_id": "STATION-NORD-04"
    }
    
    try:
        validated_claim = ClaimSubmission(**valid_payload)
        print("✅ Success: Inbound tracking contract instantiated cleanly structure validation passed!")
        print(f"📦 Serialized Data Object Blueprint JSON representation: {validated_claim.model_dump_json(indent=2)}")
    except Exception as error:
        print(f"❌ Unexpected audit trace error: {error}")