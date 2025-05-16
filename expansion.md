# Supernova Web Expansion: Technical Specification

This document outlines the plan for expanding the Supernova website to include three new applications:

1. **Testnet & Faucet UI** (testnet.supernovanetwork.xyz)
2. **Block Explorer (NovaScan)** (explorer.supernovanetwork.xyz)
3. **Network Status Dashboard** (status.supernovanetwork.xyz)

## 1. Project Structure Overview

We'll expand the existing Next.js application using app router to create a unified codebase that powers all Supernova web properties.

```
supernova-web/
├── src/
│   ├── app/                       # Next.js App Router
│   │   ├── page.tsx               # Main website homepage
│   │   ├── testnet/               # Testnet routes
│   │   ├── explorer/              # Explorer routes
│   │   └── status/                # Status dashboard routes
│   ├── components/
│   │   ├── shared/                # Common components
│   │   ├── testnet/               # Testnet-specific components
│   │   ├── explorer/              # Explorer-specific components
│   │   └── status/                # Status dashboard components
│   └── lib/
│       ├── api/                   # API client libraries
│       ├── blockchain/            # Blockchain data utilities
│       └── helpers/               # Helper functions
├── public/
│   ├── images/                    # Static images
│   └── icons/                     # Icon sets
├── styles/                        # Global styles
└── ...                            # Other configuration files
```

## 2. Implementation Plan by Application

### 2.1. Testnet & Faucet UI (testnet.supernovanetwork.xyz)

#### Features
- Request testnet tokens (faucet)
- View transaction history
- Access testnet setup instructions
- Testnet network statistics

#### Key Pages
1. **Main Page** (`src/app/testnet/page.tsx`)
   - Overview of testnet
   - Quick stats on testnet status
   - Links to resources

2. **Faucet Page** (`src/app/testnet/faucet/page.tsx`)
   - Form to request testnet tokens
   - Address validation
   - Captcha verification
   - Success/error messaging

3. **Transactions Page** (`src/app/testnet/transactions/page.tsx`)
   - Recent faucet distributions
   - Filtering and pagination

#### API Integration
- Connect to the testnet faucet API endpoints:
  - `GET /api/faucet/status` - Get faucet status
  - `POST /api/faucet/send` - Request tokens
  - `GET /api/faucet/transactions` - List recent distributions

#### Key Components
```typescript
// src/components/testnet/FaucetForm.tsx
import React, { useState } from 'react';
import { Button, TextField, Alert } from '../shared/ui';
import { validateAddress } from '@/lib/blockchain/validation';

export const FaucetForm = () => {
  const [address, setAddress] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    
    try {
      // Form validation
      if (!validateAddress(address)) {
        throw new Error('Invalid testnet address format');
      }
      
      // API request
      const response = await fetch('/api/faucet/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ address }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Failed to send tokens');
      }
      
      setSuccess(`Successfully sent ${data.amount} tokens to your address!`);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unknown error occurred');
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="faucet-form">
      {/* Form implementation */}
    </form>
  );
};
```

### 2.2. Block Explorer (NovaScan) (explorer.supernovanetwork.xyz)

#### Features
- Browse blockchain data (blocks, transactions, addresses)
- Search functionality
- Visual charts and statistics
- Rich transaction details

#### Key Pages
1. **Home Page** (`src/app/explorer/page.tsx`)
   - Latest blocks and transactions
   - Network statistics
   - Search box

2. **Block Details** (`src/app/explorer/block/[hash]/page.tsx`)
   - Block header information
   - Transactions list
   - Technical details

3. **Transaction Details** (`src/app/explorer/tx/[txid]/page.tsx`)
   - Transaction inputs/outputs
   - Fee information
   - Status and confirmations

4. **Address Details** (`src/app/explorer/address/[address]/page.tsx`)
   - Balance information
   - Transaction history
   - QR code

#### API Integration
Design RESTful API client for explorer data:
```typescript
// src/lib/api/explorer.ts
export async function getLatestBlocks(limit = 10) {
  const response = await fetch(`${EXPLORER_API_URL}/blocks?limit=${limit}`);
  if (!response.ok) throw new Error('Failed to fetch blocks');
  return response.json();
}

export async function getBlock(hashOrHeight: string) {
  const response = await fetch(`${EXPLORER_API_URL}/block/${hashOrHeight}`);
  if (!response.ok) throw new Error('Block not found');
  return response.json();
}

export async function getTransaction(txid: string) {
  const response = await fetch(`${EXPLORER_API_URL}/tx/${txid}`);
  if (!response.ok) throw new Error('Transaction not found');
  return response.json();
}

export async function getAddress(address: string) {
  const response = await fetch(`${EXPLORER_API_URL}/address/${address}`);
  if (!response.ok) throw new Error('Address not found');
  return response.json();
}
```

#### Key Components
- BlockList
- TransactionList
- SearchBar
- AddressBalance
- DataTable
- PaginationControls

### 2.3. Network Status Dashboard (status.supernovanetwork.xyz)

#### Features
- Real-time network metrics
- Node status information
- Environmental impact tracking
- Historical charts

#### Key Pages
1. **Dashboard Home** (`src/app/status/page.tsx`)
   - Network health overview
   - Key metrics visualization
   - Alert status

2. **Nodes Map** (`src/app/status/nodes/page.tsx`)
   - Geographic distribution of nodes
   - Connection status
   - Version information

3. **Environmental Metrics** (`src/app/status/environmental/page.tsx`)
   - Energy consumption data
   - Carbon footprint
   - Renewable energy percentage

