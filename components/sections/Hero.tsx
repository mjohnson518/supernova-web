import React from 'react';
import styles from './Hero.module.scss';

const Hero: React.FC = () => {
  return (
    <section className={styles['hero-section']} id="hero">
      <div className={styles['hero-content']}>
        <h1>Welcome to Supernova Blockchain</h1>
        <p>A next-generation PoW blockchain built for tomorrow's challenges</p>
        <div className={styles['cta-buttons']}>
          <button className={styles['primary-button']}>Get Started</button>
          <button className={styles['secondary-button']}>Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default Hero; 