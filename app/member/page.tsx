'use client';
import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { usePathname, useParams, useSearchParams } from 'next/navigation';

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
    <div>
      {member && (
        <>
          <img src={member.image} alt={`Member ${id}`} />
          <h3>{member.name}</h3>
          <p>{member.description}</p>
          <p>
            操作系,本革巻き3本スポークステアリングホイール（シルバー塗装）,シート,フロントシート（ヘッドレストセパレート型）空調,オートエアコン（電動インバーターコンプレッサー）＆クリーンエアフィルター（花粉除去＆脱臭機能付）
          </p>
          <Link href="/purchase">
            <button>購入する</button>
          </Link>
        </>
      )}
    </div>
  );
};

export default MemberDetail;
