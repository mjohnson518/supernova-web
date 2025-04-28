import React from 'react';
import styles from './Features.module.scss';

const Features: React.FC = () => {
  const features = [
    {
      title: 'Scalability',
      description: 'Process thousands of transactions per second with minimal latency'
    },
    {
      title: 'Energy Efficient',
      description: 'Designed with sustainability in mind, using a fraction of traditional blockchain energy'
    },
    {
        title: 'Quantum Resistance',
        description: 'Built from the ground up to withstand quantum computing attacks'
      },
    {
      title: 'Interoperability',
      description: 'Seamlessly connect with other blockchain networks and traditional systems'
    }
  ];

  return (
    <section className={styles['features-section']} id="features">
      <h2>Key Features</h2>
      <div className={styles['features-grid']}>
        {features.map((feature, index) => (
          <div className={styles['feature-card']} key={index}>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features; 