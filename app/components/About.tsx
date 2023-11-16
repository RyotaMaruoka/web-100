import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <div id="about" className={styles.aboutContainer}>
      <h2>Not a Car</h2>
      <h1>偶然を、ドライブする日に...</h1>
      <img src="/saigai_suigai_car.png" alt="Logo" style={{ height: '150px' }} />
      <p>"Not A Carは、NFT技術を活用して車の分割所有を実現する独特のプラットフォームです。このシステムでは、高価な車両がデジタル証明書に変換され、複数のオーナーによって共有されます。ブロックチェーン技術により、取引の透明性と安全性が保証され、オーナーは共有車両の利用と管理を容易に行えます。Not A Carは、自動車愛好家や投資家にとって新しい車の所有の形を提供し、車の楽しみ方を再定義しています。"</p>
    </div>
  );
};

export default About;
