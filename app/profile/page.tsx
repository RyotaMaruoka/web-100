import React, { FC } from 'react';
import styles from './profile.module.css';
import Link from 'next/link';


const Profile: FC = () => {
  return (
    <div>
      <h1>プロフィール</h1>
      <h3>ウォレットアドレス</h3>
      <h3>パスワード</h3>
      <Link href="/profile">
        {/* ホーム画面への戻り方がわからず、代わりにProfileに飛ぶようにしてます */}
        <button>ホームに戻る</button>
      </Link>
    </div>
  );
};

export default Profile;
