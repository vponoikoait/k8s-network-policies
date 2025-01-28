---
layout: policy
title: LEVEL 11 - Cluster Federation Control
yaml_file: /policies/level11-cluster-aware.yaml
level: 11
---

LEVEL 11 - Cluster Federation Control

## Policy Description

This network policy implements cluster aware rules in Kubernetes.

## Key Points

- Targets specific pods using pod selector
- Defines ingress traffic rules
- Defines egress traffic rules

## Usage

Apply this policy using:
```bash
kubectl apply -f level11-cluster-aware.yaml
```

## Policy Details

The policy is defined in YAML and can be found [here](/policies/level11-cluster-aware.yaml).
