import { ThemeProvider } from '@material-tailwind/react';
import { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export const MUIProvider: FC<Props> = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};
