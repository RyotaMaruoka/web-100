import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { Button, CardHeader,
  CardBody,
  CardFooter,Typography, Card } from '@material-tailwind/react';


const Car = () => {
  const cars = [
    { id: 1, imgSrc: '/pic1.png', title: 'TOYOTA カローラ123', price: '2,400,000円（税込）', efficiency: 'JC08モード-WLTCモード33.6km/L', capacity: '乗車定員5名' },
    { id: 2, imgSrc: '/pic2.png', title: 'TOYOTA カローラ123', price: '2,400,000円（税込）', efficiency: 'JC08モード-WLTCモード33.6km/L', capacity: '乗車定員5名' },
    { id: 3, imgSrc: '/pic3.png', title: 'TOYOTA カローラ123', price: '2,400,000円（税込）', efficiency: 'JC08モード-WLTCモード33.6km/L', capacity: '乗車定員5名' },
  ];

  return (
    <div>
      <Typography variant='h3' className='text-center mb-8'>分割購入できる車一覧</Typography>
      <div className='flex flex-wrap items-center justify-center gap-8'>
        {cars.map((car) => (
          <Link href={`/member?id=${car.id}`} key={car.id}>
            <Card className='hover:bg-blue-300'>
              <CardBody className='items-center'>
                <Image src={car.imgSrc} alt={`Member ${car.id}`} width={250} height={250} />
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {car.title}
                </Typography>
                <Typography>{`${car.price}`}</Typography>
                <Typography>{`${car.efficiency}`}</Typography>
                <Typography>{`${car.capacity}`}</Typography>
              </CardBody>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};


export default Car;
