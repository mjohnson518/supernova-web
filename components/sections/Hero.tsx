import React from 'react';
import styles from './Hero.module.scss';
import { Particles } from '../ui/Particles';
import { AuroraText } from '../ui/AuroraText';
import { TextAnimate } from '../ui/TextAnimate';
import { LatticeLines } from '../ui/LatticeLines';

const Hero = () => {
  return (
    <section className={styles['hero-section']} id="hero">
      <div className={styles['star-particles']}>
        {[...Array(20)].map((_, i) => (
          <div key={i} className={styles.star}></div>
        ))}
      </div>
      <LatticeLines 
        className={styles['lattice-lines']}
        numPoints={40}
        lineColor="#00F5D4"
        lineOpacity={0.6}
        lineDuration={3.5}
        minDistance={100}
        maxDistance={350}
        connectionFrequency={0.15}
      />
      <Particles
        className={styles['interactive-particles']}
        quantity={120}
        staticity={40}
        ease={50}
        size={1.2}
      />
      <Particles
        className={styles['background-particles']}
        quantity={50}
        staticity={80}
        ease={30}
        size={0.6}
        vx={0.1}
        vy={-0.1}
        styles={{
          particles: {
            zIndex: 0,
            opacity: 0.6
          }
        }}
      />
      <div className={styles['hero-content']}>
        <h1 className={styles.heading}>
          <AuroraText speed={1.25}>
            Supernova
          </AuroraText>
          <TextAnimate 
            by="word" 
            delay={0.2} 
            duration={0.8} 
            as="span" 
            className={styles.subheading}
          >
            Advanced Security, Scalability, and Sustainability
          </TextAnimate>
        </h1>
        <p>
          A next-generation PoW blockchain combining quantum-resistant cryptography, 
          advanced security features, and environmental consciousness for a secure, 
          scalable, and sustainable decentralized future.
        </p>
        <div className={styles['cta-buttons']}>
          <a 
            href="https://github.com/mjohnson518/supernova" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles['primary-button']}
          >
            Get Started
          </a>
          <a href="#technology" className={styles['secondary-button']}>Explore Technology</a>
        </div>
      </div>
    </section>
  );
};

export default Hero; 