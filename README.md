# Kubernetes Network Policies Examples
# Warning - isn't free of AI hallucinations. PR's & issues are welcome.
This repository contains a comprehensive collection of Kubernetes Network Policy examples, ranging from basic security to advanced use cases. Each level demonstrates different aspects of network security and isolation in Kubernetes clusters.

## Table of Contents

1. [Level 1: Basic Security - Default Deny All](#level-1-basic-security)
2. [Level 2: Namespace Isolation](#level-2-namespace-isolation)
3. [Level 3: Cross-Namespace Access](#level-3-cross-namespace-access)
4. [Level 4: IP-Based Restrictions](#level-4-ip-based-restrictions)
5. [Level 5: Advanced Egress Control](#level-5-advanced-egress-control)
6. [Level 6: Protocol-Specific Rules](#level-6-protocol-specific-rules)
7. [Level 7: Application Layer Control](#level-7-application-layer-control)
8. [Level 8: Stateful Connection Tracking](#level-8-stateful-connection-tracking)
9. [Level 9: External Workload Integration](#level-9-external-workload-integration)
10. [Level 10: Zero-Trust Model](#level-10-zero-trust-model)
11. [Level 11: Cluster Federation Control](#level-11-cluster-federation-control)
12. [Level 12: Time-Based Security](#level-12-time-based-security)
13. [Level 13: Identity-Based Access](#level-13-identity-based-access)
14. [Level 14: Lifecycle-Aware Policies](#level-14-lifecycle-aware-policies)
15. [Level 15: AI Workload Security](#level-15-ai-workload-security)

## Level 1: Basic Security

`level1-default-deny-all.yaml` implements a default deny-all policy that blocks all incoming and outgoing traffic to pods in the namespace. This is the foundation of a zero-trust network model.

Key features:
- Blocks all ingress traffic
- Blocks all egress traffic
- Applies to all pods in the namespace

Requirements:
- NetworkPolicy-enabled CNI plugin
- Kubernetes v1.8+
- No existing conflicting default policies

## Level 2: Namespace Isolation

`level2-allow-same-namespace.yaml` demonstrates how to allow communication between pods within the same namespace.

Key features:
- Allows pods with label `app: my-app` to communicate
- Restricts communication to the same namespace
- Uses namespace selector for additional security

Requirements:
- NetworkPolicy-enabled CNI plugin
- Properly labeled pods (`app: my-app`)
- Namespace must have metadata label `kubernetes.io/metadata.name`

## Level 3: Cross-Namespace Access

`level3-allow-monitoring-namespace.yaml` shows how to enable monitoring tools like Prometheus to access pods across namespace boundaries.

Key features:
- Allows access from monitoring namespace
- Specifically permits Prometheus scraping
- Uses both namespace and pod selectors

Requirements:
- Monitoring namespace with label `purpose: monitoring`
- Prometheus pods labeled with `app: prometheus`
- Cross-namespace network policy support in CNI

## Level 4: IP-Based Restrictions

`level4-allow-external-ips.yaml` implements IP-based access control for external traffic.

Key features:
- Restricts access to specific IP ranges
- Includes CIDR block exceptions
- Suitable for corporate network access control

Requirements:
- CNI with CIDR rule support
- Properly configured pod labels (`app: public-api`)
- Network routing configured for specified CIDR ranges

## Level 5: Advanced Egress Control

`level5-allow-external-egress.yaml` demonstrates fine-grained control over outbound traffic to external services.

Key features:
- Controls access to specific external APIs
- Uses DNS names for destinations
- Restricts to HTTPS (port 443)

Requirements:
- CNI with DNS policy support (e.g., Cilium)
- Proper DNS resolution for external services
- HTTPS certificates properly configured

## Level 6: Protocol-Specific Rules

`level6-multi-protocol.yaml` shows how to handle multiple protocols for the same service.

Key features:
- Supports both UDP and TCP
- Configured for DNS server use case
- Handles protocol-specific port requirements

Requirements:
- CNI with multi-protocol support
- DNS server pods labeled with `role: dns-server`
- Proper network configuration for UDP/TCP traffic

## Level 7: Application Layer Control

`level7-application-layer.yaml` demonstrates port-level control for HTTP services.

Key features:
- Controls access to HTTP services
- Port-level restrictions
- Note on HTTP method filtering requirements

Requirements:
- Service mesh or API gateway for HTTP method filtering
- Pods labeled with `app: rest-api`
- CNI with port-level policy support

## Level 8: Stateful Connection Tracking

`level8-stateful-connections.yaml` handles stateful traffic patterns for web services.

Key features:
- Manages incoming web traffic
- Allows necessary return traffic
- Supports load balancer configurations

Requirements:
- CNI with connection tracking support
- Pods labeled with `app: web-server`
- Load balancer pods labeled with `role: lb-proxy`

## Level 9: External Workload Integration

`level9-external-workloads.yaml` shows how to integrate with external systems and cloud services.

Key features:
- Access to corporate datacenter
- Cloud VPC integration
- Cloud metadata service access

Requirements:
- Hybrid cloud network configuration
- Pods labeled with `app: data-processor`
- Proper routing to external networks

## Level 10: Zero-Trust Model

`level10-zero-trust-microservice.yaml` implements a zero-trust security model for microservices.

Key features:
- Strict frontend-to-backend communication
- Redis service access control
- Internal services domain restrictions

Requirements:
- Pods labeled with appropriate tier labels
- Production namespace labeled with `env: prod`
- DNS configuration for internal services

## Level 11: Cluster Federation Control

`level11-cluster-aware.yaml` manages cross-cluster communication patterns.

Key features:
- Region-aware access control
- Cross-cluster database access
- Uses topology labels

Requirements:
- Multi-cluster Kubernetes setup
- Proper topology labels configured
- Cross-cluster networking enabled

## Level 12: Time-Based Security

`level12-temporal-rules.yaml` implements time-based access restrictions.

Key features:
- Business hours access control
- Requires time-aware CNI plugin
- Team-based access restrictions

Requirements:
- Cilium CNI with time-based policy support
- External time source configured
- Namespace labeled with `team: human-resources`

## Level 13: Identity-Based Access

`level13-service-account.yaml` demonstrates service account-based access control.

Key features:
- Service account authentication
- Vault authentication system integration
- System namespace access control

Requirements:
- Properly configured service accounts
- Vault server deployment with label `k8s-app: vault-auth`
- RBAC policies for service accounts

## Level 14: Lifecycle-Aware Policies

`level14-pod-lifecycle.yaml` shows how to implement pod lifecycle-aware network policies.

Key features:
- Pod phase-specific restrictions
- Cloud metadata service access
- Initialization phase controls

Requirements:
- CNI with pod lifecycle awareness
- Pods labeled with `state: ephemeral`
- Cloud provider metadata service accessible

## Level 15: AI Workload Security

`level15-ai-workloads.yaml` implements security controls for AI/ML workloads.

Key features:
- GPU workload network isolation
- ML service endpoint access
- Jupyter/TensorBoard port controls

Requirements:
- GPU-enabled Kubernetes nodes
- Pods labeled with `workload-type: gpu`
- ML platform endpoints properly configured

## Usage

To apply any of these network policies:

`kubectl apply -f level<N>-<policy-name>.yaml`

Replace `<N>` with the level number and `<policy-name>` with the specific policy file name.

## Prerequisites

- Kubernetes cluster with network policy support (e.g., Calico, Cilium)
- kubectl configured to access your cluster
- Appropriate RBAC permissions

## Notes

- Test policies in a non-production environment first
- Some features may require specific CNI plugins
- Always follow the principle of least privilege
- Consider using multiple policies in combination for defense in depth
