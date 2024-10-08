# DevCamper Project Setup Instructions

Welcome to the DevCamper project! This guide will walk you through the process of setting up the API server and the UI application. Please follow the steps carefully to get the application up and running.

## Prerequisites

Before starting, make sure you have the following installed on your machine:

- **Node.js**: Download and install Node.js from [here](https://nodejs.org/).
- **MongoDB**: Ensure that MongoDB is installed and running on your local machine. You can find installation instructions [here](https://docs.mongodb.com/manual/installation/).

---

## 1. API Server Setup

### Step 1: Clone the repository

```bash
git clone https://github.com/prasadhonrao/devcamper
cd DevCamper
cd api
```

### Step 2: Install API dependencies

```bash
npm install
```

### Step 3: Get Geocoder API key

To enable location-based features, you need to sign up for a free account on [MapQuest Developer](https://developer.mapquest.com/) to get an API key. This key will be used to geocoder addresses to coordinates and vice versa.

### Step 4: Get SMTP email credentials using Mailtrap

To enable email functionality, you need to sign up for a free account on [Mailtrap](https://mailtrap.io/) to get SMTP credentials. These credentials will be used to send emails for password reset and other notifications.

### Step 5: Generate JWT secret key

Generate a secure JWT secret key to sign and verify JSON Web Tokens. You can use tools like [randomkeygen.com](https://randomkeygen.com/) to generate a secure key.

### Step 6: Configure environment variables

Create a `.env` file in the root of the `api` directory and add the following environment variables. Replace the placeholders with your actual values. The `mongodb_host` should point to your MongoDB instance. The `geocoder_api_key` is the API key obtained from MapQuest. The `jwt_secret` is the secret key for JWT token generation. The `smtp_*` variables are the SMTP credentials obtained from Mailtrap.

```env
# Server configuration
port=5000
node_env=development

# Database configuration
mongodb_host=localhost
mongodb_port=27017
mongodb_username='',
mongodb_password='',
mongodb_db_name='devcamper-db',
mongodb_db_param='',

# Geocoder configuration
geocoder_provider=mapquest
geocoder_api_key=<your_api_key>  # Get your API key from https://developer.mapquest.com/

# File upload configuration
file_upload_path=./public/uploads
max_file_upload=1000000

# JWT configuration
jwt_secret=<your_secret>
jwt_expire=30d
jwt_cookie_expire=30

# Email configuration
smtp_host=<host_name>
smtp_port=<host_port>
smtp_email=<your_email>
smtp_password=<your_password>
from_email=<your_email>
from_name=<your_name>
```

### Step 4: Start the API server

To start the server in development mode, run:

```bash
npm run dev
```

For production mode, run:

```bash
npm start
```

The API server should now be running at `http://localhost:3000`.

## 2. UI Application Setup

### Step 1: Navigate to the UI app directory

```bash
cd ../ui
```

### Step 2: Install UI dependencies

```bash
npm install
```

### Step 3: Configure the API endpoint

Ensure that the frontend is configured to point to the API server. Open the `config.js` (or equivalent configuration file in the UI app) and verify that the API base URL is set to:

```js
const API_BASE_URL = 'http://localhost:3000';
```

### Step 4: Start the UI application

To start the UI in development mode, run:

```bash
npm start
```

The UI app should now be running at `http://localhost:3000`.

---

## 3. Final Setup and Testing

- Open your browser and navigate to `http://localhost:3000` to view the UI.
- You can now interact with the app, submit reviews, and test the entire functionality.
- Ensure MongoDB is running, as the API server relies on it for data storage.

---

## Troubleshooting

- **MongoDB connection issues**: Ensure MongoDB is running and the connection URI in your `.env` file is correct.
- **Missing environment variables**: Double-check that all required environment variables are set in the `.env` file.
- **File upload errors**: Ensure that the `FILE_UPLOAD_PATH` directory exists and has the correct permissions.
- **API server not starting**: Check the console for any error messages and resolve them accordingly.
- **UI app not loading**: Verify that the API base URL is correctly set in the frontend configuration.
- **Email not sending**: Check the SMTP credentials and ensure they are correct.
- **JWT token issues**: Verify that the JWT secret key is correctly set in the `.env` file.
- **Geocoder API errors**: Ensure the API key is valid and has the necessary permissions.
- **Other issues**: If you encounter any other issues, feel free to raise them in the bootcamp forum for assistance.
