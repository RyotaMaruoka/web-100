'use client';

import React, { FC } from 'react';
import Link from 'next/link';

import { Button, Typography } from '@material-tailwind/react';

const Profile = () => {
  return (
    <div id="member" className='bg-white m-8 text-center p-16'>
      <Typography variant='h3' className='mb-16'>プロフィール</Typography>
      <div className='flex flex-row justify-center gap-8 mb-16'>
        <Typography variant='h6'>ウォレットアドレス</Typography>
        <Typography variant='h6'>0dafdfasj3434dfa</Typography>
      </div>
      {/* <Typography>パスワード</Typography> */}
      <Link href="/">
        <Button>ホームに戻る</Button>
      </Link>
    </div>
  );
};

export default Profile;