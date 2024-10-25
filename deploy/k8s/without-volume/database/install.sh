#!bin/bash
kubectl apply -f configmap.yaml
kubectl apply -f secret.yaml
kubectl apply -f deployment.yaml
kubectl apply -f service-nodeport.yaml
kubectl apply -f service.yaml