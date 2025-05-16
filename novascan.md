# Supernova Block Explorer: Technical Specification & Implementation Guide

## 1. Overview

The Supernova Block Explorer (NovaScan) will provide a comprehensive interface for users to explore the Supernova blockchain. This document outlines the technical specifications, implementation plan, and design guidelines for developing a feature-rich block explorer similar to Etherscan.

## 2. Project Objectives

- Create an intuitive, user-friendly block explorer for the Supernova blockchain
- Provide comprehensive data visualization and exploration capabilities
- Deliver a production-grade application with high performance and reliability
- Implement blockchain-specific features that highlight Supernova's unique capabilities
- Build a foundation that can be extended with additional features over time

## 3. Technical Architecture

### 3.1 High-Level Architecture

```
┌─────────────────┐     ┌──────────────────┐     ┌─────────────────┐
│                 │     │                  │     │                 │
│  Frontend App   │◄────┤   API Gateway    │◄────┤  Indexer &      │
│  (React/Next.js)│     │   (Express/Nest) │     │  Data Services  │
│                 │     │                  │     │                 │
└─────────────────┘     └──────────────────┘     └─────────────────┘
                                                        ▲
                                                        │
                                                        ▼
                                                 ┌─────────────────┐
                                                 │                 │
                                                 │  Database       │
                                                 │  (PostgreSQL)   │
                                                 │                 │
                                                 └─────────────────┘
                                                        ▲
                                                        │
                                                        ▼
                                                 ┌─────────────────┐
                                                 │                 │
                                                 │  Supernova Node │
                                                 │  (RPC/API)      │
                                                 │                 │
                                                 └─────────────────┘
```

### 3.2 Key Components

1. **Frontend Application**
   - React/Next.js-based SPA with server-side rendering capabilities
   - Responsive design with mobile compatibility
   - Interactive data visualization components
   - Optimized for performance and SEO

2. **API Gateway**
   - RESTful API endpoints for frontend consumption
   - Request validation and rate limiting
   - Authentication for certain operations
   - Caching layer for performance optimization

3. **Indexer & Data Services**
   - Block and transaction indexing from the blockchain
   - Data processing and analytics
   - Search functionality
   - Environmental metrics collection and processing

4. **Database Layer**
   - PostgreSQL for structured data storage
   - Efficient indexing for fast querying
   - Data integrity and consistency checks
   - Backup and recovery mechanisms

5. **Blockchain Connectivity**
   - Direct connection to Supernova nodes
   - Handling of chain reorganizations
   - Websocket connections for real-time updates

## 4. Frontend Implementation

### 4.1 Page Structure

1. **Homepage**
   - Network overview and statistics
   - Latest blocks and transactions
   - Environmental impact dashboard
   - Search functionality

2. **Block Details Page**
   - Block metadata and header information
   - List of transactions in the block
   - Mining details and rewards
   - Environmental metrics for the block

3. **Transaction Details Page**
   - Transaction metadata and status
   - Input and output details
   - Fee information
   - Environmental impact of the transaction

4. **Address Page**
   - Address overview and balance
   - Transaction history
   - UTXO list
   - Environmental impact metrics

5. **Network Statistics**
   - Historical charts and metrics
   - Mining and hashrate statistics
   - Fee and mempool analytics
   - Environmental impact over time

6. **Environmental Dashboard**
   - Carbon footprint metrics
   - Renewable energy usage
   - Comparison with other blockchains
   - Historical environmental data

### 4.2 UI Component Library

Use a component-based architecture with the following core components:

1. **Data Display Components**
   - DataTable: For displaying tabular data with sorting and pagination
   - DetailCard: For displaying key-value information about entities
   - StatusBadge: For showing transaction/block status
   - AddressTag: For displaying addresses with copy functionality
   - HashDisplay: For showing and copying transaction/block hashes

2. **Chart Components**
   - TimeSeriesChart: For historical data visualization
   - PieChart: For distribution metrics
   - BarChart: For comparative metrics
   - HeatMap: For activity visualization

3. **Navigation Components**
   - SearchBar: For global search functionality
   - Pagination: For navigating through lists
   - Breadcrumbs: For navigation hierarchy
   - Tabs: For organizing related content

