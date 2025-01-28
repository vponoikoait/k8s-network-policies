// Network Policy Diagram Implementation
class NetworkPolicyDiagram {
  constructor(containerId, policy) {
    this.container = d3.select(containerId);
    this.policy = policy;
    this.width = 800;
    this.height = 600;
    this.nodes = [];
    this.links = [];
    
    // Initialize SVG
    this.svg = this.container
      .append('svg')
      .attr('width', this.width)
      .attr('height', this.height);
    
    // Create groups for links and nodes
    this.linksGroup = this.svg.append('g');
    this.nodesGroup = this.svg.append('g');
    
    // Add zoom behavior
    this.svg.call(d3.zoom()
      .extent([[0, 0], [this.width, this.height]])
      .scaleExtent([0.1, 4])
      .on('zoom', (event) => {
        this.linksGroup.attr('transform', event.transform);
        this.nodesGroup.attr('transform', event.transform);
      }));
      
    // Initialize force simulation
    this.simulation = d3.forceSimulation()
      .force('link', d3.forceLink().id(d => d.id))
      .force('charge', d3.forceManyBody().strength(-300))
      .force('center', d3.forceCenter(this.width / 2, this.height / 2));
  }

  // Add Kubernetes resource
  addResource(type, name, namespace) {
    const node = {
      id: `${namespace}/${name}`,
      type: type,
      name: name,
      namespace: namespace
    };
    this.nodes.push(node);
    return node;
  }

  // Check if connection is allowed by policy
  isConnectionAllowed(source, target) {
    return this.policy.allows(source, target);
  }

  // Draw the diagram
  render() {
    // Update links
    const link = this.linksGroup
      .selectAll('line')
      .data(this.links, d => `${d.source.id}-${d.target.id}`);
    
    // Remove old links
    link.exit().remove();
    
    // Add new links
    const linkEnter = link.enter()
      .append('line')
      .attr('stroke-width', 2)
      .attr('stroke', d => d.allowed ? '#4CAF50' : '#FF5252')
      .attr('class', d => d.allowed ? 'allowed' : 'blocked');
    
    // Update all links
    this.link = linkEnter.merge(link);

    // Update nodes
    const node = this.nodesGroup
      .selectAll('.node')
      .data(this.nodes, d => d.id);
    
    // Remove old nodes
    node.exit().remove();
    
    // Add new nodes
    const nodeEnter = node.enter()
      .append('g')
      .attr('class', 'node')
      .call(d3.drag()
        .on('start', (event, d) => this.dragstarted(event, d))
        .on('drag', (event, d) => this.dragged(event, d))
        .on('end', (event, d) => this.dragended(event, d)));

    // Add node background/border
    nodeEnter.append('rect')
      .attr('width', 80)
      .attr('height', 80)
      .attr('x', -20)
      .attr('y', -10)
      .attr('rx', 8)
      .attr('ry', 8)
      .attr('class', 'node-bg');

    nodeEnter.append('image')
      .attr('xlink:href', d => this.getIconForType(d.type))
      .attr('width', 40)
      .attr('height', 40);

    nodeEnter.append('text')
      .attr('x', 20)
      .attr('y', 50)
      .text(d => d.name);

    // Update all nodes
    this.node = nodeEnter.merge(node);

    // Handle click events for connection testing
    let selectedNode = null;
    this.node.on('click', (event, d) => {
      if (!selectedNode) {
        selectedNode = d;
        d3.select(event.currentTarget).classed('selected', true);
      } else if (selectedNode !== d) {
        const allowed = this.isConnectionAllowed(selectedNode, d);
        this.showConnectionResult(selectedNode, d, allowed);
        selectedNode = null;
        this.nodesGroup.selectAll('.selected').classed('selected', false);
      }
    });

    // Update simulation
    this.simulation
      .nodes(this.nodes)
      .on('tick', () => {
        this.link
          .attr('x1', d => d.source.x)
          .attr('y1', d => d.source.y)
          .attr('x2', d => d.target.x)
          .attr('y2', d => d.target.y);

        this.node
          .attr('transform', d => `translate(${d.x - 20},${d.y - 20})`);
      });

    this.simulation.force('link')
      .links(this.links);
      
    // Reheat the simulation
    this.simulation.alpha(1).restart();
  }

  // Helper methods
  getIconForType(type) {
    const icons = {
      pod: 'https://raw.githubusercontent.com/kubernetes/community/master/icons/png/resources/labeled/pod-128.png',
      service: 'https://raw.githubusercontent.com/kubernetes/community/master/icons/png/resources/labeled/svc-128.png',
      deployment: 'https://raw.githubusercontent.com/kubernetes/community/master/icons/png/resources/labeled/deploy-128.png',
      internet: 'https://e7.pngegg.com/pngimages/882/225/png-clipart-google-logo-google-logo-google-search-icon-google-text-logo-thumbnail.png'
    };
    return icons[type] || icons.pod;
  }

  showConnectionResult(source, target, allowed) {
    // Remove any existing connection between these nodes
    this.links = this.links.filter(link => 
      !(link.source.id === source.id && link.target.id === target.id) &&
      !(link.source.id === target.id && link.target.id === source.id)
    );
    
    // Add the new connection
    this.links.push({
      source: source.id,
      target: target.id,
      allowed: allowed
    });
    
    this.render();
    
    // Show tooltip with result
    const tooltip = this.container.append('div')
      .attr('class', `tooltip ${allowed ? 'allowed' : 'blocked'}`)
      .html(`Connection from ${source.name} to ${target.name} is ${allowed ? 'allowed' : 'blocked'}`);
    
    setTimeout(() => tooltip.remove(), 3000);
  }

  // Drag handlers
  dragstarted(event, d) {
    if (!event.active) this.simulation.alphaTarget(0.3).restart();
    d.fx = d.x;
    d.fy = d.y;
  }

  dragged(event, d) {
    d.fx = event.x;
    d.fy = event.y;
  }

  dragended(event, d) {
    if (!event.active) this.simulation.alphaTarget(0);
    d.fx = null;
    d.fy = null;
  }
} 