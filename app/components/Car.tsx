import React from 'react';
import Link from 'next/link';
import styles from './Car.module.css';

const Car = () => {
  return (
    <div className={styles.teamContainer}>
      <Link href="/member?id=1">
        <div className={styles.member}>
          <img
            src="/pic1.png"
            alt="Member 1"
            className={styles.profilePic}
          />
          <h3>TOYOTA カローラ123</h3>
          <p>2,400,000円（税込）、JC08モード-WLTCモード33.6km/L、乗車定員5名</p>
        </div>
      </Link>
      <Link href="/member?id=2">
        <div className={styles.member}>
          <img
            src="/pic2.png"
            alt="Member 2"
            className={styles.profilePic}
          />
          <h3>TOYOTA カローラ123</h3>
          <p>2,400,000円（税込）、JC08モード-WLTCモード33.6km/L、乗車定員5名</p>
        </div>
      </Link>
      <Link href="/member?id=3">
        <div className={styles.member}>
          <img
            src="/pic3.png"
            alt="Member 3"
            className={styles.profilePic}
          />
          <h3>TOYOTA カローラ123</h3>
          <p>2,400,000円（税込）、JC08モード-WLTCモード33.6km/L、乗車定員5名</p>
        </div>
      </Link>
    </div>
  );
};

export default Car;