4. **Interactive Components**
   - FilterPanel: For filtering data based on criteria
   - SortControls: For changing sort order of data
   - DateRangePicker: For selecting time ranges for data
   - ExportButton: For downloading data in various formats

### 4.3 Design System

Establish a design system with the following elements:

1. **Color Palette**
   - Primary: #1E56A0 (Deep blue - matches Supernova branding)
   - Secondary: #163172 (Darker blue for contrast)
   - Accent: #00BCD4 (Cyan for highlights and calls to action)
   - Success: #4CAF50 (Green for positive status)
   - Warning: #FF9800 (Orange for warning status)
   - Error: #F44336 (Red for error status)
   - Neutral: Various shades of gray for text and backgrounds

2. **Typography**
   - Primary Font: Inter (Sans-serif, modern and readable)
   - Monospace Font: JetBrains Mono (for addresses, hashes, and code)
   - Base text size: 16px with responsive scaling
   - Heading hierarchy with clear size distinction

3. **Spacing System**
   - Base unit: 4px
   - Spacing scale: 4px, 8px, 16px, 24px, 32px, 48px, 64px
   - Consistent spacing between components and sections

4. **Layout Guidelines**
   - 12-column grid system for desktop
   - Fluid layouts for mobile with single column
   - Maximum content width of 1200px
   - Consistent content container padding

5. **Component Styling**
   - Rounded corners (4px radius)
   - Subtle shadows for elevation
   - Consistent hover and focus states
   - Animated transitions for state changes

### 4.4 Responsive Design Strategy

- Mobile-first approach with progressive enhancement
- Breakpoints:
  - Small: 0-576px (mobile)
  - Medium: 577px-768px (tablet)
  - Large: 769px-992px (small desktop)
  - Extra Large: 993px+ (large desktop)
- Feature adaptation based on screen size (simplify complex visualizations on mobile)
- Touch-friendly interface elements for mobile users

## 5. Backend Implementation

### 5.1 API Endpoints Structure

#### 5.1.1 Block-related Endpoints

- `GET /api/v1/blocks`: List of recent blocks with pagination
- `GET /api/v1/blocks/:hash`: Detailed information about a specific block
- `GET /api/v1/blocks/:height`: Block information by height
- `GET /api/v1/blocks/stats`: Block statistics and metrics

#### 5.1.2 Transaction-related Endpoints

- `GET /api/v1/transactions`: List of recent transactions with pagination
- `GET /api/v1/transactions/:txid`: Detailed information about a specific transaction
- `GET /api/v1/transactions/pending`: List of pending transactions in the mempool
- `GET /api/v1/transactions/stats`: Transaction statistics and metrics

#### 5.1.3 Address-related Endpoints

- `GET /api/v1/addresses/:address`: Address overview and balance
- `GET /api/v1/addresses/:address/transactions`: Transaction history for an address
- `GET /api/v1/addresses/:address/utxos`: List of UTXOs for an address
- `GET /api/v1/addresses/rich-list`: List of addresses with highest balances

#### 5.1.4 Network-related Endpoints

- `GET /api/v1/network/stats`: General network statistics
- `GET /api/v1/network/hashrate`: Mining hashrate information
- `GET /api/v1/network/difficulty`: Difficulty adjustment data
- `GET /api/v1/network/mempool`: Mempool statistics

#### 5.1.5 Environmental Endpoints

- `GET /api/v1/environmental/overview`: Current environmental metrics
- `GET /api/v1/environmental/history`: Historical environmental data
- `GET /api/v1/environmental/transactions/:txid`: Environmental impact of a transaction
- `GET /api/v1/environmental/compare`: Comparison with other blockchains

#### 5.1.6 Lightning Network Endpoints

- `GET /api/v1/lightning/stats`: General Lightning Network statistics
- `GET /api/v1/lightning/nodes`: Active Lightning nodes
- `GET /api/v1/lightning/channels`: Active Lightning channels

### 5.2 Data Indexing Strategy

1. **Block Indexing**
   - Process each new block as it's created
   - Extract and store all block metadata
   - Update derived statistics

2. **Transaction Indexing**
   - Extract and store all transaction data
   - Index inputs and outputs
   - Link UTXOs to addresses
   - Update address balances

3. **Address Indexing**
   - Track address balances and transaction history
   - Maintain UTXO sets for each address
   - Calculate derived metrics (first/last activity, etc.)

