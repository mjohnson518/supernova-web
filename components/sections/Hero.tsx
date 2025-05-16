import React from 'react';
import styles from './Hero.module.scss';
import { 
  Particles, 
  AuroraText, 
  TextAnimate, 
  LatticeLines, 
  SupernovaBurst,
  Nebula,
  NeutronStar 
} from '../ui';
import '../../styles/globals.scss';

// Helper function to create stars
const StarField = () => {
  // Generate 20 large stars and 30 small stars
  const largeStars = Array.from({ length: 20 }, (_, i) => ({
    id: `large-${i}`,
    size: 2 + Math.random() * 3,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    color: ['#4D84FF', '#00F5D4', '#6A3093', '#FF3366'][Math.floor(Math.random() * 4)],
    delay: Math.random() * 5,
    duration: 3 + Math.random() * 4,
  }));
  
  const smallStars = Array.from({ length: 30 }, (_, i) => ({
    id: `small-${i}`,
    size: 0.5 + Math.random() * 1.5,
    top: `${Math.random() * 100}%`,
    left: `${Math.random() * 100}%`,
    color: ['#4D84FF', '#00F5D4', '#6A3093', '#FFFFFF'][Math.floor(Math.random() * 4)],
    delay: Math.random() * 5,
    duration: 3 + Math.random() * 3,
  }));
  
  return (
    <div className={styles['star-field']}>
      {[...largeStars, ...smallStars].map(star => (
        <div
          key={star.id}
          className={styles.star}
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            top: star.top,
            left: star.left,
            backgroundColor: star.color,
            animationDelay: `${star.delay}s`,
            animationDuration: `${star.duration}s`,
          }}
        />
      ))}
    </div>
  );
};

const Hero = () => {
  return (
    <section className={styles['hero-section']} id="hero">
      {/* Nebula background effect */}
      <Nebula 
        className={styles['nebula-background']}
        opacity={0.3}
        density={8}
        speed={0.2}
      />
      
      {/* Star field with twinkling stars */}
      <StarField />
      
      {/* Lattice network visualization (quantum-resistant cryptography) */}
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
      
      {/* Interactive particles */}
      <Particles
        className={styles['interactive-particles']}
        quantity={80}
        staticity={40}
        ease={50}
        size={1.2}
      />
      
      {/* Background particles */}
      <Particles
        className={styles['background-particles']}
        quantity={40}
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
      
      {/* Supernova burst effect - no spinning, no repeating */}
      <SupernovaBurst 
        className={styles['supernova-burst']}
        burstColor="#FF3366"
        coreColor="#FFFFFF"
        particleCount={120}
        maxRadius={800}
        duration={10}
        repeating={false}
        intensity={0.4}
      />
      
      {/* Neutron stars (collapsed core representation) */}
      <NeutronStar 
        className={styles['neutron-star']}
        position={{ x: 75, y: 35 }}
        radius={4}
        pulseColor="#4D84FF"
        pulseFrequency={2.5}
      />
      
      <NeutronStar 
        className={styles['neutron-star-secondary']}
        position={{ x: 25, y: 65 }}
        radius={3}
        pulseColor="#00F5D4"
        pulseFrequency={1.8}
      />
      
      {/* Additional neutron stars */}
      <NeutronStar 
        className={styles['neutron-star-tertiary']}
        position={{ x: 15, y: 25 }}
        radius={2.5}
        pulseColor="#FF3366"
        pulseFrequency={2.2}
      />
      
      <NeutronStar 
        className={styles['neutron-star-quaternary']}
        position={{ x: 85, y: 75 }}
        radius={2}
        pulseColor="#6A3093"
        pulseFrequency={1.5}
      />

      <div className={styles['hero-content']}>
        <h1 className={styles.heading}>
          <AuroraText 
            speed={1.25}
            size="large"
            colors={["#4D84FF", "#00F5D4", "#6A3093", "#FF3366"]}
            glowOpacity={0.2}
          >
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