import React from 'react';
import styles from './Team.module.css'; // ここでCSSモジュールをインポート

const Team = () => {
  return (
    <div className={styles.teamContainer}>
      <div className={styles.member}>
        <img src="/images/profilepic1.png" alt="Member 1" className={styles.profilePic} />
        <h3>メンバー名 1</h3>
        <p>メンバー 1 の説明文。</p>
      </div>
      <div className={styles.member}>
        <img src="/images/profilepic2.png" alt="Member 2" className={styles.profilePic} />
        <h3>メンバー名 2</h3>
        <p>メンバー 2 の説明文。</p>
      </div>
      <div className={styles.member}>
        <img src="/images/profilepic3.png" alt="Member 3" className={styles.profilePic} />
        <h3>メンバー名 3</h3>
        <p>メンバー 3 の説明文。</p>
      </div>
    </div>
  );
};

export default Team;
