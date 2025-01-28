---
layout: policy
title: LEVEL 4 - External IP Access
yaml_file: /policies/level4-allow-external-ips.yaml
level: 4
---

LEVEL 4 - External IP Access

## Policy Description

This network policy implements allow external ips rules in Kubernetes.

## Key Points

- Targets specific pods using pod selector
- Defines ingress traffic rules

## Usage

Apply this policy using:
```bash
kubectl apply -f level4-allow-external-ips.yaml
```

## Policy Details

More policies can be discovered [here](/k8s-network-policies/).

Network policies documentation in details can be found [here](https://kubernetes.io/docs/concepts/services-networking/network-policies/).
