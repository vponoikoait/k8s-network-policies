---
title: LEVEL 13 - Identity-Based Access
yaml_file: /policies/level13-service-account.yaml
level: 13
---

LEVEL 13 - Identity-Based Access

## Policy Description

This network policy implements service account rules in Kubernetes.

## Key Points

- Implements specific network policy rules
- Controls pod-to-pod communication

## Usage

Apply this policy using:
```bash
kubectl apply -f level13-service-account.yaml
```

## Policy Details

The policy is defined in YAML and can be found [here](/policies/level13-service-account.yaml).
