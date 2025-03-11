#!bin/bash
kubectl apply -f configmap.yaml
kubectl apply -f secret.yaml
kubectl apply -f deployment.yaml
kubectl apply -f service.yaml

# Port forward service to test API connectivity from local machine
# kubectl port-forward service/devcamper-webapi-service 5000:5000 -n devcamper-namespace