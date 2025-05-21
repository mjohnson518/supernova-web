# Supernova Testnet: Complete Testing Guide

This guide provides detailed instructions for testing the Supernova blockchain on the testnet environment. Follow these steps to build, deploy, and interact with the testnet for development and validation purposes.

## Table of Contents

- [Overview](#overview)
- [Prerequisites](#prerequisites)
- [Simplified Docker Setup](#simplified-docker-setup)
- [Quick Start](#quick-start)
- [Detailed Setup Instructions](#detailed-setup-instructions)
  - [Environment Preparation](#environment-preparation)
  - [Building the Docker Image](#building-the-docker-image)
  - [Deploying the Testnet](#deploying-the-testnet)
  - [Verifying Deployment](#verifying-deployment)
  - [Node Startup with ASCII Art](#node-startup-with-ascii-art)
- [Wallet Operations](#wallet-operations)
  - [Creating Wallets](#creating-wallets)
  - [Obtaining Test Tokens](#obtaining-test-tokens)
  - [Checking Balances](#checking-balances)
  - [Quantum-Resistant Addresses](#quantum-resistant-addresses)
- [Testing Transactions](#testing-transactions)
  - [Basic Transfer](#basic-transfer)
  - [Tracking Transactions](#tracking-transactions)
  - [Advanced Transaction Options](#advanced-transaction-options)
  - [Quantum-Protected Transactions](#quantum-protected-transactions)
- [Lightning Network Testing](#lightning-network-testing)
  - [Opening Channels](#opening-channels)
  - [Creating and Paying Invoices](#creating-and-paying-invoices)
  - [Managing Channels](#managing-channels)
- [Environmental Impact Monitoring](#environmental-impact-monitoring)
  - [Green Mining Registration](#green-mining-registration)
  - [Environmental Reporting](#environmental-reporting)
  - [Fee Discounts for Green Mining](#fee-discounts-for-green-mining)
- [Security Feature Testing](#security-feature-testing)
  - [Network Security Metrics](#network-security-metrics)
  - [Peer Reputation System](#peer-reputation-system)
  - [Security Configuration](#security-configuration)
- [Disaster Recovery Testing](#disaster-recovery-testing)
  - [Creating Backups](#creating-backups)
  - [Integrity Verification](#integrity-verification)
  - [Restoring from Backup](#restoring-from-backup)
- [API Testing](#api-testing)
  - [RESTful API](#restful-api)
  - [JSON-RPC API](#json-rpc-api)
- [Explorer and Network Status](#explorer-and-network-status)
- [Advanced Testing](#advanced-testing)
  - [Performance Testing](#performance-testing)
  - [Stress Testing](#stress-testing)
  - [Node Statistics](#node-statistics)
- [Using Utility Scripts](#using-utility-scripts)
- [Known Issues and Fixes](#known-issues-and-fixes)
- [Troubleshooting](#troubleshooting)
- [Testnet Reset Procedure](#testnet-reset-procedure)
- [Getting Help](#getting-help)

<a id="overview"></a>

## Overview

The Supernova testnet provides a sandbox environment for testing and development without using real tokens or affecting the main network. The testnet is functionally identical to the mainnet but operates with test tokens (tSNOVA) that have no real-world value. This allows developers to experiment freely with application development, transaction testing, and node operation.

<a id="prerequisites"></a>

## Prerequisites

Before beginning, ensure you have the following installed:

- Docker Engine v20.10 or newer
- Docker Compose v2.0 or newer
- Git
- Rust toolchain (for building from source)
- 16GB RAM minimum (32GB recommended)
- 100GB free disk space
- Open ports: 8545 (RPC), 8080 (Faucet), 26656-26657 (P2P/Tendermint)

<a id="simplified-docker-setup"></a>

## Simplified Docker Setup

For the easiest and most reliable testnet deployment, use our new streamlined Docker setup:

```bash
# Clone the repository
git clone https://github.com/mjohnson518/supernova.git
cd supernova

# Make the Docker setup script executable
chmod +x docker_setup.sh

# Run the Docker setup script
./docker_setup.sh
```

This script automates the entire setup process by:
- Building the necessary Docker images
- Setting up the testnet configuration
- Launching all required services
- Creating a default wallet
- Funding it with test tokens

After running the script, your testnet will be fully operational and ready for testing. The script also generates a summary of available endpoints and credentials.

For more details on the Docker setup, refer to the [TESTNET_FIXES_UPDATED.md](https://github.com/mjohnson518/supernova/blob/main/TESTNET_FIXES_UPDATED.md) document.

<a id="quick-start"></a>

## Quick Start

For those who want to get up and running quickly with the standard approach:

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

<a id="detailed-setup-instructions"></a>

## Detailed Setup Instructions

<a id="environment-preparation"></a>

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
   cat deployments/testnet/README.md
   ```

3. **Apply Required Fixes**

   The repository includes fixes for common issues. Review these before proceeding:

   ```bash
   cat TESTNET_FIXES_UPDATED.md
   cat FINAL_SOLUTION.md
   ```

   These documents contain solutions to common deployment issues and optimizations for the testnet environment.

<a id="building-the-docker-image"></a>

### Building the Docker Image

1. **Build the Supernova Image**

   ```bash
   docker build -t supernova:latest -f docker/Dockerfile .
   ```

   This process compiles the Supernova blockchain code and creates a Docker image with all necessary dependencies.

2. **Verify the Image**

   ```bash
   docker images | grep supernova
   ```

   Alternatively, you can build from source:

   ```bash
   cargo build --release
   ```

<a id="deploying-the-testnet"></a>

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

<a id="verifying-deployment"></a>

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

5. **Verify Endpoint Connectivity**

   According to the `FINAL_SOLUTION.md` document, you should verify that all endpoints are accessible:

   ```bash
   # Check RPC endpoint
   curl -s http://localhost:8545 -X POST -H "Content-Type: application/json" \
     -d '{"jsonrpc":"2.0","method":"web3_clientVersion","params":[],"id":1}'

   # Check Faucet endpoint
   curl -s http://localhost:8080/health

   # Check Explorer endpoint
   curl -s http://localhost:8081/api/status
   ```

<a id="node-startup-with-ascii-art"></a>

### Node Startup with ASCII Art

Supernova includes ASCII art animations that can be displayed during node startup:

```bash
# Start node with ASCII animation
./run_node.sh --with-animation

# Or use the standalone banner tool
cargo run --bin supernova-banner -- static
cargo run --bin supernova-banner -- slide-in
cargo run --bin supernova-banner -- dissolve-out
cargo run --bin supernova-banner -- complete
cargo run --bin supernova-banner -- testnet
```

The different animation modes provide various visual effects:
- `static`: Display a static ASCII logo
- `slide-in`: Animate the logo sliding in from the left
- `dissolve-out`: Animate the logo dissolving away
- `complete`: Run a full animation sequence
- `testnet`: Show the testnet-specific animation

<a id="wallet-operations"></a>

## Wallet Operations

<a id="creating-wallets"></a>

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

4. **Import Existing Wallet**

   If you have an existing wallet mnemonic, you can import it:

   ```bash
   docker exec -it supernova-seed-1 supernova wallet import \
     --mnemonic "your twelve word mnemonic phrase here" \
     --name imported_wallet
   ```

<a id="obtaining-test-tokens"></a>

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

   When using the Docker setup method, your wallet is automatically funded with test tokens.

2. **Verify Token Receipt**

   ```bash
   docker exec -it supernova-seed-1 supernova wallet balance --address YOUR_ADDRESS
   ```

   It may take a few moments for tokens to arrive.

<a id="checking-balances"></a>

### Checking Balances

```bash
# Check by wallet name (if you created with --name)
docker exec -it supernova-seed-1 supernova wallet balance --name main

# Check by address
docker exec -it supernova-seed-1 supernova wallet balance --address YOUR_ADDRESS

# See detailed UTXO information
docker exec -it supernova-seed-1 supernova wallet list-utxos
```

<a id="quantum-resistant-addresses"></a>

### Quantum-Resistant Addresses

Supernova supports post-quantum cryptography for enhanced security:

```bash
# Generate a quantum-resistant address
docker exec -it supernova-seed-1 supernova wallet new-address --type quantum

# Generate with specific quantum algorithm
docker exec -it supernova-seed-1 supernova wallet new-address --type quantum --algorithm dilithium

# List all addresses including quantum-resistant ones
docker exec -it supernova-seed-1 supernova wallet list-addresses
```

<a id="testing-transactions"></a>

## Testing Transactions

<a id="basic-transfer"></a>

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

<a id="tracking-transactions"></a>

### Tracking Transactions

1. **Check Transaction Status**

   ```bash
   docker exec -it supernova-seed-1 supernova tx info --txid YOUR_TRANSACTION_ID
   ```

2. **View Transaction in Explorer**

   Visit [https://explorer.testnet.supernovanetwork.xyz](https://explorer.testnet.supernovanetwork.xyz) and search for your transaction ID.

   If using the local Docker setup, the explorer is available at `http://localhost:8081`.

3. **View Transaction History**

   ```bash
   docker exec -it supernova-seed-1 supernova wallet history
   ```

<a id="advanced-transaction-options"></a>

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

4. **Label Transactions**

   ```bash
   docker exec -it supernova-seed-1 supernova wallet label-tx \
     --txid YOUR_TRANSACTION_ID \
     --label "Test payment"
   ```

<a id="quantum-protected-transactions"></a>

### Quantum-Protected Transactions

Send transactions using quantum-resistant signatures:

```bash
# Send funds using quantum-resistant signatures
docker exec -it supernova-seed-1 supernova wallet send \
  --address RECIPIENT_ADDRESS \
  --amount 5 \
  --quantum-protected

# Specify quantum algorithm
docker exec -it supernova-seed-1 supernova wallet send \
  --address RECIPIENT_ADDRESS \
  --amount 5 \
  --quantum-protected \
  --algorithm dilithium
```

<a id="lightning-network-testing"></a>

## Lightning Network Testing

<a id="opening-channels"></a>

### Opening Channels

1. **Start Lightning Node**

   ```bash
   docker exec -it supernova-seed-1 supernova lightning start
   ```

2. **Create a New Channel**

   ```bash
   docker exec -it supernova-seed-1 supernova lightning open-channel \
     --peer NODE_ID@IP_ADDRESS:PORT \
     --local-amount 1000000 \
     --push-amount 200000
   ```

3. **List Open Channels**

   ```bash
   docker exec -it supernova-seed-1 supernova lightning list-channels
   ```

<a id="creating-and-paying-invoices"></a>

### Creating and Paying Invoices

1. **Create an Invoice**

   ```bash
   docker exec -it supernova-seed-1 supernova lightning create-invoice \
     --amount 50000 \
     --memo "Test Invoice"
   ```

2. **Pay an Invoice**

   ```bash
   docker exec -it supernova-seed-1 supernova lightning pay \
     --invoice LIGHTNING_INVOICE
   ```

3. **List Invoices**

   ```bash
   docker exec -it supernova-seed-1 supernova lightning list-invoices
   ```

<a id="managing-channels"></a>

### Managing Channels

1. **Close a Channel**

   ```bash
   docker exec -it supernova-seed-1 supernova lightning close-channel \
     --channel-id CHANNEL_ID
   ```

2. **Force Close (if needed)**

   ```bash
   docker exec -it supernova-seed-1 supernova lightning force-close-channel \
     --channel-id CHANNEL_ID
   ```

3. **Check Channel Status**

   ```bash
   docker exec -it supernova-seed-1 supernova lightning channel-info \
     --channel-id CHANNEL_ID
   ```

<a id="environmental-impact-monitoring"></a>

## Environmental Impact Monitoring

<a id="green-mining-registration"></a>

### Green Mining Registration

1. **Register as Green Miner**

   ```bash
   docker exec -it supernova-seed-1 supernova env register-green \
     --power-source solar \
     --percentage 100 \
     --location "San Francisco, CA" \
     --proof-url "https://example.com/solar-certificate.pdf"
   ```

   Available power sources: `solar`, `wind`, `hydro`, `geothermal`, `nuclear`, `carbon-offset`

2. **Verify Registration**

   ```bash
   docker exec -it supernova-seed-1 supernova env status
   ```

<a id="environmental-reporting"></a>

### Environmental Reporting

1. **Submit Monthly Report**

   ```bash
   docker exec -it supernova-seed-1 supernova env submit-report \
     --month 2023-06 \
     --kwh-consumed 120.5 \
     --kwh-offset 120.5 \
     --proof-url "https://example.com/june-energy-bill.pdf"
   ```

2. **View Environmental Impact**

   ```bash
   docker exec -it supernova-seed-1 supernova env impact-report
   ```

   This command displays:
   - Total estimated carbon offset
   - Energy efficiency rating
   - Comparison to network average

<a id="fee-discounts-for-green-mining"></a>

### Fee Discounts for Green Mining

Verified green miners receive transaction fee discounts:

```bash
# Check your current fee discount
docker exec -it supernova-seed-1 supernova env fee-discount

# Apply fee discount to a transaction
docker exec -it supernova-seed-1 supernova wallet send \
  --address RECIPIENT_ADDRESS \
  --amount 10 \
  --apply-green-discount
```

<a id="security-feature-testing"></a>

## Security Feature Testing

<a id="network-security-metrics"></a>

### Network Security Metrics

1. **View Security Status**

   ```bash
   docker exec -it supernova-seed-1 supernova security status
   ```

   This displays:
   - Network health score
   - Active security incidents
   - Threat assessment level
   - Recommended security settings

2. **Run Security Scan**

   ```bash
   docker exec -it supernova-seed-1 supernova security scan
   ```

<a id="peer-reputation-system"></a>

### Peer Reputation System

1. **Check Peer Reputation**

   ```bash
   docker exec -it supernova-seed-1 supernova security peer-reputation \
     --peer-id PEER_NODE_ID
   ```

2. **List Banned Peers**

   ```bash
   docker exec -it supernova-seed-1 supernova security list-banned
   ```

3. **Report Malicious Activity**

   ```bash
   docker exec -it supernova-seed-1 supernova security report-peer \
     --peer-id PEER_NODE_ID \
     --reason "Spamming transactions" \
     --evidence "Transaction logs at 2023-06-15T14:30:00Z"
   ```

<a id="security-configuration"></a>

### Security Configuration

1. **Update Security Settings**

   ```bash
   docker exec -it supernova-seed-1 supernova security config \
     --auto-ban true \
     --max-banned-peers 100 \
     --ban-threshold 50
   ```

2. **Enable Enhanced Security Mode**

   ```bash
   docker exec -it supernova-seed-1 supernova security enhanced-mode \
     --level high
   ```

   Security levels: `standard`, `enhanced`, `high`, `paranoid`

<a id="disaster-recovery-testing"></a>

## Disaster Recovery Testing

<a id="creating-backups"></a>

### Creating Backups

1. **Create Full Node Backup**

   ```bash
   docker exec -it supernova-seed-1 supernova backup create \
     --output /backups/full-node-backup.zip
   ```

2. **Create Wallet-Only Backup**

   ```bash
   docker exec -it supernova-seed-1 supernova wallet backup \
     --output /backups/wallet-backup.zip \
     --encrypt
   ```

3. **Schedule Automated Backups**

   ```bash
   docker exec -it supernova-seed-1 supernova backup schedule \
     --interval daily \
     --output-dir /backups/ \
     --retain 7
   ```

   Intervals: `hourly`, `daily`, `weekly`, `monthly`

<a id="integrity-verification"></a>

### Integrity Verification

1. **Verify Backup Integrity**

   ```bash
   docker exec -it supernova-seed-1 supernova backup verify \
     --input /backups/full-node-backup.zip
   ```

2. **Test Recovery Process**

   ```bash
   docker exec -it supernova-seed-1 supernova backup test-recovery \
     --input /backups/full-node-backup.zip \
     --target /tmp/recovery-test
   ```

<a id="restoring-from-backup"></a>

### Restoring from Backup

1. **Restore Full Node**

   ```bash
   docker exec -it supernova-seed-1 supernova backup restore \
     --input /backups/full-node-backup.zip \
     --force
   ```

2. **Restore Wallet Only**

   ```bash
   docker exec -it supernova-seed-1 supernova wallet restore \
     --input /backups/wallet-backup.zip
   ```

3. **Verify Restored Data**

   ```bash
   docker exec -it supernova-seed-1 supernova blockchain verify
   docker exec -it supernova-seed-1 supernova wallet verify
   ```

<a id="api-testing"></a>

## API Testing

<a id="restful-api"></a>

### RESTful API

1. **Test RESTful API Endpoints**

   ```bash
   # Get blockchain status
   curl http://localhost:8080/api/v1/status

   # Get block by height
   curl http://localhost:8080/api/v1/blocks/1000

   # Get transaction by ID
   curl http://localhost:8080/api/v1/transactions/TRANSACTION_ID
   ```

2. **Create Transaction via API**

   ```bash
   curl -X POST http://localhost:8080/api/v1/transactions \
     -H "Content-Type: application/json" \
     -d '{
       "from": "SENDER_ADDRESS",
       "to": "RECIPIENT_ADDRESS",
       "amount": 1.5,
       "fee": 0.001,
       "signature": "VALID_SIGNATURE"
     }'
   ```

<a id="json-rpc-api"></a>

### JSON-RPC API

1. **Test JSON-RPC API**

   ```bash
   # Get node info
   curl -X POST http://localhost:8545 \
     -H "Content-Type: application/json" \
     -d '{
       "jsonrpc": "2.0",
       "method": "supernova_getNodeInfo",
       "params": [],
       "id": 1
     }'

   # Get balance
   curl -X POST http://localhost:8545 \
     -H "Content-Type: application/json" \
     -d '{
       "jsonrpc": "2.0",
       "method": "supernova_getBalance",
       "params": ["ADDRESS"],
       "id": 1
     }'
   ```

2. **Create New Block (Validator Only)**

   ```bash
   curl -X POST http://localhost:8545 \
     -H "Content-Type: application/json" \
     -d '{
       "jsonrpc": "2.0",
       "method": "supernova_createBlock",
       "params": [],
       "id": 1
     }'
   ```

<a id="explorer-and-network-status"></a>

## Explorer and Network Status

1. **Access Testnet Explorer**

   Visit the explorer at:
   - Public URL: [https://explorer.testnet.supernovanetwork.xyz](https://explorer.testnet.supernovanetwork.xyz)
   - Local Docker: http://localhost:8081

   The explorer provides:
   - Real-time block information
   - Transaction history
   - Network statistics
   - Validator performance

2. **Check Network Status Dashboard**

   Visit the status page at:
   - Public URL: [https://status.testnet.supernovanetwork.xyz](https://status.testnet.supernovanetwork.xyz)
   - Local Docker: http://localhost:8082

   The status page shows:
   - Network uptime
   - Transaction throughput
   - Active validators
   - Error rates
   - Environmental impact metrics

<a id="advanced-testing"></a>

## Advanced Testing

<a id="performance-testing"></a>

### Performance Testing

1. **Run Benchmarks**

   ```bash
   docker exec -it supernova-seed-1 supernova benchmark all
   ```

   This runs comprehensive benchmarks for:
   - Transaction processing
   - Block validation
   - Consensus algorithms
   - Network communication

2. **Test Transaction Throughput**

   ```bash
   docker exec -it supernova-seed-1 supernova benchmark transactions \
     --count 10000 \
     --threads 4 \
     --size small
   ```

   Transaction sizes: `small`, `medium`, `large`

<a id="stress-testing"></a>

### Stress Testing

1. **Network Flood Test**

   ```bash
   docker exec -it supernova-seed-1 supernova test flood \
     --tx-per-second 1000 \
     --duration 300
   ```

2. **Validator Failover Test**

   ```bash
   docker exec -it supernova-seed-1 supernova test validator-failover \
     --validators 3 \
     --fail-count 1
   ```

3. **Network Partition Test**

   ```bash
   docker exec -it supernova-seed-1 supernova test network-partition
   ```

<a id="node-statistics"></a>

### Node Statistics

1. **View Detailed Stats**

   ```bash
   docker exec -it supernova-seed-1 supernova stats --detailed
   ```

2. **Export Performance Metrics**

   ```bash
   docker exec -it supernova-seed-1 supernova stats export \
     --format json \
     --output /tmp/node-stats.json
   ```

   Export formats: `json`, `csv`, `prometheus`

<a id="using-utility-scripts"></a>

## Using Utility Scripts

The testnet includes several utility scripts to simplify common tasks:

```bash
# Reset testnet environment
./scripts/reset_testnet.sh

# Generate test transactions
./scripts/generate_transactions.sh --count 100

# Monitor node performance
./scripts/monitor_performance.sh --interval 10
```

Additional scripts available:

1. **Network Visualization**

   ```bash
   ./scripts/visualize_network.sh --output network.html
   ```

2. **Quick Environment Setup**

   ```bash
   ./scripts/quick_setup.sh --nodes 3 --with-explorer
   ```

3. **Automated Testing**

   ```bash
   ./scripts/run_tests.sh --suite complete
   ```

<a id="known-issues-and-fixes"></a>

## Known Issues and Fixes

The testnet may encounter the following known issues. Here are the solutions:

1. **Docker Network Conflicts**

   **Issue**: Docker network conflicts with existing networks.
   
   **Solution**:
   ```bash
   docker network prune
   # Then modify the docker-compose.yml to use a different subnet:
   # networks:
   #   supernova_net:
   #     ipam:
   #       config:
   #         - subnet: 172.20.0.0/16
   ```

2. **Node Synchronization Issues**

   **Issue**: Nodes fail to synchronize properly.
   
   **Solution**:
   ```bash
   # Reset the node data
   docker exec -it supernova-seed-1 supernova node reset-data
   
   # Restart with specified seed node
   docker-compose restart
   ```

3. **Transaction Processing Delays**

   **Issue**: Transactions take too long to process.
   
   **Solution**: Adjust block parameters in the configuration:
   ```bash
   docker exec -it supernova-seed-1 supernova config set \
     --max-block-size 2048576 \
     --block-time 5
   ```

<a id="troubleshooting"></a>

## Troubleshooting

If you encounter issues not listed above, try these general troubleshooting steps:

1. **Check Logs**

   ```bash
   docker-compose logs -f
   ```

2. **Verify Network Connectivity**

   ```bash
   docker exec -it supernova-seed-1 ping supernova-node-1
   ```

3. **Inspect Container Health**

   ```bash
   docker inspect --format='{{.State.Health.Status}}' supernova-seed-1
   ```

4. **Check Resource Usage**

   ```bash
   docker stats
   ```

5. **Restart Services**

   ```bash
   docker-compose restart
   ```

6. **Reset Environment**

   If all else fails, reset the entire environment:
   
   ```bash
   docker-compose down -v
   docker-compose up -d
   ```

<a id="testnet-reset-procedure"></a>

## Testnet Reset Procedure

The testnet is periodically reset to ensure optimal performance. To prepare for a reset:

1. **Export Your Wallets**

   ```bash
   docker exec -it supernova-seed-1 supernova wallet export \
     --output /backups/wallets.json
   ```

2. **Save Important Data**

   ```bash
   docker exec -it supernova-seed-1 supernova data export \
     --output /backups/important-data.json
   ```

3. **Monitor Reset Announcements**

   Reset announcements are posted on:
   - Discord #testnet channel
   - GitHub repository issues
   - Status page banner

<a id="getting-help"></a>

## Getting Help

If you need assistance with the testnet:

1. **Join Discord Community**

   Join our [Discord server](https://discord.gg/supernova) and ask questions in the #testnet-support channel.

2. **GitHub Issues**

   Report bugs or suggest improvements on our [GitHub repository](https://github.com/mjohnson518/supernova/issues).

3. **Documentation**

   Refer to the [complete documentation](https://docs.supernovanetwork.xyz) for detailed information.

4. **Developer Office Hours**

   Attend our weekly developer office hours every Wednesday at 2:00 PM UTC on Discord.

 