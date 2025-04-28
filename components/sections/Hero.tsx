import React from 'react';
import styles from './Hero.module.scss';

const Hero: React.FC = () => {
  return (
    <section className={styles['hero-section']} id="hero">
      <div className={styles['hero-content']}>
        <h1>
          Supernova Blockchain
          <span>The Future of PoW Blockchains</span>
        </h1>
        <p>
          Powered by advanced cryptography and designed with sustainability at its core, 
          Supernova is building the infrastructure for a secure, scalable, and eco-friendly
          decentralized future.
        </p>
        <div className={styles['cta-buttons']}>
          <button className={styles['primary-button']}>Get Started</button>
          <button className={styles['secondary-button']}>Explore Technology</button>
        </div>
      </div>
    </section>
  );
};

export default Hero; 