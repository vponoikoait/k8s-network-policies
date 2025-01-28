---
layout: policy
title: LEVEL 6 - Protocol Control
yaml_file: /policies/level6-multi-protocol.yaml
level: 6
---

LEVEL 6 - Protocol Control

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

More policies can be discovered [here](/k8s-network-policies/).

Network policies documentation in details can be found [here](https://kubernetes.io/docs/concepts/services-networking/network-policies/).
