## ContentIQ Assinment - FastAPi server

This FastAPI project allows you to create events and users using a RESTful API.
Follow the instructions below to set up and run the project.

## Prerequisites

Before running the project, ensure that you have the following prerequisites installed on your system:

- Python 3.7 or higher
- PostgreSQL database
- `pip` package manager

# Install project dependencies:

pip install -r requirements.txt

# Database

Create a PostgreSQL database with the name ciq or update the db_url in app/database.py to match your database configuration.

# Configuration env

Create a .env file in the project's root directory and add:

1. DB_URL - Database URL as follows
2. CORS_ORIGIN - CORS origin url (update with the actual origin of your frontend)

# Running the Project

python run.py

# API Endpoints

POST /events/
POST /users/
