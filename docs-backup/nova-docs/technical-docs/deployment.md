---
title: "Deployment Configuration"
description: "Comprehensive guide to deploying Supernova using Docker and Kubernetes, including production deployment best practices."
---

# Supernova Deployment Configuration

This document outlines the deployment options for Supernova, focusing on containerized deployments using Docker and orchestration with Kubernetes.

## Docker Deployment

Supernova provides official Docker images for all its components, enabling easy deployment across various environments.

### Available Docker Images

| Image                            | Description                                               | Tags                      |
|----------------------------------|-----------------------------------------------------------|---------------------------|
| `supernova/node`                 | Full Supernova blockchain node                           | `latest`, `v1.0`, `stable` |
| `supernova/miner`                | Optimized mining container                               | `latest`, `v1.0`, `gpu`   |
| `supernova/wallet`               | Wallet service with API                                  | `latest`, `v1.0`          |
| `supernova/lightning`            | Lightning Network node                                   | `latest`, `v1.0`          |
| `supernova/explorer`             | Block explorer web interface                             | `latest`, `v1.0`          |
| `supernova/metrics`              | Prometheus metrics collector                             | `latest`, `v1.0`          |
| `supernova/env-dashboard`        | Environmental impact dashboard                           | `latest`, `v1.0`          |

### Basic Node Deployment

```bash
# Pull the latest node image
docker pull supernova/node:latest

# Run a node with default configuration
docker run -d --name supernova-node \
  -p 9000:9000 -p 9001:9001 \
  -v supernova-data:/data \
  supernova/node:latest

# Check node status
docker logs supernova-node
```

### Custom Configuration

You can provide a custom configuration file when launching the container:

```bash
docker run -d --name supernova-node \
  -p 9000:9000 -p 9001:9001 \
  -v supernova-data:/data \
  -v /path/to/your/config.toml:/etc/supernova/config.toml \
  supernova/node:latest
```

### Using Docker Compose

A sample `docker-compose.yml` file for a complete Supernova setup:

```yaml
version: '3.8'

services:
  node:
    image: supernova/node:latest
    container_name: supernova-node
    volumes:
      - node-data:/data
      - ./config/node.toml:/etc/supernova/config.toml
    ports:
      - "9000:9000"
      - "9001:9001"
    restart: unless-stopped
    networks:
      - supernova-network
      
  wallet:
    image: supernova/wallet:latest
    container_name: supernova-wallet
    volumes:
      - wallet-data:/data
      - ./config/wallet.toml:/etc/supernova/wallet.toml
    ports:
      - "9010:9010"
    depends_on:
      - node
    restart: unless-stopped
    networks:
      - supernova-network
      
  lightning:
    image: supernova/lightning:latest
    container_name: supernova-lightning
    volumes:
      - lightning-data:/data
      - ./config/lightning.toml:/etc/supernova/lightning.toml
    ports:
      - "9020:9020"
    depends_on:
      - node
      - wallet
    restart: unless-stopped
    networks:
      - supernova-network
      
  explorer:
    image: supernova/explorer:latest
    container_name: supernova-explorer
    ports:
      - "8080:8080"
    depends_on:
      - node
    restart: unless-stopped
    networks:
      - supernova-network
      
  metrics:
    image: supernova/metrics:latest
    container_name: supernova-metrics
    volumes:
      - metrics-data:/data
    ports:
      - "9090:9090"
    depends_on:
      - node
    restart: unless-stopped
    networks:
      - supernova-network
      
  env-dashboard:
    image: supernova/env-dashboard:latest
    container_name: supernova-env-dashboard
    volumes:
      - env-data:/data
    ports:
      - "8090:8090"
    depends_on:
      - metrics
    restart: unless-stopped
    networks:
      - supernova-network

volumes:
  node-data:
  wallet-data:
  lightning-data:
  metrics-data:
  env-data:

networks:
  supernova-network:
    driver: bridge
```

## Kubernetes Deployment

For production deployments and scalable infrastructure, Supernova provides Kubernetes configurations for all components.

### Prerequisites

- Kubernetes cluster (v1.20+)
- Helm (v3.5+)
- kubectl configured to access your cluster

### Using Helm Charts

Supernova provides official Helm charts for easy deployment:

```bash
# Add Supernova Helm repository
helm repo add supernova https://charts.supernovanetwork.xyz
helm repo update

# Install Supernova node with default settings
helm install supernova-node supernova/node

# Install complete Supernova stack
helm install supernova supernova/supernova-stack
```

### Customizing Helm Deployment

You can customize the deployment by providing a values file:

```bash
helm install supernova-node supernova/node -f values.yaml
```

Example `values.yaml` for a production node:

```yaml
replicaCount: 3

resources:
  requests:
    cpu: 2
    memory: 4Gi
  limits:
    cpu: 4
    memory: 8Gi

persistence:
  size: 100Gi
  storageClass: "ssd"

config:
  network: "mainnet"
  p2p:
    maxPeers: 100
  rpc:
    enabled: true
    authRequired: true
  metrics:
    enabled: true
    prometheus: true

security:
  apiKey: "generated-secure-key"

nodeSelector:
  kubernetes.io/os: linux
  environment: production
```

### Highly Available Setup

For production environments, we recommend deploying Supernova with high availability:

