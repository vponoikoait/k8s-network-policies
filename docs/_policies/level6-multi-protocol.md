---
layout: policy
title: LEVEL 6 - Protocol-Specific Rules
yaml_file: /policies/level6-multi-protocol.yaml
level: 6
---

LEVEL 6 - Protocol-Specific Rules

## Policy Description

This network policy implements multi protocol rules in Kubernetes.

## Key Points

- Targets specific pods using pod selector
- Defines ingress traffic rules
- Defines egress traffic rules

## Usage

Apply this policy using:
```bash
kubectl apply -f level6-multi-protocol.yaml
```

## Policy Details

The policy is defined in YAML and can be found [here](/policies/level6-multi-protocol.yaml).
