---
title: LEVEL 1 - Basic Security
yaml_file: /policies/level1-default-deny-all.yaml
level: 1
---

LEVEL 1 - Basic Security

## Policy Description

This network policy implements default deny all rules in Kubernetes.

## Key Points

- Targets specific pods using pod selector
- Defines ingress traffic rules
- Defines egress traffic rules
- Policy types: Ingress, Egress

## Usage

Apply this policy using:
```bash
kubectl apply -f level1-default-deny-all.yaml
```

## Policy Details

The policy is defined in YAML and can be found [here](/policies/level1-default-deny-all.yaml).
