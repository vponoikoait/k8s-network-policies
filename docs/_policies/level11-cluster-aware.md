---
layout: policy
title: LEVEL 11 - Cluster Federation
yaml_file: /policies/level11-cluster-aware.yaml
level: 11
---

LEVEL 11 - Cluster Federation

## Policy Description

This network policy implements cluster aware rules in Kubernetes.

## Key Points

- Targets specific pods using pod selector
- Defines ingress traffic rules
- Defines egress traffic rules

## Usage

Apply this policy using:
```bash
kubectl apply -f level11-cluster-aware.yaml
```

## Policy Details

More policies can be discovered [here](/k8s-network-policies/).

Network policies documentation in details can be found [here](https://kubernetes.io/docs/concepts/services-networking/network-policies/).
