---
layout: policy
title: LEVEL 9 - Hybrid Cloud Security
yaml_file: /policies/level9-external-workloads.yaml
level: 9
---

LEVEL 9 - Hybrid Cloud Security

## Policy Description

This network policy implements external workloads rules in Kubernetes.

## Key Points

- Targets specific pods using pod selector
- Defines egress traffic rules

## Usage

Apply this policy using:
```bash
kubectl apply -f level9-external-workloads.yaml
```

## Policy Details

More policies can be discovered [here](/k8s-network-policies/).

Network policies documentation in details can be found [here](https://kubernetes.io/docs/concepts/services-networking/network-policies/).
