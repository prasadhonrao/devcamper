#!bin/bash

# Export base64 encoded values for MongoDB credentials
export MONGO_USERNAME_BASE64=$(echo -n "admin" | base64)
export MONGO_PASSWORD_BASE64=$(echo -n "password" | base64)

# Prepare a template file (secret.template.yaml) where placeholders are defined
envsubst < secret.template.yaml > secret.yaml


# kubectl apply -f configmap.yaml
# kubectl apply -f secret.yaml
# kubectl apply -f deployment.yaml
# kubectl apply -f service.yaml

