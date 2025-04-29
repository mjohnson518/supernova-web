import React from 'react';
import styles from './Technology.module.scss';
import Image from 'next/image';

const Technology: React.FC = () => {
  return (
    <section className={styles['technology-section']} id="technology">
      <h2>Core Technology</h2>
      <div className={styles['technology-content']}>
        <div className={styles['technology-info']}>
          <h3>Next-Generation Blockchain Architecture</h3>
          <p>
            Supernova introduces a revolutionary approach to blockchain technology,
            combining a high-performance proof-of-work mechanism with innovative
            consensus protocols designed for security, scalability, and sustainability.
          </p>
          
          <h3>Advanced Security Framework</h3>
          <p>
            Our multi-layered security system includes post-quantum cryptography, 
            comprehensive attack mitigation, and an advanced peer reputation system 
            to protect against both current and future threats.
          </p>
          
          <h3>Environmental Impact Tracking</h3>
          <p>
            Supernova leads the industry with built-in emissions tracking, renewable 
            energy verification, and a dedicated environmental treasury to ensure 
            blockchain growth remains environmentally responsible.
          </p>
          
          <h3>Comprehensive API System</h3>
          <p>
            Our production-grade API architecture offers both RESTful and JSON-RPC 
            interfaces with extensive documentation, client libraries, and comprehensive 
            testing to ensure seamless integration for developers.
          </p>
        </div>
        <div className={styles['technology-visual']}>
          <div className={styles['quantum-lattice-container']}>
            <img 
              src="/images/quantum-lattice.svg" 
              alt="Quantum Lattice Visualization"
              className={styles['quantum-lattice']}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology; 