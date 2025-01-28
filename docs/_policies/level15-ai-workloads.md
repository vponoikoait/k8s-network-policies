---
layout: policy
title: LEVEL 15 - AI Workload Security
yaml_file: /policies/level15-ai-workloads.yaml
level: 15
---

LEVEL 15 - AI Workload Security

## Policy Description

This network policy implements ai workloads rules in Kubernetes.

## Key Points

- Targets specific pods using pod selector
- Defines egress traffic rules

## Usage

Apply this policy using:
```bash
kubectl apply -f level15-ai-workloads.yaml
```

## Policy Details

More policies can be discovered [here](/k8s-network-policies/).

Network policies documentation in details can be found [here](https://kubernetes.io/docs/concepts/services-networking/network-policies/).
