# Kubernetes Network Policies Guide

A comprehensive guide to implementing network policies in Kubernetes, with practical examples and detailed explanations.

NOTE: This is a work in progress and most is at most AI generated. Contributions are welcome.

## Documentation

Visit our [documentation site](https://YOUR_USERNAME.github.io/k8s-network-policies) for detailed information about each network policy.

## Repository Structure

```
.
├── docs/                      # Documentation site
│   ├── _config.yml           # Jekyll configuration
│   ├── _includes/            # Jekyll includes
│   ├── _layouts/             # Jekyll layouts
│   ├── _policies/            # Policy documentation
│   ├── _sass/                # Custom styles
│   ├── assets/               # Static assets
│   └── policies/             # YAML policy files
└── scripts/                  # Utility scripts
```

## Quick Start

1. Clone this repository:
   ```bash
   git clone https://github.com/YOUR_USERNAME/k8s-network-policies.git
   cd k8s-network-policies
   ```

2. Apply a policy:
   ```bash
   kubectl apply -f docs/policies/level1-default-deny-all.yaml
   ```

3. Visit the [documentation](https://YOUR_USERNAME.github.io/k8s-network-policies) for detailed explanations and examples.

## Available Policies

1. Level 1 - Default Deny All
2. Level 2 - Allow Same Namespace
3. Level 3 - Allow Monitoring Namespace
4. Level 4 - Allow External IPs
5. Level 5 - Allow External Egress
6. Level 6 - Multi Protocol
7. Level 7 - Application Layer
8. Level 8 - Stateful Connections
9. Level 9 - External Workloads
10. Level 10 - Zero Trust
11. Level 11 - Cluster Aware
12. Level 12 - Temporal Rules
13. Level 13 - Service Account
14. Level 14 - Pod Lifecycle
15. Level 15 - AI Workloads

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
