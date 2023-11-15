import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <h1>車の分割所有をNFTで</h1>
      <h2>Not A CarはNFTによって車の分割所有ができる唯一のプラットフォームです</h2>
      <button className={styles.purchaseButton}>すぐに購入</button>
    </div>
  );
};

export default About;
