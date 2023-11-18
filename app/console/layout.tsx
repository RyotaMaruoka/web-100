'use client';
import { NextPage } from 'next';
import { ReactNode } from 'react';
import { Container } from '@mui/material';

type Props = {
  children: ReactNode;
};

const ConsoleLayoutPage: NextPage<Props> = ({ children }) => {
  return (
    <Container
      maxWidth="sm"
      style={{
        height: '100vh',
        width: '100vw',
        background: 'linear-gradient(to bottom right , #FCFFE7, #F0FFFF)',
      }}
    >
      {children}
    </Container>
  );
};

export default ConsoleLayoutPage;
