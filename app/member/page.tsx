'use client';
import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { usePathname, useParams, useSearchParams } from 'next/navigation';

const membersData: { [key: string]: { name: string; image: string; description: string } } = {
  '1': {
    name: 'メンバー名 1',
    image: '/5041bcd55df515cf10de7204887a4ad6_t.jpeg',
    description: 'メンバー 1 の説明文。',
  },
  '2': {
    name: 'メンバー名 2',
    image: '/6e912d872ab6c82767ba318b000c5273_t.jpeg',
    description: 'メンバー 2 の説明文。',
  },
  '3': {
    name: 'メンバー名 3',
    image: '/d3902a1cc7d317e26d71efc645791fa5_t.jpeg',
    description: 'メンバー 3 の説明文。',
  },
};

const MemberDetail = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get('id') ?? '';
  const member = membersData[id];

  return (
    <div>
      {member && (
        <>
          <img src={member.image} alt={`Member ${id}`} />
          <h3>{member.name}</h3>
          <p>{member.description}</p>
          <Link href="/purchase">
            <button>購入ページへ</button>
          </Link>
        </>
      )}
    </div>
  );
};

export default MemberDetail;
