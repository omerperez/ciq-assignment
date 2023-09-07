from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy import create_engine
from decouple import config
from sqlalchemy.engine.reflection import Inspector

db_url = config("DB_URL")

engine = create_engine(db_url)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()
