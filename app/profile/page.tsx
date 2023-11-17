import React, { FC } from 'react';
import Link from 'next/link';

import { Button, Typography } from '@material-tailwind/react';

const Profile = () => {
  return (
    <div>
      <Typography>プロフィール</Typography>
      <Typography>ウォレットアドレス</Typography>
      <Typography>パスワード</Typography>
      <Link href="/profile">
        {/* ホーム画面への戻り方がわからず、代わりにProfileに飛ぶようにしてます */}
        <button>ホームに戻る</button>
      </Link>
    </div>
  );
};

export default Profile;