# MERN Stack Integration Assignment

# Mindhaven - A Mental Wellness MERN App
This assignment focuses on building a full-stack MERN (MongoDB, Express.js, React.js, Node.js) application that demonstrates seamless integration between front-end and back-end components.

## screenshots
  ### Home Page
  ![Home](./screenshots/home.png)
 ###  meditation mpage
  ![Meditation](./screenshots/meditation.png)
 ###  journal page
  ![Journal](./screenshots/journal.png)

## Project Structure

mindhaven/
├── client/                 # React front-end
│   ├── public/             # Static files
│   ├── src/                # React source code
│   │   ├── components/     # Reusable components
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── services/       # API services
│   │   ├── context/        # React context providers
│   │   └── App.jsx         # Main application component
│   └── package.json        # Client dependencies
├── server/                 # Express.js back-end
│   ├── config/             # Configuration files
│   ├── controllers/        # Route controllers
│   ├── models/             # Mongoose models
│   ├── routes/             # API routes
│   ├── middleware/         # Custom middleware
│   ├── utils/              # Utility functions
│   ├── server.js           # Main server file
│   └── package.json        # Server dependencies
└── README.md               # Project documentation
```

##   Getting Started

1. Accept the GitHub Classroom assignment invitation
2. Clone your personal repository that was created by GitHub Classroom
3. Follow the setup instructions in the `Week4-Assignment.md` file
4. Complete the tasks outlined in the assignment

## Files Included

- `Week4-Assignment.md`: Detailed assignment instructions
- Starter code for both client and server:
  - Basic project structure
  - Configuration files
  - Sample models and components

## Requirements

- Node.js (v18 or higher)
- MongoDB (local installation or Atlas account)
- npm or yarn
- Git

 ## Install Server Dependencies
 cd server
npm install
npm init -y
npm install express mongoose dotenv cor
create a .env file with the following
   MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_secret_key
NODE_ENV=development
PORT=5000


 ## Install client Dependencies
 cd Mindhaven
npm create vite@latest client --template react/
npx create-vite@latest client
npm install
npm run dev
npm install tailwindcss @tailwindcss/vite
npm install axios react-router-dom
npm install -D autoprefixer@^10.4.21

 ## Run Both Client and Server
 # Terminal 1 (Backend)
cd server
npm run dev

# Terminal 2 (Frontend)
cd client
npm run dev

## Base url
http://localhost:5000/api/

## Endpoints
| Method | Endpoint       | Description                      |
| ------ | -------------- | -------------------------------- |
| GET    | /journal       | Get all journals                 |
| POST   | /journal       | Create a new journal entry       |
| GET    | /moods         | Get all mood entries             |
| POST   | /moods         | Submit a new mood                |
| POST   | /auth/register | Register a new user              |
| POST   | /auth/login    | Login and receive token          |
| GET    | /users/profile | Get logged in user's profile     |
| POST   | /meditations   | Add meditation audio (protected) |
| GET    | /meditations   | Get available meditations        |


## Features Implemented
User Authentication (JWT based)
Secure Journal Entries
Mood Chart (using Recharts)
Guided Meditations
Protected Routes (using middleware)
Responsive UI with Tailwind CSS
RESTful API Architecture

##  Tech Stack
Frontend: React, Tailwind CSS, React Router, Axios, Recharts

Backend: Node.js, Express.js, MongoDB, Mongoose, JWT

Dev Tools: Vite, ESLint, Dotenv


## Submission

Your work will be automatically submitted when you push to your GitHub Classroom repository. Make sure to:

1. Complete both the client and server portions of the application
2. Implement all required API endpoints
3. Create the necessary React components and hooks
4. Document your API and setup process in the README.md
5. Include screenshots of your working application

## Resources

- [MongoDB Documentation](https://docs.mongodb.com/)
- [Express.js Documentation](https://expressjs.com/)
- [React Documentation](https://react.dev/)
- [Node.js Documentation](https://nodejs.org/en/docs/)
- [Mongoose Documentation](https://mongoosejs.com/docs/) 