# Node Operation

This section provides documentation for running and maintaining Supernova blockchain nodes.

## Contents

- [Deployment Guide](deployment-guide.md) - How to deploy a Supernova node
- [Disaster Recovery](disaster-recovery.md) - Procedures for recovering from failures

## Node Types

Supernova supports several types of nodes:

1. **Validator Nodes** - Participate in consensus and block production
2. **Full Nodes** - Maintain a complete copy of the blockchain
3. **Light Nodes** - Connect to the network with minimal resource requirements
4. **Archive Nodes** - Store the complete history of the blockchain

## Hardware Requirements

The requirements vary by node type, but generally include:

| Node Type | CPU | RAM | Storage | Network |
|-----------|-----|-----|---------|---------|
| Validator | 8+ cores | 16+ GB | 500+ GB SSD | 100+ Mbps |
| Full Node | 4+ cores | 8+ GB | 500+ GB SSD | 50+ Mbps |
| Light Node | 2+ cores | 4+ GB | 100+ GB SSD | 10+ Mbps |
| Archive Node | 16+ cores | 32+ GB | 2+ TB SSD | 100+ Mbps |

Consult the deployment guide for detailed requirements and configuration options. 