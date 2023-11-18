'use client';

import { FC, ReactNode } from 'react';
import { MUIProvider } from './MUIProvider';
import { RecoilProvider } from './RecoilProvider';
import { MetamaskProviders } from './MetaMaskProviders';
import { AuthProviders } from './AuthProviders';

type Props = {
  children: ReactNode;
};

export const Providers: FC<Props> = ({ children }) => {
  return (
    <RecoilProvider>
      <MetamaskProviders>
        <MUIProvider>
          <AuthProviders>{children}</AuthProviders>
        </MUIProvider>
      </MetamaskProviders>
    </RecoilProvider>
  );
};
