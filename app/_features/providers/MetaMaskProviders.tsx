import { FC, ReactNode } from 'react';
import { MetaMaskProvider } from '@metamask/sdk-react';

type Props = {
  children: ReactNode;
};

export const MetamaskProviders: FC<Props> = ({ children }) => {
  const url = window.location.host;

  return (
    <MetaMaskProvider
      debug={false}
      sdkOptions={{
        checkInstallationImmediately: false,
        dappMetadata: {
          name: 'web-100',
          url,
        },
      }}
    >
      {children}
    </MetaMaskProvider>
  );
};
