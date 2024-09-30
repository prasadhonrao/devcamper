# DevCamper API

## Overview

The DevCamper API is a backend service for managing bootcamp-related data, including courses, reviews, and user authentication. This documentation provides detailed instructions for setting up the API in both local and production environments.

## Table of Contents

- [Prerequisites](#prerequisites)
  - [Setup Geocoding Service](#setup-geocoding-service)
  - [Setup SMTP Service (Local Setup)](#setup-smtp-service)
  - [Setup Postman](#setup-postman)
- [Local Setup](#local-setup)
  - [Install NodeJs](#install-nodejs)
  - [Install MongoDB](#install-mongodb)
  - [Setup Environment Variables](#setup-environment-variables)
  - [Seed the Database](#seed-the-database)
  - [Validate the Data in MongoDB Compass](#validate-the-data-in-mongodb-compass)
  - [Running the API](#running-the-api)
  - [Cleanup the Database](#cleanup-the-database)

## Prerequisites

Before setting up the DevCamper API, you need to sign up for the following services and obtain the necessary API keys and credentials. You would also need to install Postman client for testing.

### Setup Geocoding Service

1. Sign up for a free account on [MapQuest](https://developer.mapquest.com/).
2. Create a new application to get an API key.

### Setup SMTP Service

1. Sign up for a free account on [Mailtrap](https://mailtrap.io/).
2. Create a new inbox to get SMTP credentials.

### Setup Postman

1. Download and install [Postman](https://www.postman.com/downloads/).
2. Import the Postman collection provided in the `postman` directory.

## Local Setup

### Install NodeJs

1. Download and install Node.js from the [official website](https://nodejs.org/).

### Install MongoDB

1. Install MongoDB in local environment using one of the following options:

   - [MongoDB Community Server](https://www.mongodb.com/try/download/community)
   - [Docker](https://docs.docker.com/get-docker/)

     - Run the following command to start a MongoDB container:

       ```bash
       docker run -d -p 27017:27017 --name devcamper-mongo mongo
       ```

2. Download and install [MongoDB Compass](https://www.mongodb.com/try/download/compass) for a graphical user interface to interact with the database.
3. Connect to the MongoDB server using the following connection string:

   ```plaintext
   mongodb://localhost:27017
   ```

4. Create a new database named `devcamper-db`.

### Setup Environment Variables

Create a `.env` file in the root of your project directory and configure the following environment variables. Replace the placeholder values with your own credentials and API keys obtained from earlier steps.

```plaintext
PORT=6000
NODE_ENV=development
MONGO_URI=mongodb://localhost:27017/devcamper-db
GEOCODER_PROVIDER=mapquest
GEOCODER_API_KEY=your_mapquest_api_key
FILE_UPLOAD_PATH=./public/uploads
MAX_FILE_UPLOAD=1000000
JWT_SECRET=your_jwt_secret
JWT_EXPIRE=30d
JWT_COOKIE_EXPIRE=30
SMTP_HOST=your_smtp_host
SMTP_PORT=your_smtp_port
SMTP_EMAIL=your_smtp_email
SMTP_PASSWORD=your_smtp_password
FROM_EMAIL=your_from_email
FROM_NAME=your_from_name
RATE_LIMIT_MAX=100
RATE_LIMIT_WINDOW_MS=60000
```

### Seed the Database

Run the following command to seed the database with bootcamps, courses, and users.

```bash
node run data:import
```

### Validate the Data in MongoDB Compass

1. Open MongoDB Compass and connect
2. Select the `devcamper-db` database
3. Verify that the `bootcamps`, `courses`, and `users` collections have been created and populated with data.

### Running the API

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the API server:

   ```bash
    npm run dev
   ```

3. Use the Postman collection provided in the `postman` directory to interact with the API.

4. Make sure that the environment is set to development in Postman.

5. Test the API endpoints to verify that the API is working as expected.

### Cleanup the Database

Run the following command to delete all data from the database. This will remove all bootcamps, courses, and users.

```bash
node run data:delete
```
