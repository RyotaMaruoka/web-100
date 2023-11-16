import Link from 'next/link';
import React from 'react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <Link href="/">
        <div className={styles.logoLink}>
          <img src="/060_vehicle-for-hire.png" alt="Logo" style={{ height: '50px' }} />
        </div>
      </Link>
      <div className={styles.navSection}>
        <Link href="#about">
          <span className={styles.navLink}>About</span>
        </Link>
        <Link href="#team">
          <span className={styles.navLink}>Team</span>
        </Link>
        <Link href="#contact">
          <span className={styles.navLink}>Contact</span>
        </Link>
        <Link href="/profile">
          <span className={styles.navLink}>
            <button>Profile</button>
          </span>
        </Link>
      </div>
    </header>
  );
};

export default Header;
