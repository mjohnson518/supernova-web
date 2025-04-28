import React from 'react';
import styles from './Technology.module.scss';

const Technology: React.FC = () => {
  return (
    <section className={styles['technology-section']} id="technology">
      <h2>Our Technology</h2>
      <div className={styles['technology-content']}>
        <div className={styles['technology-info']}>
          <h3>Next-Generation Blockchain</h3>
          <p>
            Supernova introduces a revolutionary approach to blockchain technology,
            combining the best aspects of proof-of-work with innovative consensus
            mechanisms that ensure security, scalability, and sustainability.
          </p>
          <h3>Post-Quantum Cryptography</h3>
          <p>
            Our blockchain employs lattice-based cryptography, resistant to attacks
            from quantum computers, ensuring long-term security for your digital assets.
          </p>
        </div>
        <div className={styles['technology-visual']}>
          {/* Placeholder for technology visual/diagram */}
          <div className={styles['tech-diagram-placeholder']}></div>
        </div>
      </div>
    </section>
  );
};

export default Technology; 