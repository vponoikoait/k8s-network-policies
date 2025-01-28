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

The policy is defined in YAML and can be found [here](/policies/level15-ai-workloads.yaml).
