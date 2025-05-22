# Supernova Documentation

This directory contains the official documentation for the Supernova blockchain project. The documentation is organized into logical sections to provide a clear path for different user types.

## Current Version and Status

Supernova is currently at version 0.9.0-BETA. The architecture and core components have been designed and implemented, with all core functionality now operational. We've successfully resolved all compilation issues and the codebase builds successfully.

### Key Implementation Milestones

- **Quantum Resistance**: Post-quantum cryptographic signatures fully integrated using Falcon-based lattice cryptography, providing protection against quantum computer attacks.
- **Environmental Tracking**: Real-time emissions monitoring with geographical attribution, green mining incentives, and environmental treasury for carbon offsets.
- **Advanced Security**: Comprehensive security manager implementing IP diversity, peer rotation, challenge-response systems, and behavioral scoring to prevent various attack vectors.
- **Lightning Network**: Full implementation of payment channels with HTLC support, proper channel lifecycle management, and security measures.
- **Monitoring System**: Complete blockchain metrics framework tracking network health, environmental impact, performance, and security indicators.

For a detailed breakdown of component implementation status, see the [Project Overview](overview/project-overview.md) page and the [Roadmap](overview/roadmap.md).

## Development Timeline

The project is moving toward mainnet launch with the following timeline:

1. **Current Phase (Q2 2025)**: Finalize remaining components and optimize performance
2. **Testing Phase (Q2 2025)**: Comprehensive testing and security audits
3. **Testnet Phase (Q2 2025)**: Complete testnet deployment with all features
4. **Mainnet Launch (Q3 2025)**: Production infrastructure and genesis block

## Documentation Structure

- **overview/**: High-level introduction to Supernova, its purpose, and architecture
- **technical-docs/**: Technical specifications and implementation details
- **developers/**: Resources for developers building on Supernova
- **node-operation/**: Instructions for node operators and miners
- **environmental/**: Information about Supernova's carbon-negative approach
- **governance/**: Details about the Supernova Foundation and governance
- **api-reference/**: Comprehensive API documentation
- **core/**: Documentation for core blockchain components

## Contributing to Documentation

Contributions to improve the documentation are welcome. Please follow these guidelines:

1. Ensure all documentation files are Markdown format (.md)
2. Use clear, concise language that is accessible to users
3. Include diagrams, tables, and examples where helpful
4. Cross-reference related documentation
5. Follow the existing structure and style conventions

## Building the Documentation

The documentation is built and served through the Supernova website. To view the documentation locally:

1. Clone the repository
2. Navigate to the website directory
3. Run `npm install` to install dependencies
4. Run `npm run dev` to start the development server
5. Access the documentation at `http://localhost:3000/docs`

## License

All documentation is provided under the MIT license. See the LICENSE file for details.