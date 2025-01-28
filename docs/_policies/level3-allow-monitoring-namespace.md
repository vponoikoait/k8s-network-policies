---
layout: policy
title: LEVEL 3 - Monitoring Access
yaml_file: /policies/level3-allow-monitoring-namespace.yaml
level: 3
---

LEVEL 3 - Monitoring Access

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

More policies can be discovered [here](/k8s-network-policies/).

Network policies documentation in details can be found [here](https://kubernetes.io/docs/concepts/services-networking/network-policies/).
