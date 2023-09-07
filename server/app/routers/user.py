from fastapi import APIRouter
from app.models import UserModel
from app.schemas import UserCreate, UserResponse
from app.database import SessionLocal
from datetime import datetime

router = APIRouter()


@router.post("/", response_model=UserResponse)
async def create_user(user_data: UserCreate):
    user_data.timestamp = datetime.strptime(user_data.timestamp, "%Y-%m-%dT%H:%M:%S.%fZ")
    db_user = UserModel(**user_data.dict())
    db = SessionLocal()
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    db.close()
    user_data.timestamp = user_data.timestamp.strftime('%Y-%m-%dT%H:%M:%S')
    return db_user
