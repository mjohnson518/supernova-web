# Supernova Website Subdomains

This document outlines the structure and configuration of the Supernova website's subdomains.

## Available Subdomains

| Subdomain | URL | Description |
|-----------|-----|-------------|
| Main Site | [supernovanetwork.xyz](https://supernovanetwork.xyz) | Main Supernova website with project overview |
| Documentation | [docs.supernovanetwork.xyz](https://docs.supernovanetwork.xyz) | Documentation for Supernova blockchain |
| Testnet | [testnet.supernovanetwork.xyz](https://testnet.supernovanetwork.xyz) | Testnet resources and faucet |
| Explorer | [explorer.supernovanetwork.xyz](https://explorer.supernovanetwork.xyz) | NovaScan blockchain explorer |
| Status | [status.supernovanetwork.xyz](https://status.supernovanetwork.xyz) | Network status and metrics dashboard |

## Technical Implementation

The website is built with Next.js and uses the App Router. All subdomains are served from the same codebase, with routing handled through Netlify's subdomain configuration.

### Netlify Configuration

The `netlify.toml` file includes redirects for each subdomain, sending requests to a Netlify function (`subdomain-router.js`) that determines which app section to show based on the subdomain.

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

[[redirects]]
  from = "https://docs.supernovanetwork.xyz/*"
  to = "/docs/:splat"
  status = 200
  force = true
```

### DNS Configuration

Each subdomain requires a CNAME record pointing to the Netlify site:

```
testnet   CNAME   supernova-web.netlify.app
explorer  CNAME   supernova-web.netlify.app
status    CNAME   supernova-web.netlify.app
docs      CNAME   supernova-web.netlify.app
```

## Application Structure

Within the Next.js application, each subdomain has its own section:

- `/src/app/testnet`: Testnet and faucet UI
- `/src/app/explorer`: Block explorer (NovaScan)
- `/src/app/status`: Network status dashboard
- `/src/app/docs`: Documentation

## Development Instructions

### Local Testing

For local development and testing, you can use the normal routes:

- Main site: `http://localhost:3000`
- Testnet: `http://localhost:3000/testnet`
- Explorer: `http://localhost:3000/explorer`
- Status: `http://localhost:3000/status`
- Docs: `http://localhost:3000/docs`

### Testing Subdomains Locally

For more accurate testing of subdomain routing, you can use tools like [local-ssl-proxy](https://github.com/cameronhunter/local-ssl-proxy) or modify your `/etc/hosts` file to point test subdomains to localhost.

Example hosts file configuration:
```
127.0.0.1 testnet.local
127.0.0.1 explorer.local
127.0.0.1 status.local
127.0.0.1 docs.local
```

## Deployment

When deploying to Netlify, the site is built as a single application and the redirects handle routing based on the subdomain. No additional configuration is required beyond setting up the DNS records and the Netlify redirects. 