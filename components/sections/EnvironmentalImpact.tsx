import React from 'react';
import styles from './EnvironmentalImpact.module.scss';

const EnvironmentalImpact: React.FC = () => {
  return (
    <section className={styles['environmental-impact-section']} id="impact">
      <h2>Environmental Impact</h2>
      <div className={styles['impact-content']}>
        <div className={styles['impact-stats']}>
          <div className={styles['stat-card']}>
            <h3>99%</h3>
            <p>Less energy than traditional proof-of-work blockchains</p>
          </div>
          <div className={styles['stat-card']}>
            <h3>Carbon Neutral</h3>
            <p>Through renewable energy partnerships and carbon offsets</p>
          </div>
          <div className={styles['stat-card']}>
            <h3>Sustainable Growth</h3>
            <p>Designed to scale without increasing environmental impact</p>
          </div>
        </div>
        <div className={styles['impact-description']}>
          <p>
            At Supernova, we believe blockchain technology can thrive without 
            compromising our environment. Our innovative consensus mechanism 
            drastically reduces energy consumption while maintaining security and
            decentralization.
          </p>
          <p>
            We're committed to leading the industry toward a more sustainable 
            future, proving that performance and environmental responsibility 
            can go hand in hand.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EnvironmentalImpact; 