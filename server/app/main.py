from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.routers import event, user
from decouple import config

client_origin = config("CORS_ORIGIN")

app = FastAPI()

origins = [
    client_origin
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(event.router, prefix="/events", tags=["events"])
app.include_router(user.router, prefix="/users", tags=["users"])
