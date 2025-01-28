---
layout: policy
title: LEVEL 14 - Lifecycle Security
yaml_file: /policies/level14-pod-lifecycle.yaml
level: 14
---

LEVEL 14 - Lifecycle Security

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

More policies can be discovered [here](/k8s-network-policies/).

Network policies documentation in details can be found [here](https://kubernetes.io/docs/concepts/services-networking/network-policies/).
