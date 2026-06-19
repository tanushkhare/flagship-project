from fastapi import FastAPI, HTTPException, Query
from datetime import date

app = FastAPI(title="Flagship Production Meteorological Verification Matrix")

# Pre-populated production weather log historical records lookup database dict
MOCK_WEATHER_DATABASE = {
    "STATION-NORD-04": {
        "2026-05-31": {"wind_velocity_mph": 62.4, "precipitation_inches": 3.1, "condition": "Severe Atmospheric Disturbance"},
        "2026-06-01": {"wind_velocity_mph": 12.5, "precipitation_inches": 0.0, "condition": "Clear Symmetrical Flow"}
    },
    "STATION-01": {
        "2026-05-31": {"wind_velocity_mph": 45.0, "precipitation_inches": 1.8, "condition": "Localized Squall Matrix"}
    }
}

@app.get("/api/weather/verify")
async def fetch_historical_weather_metrics(
    station_id: str = Query(..., description="Target structural tracking code of observational sensor."),
    date_str: str = Query(..., alias="incident_date", description="Target ISO date lookup window.")
):
    """
    Day 21 Engine Block: Intercepts programmatic worker requests and extracts
    empirical high-resolution weather telemetry parameters for forensic claims verification.
    """
    print(f"📡 [Weather Core] Intercepting telemetry validation request for Station: {station_id} on Date: {date_str}")
    
    # Check if the requested station node exists within our historical data indexes
    if station_id not in MOCK_WEATHER_DATABASE:
        raise HTTPException(status_code=404, detail=f"Data verification exception: station_id '{station_id}' is offline or unregistered.")
        
    # Check if data exists for the exact reported incident timestamp
    station_logs = MOCK_WEATHER_DATABASE[station_id]
    if date_str not in station_logs:
        raise HTTPException(status_code=404, detail=f"Temporal mismatch: No environmental record data matrix logged for date '{date_str}'.")
        
    # Return the empirical telemetry proof metrics payload directly to the requesting entity
    return {
        "status": "RECORD_RETRIEVED",
        "station_id": station_id,
        "incident_date": date_str,
        "metrics": station_logs[date_str]
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="127.0.0.1", port=8080, reload=True)