4. **Environmental Data Indexing**
   - Process environmental impact metrics from block data
   - Calculate carbon footprint of transactions
   - Track renewable energy metrics

5. **Real-time Updates**
   - Implement websocket connections for immediate updates
   - Handle chain reorganizations gracefully
   - Update mempool data in real-time

### 5.3 Database Schema (Simplified)

```sql
-- Blocks table
CREATE TABLE blocks (
    hash VARCHAR(64) PRIMARY KEY,
    height INTEGER NOT NULL UNIQUE,
    version INTEGER NOT NULL,
    prev_block_hash VARCHAR(64) NOT NULL,
    merkle_root VARCHAR(64) NOT NULL,
    timestamp TIMESTAMP NOT NULL,
    bits INTEGER NOT NULL,
    nonce INTEGER NOT NULL,
    size INTEGER NOT NULL,
    weight INTEGER NOT NULL,
    transaction_count INTEGER NOT NULL,
    difficulty NUMERIC NOT NULL,
    total_fees NUMERIC NOT NULL,
    mining_reward NUMERIC NOT NULL,
    validator_address VARCHAR(64),
    energy_consumption NUMERIC,
    carbon_footprint NUMERIC,
    renewable_percentage NUMERIC
);

-- Transactions table
CREATE TABLE transactions (
    txid VARCHAR(64) PRIMARY KEY,
    block_hash VARCHAR(64) REFERENCES blocks(hash),
    block_height INTEGER,
    timestamp TIMESTAMP,
    size INTEGER NOT NULL,
    weight INTEGER NOT NULL,
    version INTEGER NOT NULL,
    locktime INTEGER NOT NULL,
    fee NUMERIC NOT NULL,
    status VARCHAR(20) NOT NULL,
    carbon_footprint NUMERIC,
    is_coinbase BOOLEAN NOT NULL
);

-- Transaction inputs
CREATE TABLE inputs (
    id SERIAL PRIMARY KEY,
    transaction_id VARCHAR(64) REFERENCES transactions(txid),
    input_index INTEGER NOT NULL,
    prev_txid VARCHAR(64),
    prev_vout INTEGER,
    script_sig TEXT,
    script_sig_asm TEXT,
    witness TEXT[],
    sequence INTEGER NOT NULL,
    address VARCHAR(64),
    value NUMERIC,
    UNIQUE(transaction_id, input_index)
);

-- Transaction outputs
CREATE TABLE outputs (
    id SERIAL PRIMARY KEY,
    transaction_id VARCHAR(64) REFERENCES transactions(txid),
    output_index INTEGER NOT NULL,
    script_pubkey TEXT NOT NULL,
    script_pubkey_asm TEXT NOT NULL,
    script_pubkey_type VARCHAR(64) NOT NULL,
    address VARCHAR(64),
    value NUMERIC NOT NULL,
    is_spent BOOLEAN NOT NULL DEFAULT FALSE,
    spent_by_txid VARCHAR(64),
    UNIQUE(transaction_id, output_index)
);

-- Addresses
CREATE TABLE addresses (
    address VARCHAR(64) PRIMARY KEY,
    first_seen_at TIMESTAMP,
    last_seen_at TIMESTAMP,
    transaction_count INTEGER NOT NULL DEFAULT 0,
    total_received NUMERIC NOT NULL DEFAULT 0,
    total_sent NUMERIC NOT NULL DEFAULT 0,
    final_balance NUMERIC NOT NULL DEFAULT 0,
    unspent_output_count INTEGER NOT NULL DEFAULT 0
);

-- Environmental metrics
CREATE TABLE environmental_metrics (
    id SERIAL PRIMARY KEY,
    timestamp TIMESTAMP NOT NULL,
    height_range_start INTEGER NOT NULL,
    height_range_end INTEGER NOT NULL,
    energy_consumption_kwh NUMERIC NOT NULL,
    carbon_emissions_kg NUMERIC NOT NULL,
    renewable_energy_percentage NUMERIC NOT NULL,
    transactions_count INTEGER NOT NULL,
    energy_per_transaction_kwh NUMERIC NOT NULL,
    carbon_per_transaction_kg NUMERIC NOT NULL
);

-- Lightning nodes
CREATE TABLE lightning_nodes (
    node_id VARCHAR(66) PRIMARY KEY,
    alias VARCHAR(64),
    color VARCHAR(7),
    last_update TIMESTAMP,
    addresses JSONB,
    capacity NUMERIC NOT NULL DEFAULT 0,
    channel_count INTEGER NOT NULL DEFAULT 0
);

-- Lightning channels
CREATE TABLE lightning_channels (
    channel_id VARCHAR(64) PRIMARY KEY,
    node1_id VARCHAR(66) REFERENCES lightning_nodes(node_id),
    node2_id VARCHAR(66) REFERENCES lightning_nodes(node_id),
    capacity NUMERIC NOT NULL,
    transaction_id VARCHAR(64) REFERENCES transactions(txid),
    transaction_output INTEGER NOT NULL,
    is_active BOOLEAN NOT NULL DEFAULT TRUE,
    last_update TIMESTAMP
);
```

