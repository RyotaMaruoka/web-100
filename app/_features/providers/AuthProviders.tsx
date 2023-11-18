'use client';

import { FC, ReactNode, use } from 'react';
import { useSDK } from '@metamask/sdk-react';
import { addDoc, collection, getDocs, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { Button, Typography } from '@material-tailwind/react';
import { useRouter } from 'next/navigation';
import { useRecoilState } from 'recoil';
import { userCollectionState } from '../hooks/state/UserCollectionState';
import { db } from '../lib/firebase';
import { DbCollectionEnum } from '../DB/Dbcollection';

type Props = {
  children: ReactNode;
};

export const AuthProviders: FC<Props> = ({ children }) => {
  const [user, setUser] = useRecoilState(userCollectionState);
  const { sdk, connected, connecting, provider, chainId } = useSDK();

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
        setUser({
          isLogin: true,
          accountId: data.accountId,
          chainId: data.chainId,
          name: data.name,
          mail: data.mail,
          isHavingNFT: data.isHavingNFT,
        });
      });
    } catch (e) {
      console.warn(`failed to connect..`, e);
    }
  };

  /**
   * login check
   */
  useEffect(() => {
    handleConnecting();
  }, []);

  return <>{children}</>;
};
