---
title: LEVEL 7 - Application Layer Control
yaml_file: /policies/level7-application-layer.yaml
level: 7
---

LEVEL 7 - Application Layer Control

## Policy Description

This network policy implements application layer rules in Kubernetes.

## Key Points

- Targets specific pods using pod selector
- Defines ingress traffic rules

## Usage

Apply this policy using:
```bash
kubectl apply -f level7-application-layer.yaml
```

## Policy Details

The policy is defined in YAML and can be found [here](/policies/level7-application-layer.yaml).
