---
title: LEVEL 5 - Advanced Egress Control
yaml_file: /policies/level5-allow-external-egress.yaml
level: 5
---

LEVEL 5 - Advanced Egress Control

## Policy Description

This network policy implements allow external egress rules in Kubernetes.

## Key Points

- Targets specific pods using pod selector
- Defines egress traffic rules

## Usage

Apply this policy using:
```bash
kubectl apply -f level5-allow-external-egress.yaml
```

## Policy Details

The policy is defined in YAML and can be found [here](/policies/level5-allow-external-egress.yaml).