## 6. Key Features Implementation

### 6.1 Search Functionality

Implement a unified search that can handle:
- Block hashes and heights
- Transaction IDs
- Addresses
- Lightning node IDs

The search should:
- Provide auto-suggestions as the user types
- Support partial matches where appropriate
- Handle common error patterns (e.g., missing characters)
- Clearly indicate the type of entity found

Implementation guidelines:
- Use Elasticsearch or PostgreSQL full-text search
- Implement server-side API endpoint for search
- Add debouncing on the frontend to prevent excessive API calls
- Cache recent and common search results

### 6.2 Data Visualization Components

Implement the following charts and visualizations:

1. **Network Overview**
   - Transactions per day (line chart)
   - Block time distribution (histogram)
   - Hashrate evolution (line chart)
   - Fee distribution (box plot)

2. **Block Details**
   - Transaction size distribution in block (pie chart)
   - Fee distribution (histogram)
   - Input/output value ranges (bar chart)

3. **Address Analysis**
   - Transaction history over time (line chart)
   - Balance history (area chart)
   - Received vs sent (comparative bar chart)

4. **Environmental Impact**
   - Carbon footprint over time (line chart)
   - Energy efficiency metrics (gauge chart)
   - Renewable energy percentage (progress bar)
   - Comparison with other chains (radar chart)

Technical implementation:
- Use D3.js or Chart.js for visualization
- Implement server-side data aggregation
- Add export functionality for charts (PNG, CSV)
- Ensure mobile-friendly responsive design

### 6.3 Real-time Updates

Implement WebSocket connections for real-time updates on:
- New blocks
- Transaction confirmations
- Mempool changes
- Address balance changes

Technical approach:
- Set up Socket.io or native WebSocket server
- Implement subscription mechanism for specific entities
- Handle reconnection and missed updates gracefully
- Add visual indicators for real-time updates

### 6.4 Environmental Impact Dashboard

Create a dedicated dashboard showing:
- Current network carbon footprint
- Energy consumption metrics
- Renewable energy percentage
- Historical trends in environmental impact
- Transaction-level environmental analysis
- Comparison tools with other blockchains

Implementation details:
- Use data from the environmental system in Supernova
- Create aggregation pipelines for different time periods
- Implement comparison algorithms for benchmarking
- Add educational content about environmental metrics

### 6.5 Lightning Network Explorer

Develop specialized views for Lightning Network data:
- Node explorer with connection visualization
- Channel details and statistics
- Network capacity analytics
- Geographic distribution of nodes (if data available)

Implementation approach:
- Create network graph visualization using D3.js/Sigma.js
- Implement specialized data collection for Lightning metrics
- Add filtering and exploration tools for the network graph
- Create comparison views for on-chain vs Lightning metrics

### 6.6 API Access

Provide public API access for developers:
- Comprehensive documentation
- Rate limiting and usage monitoring
- Examples and SDKs
- Authentication for higher rate limits

Implementation guidelines:
- Use OpenAPI/Swagger for documentation
- Implement tiered rate limiting
- Create developer portal section
- Generate code examples for common languages

## 7. Development Roadmap

### 7.1 Phase 1: Core Explorer (Weeks 1-4)

1. **Week 1: Project Setup and Architecture**
   - Set up development environment
   - Create project structure
   - Implement basic database schema
   - Set up continuous integration

