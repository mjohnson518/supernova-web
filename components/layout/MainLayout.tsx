"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './MainLayout.module.scss';
import { usePathname } from 'next/navigation';
import '../../styles/globals.scss'; // Ensure global styles are loaded
import PolicyProvider from '../ui/PolicyProvider';
import PolicyButton from '../ui/PolicyButton';

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu on navigation
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const currentYear = new Date().getFullYear();

  return (
    <PolicyProvider>
      <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
        <div className={styles['main-layout']}>
          <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
            <nav>
              <div className={styles.logo}>
                <Link href="/" style={{cursor: 'pointer'}}>Supernova</Link>
              </div>
              
              {/* Only show the hamburger menu button */}
              <button 
                className={styles['hamburger-menu-button']} 
                onClick={toggleMobileMenu}
                aria-label="Toggle menu"
              >
                ☰
              </button>
            </nav>
            
            {/* Mobile menu contains all navigation items */}
            {mobileMenuOpen && (
              <div className={styles['mobile-menu']}>
                <ul>
                  <li><Link href="/#features">Features</Link></li>
                  <li><Link href="/#technology">Technology</Link></li>
                  <li><Link href="/#impact">Environmental Impact</Link></li>
                  <li><Link href="/roadmap">Roadmap</Link></li>
                  
                  {/* Documentation Header & Links */}
                  <li className={styles.divider}></li>
                  <li className={styles.appHeader}>
                    <Link href="https://supernovanetwork.xyz/docs" target="_blank" rel="noopener noreferrer">
                      Documentation
                    </Link>
                  </li>
                  <li className={styles.subItem}>
                    <Link href="https://supernovanetwork.xyz/docs/overview" target="_blank" rel="noopener noreferrer">
                      Overview
                    </Link>
                  </li>
                  <li className={styles.subItem}>
                    <Link href="https://supernovanetwork.xyz/docs/technical-docs" target="_blank" rel="noopener noreferrer">
                      Technical Docs
                    </Link>
                  </li>
                  <li className={styles.subItem}>
                    <Link href="https://supernovanetwork.xyz/docs/developers" target="_blank" rel="noopener noreferrer">
                      Developer Guide
                    </Link>
                  </li>
                  <li className={styles.subItem}>
                    <Link href="https://supernovanetwork.xyz/docs/node-operation" target="_blank" rel="noopener noreferrer">
                      Node Operation
                    </Link>
                  </li>
                  
                  {/* Apps Section */}
                  <li className={styles.divider}></li>
                  <li className={styles.appHeader}>Supernova Apps</li>
                  <li className={styles.appItem}>
                    <Link href="https://testnet.supernovanetwork.xyz" target="_blank" rel="noopener noreferrer">
                      Testnet & Faucet
                    </Link>
                  </li>
                  <li className={styles.appItem}>
                    <Link href="https://explorer.supernovanetwork.xyz" target="_blank" rel="noopener noreferrer">
                      NovaScan Block Explorer
                    </Link>
                  </li>
                  <li className={styles.appItem}>
                    <Link href="https://status.supernovanetwork.xyz" target="_blank" rel="noopener noreferrer">
                      Network Status
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </header>

          <main className={styles.main}>{children}</main>

          <footer className={styles.footer}>
            <div className={styles['footer-content']}>
              <div className={styles['footer-column']}>
                <h4>Supernova</h4>
                <p>A next-generation blockchain prioritizing security, scalability, and environmental sustainability.</p>
              </div>
              <div className={styles['footer-column']}>
                <h4>Resources</h4>
                <ul>
                  <li><Link href="/roadmap">Roadmap</Link></li>
                  <li><Link href="https://supernovanetwork.xyz/docs" target="_blank" rel="noopener noreferrer">Documentation</Link></li>
                  <li><Link href="/blog">Blog</Link></li>
                  <li><Link href="/faq">FAQ</Link></li>
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
                  <li><PolicyButton type="terms" className={styles.footerLink} /></li>
                  <li><PolicyButton type="privacy" className={styles.footerLink} /></li>
                  <li><PolicyButton type="cookies" className={styles.footerLink} /></li>
                </ul>
              </div>
            </div>
            <div className={styles['footer-bottom']}>
              <p>&copy; {currentYear} Supernova Blockchain. All rights reserved.</p>
            </div>
          </footer>
        </div>
      </div>
    </PolicyProvider>
  );
} 