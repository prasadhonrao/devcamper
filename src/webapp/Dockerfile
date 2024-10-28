# Stage 1: Build the React application
FROM node:14 AS build

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

# Stage 2: Serve the React application
FROM node:14 AS serve

# Install a simple HTTP server to serve the static files
RUN npm install -g serve

# Set the working directory
WORKDIR /app

# Copy the build artifacts from the previous stage
COPY --from=build /app/build ./build

# Expose the port the app runs on
EXPOSE 3000

# Serve the React application
CMD ["serve", "-s", "build"]