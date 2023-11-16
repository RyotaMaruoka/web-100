import React, { FC } from 'react';
import styles from './purchase.module.css';

const purchase: FC = () => {
  return (
    <div id="purchase" className={styles.purchaseContainer}>
      <h1>車の分割所有をNFTで</h1>
      <h3>Not A CarはNFTによって車の分割所有ができる唯一のプラットフォームです</h3>
    </div>
  );
};

export default purchase;
