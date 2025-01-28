---
title: LEVEL 12 - Time-Based Security
yaml_file: /policies/level12-temporal-rules.yaml
level: 12
---

LEVEL 12 - Time-Based Security

## Policy Description

This network policy implements temporal rules rules in Kubernetes.

## Key Points

- Targets specific pods using pod selector
- Defines ingress traffic rules

## Usage

Apply this policy using:
```bash
kubectl apply -f level12-temporal-rules.yaml
```

## Policy Details

The policy is defined in YAML and can be found [here](/policies/level12-temporal-rules.yaml).
