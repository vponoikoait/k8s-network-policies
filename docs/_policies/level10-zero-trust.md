---
title: LEVEL 10 - Zero-Trust Model
yaml_file: /policies/level10-zero-trust.yaml
level: 10
---

LEVEL 10 - Zero-Trust Model

## Policy Description

This network policy implements zero trust rules in Kubernetes.

## Key Points

- Targets specific pods using pod selector
- Defines ingress traffic rules
- Defines egress traffic rules
- Policy types: Ingress, Egress

## Usage

Apply this policy using:
```bash
kubectl apply -f level10-zero-trust.yaml
```

## Policy Details

The policy is defined in YAML and can be found [here](/policies/level10-zero-trust.yaml).
