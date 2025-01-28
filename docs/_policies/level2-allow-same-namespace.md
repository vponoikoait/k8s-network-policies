---
layout: policy
title: LEVEL 2 - Namespace Isolation
yaml_file: /policies/level2-allow-same-namespace.yaml
level: 2
---

LEVEL 2 - Namespace Isolation

## Policy Description

This network policy implements allow same namespace rules in Kubernetes.

## Key Points

- Targets specific pods using pod selector
- Defines ingress traffic rules

## Usage

Apply this policy using:
```bash
kubectl apply -f level2-allow-same-namespace.yaml
```

## Policy Details

More policies can be discovered [here](/k8s-network-policies/).

Network policies documentation in details can be found [here](https://kubernetes.io/docs/concepts/services-networking/network-policies/).
