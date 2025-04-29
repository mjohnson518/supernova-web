# Supernova Blockchain Website

A modern website for the Supernova blockchain project, featuring quantum resistance and environmental impact monitoring capabilities.

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Recent Updates

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

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
