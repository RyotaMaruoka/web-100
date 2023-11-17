'use client';

import { FC, ReactNode } from 'react';
import { MUIProvider } from './MUIProvider';
import { RecoilProvider } from './RecoilProvider';
import { MetamaskProviders } from './MetaMaskProviders';

type Props = {
  children: ReactNode;
};

export const Providers: FC<Props> = ({ children }) => {
  return (
    <RecoilProvider>
      <MetamaskProviders>
        <MUIProvider>{children}</MUIProvider>
      </MetamaskProviders>
    </RecoilProvider>
  );
};
