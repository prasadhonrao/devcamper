#!bin/bash
kubectl apply -f configmap.yaml
kubectl apply -f secret.yaml
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml


# Port foward deployment to test DB connectivity from local machine
# kubectl port-forward deployment/devcamper-db-deployment 32017:27017 -n devcamper-namespace