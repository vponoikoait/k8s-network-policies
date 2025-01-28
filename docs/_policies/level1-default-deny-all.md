---
layout: policy
title: LEVEL 1 - Basic Security
yaml_file: /policies/level1-default-deny-all.yaml
level: 1
---

LEVEL 1 - Basic Security

## Policy Description

This network policy implements default deny all rules in Kubernetes.

## Key Points

- Targets specific pods using pod selector
- Defines ingress traffic rules
- Defines egress traffic rules
- Policy types: Ingress, Egress

## Usage

Apply this policy using:
```bash
kubectl apply -f level1-default-deny-all.yaml
```

## Policy Details

More policies can be discovered [here](/k8s-network-policies/).

Network policies documentation in details can be found [here](https://kubernetes.io/docs/concepts/services-networking/network-policies/).
