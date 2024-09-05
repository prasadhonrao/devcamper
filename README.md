# MERN Bootcamp

## Overview

MERN Bootcamp is a web application created to help users discover, rate, and review coding bootcamps. The platform provides a comprehensive solution for users to search for bootcamps based on location, browse reviews from other users, and submit their own feedback. Its primary goal is to provide a resource for aspiring coders to find the right bootcamp for their needs.

Built using the MERN stack, the application leverages MongoDB, Express.js, React, and Node.js to deliver a full-stack experience. On the backend, Express.js and MongoDB are utilized to handle API requests and manage data storage. Meanwhile, the frontend is powered by React, which provides a dynamic and responsive user interface.

The application also includes essential user authentication and authorization features. Users are required to log in before submitting their reviews, ensuring that only authenticated users can contribute. This system is powered by JWT tokens, which provide secure authentication and authorization management throughout the platform.

Designed with a responsive layout, the application is accessible on both mobile and desktop devices, offering a seamless experience regardless of screen size. The MapQuest Geocoding API is integrated to support location-based search functionality, allowing users to search for bootcamps based on geographic coordinates derived from inputted addresses.

Additional features include a file upload system, enabling users to upload images of bootcamps alongside their reviews. The platform also incorporates email functionality, automatically sending welcome emails to users when they sign up for an account.

With a focus on user-friendliness, the interface is clean and intuitive, ensuring easy navigation and a pleasant experience for all users.

## Features

- **Search for Bootcamps by Location**: Users can search for coding bootcamps based on their geographic location.
- **User Authentication and Authorization**: Secure login system using JWT tokens to ensure only authenticated users can submit reviews.
- **User Reviews and Ratings**: View reviews and ratings from other users, and submit your own feedback.
- **MapQuest Geocoding API Integration**: Converts addresses to geographic coordinates for accurate location-based search functionality.
- **Image Upload**: Publishers can upload multiple images of bootcamps while creating it.
- **Email Functionality**: Sends welcome emails to users upon successful sign-up.
- **MERN Stack Architecture**: Built using MongoDB, Express.js, React, and Node.js for a full-stack web application.
- **Responsive Design**: Optimized for both mobile and desktop devices with a responsive layout.
- **Intuitive User Interface**: Clean, easy-to-use interface for smooth navigation.

## Technologies Used

- **MongoDB**: Database for storing bootcamp and user data
- **Express.js**: Backend framework for building the API
- **React**: Frontend library for building the user interface
- **Node.js**: Runtime environment for executing JavaScript on the server
- **Bootstrap**: CSS framework for responsive design
- **React Bootstrap**: Bootstrap components for React

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
└── README.md         # Project documentation
```

## Setup Instructions

For detailed setup instructions, please refer to the [SETUP.md](SETUP.md) file.

## Contributing

Contributions are welcome! Please see the [CONTRIBUTING](CONTRiBUTING.md) file for guidelines on how to contribute to this project.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
