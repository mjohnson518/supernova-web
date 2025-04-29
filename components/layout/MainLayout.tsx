"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './MainLayout.module.scss';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
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

  useEffect(() => {
    // Close dropdown when clicking outside
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuOpen && !(event.target as Element).closest(`.${styles['mobile-menu']}`) && 
          !(event.target as Element).closest(`.${styles['hamburger-menu-button']}`)) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const currentYear = new Date().getFullYear();

  return (
    <div className={styles['main-layout']}>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
        <nav>
          <div className={styles.logo}>
            <Link href="/" style={{cursor: 'pointer'}}>Supernova</Link>
          </div>
          <ul className={styles['nav-links']}>
            <li><a href="#features">Features</a></li>
            <li><a href="#technology">Technology</a></li>
            <li><a href="#impact">Environmental Impact</a></li>
            <li><Link href="/docs">Documentation</Link></li>
          </ul>
          <button 
            className={styles['hamburger-menu-button']} 
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </nav>
        {mobileMenuOpen && (
          <div className={styles['mobile-menu']}>
            <ul>
              <li><a href="#features">Features</a></li>
              <li><a href="#technology">Technology</a></li>
              <li><a href="#impact">Environmental Impact</a></li>
              <li className={styles.divider}></li>
              <li><Link href="/docs">All Documentation</Link></li>
              <li><Link href="/docs/overview">Overview</Link></li>
              <li><Link href="/docs/technical-docs">Technical Docs</Link></li>
              <li><Link href="/docs/developers">Developer Guide</Link></li>
              <li><Link href="/docs/node-operation">Node Operation</Link></li>
              <li><Link href="/docs/environmental">Environmental</Link></li>
              <li><Link href="/docs/governance">Governance</Link></li>
              <li><Link href="/docs/api-reference">API Reference</Link></li>
              <li><Link href="/docs/core">Core Reference</Link></li>
            </ul>
          </div>
        )}
      </header>

      <main>{children}</main>

      <footer className={styles.footer}>
        <div className={styles['footer-content']}>
          <div className={styles['footer-column']}>
            <h4>Supernova</h4>
            <p>A next-generation blockchain prioritizing security, scalability, and environmental sustainability.</p>
          </div>
          <div className={styles['footer-column']}>
            <h4>Resources</h4>
            <ul>
              <li><a href="/whitepaper">Whitepaper</a></li>
              <li><Link href="/docs">Documentation</Link></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/faq">FAQ</a></li>
            </ul>
          </div>
          <div className={styles['footer-column']}>
            <h4>Community</h4>
            <ul>
              <li><a href="https://discord.gg/7WcHAnRT" target="_blank" rel="noopener noreferrer">Discord</a></li>
              <li><a href="https://telegram.org" target="_blank" rel="noopener noreferrer">Telegram</a></li>
              <li><a href="https://github.com/mjohnson518/supernova" target="_blank" rel="noopener noreferrer">GitHub</a></li>
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