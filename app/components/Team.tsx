import React from 'react';
import Link from 'next/link';
import styles from './Team.module.css';

const Team = () => {
  return (
    <div className={styles.teamContainer}>
      <Link href="/member?id=1">
        <div className={styles.member}>
          <img
            src="/5041bcd55df515cf10de7204887a4ad6_t.jpeg"
            alt="Member 1"
            className={styles.profilePic}
          />
          <h3>メンバー名 1</h3>
          <p>メンバー 1 の説明文。</p>
        </div>
      </Link>
      <Link href="/member?id=2">
        <div className={styles.member}>
          <img
            src="/6e912d872ab6c82767ba318b000c5273_t.jpeg"
            alt="Member 2"
            className={styles.profilePic}
          />
          <h3>メンバー名 2</h3>
          <p>メンバー 2 の説明文。</p>
        </div>
      </Link>
      <Link href="/member?id=3">
        <div className={styles.member}>
          <img
            src="/d3902a1cc7d317e26d71efc645791fa5_t.jpeg"
            alt="Member 3"
            className={styles.profilePic}
          />
          <h3>メンバー名 3</h3>
          <p>メンバー 3 の説明文。</p>
        </div>
      </Link>
    </div>
  );
};

export default Team;
