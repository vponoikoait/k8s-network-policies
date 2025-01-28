---
title: LEVEL 14 - Lifecycle-Aware Policies
yaml_file: /policies/level14-pod-lifecycle.yaml
level: 14
---

LEVEL 14 - Lifecycle-Aware Policies

## Policy Description

This network policy implements pod lifecycle rules in Kubernetes.

## Key Points

- Targets specific pods using pod selector
- Defines egress traffic rules
- Policy types: Egress

## Usage

Apply this policy using:
```bash
kubectl apply -f level14-pod-lifecycle.yaml
```

## Policy Details

The policy is defined in YAML and can be found [here](/policies/level14-pod-lifecycle.yaml).
