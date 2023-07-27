'use client';
import { SessionProvider } from 'next-auth/react';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import { IPropsWithChildren } from '@/shared/propsWithChildren.interface';
import { queryClient } from '@/configs/quaryClient';
import { SessionChecker } from '@/components/wrappers/sessionChecker';

const Providers = ({ children }: IPropsWithChildren) => {
  return (
    <SessionProvider>
      <QueryClientProvider client={queryClient}>
        <SessionChecker>
          {children}
        </SessionChecker>

        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </SessionProvider>
  );
};

export { Providers };