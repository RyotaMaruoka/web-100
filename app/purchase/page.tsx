import React, { FC } from 'react';
import styles from './purchase.module.css';
import Link from 'next/link';

const purchase: FC = () => {
  return (
    
    <div id="purchase" className={styles.purchaseContainer}>
      <h1>ご購入ありがとうございました</h1>
      <h3>ご購入いただいた車のNFTは即時発行し、ご登録いただいたウォレットに送付させていただきます。</h3>
      <h3>Enjoy your car life!</h3>
      <Link href="/profile">
        {/* ホーム画面への戻り方がわからず、代わりにProfileに飛ぶようにしてます */}
        <button>ホームに戻る</button>
      </Link>
    </div>
  );
};

export default purchase;