#### Key Components
- MetricsCard
- StatusIndicator
- LineChart and BarChart
- NodesMap (using react-leaflet)
- EnvironmentalGauge

## 3. Shared Components Library

Create a foundation of reusable components:

```typescript
// src/components/shared/ui/index.ts
export { Button } from './Button';
export { Card } from './Card';
export { Table } from './Table';
export { TextField } from './TextField';
export { Alert } from './Alert';
// etc.
```

These components should follow Supernova's design language and be built for accessibility and responsiveness.

## 4. Design Guidelines

### 4.1. Color Palette
- Primary: #1E56A0 (Deep blue - matches Supernova branding)
- Secondary: #163172 (Darker blue for contrast)
- Accent: #00BCD4 (Cyan for highlights and calls to action)
- Success: #4CAF50 (Green for positive status)
- Warning: #FF9800 (Orange for warning status)
- Error: #F44336 (Red for error status)
- Neutral: Various shades of gray for text and backgrounds

### 4.2. Typography
- Primary Font: Inter (Sans-serif, modern and readable)
- Monospace Font: JetBrains Mono (for addresses, hashes, and code)
- Base text size: 16px with responsive scaling
- Heading hierarchy with clear size distinction

### 4.3. Component Design Principles
- Clean, minimal aesthetic
- Consistent spacing and sizing
- Clear visual hierarchy
- Subtle animations for interactions
- Mobile-first responsive design

## 5. API Integration

### 5.1. API Architecture
```
Supernova Node API -> API Gateway -> Next.js API Routes -> React Components
```

### 5.2. Data Fetching Strategy
- Server components for initial page loads
- Client components for interactive elements
- Optimistic UI updates for better UX
- SWR for client-side data fetching with caching

### 5.3. Sample API Route
```typescript
// src/app/api/explorer/blocks/route.ts
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const limit = Number(searchParams.get('limit') || '10');
  
  try {
    const response = await fetch(`${process.env.EXPLORER_API_ENDPOINT}/blocks?limit=${limit}`, {
      headers: {
        'Authorization': `Bearer ${process.env.API_SECRET_KEY}`
      }
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch blocks');
    }
    
    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to fetch blocks' },
      { status: 500 }
    );
  }
}
```

## 6. Deployment & Configuration

### 6.1. Netlify Configuration

Update `netlify.toml` to handle the subdomains:

```toml
[[redirects]]
  from = "https://testnet.supernovanetwork.xyz/*"
  to = "/.netlify/functions/subdomain-router"
  status = 200
  force = true

[[redirects]]
  from = "https://explorer.supernovanetwork.xyz/*"
  to = "/.netlify/functions/subdomain-router"
  status = 200
  force = true

[[redirects]]
  from = "https://status.supernovanetwork.xyz/*"
  to = "/.netlify/functions/subdomain-router"
  status = 200
  force = true
```

Create a Netlify function to handle routing:

```javascript
// netlify/functions/subdomain-router.js
exports.handler = async (event, context) => {
  const hostname = event.headers.host;
  const path = event.path;
  
  // Extract subdomain
  const subdomain = hostname.split('.')[0];
  
  // Determine which part of the app to serve
  let appPath;
  switch (subdomain) {
    case 'testnet':
      appPath = '/testnet';
      break;
    case 'explorer':
      appPath = '/explorer';
      break;
    case 'status':
      appPath = '/status';
      break;
    default:
      appPath = '/';
  }
  
  // Rewrite the URL to the correct app path
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html',
    },
    body: `<!DOCTYPE html>
      <html>
        <head>
          <meta http-equiv="refresh" content="0;url=${appPath}${path}" />
        </head>
        <body>
          Redirecting to ${appPath}${path}...
        </body>
      </html>`
  };
};
```

### 6.2. DNS Configuration

Add CNAME records for each subdomain:
- `testnet` → Points to your Netlify site
- `explorer` → Points to your Netlify site
- `status` → Points to your Netlify site

## 7. Implementation Timeline

### Phase 1: Foundation (Weeks 1-2)
- Set up folder structure
- Create shared component library
- Configure routing and subdomains
- Implement basic page layouts

### Phase 2: Testnet & Faucet UI (Weeks 3-4)
- Implement faucet form and validation
- Create transaction history view
- Add testnet setup instructions
- Connect to testnet API

### Phase 3: Block Explorer (Weeks 5-8)
- Create block and transaction listing pages
- Implement search functionality
- Build detail pages for blocks, transactions, and addresses
- Add data visualization components

### Phase 4: Network Dashboard (Weeks 9-10)
- Implement metrics dashboard
- Create nodes map visualization
- Build environmental impact tracking
- Add real-time updates

### Phase 5: Testing & Refinement (Weeks 11-12)
- Comprehensive testing across devices
- Performance optimization
- Accessibility validation
- Security review

## 8. Technical Requirements

### 8.1. Dependencies
- React and Next.js (latest versions)
- SWR for data fetching
- D3.js for data visualization
- react-leaflet for mapping
- Formik or react-hook-form for form handling
- zod for schema validation

### 8.2. Development Tools
- TypeScript for type safety
- ESLint for code quality
- Jest and React Testing Library for testing
- Storybook for component documentation

## 9. Future Expansion Possibilities

- Mobile apps using React Native
- Desktop clients using Electron
- Browser extensions for blockchain interaction
- Governance platform for network proposals

---

This technical specification provides a comprehensive roadmap for implementing the Supernova web expansion. It's designed to guide junior engineers and designers through the development process while ensuring consistency with the existing Supernova brand and code architecture. 