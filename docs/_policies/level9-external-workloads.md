---
title: LEVEL 9 - External Workload Integration
yaml_file: /policies/level9-external-workloads.yaml
level: 9
---

LEVEL 9 - External Workload Integration

## Policy Description

This network policy implements external workloads rules in Kubernetes.

## Key Points

- Targets specific pods using pod selector
- Defines egress traffic rules

## Usage

Apply this policy using:
```bash
kubectl apply -f level9-external-workloads.yaml
```

## Policy Details

The policy is defined in YAML and can be found [here](/policies/level9-external-workloads.yaml).
