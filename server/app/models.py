from sqlalchemy import Column, DateTime, Integer, Boolean, String
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.engine.reflection import Inspector
from app.database import engine

Base = declarative_base()

class BaseEvent(Base):
    __abstract__ = True
    id = Column(Integer, primary_key=True)  
    user_id = Column(String, index=True)
    type = Column(String)
    event_type = Column(String)
    timestamp = Column(DateTime)
    current_path = Column(String)
    screen_width = Column(Integer)
    screen_height = Column(Integer)
    language = Column(String)
    on_line = Column(Boolean)

class EventModel(Base):
    __tablename__ = "events"
    id = Column(Integer, primary_key=True)  
    user_id = Column(String, index=True)
    type = Column(String)
    event_type = Column(String)
    timestamp = Column(DateTime)
    current_path = Column(String)
    screen_width = Column(Integer)
    screen_height = Column(Integer)
    language = Column(String)
    on_line = Column(Boolean)

class NavigateEventModel(Base):
    __tablename__ = "navigate_events"
    id = Column(Integer, primary_key=True)
    user_id = Column(String, index=True)
    type = Column(String)
    event_type = Column(String)
    timestamp = Column(DateTime)
    current_path = Column(String)
    screen_width = Column(Integer)
    screen_height = Column(Integer)
    language = Column(String)
    on_line = Column(Boolean)
    mouse_position_x = Column(Integer)
    mouse_position_y = Column(Integer)
    from_path = Column(String)
    to_path = Column(String)

class AdEventModel(Base):
    __tablename__ = "ad_events"
    id = Column(Integer, primary_key=True)  
    user_id = Column(String, index=True)
    type = Column(String)
    event_type = Column(String)
    timestamp = Column(DateTime)
    current_path = Column(String)
    screen_width = Column(Integer)
    screen_height = Column(Integer)
    language = Column(String)
    on_line = Column(Boolean)
    mouse_position_x = Column(Integer)
    mouse_position_y = Column(Integer)
    slot_location = Column(String)
    navigate_to = Column(String)

class UserModel(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index=True)
    user_id = Column(String, index=True)
    event = Column(String)
    timestamp = Column(String)
    user_agent = Column(String)
    device_type = Column(String)
    platform = Column(String)
    cookie_enabled = Column(Boolean)
    do_not_track = Column(String)


inspector = Inspector.from_engine(engine)

if not inspector.has_table("events"):
    print("Creating 'events' table...")
    Base.metadata.create_all(bind=engine)
    print("'events' table created.")

if not inspector.has_table("navigate_events"):
    print("Creating 'navigate_events' table...")
    Base.metadata.create_all(bind=engine)
    print("'navigate_events' table created.")

if not inspector.has_table("ad_events"):
    print("Creating 'ad_events' table...")
    Base.metadata.create_all(bind=engine)
    print("'ad_events' table created.")

if not inspector.has_table("users"):
    print("Creating 'users' table...")
    Base.metadata.create_all(bind=engine)
    print("'users' table created.")
