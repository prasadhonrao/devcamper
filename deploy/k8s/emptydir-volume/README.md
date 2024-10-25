# Setup Instructions

Follow the below instructions to setup the application in Kubernetes cluster using EmptyDir Volume. Note that the data will be lost when the pod is deleted.

## Database Secrets

1. Create Mongo database username and password in base64 format:

   ```bash
   echo -n 'username' | base64
   echo -n 'password' | base64
   ```

2. Provide the created username and password in the secrets file secrets.yaml

## Web API Secrets

1. Provide database username and password created earlier in webapi/secret.yaml file

2. Get geocoder API key and encode it in base64 format and provide it in webapi/secret.yaml file:

   ```bash
   echo -n 'API_KEY' | base64
   ```

3. Get SMTP host, port, email, password and encode it in base64 format and provide it in webapi/secret.yaml file:

   ```bash
   echo -n 'HOST' | base64
   echo -n 'PORT' | base64
   echo -n 'EMAIL' | base64
   echo -n 'PASSWORD' | base64
   ```

4. Create from_email and from_name and encode it in base64 format and provide it in webapi/secret.yaml file:

   ```bash
   echo -n 'FROM_EMAIL' | base64
   echo -n 'FROM_NAME' | base64
   ```

5. Create JWT secret and encode it in base64 format and provide it in webapi/secret.yaml file:

   ```bash
      echo -n 'JWT_SECRET ' | base64
   ```

## Deploy the Application

1. Deploy the application by running the following command:

   ```bash
   install.sh
   ```

## Test the Application

1. Navigate to the api folder and import data by running the following command. This will create devcamper database and insert data into it:

   ```bash
   npm run data:import
   ```

2. Navigate to MongoDB Compass and connect to the MongoDB instance using the following connection string. Please note that the username and password are the ones created earlier and the port is the NodePort of the MongoDB service:

   ```bash
   mongodb://admin:password@localhost:32017/
   ```

3. Restart the container using Docker Desktop to see the data in the database.

4. Delete the database pod using the following command:

   ```bash
   kubectl delete pod -l app=devcamper-db -n devcamper-namespace
   ```

5. Note that deployment creates a new pod but the data is lost as the data is stored in the container and not in the Persistent Volume.

## Uninstall the Application

1. Uninstall the application by running the following command:

   ```bash
   uninstall.sh
   ```
