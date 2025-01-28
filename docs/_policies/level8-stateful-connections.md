---
layout: policy
title: LEVEL 8 - Stateful Networking
yaml_file: /policies/level8-stateful-connections.yaml
level: 8
---

LEVEL 8 - Stateful Networking

## Policy Description

This network policy implements stateful connections rules in Kubernetes.

## Key Points

- Targets specific pods using pod selector
- Defines ingress traffic rules
- Defines egress traffic rules
- Policy types: Ingress, Egress

## Usage

Apply this policy using:
```bash
kubectl apply -f level8-stateful-connections.yaml
```

## Policy Details

More policies can be discovered [here](/k8s-network-policies/).

Network policies documentation in details can be found [here](https://kubernetes.io/docs/concepts/services-networking/network-policies/).
