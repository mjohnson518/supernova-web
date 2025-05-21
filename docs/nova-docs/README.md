# Supernova Documentation

This directory contains the official documentation for the Supernova blockchain project. The documentation is organized into logical sections to provide a clear path for different user types.

## Current Version and Status

Supernova is currently at version 0.7.5 in **ACTIVE DEVELOPMENT** state. While significant progress has been made on core components, many features are still in development or have partial implementations.

### Key Implementation Milestones

- **Compilation Progress**: All major compilation errors have been fixed, including NetworkSimulationConfig type conflicts in the testnet module.
- **Quantum Resistance**: Post-quantum cryptographic signatures module (~98% complete) is now fully integrated with the validation framework.
- **Environmental Features**: The environmental tracking system (~95% complete) successfully calculates emissions for transactions, blocks, and mining operations.
- **Transaction Validation**: Enhanced validation framework with comprehensive error handling (~98% complete).

For a detailed breakdown of component implementation status, see the [Project Overview](overview/project-overview.md) page.

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