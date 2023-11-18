'use client';

import { FC, ReactNode } from 'react';
import React from 'react';

type Props = {
  children: ReactNode;
};

export const AuthProviders: FC<Props> = ({ children }) => {
  return <>{children}</>;
};
