import { FC, ReactNode } from 'react';
import { ThirdwebProvider } from '@thirdweb-dev/react';

type Props = {
  children: ReactNode;
};

export const ThirdwebProviders: FC<Props> = ({ children }) => {
  return <ThirdwebProvider activeChain="ethereum">{children}</ThirdwebProvider>;
};
