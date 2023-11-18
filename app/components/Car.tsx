import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { Button, CardHeader, CardBody, Typography, Card } from '@material-tailwind/react';

const Car = () => {
  const cars = [
    {
      id: 1,
      imgSrc: '/2151864_s.jpg',
      title: 'TOYOTA カローラ123',
      price: '2,400,000円（税込）',
      efficiency: 'JC08モード-WLTCモード33.6km/L',
      capacity: '乗車定員5名',
    },
    {
      id: 2,
      imgSrc: '/2281468_s.jpg',
      title: 'TOYOTA カローラ123',
      price: '2,400,000円（税込）',
      efficiency: 'JC08モード-WLTCモード33.6km/L',
      capacity: '乗車定員5名',
    },
    {
      id: 3,
      imgSrc: '/3258921_s.jpg',
      title: 'TOYOTA カローラ123',
      price: '2,400,000円（税込）',
      efficiency: 'JC08モード-WLTCモード33.6km/L',
      capacity: '乗車定員5名',
    },
  ];

  return (
    <div>
      <Typography variant="h3" className="text-center mb-8">
        分割購入できる車一覧
      </Typography>
      <div className="flex flex-wrap items-center justify-center gap-8">
        {cars.map((car) => (
          <Link href={`/member?id=${car.id}`} key={car.id}>
            <Card
              className="hover:bg-gray-400"
              style={{
                border: '0.5px solid #E5E7EB',
              }}
            >
              <CardBody className="items-center">
                <Image src={car.imgSrc} alt={`Member ${car.id}`} width={250} height={250} />
                <div className="my-4">
                  <Typography variant="h5" color="blue-gray" className="mb-2">
                    {car.title}
                  </Typography>
                  <Typography>{`${car.price}`}</Typography>
                  <Typography>{`${car.efficiency}`}</Typography>
                  <Typography>{`${car.capacity}`}</Typography>
                </div>
              </CardBody>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Car;
