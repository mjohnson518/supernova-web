import React from 'react';
import styles from './MainLayout.module.scss';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className={styles['main-layout']}>
      <header className={styles.header}>
        <nav>
          <div className={styles.logo}>Supernova Blockchain</div>
          <ul className={styles['nav-links']}>
            <li><a href="#features">Features</a></li>
            <li><a href="#technology">Technology</a></li>
            <li><a href="#impact">Environmental Impact</a></li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer className={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Supernova Blockchain. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default MainLayout; 