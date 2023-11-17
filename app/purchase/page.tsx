import React, { FC } from 'react';
import Link from 'next/link';

import { Button, Typography } from '@material-tailwind/react';


const purchase: FC = () => {
  return (
    
    <div id="purchase">
      <Typography>ご購入ありがとうございました</Typography>
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
