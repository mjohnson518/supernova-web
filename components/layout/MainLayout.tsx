"use client";

import React, { useState, useEffect } from 'react';
import styles from './MainLayout.module.scss';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const currentYear = new Date().getFullYear();

  return (
    <div className={styles['main-layout']}>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
        <nav>
          <div className={styles.logo}>Supernova</div>
          <ul className={styles['nav-links']}>
            <li><a href="#features">Features</a></li>
            <li><a href="#technology">Technology</a></li>
            <li><a href="#impact">Environmental Impact</a></li>
            <li><a href="#roadmap">Roadmap</a></li>
            <li><a href="#team">Team</a></li>
          </ul>
          <button 
            className={styles['mobile-menu-button']} 
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            ☰
          </button>
        </nav>
      </header>

      <main>{children}</main>

      <footer className={styles.footer}>
        <div className={styles['footer-content']}>
          <div className={styles['footer-column']}>
            <h4>Supernova</h4>
            <p>A quantum-resistant blockchain built for tomorrow&apos;s challenges.</p>
          </div>
          <div className={styles['footer-column']}>
            <h4>Resources</h4>
            <ul>
              <li><a href="/whitepaper">Whitepaper</a></li>
              <li><a href="/docs">Documentation</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/faq">FAQ</a></li>
            </ul>
          </div>
          <div className={styles['footer-column']}>
            <h4>Community</h4>
            <ul>
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              <li><a href="https://discord.com" target="_blank" rel="noopener noreferrer">Discord</a></li>
              <li><a href="https://telegram.org" target="_blank" rel="noopener noreferrer">Telegram</a></li>
              <li><a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            </ul>
          </div>
          <div className={styles['footer-column']}>
            <h4>Legal</h4>
            <ul>
              <li><a href="/terms">Terms of Service</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/cookies">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        <div className={styles['footer-bottom']}>
          <p>&copy; {currentYear} Supernova Blockchain. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout; 