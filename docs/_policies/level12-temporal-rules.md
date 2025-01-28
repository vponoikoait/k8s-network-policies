---
layout: policy
title: LEVEL 12 - Temporal Security
yaml_file: /policies/level12-temporal-rules.yaml
level: 12
---

LEVEL 12 - Temporal Security

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

More policies can be discovered [here](/k8s-network-policies/).

Network policies documentation in details can be found [here](https://kubernetes.io/docs/concepts/services-networking/network-policies/).