2. **Week 2: Indexer Implementation**
   - Develop block indexing service
   - Implement transaction processing
   - Set up address tracking
   - Create basic API endpoints

3. **Week 3: Basic Frontend**
   - Implement core UI components
   - Create homepage layout
   - Develop block explorer views
   - Build transaction detail pages

4. **Week 4: Basic Features Completion**
   - Implement search functionality
   - Add pagination and filtering
   - Create basic charts and visualizations
   - Implement responsive design

### 7.2 Phase 2: Advanced Features (Weeks 5-8)

1. **Week 5: Environmental Dashboard**
   - Implement environmental data indexing
   - Create environmental metrics API
   - Develop visualization components
   - Build comparative analysis tools

2. **Week 6: Lightning Network Explorer**
   - Implement Lightning data collection
   - Develop node and channel indexing
   - Create network graph visualization
   - Build Lightning statistics dashboard

3. **Week 7: Enhanced Visualizations**
   - Implement advanced chart components
   - Add export functionality
   - Create interactive data exploration tools
   - Build network statistics dashboard

4. **Week 8: Real-time Updates**
   - Implement WebSocket server
   - Develop real-time UI updates
   - Add subscription mechanisms
   - Create notification system

### 7.3 Phase 3: Refinement and Launch (Weeks 9-12)

1. **Week 9: API Documentation**
   - Create OpenAPI documentation
   - Build developer portal
   - Implement authentication system
   - Develop API examples

2. **Week 10: Performance Optimization**
   - Implement caching strategies
   - Optimize database queries
   - Add load balancing
   - Perform performance testing

3. **Week 11: Testing and Refinement**
   - Conduct comprehensive testing
   - Fix bugs and issues
   - Improve user experience
   - Refine design elements

4. **Week 12: Launch Preparation**
   - Final QA and testing
   - Deploy to production environment
   - Set up monitoring and alerting
   - Prepare launch materials

## 8. Development Best Practices

### 8.1 Code Quality

- Write clean, maintainable code with comprehensive comments
- Follow established coding standards for each language/framework
- Use ESLint, Prettier, and similar tools to enforce consistency
- Implement comprehensive testing (unit, integration, end-to-end)

### 8.2 Performance Considerations

- Implement efficient database queries with proper indexing
- Use caching for frequently accessed data
- Optimize frontend bundle size and loading times
- Implement lazy loading and code splitting
- Monitor and optimize API response times

### 8.3 Security Measures

- Implement proper input validation and sanitization
- Use parameterized queries to prevent SQL injection
- Apply rate limiting to prevent abuse
- Implement proper authentication for sensitive endpoints
- Regular security audits and vulnerability scanning

### 8.4 Accessibility Guidelines

- Follow WCAG 2.1 guidelines for accessibility
- Ensure proper keyboard navigation
- Use semantic HTML elements
- Implement appropriate ARIA attributes
- Test with screen readers and accessibility tools

## 9. Infrastructure Requirements

### 9.1 Development Environment

- Modern development tools and IDEs
- Local Supernova node for testing
- Docker containers for consistent environments
- Git workflow with feature branches and pull requests

### 9.2 Production Infrastructure

- Scalable cloud hosting (AWS, GCP, or Azure)
- Load balancing for high availability
- Database replication and backup solutions
- Monitoring and alerting setup
- CDN for static asset delivery

### 9.3 CI/CD Pipeline

- Automated testing for each pull request
- Continuous integration with GitHub Actions or similar
- Staging environment for pre-production testing
- Automated deployment with rollback capabilities

## 10. Team Responsibilities

### 10.1 Junior Engineer Tasks

- Implement backend API endpoints according to specifications
- Develop database queries and interactions
- Build data indexing and processing services
- Create frontend components following the design system
- Implement data visualization charts
- Write tests for components and services

### 10.2 Designer Tasks

- Create detailed UI mockups for all pages
- Develop the design system components
- Design responsive layouts for all screen sizes
- Create visualizations and chart designs
- Design interactive elements and animations
- Develop iconography and visual assets

## 11. Documentation Requirements

- Complete API documentation with examples
- Comprehensive database schema documentation
- Development setup instructions
- Deployment documentation
- User guides for the explorer features

## 12. Maintenance Plan

- Regular updates to match Supernova blockchain updates
- Monitoring system for detecting issues
- Backup and recovery procedures
- Performance optimization based on usage patterns
- Feature roadmap for future enhancements

