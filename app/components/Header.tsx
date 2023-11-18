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
import { Box, Stack } from '@mui/material';

const Header = () => {
  const router = useRouter();
  const [user, setUser] = useRecoilState(userCollectionState);
  const { isLogin } = user;

  return (
    <Navbar fullWidth className="bg-gradient-to-r border-none">
      <Stack direction="row" spacing={1.5} justifyContent="flex-end" alignItems="center">
        {/* <Link href="/">
          <Image src="/060_vehicle-for-hire.png" alt="Logo" width={100} height={100} />
        </Link> */}
        <Link href="#about">
          <Typography
            color="black"
            variant="small"
            style={{
              fontWeight: 'bold',
            }}
          >
            About
          </Typography>
        </Link>
        <Link href="#car">
          <Typography
            color="black"
            variant="small"
            style={{
              fontWeight: 'bold',
            }}
          >
            Car
          </Typography>
        </Link>
        <Link href="#contact">
          <Typography
            color="black"
            variant="small"
            style={{
              fontWeight: 'bold',
            }}
          >
            Contact
          </Typography>
        </Link>
        <Box
          sx={{
            pl: 1,
          }}
        >
          {isLogin ? (
            <Button
              size="sm"
              onClick={() => {
                router.push('/profile');
              }}
            >
              Profile
            </Button>
          ) : (
            <Button
              size="sm"
              onClick={() => {
                router.push('/auth');
              }}
            >
              Login
            </Button>
          )}
        </Box>
      </Stack>
    </Navbar>
  );
};

export default Header;
