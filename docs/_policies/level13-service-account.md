---
layout: policy
title: LEVEL 13 - Identity Security
yaml_file: /policies/level13-service-account.yaml
level: 13
---

LEVEL 13 - Identity Security

## Policy Description

This network policy implements service account rules in Kubernetes.

## Key Points

- Implements specific network policy rules
- Controls pod-to-pod communication

## Usage

Apply this policy using:
```bash
kubectl apply -f level13-service-account.yaml
```

## Policy Details

More policies can be discovered [here](/k8s-network-policies/).

Network policies documentation in details can be found [here](https://kubernetes.io/docs/concepts/services-networking/network-policies/).
