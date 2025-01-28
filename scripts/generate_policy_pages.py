#!/usr/bin/env python3
import os
import re
import yaml

def extract_title(content):
    # Extract title from YAML comments
    first_line = content.split('\n')[0]
    if first_line.startswith('#'):
        return first_line.lstrip('# ').strip()
    return None

def create_markdown_file(yaml_file, output_dir):
    with open(yaml_file, 'r') as f:
        content = f.read()
    
    # Extract level number and name
    base_name = os.path.basename(yaml_file)
    level_num = re.search(r'level(\d+)', base_name).group(1)
    name_part = base_name.replace('.yaml', '').split('-', 1)[1]
    title = extract_title(content) or f"Level {level_num} - {name_part.replace('-', ' ').title()}"
    
    # Create markdown content
    markdown_content = f"""---
title: {title}
yaml_file: /policies/{os.path.basename(yaml_file)}
level: {level_num}
---

{extract_title(content) or title}

## Policy Description

This network policy implements {name_part.replace('-', ' ')} rules in Kubernetes.

## Key Points

{generate_key_points(content)}

## Usage

Apply this policy using:
```bash
kubectl apply -f {os.path.basename(yaml_file)}
```

## Policy Details

The policy is defined in YAML and can be found [here](/policies/{os.path.basename(yaml_file)}).
"""
    
    # Write markdown file
    output_file = os.path.join(output_dir, f"{os.path.basename(yaml_file).replace('.yaml', '.md')}")
    with open(output_file, 'w') as f:
        f.write(markdown_content)

def generate_key_points(content):
    # Parse YAML to extract key information
    try:
        policy = yaml.safe_load(content)
        points = []
        
        if 'spec' in policy:
            spec = policy['spec']
            if 'podSelector' in spec:
                points.append("- Targets specific pods using pod selector")
            if 'ingress' in spec:
                points.append("- Defines ingress traffic rules")
            if 'egress' in spec:
                points.append("- Defines egress traffic rules")
            if 'policyTypes' in spec:
                points.append(f"- Policy types: {', '.join(spec['policyTypes'])}")
        
        return '\n'.join(points)
    except:
        return "- Implements specific network policy rules\n- Controls pod-to-pod communication"

def main():
    policies_dir = 'docs/policies'
    output_dir = 'docs/_policies'
    
    # Create output directory if it doesn't exist
    os.makedirs(output_dir, exist_ok=True)
    
    # Process each YAML file
    for filename in os.listdir(policies_dir):
        if filename.endswith('.yaml'):
            yaml_file = os.path.join(policies_dir, filename)
            create_markdown_file(yaml_file, output_dir)

if __name__ == '__main__':
    main() 