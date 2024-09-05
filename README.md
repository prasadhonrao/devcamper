# MERN Bootcamp

A bootcamp web application built using the MERN stack (MongoDB, Express.js, React, Node.js).

## Overview

MERN Bootcamp is a web application designed to help users find, rate, and review coding bootcamps. The application provides a platform for users to search for bootcamps based on location, read reviews from other users, and submit their own reviews.

## Features

- User authentication and authorization
- Search for bootcamps by location
- View detailed information about each bootcamp
- Read and write reviews for bootcamps
- Responsive design for mobile and desktop

## Technologies Used

- **MongoDB**: Database for storing bootcamp and user data
- **Express.js**: Backend framework for building the API
- **React**: Frontend library for building the user interface
- **Node.js**: Runtime environment for executing JavaScript on the server
- **Bootstrap**: CSS framework for responsive design
- **React Bootstrap**: Bootstrap components for React

## Setup Instructions

### Prerequisites

- Node.js (v14.x or later)
- npm (v6.x or later)
- MongoDB (local or cloud instance)

### Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/prasadhonrao/mern-bootcamp.git
   cd mern-bootcamp
   ```

2. **Install dependencies for both the backend and frontend:**

   ```sh
   # Install API dependencies
   cd api
   npm install

   # Install UI dependencies
   cd ../ui
   npm install
   ```

3. **Set up environment variables:**

   - For production, update the `env.production` file in the `api` directory with the required details.
   - For development, create a `.env` file in the `api` directory and add the following variables:
   - To get your Geocoder API key from MapQuest, sign up at [MapQuest Developer](https://developer.mapquest.com/) and create a new application to obtain your API key.
   - For email configuration, you can use services like [Mailtrap](https://mailtrap.io/) for testing email functionality.
   - For JWT secret, you can generate a random string using a tool like [RandomKeygen](https://randomkeygen.com/).

   ```env
   # Server configuration
   PORT=6000
   NODE_ENV=production

   # Database configuration
   MONGO_URI=mongodb://localhost:27017/mern-bootcamp-prod-db

   # Geocoder configuration
   GEOCODER_PROVIDER=mapquest
   GEOCODER_API_KEY=<YOUR_API_KEY> # Get your API key from https://developer.mapquest.com/

   # File upload configuration
   FILE_UPLOAD_PATH=./public/uploads
   MAX_FILE_UPLOAD=1000000

   # JWT configuration
   JWT_SECRET=<YOUR_SECRET>
   JWT_EXPIRE=30d
   JWT_COOKIE_EXPIRE=30

   # Email configuration
   SMTP_HOST=<HOST_NAME>
   SMTP_PORT=<HOST_PORT>
   SMTP_EMAIL=<YOUR_EMAIL>
   SMTP_PASSWORD=<YOUR_PASSWORD>
   FROM_EMAIL=<YOUR_EMAIL>
   FROM_NAME=<YOUR_NAME>
   ```

   **Note:**

4. **Run the application:**

   ```sh
   # Start the api server
   cd api
   npm run dev

   # Start the ui development server
   cd ../ui
   npm start
   ```

   The api server will run on `http://localhost:5000` and the frontend will run on `http://localhost:3000`.

## Folder Structure

```plaintext
mern-bootcamp/
├── api/          # Backend code (Express.js)
│   ├── config/       # Configuration files
│   ├── controllers/  # API controllers
│   ├── models/       # Mongoose models
│   ├── routes/       # API routes
│   ├── middleware/   # Custom middleware
│   ├── utils/        # Utility functions
│   ├── .env          # Environment variables
│   └── server.js     # Entry point for the backend
├── ui/               # Frontend code (React)
│   ├── public/       # Public assets
│   ├── src/          # React components and pages
│   ├── .env          # Environment variables
│   └── index.js      # Entry point for the
frontend
└── README.md         # Project documentation
```
