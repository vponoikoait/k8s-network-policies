# Kubernetes Network Policies Guide

A comprehensive guide to implementing network policies in Kubernetes, with practical examples and detailed explanations.

**WARNING: This is a work in progress and most is at most AI generated. Contributions are welcome.**

## Prerequisites

### Runtime Requirements
- Kubernetes cluster (v1.20+)
- Network plugin that supports NetworkPolicies (e.g., [Calico](https://github.com/projectcalico/calico), [Cilium](https://github.com/cilium/cilium))
- `kubectl` command-line tool

### Development Requirements
- Git
- Python 3.7+ (for documentation generation)
- Ruby 3.1.6 (for documentation site)
- Docker (for local testing)
- Your favorite code editor 

## Documentation

Visit our [documentation site](https://vponoikoait.github.io/k8s-network-policies) for detailed information about each network policy.

For official Kubernetes network policy documentation, visit [Kubernetes Network Policies](https://kubernetes.io/docs/concepts/services-networking/network-policies/).

## Repository Structure

```
.
├── docs/                      # Documentation site
│   ├── _config.yml           # Jekyll configuration
│   ├── _includes/            # Jekyll includes
│   │   └── policies/         # YAML policy templates
│   ├── _layouts/             # Jekyll layouts
│   ├── _policies/            # Policy documentation
│   └── assets/               # Static assets
└── scripts/                  # Utility scripts
```

## Documentation Site Setup

This project uses Jekyll for documentation. To run the documentation site locally:

1. Install Ruby and Bundler
2. Generate policy documentation pages:
   ```bash
   python3 scripts/generate_policy_pages.py
   ```
   This will create Markdown files in `docs/_policies/` from the YAML templates.

3. Run the documentation site:
   ```bash
   cd docs
   bundle install
   bundle exec jekyll serve
   ```

## Quick Start

1. Clone this repository:
   ```bash
   git clone https://github.com/vponoikoait/k8s-network-policies.git
   cd k8s-network-policies
   ```

2. Apply a policy:
   ```bash
   kubectl apply -f docs/_includes/policies/level1-default-deny-all.yaml
   ```

3. Visit the [documentation](https://vponoikoait.github.io/k8s-network-policies) for detailed explanations and examples.

## Policy Progression

Our policies are organized in progressive levels, each building upon the previous ones:

- **Levels 1-3**: Basic Security Fundamentals
  - Default deny-all policies
  - Same namespace communication
  - Monitoring namespace access

- **Levels 4-6**: External Communication
  - External IP allowlisting
  - External egress control
  - Multi-protocol support

- **Levels 7-9**: Advanced Networking
  - Application layer policies
  - Stateful connections
  - External workload integration

- **Levels 10-12**: Enterprise Features
  - Zero Trust implementation
  - Cluster-aware policies
  - Temporal rules

- **Levels 13-15**: Special Use Cases
  - Service account-based policies
  - Pod lifecycle integration
  - AI workload optimization

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

## Testing Policies

To test policies locally:

1. Set up a test cluster (e.g., using minikube or kind):
   ```bash
   minikube start --cni=calico
   ```

2. Apply the policy you want to test:
   ```bash
   kubectl apply -f docs/_includes/policies/your-policy.yaml
   ```

3. Verify the policy:
   ```bash
   kubectl describe networkpolicy your-policy
   ```

## Troubleshooting

### Common Issues

1. **Policy Not Taking Effect**
   - Verify CNI plugin is running: `kubectl get pods -n kube-system`
   - Check policy syntax: `kubectl get networkpolicy <policy-name> -o yaml`
   - Ensure labels match your pods: `kubectl get pods --show-labels`

2. **Jekyll Build Issues**
   - Clear Jekyll cache: `bundle exec jekyll clean`
   - Update dependencies: `bundle update`
   - Check Ruby version matches requirement

3. **Policy Generation Issues**
   - Verify Python version: `python3 --version`
   - Check YAML syntax in templates
   - Run script with verbose output: `python3 scripts/generate_policy_pages.py -v`

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request. When contributing:

1. Follow the existing documentation structure
2. Test your network policies
3. Update relevant documentation
4. Add examples where appropriate

### Adding New Policies

To add a new policy:

1. Create a YAML template in `docs/_includes/policies/`
2. Add corresponding documentation in `docs/_policies/`
3. Run the documentation generator:
   ```bash
   python3 scripts/generate_policy_pages.py
   ```
4. Test your policy locally
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## CNI Setup Guides
- Calico: [Installation Guide](https://docs.tigera.io/calico/latest/getting-started/kubernetes/quickstart)
- Cilium: [Installation Guide](https://docs.cilium.io/en/stable/gettingstarted/k8s-install-default/)
- Antrea: [Installation Guide](https://antrea.io/docs/main/docs/getting-started/)
- Weave: [Installation Guide](https://www.weave.works/docs/net-next/latest/kubernetes/kube-addon/)
- Flannel: [Installation Guide](https://github.com/flannel-io/flannel)
- Kube-router: [Installation Guide](https://github.com/cloudnativelabs/kube-router)
- Romana: [Installation Guide](https://github.com/romana/romana)