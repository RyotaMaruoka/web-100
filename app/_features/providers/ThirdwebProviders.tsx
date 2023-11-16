import { FC, ReactNode } from 'react';
import { ThirdwebProvider } from '@thirdweb-dev/react';
import { env } from '../env/env';

type Props = {
  children: ReactNode;
};

export const ThirdwebProviders: FC<Props> = ({ children }) => {
  return (
    <ThirdwebProvider
      activeChain="ethereum"
      clientId={env.THIRDWEB_AUTH_CLIENT_ID}
      authConfig={{
        domain: env.THIRDWEB_AUTH_DOMAIN,
        authUrl: env.THIRDWEB_AUTH_DOMAIN,
      }}
    >
      {children}
    </ThirdwebProvider>
  );
};
