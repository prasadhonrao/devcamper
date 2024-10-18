# DevCamper UI

## Overview

This is the frontend UI component of the DevCamper platform. It communicates with the DevCamper API to display bootcamp-related data. The UI is built with React.js and provides an intuitive user experience for both students and instructors.


## Table of Contents

- [Prerequisites](#prerequisites)
- [Local Setup](#local-setup)
- [Running the UI](#running-the-ui)
- [Build for Production](#build-for-production)
- [Common Issues](#common-issues)
- [Available Scripts](#available-scripts)

## Prerequisites

Before setting up the DevCamper UI, ensure you have the following installed:
- **Node.js (v14.x or later)**: [Download Node.js](https://nodejs.org/en/download/)

- **npm (v6.x or later)**: npm is included with Node.js, but you can find instructions for updating it [here](https://docs.npmjs.com/getting-started/installing-npm).

- **Git (optional, for cloning the repository)**: Download Git from [here](https://git-scm.com/downloads).


## Required API

You need the DevCamper API running locally or remotely. Follow the API setup guide mentioned in api->README.md to configure and start the backend service before proceeding with the UI setup.

## Local Setup
### 1. Clone the Repository
```bash
git clone https://github.com/yourusername/devcamper-ui.git
cd devcamper-ui
```
### 2. Install Dependencies
Run the following command to install all required dependencies:

```bash
npm install
```


### 3. Configure Environment Variables
Create a .env file in the root of your UI project and configure the following variables:

```bash
REACT_APP_API_URL=http://localhost:6000/api/v1
REACT_APP_MAP_API_KEY=your_mapquest_api_key
```
Replace your_mapquest_api_key with your actual API key for the geocoding service.

### 4. Start the Development Server
To start the React development server, run:
```bash
npm start
```

This will launch the UI on http://localhost:3000 by default.

##  Running the UI
After setting up the API and running the frontend development server, open your browser and navigate to http://localhost:3000. You should be able to browse bootcamps, register, log in, and interact with the platform.

Ensure that the DevCamper API is running locally (or use the production API endpoint) to retrieve data.

 ## Build for Production
To create a production build of the UI, run:

```bash
npm run build
```

This will generate static files in the build directory, ready to be deployed to any web server.

## Common Issues
#### API Connection Fails
+ Ensure that the DevCamper API is running and accessible.
+ Check the REACT_APP_API_URL value in your .env file.
#### Invalid API Key for Geocoding
+ Verify that the correct MapQuest API Key is set in the .env file.
#### Port Conflicts
+ If another application is using port 3000, modify the port in the package.json or start the server on a different port using:
```bash
PORT=4000 npm start
```



## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
