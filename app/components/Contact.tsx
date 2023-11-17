import React from 'react';
import styles from './Contact.module.css';

import { Button, Typography} from '@material-tailwind/react';

const Contact = () => {
  return (
    <div className='text-center'>
      <Typography variant='h4' className='mb-5'>お問い合わせ</Typography>
      <Typography variant='paragraph' className='mb-5'>お問い合わせに関しましては以下のフォームからお願いします。</Typography>
      <Button>フォームはこちらから</Button>
    </div>
  );
};

export default Contact;
