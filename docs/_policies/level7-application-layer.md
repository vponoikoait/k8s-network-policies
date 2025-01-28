---
layout: policy
title: LEVEL 7 - Application Layer Control
yaml_file: /policies/level7-application-layer.yaml
level: 7
---

LEVEL 7 - Application Layer Control

## Policy Description

This network policy implements application layer rules in Kubernetes.

## Key Points

- Targets specific pods using pod selector
- Defines ingress traffic rules

## Usage

Apply this policy using:
```bash
kubectl apply -f level7-application-layer.yaml
```

## Policy Details

More policies can be discovered [here](/k8s-network-policies/).

Network policies documentation in details can be found [here](https://kubernetes.io/docs/concepts/services-networking/network-policies/).
