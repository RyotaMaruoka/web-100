import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { Button, Typography, Navbar } from '@material-tailwind/react';


const Header = () => {
  const login = true;  // 一旦

  return (
    <Navbar color="light-blue" fullWidth className="bg-gradient-to-r">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/">
          <Image src="/060_vehicle-for-hire.png" alt="Logo" width={100} height={100} />
        </Link>
        <div className='flex gap-4 items-center'>
          <div className='flex gap-2'>
            <Link href="#about">
              <Typography color='black' variant='h6'>About</Typography>
            </Link>
            <Link href="#car">
              <Typography color='black' variant='h6'>Car</Typography>
            </Link>
            <Link href="#contact">
              <Typography color='black' variant='h6'>Contact</Typography>
            </Link>
          </div>
          {login ? (
            <Link href="/profile">
                <Button>Profile</Button>
            </Link>
          ):(
            <Link href="/auth">
              <Button>Login</Button>
            </Link>
          )}
        </div>
      </div>
    </Navbar>
  );
};

export default Header;
