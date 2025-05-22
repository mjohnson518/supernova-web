import React from 'react';
import styles from './EnvironmentalImpact.module.scss';

const EnvironmentalImpact = () => {
  return (
    <section className={styles['environmental-impact-section']} id="impact">
      <h2>Environmental Impact</h2>
      <div className={styles['impact-content']}>
        <div className={styles['impact-stats']}>
          <div className={styles['stat-card']}>
            <h3>Real-Time Tracking</h3>
            <p>Comprehensive emissions monitoring with geographical attribution</p>
          </div>
          <div className={styles['stat-card']}>
            <h3>Impact Reduction</h3>
            <p>Green mining incentives and renewable energy verification</p>
          </div>
          <div className={styles['stat-card']}>
            <h3>Environmental Treasury</h3>
            <p>Transaction fees fund verifiable carbon offset projects</p>
          </div>
        </div>
        <div className={styles['impact-description']}>
          <p>
            Supernova acknowledges the energy requirements of proof-of-work 
            while implementing concrete measures to mitigate environmental impact. 
            Our system tracks energy consumption, incentivizes renewable sources, 
            and maintains a transparent environmental treasury.
          </p>
          <p>
            Through our fee allocation system, miners using verified renewable 
            energy receive higher rewards, creating a measurable shift toward 
            greener operations while preserving the security and decentralization 
            benefits of proof-of-work.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EnvironmentalImpact; 