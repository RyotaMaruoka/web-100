'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { Button, Typography, Navbar } from '@material-tailwind/react';
import { useRecoilState } from 'recoil';
import { userCollectionState } from '../_features/hooks/state/UserCollectionState';
import { useRouter } from 'next/navigation';
import { useSDK } from '@metamask/sdk-react';
import { query, collection, getDocs } from 'firebase/firestore';
import { DbCollectionEnum } from '../_features/DB/Dbcollection';
import { db } from '../_features/lib/firebase';

const Header = () => {
  const router = useRouter();
  const [user, setUser] = useRecoilState(userCollectionState);
  const { isLogin } = user;

  return (
    <Navbar fullWidth className="bg-gray-900 bg-gradient-to-r border-none">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/">
          <Image src="/060_vehicle-for-hire.png" alt="Logo" width={100} height={100} />
        </Link>
        <div className="flex gap-4 items-center">
          <div className="flex gap-2">
            <Link href="#about">
              <Typography color="black" variant="h6">
                About
              </Typography>
            </Link>
            <Link href="#car">
              <Typography color="black" variant="h6">
                Car
              </Typography>
            </Link>
            <Link href="#contact">
              <Typography color="black" variant="h6">
                Contact
              </Typography> 
            </Link>
          </div>
          {isLogin ? (
            <Button
              onClick={() => {
                router.push('/profile');
              }}
            >
              Profile
            </Button>
          ) : (
            <Button
              onClick={() => {
                router.push('/auth');
              }}
            >
              Login
            </Button>
          )}
        </div>
      </div>
    </Navbar>
  );
};

export default Header;
