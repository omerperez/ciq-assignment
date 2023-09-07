# CIQ Assignment

Welcome to the CIQ Assignment project! This monolithic application combines a React.js client-side interface with TypeScript and a Python FastAPI server-side component using PostgreSQL as the database. Follow the instructions below to set up and run the project.

## Client Side - React.js with TypeScript

### Prerequisites

Before you begin, ensure that you have the following software installed on your system:

- [Node.js](https://nodejs.org/) - A JavaScript runtime for building applications.
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/) - Package managers for installing JavaScript libraries and tools.

### Install project dependencies:

Open a terminal in the project's client directory and run:

npm install

- If react-prebid's library throws an error, run:
- npm install --force

### Running the Project

`npm run start` - script to run the project in develop mode

## Server - Server - Python with FastAPI (using PostgreSQL)

This FastAPI project allows you to create events and users using a RESTful API. Follow the instructions below to set up and run the project.

### Prerequisites

Before running the project, ensure that you have the following prerequisites installed on your system:

- Python 3.7 or higher
- PostgreSQL database
- `pip` package manager

### Install project dependencies:

In the project's server directory, open a terminal and run:
pip install -r requirements.txt

### Database

Create a PostgreSQL database with the name ciq or update the db_url in app/database.py to match your database configuration.

### Configuration env

Create a PostgreSQL database with the name ciq or update the db_url in app/database.py to match your database configuration.

### Configuration (.env)

DB_URL=<Database URL as follows>
CORS_ORIGIN=<CORS origin URL (update with the actual origin of your frontend)>

### Running the Project

To start the FastAPI server, open a terminal in the server directory and run:
python run.py

### API Endpoints

The server provides the following API endpoints:

- `POST /events/` - Create general events.
- `POST /events/navigate` - Create events related to navigating between pages in the application.
- `POST /events/adSlot` - Create events related to advertisements displayed in the application.
- `POST /users/` - Create user profiles.

These endpoints allow you to interact with the FastAPI server to manage events and user data within your application.
