import React from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <div className={styles.contactContainer}>
      <h1>お問い合わせ</h1>
      <p>お問い合わせに関しましては以下のフォームからお願いします。</p>
      <button className={styles.contactButton}>フォームはこちらから</button>
    </div>
  );
};

export default Contact;
