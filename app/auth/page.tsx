'use client';

import { useSDK } from '@metamask/sdk-react';
import { addDoc, collection, getDocs, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { db } from '../_features/lib/firebase';
import { useInputHandler } from '../_features/hooks/useInputHandler';
import { DbCollectionEnum } from '../_features/DB/Dbcollection';
import { UsersCollectionType } from '../_features/DB/UsersCollectionType';
import { ChainEnum } from '../_features/const/ChainEnum';
import { Button, Typography } from '@material-tailwind/react';
import { useRouter } from 'next/navigation';
import { useRecoilState } from 'recoil';
import { userCollectionState } from '../_features/hooks/state/UserCollectionState';

const App = () => {
  const router = useRouter();
  const [user, setUser] = useRecoilState(userCollectionState);
  /**
   * input管理
   */
  const [name, handleName, setName] = useInputHandler('');
  const [mail, handleMail, setMail] = useInputHandler('');

  /**
   * ローカルのアカウント情報管理
   */
  const [accountId, setAccountId] = useState<string>();
  const { sdk, connected, connecting, provider, chainId } = useSDK();
  // 既にアカウント作成済み
  const [isCreatedAccount, setIsCreatedAccount] = useState<boolean>(false);

  /**
   * ウォレットへとの接続処理
   */
  const handleConnecting = async () => {
    try {
      const accounts: any = await sdk?.connect();
      const loginAccountId = accounts?.[0];

      const isSuccessful = loginAccountId ? true : false;
      if (!isSuccessful || loginAccountId === '') return;

      const q = query(collection(db, DbCollectionEnum.USERS_COLLECTION));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        if (data.accountId !== loginAccountId) return;
        setIsCreatedAccount(true);
      });

      if (!loginAccountId || !chainId) return;
      const setValue: UsersCollectionType = {
        accountId: loginAccountId,
        chainId: chainId as ChainEnum,
        name: name,
        mail: mail,
      };
      setUser({
        ...setValue,
        isLogin: true,
      });

      if (!isCreatedAccount) {
        await addDoc(collection(db, DbCollectionEnum.USERS_COLLECTION), setValue);
      }
      router.push('/');
    } catch (e) {
      console.warn(`failed to connect..`, e);
    }
  };

  // useEffect(() => {
  //   if (!accountId) return;
  //   try {
  //     (async () => {
  //       const q = query(collection(db, DbCollectionEnum.USERS_COLLECTION));
  //       const querySnapshot = await getDocs(q);
  //       querySnapshot.forEach((doc) => {
  //         const data = doc.data();
  //         if (data.accountId !== accountId) return;
  //         setName(data.name);
  //         setMail(data.mail);
  //       });
  //     })();
  //   } catch (e) {
  //     console.error(e);
  //   }
  // }, [accountId]);

  if (user.isLogin)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <Button
          onClick={() => {
            router.push('/');
          }}
        >
          <Typography variant="h6">
            アカウント作成済み
            <br />
            {name}:{mail}
            <br />
            トップへ戻る
          </Typography>
        </Button>
      </div>
    );

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Create Account</h2>
          <div className="mt-8 space-y-6">
            <input type="hidden" name="remember" value="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  ユーザ名
                </label>
                <input
                  id="email-address"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="ユーザ名"
                  value={name}
                  onChange={handleName}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  メールアドレス
                </label>
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="メールアドレス"
                  value={mail}
                  onChange={handleMail}
                />
              </div>
            </div>

            <div
              style={{
                paddingBottom: '30px',
                borderBottom: '2px solid #e5e7eb',
              }}
            >
              <button
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={handleConnecting}
                disabled={connecting}
              >
                サインイン
              </button>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-sm">既にアカウントをお持ちですか？</div>
            </div>
            <div>
              <button
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={handleConnecting}
                disabled={connecting}
              >
                ログイン
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
