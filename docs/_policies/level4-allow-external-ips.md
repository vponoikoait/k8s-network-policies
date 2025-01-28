---
layout: policy
title: LEVEL 4 - IP-Based Restrictions
yaml_file: /policies/level4-allow-external-ips.yaml
level: 4
---

LEVEL 4 - IP-Based Restrictions

## Policy Description

This network policy implements allow external ips rules in Kubernetes.

## Key Points

- Targets specific pods using pod selector
- Defines ingress traffic rules

## Usage

Apply this policy using:
```bash
kubectl apply -f level4-allow-external-ips.yaml
```

## Policy Details

The policy is defined in YAML and can be found [here](/policies/level4-allow-external-ips.yaml).