## Appendix A: API Response Examples

<details>
<summary>Block Details Response Example</summary>

```json
{
  "hash": "000000000000000000079f1121a56cf8e75e43f9cca5ea71ebcaa42453aa6cbd",
  "height": 12345,
  "version": 1,
  "prevBlockHash": "000000000000000000081bc2c8a219f5f7c4f163e5b750c0e010a6444a2e2e89",
  "merkleRoot": "8c21ed18dc19b8a69847c1e5e1ffae26e1f64c24a7f5b3e36c6b764b95e8b4a3",
  "timestamp": 1622548800,
  "bits": 386863986,
  "nonce": 123456789,
  "size": 1234,
  "weight": 4444,
  "transactionCount": 42,
  "difficulty": 21448277761059.71,
  "totalFees": 0.12345,
  "miningReward": 6.25,
  "validatorAddress": "snova1qj5a2rx00xy2kz98c8rh5wj39f2d7l2ksnae3m",
  "environmentalImpact": {
    "energyConsumptionKwh": 123.45,
    "carbonFootprintKg": 42.1,
    "renewablePercentage": 65.4
  },
  "transactions": [
    "7b968c021ac34e1fcdd662d1d262158a92544bebf181f29c1e327aa3b835b48e",
    "6b9a3e3999fb21e3eae21a3c39ef6e4acfac9955dd6b02f83f21a75f21382116"
    // truncated for brevity
  ]
}
```
</details>

<details>
<summary>Transaction Details Response Example</summary>

```json
{
  "txid": "7b968c021ac34e1fcdd662d1d262158a92544bebf181f29c1e327aa3b835b48e",
  "blockHash": "000000000000000000079f1121a56cf8e75e43f9cca5ea71ebcaa42453aa6cbd",
  "blockHeight": 12345,
  "timestamp": 1622548800,
  "size": 250,
  "weight": 669,
  "version": 1,
  "locktime": 0,
  "fee": 0.0001,
  "status": "confirmed",
  "carbonFootprint": 0.123,
  "isCoinbase": false,
  "inputs": [
    {
      "prevTxid": "3a7e5b98add5c30d9c9bee6345e94a9df1ce5cb501d7d2631abb0f6a09011491",
      "prevVout": 1,
      "scriptSig": "473044022075...",
      "address": "snova1qj5a2rx00xy2kz98c8rh5wj39f2d7l2ksnae3m",
      "value": 0.5
    }
  ],
  "outputs": [
    {
      "outputIndex": 0,
      "scriptPubKey": "76a914c42e7ef92fdb603af844d064faad95db9bcdfd3d88ac",
      "scriptPubKeyType": "p2pkh",
      "address": "snova1qewk73k38xxl0vk9h7kkqvgesgf0a8atrmxssg",
      "value": 0.4999,
      "isSpent": false
    }
  ]
}
```
</details>

<details>
<summary>Address Details Response Example</summary>

```json
{
  "address": "snova1qj5a2rx00xy2kz98c8rh5wj39f2d7l2ksnae3m",
  "firstSeenAt": 1622458800,
  "lastSeenAt": 1622548800,
  "transactionCount": 42,
  "totalReceived": 123.456,
  "totalSent": 100.123,
  "finalBalance": 23.333,
  "unspentOutputCount": 5,
  "environmentalImpact": {
    "totalCarbonFootprintKg": 42.1,
    "carbonPerTransactionKg": 1.002
  },
  "utxos": [
    {
      "txid": "7b968c021ac34e1fcdd662d1d262158a92544bebf181f29c1e327aa3b835b48e",
      "vout": 0,
      "amount": 0.4999,
      "confirmations": 100
    }
    // truncated for brevity
  ],
  "recentTransactions": [
    // truncated for brevity
  ]
}
```
</details>

## Appendix B: Design Mockups

Placeholder for design mockups - these should be created by the designer and linked or embedded here.

## Appendix C: Resources

- [Supernova GitHub Repository](https://github.com/mjohnson518/supernova)
- [Etherscan Block Explorer](https://etherscan.io)
- [Awesome Etherscan Resources](https://github.com/etherscan/awesome-etherscan)
- [Block Explorer Best Practices](https://docs.etherscan.io) 