```yaml
# High Availability configuration
replicaCount: 5

affinity:
  podAntiAffinity:
    requiredDuringSchedulingIgnoredDuringExecution:
      - labelSelector:
          matchExpressions:
            - key: app.kubernetes.io/name
              operator: In
              values:
                - supernova-node
        topologyKey: "kubernetes.io/hostname"

autoscaling:
  enabled: true
  minReplicas: 3
  maxReplicas: 10
  targetCPUUtilizationPercentage: 80
  targetMemoryUtilizationPercentage: 80

persistence:
  enabled: true
  storageClass: "ssd-redundant"
  size: 500Gi
```

### Kubernetes Production Best Practices

1. **Resource Management**:
   - Always set resource requests and limits
   - Monitor resource usage and adjust as needed

2. **Data Persistence**:
   - Use persistent volumes with backup capabilities
   - Implement snapshot policies for data protection

3. **Security**:
   - Enable network policies to restrict traffic
   - Use Kubernetes secrets for sensitive information
   - Implement Pod Security Policies

4. **Monitoring**:
   - Deploy Prometheus and Grafana alongside Supernova
   - Use Supernova's built-in metrics exporters
   - Set up alerts for critical conditions

5. **Scaling**:
   - Implement Horizontal Pod Autoscaling
   - Consider Vertical Pod Autoscaling for efficiency
   - Scale database components carefully

6. **Updates**:
   - Use rolling updates for zero-downtime deployments
   - Consider blue/green deployments for major version changes
   - Test updates in staging environment first

## Performance Tuning

Optimize your Supernova deployment with these performance tuning recommendations:

### Resource Allocation

| Component | CPU Recommendation | Memory Recommendation | Disk Recommendation |
|-----------|--------------------|-----------------------|--------------------|
| Node      | 4+ cores           | 8+ GB                 | 500+ GB SSD        |
| Miner     | 8+ cores           | 16+ GB                | 100+ GB SSD        |
| Lightning | 2+ cores           | 4+ GB                 | 100+ GB SSD        |
| Explorer  | 2+ cores           | 4+ GB                 | 200+ GB SSD        |

### Network Optimization

For nodes handling high transaction volumes:

```yaml
config:
  p2p:
    maxPeers: 150
    outboundPeers: 32
    inboundPeers: 128
    pingInterval: 30
    syncConcurrency: 8
  mempool:
    maxSizeMB: 500
    maxOrphanTxs: 1000
  db:
    cacheSize: "2GB"
    syncMode: "fast"
```

## Disaster Recovery

Implement these disaster recovery strategies for production deployments:

1. **Regular Backups**:
   ```bash
   # Create a snapshot of blockchain data
   kubectl exec supernova-node-0 -- /usr/local/bin/supernova backup create --output /data/backups/
   
   # Export to persistent storage
   kubectl cp supernova-node-0:/data/backups/ ./backups/
   ```

2. **Automated Backup Job**:
   ```yaml
   apiVersion: batch/v1
   kind: CronJob
   metadata:
     name: supernova-backup
   spec:
     schedule: "0 2 * * *"  # Daily at 2 AM
     jobTemplate:
       spec:
         template:
           spec:
             containers:
             - name: backup
               image: supernova/node:latest
               command: ["/bin/sh", "-c"]
               args:
               - |
                 /usr/local/bin/supernova backup create --output /backups/$(date +%Y%m%d)/
               volumeMounts:
               - name: data
                 mountPath: /data
               - name: backups
                 mountPath: /backups
             restartPolicy: OnFailure
             volumes:
             - name: data
               persistentVolumeClaim:
                 claimName: supernova-node-data
             - name: backups
               persistentVolumeClaim:
                 claimName: supernova-backups
   ```

3. **Recovery Plan**:
   - Document recovery procedures
   - Regularly test recovery process
   - Maintain geographically distributed backups

## Integration with CI/CD

Automate deployments with CI/CD pipelines:

1. **GitHub Actions Example**:
   ```yaml
   name: Deploy Supernova

   on:
     push:
       branches: [main]
       tags: ['v*']

   jobs:
     deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v2
         
         - name: Set up Kubernetes tools
           uses: azure/setup-kubectl@v1
           
         - name: Set up Helm
           uses: azure/setup-helm@v1
           
         - name: Login to Kubernetes
           uses: azure/k8s-set-context@v1
           with:
             kubeconfig: ${{ secrets.KUBE_CONFIG }}
             
         - name: Deploy to development
           if: github.ref == 'refs/heads/main'
           run: |
             helm upgrade --install supernova-dev ./helm/supernova \
               --namespace supernova-dev \
               --values ./helm/environments/dev-values.yaml
               
         - name: Deploy to production
           if: startsWith(github.ref, 'refs/tags/v')
           run: |
             helm upgrade --install supernova-prod ./helm/supernova \
               --namespace supernova-prod \
               --values ./helm/environments/prod-values.yaml
   ```

## Conclusion

The Supernova deployment architecture provides flexible, scalable options for running nodes and services. Whether you're running a single-node testnet or a production-grade cluster, the containerized approach ensures consistent deployments across environments.

For more detailed information, refer to the following resources:
- [Supernova Docker Hub](https://hub.docker.com/u/supernova)
- [Supernova Helm Charts Repository](https://github.com/mjohnson518/supernova-charts)
- [Example Configurations](https://github.com/mjohnson518/supernova/tree/main/config) 