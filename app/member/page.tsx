'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

import { Typography, Button } from '@material-tailwind/react';

const membersData: { [key: string]: { name: string; image: string; description: string } } = {
  '1': {
    name: 'TOYOTA カローラ123',
    image: '/pic1.png',
    description: '2,400,000円（税込）、JC08モード-WLTCモード33.6km/L、乗車定員5名',
  },
  '2': {
    name: 'TOYOTA カローラ123',
    image: '/pic2.png',
    description: '2,400,000円（税込）、JC08モード-WLTCモード33.6km/L、乗車定員5名',
  },
  '3': {
    name: 'TOYOTA カローラ123',
    image: '/pic3.png',
    description: '2,400,000円（税込）、JC08モード-WLTCモード33.6km/L、乗車定員5名',
  },
};

const MemberDetail = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get('id') ?? '';
  const member = membersData[id];

  return (
    <div className='m-16 p-8 bg-white'>
      {member && (
        <div>
          <div className='flex flex-row items-center'>
            <Image src={member.image} alt={`Member ${id}`} width={500} height={500} />
            <div>
              <Typography variant='h2' className='mb-8'>{member.name}</Typography>
              <Typography variant='h4' className='mb-8'>{member.description}</Typography>
              <Typography  className='mb-8'>{member.description}</Typography>
            </div>
          </div>
          <div className='flex justify-center items-center'>
            <Link href="/purchase" className='items-center'>
              <Button>購入する</Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default MemberDetail;
