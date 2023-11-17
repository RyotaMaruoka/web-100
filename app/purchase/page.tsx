'use client'

import React, { FC } from 'react';
import Link from 'next/link';

import { Button, Typography } from '@material-tailwind/react';


const purchase: FC = () => {
  return (
    <div id="purchase" className='bg-white m-8 text-center p-16'>
      <Typography variant='h3' className='mb-16'>
        ご購入ありがとうございました
      </Typography>
      <Typography variant='h4' className='mb-16'>
        ご購入いただいた車のNFTは即時発行し、ご登録いただいたウォレットに送付させていただきます。
      </Typography>
      <Typography variant='h4' className='mb-16'>
        Enjoy your car life!
      </Typography>
      <Link href="/">
        <Button>ホームに戻る</Button>
      </Link>
    </div>
  );
};

export default purchase;
