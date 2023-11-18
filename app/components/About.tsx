import React from 'react';
import Image from 'next/image';
import { Input, Checkbox, Typography, Button } from '@material-tailwind/react';

const About = () => {
  return (
    <div id="about" style={{
      backgroundImage: "url('/about.png')",
      backgroundPosition: 'bottom',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      height: '50vh',
      width: '100vw',
    }}>
      <div className='p-16'>
        <Typography color='white' variant='h4' className='mb-4'>Not a Car</Typography>
        <Typography color='white' variant='h1' className='mb-8'>偶然を、ドライブする日に</Typography>
        <Typography color='white' variant='paragraph' className='invisible md:visible'>
          Not A Carは、NFT技術を活用して車の分割所有を実現する独特のプラットフォームです。<br />
          このシステムでは、高価な車両がデジタル証明書に変換され、複数のオーナーによって共有されます。<br />
          ブロックチェーン技術により、取引の透明性と安全性が保証され、オーナーは共有車両の利用と管理を容易に行えます。<br />
          Not A Carは、自動車愛好家や投資家にとって新しい車の所有の形を提供し、車の楽しみ方を再定義しています。
        </Typography>
      </div>
    </div>
  );
};

export default About;
