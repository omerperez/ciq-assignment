from pydantic import BaseModel

class Event(BaseModel):
    user_id: str
    type: str
    event_type: str
    timestamp: str
    current_path: str
    screen_width: int
    screen_height: int
    language: str
    on_line: bool

class NavigateEvent(Event):
    mouse_position_x: int
    mouse_position_y: int
    from_path: str
    to_path: str

class AdEvent(Event):
    mouse_position_x: int
    mouse_position_y: int
    slot_location: str
    navigate_to: str

class UserCreate(BaseModel):
    user_id: str
    event: str
    timestamp: str
    user_agent: str
    device_type: str
    platform: str
    cookie_enabled: bool
    do_not_track: str

class EventResponse(BaseModel):
    id: int
    user_id: str
    type: str
    event_type: str
    timestamp: str
    current_path: str
    screen_width: int
    screen_height: int
    language: str
    on_line: bool

class NavigateEventResponse(EventResponse):
    mouse_position_x: int
    mouse_position_y: int
    from_path: str
    to_path: str

class AdEventResponse(EventResponse):
    mouse_position_x: int
    mouse_position_y: int
    slot_location: str
    navigate_to: str

class UserResponse(BaseModel):
    id: int
    user_id: str
    event: str
    timestamp: str
    user_agent: str
    device_type: str
    platform: str
    cookie_enabled: bool
    do_not_track: str