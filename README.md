# Supernova Blockchain Website

A modern website for the Supernova blockchain project, featuring quantum resistance and environmental impact monitoring capabilities.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Recent Updates

### Website Expansion (2025-01-15)
- Added three new web applications within a unified codebase:
  - Testnet & Faucet UI (testnet.supernovanetwork.xyz)
  - Block Explorer - NovaScan (explorer.supernovanetwork.xyz)
  - Network Status Dashboard (status.supernovanetwork.xyz)
- Implemented subdomain routing through Netlify for a seamless multi-site experience
- Created shared component libraries for consistent UI/UX across all applications

### Styling Fix (2023-11-11)
- Removed Tailwind CSS dependencies to resolve PostCSS plugin configuration conflicts
- Simplified SCSS files by using hardcoded values instead of CSS variables
- Updated component styling to use direct color values and gradients
- Streamlined Next.js configuration for better compatibility

## Features

- **Quantum Resistance**: Future-proof your blockchain with post-quantum cryptographic primitives.
- **Environmental Impact**: Track and mitigate carbon emissions with built-in tools.
- **Lightning Network**: Scale transactions off-chain with integrated Lightning Network support.
- **Advanced Security**: Multi-layered protection against various attacks.
- **Comprehensive Monitoring**: Built-in metrics collection framework.
- **Production Ready**: Designed with reliability in mind.
- **Modern, responsive design**
- **Community engagement platform**
- **Comprehensive documentation**

## Web Applications

### Main Website (supernovanetwork.xyz)
The primary web presence for the Supernova blockchain project, providing an overview of features, technology, and community resources.

### Documentation (docs.supernovanetwork.xyz)
Comprehensive documentation for developers, node operators, and community members.

### Testnet & Faucet UI (testnet.supernovanetwork.xyz)
Resources for developers building on Supernova testnet, including:
- Request testnet tokens via faucet
- Testnet network configuration
- Development environment setup guides

### Block Explorer - NovaScan (explorer.supernovanetwork.xyz)
A comprehensive blockchain explorer with:
- Block and transaction browsing
- Address lookup and history
- Network statistics
- Environmental impact tracking

### Network Status Dashboard (status.supernovanetwork.xyz)
Real-time monitoring of the Supernova network:
- Network health indicators
- Performance metrics
- Node distribution
- Environmental impact metrics

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can access the various sections locally via:
- Main site: http://localhost:3000
- Documentation: http://localhost:3000/docs
- Testnet & Faucet: http://localhost:3000/testnet
- Block Explorer: http://localhost:3000/explorer
- Status Dashboard: http://localhost:3000/status

## Subdomain Configuration

This project uses subdomains to create a multi-site experience from a single codebase. See [SUBDOMAINS.md](SUBDOMAINS.md) for detailed configuration instructions.

## Documentation Setup Instructions

This repository now includes the Supernova documentation integrated directly into the website.

### Accessing Documentation

- Documentation is available at `/docs` on the main website
- Individual documentation pages are at `/docs/[filename]` (without the .md extension)

### Configuring Docs Subdomain on Netlify

To set up a docs.supernovanetwork.xyz subdomain that points to the documentation:

1. **Add DNS Record:**
   - Log in to your domain registrar or DNS provider
   - Add a CNAME record:
     - Name: `docs`
     - Value: `supernovanetwork.netlify.app` (or your Netlify site URL)
     - TTL: 3600 (or as recommended by your provider)

2. **Configure in Netlify:**
   - Log in to your Netlify dashboard
   - Go to Site settings > Domain management > Domains
   - Click "Add custom domain"
   - Enter `docs.supernovanetwork.xyz` and follow the verification steps
   - Netlify will verify the CNAME record and set up the subdomain

3. **Verification:**
   - The site already includes a `netlify.toml` file with the proper redirect rules
   - These rules will ensure that requests to `docs.supernovanetwork.xyz` are properly routed to the documentation section

### Local Development

```bash
# Install dependencies
npm install

# Run the development server
npm run dev
```

Navigate to http://localhost:3000/docs to view the documentation locally.

### Updating Documentation

The documentation is sourced from the [Supernova Github repository](https://github.com/mjohnson518/supernova) and is stored in the `/docs/supernova-docs` directory.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deployment on Netlify

This project is configured for deployment on Netlify with subdomain support:

1. Push your changes to the repository
2. Netlify will automatically build and deploy the site
3. Configure DNS records for each subdomain as described in [SUBDOMAINS.md](SUBDOMAINS.md)

The Netlify configuration in `netlify.toml` includes all necessary redirects and function configurations for the subdomains to work correctly.
