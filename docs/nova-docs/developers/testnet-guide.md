# SuperNova Testnet: Complete Testing Guide

This comprehensive guide provides detailed instructions for testing the SuperNova blockchain on the testnet environment. Follow these steps to build, deploy, and interact with the testnet for development and validation purposes.

## Table of Contents

- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Quick Start](#quick-start)
- [Detailed Setup Instructions](#detailed-setup-instructions)
  - [Environment Preparation](#environment-preparation)
  - [Building the Docker Image](#building-the-docker-image)
  - [Deploying the Testnet](#deploying-the-testnet)
  - [Verifying Deployment](#verifying-deployment)
- [Wallet Operations](#wallet-operations)
  - [Creating Wallets](#creating-wallets)
  - [Obtaining Test Tokens](#obtaining-test-tokens)
  - [Checking Balances](#checking-balances)
- [Testing Transactions](#testing-transactions)
  - [Basic Transfer](#basic-transfer)
  - [Tracking Transactions](#tracking-transactions)
  - [Advanced Transaction Options](#advanced-transaction-options)
- [Lightning Network Testing](#lightning-network-testing)
  - [Opening Channels](#opening-channels)
  - [Creating and Paying Invoices](#creating-and-paying-invoices)
  - [Managing Channels](#managing-channels)
- [Explorer and Network Status](#explorer-and-network-status)
- [Advanced Testing](#advanced-testing)
  - [Performance Testing](#performance-testing)
  - [Stress Testing](#stress-testing)
  - [Node Statistics](#node-statistics)
  - [Environmental Metrics](#environmental-metrics)
- [Troubleshooting](#troubleshooting)
- [Testnet Reset Procedure](#testnet-reset-procedure)
- [Getting Help](#getting-help)

## Overview

The SuperNova testnet provides a sandbox environment for testing and development without using real tokens or affecting the main network. The testnet is functionally identical to the mainnet but operates with test tokens (tSNOVA) that have no real-world value. This allows developers to experiment freely with application development, transaction testing, and node operation.

## Prerequisites

Before beginning, ensure you have the following installed:

- Docker Engine v20.10 or newer
- Docker Compose v2.0 or newer
- Git
- 16GB RAM minimum (32GB recommended)
- 100GB free disk space
- Open ports: 8545 (RPC), 8080 (Faucet), 26656-26657 (P2P/Tendermint)

## Quick Start

For those who want to get up and running quickly:

```bash
# Clone repository
git clone https://github.com/mjohnson518/supernova.git
cd supernova

# Build the Docker image
docker build -t supernova:latest -f docker/Dockerfile .

# Deploy testnet environment
cd deployments/testnet
docker-compose up -d

# Create a wallet
docker exec -it supernova-seed-1 supernova wallet create --network testnet

# Request tokens from faucet (visit website)
# https://testnet.supernovanetwork.xyz

# Test a transaction
docker exec -it supernova-seed-1 supernova wallet send --address RECIPIENT_ADDRESS --amount 10 --fee 0.001
```

## Detailed Setup Instructions

### Environment Preparation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/mjohnson518/supernova.git
   cd supernova
   ```

2. **Check Configuration (Optional)**

   Review the testnet configuration files:

   ```bash
   cat deployments/testnet/docker-compose.yml
   cat deployments/testnet/config/genesis.json
   ```

### Building the Docker Image

1. **Build the SuperNova Image**

   ```bash
   docker build -t supernova:latest -f docker/Dockerfile .
   ```

   This process compiles the SuperNova blockchain code and creates a Docker image with all necessary dependencies.

2. **Verify the Image**

   ```bash
   docker images | grep supernova
   ```

### Deploying the Testnet

1. **Navigate to the Testnet Directory**

   ```bash
   cd deployments/testnet
   ```

2. **Start the Testnet Environment**

   ```bash
   docker-compose up -d
   ```

   This command launches:
   - Seed nodes (initial validators)
   - Regular nodes
   - An RPC server
   - Testnet explorer
   - Faucet service

3. **Check for Additional Services (Optional)**

   ```bash
   # Verify all services are running
   docker-compose ps
   ```

### Verifying Deployment

1. **Check Container Status**

   ```bash
   docker-compose ps
   ```

   All containers should show a status of "Up".

2. **View Node Logs**

   ```bash
   # View logs for the seed node
   docker-compose logs -f supernova-seed-1
   
   # View logs for a specific component
   docker-compose logs -f supernova-rpc
   ```

3. **Verify Network Connectivity**

   ```bash
   # Check if nodes are communicating
   docker exec -it supernova-seed-1 supernova node peers
   ```

4. **Verify Block Production**

   ```bash
   # Check if blocks are being created
   docker exec -it supernova-seed-1 supernova blockchain info
   ```

## Wallet Operations

### Creating Wallets

1. **Create Your First Wallet**

   ```bash
   docker exec -it supernova-seed-1 supernova wallet create --network testnet
   ```

   You'll receive output containing:
   - Wallet address
   - Recovery phrase (mnemonic)
   - Public key

   **IMPORTANT:** Save the recovery phrase securely!

2. **Create Additional Wallets (Optional)**

   ```bash
   docker exec -it supernova-seed-1 supernova wallet create --network testnet --name test_wallet_2
   ```

3. **List Your Wallets**

   ```bash
   docker exec -it supernova-seed-1 supernova wallet list
   ```

### Obtaining Test Tokens

1. **Request Tokens from Faucet**

   Visit the testnet faucet at [https://testnet.supernovanetwork.xyz](https://testnet.supernovanetwork.xyz) and:
   - Enter your wallet address
   - Complete the verification
   - Submit your request

   Alternatively, use the command line:

   ```bash
   curl -X POST -H "Content-Type: application/json" \
     -d '{"address":"YOUR_WALLET_ADDRESS","amount":100}' \
     https://testnet.supernovanetwork.xyz/api/faucet/send
   ```

2. **Verify Token Receipt**

   ```bash
   docker exec -it supernova-seed-1 supernova wallet balance --address YOUR_ADDRESS
   ```

   It may take a few moments for tokens to arrive.

### Checking Balances

```bash
# Check by wallet name (if you created with --name)
docker exec -it supernova-seed-1 supernova wallet balance --name main

# Check by address
docker exec -it supernova-seed-1 supernova wallet balance --address YOUR_ADDRESS
```

## Testing Transactions

### Basic Transfer

1. **Send a Simple Transaction**

   ```bash
   docker exec -it supernova-seed-1 supernova wallet send \
     --address RECIPIENT_ADDRESS \
     --amount 10 \
     --fee 0.001
   ```

   The command returns a transaction ID (txid) that can be used to track the transaction.

2. **Verify Transaction Success**

   ```bash
   # Check sender balance
   docker exec -it supernova-seed-1 supernova wallet balance --address SENDER_ADDRESS

   # Check recipient balance
   docker exec -it supernova-seed-1 supernova wallet balance --address RECIPIENT_ADDRESS
   ```

### Tracking Transactions

1. **Check Transaction Status**

   ```bash
   docker exec -it supernova-seed-1 supernova tx info --txid YOUR_TRANSACTION_ID
   ```

2. **View Transaction in Explorer**

   Visit [https://explorer.testnet.supernovanetwork.xyz](https://explorer.testnet.supernovanetwork.xyz) and search for your transaction ID.

### Advanced Transaction Options

1. **Send with Memo**

   ```bash
   docker exec -it supernova-seed-1 supernova wallet send \
     --address RECIPIENT_ADDRESS \
     --amount 5 \
     --fee 0.001 \
     --memo "Test payment"
   ```

2. **Multiple Outputs**

   ```bash
   docker exec -it supernova-seed-1 supernova wallet send-many \
     --outputs "ADDRESS1:5,ADDRESS2:10,ADDRESS3:15" \
     --fee 0.002
   ```

3. **Custom Fee Level**

   ```bash
   # Low priority
   docker exec -it supernova-seed-1 supernova wallet send \
     --address RECIPIENT_ADDRESS \
     --amount 1 \
     --fee-rate low

   # High priority
   docker exec -it supernova-seed-1 supernova wallet send \
     --address RECIPIENT_ADDRESS \
     --amount 1 \
     --fee-rate high
   ```

## Lightning Network Testing

### Opening Channels

1. **Open a Lightning Channel**

   ```bash
   docker exec -it supernova-seed-1 supernova wallet lightning open-channel \
     --node NODE_ID \
     --capacity 0.01 \
     --push 0.005
   ```

2. **List Open Channels**

   ```bash
   docker exec -it supernova-seed-1 supernova wallet lightning list-channels
   ```

### Creating and Paying Invoices

1. **Create an Invoice**

   ```bash
   docker exec -it supernova-seed-1 supernova wallet lightning create-invoice \
     --amount 0.001 \
     --description "Test payment"
   ```

2. **Pay an Invoice**

   ```bash
   docker exec -it supernova-seed-1 supernova wallet lightning pay-invoice \
     --invoice INVOICE_STRING
   ```

### Managing Channels

1. **Get Channel Details**

   ```bash
   docker exec -it supernova-seed-1 supernova wallet lightning channel-info \
     --channel-id CHANNEL_ID
   ```

2. **Close a Channel**

   ```bash
   docker exec -it supernova-seed-1 supernova wallet lightning close-channel \
     --channel-id CHANNEL_ID
   ```

## Explorer and Network Status

Once your DNS configuration is complete and subdomains are properly propagated:

1. **Block Explorer**

   Visit [https://explorer.testnet.supernovanetwork.xyz](https://explorer.testnet.supernovanetwork.xyz) to:
   - View recent blocks
   - Search for transactions
   - Check addresses and balances
   - View network statistics

2. **Network Status**

   Visit [https://status.testnet.supernovanetwork.xyz](https://status.testnet.supernovanetwork.xyz) to monitor:
   - Network uptime
   - Node distribution
   - Transaction throughput
   - Environmental metrics

## Advanced Testing

### Performance Testing

1. **Transaction Throughput**

   ```bash
   # Generate load with 100 transactions
   docker exec -it supernova-seed-1 supernova benchmark tx-throughput \
     --count 100 \
     --from YOUR_ADDRESS
   ```

2. **Response Time**

   ```bash
   # Measure RPC response time
   docker exec -it supernova-seed-1 supernova benchmark rpc-latency
   ```

### Stress Testing

1. **Mempool Capacity**

   ```bash
   # Fill mempool with transactions
   docker exec -it supernova-seed-1 supernova benchmark fill-mempool \
     --from YOUR_ADDRESS \
     --tx-count 1000
   ```

2. **Node Recovery**

   ```bash
   # Restart a node and measure sync time
   docker-compose restart supernova-node-1
   docker exec -it supernova-node-1 supernova benchmark sync-time
   ```

### Node Statistics

```bash
# Get comprehensive node stats
docker exec -it supernova-seed-1 supernova node stats

# Get peer information
docker exec -it supernova-seed-1 supernova node peers

# Check memory pool
docker exec -it supernova-seed-1 supernova node mempool
```

### Environmental Metrics

1. **View Network Emissions**

   ```bash
   docker exec -it supernova-seed-1 supernova node env-metrics
   ```

2. **Transaction Carbon Footprint**

   ```bash
   docker exec -it supernova-seed-1 supernova node tx-emissions --txid YOUR_TRANSACTION_ID
   ```

3. **Mining Pool Energy Sources**

   ```bash
   docker exec -it supernova-seed-1 supernova node pool-energy
   ```

4. **Lightning Network Emissions Savings**

   ```bash
   docker exec -it supernova-seed-1 supernova node lightning-emissions-report
   ```

## Troubleshooting

### Common Issues and Solutions

1. **Nodes Not Connecting**

   ```bash
   # Check node status
   docker exec -it supernova-seed-1 supernova node status
   
   # Restart networking
   docker-compose restart supernova-seed-1
   ```

2. **Transactions Not Confirming**

   ```bash
   # Check mempool status
   docker exec -it supernova-seed-1 supernova node mempool
   
   # Try resending with higher fee
   docker exec -it supernova-seed-1 supernova wallet send \
     --address RECIPIENT_ADDRESS \
     --amount 1 \
     --fee 0.01
   ```

3. **Node Not Syncing**

   ```bash
   # Check sync status
   docker exec -it supernova-seed-1 supernova blockchain status
   
   # Force resync
   docker-compose down
   docker volume rm testnet_blockchain_data
   docker-compose up -d
   ```

### Logs and Diagnostics

```bash
# Collect diagnostic information
docker exec -it supernova-seed-1 supernova diagnostics collect

# View detailed logs
docker-compose logs --tail=100 -f
```

## Testnet Reset Procedure

Occasionally, you may want to reset the testnet to a clean state:

```bash
# Stop all containers
docker-compose down

# Remove volumes to clear blockchain data
docker-compose down -v

# Restart from clean state
docker-compose up -d
```

## Getting Help

If you encounter issues while testing:

- **Documentation**: Visit [https://docs.supernovanetwork.xyz](https://docs.supernovanetwork.xyz)
- **Discord Community**: Join our [developer channel](https://discord.gg/supernova-dev)
- **GitHub Issues**: Submit bugs at [https://github.com/mjohnson518/supernova/issues](https://github.com/mjohnson518/supernova/issues)
- **Contact Support**: Email [testnet-support@supernovanetwork.xyz](mailto:testnet-support@supernovanetwork.xyz)

---

By following this guide, you should now have a fully operational SuperNova testnet environment for development and testing. The testnet allows you to experiment with all features of the SuperNova blockchain in a safe environment before deploying to mainnet. 