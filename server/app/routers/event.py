from fastapi import APIRouter
from app.models import EventModel, NavigateEventModel, AdEventModel
from app.schemas import Event, EventResponse, AdEvent, AdEventResponse, NavigateEvent, NavigateEventResponse
from app.database import SessionLocal
from datetime import datetime

router = APIRouter()

@router.post("/", response_model=EventResponse)
async def create_event(event_data: Event):
    event_data.timestamp = datetime.strptime(event_data.timestamp, "%Y-%m-%dT%H:%M:%S.%fZ").strftime('%Y-%m-%dT%H:%M:%S')
    db_event = EventModel(**event_data.dict()) 
    db = SessionLocal()
    db.add(db_event)
    db.commit()
    db.refresh(db_event)
    db.close()
    db_event.timestamp = db_event.timestamp.strftime('%Y-%m-%dT%H:%M:%S')
    return db_event

@router.post("/navigate", response_model=NavigateEventResponse)
async def create_event(event_data: NavigateEvent):
    event_data.timestamp = datetime.strptime(event_data.timestamp, "%Y-%m-%dT%H:%M:%S.%fZ").strftime('%Y-%m-%dT%H:%M:%S')
    db_event = NavigateEventModel(**event_data.dict())
    db = SessionLocal()
    db.add(db_event)
    db.commit()
    db.refresh(db_event)
    db.close()
    db_event.timestamp = db_event.timestamp.strftime('%Y-%m-%dT%H:%M:%S')
    return db_event

@router.post("/adSlot", response_model=AdEventResponse)
async def create_event(event_data: AdEvent):
    event_data.timestamp = datetime.strptime(event_data.timestamp, "%Y-%m-%dT%H:%M:%S.%fZ").strftime('%Y-%m-%dT%H:%M:%S')
    db_event = AdEventModel(**event_data.dict())
    db = SessionLocal()
    db.add(db_event)
    db.commit()
    db.refresh(db_event)
    db.close()
    db_event.timestamp = db_event.timestamp.strftime('%Y-%m-%dT%H:%M:%S')
    return db_event