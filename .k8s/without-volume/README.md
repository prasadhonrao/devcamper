# Setup Instructions

Follow the below instructions to setup the application in Kubernetes cluster without using Persistent Volume. Note that the data will be stored in the container and will be lost when the container restarts or when the pod is deleted.

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
    echo -n 'JWT_SECRET' | base64
   ```

## Deploy the Application

1. Deploy the application by running the following command:

   ```bash
   install.sh
   ```

## Uninstall the Application

1. Uninstall the application by running the following command:

   ```bash
   uninstall.sh
   ```
