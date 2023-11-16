'use client';

import { FC, ReactNode } from 'react';
import { MUIProvider } from './MUIProvider';
import { RecoilProvider } from './RecoilProvider';
import { ThirdwebProviders } from './ThirdwebProviders';

type Props = {
  children: ReactNode;
};

export const Providers: FC<Props> = ({ children }) => {
  return (
    <RecoilProvider>
      <ThirdwebProviders>
        <MUIProvider>{children}</MUIProvider>
      </ThirdwebProviders>
    </RecoilProvider>
  );
};
