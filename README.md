Task Management App
A full-stack Task Management Application built with MongoDB, Express.js, React.js, and Node.js (MERN stack).
The app allows users to create, edit, delete, and manage tasks with due dates, priorities, completion status, and reminders.

🔴Features
Create, update, and delete tasks

Set due dates and task priorities

Mark tasks as completed

Set reminders for tasks

Task list with dynamic updates

Responsive design for web

REST API for backend task operations

🔴Tech Stack
Frontend: React.js

Backend: Node.js, Express.js

Database: MongoDB

Other: Mongoose, Axios, JWT (if applicable)

🔴Project Structure
bash
Copy
Edit
/client   → React frontend  
/server   → Express backend + API routes  
Getting Started
Prerequisites
Node.js and npm installed

MongoDB installed or cloud database (MongoDB Atlas)

Installation
Clone the repo:

bash
Copy
Edit
Install server dependencies:

bash
Copy
Edit
cd server
npm install
Install client dependencies:

bash
Copy
Edit
cd ../client
npm install
Running the app
Start backend:

bash
Copy
Edit
cd server
npm start
Start frontend:

bash
Copy
Edit
cd ../client
npm start
Environment Variables
Set up a .env file in your server/ directory:

ini
Copy
Edit
PORT=5000
MONGO_URI=your-mongodb-connection-string
API Endpoints (Backend)
Method	Endpoint	Description
GET	/api/tasks	Get all tasks
POST	/api/tasks	Create new task
PUT	/api/tasks/:id	Update a task
DELETE	/api/tasks/:id	Delete a task

License
This project is open source. Feel free to use, modify, and share.
