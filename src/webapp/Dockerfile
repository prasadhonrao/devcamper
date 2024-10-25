# Use the official Node.js image as the base image
FROM node:14-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Set build-time environment variables
ARG REACT_APP_DEVCAMPER_BASE_API_URI
ENV REACT_APP_DEVCAMPER_BASE_API_URI=${REACT_APP_DEVCAMPER_BASE_API_URI}

# Build the React application
RUN npm run build

# Install a simple HTTP server to serve the static files
RUN npm install -g serve

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["serve", "-s", "build", "-l", "3000"]