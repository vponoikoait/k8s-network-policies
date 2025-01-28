---
layout: policy
title: LEVEL 3 - Cross-Namespace Access
yaml_file: /policies/level3-allow-monitoring-namespace.yaml
level: 3
---

LEVEL 3 - Cross-Namespace Access

## Policy Description

This network policy implements allow monitoring namespace rules in Kubernetes.

## Key Points

- Targets specific pods using pod selector
- Defines ingress traffic rules

## Usage

Apply this policy using:
```bash
kubectl apply -f level3-allow-monitoring-namespace.yaml
```

## Policy Details

The policy is defined in YAML and can be found [here](/policies/level3-allow-monitoring-namespace.yaml).
