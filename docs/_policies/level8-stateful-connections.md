---
title: LEVEL 8 - Stateful Connection Tracking
yaml_file: /policies/level8-stateful-connections.yaml
level: 8
---

LEVEL 8 - Stateful Connection Tracking

## Policy Description

This network policy implements stateful connections rules in Kubernetes.

## Key Points

- Targets specific pods using pod selector
- Defines ingress traffic rules
- Defines egress traffic rules
- Policy types: Ingress, Egress

## Usage

Apply this policy using:
```bash
kubectl apply -f level8-stateful-connections.yaml
```

## Policy Details

The policy is defined in YAML and can be found [here](/policies/level8-stateful-connections.yaml).
