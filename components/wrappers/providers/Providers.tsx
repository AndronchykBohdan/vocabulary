'use client';
import { SessionProvider } from 'next-auth/react';

import { IPropsWithChildren } from '@/shared/propsWithChildren.interface';

const Providers = ({ children }: IPropsWithChildren) => {
  return (
    <SessionProvider>
      {children}
    </SessionProvider>
  );
};

export { Providers };