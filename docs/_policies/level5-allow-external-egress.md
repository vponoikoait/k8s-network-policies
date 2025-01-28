---
layout: policy
title: LEVEL 5 - External Egress
yaml_file: /policies/level5-allow-external-egress.yaml
level: 5
---

LEVEL 5 - External Egress

## Policy Description

This network policy implements allow external egress rules in Kubernetes.

## Key Points

- Targets specific pods using pod selector
- Defines egress traffic rules

## Usage

Apply this policy using:
```bash
kubectl apply -f level5-allow-external-egress.yaml
```

## Policy Details

More policies can be discovered [here](/k8s-network-policies/).

Network policies documentation in details can be found [here](https://kubernetes.io/docs/concepts/services-networking/network-policies/).
