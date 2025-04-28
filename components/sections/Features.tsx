import React from 'react';
import styles from './Features.module.scss';

// Simple placeholder SVG icons
const Icons = {
  Quantum: () => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12,2C17.52,2 22,6.48 22,12C22,17.52 17.52,22 12,22C6.48,22 2,17.52 2,12C2,6.48 6.48,2 12,2M12,4C7.58,4 4,7.58 4,12C4,16.42 7.58,20 12,20C16.42,20 20,16.42 20,12C20,7.58 16.42,4 12,4M12,5C15.87,5 19,8.13 19,12C19,15.87 15.87,19 12,19C8.13,19 5,15.87 5,12C5,8.13 8.13,5 12,5M12,7C9.24,7 7,9.24 7,12C7,14.76 9.24,17 12,17C14.76,17 17,14.76 17,12C17,9.24 14.76,7 12,7M12,9C13.66,9 15,10.34 15,12C15,13.66 13.66,15 12,15C10.34,15 9,13.66 9,12C9,10.34 10.34,9 12,9M12,10C10.9,10 10,10.9 10,12C10,13.1 10.9,14 12,14C13.1,14 14,13.1 14,12C14,10.9 13.1,10 12,10Z" />
    </svg>
  ),
  Scale: () => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M17,22V20H20V17H22V20.5C22,20.89 21.84,21.24 21.54,21.54C21.24,21.84 20.89,22 20.5,22H17M7,22H3.5C3.11,22 2.76,21.84 2.46,21.54C2.16,21.24 2,20.89 2,20.5V17H4V20H7V22M17,2H20.5C20.89,2 21.24,2.16 21.54,2.46C21.84,2.76 22,3.11 22,3.5V7H20V4H17V2M7,2V4H4V7H2V3.5C2,3.11 2.16,2.76 2.46,2.46C2.76,2.16 3.11,2 3.5,2H7M13,17.25C13,17.66 12.66,18 12.25,18H11.75C11.34,18 11,17.66 11,17.25V16H13V17.25M13,14.75V15.5H11V14.75C11,14.34 11.34,14 11.75,14H12.25C12.66,14 13,14.34 13,14.75M16,15.5C16,15.91 15.66,16.25 15.25,16.25H14V14.75H15.25C15.66,14.75 16,15.09 16,15.5M10,15.5H8.75C8.34,15.5 8,15.16 8,14.75C8,14.34 8.34,14 8.75,14H10V15.5M14.25,13H9.75C9.34,13 9,12.66 9,12.25C9,11.84 9.34,11.5 9.75,11.5H14.25C14.66,11.5 15,11.84 15,12.25C15,12.66 14.66,13 14.25,13M15,11.25C15,11.66 14.66,12 14.25,12H12.75V10.75H14.25C14.66,10.75 15,11.09 15,11.5V11.25M9,10.5H10.5V12H9.25C8.84,12 8.5,11.66 8.5,11.25C8.5,10.84 8.84,10.5 9.25,10.5H9M11.75,9H12.25C12.66,9 13,9.34 13,9.75V10.5H11V9.75C11,9.34 11.34,9 11.75,9M8.75,9H9.25C9.66,9 10,9.34 10,9.75V10.5H8V9.75C8,9.34 8.34,9 8.75,9M16,9.75C16,10.16 15.66,10.5 15.25,10.5H13.75V9.75C13.75,9.34 14.09,9 14.5,9H15.25C15.66,9 16,9.34 16,9.75Z" />
    </svg>
  ),
  Environment: () => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M12,22C10.93,22 9.86,21.83 8.85,21.5H7.5L7.27,21L6.5,20.5C5.87,20.17 5.28,19.78 4.73,19.33L4.25,19L3.75,19.25L3,19.5L2.5,18L3,17.5L3.5,17L3.5,16.5C3.17,15.87 2.94,15.22 2.79,14.55L2.63,13.88L2.22,13.65L1.5,13L2,12L3,11.5L3.93,11.65L4.27,12.13C4.61,13.59 5.43,14.96 6.67,16C7.39,16.65 8.23,17.15 9.13,17.5C9.76,17.76 10.41,17.93 11.06,18L12,18C12.68,18 13.35,17.91 14,17.73V19.25C13.33,19.5 12.67,19.67 12,19.75M12,2C12.33,2 12.67,2.03 13,2.08V5.83C12.67,5.91 12.33,6 12,6A8,8 0 0,0 4,14H2A10,10 0 0,1 12,2M17,2C18.13,2 19.27,2.19 20.33,2.58L22.23,1.17L23,2.4L21.23,4.5C22.97,6.54 24,9.17 24,12A10,10 0 0,1 14,22C13.67,22 13.33,21.97 13,21.92V20.83L14,20.88C14.89,20.77 15.76,20.47 16.54,19.96L16.94,19.67L17.5,19.83L18.33,20.17L18.83,18.67L18.17,18.17L17.67,17.83L17.37,17.37C17.12,16.58 16.67,15.87 16.04,15.36L15.54,15L15.5,14.33L15.17,13.17L13.67,13.67L13.17,14.42L13.54,15.17C13.87,15.61 14.03,16.13 14,16.67L13.88,17.67L13,17.83C11.15,18 9.44,17.39 8.17,16.17L7.75,15.75L8,15.17L8.67,14.17L7.33,13.33L6.17,14.17L5.92,14.83C5.54,14.31 5.27,13.73 5.12,13.13L5,12.5L5.58,12L7,11.83L7.33,10.33L5.67,10.17L5.08,10.5C5.46,8.75 6.67,7.26 8.33,6.58L8.63,6.5L9,6.83L10.17,8.33L11.17,7L10,5.33L9.58,5C10.33,4.92 11.12,5.03 11.84,5.34L12.67,5.83L13.33,5.25L14.17,4L13.25,2.75L13.83,2.42C14.87,2.14 15.94,2 17,2Z" />
    </svg>
  ),
  Connect: () => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M16,20H8V6H16M16.67,4H15V2H9V4H7.33A1.33,1.33 0 0,0 6,5.33V20.67C6,21.4 6.6,22 7.33,22H16.67A1.33,1.33 0 0,0 18,20.67V5.33C18,4.6 17.4,4 16.67,4Z" />
    </svg>
  )
};

const Features: React.FC = () => {
  const features = [
    {
      title: 'Quantum Resistance',
      description: 'Built from the ground up with lattice-based cryptography to withstand quantum computing attacks.',
      icon: Icons.Quantum
    },
    {
      title: 'Scalability',
      description: 'Process thousands of transactions per second with minimal latency through our innovative consensus mechanism.',
      icon: Icons.Scale
    },
    {
      title: 'Energy Efficient',
      description: 'Designed with sustainability in mind, using a fraction of traditional blockchain energy consumption.',
      icon: Icons.Environment
    },
    {
      title: 'Interoperability',
      description: 'Seamlessly connect with other blockchain networks and traditional systems through our cross-chain bridges.',
      icon: Icons.Connect
    }
  ];

  return (
    <section className={styles['features-section']} id="features">
      <div className={styles.container}>
        <div className={styles['section-header']}>
          <h2>Key Features</h2>
          <p>Supernova combines cutting-edge cryptography with sustainable design to create a blockchain that's ready for tomorrow's challenges.</p>
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