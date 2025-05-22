import React from 'react';
import styles from './Features.module.scss';

// Simple placeholder SVG icons
const Icons = {
  Quantum: () => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12,2C17.52,2 22,6.48 22,12C22,17.52 17.52,22 12,22C6.48,22 2,17.52 2,12C2,6.48 6.48,2 12,2M12,4C7.58,4 4,7.58 4,12C4,16.42 7.58,20 12,20C16.42,20 20,16.42 20,12C20,7.58 16.42,4 12,4M12,5C15.87,5 19,8.13 19,12C19,15.87 15.87,19 12,19C8.13,19 5,15.87 5,12C5,8.13 8.13,5 12,5M12,7C9.24,7 7,9.24 7,12C7,14.76 9.24,17 12,17C14.76,17 17,14.76 17,12C17,9.24 14.76,7 12,7M12,9C13.66,9 15,10.34 15,12C15,13.66 13.66,15 12,15C10.34,15 9,13.66 9,12C9,10.34 10.34,9 12,9M12,10C10.9,10 10,10.9 10,12C10,13.1 10.9,14 12,14C13.1,14 14,13.1 14,12C14,10.9 13.1,10 12,10Z" />
    </svg>
  ),
  Security: () => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12,1L3,5V11C3,16.55 6.84,21.74 12,23C17.16,21.74 21,16.55 21,11V5L12,1M12,5A3,3 0 0,1 15,8A3,3 0 0,1 12,11A3,3 0 0,1 9,8A3,3 0 0,1 12,5M17.13,17C15.92,18.85 14.11,20.24 12,20.92C9.89,20.24 8.08,18.85 6.87,17C6.53,16.5 6.24,16 6,15.47C6,13.82 8.71,12.47 12,12.47C15.29,12.47 18,13.79 18,15.47C17.76,16 17.47,16.5 17.13,17Z" />
    </svg>
  ),
  Environment: () => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12,22C10.93,22 9.86,21.83 8.85,21.5H7.5L7.27,21L6.5,20.5C5.87,20.17 5.28,19.78 4.73,19.33L4.25,19L3.75,19.25L3,19.5L2.5,18L3,17.5L3.5,17L3.5,16.5C3.17,15.87 2.94,15.22 2.79,14.55L2.63,13.88L2.22,13.65L1.5,13L2,12L3,11.5L3.93,11.65L4.27,12.13C4.61,13.59 5.43,14.96 6.67,16C7.39,16.65 8.23,17.15 9.13,17.5C9.76,17.76 10.41,17.93 11.06,18L12,18C12.68,18 13.35,17.91 14,17.73V19.25C13.33,19.5 12.67,19.67 12,19.75M12,2C12.33,2 12.67,2.03 13,2.08V5.83C12.67,5.91 12.33,6 12,6A8,8 0 0,0 4,14H2A10,10 0 0,1 12,2M17,2C18.13,2 19.27,2.19 20.33,2.58L22.23,1.17L23,2.4L21.23,4.5C22.97,6.54 24,9.17 24,12A10,10 0 0,1 14,22C13.67,22 13.33,21.97 13,21.92V20.83L14,20.88C14.89,20.77 15.76,20.47 16.54,19.96L16.94,19.67L17.5,19.83L18.33,20.17L18.83,18.67L18.17,18.17L17.67,17.83L17.37,17.37C17.12,16.58 16.67,15.87 16.04,15.36L15.54,15L15.5,14.33L15.17,13.17L13.67,13.67L13.17,14.42L13.54,15.17C13.87,15.61 14.03,16.13 14,16.67L13.88,17.67L13,17.83C11.15,18 9.44,17.39 8.17,16.17L7.75,15.75L8,15.17L8.67,14.17L7.33,13.33L6.17,14.17L5.92,14.83C5.54,14.31 5.27,13.73 5.12,13.13L5,12.5L5.58,12L7,11.83L7.33,10.33L5.67,10.17L5.08,10.5C5.46,8.75 6.67,7.26 8.33,6.58L8.63,6.5L9,6.83L10.17,8.33L11.17,7L10,5.33L9.58,5C10.33,4.92 11.12,5.03 11.84,5.34L12.67,5.83L13.33,5.25L14.17,4L13.25,2.75L13.83,2.42C14.87,2.14 15.94,2 17,2Z" />
    </svg>
  ),
  Lightning: () => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M11,15H6L13,1V9H18L11,23V15Z" />
    </svg>
  ),
  Monitoring: () => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M19,3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3M9,17H7V10H9V17M13,17H11V7H13V17M17,17H15V13H17V17Z" />
    </svg>
  ),
  Governance: () => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12,3L1,9L12,15L21,10.09V17H23V9M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z" />
    </svg>
  ),
  Storage: () => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M3,2H21A1,1 0 0,1 22,3V5A1,1 0 0,1 21,6H3A1,1 0 0,1 2,5V3A1,1 0 0,1 3,2M3,8H21A1,1 0 0,1 22,9V11A1,1 0 0,1 21,12H3A1,1 0 0,1 2,11V9A1,1 0 0,1 3,8M3,14H21A1,1 0 0,1 22,15V17A1,1 0 0,1 21,18H3A1,1 0 0,1 2,17V15A1,1 0 0,1 3,14M3,20H21A1,1 0 0,1 22,21V23A1,1 0 0,1 21,24H3A1,1 0 0,1 2,23V21A1,1 0 0,1 3,20Z" />
    </svg>
  )
};

const Features = () => {
  const features = [
    {
      title: 'Quantum Resistance',
      description: 'Falcon-based lattice cryptography provides protection against quantum computer attacks, future-proofing your assets.',
      icon: Icons.Quantum
    },
    {
      title: 'Advanced Security',
      description: 'Comprehensive security system implementing IP diversity, peer rotation, challenge-response mechanisms, and behavioral scoring.',
      icon: Icons.Security
    },
    {
      title: 'Environmental Tracking',
      description: 'Real-time emissions monitoring with geographical attribution, green mining incentives, and carbon offset treasury.',
      icon: Icons.Environment
    },
    {
      title: 'Lightning Network',
      description: 'Full implementation of payment channels with HTLC support, quantum-resistant security, and watchtower services.',
      icon: Icons.Lightning
    },
    {
      title: 'Comprehensive Monitoring',
      description: 'Complete blockchain metrics framework tracking network health, environmental impact, performance, and security.',
      icon: Icons.Monitoring
    },
    {
      title: 'Enhanced Storage System',
      description: 'Optimized disk storage with proper type handling, compression, and pruning capabilities for efficient blockchain data management.',
      icon: Icons.Storage
    }
  ];

  return (
    <section className={styles['features-section']} id="features">
      <div className={styles.container}>
        <div className={styles['section-header']}>
          <h2>Key Features</h2>
          <p>Supernova v0.9.0-BETA combines quantum security, environmental consciousness, and advanced networking features in a production-grade PoW blockchain. Mainnet launch targeted for Q3 2025.</p>
        </div>
        <div className={styles['features-grid']}>
          {features.map((feature, index) => (
            <div className={styles['feature-card']} key={index}>
              <div className={styles['feature-icon']}>
                {feature.icon && <feature.icon />}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 