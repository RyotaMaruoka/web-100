import { FC, ReactNode } from 'react';
import { MetaMaskProvider } from '@metamask/sdk-react';
import { env } from '../env/env';

type Props = {
  children: ReactNode;
};

export const MetamaskProviders: FC<Props> = ({ children }) => {
  return (
    <MetaMaskProvider
      debug={false}
      sdkOptions={{
        checkInstallationImmediately: false,
        dappMetadata: {
          name: 'web-100',
          url: env.THIRDWEB_AUTH_DOMAIN,
        },
      }}
    >
      {children}
    </MetaMaskProvider>
  );
};
